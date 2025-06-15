var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, a) {
    e != Array.prototype && e != Object.prototype && (e[t] = a.value)
}, $jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(e, t, a, s) {
    if (t) {
        for (a = $jscomp.global, e = e.split("."), s = 0; s < e.length - 1; s++) {
            var n = e[s];
            n in a || (a[n] = {}), a = a[n]
        }(t = t(s = a[e = e[e.length - 1]])) != s && null != t && $jscomp.defineProperty(a, e, {
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
        var a = this;
        a instanceof String && (a = String(a));
        var s = a.length;
        for (0 > (t = t || 0) && (t = Math.max(t + s, 0)); t < s; t++) {
            var n = a[t];
            if (n === e || Object.is(n, e)) return !0
        }
        return !1
    }
}), "es7", "es3"), $jscomp.checkStringArgs = function(e, t, a) {
    if (null == e) throw new TypeError("The 'this' value for String.prototype." + a + " must not be null or undefined");
    if (t instanceof RegExp) throw new TypeError("First argument to String.prototype." + a + " must not be a regular expression");
    return e + ""
}, $jscomp.polyfill("String.prototype.includes", (function(e) {
    return e || function(e, t) {
        return -1 !== $jscomp.checkStringArgs(this, e, "includes").indexOf(e, t || 0)
    }
}), "es6", "es3"), $jscomp.polyfill("Array.prototype.fill", (function(e) {
    return e || function(e, t, a) {
        var s = this.length || 0;
        for (0 > t && (t = Math.max(0, s + t)), (null == a || a > s) && (a = s), 0 > (a = Number(a)) && (a = Math.max(0, s + a)), t = Number(t || 0); t < a; t++) this[t] = e;
        return this
    }
}), "es6", "es3"), (window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        1e3: function(e, t) {
            nge.appNS = "Buffalo", nge.App[nge.appNS] = {}
        },
        1001: function(e, t, a) {
            nge.realPathPrefix = "../../", nge.appPath = "app/buffalo.10/", nge.gameCode = "190", nge.loaderTpl = "netgame", nge.loaderShowGamePreview = !1, nge.loadCfg = []
        },
        1002: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.DjGameBase.Run.extend((function() {
                var e = [1];
                nge.App.addSysInstancesMode("SlimJackpot"), nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang);
                var t = nge.Cfg.Main.lang;
                nge.Lib.Helper.makeReactive(nge.Cfg.Main, "lang", (function(e) {
                    nge.App.removeSysInstancesMode("lang_" + t), nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang), t = e
                })), this.run = function() {
                    this.runDefault(), nge.localData.set("lines.cfg", e), nge.localData.set("ways", 1024)
                }, nge.App.DjGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.DjGameBase, nge.App[nge.appNS])), this.applyClassicGameBase(), this.statesReplacements.play.push("background", "bigWin", "spinButtonAnimation", "totems", "popup"), this.statesReplacements.bonusWheel = "layersSwitcher intro autospin balance bet coins credits settingsSimple creditsTotalBet currencySwitcher betSettings debug help fullscreen lines odometer settingsScreen spaceHandler totalBet winField infoSwipe info bonusWheel popup background win totems spinButtonAnimation buttons quickSettingsPanel".split(" ")
            })), nge.Cfg.Main.project = "buffalo", nge.Cfg.Main.title = "Wild Buffalo", nge.Cfg.Main.gameCode = "190", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.10"
        },
        1003: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        1004: function(e, t) {
            nge.App[nge.appNS].Cfg.Spine = nge.Cfg.Spine.extend((function() {
                this.preloadForStates = {
                    play: [{
                        spineName: "M12_000_Anim",
                        animationName: "landing"
                    }, {
                        spineName: "bigWinAnim",
                        animationName: "big_win_start_9s"
                    }, {
                        spineName: "bigWinAnim",
                        animationName: "big_win_end_3_6_9"
                    }, {
                        spineName: "bigWinAnim",
                        animationName: "big_win_loop"
                    }, {
                        spineName: "bigWinFlareAnim",
                        animationName: "count_flare"
                    }, {
                        spineName: "popupSpineBackground",
                        animationName: "popup_appear"
                    }, {
                        spineName: "popupSpineBackground",
                        animationName: "popup_loop"
                    }, {
                        spineName: "popupSpineBackground",
                        animationName: "popup_disappear"
                    }],
                    bonusWheel: []
                }, this.preloadForEvents = []
            }))
        },
        1005: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    bs_wheel_spin_0: "game:/sounds/reel_spin",
                    reels_stop_0: "game:sounds/bs_bn_wheel_stop_0",
                    reels_stop_1: "game:sounds/bs_bn_wheel_stop_1",
                    reels_stop_2: "game:sounds/bs_bn_wheel_stop_2",
                    reels_stop_3: "game:sounds/bs_bn_wheel_stop_3",
                    reels_stop_4: "game:sounds/bs_bn_wheel_stop_4",
                    bs_background: "game:sounds/ambient_basic_game",
                    bn_background: "game:sounds/ambient_free_spins",
                    intro_sound: "game:sounds/intro_embient",
                    big_win: "game:/sounds/big_win",
                    big_win_start: "game:/sounds/big_win_start",
                    big_win_ending: "game:/sounds/big_win_end",
                    intro_big_win: "game:/sounds/intro_big_win",
                    buffalo_start_finish: "game:/sounds/buffalo_start_finish",
                    buffalo_loop: "game:/sounds/buffalo_loop",
                    end_freespins_popup: "game:/sounds/end_fs_popup",
                    additional_fs_pop_up: "game:/sounds/additional_fs_pop_up",
                    popup_disappear: "game:/sounds/popup_disappear",
                    hover_0: "game:sounds/default_btn_hover",
                    hover_1: "game:sounds/default_btn_hover",
                    hover_2: "game:sounds/default_btn_hover",
                    hover_3: "game:sounds/default_btn_hover",
                    click: "game:sounds/default_btn",
                    spin_click: "game:/sounds/button_start",
                    spin_stop: "game:/sounds/button_stop",
                    scatter_0: "game:sounds/scatter_drop_1",
                    scatter_1: "game:sounds/scatter_drop_2",
                    scatter_2: "game:sounds/scatter_drop_3",
                    scatter_3: "game:sounds/scatter_drop_4",
                    scatter_4: "game:sounds/scatter_drop_5",
                    sr_bell: "game:sounds/bell",
                    spinification: "game:sounds/near_win_intriga",
                    win_regularWinHigh: "game:/sounds/sr_win_2",
                    win_regularWinMid: "game:sounds/sr_win_1",
                    win_regularWinLow: "game:sounds/sr_win_0",
                    totem_throwing: "game:sounds/javelin-throwing",
                    totem_win: "game:sounds/totem_win",
                    lightning: "game:sounds/lightning",
                    popup_multiply_jackpot: "game:sounds/popup_multiply_jackpot",
                    wheel_background: "game:sounds/bonus_wheel_background",
                    wheelBonus_win_popup: "game:sounds/end_bonus_wheel_popup",
                    wheelBonus_start_popup: "game:sounds/open_bonus_wheel_popup",
                    wheelBonus_jackpot_popup: "game:sounds/bonus_wheel_mini_jackpots_popup",
                    wheel_start: "game:sounds/wheel_screech_start",
                    wheel_rotate: "game:sounds/wheel_screech_loop",
                    wheel_stop: "game:sounds/wheel_screech_finish",
                    jackpot_online_background: "game:sounds/jackpot_online_background",
                    jackpot_online_coincidence_1: "game:sounds/jackpot_online_coincidence_1",
                    jackpot_online_coincidence_2: "game:sounds/jackpot_online_coincidence_2",
                    jackpot_online_coincidence_3: "game:sounds/jackpot_online_coincidence_3",
                    jackpot_online_finish_jackpot_popup: "game:sounds/jackpot_online_finish_jackpot_popup",
                    jackpot_online_won_jackpot_movie: "game:sounds/jackpot_online_won_jackpot_movie"
                }
            }))
        },
        1006: function(e, t) {
            nge.App[nge.appNS].Com = {}
        },
        1007: function(e, t) {
            nge.App[nge.appNS].Com.Autospin = {}
        },
        1008: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.Controller = nge.App.DjGameBase.Com.Autospin.Controller.extend((function() {
                this.autospinRunExceptions.push((function() {
                    return nge.localData.get("bonusWon")
                }))
            }))
        },
        1009: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.View = nge.App.DjGameBase.Com.Autospin.View.extend((function() {
                this.firstPanelElementTopYOffset = 8, this.yPanelOffset = 20, this.infinityTextYOffset = 8
            }))
        },
        1010: function(e, t) {
            nge.App[nge.appNS].Com.Background = {}
        },
        1011: function(e, t) {
            nge.App[nge.appNS].Com.Background.Controller = nge.Com.Base.extend((function() {
                function e(e, t, a, s, n, l, o, i, p) {
                    return e = nge.Mlm.Objects.Spine({
                        assetKey: e,
                        name: t,
                        x: a,
                        y: s,
                        isVisible: !1
                    }), n = nge.findOne("^" + n), n = nge.objects.create(e, n, !0), l && n.setAnimationByName(0, l, o, i), n
                }

                function t(t, a, s) {
                    r = e("slot_machine_frame", "bg_spine_slot_machine_frame", 960, 540, t, a, !0, !1)
                }

                function a(t, a) {
                    m = e("slot_machine_front_grass", "bg_spine_slot_machine_front_grass", 960, 540, t, a, !0)
                }

                function s() {
                    nge.localData.get("freespin.inProgress") || u.setAnimationByName(0, "glow")
                }

                function n() {
                    nge.localData.get("freespin.inProgress") || u.setAnimationByName(0, "glow"), nge.localData.get("freespin.inProgress") && y.setAnimationByName(0, "fs_glow_win")
                }

                function l() {
                    c.setAnimationByName(0, "win_counter_fx")
                }

                function o(s) {
                    e("bg_clouds", "bg_spine_clouds", 960, 540, "cloudsAnimationContainer", "clouds", !0), "play" === s ? (u = e("logs_glow", "bg_spine_logs_glow", 960, 540, "slotMachineFrameAnimationContainer"), t("slotMachineFrameAnimationContainer", "bg_idle"), a("frontGrassAnimationContainer", "bg_idle"), c = e("win_counter", "bg_spine_win_counter", 960, 540, "slotMachineFrameContainer"), y = e("fs_background_glow", "bg_spine_fs_glow", 960, 540, "fsGlowAnimationContainer")) : "bonusWheel" === s && (u = e("logs_glow_bonus", "bg_spine_logs_glow", 960, 540, "bonusWheelFrameAnimationContainer"), t("bonusWheelFrameAnimationContainer", "bg_idle_bonus"), a("bonusWheelContainer", "bg_idle_bonus"))
                }

                function i(e) {
                    "gameFreeSpin" === e ? r.setAnimationByName(0, "bg_idle_fs_mode", !0, !1, 1.15) : ("game" === e || "freespinEndPopup" === e) && r.setAnimationByName(0, "bg_idle", !0, !1, 1)
                }

                function p() {
                    u.setAnimationByName(0, "bonus_glow")
                }
                var r, u, m, y, c, h = this,
                    g = !1;
                this.create = function() {
                    this.createDefault(), g || (h.subscribe(), g = !0)
                };
                var b = function() {
                    r.stop(!0), m.stop(!0)
                };
                this.subscribe = function() {
                    nge.observer.add("layersSwitcher.switched", i), nge.observer.add("StatesManager.create.end", o), nge.observer.add("winlines.lineHighlite.start", s), nge.observer.add("winlines.animateAll", n), nge.observer.add("win.regularWin.startShow", l), nge.observer.add("bonusWheel.stopped", p), nge.observer.add("Transport.close", b)
                }
            }))
        },
        1012: function(e, t) {
            nge.App[nge.appNS].Com.Background.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {}
                }
            }
        },
        1013: function(e, t) {
            nge.App[nge.appNS].Com.BetSettings = {}
        },
        1014: function(e, t) {
            nge.App[nge.appNS].Com.BetSettings.Controller = nge.App.DjGameBase.Com.BetSettings.Controller.extend((function() {
                var e = this;
                this.setSliderValue = function(t) {
                    var a = nge.localData.get(t),
                        s = e.sliders[t].obj;
                    if (a && s) {
                        var n = a.cfg ? a.cfg[0] : a.value,
                            l = n || 0,
                            o = a.cfg && a.cfg.length ? a.cfg[a.cfg.length - 1] : a.value;
                        o = o || 0, "lines" === t && (o = o = l = n = 1024);
                        var i = nge.findOne(".".concat(t, "Minimum")),
                            p = nge.findOne(".".concat(t, "Maximum"));
                        i && (i.text = l), p && (p.text = o), a.cfg || (a.cfg = [], a.cfg.push(a.value)), s.toggleBgInput(!0), "lines" === t ? s.setValuesRange([n], n) : s.setValuesRange(a.cfg, a.value), s.setOnDrag((function(e) {
                            a.value !== e && (nge.observer.fire(t.concat(".set"), e), nge.observer.fire("denom_change.play"))
                        })), s.setOnChange((function() {}))
                    }
                }
            }))
        },
        1015: function(e, t) {
            nge.App[nge.appNS].Com.BonusWheel = {}
        },
        1016: function(e, t) {
            nge.App[nge.appNS].Com.BonusWheel.Cfg = nge.App.DjGameBase.Com.BonusWheel.Cfg.extend((function() {
                this.params.wheels = [{
                    containerSelector: "^bonusWheel1Container",
                    centerSelector: "^wheel1Center",
                    pointerAngle: 0
                }, {
                    containerSelector: "^bonusWheel2Container",
                    centerSelector: "^wheel2Center",
                    pointerAngle: 0
                }], this.params.popups = [], this.params.wheel1Sectors = [{
                    index: 0,
                    type: "freespins",
                    value: 12,
                    subType: ""
                }, {
                    index: 1,
                    type: "jackpot",
                    value: "MINI",
                    subType: "bonusWheel"
                }, {
                    index: 2,
                    type: "freespins",
                    value: 15,
                    subType: ""
                }, {
                    index: 3,
                    type: "jackpot",
                    value: "MAJOR",
                    subType: ""
                }, {
                    index: 4,
                    type: "freespins",
                    value: 10,
                    subType: ""
                }, {
                    index: 5,
                    type: "jackpot",
                    value: "MINOR",
                    subType: "bonusWheel"
                }, {
                    index: 6,
                    type: "freespins",
                    value: 8,
                    subType: ""
                }, {
                    index: 7,
                    type: "jackpot",
                    value: "SUPER",
                    subType: "bonusWheel"
                }, {
                    index: 8,
                    type: "freespins",
                    value: 12,
                    subType: ""
                }, {
                    index: 9,
                    type: "jackpot",
                    value: "MINI",
                    subType: ""
                }, {
                    index: 10,
                    type: "freespins",
                    value: 15,
                    subType: ""
                }, {
                    index: 11,
                    type: "jackpot",
                    value: "MAJOR",
                    subType: "bonusWheel"
                }, {
                    index: 12,
                    type: "freespins",
                    value: 10,
                    subType: ""
                }, {
                    index: 13,
                    type: "jackpot",
                    value: "MINOR",
                    subType: ""
                }, {
                    index: 14,
                    type: "freespins",
                    value: 8,
                    subType: ""
                }, {
                    index: 15,
                    type: "jackpot",
                    value: "SUPER",
                    subType: ""
                }], this.params.wheel2Sectors = [{
                    index: 0,
                    type: "mult",
                    value: 3
                }, {
                    index: 1,
                    type: "mult",
                    value: 6
                }, {
                    index: 2,
                    type: "mult",
                    value: 2
                }, {
                    index: 3,
                    type: "mult",
                    value: 7
                }, {
                    index: 4,
                    type: "mult",
                    value: 5
                }, {
                    index: 5,
                    type: "mult",
                    value: 2
                }, {
                    index: 6,
                    type: "mult",
                    value: 4
                }, {
                    index: 7,
                    type: "mult",
                    value: 10
                }, {
                    index: 8,
                    type: "mult",
                    value: 3
                }, {
                    index: 9,
                    type: "mult",
                    value: 6
                }, {
                    index: 10,
                    type: "mult",
                    value: 2
                }, {
                    index: 11,
                    type: "mult",
                    value: 7
                }, {
                    index: 12,
                    type: "mult",
                    value: 5
                }, {
                    index: 13,
                    type: "mult",
                    value: 2
                }, {
                    index: 14,
                    type: "mult",
                    value: 4
                }, {
                    index: 15,
                    type: "mult",
                    value: 10
                }], this.params.loopTime = 1600, this.params.minLoops = 2, this.params.speedUpAngle = 60, this.params.speedUpTime = 1550, this.params.slowDownAngle = 260, this.params.slowDownTime = 6e3
            }))
        },
        1017: function(e, t) {
            nge.App[nge.appNS].Com.BonusWheel.Controller = nge.App.DjGameBase.Com.BonusWheel.Controller.extend((function() {
                function e(e) {
                    e.alpha = 0, e.visible = !0, nge.tween.add(e).to({
                        alpha: 1
                    }, 500, nge.Lib.Tween.Easing.Default, !0).start()
                }

                function t() {
                    var e = nge.tween.add(p).to({
                        alpha: 0
                    }, 500, nge.Lib.Tween.Easing.Default, !0);
                    e.onComplete.addOnce((function() {
                        p.visible = !1
                    })), e.start()
                }

                function a() {
                    var e = nge.tween.add(r).to({
                        alpha: 0
                    }, 500, nge.Lib.Tween.Easing.Default, !0);
                    e.onComplete.addOnce((function() {
                        p.visible = !1
                    })), e.start()
                }

                function s() {
                    c.visible = !1
                }
                var n, l, o, i, p, r, u, m, y, c, h, g = this,
                    b = 0,
                    x = 0,
                    f = 0,
                    _ = [],
                    d = [11, 55, 100, 144, -170, -126, -81, -35],
                    N = {
                        3: [12, 15, 10, 8, 12, 15, 10, 8],
                        4: [25, 30, 20, 15, 25, 30, 20, 15],
                        5: [40, 50, 30, 20, 40, 50, 30, 20]
                    },
                    S = !1,
                    T = 0,
                    B = !1,
                    w = function(t) {
                        var a = nge.localData.get("bonusWheel.stage");
                        nge.observer.fire("lightning.sound.play"), 1 === a ? (h.setAnimationByName(0, "wheel_big_win_fx"), e(p)) : 2 === a && (h.setAnimationByName(0, "wheel_small_win_fx"), e(r)), h.onComplete.addOnce((function() {
                            nge.observer.fire("bonusWheel.checkStage", t, 1)
                        })), S = !1, nge.localData.set("bonusWheel.spinning", !1)
                    };
                this.create = function() {
                    if (this.super.create(), n = l = null, S = !1, o = nge.findOne("^bonusWheel1Container"), i = nge.findOne("^bonusWheel2Container"), (p = nge.findOne("^bonusWheel1Shadow")).visible = !1, (r = nge.findOne("^bonusWheel2Shadow")).visible = !1, o.angle = -11.5, nge.localData.get("bonusWheel.bigWheel.sectorIndex")) {
                        var e = nge.localData.get("bonusWheel.bigWheel.sectorIndex");
                        e = 22.5 * g.getSectorAngle(16, e), o.angle = e + 10.575, p.visible = !0
                    }
                    i.angle = -11.5, (u = nge.findOne("^pointer1")).anchor.y = .35, u.anchor.x = .51, u.x = 960, u.y = 380, (m = nge.findOne("^pointer2")).anchor.y = .35, m.anchor.x = .5, m.x = 961, m.y = 55, e = nge.Mlm.Objects.Spine({
                        assetKey: "bonus_wheel",
                        name: "bg_spine_bonus_wheel",
                        x: 960,
                        y: 540,
                        isVisible: !1
                    });
                    var t = nge.findOne("^bonusWheelWinAnimationContainer");
                    for (h = nge.objects.create(e, t, !0), (c = nge.findOne("^respinTextContainer", o)).visible = !0, nge.localData.get("bonusWheel.wheelResinAllowed") && (c.visible = "true" === nge.localData.get("bonusWheel.wheelResinAllowed"), nge.localData.set("bonusWheel.wheelResinAllowed", !1)), (_ = []).push(nge.findOne("^freeSpinsNumber", o)), e = 1; 8 > e; e++) _.push(nge.findOne("^freeSpinsNumber" + e, o));
                    for (e = 0; 8 > e; e++) _[e].angle = d[e];
                    for (t = nge.localData.get("bonusWheel.scattersCount") || 3, e = 0; 8 > e; e++) _[e].text = N[t][e];
                    y = 22.5, x = 0, nge.localData.set("bonusWheel.spinning", !1)
                }, this.update = function(e) {
                    if (S && l && n) {
                        if (e = n.angle % 360, 10 > Math.abs(x - e)) {
                            var t, a = l,
                                s = x > e ? -1 : 1,
                                o = e,
                                i = 0;
                            if (1 === s) {
                                for (t = 0; 16 > t; t++) {
                                    if (o > y * t - 2 && o < y * t + 2 && !B) {
                                        i = (-45 - f) * s;
                                        break
                                    }
                                    if (o > y * t - 8 && o < y * t + 4 && !B) {
                                        i = (-20 - f) * s;
                                        break
                                    }
                                }(o = Math.floor(o / y)) !== b && (i = (-45 - f) * s, b = o)
                            } else if (-1 === s)
                                for (350 < o && (o -= 360), t = 0; 16 > t; t++) {
                                    if (o > y * t - .2 && o < y * t + .2) {
                                        i = (-50 - f) * s;
                                        break
                                    }
                                    if (o > y * t - .4 && o < y * t + .4) {
                                        i = (-48 - f) * s;
                                        break
                                    }
                                    if (o > y * t - .8 && o < y * t + .8) {
                                        i = (-46 - f) * s;
                                        break
                                    }
                                    if (o > y * t - 1 && o < y * t + 1) {
                                        i = (-45 - f) * s;
                                        break
                                    }
                                    if (o > y * t - 2 && o < y * t + 2) {
                                        i = (-40 - f) * s;
                                        break
                                    }
                                    if (o > y * t - 2.5 && o < y * t + 2.5) {
                                        i = -30 * s;
                                        break
                                    }
                                    if (o > y * t - 3 && o < y * t + 3) {
                                        i = -20 * s;
                                        break
                                    }
                                    if (o > y * t - 4 && o < y * t + 4) {
                                        i = -10 * s;
                                        break
                                    }
                                    if (o > y * t - 5 && o < y * t + 5) {
                                        i = -5 * s;
                                        break
                                    }
                                }
                            a.angle = i
                        }
                        x = e
                    }
                }, this.correctFinalPosition = function(e) {
                    return 0 === T ? .47 * e : 1 === T ? .89 * e : void 0
                }, this.bonusWheelSpinStart = function(e) {
                    T = nge.Lib.Helper.getRandomInt(0, 1), this.super.bonusWheelSpinStart(e), nge.localData.set("bonusWheel.spinning", !0), nge.observer.fire("buttons.updateState")
                }, this.bonusWheel1SpinStart = function() {
                    this.super.bonusWheel1SpinStart(), nge.observer.fire("wheelStart.play"), b = Math.floor(o.angle % 360 / y), x = 0, l = u, n = o, f = 10, S = !0, B = !1
                }, this.bonusWheel2SpinStart = function() {
                    this.super.bonusWheel2SpinStart(), nge.observer.fire("wheelStart.play"), b = Math.floor(i.angle % 360 / y), x = 0, l = m, n = i, f = 0, S = !0, B = !1
                }, this.wheelSlowdownAnimation = function(e, t, a, s) {
                    0 === T ? ((e = nge.tween.add(t).to({
                        angle: a
                    }, 6e3, nge.Lib.Tween.Easing.Back.Out, !1)).onComplete.addOnce((function() {
                        s && s()
                    }), this), e.start()) : 1 === T && ((e = nge.tween.add(t).to({
                        angle: a
                    }, 6e3, nge.Lib.Tween.Easing.Quintic.Out, !1)).onUpdateCallback((function(e, n) {
                        .96 < n && .99 > n ? B = !0 : .99 < n && (S = !1, e.stop(), e = a - 9.9, (e = nge.tween.add(t).to({
                            angle: e
                        }, 2600, nge.Lib.Tween.Easing.Sinusoidal.Out, !1)).onComplete.addOnce((function() {
                            s && s()
                        }), this), e.start())
                    })), e.start())
                };
                var A = function() {
                    nge.localData.set("bonusWheel.spinning", !1)
                };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("bonusWheel.stopped", w), nge.observer.add("bonusWheel.bigWheel.tintHide", t), nge.observer.add("bonusWheel.smallWheel.tintHide", a), nge.observer.add("bonusWheel.respinPanel.hide", s), nge.observer.add("Transport.close", A)
                }
            }))
        },
        1018: function(e, t) {
            nge.App[nge.appNS].Com.BonusWheel.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {}
                }
            }
        },
        1019: function(e, t) {
            nge.App[nge.appNS].Com.Buttons = {}
        },
        1020: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Cfg = nge.App.DjGameBase.Com.Buttons.Cfg.extend((function() {
                delete this.params.freeSpinStart, delete this.params.finalPopup, this.bonusWheel = {
                    demoPlay: {
                        name: "demoPlay",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    autoStartArea: {
                        class: "autoStartCheckBox",
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    quickSettingsPanel: {
                        name: "quickSettingsPanelButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    fullscreen: {
                        name: "fullscreenButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    settings: {
                        name: "settingsButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    sound: {
                        name: "soundButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    paytable: {
                        name: "helpButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    changeCurrencyArea: {
                        class: "currencyChanger",
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    coinMinus: {
                        name: "coinMinusButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    coinPlus: {
                        name: "coinPlusButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    betMinus: {
                        name: "betMinusButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    betPlus: {
                        name: "betPlusButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    auto: {
                        name: "autoButton",
                        disableFrame: 4,
                        nonPixelPerfect: !1
                    },
                    maxBet: {
                        name: "maxBetButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: "MAX BET"
                    },
                    spin: {
                        name: "spinButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: "SPIN"
                    },
                    pageThreeTrigger: {
                        name: "pageThreeTriggerButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    pageTwoTrigger: {
                        name: "pageTwoTriggerButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    pageOneTrigger: {
                        name: "pageOneTriggerButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    mobileBackToGame: {
                        name: "mobileBackToGameButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    settingsSplashScreen: {
                        name: "settingsSplashScreenButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    settingsDisplayValuesInCoins: {
                        name: "settingsDisplayValuesInCoinsButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    settingsPressSpaceToSpin: {
                        name: "settingsPressSpaceToSpinButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    turboMode: {
                        name: "turboModeButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    infoNext: {
                        name: "infoNextButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    infoPrev: {
                        name: "infoPrevButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    linesChanger: {
                        name: "linesButtonArea",
                        nonPixelPerfect: !1,
                        title: ""
                    }
                }
            }))
        },
        1021: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile = {}
        },
        1022: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile.Cfg = nge.App.DjGameBase.Com.Buttons.Mobile.Cfg.extend((function() {
                delete this.params.freeSpinStart, delete this.params.finalPopup, this.bonusWheel = {
                    demoPlay: {
                        name: "demoPlay",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    autoStartArea: {
                        class: "autoStartCheckBox",
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    soundMobile: {
                        name: "soundMobileButton",
                        disableFrame: 1,
                        nonPixelPerfect: !0,
                        title: ""
                    },
                    paytable: {
                        name: "helpMobileButton",
                        disableFrame: 3,
                        nonPixelPerfect: !0,
                        title: ""
                    },
                    quickSettingsPanel: {
                        name: "quickSettingsPanelMobileButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    settings: {
                        name: "settingsMobileButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    changeCurrencyArea: {
                        class: "currencyChanger",
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    betSettingButtonMobile: {
                        name: "betSettingButtonMobile",
                        disableFrame: 3,
                        nonPixelPerfect: !0
                    },
                    betMinus: {
                        name: "betMinusButtonMobile",
                        disableFrame: 3,
                        nonPixelPerfect: !0,
                        title: ""
                    },
                    betPlus: {
                        name: "betPlusButtonMobile",
                        disableFrame: 3,
                        nonPixelPerfect: !0,
                        title: ""
                    },
                    autoSpinMobile: {
                        name: "autoSpinButtonMobile",
                        disableFrame: 1,
                        nonPixelPerfect: !0,
                        title: ""
                    },
                    spin: {
                        name: "spinButton",
                        disableFrame: 3,
                        nonPixelPerfect: !0,
                        title: ""
                    },
                    pageThreeTrigger: {
                        name: "pageThreeTriggerButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    pageTwoTrigger: {
                        name: "pageTwoTriggerButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    pageOneTrigger: {
                        name: "pageOneTriggerButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    mobileBackToGame: {
                        name: "mobileBackToGameButton",
                        disableFrame: 1,
                        title: ""
                    },
                    settingsSplashScreen: {
                        name: "settingsSplashScreenButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    settingsDisplayValuesInCoins: {
                        name: "settingsDisplayValuesInCoinsButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: ""
                    },
                    turboMode: {
                        name: "turboModeButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    infoNext: {
                        name: "infoNextButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    },
                    infoPrev: {
                        name: "infoPrevButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1
                    }
                }
            }))
        },
        1023: function(e, t) {
            nge.App[nge.appNS].Com.Load = {}
        },
        1024: function(e, t) {
            nge.App[nge.appNS].Com.Load.Cfg = nge.App.ClassicGameBase.Com.Load.Cfg.extend((function() {
                var e = nge.appPath + "css/fonts/",
                    t = nge.appPath + "img/fonts/";
                this.fonts = {}, this.fonts.futuraptheavy = e + "FuturaPT-Heavy", this.fonts.futuraptmedium = e + "FuturaPT-Medium", this.fonts.roboto_condensed_regular = e + "roboto_condensed_regular", this.fonts.segoe_ui_black = e + "segoe_UI_Black", this.fonts.adelle_cyrillic_heavy = e + "adelle_cyrillic_heavy", this.fonts.ifc_insane_rodeo_bold = e + "ifc_insane_rodeo_bold", this.fonts.futurasbl = e + "futurasbl", this.atlasesGroups = ["atlases", "atlases_play", "atlases_demo", "atlases_bonusWheel"], this.bitmapFonts = {
                    orange_font: {
                        textureURL: t + "orange_font.png",
                        bitmapFont: t + "orange_font.fnt"
                    },
                    flat_orange_font: {
                        textureURL: t + "flat_orange_font.png",
                        bitmapFont: t + "flat_orange_font.fnt"
                    },
                    jackpot_font: {
                        type: mt.assets.BITMAP_FONT,
                        textureURL: t + "jackpot_font.png",
                        bitmapFont: t + "jackpot_font.fnt"
                    }
                }
            }))
        },
        1025: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1026: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.DjGameBase.Com.SlotMachine.Cfg.extend((function() {
                this.params.th = [4, 4, 4, 4, 4], this.params.additionalBlurs = !1, this.params.mw = 5, this.params.mh = 4, this.params.wildSymbol = "0", this.params.tintDark = 10066329, this.params.tintNormal = 16777215, this.params.imageHeight = "original", this.params.imageWidth = "original", this.params.tintDarkAlpha = 1, this.params.tintNormalAlpha = 1, this.params.tweenDuration.blur = 40, this.params.tweenDuration.oldSymbols = 160, this.params.tweenDuration.newSymbols = 160, this.params.recyclerView.enabled = !0, this.params.recyclerView.reelsStopCounterBase = [20, 30, 40, 50, 60], this.params.recyclerView.reelsStopCounterBonus = [20, 30, 40, 50, 60], this.params.recyclerView.reelsStopCounter = [20, 30, 40, 50, 60], this.params.recyclerView.reelsSpeed = [2.6, 2.6, 2.6, 2.6, 2.6], this.params.recyclerView.reelsSpeedUpSpeed = 3, this.params.recyclerView.hideBorderSymbols = !0, this.params.recyclerView.borderSymbolsCount = 1, this.params.recyclerView.reelsIntrigueSpeed = [0, 0, 3.6, 3.9, 4.2], this.params.symbolsBlurKeys = ["101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "101 102 103 104 105 106 107 108 109 110 111 112".split(" ")], this.params.symbolsLanding = [{
                    symbol: "12",
                    assetKey: "M12_000_Anim",
                    animationName: "landing"
                }]
            }))
        },
        1027: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.DjGameBase.Com.SlotMachine.Controller.extend((function() {
                var e, t = this,
                    a = ["0", "0_x2", "0_x3"];
                this.create = function() {
                    this.super.create(), e = t._service._view, this.getInstance("Cfg").get(), e.getReels().forEach((function(e) {
                        for (var t = 0; 4 > t; t++) {
                            var s = e.getSymbolAt(t),
                                n = s.getName();
                            s.texture.textureZ = 0, -1 !== nge.localData.get("scatterSymbols").indexOf(n) && (s.texture.textureZ = 100), a.includes(n) && (s.texture.textureZ = 50 - 10 * t)
                        }
                        e.sort()
                    }))
                }
            }))
        },
        1028: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerReel = nge.Com.SlotMachine.RecyclerReel.extend((function() {
                var e = this,
                    t = ["0", "0_x2", "0_x3"];
                this.loadUpperSymbol = function(a) {
                    var s = e._templates[a],
                        n = s.textureZ ? s.textureZ : 0;
                    0 >= e._counter && 0 <= e._lastSymbols.length && ("12" === a ? n = 1e3 : t.includes(a) && (n = 50 - 10 * e._lastSymbols.length)), e._symbols[0].setSymbolCfg(s), e._symbols[0].texture.textureZ = n, e.sort()
                }
            }))
        },
        1029: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerView = nge.App.DjGameBase.Com.SlotMachine.RecyclerView.extend((function() {
                var e = this,
                    t = this,
                    a = 0;
                this.getIntrigueStopCounters = function() {
                    var a = Array(e._reels.length).fill(0),
                        s = nge.localData.get("slotMachineIntrigue");
                    if (!s || !s.status) return t.super.getIntrigueStopCounters();
                    s.endsFrom = s.endsFrom ? s.endsFrom : 1 / 0;
                    var n = [0, 0, 0, 0, 0];
                    2 === s.startsFrom ? n = [0, 0, 40, 45, 50] : 3 === s.startsFrom ? n = [0, 0, 0, 50, 60] : 4 === s.startsFrom && (n = [0, 0, 0, 0, 70]);
                    for (var l = 0; l < a.length; l++)
                        if (l >= s.startsFrom && l < s.endsFrom)
                            for (var o = l; o < a.length; o++) a[o] += n[o];
                    if (nge.localData.get("settings.turboMode"))
                        for (s = 0; s < a.length; s++) a[s] = Math.round(a[s] / 2);
                    return a
                }, this._checkIntrigue = function(t) {
                    var a = nge.localData.get("slotMachineIntrigue");
                    if (a && a.status) {
                        var s = t + 1;
                        if (!e._speedUp && s !== e._reels.length) {
                            var n = a.startsFrom;
                            a = a.endsFrom || e._reels.length;
                            for (var l = 0; l < e._reels.length; l++) e._reels[l].setSpeed();
                            s >= n && s < a && e._reels[t + 1].setSpeed(e._cfg.recyclerView.reelsIntrigueSpeed[t + 1])
                        }
                    }
                }, this.customReelStartCallback = function(e, s, n) {
                    a = 0;
                    var l = e.getContainer().y;
                    nge.rafSetTimeout((function() {
                        var a = nge.tween.add(e.getContainer());
                        a.to({
                            y: l
                        }, s + 1, nge.Lib.Tween.Easing.Linear.None, !1), a.to({
                            y: l - t.jumpDistance
                        }, t.jumpTimeUp + 1, nge.Lib.Tween.Easing.Linear.None, !1), a.to({
                            y: l
                        }, t.jumpTimeDown + 1, nge.Lib.Tween.Easing.Linear.None, !1), a.onComplete.add(n), a.start()
                    }), s)
                }, this.isPassAdditionalLandingRule = function(e, t) {
                    return t = !1, 0 <= e && 2 >= e ? t = !0 : 3 === e && 1 <= a ? t = !0 : 4 === e && 2 <= a && (t = !0), a++, t
                }
            }))
        },
        1030: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol0 = Class.extend((function() {
                var e, t;
                this.setContext = function(a) {
                    e = a, t = nge.findOne("^slotMachineWildAnimationContainer")
                }, this.textureAnimationShow = function(a, s) {
                    return s ? e.hideAnimation() : !!e.symbolWinAnimation && (e.changeTint(e.slotMachineCfg.tintNormal, e.slotMachineCfg.tintNormalAlpha, 0), e.landingAnimation && (e.landingAnimation.stop(!1, !1), e.landingAnimation.destroy(), e.landingAnimation = null), e.symbolWinAnimation.play({
                        name: e.spineAnimationName,
                        mode: nge.spine.FREEZE,
                        x: e.texture.x,
                        y: e.texture.y
                    }), e.symbolWinAnimation.textureZ = e.texture.textureZ + 100, t.add(e.symbolWinAnimation), e.symbolWinAnimation.x = e.texture.x + e.texture.parent.x, e.symbolWinAnimation.y = e.texture.y + e.texture.parent.y, e.symbolWinAnimation.updateTransform(), t.sort("textureZ"), e.texture.parent.sort("textureZ"), void(e.texture.visible = !1))
                }
            }))
        },
        1031: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol0_x2 = Class.extend((function() {
                var e, t;
                this.setContext = function(a) {
                    e = a, t = nge.findOne("^slotMachineWildAnimationContainer")
                }, this.textureAnimationShow = function(a, s) {
                    return s ? e.hideAnimation() : !!e.symbolWinAnimation && (e.changeTint(e.slotMachineCfg.tintNormal, e.slotMachineCfg.tintNormalAlpha, 0), e.landingAnimation && (e.landingAnimation.stop(!1, !1), e.landingAnimation.destroy(), e.landingAnimation = null), e.symbolWinAnimation.play({
                        name: e.spineAnimationName,
                        mode: nge.spine.FREEZE,
                        x: e.texture.x,
                        y: e.texture.y
                    }), e.symbolWinAnimation.textureZ = e.texture.textureZ + 100, t.add(e.symbolWinAnimation), e.symbolWinAnimation.x = e.texture.x + e.texture.parent.x, e.symbolWinAnimation.y = e.texture.y + e.texture.parent.y, e.symbolWinAnimation.updateTransform(), t.sort("textureZ"), e.texture.parent.sort("textureZ"), void(e.texture.visible = !1))
                }
            }))
        },
        1032: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol0_x3 = Class.extend((function() {
                var e, t;
                this.setContext = function(a) {
                    e = a, t = nge.findOne("^slotMachineWildAnimationContainer")
                }, this.textureAnimationShow = function(a, s) {
                    return s ? e.hideAnimation() : !!e.symbolWinAnimation && (e.changeTint(e.slotMachineCfg.tintNormal, e.slotMachineCfg.tintNormalAlpha, 0), e.landingAnimation && (e.landingAnimation.stop(!1, !1), e.landingAnimation.destroy(), e.landingAnimation = null), e.symbolWinAnimation.play({
                        name: e.spineAnimationName,
                        mode: nge.spine.FREEZE,
                        x: e.texture.x,
                        y: e.texture.y
                    }), e.symbolWinAnimation.textureZ = e.texture.textureZ + 100, t.add(e.symbolWinAnimation), e.symbolWinAnimation.x = e.texture.x + e.texture.parent.x, e.symbolWinAnimation.y = e.texture.y + e.texture.parent.y, e.symbolWinAnimation.updateTransform(), t.sort("textureZ"), e.texture.parent.sort("textureZ"), void(e.texture.visible = !1))
                }
            }))
        },
        1033: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbols = nge.Com.SlotMachine.Symbols.extend((function() {
                this.items = [{
                    name: "0",
                    textureUrl: "M00_000.png",
                    winlineTime: 1e3,
                    spine: {
                        wild: !0,
                        animation: "win",
                        atlas: "M00_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1
                }, {
                    name: "0_x2",
                    textureUrl: "M00_000_x2.png",
                    winlineTime: 1e3,
                    spine: {
                        wild: !0,
                        animation: "win",
                        atlas: "M00_000_Anim_x2"
                    },
                    animationOnTop: !1,
                    repeat: 1
                }, {
                    name: "0_x3",
                    textureUrl: "M00_000_x3.png",
                    winlineTime: 1e3,
                    spine: {
                        wild: !0,
                        animation: "win",
                        atlas: "M00_000_Anim_x3"
                    },
                    animationOnTop: !1,
                    repeat: 1
                }, {
                    name: "1",
                    textureUrl: "M01_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M01_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1
                }, {
                    name: "2",
                    textureUrl: "M02_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M02_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1
                }, {
                    name: "3",
                    textureUrl: "M03_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M03_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1
                }, {
                    name: "4",
                    textureUrl: "M04_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M04_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1
                }, {
                    name: "5",
                    textureUrl: "M05_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M05_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1
                }, {
                    name: "6",
                    textureUrl: "M06_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M06_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1,
                    tintAlpha: .7
                }, {
                    name: "7",
                    textureUrl: "M07_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M07_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1,
                    tintAlpha: .7
                }, {
                    name: "8",
                    textureUrl: "M08_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M08_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1,
                    tintAlpha: .7
                }, {
                    name: "9",
                    textureUrl: "M09_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M09_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1,
                    tintAlpha: .7
                }, {
                    name: "10",
                    textureUrl: "M10_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M10_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1,
                    tintAlpha: .7
                }, {
                    name: "11",
                    textureUrl: "M11_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M11_000_Anim"
                    },
                    animationOnTop: !1,
                    repeat: 1,
                    tintAlpha: .7
                }, {
                    name: "12",
                    textureUrl: "M12_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "win",
                        atlas: "M12_000_Anim"
                    },
                    animationOnTop: !0,
                    textureZ: 1e3,
                    repeat: 1
                }, {
                    name: "100",
                    textureUrl: "100.png",
                    animationFrames: ["100.png"]
                }, {
                    name: "100_x2",
                    textureUrl: "100_x2.png",
                    animationFrames: ["100_x2.png"]
                }, {
                    name: "100_x3",
                    textureUrl: "100_x3.png",
                    animationFrames: ["100_x3.png"]
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
                }, {
                    name: "108",
                    textureUrl: "108.png",
                    animationFrames: ["108.png"]
                }, {
                    name: "109",
                    textureUrl: "109.png",
                    animationFrames: ["109.png"]
                }, {
                    name: "110",
                    textureUrl: "110.png",
                    animationFrames: ["110.png"]
                }, {
                    name: "111",
                    textureUrl: "111.png",
                    animationFrames: ["111.png"]
                }, {
                    name: "112",
                    textureUrl: "112.png",
                    animationFrames: ["112.png"]
                }]
            }))
        },
        1034: function(e, t) {
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
                            id: "slotMachineGameContainer",
                            name: "slotMachineGameContainer",
                            width: 1160,
                            height: 800
                        }]
                    }
                }
            }
        },
        1035: function(e, t) {
            nge.App[nge.appNS].Com.SpaceHandler = {}
        },
        1036: function(e, t) {
            nge.App[nge.appNS].Com.SpaceHandler.Controller = nge.App.DjGameBase.Com.SpaceHandler.Controller.extend((function() {
                var e = this;
                this.extendDo = function() {
                    var t = e.super.extendDo();
                    return !(t || !(nge.localData.get("buffalo.spaceHandler.isBlocked") || nge.localData.get("bonusWheelWon") && "bonusWheel" !== nge.statesManager.getCurrentName())) || t
                }
            }))
        },
        1037: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher = {}
        },
        1038: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "winPopupContainer UISpinPanelsContainer UISpinPanel_Automatic_FreespinGame_Container UISpinPanel_Manual_FreespinGame_Container UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer UIFreespinWinContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgAreaFreeSpinsGlow bgArea slotMachineFrameBottomFreeSpinsA slotMachineFrameFreeSpinsLeft slotMachineFrameFreeSpinsRight slotMachineFrameFreeSpinsTop reelsBgFreeSpins bgAreaFreeSpins offersFreespinCounter offers1Container".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500,
                                    bgAlpha: .7
                                },
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea".split(" ")
                            },
                            gameFreeSpin: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500,
                                    bgAlpha: .7
                                },
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIFreespinWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomFreeSpinsA slotMachineFrameFreeSpinsLeft slotMachineFrameFreeSpinsRight slotMachineFrameFreeSpinsTop reelsBgFreeSpins bgAreaFreeSpinsGlow bgAreaFreeSpins".split(" ")
                            },
                            bonusWheelStartPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea".split(" ")
                            },
                            freespinEndPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIFreespinWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea offersFreespinCounter".split(" ")
                            },
                            fakeLoaderGameToBonus: {
                                fakeLoaderOn: {
                                    showDuration: 500,
                                    bgAlpha: .7,
                                    loaderText: "BONUS GAME"
                                },
                                static: []
                            },
                            gameOfferPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea offers1Container".split(" ")
                            },
                            gameOffer: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea offersFreespinCounter".split(" ")
                            }
                        }
                    },
                    bonusWheel: {
                        defaultLayer: "bonusWheel1",
                        allContainers: "UISpinPanelsContainer UISpinPanel_Automatic_FreespinGame_Container UISpinPanel_Manual_FreespinGame_Container UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer UIFreespinWinContainer bonusWheelContainer backgroundContainer".split(" "),
                        layers: {
                            intro: {},
                            bonusWheel1: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500,
                                    bgAlpha: .7,
                                    loaderText: "BONUS GAME"
                                },
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer bonusWheelContainer backgroundContainer".split(" ")
                            },
                            freespinsPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer bonusWheelContainer backgroundContainer".split(" ")
                            },
                            creditsPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer bonusWheelContainer backgroundContainer".split(" ")
                            },
                            bonusWheelCreditsPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer bonusWheelContainer backgroundContainer".split(" ")
                            },
                            bonusWheelCreditsPopupWithMultiplier: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer bonusWheelContainer backgroundContainer".split(" ")
                            },
                            bonusWheelMultiplyJackpot: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer bonusWheelContainer backgroundContainer".split(" ")
                            },
                            fakeLoaderBonusToGame: {
                                fakeLoaderOn: {
                                    showDuration: 500,
                                    bgAlpha: .7
                                },
                                static: []
                            }
                        }
                    }
                }
            }))
        },
        1039: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile = {}
        },
        1040: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "winPopupContainer gameFreeSpinMobileContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea slotMachineFrameBottomFreeSpinsA slotMachineFrameFreeSpinsLeft slotMachineFrameFreeSpinsRight slotMachineFrameFreeSpinsTop reelsBgFreeSpins bgAreaFreeSpinsGlow bgAreaFreeSpins autoSpinMobileContainer offers1Container".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500,
                                    bgAlpha: .7
                                },
                                static: "autoSpinMobileContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea".split(" ")
                            },
                            gameFreeSpin: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500,
                                    bgAlpha: .7
                                },
                                static: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomFreeSpinsA slotMachineFrameFreeSpinsLeft slotMachineFrameFreeSpinsRight slotMachineFrameFreeSpinsTop reelsBgFreeSpins bgAreaFreeSpinsGlow bgAreaFreeSpins".split(" ")
                            },
                            bonusWheelStartPopup: {
                                static: "autoSpinMobileContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea".split(" ")
                            },
                            freespinEndPopup: {
                                static: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea".split(" ")
                            },
                            fakeLoaderGameToBonus: {
                                fakeLoaderOn: {
                                    showDuration: 500,
                                    bgAlpha: .7,
                                    loaderText: "BONUS GAME"
                                },
                                static: []
                            },
                            gameOfferPopup: {
                                static: "autoSpinMobileContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea offers1Container".split(" ")
                            },
                            gameOffer: {
                                static: "autoSpinMobileContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameBottomA slotMachineFrameLeft slotMachineFrameRight slotMachineFrameTop reelsBg bgArea".split(" ")
                            }
                        }
                    },
                    bonusWheel: {
                        defaultLayer: "bonusWheel1",
                        allContainers: "bonusWheelContainer backgroundContainer infoPanelMobileContainer gameFreeSpinMobileContainer buttonsMobileContainer settingBottomUIMobileContainer".split(" "),
                        layers: {
                            intro: {},
                            bonusWheel1: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500,
                                    bgAlpha: .7,
                                    loaderText: "BONUS GAME"
                                },
                                static: ["settingBottomUIMobileContainer", "infoPanelMobileContainer", "buttonsMobileContainer", "bonusWheelContainer", "backgroundContainer"]
                            },
                            freespinsPopup: {
                                static: ["settingBottomUIMobileContainer", "infoPanelMobileContainer", "buttonsMobileContainer", "bonusWheelContainer", "backgroundContainer"]
                            },
                            creditsPopup: {
                                static: ["settingBottomUIMobileContainer", "infoPanelMobileContainer", "buttonsMobileContainer", "bonusWheelContainer", "backgroundContainer"]
                            },
                            bonusWheelCreditsPopup: {
                                static: ["settingBottomUIMobileContainer", "infoPanelMobileContainer", "buttonsMobileContainer", "bonusWheelContainer", "backgroundContainer"]
                            },
                            bonusWheelCreditsPopupWithMultiplier: {
                                static: ["settingBottomUIMobileContainer", "infoPanelMobileContainer", "buttonsMobileContainer", "bonusWheelContainer", "backgroundContainer"]
                            },
                            bonusWheelMultiplyJackpot: {
                                static: ["settingBottomUIMobileContainer", "infoPanelMobileContainer", "buttonsMobileContainer", "bonusWheelContainer", "backgroundContainer"]
                            },
                            fakeLoaderBonusToGame: {
                                fakeLoaderOn: {
                                    showDuration: 500,
                                    bgAlpha: .7
                                },
                                static: []
                            }
                        }
                    }
                }
            }))
        },
        1041: function(e, t) {
            nge.App[nge.appNS].Com.Lines = {}
        },
        1042: function(e, t) {
            nge.Com.Lines.Controller = nge.Com.Base.extend((function() {
                var e, t;
                this.create = function() {
                    this.createDefault();
                    var p = nge.localData.get("lines.cfg");
                    return t = 1, p && (t = p[p.length - 1]), nge.localData.set("maxLinesValue", t), a(), e || (nge.observer.add("brain.openGameSuccess", a), nge.observer.add("lines.down", l), nge.observer.add("lines.up", o), nge.observer.add("lines.downNC", s), nge.observer.add("lines.upNC", n), nge.observer.add("lines.set", i), nge.observer.add("lines.update", a)), e = !0
                };
                var a = function() {
                        var e = nge.localData.get("lines.value");
                        if (!e) {
                            e = 1;
                            var t = nge.localData.get("lines.cfg");
                            t && (e = t[t.length - 1])
                        }
                        return i(e, !0), !0
                    },
                    s = function() {
                        l(!0)
                    },
                    n = function() {
                        o(!0)
                    },
                    l = function(e) {
                        var t = nge.localData.get("lines.value"),
                            a = nge.localData.get("lines.cfg");
                        return !!t && (t = a.indexOf(t), a[--t] || (t = e ? 0 : a.length - 1), t = a[t], nge.observer.fire("lines.set", t), !0)
                    },
                    o = function(e) {
                        var t = nge.localData.get("lines.value"),
                            a = nge.localData.get("lines.cfg");
                        return !!t && (t = a.indexOf(t), a[++t] || (t = e ? a.length - 1 : 0), t = a[t], nge.observer.fire("lines.set", t), !0)
                    },
                    i = function(e, t) {
                        for (var a in nge.observer.fire("winlines.hideAll"), t || (nge.observer.fire("lines.change", e), nge.localData.set("winlines.updated", !0)), e = nge.findAll(".linesNumber")) e[a].text = "1024", e[a].maxSizeResize("width", 56)
                    }
            }))
        },
        1043: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets = {}
        },
        1044: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets.Controller = nge.App.ClassicGameBase.Com.LoadAssets.Controller.extend((function() {
                this.preload = function() {
                    if (this.super.preload(), !nge.wrap.cache.checkImageKey("bigWinBlackBG")) {
                        var e = nge.Lib.Helper.create1PxPng(0, 0, 0, 128, !0);
                        nge.wrap.cache.addTexture("bigWinBlackBG", PIXI.Texture.fromImage(e))
                    }
                    nge.wrap.cache.checkImageKey("settingsContainerBg") || nge.wrap.load.image("settingsContainerBg", nge.Lib.Helper.create1PxPng(58, 54, 66, 230, !0))
                }
            }))
        },
        1045: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe = {}
        },
        1046: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe.Controller = nge.App.DjGameBase.Com.InfoSwipe.Controller.extend((function() {
                this.pageNames = "pageInfoOneContainer pageInfoTwoContainer pageInfoThreeContainer pageInfoFourContainer pageInfoFiveContainer pageInfoSixContainer".split(" ")
            }))
        },
        1047: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue = {}
        },
        1048: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    triggerVariants: [{
                        symbols: ["12"],
                        reelMask: [!0, !0, !0, !0, !0],
                        minCount: 2
                    }],
                    UI: "^UICointainer ^jackpotStatusPanelContainer ^buttonsMobileContainer ^settingBottomUIMobileContainer ^gameFreeSpinMobileContainer ^infoPanelMobileContainer ^customBtn01 ^customBtn02".split(" ")
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1049: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Controller = nge.App.DjGameBase.Com.Intrigue.Controller.extend((function() {
                var e, t, a, s, n, l, o, i, p = this,
                    r = 0;
                this.create = function() {
                    this.super.create(), u()
                };
                var u = function() {
                        n = nge.wrap.states.world.children[0], e = n.scale.x, t = n.scale.y, a = n.x, s = n.y, r = 0, (o = []).push(nge.findOne("^gameLogoContainer")), o.push(nge.findOne("^slotMachineFrameContainer")), o.push(nge.findOne("^gameScreenContainer")), o.push(nge.findOne("^reelsBorderContainer")), o.push(nge.findOne("^backgroundContainer")), i = [], p.cfg.UI.forEach((function(e) {
                            (e = nge.findOne(e)) && i.push(e)
                        })), nge.localData.set("slotMachineIntrigue", {
                            status: !1
                        })
                    },
                    m = function() {
                        r = 0
                    },
                    y = function(e, t, a, s) {
                        (e = nge.tween.add(n.scale).to({
                            x: e,
                            y: t
                        }, a, s, !1)).onComplete.addOnce((function() {})), e.start()
                    },
                    c = function(e, t, a, s) {
                        (e = nge.tween.add(n).to({
                            x: e,
                            y: t
                        }, a, s, !1)).onComplete.addOnce((function() {})), e.start()
                    },
                    h = function(e, t) {
                        i.forEach((function(a) {
                            var s = nge.tween.add(a).to({
                                alpha: e
                            }, t);
                            s.onComplete.addOnce((function() {
                                a.alpha = e
                            })), s.start()
                        }))
                    },
                    g = function() {
                        var a = nge.localData.get("slotMachineIntrigue");
                        if (!0 === a.status) {
                            var s = 1.05;
                            1 === r ? s = 1.08 : 2 === r && (s = 1.1);
                            var n = e * s;
                            y(n, s *= t, 1e3, nge.Lib.Tween.Easing.Linear.None);
                            var i = nge.wrap.states.width / nge.wrap.states.world.scale.x,
                                p = nge.wrap.states.height / nge.wrap.states.world.scale.y;
                            n = (i * n - i) / 2, c(-(0 === r ? n : n + n / 2), -(p * s - p) / 2, 1e3, nge.Lib.Tween.Easing.Linear.None), 0 === r && (h(0, 1200), function(e) {
                                var t, a, s = 8e3;
                                3 === e ? s = 6e3 : 4 === e && (s = 4e3), e = {
                                    val: 0
                                }, (l = nge.tween.add(e).to({
                                    val: 1
                                }, s)).onUpdateCallback((function() {
                                    t = nge.Lib.Helper.getRandomInt(0, 6), t -= 3, a = nge.Lib.Helper.getRandomInt(0, 4), a -= 2, o.forEach((function(e) {
                                        e.x = 0 + t, e.y = 0 + a
                                    }))
                                }), e), l.onComplete.addOnce((function() {
                                    o.forEach((function(e) {
                                        e.x = 0, e.y = 0
                                    }))
                                })), l.start()
                            }(a.startsFrom)), r++
                        }
                    },
                    b = function() {
                        n.scale.x = e, n.scale.y = t, n.x = a, n.y = s, 0 !== r && h(1, 1e3), l && l.isRunning && (l.stop(!1), o.forEach((function(e) {
                            e.x = 0, e.y = 0
                        }))), r = 0
                    };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("slotMachine.spinCommand", m), nge.observer.add("slotMachine.reel_2.intrigue.start", g), nge.observer.add("slotMachine.reel_3.intrigue.start", g), nge.observer.add("slotMachine.reel_4.intrigue.start", g), nge.observer.add("slotMachine.reel_4.animation.stopped", (function() {
                        0 !== r && (y(e, t, 1300, nge.Lib.Tween.Easing.Quintic.Out), c(a, s, 1300, nge.Lib.Tween.Easing.Quintic.Out), r = 0, h(1, 1e3)), l && (l.stop(!1), o.forEach((function(e) {
                            e.x = 0, e.y = 0
                        })))
                    })), nge.observer.add("Transport.close", b)
                }
            }))
        },
        1050: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel = {}
        },
        1051: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel.Cfg = nge.App.DjGameBase.Com.JackpotStatusPanel.Cfg.extend((function() {
                this.params.animateTransition = !0, this.params.animateDistance = -90, this.params.animateInEasing = nge.Lib.Tween.Easing.Bounce.Out, this.params.animateOutEasing = nge.Lib.Tween.Easing.Quintic.Out
            }))
        },
        1052: function(e, t) {
            nge.App[nge.appNS].Com.BigWin = {}
        },
        1053: function(e, t) {
            nge.App[nge.appNS].Com.BigWin.Cfg = nge.App.DjGameBase.Com.BigWin.Cfg.extend((function() {
                this.params = this.super.get(), this.params.animation.dummyBoneOffsetY = 80, this.params.animation.loopTrackName = "big_win_loop", this.params.odometerDurations = [{
                    duration: 25e3,
                    name: "9s",
                    mult: 4
                }, {
                    duration: 15e3,
                    name: "9s",
                    mult: 2
                }, {
                    duration: 9e3,
                    name: "9s",
                    mult: 1
                }]
            }))
        },
        1054: function(e, t) {
            nge.App[nge.appNS].Com.BigWin.Controller = nge.App.DjGameBase.Com.BigWin.Controller.extend((function() {
                var e, t, a, s, n, l, o = this;
                this.create = function() {
                    o.super.create(), e = nge.findOne("^bigWinSphere"), t = nge.findOne("^bigWinSphereContainer");
                    var n = nge.findOne("^bigWinBlackBG");
                    n.width = 1920, n.height = 1080, o.mainAnim.onEvent.add((function(n, l) {
                        switch (l.data.name) {
                            case "big_win_end_sphere_scale":
                                a && a.stop(), (a = nge.tween.add(e.scale).to({
                                    x: 1,
                                    y: 1
                                }, 1e3, nge.Lib.Tween.Easing.Linear.None, !0)).start();
                                break;
                            case "big_win_end_sphere_hide":
                                s && s.stop(), (s = nge.tween.add(t).to({
                                    alpha: 0
                                }, 1e3, nge.Lib.Tween.Easing.Linear.None)).onComplete.addOnce((function() {
                                    e.stop(!1, !1), e.visible = !1
                                })), s.start()
                        }
                    }), o), (l = []).push(nge.findOne("^gameLogoContainer")), l.push(nge.findOne("^slotMachineFrameContainer")), l.push(nge.findOne("^gameScreenContainer")), l.push(nge.findOne("^reelsBorderContainer")), l.push(nge.findOne("^backgroundContainer")), e.interactive = !0, e.inputEnableChildren = !0, e.onChildInputDown.add(o.abort)
                };
                var i = function() {
                    var e, t = {
                        val: 0
                    };
                    (n = nge.tween.add(t).to({
                        val: 1
                    }, 3e3)).onUpdateCallback((function() {
                        e = nge.Lib.Helper.getRandomInt(0, 4), e -= 2, l.forEach((function(t) {
                            t.y = 0 + e
                        }))
                    }), t), n.onComplete.addOnce((function() {
                        l.forEach((function(e) {
                            e.y = 0
                        }))
                    })), n.start()
                };
                this.show = function(n) {
                    this.super.show(n), nge.observer.fire("bigWin.buffalo.startFinish.play"), t.alpha = 0, s && s.stop(), s = nge.tween.add(t).to({
                        alpha: 1
                    }, 3e3, nge.Lib.Tween.Easing.Linear.None, !0, 400), e.scale.x = .5, e.scale.y = .5, a && a.stop(), a = nge.tween.add(e.scale).to({
                        x: .95,
                        y: .95
                    }, 3e3, nge.Lib.Tween.Easing.Linear.None, !0, 400), e.setAnimationByName(0, "sphere_loop", !0)
                };
                var p = function() {
                    n && n.isRunning && (n.stop(!1), l.forEach((function(e) {
                        e.y = 0
                    })))
                };
                this.subscribe = function() {
                    o.super.subscribe(), nge.observer.add("win.big.preWinEvent", i), nge.observer.add("Transport.close", p)
                }
            }))
        },
        1055: function(e, t) {
            nge.App[nge.appNS].Com.BigWin.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: 1,
                            name: "bigWinContainer",
                            isVisible: !1,
                            contents: [{
                                type: 6,
                                assetKey: "bigWinFlareAnim",
                                name: "bigWinAnim_flare",
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 540,
                                isVisible: !1
                            }, {
                                type: 7,
                                name: "bigWinAmount",
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "orange_font",
                                size: 180
                            }, {
                                type: 6,
                                assetKey: "bigWinAnim",
                                name: "bigWinAnim",
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 540,
                                isVisible: !1
                            }, {
                                type: 1,
                                name: "bigWinSphereContainer",
                                isVisible: !0,
                                contents: [{
                                    type: 6,
                                    assetKey: "bigWinSphere",
                                    name: "bigWinSphere",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 540,
                                    isVisible: !1
                                }]
                            }, {
                                type: 0,
                                name: "bigWinBlackBG",
                                assetKey: "bigWinBlackBG",
                                inputEnabled: !0
                            }]
                        }]
                    }
                }
            }
        },
        1056: function(e, t) {
            nge.App[nge.appNS].Com.Freespin = {}
        },
        1057: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Cfg = nge.App.DjGameBase.Com.Freespin.Cfg.extend((function() {
                this.params.manualMode = !0, this.params.counterNotUpdateOnBonusGameName = "FreeSpins"
            }))
        },
        1058: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Controller = nge.App.DjGameBase.Com.Freespin.Controller.extend((function() {
                var e = this,
                    t = ["101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "101 102 103 104 105 106 107 108 109 110 111 112".split(" ")],
                    a = ["101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 100_x2 100_x3 101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 100_x2 100_x3 101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 100_x2 100_x3 101 102 103 104 105 106 107 108 109 110 111 112".split(" "), "101 102 103 104 105 106 107 108 109 110 111 112".split(" ")];
                this.prepareFreespinsToEnd = function() {
                    var e = nge.localData.get("slotMachine.totalBonusWin") || 0;
                    isNaN(e) ? console.error("Total bonus win is NaN") : nge.localData.set("freespins.totalWin", nge.Lib.Money.toCoins(e)), nge.rafSetTimeout((function() {
                        nge.observer.fire("popupFinish.animate.start"), nge.observer.fire("winlines.stopAnimation"), nge.observer.fire("popup.show", {
                            popupName: "freespinEndPopup",
                            layerName: "freespinEndPopup",
                            onClick: function() {
                                nge.observer.fire("freespin.press.endPopupButton")
                            },
                            freespinsTotalWinCounter: nge.Lib.Money.toCoins(e)
                        }, 20)
                    }), 800)
                }, this.onAdditionalFreespins = function() {
                    var e = nge.localData.get("freespin"),
                        t = {},
                        a = nge.localData.get("bonusGame.freespins");
                    t.freeSpinsTotal = e.spinsTotal, t.freeSpinRemain = +e.spinsLeft, nge.observer.fire("freespin.additional.show"), nge.observer.fire("popup.show", {
                        popupName: "freespinAdditionalPopup",
                        freespinsCounter: a,
                        onClick: function() {
                            nge.observer.fire("freespin.additionalHide.start", null, 1)
                        },
                        onHide: function() {
                            nge.observer.fire("freespin.counterUpdateEvent", t), nge.localData.set("additionalPopup.willBeShownNext", !1), nge.observer.fire("freespin.additionalHide.end", null, 1), nge.localData.set("bonusGame.freespins", !1)
                        }
                    })
                };
                var s = function(e) {
                    e ? nge.observer.fire("slotMachine.setSymbolsBlurKeys", a) : nge.observer.fire("slotMachine.setSymbolsBlurKeys", t), nge.observer.fire("slotMachine.updateBlurs")
                };
                this.freespinStart = function(t) {
                    e.super.freespinStart(t), s(!0)
                }, this.finishFreespin = function() {
                    this.super.finishFreespin(), s(!1)
                }
            }))
        },
        1059: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile = {}
        },
        1060: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile.Controller = nge.App[nge.appNS].Com.Freespin.Controller.extend((function() {}))
        },
        1061: function(e, t) {
            nge.App[nge.appNS].Com.Popup = {}
        },
        1062: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                        font: "62pt adelle_cyrillic_heavy",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 7,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 3,
                        align: "center"
                    },
                    t = {
                        font: "50pt adelle_cyrillic_heavy",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 7,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 3,
                        align: "center"
                    },
                    a = {
                        font: "45pt adelle_cyrillic_heavy",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 7,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 3,
                        align: "center"
                    },
                    s = {
                        font: "40pt adelle_cyrillic_heavy",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 7,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 3,
                        align: "center"
                    },
                    n = {
                        font: "120pt ifc_insane_rodeo_bold",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 6,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 4,
                        align: "center"
                    },
                    l = {
                        color: 0,
                        a: .7,
                        showDuration: 300,
                        hideDuration: 250,
                        hideDelay: 250
                    },
                    o = {
                        show: "popup_appear",
                        loop: "popup_loop",
                        hide: "popup_disappear"
                    },
                    i = {
                        type: 4,
                        name: "okButton",
                        x: 0,
                        y: 255,
                        anchorX: .5,
                        anchorY: .5,
                        isVisible: !1,
                        class: "popupButton",
                        assetKey: "popupOkButtonAsset"
                    },
                    p = {
                        model: {
                            type: 0,
                            isVisible: !1,
                            name: "popup_congratulations",
                            assetKey: "popup_congratulations_en",
                            anchorX: .5,
                            anchorY: .5
                        },
                        followSlotName: "ft_congratulations"
                    };
                this.cfg.popups = {
                    bonusWheelStartPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .55,
                                style: t
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_BONUS_WHEEL_1"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .58,
                                style: n
                            },
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_BONUS_WHEEL_2"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .65,
                                style: n
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    freespinAdditionalPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .7,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 150,
                                anchorX: .5,
                                anchorY: .52,
                                assetKey: "orange_font"
                            },
                            dataKey: "freespinsCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_ADDITIONAL"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .65,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_FREE_SPINS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.1,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    freespinEndPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .6,
                                style: t
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: .55,
                                assetKey: "orange_font"
                            },
                            dataKey: "freespinsTotalWinCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .65,
                                style: t
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    freespinsPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .75,
                                style: t
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 140,
                                anchorX: .5,
                                anchorY: .65,
                                assetKey: "orange_font"
                            },
                            dataKey: "bonusWheelFreespinsCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_FREE_SPINS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: 1,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WILD_MULTIPLIER_1"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: 1.15,
                                anchorY: .1,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "2",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .55,
                                anchorY: .32,
                                style: e
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WILD_MULTIPLIER_2"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: -.21,
                                anchorY: .1,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "3",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: -2.9,
                                anchorY: .32,
                                style: e
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .7,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: 1.2,
                                style: s
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: .1,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: 0,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopupWithMultiplier: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "popup_credits_mult_appear",
                                loop: "popup_credits_mult_loop",
                                hide: "popup_credits_mult_disappear"
                            }
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .4,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 65,
                                anchorX: .4,
                                anchorY: .15,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupMultiplier",
                            followSlotName: "ft_with_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "MINI",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .55,
                                anchorY: .1,
                                style: s
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_xMult_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .55,
                                anchorY: .1,
                                style: s
                            },
                            followSlotName: "ft_mult_text"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: 0,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.2,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopupWithMultiplierMini: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "popup_credits_mult_appear",
                                loop: "popup_credits_mult_loop",
                                hide: "popup_credits_mult_disappear"
                            }
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .4,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 65,
                                anchorX: .25,
                                anchorY: .15,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupMultiplier",
                            followSlotName: "ft_with_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "MINI",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .55,
                                anchorY: .1,
                                style: s
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_xMult_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .6,
                                anchorY: .1,
                                style: s
                            },
                            followSlotName: "ft_mult_text"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: 0,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.2,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopupWithMultiplierMiniX10: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "popup_credits_mult_appear",
                                loop: "popup_credits_mult_loop",
                                hide: "popup_credits_mult_disappear"
                            }
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .4,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 65,
                                anchorX: .35,
                                anchorY: .15,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupMultiplier",
                            followSlotName: "ft_with_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "MINI",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .42,
                                anchorY: .1,
                                style: s
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_xMult_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .1,
                                style: s
                            },
                            followSlotName: "ft_mult_text"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: 0,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.2,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopupWithMultiplierX10: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "popup_credits_mult_appear",
                                loop: "popup_credits_mult_loop",
                                hide: "popup_credits_mult_disappear"
                            }
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .4,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 65,
                                anchorX: .5,
                                anchorY: .15,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupMultiplier",
                            followSlotName: "ft_with_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "MINI",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .1,
                                style: s
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_xMult_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .1,
                                style: s
                            },
                            followSlotName: "ft_mult_text"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: 0,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.2,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelMultiplyJackpot: {
                        shadow: {
                            color: 4933,
                            a: 0,
                            showDuration: 300,
                            hideDuration: 250,
                            hideDelay: 250,
                            isButton: !0
                        },
                        background: {
                            type: "none",
                            durations: {
                                show: 500
                            },
                            additionalAnimation: [{
                                properties: {
                                    scaleX: 1.05,
                                    scaleY: 1.05
                                },
                                duration: 500,
                                ease: nge.Lib.Tween.Easing.Default,
                                delay: 0,
                                repeat: -1,
                                yoyo: !0
                            }],
                            hideAnimations: [{
                                properties: {
                                    alpha: 0
                                },
                                duration: 350,
                                ease: nge.Lib.Tween.Easing.Default
                            }]
                        },
                        content: [{
                            model: {
                                type: 0,
                                assetKey: "popupBonusWheelMultiplier",
                                anchorX: .5,
                                anchorY: .5,
                                y: -280,
                                x: 8
                            }
                        }]
                    },
                    insufficientFundsPopup: {
                        shadow: l,
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
                            name: "okButton",
                            x: 0,
                            y: 300,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1,
                            class: "popupButton",
                            assetKey: "popupOkButtonAsset",
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
                                    font: "30pt futuraptmedium",
                                    fill: "#efe1bf",
                                    align: "center"
                                }
                            }
                        }]
                    }
                }
            }))
        },
        1063: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Tpl = function(e) {
                var t = e;
                return t || (t = nge.appPath + "img/"), (e = nge.App.DjGameBase.Com.Popup.Tpl(e)).assets.contents = [{
                    type: mt.assets.IMAGE,
                    key: "notificationPopupBackground",
                    fullPath: t + "playarea/notificationPopupBackground1_asset.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "popupOkButtonAsset",
                    width: 900,
                    height: 116,
                    frameWidth: 300,
                    fullPath: t + "playarea/popupNotificationsOkButton(spritesX=3)_button.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "popup_congratulations_en",
                    fullPath: t + "playarea/popup_congratulations_en.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "popupBonusWheelMultiplier",
                    fullPath: t + "playarea/popupBonusWheelMultiplier.png"
                }], e.styles[".animatedPopupPlaneText32"] = {
                    style: {
                        font: "32pt ifc_insane_rodeo_bold",
                        fill: "#F3BB52",
                        stroke: "#560D0E",
                        strokeThickness: 4,
                        shadowColor: "#613E00FF",
                        shadowBlur: 10,
                        align: "center"
                    }
                }, (t = e.assets.contents.filter((function(e) {
                    return "popupOkButtonAsset" === e.key
                }))[0]).width = 900, t.height = 116, t.frameWidth = 300, e
            }
        },
        1064: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Lang_ru = {}
        },
        1065: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Lang_ru.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                        font: "50pt adelle_cyrillic_heavy",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 7,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 3,
                        align: "center"
                    },
                    t = {
                        font: "48pt adelle_cyrillic_heavy",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 7,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 3,
                        align: "center"
                    },
                    a = {
                        font: "40pt adelle_cyrillic_heavy",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 7,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 3,
                        align: "center"
                    },
                    s = {
                        font: "35pt adelle_cyrillic_heavy",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 7,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 3,
                        align: "center"
                    },
                    n = {
                        font: "120pt ifc_insane_rodeo_bold",
                        fill: "#F3BB52",
                        stroke: "#6e1000",
                        strokeThickness: 6,
                        shadowColor: "#090909",
                        shadowBlur: 6,
                        shadowStroke: !0,
                        shadowFill: !1,
                        shadowOffsetY: 4,
                        align: "center"
                    },
                    l = {
                        color: 0,
                        a: .7,
                        showDuration: 300,
                        hideDuration: 250,
                        hideDelay: 250
                    },
                    o = {
                        show: "popup_appear",
                        loop: "popup_loop",
                        hide: "popup_disappear"
                    },
                    i = {
                        type: 4,
                        name: "okButton",
                        x: 0,
                        y: 255,
                        anchorX: .5,
                        anchorY: .5,
                        isVisible: !1,
                        class: "popupButton",
                        assetKey: "popupOkButtonAsset"
                    },
                    p = {
                        model: {
                            type: 2,
                            isVisible: !1,
                            text: nge.i18n.get("popup_CONGRATULATIONS"),
                            gradient: [
                                [.3, "#ffe486"],
                                [.6, "#e48b20"]
                            ],
                            anchorX: .5,
                            anchorY: .44,
                            style: {
                                font: "44pt adelle_cyrillic_heavy",
                                fill: "#F3BB52",
                                stroke: "#6e1000",
                                strokeThickness: 3,
                                shadowColor: "#9d3b05",
                                shadowBlur: 2,
                                shadowStroke: !0,
                                shadowFill: !1,
                                shadowOffsetY: 2,
                                align: "center"
                            }
                        },
                        followSlotName: "ft_congratulations"
                    };
                this.cfg.popups = {
                    bonusWheelStartPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .55,
                                style: t
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_BONUS_WHEEL_1"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .58,
                                style: n
                            },
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_BONUS_WHEEL_2"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .65,
                                style: n
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    freespinAdditionalPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .7,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 150,
                                anchorX: .49,
                                anchorY: .52,
                                assetKey: "orange_font"
                            },
                            dataKey: "freespinsCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_ADDITIONAL"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .65,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_FREE_SPINS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.1,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    freespinEndPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .6,
                                style: t
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: .55,
                                assetKey: "orange_font"
                            },
                            dataKey: "freespinsTotalWinCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .65,
                                style: t
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    freespinsPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .8,
                                style: t
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 140,
                                anchorX: .5,
                                anchorY: .65,
                                assetKey: "orange_font"
                            },
                            dataKey: "bonusWheelFreespinsCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_FREE_SPINS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: 1.3,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WILD_MULTIPLIER_1"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: 1.25,
                                anchorY: .35,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "2",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: 1,
                                anchorY: .42,
                                style: e
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WILD_MULTIPLIER_2"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: 0,
                                anchorY: .35,
                                style: s
                            },
                            followSlotName: "ft_credits_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "3",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: -3.65,
                                anchorY: .45,
                                style: e
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopup: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: o
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .7,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: 1.2,
                                style: a
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: .1,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: 0,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopupWithMultiplier: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "popup_credits_mult_appear",
                                loop: "popup_credits_mult_loop",
                                hide: "popup_credits_mult_disappear"
                            }
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .4,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 65,
                                anchorX: .5,
                                anchorY: .15,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupMultiplier",
                            followSlotName: "ft_with_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "MINI",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .1,
                                style: a
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_xMult_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .1,
                                style: a
                            },
                            followSlotName: "ft_mult_text"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: -0,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.2,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopupWithMultiplierMini: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "popup_credits_mult_appear",
                                loop: "popup_credits_mult_loop",
                                hide: "popup_credits_mult_disappear"
                            }
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .4,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 65,
                                anchorX: .25,
                                anchorY: .15,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupMultiplier",
                            followSlotName: "ft_with_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "MINI",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .55,
                                anchorY: .1,
                                style: a
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_xMult_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .6,
                                anchorY: .1,
                                style: a
                            },
                            followSlotName: "ft_mult_text"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: -0,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.2,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopupWithMultiplierMiniX10: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "popup_credits_mult_appear",
                                loop: "popup_credits_mult_loop",
                                hide: "popup_credits_mult_disappear"
                            }
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .4,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 65,
                                anchorX: .35,
                                anchorY: .15,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupMultiplier",
                            followSlotName: "ft_with_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "MINI",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .42,
                                anchorY: .1,
                                style: a
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_xMult_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .1,
                                style: a
                            },
                            followSlotName: "ft_mult_text"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: -0,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.2,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelCreditsPopupWithMultiplierX10: {
                        shadow: l,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "popup_credits_mult_appear",
                                loop: "popup_credits_mult_loop",
                                hide: "popup_credits_mult_disappear"
                            }
                        },
                        button: i,
                        content: [p, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_YOU_WON"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .4,
                                style: e
                            },
                            followSlotName: "ft_you_won"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 65,
                                anchorX: .5,
                                anchorY: .15,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupMultiplier",
                            followSlotName: "ft_with_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "MINI",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .1,
                                style: a
                            },
                            dataKey: "creditsPopupJackpotName",
                            followSlotName: "ft_xMult_text"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: "JACKPOT",
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: .1,
                                style: a
                            },
                            followSlotName: "ft_mult_text"
                        }, {
                            model: {
                                type: 7,
                                isVisible: !1,
                                text: "0",
                                size: 125,
                                anchorX: .5,
                                anchorY: -0,
                                assetKey: "orange_font"
                            },
                            dataKey: "creditsPopupWinAmountCounter",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                gradient: [
                                    [.4, "#fff38c"],
                                    [.75, "#e07a12"]
                                ],
                                anchorX: .5,
                                anchorY: -.2,
                                style: a
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    bonusWheelMultiplyJackpot: {
                        shadow: {
                            color: 4933,
                            a: 0,
                            showDuration: 300,
                            hideDuration: 250,
                            hideDelay: 250,
                            isButton: !0
                        },
                        background: {
                            type: "none",
                            durations: {
                                show: 500
                            },
                            additionalAnimation: [{
                                properties: {
                                    scaleX: 1.05,
                                    scaleY: 1.05
                                },
                                duration: 500,
                                ease: nge.Lib.Tween.Easing.Default,
                                delay: 0,
                                repeat: -1,
                                yoyo: !0
                            }],
                            hideAnimations: [{
                                properties: {
                                    alpha: 0
                                },
                                duration: 350,
                                ease: nge.Lib.Tween.Easing.Default
                            }]
                        },
                        content: [{
                            model: {
                                type: 0,
                                assetKey: "popupBonusWheelMultiplier",
                                anchorX: .5,
                                anchorY: .5,
                                y: -280,
                                x: 8
                            }
                        }]
                    },
                    insufficientFundsPopup: {
                        shadow: l,
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
                            name: "okButton",
                            x: 0,
                            y: 300,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1,
                            class: "popupButton",
                            assetKey: "popupOkButtonAsset",
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
                                    font: "30pt futuraptmedium",
                                    fill: "#efe1bf",
                                    align: "center"
                                }
                            }
                        }]
                    }
                }
            }))
        },
        1066: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin = {}
        },
        1067: function(e, t) {
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
                            y: 486,
                            anchorX: .5,
                            anchorY: .5,
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
                                assetKey: "orange_font",
                                size: 124
                            }]
                        }]
                    }
                }
            }
        },
        1068: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation = {}
        },
        1069: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation.Cfg = nge.App.DjGameBase.Com.SpinButtonAnimation.Cfg.extend((function() {
                this.params = this.super.get(), this.params.unavaliableIdleLayers = ["freespinStartPopup", "freespinEndPopup", "bonusWheelStartPopup"], this.params.avaliableIdleState = ["play", "bonusWheel"]
            }))
        },
        1070: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation.Controller = nge.App.DjGameBase.Com.SpinButtonAnimation.Controller.extend((function() {
                var e = this,
                    t = function() {
                        e.spinStarted = !1, e.availableIdleAnimation = !0, e.updateLastActivity()
                    },
                    a = function() {
                        e.spinStarted = !0, e.availableIdleAnimation = !1, e.idleAnimationIsPlaying = !1, e.spinButtonAnimation.stop()
                    },
                    s = function() {
                        e.spinStarted = !1, e.availableIdleAnimation = !1, e.idleAnimationIsPlaying = !1, e.spinButtonAnimation.stop()
                    };
                this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("bonusWheel.spinPressed", e.showPressAnimation), nge.observer.add("spinButton.showPressAnimation", e.showPressAnimation), nge.observer.add("bonusWheel.enableSpinButton", t), nge.observer.add("bonusWheel.disableSpinButton", a), nge.observer.add("Transport.close", s)
                }
            }))
        },
        1071: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 6,
                            assetKey: "spinButtonAnimation",
                            name: "spin_button_fx",
                            x: 960,
                            y: 974,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1
                        }]
                    }
                }
            }
        },
        1072: function(e, t) {
            nge.App[nge.appNS].Com.Totems = {}
        },
        1073: function(e, t) {
            nge.App[nge.appNS].Com.Totems.Controller = nge.Com.Base.extend((function() {
                function e(e, t, a, s, n, l, o, i) {
                    return e = nge.Mlm.Objects.Spine({
                        assetKey: e,
                        name: t,
                        x: a,
                        y: s,
                        isVisible: !1
                    }), n = nge.findOne("^" + n), n = nge.objects.create(e, n, !0), l && n.setAnimationByName(0, l, o, i), n
                }

                function t(t, a, s, n) {
                    (y = e(t, a, 960, 540, s, n)).onComplete.add((function() {
                        if (!f) {
                            if (0 < _.length) {
                                var e = _[0];
                                _.splice(0, 1)
                            } else e = nge.Lib.Helper.getRandomInt(0, 100), e = "bonusWheel" === nge.statesManager.getCurrentName() ? "totem_bonus_idle" : x ? "totem_laughing" : 10 <= e ? "totem_idle" : "totem_looks_around";
                            y.setAnimationByName(0, e), "totem_laughing" !== e && "totem_bonus_laughing" !== e || nge.observer.fire("totem.laughing.play")
                        }
                    }))
                }

                function a(a) {
                    "play" === a ? t("totems", "bg_spine_totems", "totemAnimationContainer", "totem_idle") : "bonusWheel" === a && (t("totems_bonus", "bg_spine_totems", "backgroundContainer", "totem_bonus_idle"), y.onEvent.add((function(e, t) {
                        "totem_spear" === t.data.name && nge.observer.fire("totems.spearPlay")
                    })), c = e("totems_spear", "bg_spine_totems_spear", 960, 540, "spearAnimationContainer"))
                }

                function s() {
                    y.stop(!0)
                }

                function n() {
                    _.push("totem_bonus_laughing"), _.push("totem_bonus_looks_around"), _.push("totem_bonus_laughing")
                }

                function l() {
                    nge.observer.fire("totem.throwing.play"), y.setAnimationByName(0, "totem_knocking"), _.push("totem_throwing_spear")
                }

                function o() {
                    c.setAnimationByName(0, "totem_throwing_spear")
                }

                function i(e) {
                    var t = 0;
                    e = e.spinResult.columns;
                    for (var a = 0; a < e.length; a++)
                        for (var s = 0; s < e[a].length; s++) "12" === e[a][s] && t++;
                    3 <= t && (b = !0)
                }

                function p() {
                    x = b = !1, _ = []
                }

                function r() {
                    x = !0, _.push("totem_laughing")
                }

                function u() {
                    x = !1
                }

                function m() {
                    x = !0, _.push("totem_laughing")
                }
                var y, c, h = this,
                    g = !1,
                    b = !1,
                    x = !1,
                    f = !1,
                    _ = [];
                this.create = function() {
                    this.createDefault(), g || (h.subscribe(), g = !0), _ = [], f = x = b = !1
                };
                var d = function() {
                        _ = [], x = b = !1, f = !0, y.stop(!0)
                    },
                    N = function() {
                        d()
                    },
                    S = function() {
                        d()
                    };
                this.subscribe = function() {
                    nge.observer.add("StatesManager.create.end", a), nge.observer.add("bonusWheel.prepareShow", s), nge.observer.add("bonusWheel.1.spinStart", n), nge.observer.add("bonusWheel.2.spinStart", n), nge.observer.add("bonusWheel.stopped", l), nge.observer.add("totems.spearPlay", o), nge.observer.add("popup.showStart", u), nge.observer.add("win.big.show", u), nge.observer.add("win.big.hide", m), nge.observer.add("slotMachine.spinResponse", i), nge.observer.add("slotMachine.reel_4.animation.stop", (function() {
                        b && _.push("totem_burning")
                    })), nge.observer.add("slotMachine.spinCommand", p), nge.observer.add("popupFinish.animate.start", p), nge.observer.add("winlines.animateAll", r), nge.observer.add("Transport.close", N), nge.observer.add("jackpot.start", S)
                }
            }))
        },
        1074: function(e, t) {
            nge.App[nge.appNS].Com.Totems.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {}
                }
            }
        },
        1075: function(e, t) {
            nge.App[nge.appNS].Com.WinField = {}
        },
        1076: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Controller = nge.App.DjGameBase.Com.WinField.Controller.extend((function() {
                function e() {
                    nge.localData.get("bonusWheel.totalWin") && nge.localData.set("bonusWheel.totalWin", !1)
                }
                var t = this;
                this.showVFX = function() {
                    var e = nge.localData.get("bonusWheel.totalWin");
                    e ? (e = nge.Lib.Money.toCoins(e), t.setText(e)) : t.super.showVFX()
                };
                var a = function(e) {
                    "bonusWheel" === e ? nge.rafSetTimeout((function() {
                        t.showVFX()
                    }), 1) : "play" === e && nge.localData.get("bonusWheel.totalWin") && nge.rafSetTimeout((function() {
                        t.showVFX()
                    }), 1)
                };
                this.layersSwitcher = function(e) {
                    nge.localData.get("bonusWheel.totalWin") || t.super.layersSwitcher(e)
                }, this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("bonusWheel.winField.showVFX", t.showVFX), nge.observer.add("StatesManager.create.end", a), nge.observer.add("slotMachine.spinCommand", e)
                }
            }))
        },
        1077: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Mobile = {}
        },
        1078: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Mobile.Controller = nge.App.DjGameBase.Com.WinField.Mobile.Controller.extend((function() {
                function e() {
                    nge.localData.get("bonusWheel.totalWin") && nge.localData.set("bonusWheel.totalWin", !1)
                }

                function t(e) {
                    "bonusWheelStartPopup" === e && a.super.resetTextPosition()
                }
                var a = this;
                this.showVFX = function() {
                    var e = nge.localData.get("bonusWheel.totalWin");
                    e ? (e = nge.Lib.Money.toCoins(e), a.setText(e)) : a.super.showVFX()
                };
                var s = function(e) {
                    "bonusWheel" === e ? nge.rafSetTimeout((function() {
                        a.showVFX()
                    }), 1) : "play" === e && nge.localData.get("bonusWheel.totalWin") && nge.rafSetTimeout((function() {
                        a.showVFX()
                    }), 1)
                };
                this.layersSwitcher = function(e) {
                    nge.localData.get("bonusWheel.totalWin") || a.super.layersSwitcher(e)
                }, this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("bonusWheel.winField.showVFX", a.showVFX), nge.observer.add("StatesManager.create.end", s), nge.observer.add("slotMachine.spinCommand", e), nge.observer.add("popup.showStart", t)
                }
            }))
        },
        1079: function(e, t) {
            nge.App[nge.appNS].Com.Winlines = {}
        },
        1080: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Controller = nge.App.DjGameBase.Com.Winlines.Controller.extend((function() {
                var e = this,
                    t = function(t) {
                        e.view.setAnimationAllDurationTime(t)
                    };
                this.subscribe = function() {
                    return e.super.subscribe(), nge.observer.add("winlines.setAnimationAllDurationTime", t), !0
                }
            }))
        },
        1081: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.View = nge.App.DjGameBase.Com.Winlines.View.extend((function() {
                var e = this;
                this.create = function(t, a) {
                    e._cfg = this.getInstance("Cfg"), e._cfg.animationAllDuration = 1050, e._cfg.subcycles = 1, e.super.create(t, a)
                }, this.setAnimationAllDurationTime = function(t) {
                    e._cfg.animationAllDuration = t
                }
            }))
        },
        1082: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText = {}
        },
        1083: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Cfg = nge.App.DjGameBase.Com.WinlinesText.Cfg.extend((function() {
                this.params = this.super.get(), this.params.maxRows = 4
            }))
        },
        1084: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Controller = nge.App.DjGameBase.Com.WinlinesText.Controller.extend((function() {
                var e, t = this;
                this.onLineHighlightStart = function(s) {
                    if ("big" !== nge.localData.get("win.winType")) {
                        nge.observer.fire("win.brain.lineWin.animation.start", s);
                        var n = t.middleRow,
                            l = 2;
                        if (s.wonSymbols) {
                            var o = s.wonSymbols.filter((function(e) {
                                return e[0] === t.middleReel
                            }));
                            2 === s.wonSymbols.length ? (l = +s.wonSymbols[1][0], n = +s.wonSymbols[1][1]) : o && o[0] && (n = +o[0][1])
                        }
                        if (t.container.visible = !1, 0 !== (s = t.toCoins(s.amount)) && !isNaN(s) && !nge.localData.get("regularWinInProgress")) {
                            t.container.visible = !0, o = t.lineWins.length;
                            var i = t.lineWins[n];
                            e.visible && a(e);
                            for (var p = 0; p < o; p++) p === n ? t.lineWins[p].visible ? (a(t.lineWins[p]), e.visible = !0, e.x = 232 * (l - 2), e.y = 200 * n - 280, i = e) : (t.lineWins[p].visible = !0, t.lineWins[p].x = 232 * (l - 2)) : t.lineWins[p].visible && a(t.lineWins[p]);
                            i.text = s, t.createTextTweenAnimation(i)
                        }
                    }
                };
                var a = function(e) {
                    var t = nge.tween.add(e).to({
                        alpha: 0
                    }, 100, nge.Lib.Tween.Easing.Linear.Out, !1);
                    t.onComplete.addOnce((function() {
                        e.visible = !1
                    })), t.start()
                };
                this.createTextTweenAnimation = function(e) {
                    e.scale.x = 1, e.scale.y = 1, e.alpha = 0, nge.tween.add(e).to({
                        alpha: 1
                    }, 500, nge.Lib.Tween.Easing.Linear.Out, !1).start(), nge.tween.add(e.scale).from({
                        x: .7,
                        y: .7
                    }, 1e3, nge.Lib.Tween.Easing.Linear.Out, !1).start()
                }, this.hide = function() {
                    t.super.hide(), e.text = "0", e.visible = !1
                }, this.create = function() {
                    t.super.create(), e = nge.findOne("^additionalWinAmount"), nge.findOne("^winlinesTextContainer").add(t.container)
                }
            }))
        },
        1085: function(e, t) {
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
                            x: 960,
                            y: 466,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "lineWinAmount0",
                                isVisible: !1,
                                x: 0,
                                y: -280,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "orange_font",
                                size: 94
                            }, {
                                type: 7,
                                name: "lineWinAmount1",
                                isVisible: !1,
                                x: 0,
                                y: -80,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "orange_font",
                                size: 94
                            }, {
                                type: 7,
                                name: "lineWinAmount2",
                                isVisible: !1,
                                x: 0,
                                y: 120,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "orange_font",
                                size: 94
                            }, {
                                type: 7,
                                name: "lineWinAmount3",
                                isVisible: !1,
                                x: 0,
                                y: 320,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "orange_font",
                                size: 94
                            }, {
                                type: 7,
                                name: "additionalWinAmount",
                                isVisible: !1,
                                x: 0,
                                y: 320,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "orange_font",
                                size: 94
                            }]
                        }]
                    }
                }
            }
        },
        1086: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1087: function(e, t) {
            nge.App[nge.appNS].Tpl.PsdAliases = Class.extend((function() {
                this.singleton = !0, this.data = {
                    introScreenTextBottom: "introScreenText1(text=show_next_time, font=26pt futuraptheavy, fill=#fad35e, anchorY=0.5, maxWidth=380)_text",
                    introScreenTextCenter: "introScreenTextCenter(text=MEET_THE_MIGHTY_BUFFALO, font=30pt futuraptheavy, fill=#ffffff, stroke=#cd795f, strokeThickness=4, class=coloredText, align=center, anchorX=0.5, anchorY=0.5, lineHeight=55, shadowBlur=5, shadowStroke=true,  shadowFill=false, shadowOffsetY=2, shadowColor=#574836)_text",
                    introScreenTextCenter1: "introScreenTextCenter1(text=WIN_LOTS_OF_JACKPOTS, font=34pt futuraptheavy, fill=#ffffff, stroke=#cd795f, strokeThickness=4, class=coloredText, align=center, anchorX=0.5, anchorY=0.5, lineHeight=55, shadowBlur=5, shadowStroke=true,  shadowFill=false, shadowOffsetY=2, shadowColor=#574836)_text",
                    demoPlayButtonText_aliases: 'demoPlayButtonText(text=PLAY_BUTTON, font=35pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#ffffff, maxWidth=170, shadowColor=#22544e, shadowOffsetY=2, stroke=#002d2b, strokeThickness=6, gradient=[[0.1, "#cdd3ae"], [0.46, "#b6e6cb"], [0.9, "#eeb886"]])_text',
                    popupNotificationsHeadText_aliases: "popupNotificationsHeadText(text=INSUFFICIENT_FUNDS, font=52pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#fff, maxWidth=670)_text",
                    popupNotificationsContent_aliases: "popupNotificationsContent(text=Please_deposit_more, font=30pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#efe1bf, align=center, maxWidth=870)_text",
                    freeSpinsNumber_aliases: "freeSpinsNumber(assetKey=orange_font, text=12, size=54, anchorX=0.5, anchorY=0.5)_bitmapText",
                    freeSpinsNumber1_aliases: "freeSpinsNumber1(assetKey=orange_font, text=12, size=54, anchorX=0.5, anchorY=0.5)_bitmapText",
                    freeSpinsNumber2_aliases: "freeSpinsNumber2(assetKey=orange_font, text=12, size=54, anchorX=0.5, anchorY=0.5)_bitmapText",
                    freeSpinsNumber3_aliases: "freeSpinsNumber3(assetKey=orange_font, text=12, size=54, anchorX=0.5, anchorY=0.5)_bitmapText",
                    freeSpinsNumber4_aliases: "freeSpinsNumber4(assetKey=orange_font, text=12, size=54, anchorX=0.5, anchorY=0.5)_bitmapText",
                    freeSpinsNumber5_aliases: "freeSpinsNumber5(assetKey=orange_font, text=12, size=54, anchorX=0.5, anchorY=0.5)_bitmapText",
                    freeSpinsNumber6_aliases: "freeSpinsNumber6(assetKey=orange_font, text=12, size=54, anchorX=0.5, anchorY=0.5)_bitmapText",
                    freeSpinsNumber7_aliases: "freeSpinsNumber7(assetKey=orange_font, text=12, size=54, anchorX=0.5, anchorY=0.5)_bitmapText",
                    betSettingsBetLevelName_alias: "betSettingsBetLevelName(text=Bet Level, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5, anchorY=0.5)_text",
                    betSettingsLinesName_alias: "betSettingsLinesName(text=Ways, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5, anchorY=0.5)_text",
                    betSettingsCoinValueName_alias: "betSettingsCoinValueName(text=Coin value, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5, anchorY=0.5)_text",
                    betInCashContainerBgName_alias: "betInCashContainerBgName(text=BET IN CASH, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5, anchorY=0.5)_text",
                    betInCoinContainerBgName_alias: "betInCoinContainerBgName(text=BET IN COINS, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5, anchorY=0.5)_text",
                    pageOneHeaderText_alias: "pageOneHeaderText(text=RULES, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=450)_text",
                    pageTwoHeaderText_alias: "pageTwoHeaderText(text=BET SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=450)_text",
                    pageThreeHeaderText_alias: "pageThreeHeaderText(text=SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=450)_text",
                    settingsAudioName_alias: "settingsAudioName(text=Audio, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                    settingsOptionsName_alias: "settingsOptionsName(text=Options, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                    settingsVisualName_alias: "settingsVisualName(text=Visual, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                    spinSpeedName_alias: "spinSpeedName(text=Spin speed, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5, maxWidth=380)_text",
                    textStyle_aliases: "textStyle(font=28pt futuraptmedium, fill=#eee0bf, anchorX=0.5, anchorY=0.5, lineHeight=40, align=center)_style",
                    displayText_alias: "displayText(text=DISPLAY, class=textStyle)_text",
                    showText_alias: "showText(text=SHOW, class=textStyle)_text",
                    turboText_alias: "turboText(text=TURBO, class=textStyle)_text",
                    pressSpaceText_alias: "pressSpaceText(text=PRESS SPACE, class=textStyle)_text",
                    autoButtonText_aliases: 'autoButtonText(text=AUTO\nSTART, anchorX=0.5, anchorY=0.5, class=titleButtonStyle,  maxWidth=104, gradient=[[0.1, "#97fef0"], [0.46, "#b9e3c6"], [0.9, "#d8caa1"]])_text',
                    maxBetButtonText_aliases: 'maxBetButtonText(text=MAX\nBET, anchorX=0.5, anchorY=0.5, class=titleButtonStyle,  maxWidth=104, gradient=[[0.1, "#97fef0"], [0.46, "#b9e3c6"], [0.9, "#d8caa1"]])_text',
                    counterManualFreeSpinsNumberA_aliases: "counterManualFreeSpinsNumberA(text=0, font=24pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db, stroke=#000000, strokeThickness=4, class=freeSpinPlayedAmount)_text",
                    counterManualFreeSpinsNumberB_aliases: "counterManualFreeSpinsNumberB(text=0, font=24pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db, stroke=#000000, strokeThickness=4, class=freeSpinTotalAmount)_text",
                    autoPlayAmountButtonText_aliases: "autoPlayAmountButtonText(anchorX=0.5, anchorY=0.5)_text",
                    menuElementText_aliases: "menuElementText(font=18pt futuraptheavy, anchorX=0.5, anchorY=0.4, fill=#e5e7db)_text",
                    winNumber_aliases: "winNumber(class=winNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    creditsWinNumber_aliases: "creditsWinNumber(class=creditsWinNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    creditsTotalWinNumber_aliases: "creditsTotalWinNumber(class=creditsWinNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    totalWinNumber_aliases: "totalWinNumber(class=winNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    linesNumber_aliases: "linesNumber(class=linesNumber, font=21pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db, maxWidth=52)_text",
                    coinValueNumber_aliases: "coinValueNumber(class=coinsNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    totalBetCoinsNumber_aliases: "totalBetCoinsNumber(class=creditsTotalBetNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    totalBetNumber_aliases: "totalBetNumber(class=totalBetNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    balanceCoinsNumber_aliases: "balanceCoinsNumber(class=creditsNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    balanceNumber_aliases: "balanceNumber(class=balanceNumber balanceCurrency, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    totalWinTextA_aliases: "totalWinTextA(text=WIN, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    coinValueText_aliases: "coinValueText(text=COIN VALUE, anchorX=0.5, anchorY=0.5, class=titleTextStyle, maxWidth=190)_text",
                    totalBetCoinsText_aliases: "totalBetCoinsText(text=TOTAL BET, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    balanceText_aliases: "balanceText(text=BALANCE, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    winText_aliases: "winText(text=WIN, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    linesText_aliases: "linesText(text=WAYS, anchorX=0.5, anchorY=0.5, class=titleTextStyle, maxWidth=200)_text",
                    balanceCoinsTextt_aliases: "balanceCoinsText(text=BALANCE, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    playedFreespinText_aliases: "balanceCoinsText(text=PLAYED, anchorX=0.5, anchorY=0.5, class=titleButtonFreespinStyle, maxWidth=120)_text",
                    totalFreespinText_aliases: "balanceCoinsText(text=TOTAL, anchorX=0.5, anchorY=0.5, class=titleButtonFreespinStyle, maxWidth=120)_text",
                    offersFreespinCounter_aliases: "offersFreespinCounter(text=0, font=24pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db, stroke=#000000, strokeThickness=4, class=freeSpinTotalAmount)_text",
                    autospinAmountSetterPanel_aliases: "autospinAmountSetterPanel(assetKey=autospinAmountSetterPanel1, width=116, height=420, top=0, bottom=0, left=0, right=0, anchorX=0)_nineSlice",
                    settingPanelBackBg_aliases: "settingPanelBackBg(assetKey=settingPanelBackBg1, width=76, height=328, top=32, bottom=32, left=20, right=20, anchorX=0, anchorY=0, scaleX=" + 1 / nge.assets.getQualityFactor() + ", scaleY=" + 1 / nge.assets.getQualityFactor() + ")_nineSlice",
                    menuElementOver_aliases: "menuElementOver(fill=#fff)_style",
                    menuElementBase_aliases: "menuElementBase(font=17pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#efe1bf)_style",
                    menuElementInfinity_aliases: "menuElementInfinity(font=36pt futuraptheavy, anchorX=0.5, anchorY=0.65, fill=#efe1bf)_style",
                    autoButtonAmountTextInfinity_aliases: "autoButtonAmountTextInfinity(font=44pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_style",
                    autoButtonAmountTextBase_aliases: "autoButtonAmountTextBase(font=24pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_style",
                    autoSpinButtonName2_aliases: "autoSpinButtonName2(text=AUTO, class=buttonStyleNormal, font=20pt futuraptheavy, fill=#efc273, align=center, anchorX=0.5, anchorY=0.5, lineHeight=30, maxWidth=120)_text",
                    balanceMobileName_aliases: "balanceMobileName(text=BALANCE, anchorX=0.5, anchorY=0.5, class=titleStyleMobile)_text",
                    winMobileName_aliases: "winMobileName(text=WIN, anchorX=0.5, anchorY=0.5, class=titleStyleMobile)_text",
                    totalBetMobileName_aliases: "totalBetMobileName(text=TOTAL BET, anchorX=0.5, anchorY=0.5, class=titleStyleMobile)_text",
                    totalBetMobilleNumber_aliases: "totalBetMobilleNumber(class=playAreaTextMobile totalBetNumber, font=30pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    totalBetCoinsMobileNumber_aliases: "totalBetCoinsMobileNumber(class=playAreaTextMobile creditsTotalBetNumber, font=30pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    winMobileNumber_aliases: "winMobileNumber(class=playAreaTextMobile winNumber, font=39pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    creditsWinMobileNumber_aliases: "creditsWinMobileNumber(class=playAreaTextMobile creditsWinNumber, font=39pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    balanceCoinsMobileNumber_aliases: "balanceCoinsMobileNumber(class=playAreaTextMobile creditsNumber, font=30pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    balanceMobileNumber_aliases: "balanceMobileNumber(class=playAreaTextMobile balanceNumber, font=30pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    settingPanelMobileBackBg_aliases: "settingPanelMobileBackBg(assetKey=settingPanelMobileBackBg1, width=128, height=468, top=64, bottom=64, left=64, right=64, anchorX=0, anchorY=0, scaleX=" + 1 / nge.assets.getQualityFactor() + ", scaleY=" + 1 / nge.assets.getQualityFactor() + ")_nineSlice",
                    paytableNameText_aliases: "paytableNameText(text=PAYTABLE_help, font=60pt futuraptmedium, fill=#eee0bf, anchorX=0.5, anchorY=0.5)_text",
                    pageOneText0_aliases: "pageOneText0(text=Wild_substitutes, font=36pt futuraptmedium, align=center, anchorX=0.5, anchorY=0.5, lineHeight=50, class=coloredText)_text",
                    pageOneText1_aliases: "pageOneText1(text=Wild_appears, font=36pt futuraptmedium, align=center, anchorX=0.5, anchorY=0.5, lineHeight=50, class=coloredText)_text",
                    pageOneText2_aliases: "pageOneText2(text=All_wins_begin_leftmost, font=32pt futuraptmedium, align=center, anchorX=0.5, anchorY=0.5, lineHeight=45, class=coloredText)_text",
                    pageTwoText_aliases: "pageTwoText(text=All_wins_begin_leftmost, font=32pt futuraptmedium, align=center, anchorX=0.5, anchorY=0.5, lineHeight=45, class=coloredText)_text",
                    pageFourText0_aliases: "pageFourText0(text=Substitutes_for_all_symbols_except_Scatters, font=32pt futuraptmedium, align=center, anchorX=0.5, anchorY=0.5, lineHeight=45, class=coloredText)_text",
                    pageFourText1_aliases: "pageFourText1(text=Substitutes_for_all_symbols_except, font=32pt futuraptmedium, align=center, anchorX=0.5, anchorY=0.5, lineHeight=45, class=coloredText)_text",
                    pageFourText2_aliases: "pageFourText2(text=x2, font=40pt futuraptheavy, fill=#fff, anchorX=0.5, anchorY=0.5)_text",
                    pageFourText3_aliases: "pageFourText3(text=x3, font=40pt futuraptheavy, fill=#fff, anchorX=0.5, anchorY=0.5)_text",
                    pageFourText4_aliases: "pageFourText4(text=x5, font=40pt futuraptheavy, fill=#fff, anchorX=0.5, anchorY=0.5)_text",
                    pageFourText5_aliases: "pageFourText5(text=x10, font=40pt futuraptheavy, fill=#fff, anchorX=0.5, anchorY=0.5)_text",
                    pageFiveText0_aliases: "pageFiveText0(text=In_buffalo_fortune, font=32pt futuraptmedium, align=center, anchorX=0.5, anchorY=0.5, lineHeight=42, class=coloredText)_text",
                    pageFiveText1_aliases: "pageFiveText1(text=If_you_win_free_spins, font=32pt futuraptmedium, align=center, anchorX=0.5, anchorY=0.5, lineHeight=42, class=coloredText)_text",
                    rulesName_aliases: "rulesName(text=RULES_help, font=60pt futuraptmedium, fill=#eee0bf, anchorX=0.5, anchorY=0.5)_text",
                    rulesText_aliases: "rulesText(text=All_prizes_are_for_combinations, font=36pt futuraptmedium, align=center, anchorX=0.5, anchorY=0.5, lineHeight=50, class=coloredText)_text",
                    rtpTextEN_aliases: "rtpTextEN(text=rtpEN, font=36pt futuraptmedium, align=center, fill=#fff, anchorX=0.5, anchorY=0.5, class=rtpInfo)_text",
                    rtpTextRU_aliases: "rtpTextRU(text=rtpRU, font=36pt futuraptmedium, align=center, fill=#fff, anchorX=0.5, anchorY=0.5, class=rtpInfo)_text"
                }
            }))
        },
        1088: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1089: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Atlases = function() {
                var e = nge.appPath + "img/atlases/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.ATLAS,
                            key: "jackpotsPlay0",
                            atlas: e + "jackpotsPlay0.json",
                            fullPath: e + "jackpotsPlay0.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "offersGold_atlas",
                            atlas: e + "offers_gold.json",
                            fullPath: e + "offers_gold.png"
                        }]
                    },
                    objects: {}
                }
            }
        },
        1090: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Atlases_bonusWheel = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {}
                }
            }
        },
        1091: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Atlases_demo = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {}
                }
            }
        },
        1092: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Atlases_play = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {}
                }
            }
        },
        1093: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "frameIntroScreen",
                            fullPath: e + "playarea/frameIntroScreen.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenArrow",
                            fullPath: e + "playarea/introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextBottom",
                            fullPath: e + "playarea/introScreenTextBottom.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoStart(width=415, height=30, class=autoStartCheckBox)_clickableArea",
                            fullPath: e + "playarea/autoStart(width=415, height=30, class=autoStartCheckBox)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter1",
                            fullPath: e + "playarea/introScreenTextCenter1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter",
                            fullPath: e + "playarea/introScreenTextCenter.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "testBitmapText_aliases",
                            fullPath: e + "playarea/testBitmapText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton(spritesX=3)_button",
                            fullPath: e + "playarea/demoPlayButton(spritesX=3)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "demoPlayButtonText_aliases",
                            fullPath: e + "playarea/demoPlayButtonText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "popupNotification(scaleX=1920, scaleY=1080, color=#161525, class=cover)_cover",
                            fullPath: e + "playarea/popupNotification(scaleX=1920, scaleY=1080, color=#161525, class=cover)_cover.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "notificationPopupBackground1_asset",
                            fullPath: e + "playarea/notificationPopupBackground1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "popupNotificationsOkButton(spritesX=3)_button",
                            fullPath: e + "playarea/popupNotificationsOkButton(spritesX=3)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "popupNotificationsContent_aliases",
                            fullPath: e + "playarea/popupNotificationsContent_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "popupNotificationsHeadText_aliases",
                            fullPath: e + "playarea/popupNotificationsHeadText_aliases.png"
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
                                    type: mt.objects.IMAGE,
                                    name: "demoPlayButtonText_aliases",
                                    assetKey: "demoPlayButtonText_aliases",
                                    x: 962,
                                    y: 890
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "demoPlayButton(spritesX=3)_button",
                                    assetKey: "demoPlayButton(spritesX=3)_button",
                                    x: 808,
                                    y: 822
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "testBitmapText_aliases",
                                assetKey: "testBitmapText_aliases",
                                x: 10,
                                y: 346
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenTextCenter",
                                assetKey: "introScreenTextCenter",
                                x: 961,
                                y: 646
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenTextCenter1",
                                assetKey: "introScreenTextCenter1",
                                x: 961,
                                y: 728
                            }, {
                                type: mt.objects.IMAGE,
                                name: "autoStart(width=415, height=30, class=autoStartCheckBox)_clickableArea",
                                assetKey: "autoStart(width=415, height=30, class=autoStartCheckBox)_clickableArea",
                                x: 753,
                                y: 959
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenTextBottom",
                                assetKey: "introScreenTextBottom",
                                x: 790,
                                y: 975
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenArrow",
                                assetKey: "introScreenArrow",
                                x: 753,
                                y: 960
                            }, {
                                type: mt.objects.IMAGE,
                                name: "frameIntroScreen",
                                assetKey: "frameIntroScreen",
                                x: 751,
                                y: 957
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
        1094: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Ui = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        ".titleTextStyle": {
                            style: {
                                font: "16pt futuraptheavy",
                                fill: 15720895,
                                stroke: 3742993,
                                strokeThickness: 6
                            }
                        },
                        ".titleButtonStyle": {
                            style: {
                                font: "22pt futuraptheavy",
                                fill: 9961200,
                                stroke: 13356,
                                strokeThickness: 4,
                                lineHeight: 28,
                                align: "center"
                            }
                        },
                        ".titleButtonFreespinStyle": {
                            style: {
                                font: "18pt futuraptheavy",
                                fill: 15720895,
                                stroke: 3742993,
                                strokeThickness: 6
                            }
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "settingPanelBackBg_aliases",
                            fullPath: e + "playarea/settingPanelBackBg_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "helpButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/helpButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/settingsButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "soundButtonButton(spritesX=6)_button",
                            fullPath: e + "playarea/soundButtonButton(spritesX=6)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "fullscreenButtonButton(spritesX=6)_button",
                            fullPath: e + "playarea/fullscreenButtonButton(spritesX=6)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "framInfoContainerBg",
                            fullPath: e + "playarea/framInfoContainerBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "quickSettingsPanelButtonButton(spritesX=6)_button",
                            fullPath: e + "playarea/quickSettingsPanelButtonButton(spritesX=6)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingPanelBackBg1_asset",
                            fullPath: e + "playarea/settingPanelBackBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceContainerPlate",
                            fullPath: e + "playarea/balanceContainerPlate.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceText_aliases",
                            fullPath: e + "playarea/balanceText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceNumber_aliases",
                            fullPath: e + "playarea/balanceNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceContainerArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/balanceContainerArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceCoinsContainerBg",
                            fullPath: e + "playarea/balanceCoinsContainerBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceCoinsTextt_aliases",
                            fullPath: e + "playarea/balanceCoinsTextt_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceCoinsArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/balanceCoinsArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceCoinsNumber_aliases",
                            fullPath: e + "playarea/balanceCoinsNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "cashBetContainerBg",
                            fullPath: e + "playarea/cashBetContainerBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetContainerBg",
                            fullPath: e + "playarea/totalBetContainerBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetNumber_aliases",
                            fullPath: e + "playarea/totalBetNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetCoinsNumber_aliases",
                            fullPath: e + "playarea/totalBetCoinsNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetClickableArea(width=104, height=54, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/totalBetClickableArea(width=104, height=54, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betPlusButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/betPlusButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betMinusButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/betMinusButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetCoinsText_aliases",
                            fullPath: e + "playarea/totalBetCoinsText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueBg",
                            fullPath: e + "playarea/coinValueBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinPlusButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/coinPlusButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinMinusButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/coinMinusButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueNumber_aliases",
                            fullPath: e + "playarea/coinValueNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueText_aliases",
                            fullPath: e + "playarea/coinValueText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "buttonLinesPlate",
                            fullPath: e + "playarea/buttonLinesPlate.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesNumber_aliases",
                            fullPath: e + "playarea/linesNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesButtonAreaButton(width=80, height=90, class=linesChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/linesButtonAreaButton(width=80, height=90, class=linesChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesText_aliases",
                            fullPath: e + "playarea/linesText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalWinPlate",
                            fullPath: e + "playarea/totalWinPlate.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalWinTextA_aliases",
                            fullPath: e + "playarea/totalWinTextA_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalWinNumber_aliases",
                            fullPath: e + "playarea/totalWinNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "creditsTotalWinNumber_aliases",
                            fullPath: e + "playarea/creditsTotalWinNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalWinArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/totalWinArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winAreaPlate",
                            fullPath: e + "playarea/winAreaPlate.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "creditsWinNumber_aliases",
                            fullPath: e + "playarea/creditsWinNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winNumber_aliases",
                            fullPath: e + "playarea/winNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winText_aliases",
                            fullPath: e + "playarea/winText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/winArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "centralButtonBg",
                            fullPath: e + "playarea/centralButtonBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "offersFreespinCounter_aliases",
                            fullPath: e + "playarea/offersFreespinCounter_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "maxBetButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/maxBetButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "maxBetButtonText_aliases",
                            fullPath: e + "playarea/maxBetButtonText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autospinAmountSetterPanel_aliases",
                            fullPath: e + "playarea/autospinAmountSetterPanel_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autospinAmountSetterPanel1_asset",
                            fullPath: e + "playarea/autospinAmountSetterPanel1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autospinAmountSetterSeparator",
                            fullPath: e + "playarea/autospinAmountSetterSeparator.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "menuElementText_aliases",
                            fullPath: e + "playarea/menuElementText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "menuElementInfinity_aliases",
                            fullPath: e + "playarea/menuElementInfinity_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "menuElementBase_aliases",
                            fullPath: e + "playarea/menuElementBase_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "menuElementOver_aliases",
                            fullPath: e + "playarea/menuElementOver_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autospinAmountSetterButton(spritesX=2)_button",
                            fullPath: e + "playarea/autospinAmountSetterButton(spritesX=2)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoButtonButton(spritesX=8)_button",
                            fullPath: e + "playarea/autoButtonButton(spritesX=8)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoButtonText_aliases",
                            fullPath: e + "playarea/autoButtonText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoButtonAmountTextBase_aliases",
                            fullPath: e + "playarea/autoButtonAmountTextBase_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoButtonAmountTextInfinity_aliases",
                            fullPath: e + "playarea/autoButtonAmountTextInfinity_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoPlayAmountButtonText_aliases",
                            fullPath: e + "playarea/autoPlayAmountButtonText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "centralButtonFreeSpinsBg",
                            fullPath: e + "playarea/centralButtonFreeSpinsBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalFreespinText_aliases",
                            fullPath: e + "playarea/totalFreespinText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "playedFreespinText_aliases",
                            fullPath: e + "playarea/playedFreespinText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterManualFreeSpinsNumberB_aliases",
                            fullPath: e + "playarea/counterManualFreeSpinsNumberB_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterManualFreeSpinsNumberA_aliases",
                            fullPath: e + "playarea/counterManualFreeSpinsNumberA_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterFreeSpinsBg",
                            fullPath: e + "playarea/counterFreeSpinsBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterFreeSpinsNumberB_aliases",
                            fullPath: e + "playarea/counterFreeSpinsNumberB_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterFreeSpinsNumberA_aliases",
                            fullPath: e + "playarea/counterFreeSpinsNumberA_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterFreeSpinsTextB_aliases",
                            fullPath: e + "playarea/counterFreeSpinsTextB_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterFreeSpinsTextA_aliases",
                            fullPath: e + "playarea/counterFreeSpinsTextA_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "spinButtonButton(spritesX=8)_button",
                            fullPath: e + "playarea/spinButtonButton(spritesX=8)_button.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "UICointainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "UISpinPanelsContainer",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "playButtonContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "spinButtonButton(spritesX=8)_button",
                                        assetKey: "spinButtonButton(spritesX=8)_button",
                                        x: "892",
                                        y: "907",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "UISpinPanel_Automatic_FreespinGame_Container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "counterFreeSpinsTextA_aliases",
                                        assetKey: "counterFreeSpinsTextA_aliases",
                                        x: "961",
                                        y: "971",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "counterFreeSpinsTextB_aliases",
                                        assetKey: "counterFreeSpinsTextB_aliases",
                                        x: "959",
                                        y: "1030",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "counterFreeSpinsNumberA_aliases",
                                        assetKey: "counterFreeSpinsNumberA_aliases",
                                        x: "902",
                                        y: "1030",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "counterFreeSpinsNumberB_aliases",
                                        assetKey: "counterFreeSpinsNumberB_aliases",
                                        x: "1024",
                                        y: "1030",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "counterFreeSpinsBg",
                                        assetKey: "counterFreeSpinsBg",
                                        x: "734",
                                        y: "989",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "UISpinPanel_Manual_FreespinGame_Container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "counterManualFreeSpinsNumberA_aliases",
                                        assetKey: "counterManualFreeSpinsNumberA_aliases",
                                        x: "813",
                                        y: "1004",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "counterManualFreeSpinsNumberB_aliases",
                                        assetKey: "counterManualFreeSpinsNumberB_aliases",
                                        x: "1108",
                                        y: "1004",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "playedFreespinText_aliases",
                                        assetKey: "playedFreespinText_aliases",
                                        x: "810",
                                        y: "969",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "totalFreespinText_aliases",
                                        assetKey: "totalFreespinText_aliases",
                                        x: "1108",
                                        y: "969",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "centralButtonFreeSpinsBg",
                                        assetKey: "centralButtonFreeSpinsBg",
                                        x: "700",
                                        y: "884",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "UISpinPanel_Manual_MainGame_Container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "autoPlayAmountButtonText_aliases",
                                        assetKey: "autoPlayAmountButtonText_aliases",
                                        x: "814",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "autoButtonAmountTextInfinity_aliases",
                                        assetKey: "autoButtonAmountTextInfinity_aliases",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "autoButtonAmountTextBase_aliases",
                                        assetKey: "autoButtonAmountTextBase_aliases",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }, {
                                        type: 1,
                                        name: "autoButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "autoButtonText_aliases",
                                            assetKey: "autoButtonText_aliases",
                                            x: "812",
                                            y: "991",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "autoButtonButton(spritesX=8)_button",
                                            assetKey: "autoButtonButton(spritesX=8)_button",
                                            x: "724",
                                            y: "936",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "autoPlayAmountPanelContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "autospinAmountSetterButton(spritesX=2)_button",
                                            assetKey: "autospinAmountSetterButton(spritesX=2)_button",
                                            x: "783",
                                            y: "946",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "autoPlayAmountPanelContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "menuElementOver_aliases",
                                            assetKey: "menuElementOver_aliases",
                                            x: "830",
                                            y: "964",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "menuElementBase_aliases",
                                            assetKey: "menuElementBase_aliases",
                                            x: "830",
                                            y: "964",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "menuElementInfinity_aliases",
                                            assetKey: "menuElementInfinity_aliases",
                                            x: "830",
                                            y: "964",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "menuElementText_aliases",
                                            assetKey: "menuElementText_aliases",
                                            x: "830",
                                            y: "964",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "autospinAmountSetterSeparator",
                                            assetKey: "autospinAmountSetterSeparator",
                                            x: "783",
                                            y: "978",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "autospinAmountSetterPanel1_asset",
                                            assetKey: "autospinAmountSetterPanel1_asset",
                                            x: "771",
                                            y: "925",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "autospinAmountSetterPanel_aliases",
                                            assetKey: "autospinAmountSetterPanel_aliases",
                                            x: "823",
                                            y: "927",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "maxBetButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "maxBetButtonText_aliases",
                                            assetKey: "maxBetButtonText_aliases",
                                            x: "1110",
                                            y: "991",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "maxBetButtonButton(spritesX=4)_button",
                                            assetKey: "maxBetButtonButton(spritesX=4)_button",
                                            x: "1024",
                                            y: "936",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 0,
                                        name: "offersFreespinCounter_aliases",
                                        assetKey: "offersFreespinCounter_aliases",
                                        x: "1108",
                                        y: "991",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "centralButtonBg",
                                        assetKey: "centralButtonBg",
                                        x: "700",
                                        y: "884",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: 1,
                                name: "UIBottomPanelsContainer",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "UIWinContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "winArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "winArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "1385",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "winText_aliases",
                                        assetKey: "winText_aliases",
                                        x: "1385",
                                        y: "956",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "winNumber_aliases",
                                        assetKey: "winNumber_aliases",
                                        x: "1385",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "creditsWinNumber_aliases",
                                        assetKey: "creditsWinNumber_aliases",
                                        x: "1385",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "winAreaPlate",
                                        assetKey: "winAreaPlate",
                                        x: "1219",
                                        y: "969",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "UIFreespinWinContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "totalWinArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "totalWinArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "1385",
                                        y: "1009",
                                        alpha: "0.501960784313725"
                                    }, {
                                        type: 0,
                                        name: "creditsTotalWinNumber_aliases",
                                        assetKey: "creditsTotalWinNumber_aliases",
                                        x: "1385",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "totalWinNumber_aliases",
                                        assetKey: "totalWinNumber_aliases",
                                        x: "1385",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "totalWinTextA_aliases",
                                        assetKey: "totalWinTextA_aliases",
                                        x: "1385",
                                        y: "956",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "totalWinPlate",
                                        assetKey: "totalWinPlate",
                                        x: "1219",
                                        y: "969",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "linesArea",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "linesText_aliases",
                                        assetKey: "linesText_aliases",
                                        x: "175",
                                        y: "956",
                                        alpha: "1"
                                    }, {
                                        type: 1,
                                        name: "linesButtonArea",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "linesButtonAreaButton(width=80, height=90, class=linesChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                            assetKey: "linesButtonAreaButton(width=80, height=90, class=linesChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                            x: "132",
                                            y: "988",
                                            alpha: "0"
                                        }]
                                    }, {
                                        type: 0,
                                        name: "linesNumber_aliases",
                                        assetKey: "linesNumber_aliases",
                                        x: "173",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "buttonLinesPlate",
                                        assetKey: "buttonLinesPlate",
                                        x: "133",
                                        y: "969",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "coinValueContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "coinValueText_aliases",
                                        assetKey: "coinValueText_aliases",
                                        x: "322",
                                        y: "956",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "coinValueNumber_aliases",
                                        assetKey: "coinValueNumber_aliases",
                                        x: "322",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 1,
                                        name: "coinMinusButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "coinMinusButtonButton(spritesX=4)_button",
                                            assetKey: "coinMinusButtonButton(spritesX=4)_button",
                                            x: "239",
                                            y: "985",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "coinPlusButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "coinPlusButtonButton(spritesX=4)_button",
                                            assetKey: "coinPlusButtonButton(spritesX=4)_button",
                                            x: "358",
                                            y: "985",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 0,
                                        name: "coinValueBg",
                                        assetKey: "coinValueBg",
                                        x: "224",
                                        y: "969",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "totalBetContaner",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "totalBetCoinsText_aliases",
                                        assetKey: "totalBetCoinsText_aliases",
                                        x: "565",
                                        y: "956",
                                        alpha: "1"
                                    }, {
                                        type: 1,
                                        name: "betMinusButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "betMinusButtonButton(spritesX=4)_button",
                                            assetKey: "betMinusButtonButton(spritesX=4)_button",
                                            x: "446",
                                            y: "985",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "betPlusButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "betPlusButtonButton(spritesX=4)_button",
                                            assetKey: "betPlusButtonButton(spritesX=4)_button",
                                            x: "635",
                                            y: "985",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 0,
                                        name: "totalBetClickableArea(width=104, height=54, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "totalBetClickableArea(width=104, height=54, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "565",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 1,
                                        name: "totalBetCoinsContent_container",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "totalBetCoinsNumber_aliases",
                                            assetKey: "totalBetCoinsNumber_aliases",
                                            x: "565",
                                            y: "1009",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "totalBetContent_container",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "totalBetNumber_aliases",
                                            assetKey: "totalBetNumber_aliases",
                                            x: "565",
                                            y: "1009",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 0,
                                        name: "totalBetContainerBg",
                                        assetKey: "totalBetContainerBg",
                                        x: "431",
                                        y: "969",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "cashBetContainerBg",
                                        assetKey: "cashBetContainerBg",
                                        x: "431",
                                        y: "969",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "balanceCoinsContent_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "balanceCoinsNumber_aliases",
                                        assetKey: "balanceCoinsNumber_aliases",
                                        x: "1728",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceCoinsArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "balanceCoinsArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "1728",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceCoinsTextt_aliases",
                                        assetKey: "balanceCoinsTextt_aliases",
                                        x: "1728",
                                        y: "956",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceCoinsContainerBg",
                                        assetKey: "balanceCoinsContainerBg",
                                        x: "1560",
                                        y: "969",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "balanceContent_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "balanceContainerArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "balanceContainerArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "1728",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceNumber_aliases",
                                        assetKey: "balanceNumber_aliases",
                                        x: "1728",
                                        y: "1009",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceText_aliases",
                                        assetKey: "balanceText_aliases",
                                        x: "1728",
                                        y: "956",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceContainerPlate",
                                        assetKey: "balanceContainerPlate",
                                        x: "1560",
                                        y: "969",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: 1,
                                name: "UIQuickSettingsPanelContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "settingPanelBackBg1_asset",
                                    assetKey: "settingPanelBackBg1_asset",
                                    x: "33",
                                    y: "721",
                                    alpha: "1"
                                }, {
                                    type: 1,
                                    name: "infoPanelPlusButton",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "quickSettingsPanelButtonButton(spritesX=6)_button",
                                        assetKey: "quickSettingsPanelButtonButton(spritesX=6)_button",
                                        x: "41",
                                        y: "981",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 0,
                                    name: "framInfoContainerBg",
                                    assetKey: "framInfoContainerBg",
                                    x: "29",
                                    y: "968",
                                    alpha: "1"
                                }, {
                                    type: 1,
                                    name: "fullScreenButton",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "fullscreenButtonButton(spritesX=6)_button",
                                        assetKey: "fullscreenButtonButton(spritesX=6)_button",
                                        x: "41",
                                        y: "729",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "soundOffOnButtonButton",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "soundButtonButton(spritesX=6)_button",
                                        assetKey: "soundButtonButton(spritesX=6)_button",
                                        x: "41",
                                        y: "789",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "settingsButton",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "settingsButtonButton(spritesX=4)_button",
                                        assetKey: "settingsButtonButton(spritesX=4)_button",
                                        x: "41",
                                        y: "849",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "helpButtonButtonPanel",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "helpButtonButton(spritesX=4)_button",
                                        assetKey: "helpButtonButton(spritesX=4)_button",
                                        x: "41",
                                        y: "909",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 0,
                                    name: "settingPanelBackBg_aliases",
                                    assetKey: "settingPanelBackBg_aliases",
                                    x: "109",
                                    y: "1049",
                                    alpha: "1"
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1095: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Settings = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "spinSettingsBg1_asset",
                            fullPath: e + "playarea/spinSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "visualSettingsBg1_asset",
                            fullPath: e + "playarea/visualSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "optionsSettingsBg1_asset",
                            fullPath: e + "playarea/optionsSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSettingsBg1_asset",
                            fullPath: e + "playarea/audioSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderButtonPlus",
                            fullPath: e + "playarea/audioSliderButtonPlus.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderButtonMinus",
                            fullPath: e + "playarea/audioSliderButtonMinus.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSlider_bg",
                            fullPath: e + "playarea/audioSlider_bg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderInactiveBg",
                            fullPath: e + "playarea/audioSliderInactiveBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderBg_fill",
                            fullPath: e + "playarea/audioSliderBg_fill.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderButtonButton(spritesX=4)_handle",
                            fullPath: e + "playarea/audioSliderButtonButton(spritesX=4)_handle.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsPressSpaceToSpinButtonButton(spritesX=8)_button",
                            fullPath: e + "playarea/settingsPressSpaceToSpinButtonButton(spritesX=8)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "turboModeButtonButton(spritesX=8)_button",
                            fullPath: e + "playarea/turboModeButtonButton(spritesX=8)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsSplashScreenButtonButton(spritesX=8)_button",
                            fullPath: e + "playarea/settingsSplashScreenButtonButton(spritesX=8)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsDisplayValuesInCoinsButtonButton(spritesX=8)_button",
                            fullPath: e + "playarea/settingsDisplayValuesInCoinsButtonButton(spritesX=8)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pressSpaceText_alias",
                            fullPath: e + "playarea/pressSpaceText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "turboText_alias",
                            fullPath: e + "playarea/turboText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "showText_alias",
                            fullPath: e + "playarea/showText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "displayText_alias",
                            fullPath: e + "playarea/displayText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textStyle_aliases",
                            fullPath: e + "playarea/textStyle_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "spinSpeedName_alias",
                            fullPath: e + "playarea/spinSpeedName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsVisualName_alias",
                            fullPath: e + "playarea/settingsVisualName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsOptionsName_alias",
                            fullPath: e + "playarea/settingsOptionsName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsAudioName_alias",
                            fullPath: e + "playarea/settingsAudioName_alias.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "settingWindowContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "settingsAudioName_alias",
                                assetKey: "settingsAudioName_alias",
                                x: "164",
                                y: "161",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "settingsOptionsName_alias",
                                assetKey: "settingsOptionsName_alias",
                                x: "163",
                                y: "363",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "settingsVisualName_alias",
                                assetKey: "settingsVisualName_alias",
                                x: "164",
                                y: "572",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "spinSpeedName_alias",
                                assetKey: "spinSpeedName_alias",
                                x: "163",
                                y: "773",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "textStyle_aliases",
                                assetKey: "textStyle_aliases",
                                x: "0",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "displayText_alias",
                                assetKey: "displayText_alias",
                                x: "902",
                                y: "370",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "showText_alias",
                                assetKey: "showText_alias",
                                x: "902",
                                y: "575",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "turboText_alias",
                                assetKey: "turboText_alias",
                                x: "902",
                                y: "779",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "pressSpaceText_alias",
                                assetKey: "pressSpaceText_alias",
                                x: "1518",
                                y: "370",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "optionValueButtonContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "settingsDisplayValuesInCoinsButtonButton(spritesX=8)_button",
                                    assetKey: "settingsDisplayValuesInCoinsButtonButton(spritesX=8)_button",
                                    x: "569",
                                    y: "327",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "visualButtonContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "settingsSplashScreenButtonButton(spritesX=8)_button",
                                    assetKey: "settingsSplashScreenButtonButton(spritesX=8)_button",
                                    x: "569",
                                    y: "532",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "turboModeButtonContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "turboModeButtonButton(spritesX=8)_button",
                                    assetKey: "turboModeButtonButton(spritesX=8)_button",
                                    x: "569",
                                    y: "735",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "optionSpaceButtonContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "settingsPressSpaceToSpinButtonButton(spritesX=8)_button",
                                    assetKey: "settingsPressSpaceToSpinButtonButton(spritesX=8)_button",
                                    x: "1184",
                                    y: "327",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "audioSliderButtonContainer(marginLeft=38, marginRight=38, fillInactiveAssetKey=audioSliderInactiveBg)_sliderAdvanced",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "audioSliderButtonButton(spritesX=4)_handle",
                                    assetKey: "audioSliderButtonButton(spritesX=4)_handle",
                                    x: "1025",
                                    y: "125",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "audioSliderBg_fill",
                                    assetKey: "audioSliderBg_fill",
                                    x: "578",
                                    y: "154",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "audioSliderInactiveBg",
                                    assetKey: "audioSliderInactiveBg",
                                    x: "578",
                                    y: "154",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "audioSlider_bg",
                                    assetKey: "audioSlider_bg",
                                    x: "568",
                                    y: "144",
                                    alpha: "1"
                                }]
                            }, {
                                type: 0,
                                name: "audioSliderButtonMinus",
                                assetKey: "audioSliderButtonMinus",
                                x: "505",
                                y: "157",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "audioSliderButtonPlus",
                                assetKey: "audioSliderButtonPlus",
                                x: "1641",
                                y: "144",
                                alpha: "1"
                            }, {
                                type: mt.objects.IMAGE,
                                name: "spinSettingsBg1_asset",
                                assetKey: "spinSettingsBg1_asset",
                                x: 66,
                                y: 679
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "spinSettingsBg",
                                assetKey: "spinSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 679
                            }, {
                                type: mt.objects.IMAGE,
                                name: "visualSettingsBg1_asset",
                                assetKey: "visualSettingsBg1_asset",
                                x: 66,
                                y: 474
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "visualSettingsBg",
                                assetKey: "visualSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 474
                            }, {
                                type: mt.objects.IMAGE,
                                name: "optionsSettingsBg1_asset",
                                assetKey: "optionsSettingsBg1_asset",
                                x: 66,
                                y: 269
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "optionsSettingsBg",
                                assetKey: "optionsSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 269
                            }, {
                                type: mt.objects.IMAGE,
                                name: "audioSettingsBg1_asset",
                                assetKey: "audioSettingsBg1_asset",
                                x: 66,
                                y: 64
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "audioSettingsBg",
                                assetKey: "audioSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 64
                            }]
                        }]
                    }
                }
            }
        },
        1096: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.BetSettings = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "betLevelBetSettingsBg1_asset",
                            fullPath: e + "playarea/betLevelBetSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesBetSettingsBg1_asset",
                            fullPath: e + "playarea/linesBetSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueBetSettingsBg1_asset",
                            fullPath: e + "playarea/coinValueBetSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinsMaximumNumber(class=coinsMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text",
                            fullPath: e + "playarea/coinsMaximumNumber(class=coinsMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinsMinimumNumber(class=coinsMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text",
                            fullPath: e + "playarea/coinsMinimumNumber(class=coinsMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesMaximumNumber(class=linesMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text",
                            fullPath: e + "playarea/linesMaximumNumber(class=linesMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesMinimumNumber(class=linesMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text",
                            fullPath: e + "playarea/linesMinimumNumber(class=linesMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betLevelMaximumNumber(class=betMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text",
                            fullPath: e + "playarea/betLevelMaximumNumber(class=betMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betLevelMinimumNumber(class=betMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text",
                            fullPath: e + "playarea/betLevelMinimumNumber(class=betMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueSliderTooltip(anchorX=0.5, anchorY=1)_tooltip",
                            fullPath: e + "playarea/coinValueSliderTooltip(anchorX=0.5, anchorY=1)_tooltip.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text",
                            fullPath: e + "playarea/coinValueSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value",
                            fullPath: e + "playarea/coinValueSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueSlider_bg",
                            fullPath: e + "playarea/coinValueSlider_bg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueInactiveBg",
                            fullPath: e + "playarea/coinValueInactiveBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueSliderBg_fill",
                            fullPath: e + "playarea/coinValueSliderBg_fill.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueSliderButtonButton(spritesX=4)_handle",
                            fullPath: e + "playarea/coinValueSliderButtonButton(spritesX=4)_handle.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesLevelSliderTooltip(anchorX=0.5, anchorY=1)_tooltip",
                            fullPath: e + "playarea/linesLevelSliderTooltip(anchorX=0.5, anchorY=1)_tooltip.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesLevelSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text",
                            fullPath: e + "playarea/linesLevelSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesLevelSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value",
                            fullPath: e + "playarea/linesLevelSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesSlider_bg",
                            fullPath: e + "playarea/linesSlider_bg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesInactiveBg",
                            fullPath: e + "playarea/linesInactiveBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesSliderBg_fill",
                            fullPath: e + "playarea/linesSliderBg_fill.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesSliderButtonButton(spritesX=4)_handle",
                            fullPath: e + "playarea/linesSliderButtonButton(spritesX=4)_handle.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betLevelSliderTooltip(anchorX=0.5, anchorY=1)_tooltip",
                            fullPath: e + "playarea/betLevelSliderTooltip(anchorX=0.5, anchorY=1)_tooltip.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betLevelSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text",
                            fullPath: e + "playarea/betLevelSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betLevelSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value",
                            fullPath: e + "playarea/betLevelSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betLevelSlider_bg",
                            fullPath: e + "playarea/betLevelSlider_bg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betLevelInactiveBg",
                            fullPath: e + "playarea/betLevelInactiveBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betLevelSliderBg_fill",
                            fullPath: e + "playarea/betLevelSliderBg_fill.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betLevelButtonButton(spritesX=4)_handle",
                            fullPath: e + "playarea/betLevelButtonButton(spritesX=4)_handle.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betInCoinContainerBg",
                            fullPath: e + "playarea/betInCoinContainerBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betInCoinContainerBgName(text=BET IN COINS, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5)_text",
                            fullPath: e + "playarea/betInCoinContainerBgName(text=BET IN COINS, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsBetInCoinsNumber(class=creditsTotalBetNumber betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text",
                            fullPath: e + "playarea/settingsBetInCoinsNumber(class=creditsTotalBetNumber betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betInCashContainerBg",
                            fullPath: e + "playarea/betInCashContainerBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betInCashContainerBgName(text=BET IN CASH, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5)_text",
                            fullPath: e + "playarea/betInCashContainerBgName(text=BET IN CASH, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsBetInCashNumber(class=totalBetNumber balanceCurrency betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text",
                            fullPath: e + "playarea/settingsBetInCashNumber(class=totalBetNumber balanceCurrency betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingsCoinValueName(text=Coin value, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                            fullPath: e + "playarea/betSettingsCoinValueName(text=Coin value, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingsLineslName(text=Lines, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                            fullPath: e + "playarea/betSettingsLineslName(text=Lines, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingsBetLevelName(text=Bet Level, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                            fullPath: e + "playarea/betSettingsBetLevelName(text=Bet Level, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "betSettingsContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "betSettingsBetLevelName(text=Bet Level, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                                assetKey: "betSettingsBetLevelName(text=Bet Level, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                                x: "163",
                                y: "362",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "betSettingsLineslName(text=Ways, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                                assetKey: "betSettingsLineslName(text=Lines, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                                x: "163",
                                y: "567",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "betSettingsCoinValueName(text=Coin value, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                                assetKey: "betSettingsCoinValueName(text=Coin value, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5)_text",
                                x: "163",
                                y: "772",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "settingsBetInCashContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "settingsBetInCashNumber(class=totalBetNumber balanceCurrency betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text",
                                    assetKey: "settingsBetInCashNumber(class=totalBetNumber balanceCurrency betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text",
                                    x: "493",
                                    y: "183",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betInCashContainerBgName(text=BET IN CASH, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5)_text",
                                    assetKey: "betInCashContainerBgName(text=BET IN CASH, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5)_text",
                                    x: "493",
                                    y: "46",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betInCashContainerBg",
                                    assetKey: "betInCashContainerBg",
                                    x: "60",
                                    y: "109",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "settingsBetInCoinsContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "settingsBetInCoinsNumber(class=creditsTotalBetNumber betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text",
                                    assetKey: "settingsBetInCoinsNumber(class=creditsTotalBetNumber betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text",
                                    x: "1423",
                                    y: "183",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betInCoinContainerBgName(text=BET IN COINS, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5)_text",
                                    assetKey: "betInCoinContainerBgName(text=BET IN COINS, font=37pt futuraptmedium, fill=#fec36d, anchorX=0.5)_text",
                                    x: "1423",
                                    y: "46",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betInCoinContainerBg",
                                    assetKey: "betInCoinContainerBg",
                                    x: "990",
                                    y: "109",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "betLevelButtonContainer(marginLeft=38, marginRight=38, fillInactiveAssetKey=betLevelInactiveBg)_sliderAdvanced",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "betLevelButtonButton(spritesX=4)_handle",
                                    assetKey: "betLevelButtonButton(spritesX=4)_handle",
                                    x: "1083",
                                    y: "325",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betLevelSliderBg_fill",
                                    assetKey: "betLevelSliderBg_fill",
                                    x: "635",
                                    y: "353",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betLevelInactiveBg",
                                    assetKey: "betLevelInactiveBg",
                                    x: "635",
                                    y: "353",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betLevelSlider_bg",
                                    assetKey: "betLevelSlider_bg",
                                    x: "625",
                                    y: "343",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betLevelSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value",
                                    assetKey: "betLevelSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value",
                                    x: "1117",
                                    y: "292",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betLevelSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text",
                                    assetKey: "betLevelSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text",
                                    x: "1117",
                                    y: "279",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betLevelSliderTooltip(anchorX=0.5, anchorY=1)_tooltip",
                                    assetKey: "betLevelSliderTooltip(anchorX=0.5, anchorY=1)_tooltip",
                                    x: "1049",
                                    y: "252",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "linesSliderButtonContainer(marginLeft=38, marginRight=38, fillInactiveAssetKey=linesInactiveBg)_sliderAdvanced",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "linesSliderButtonButton(spritesX=4)_handle",
                                    assetKey: "linesSliderButtonButton(spritesX=4)_handle",
                                    x: "1083",
                                    y: "531",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "linesSliderBg_fill",
                                    assetKey: "linesSliderBg_fill",
                                    x: "635",
                                    y: "560",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "linesInactiveBg",
                                    assetKey: "linesInactiveBg",
                                    x: "635",
                                    y: "560",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "linesSlider_bg",
                                    assetKey: "linesSlider_bg",
                                    x: "625",
                                    y: "550",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "linesLevelSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value",
                                    assetKey: "linesLevelSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value",
                                    x: "1117",
                                    y: "498",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "linesLevelSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text",
                                    assetKey: "linesLevelSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text",
                                    x: "1117",
                                    y: "485",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "linesLevelSliderTooltip(anchorX=0.5, anchorY=1)_tooltip",
                                    assetKey: "linesLevelSliderTooltip(anchorX=0.5, anchorY=1)_tooltip",
                                    x: "1049",
                                    y: "458",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "coinValueSliderButtonContainer(marginLeft=38, marginRight=38, fillInactiveAssetKey=coinValueInactiveBg)_sliderAdvanced",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "coinValueSliderButtonButton(spritesX=4)_handle",
                                    assetKey: "coinValueSliderButtonButton(spritesX=4)_handle",
                                    x: "1083",
                                    y: "737",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "coinValueSliderBg_fill",
                                    assetKey: "coinValueSliderBg_fill",
                                    x: "635",
                                    y: "764",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "coinValueInactiveBg",
                                    assetKey: "coinValueInactiveBg",
                                    x: "635",
                                    y: "764",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "coinValueSlider_bg",
                                    assetKey: "coinValueSlider_bg",
                                    x: "625",
                                    y: "754",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "coinValueSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value",
                                    assetKey: "coinValueSliderValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#efc273)_value",
                                    x: "1117",
                                    y: "703",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "coinValueSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text",
                                    assetKey: "coinValueSliderTooltipValue(text=5, class=audioSliderText, font=28pt futuraptmedium, anchorX=0.5, anchorY=0.5, fill=#000000)_text",
                                    x: "1117",
                                    y: "690",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "coinValueSliderTooltip(anchorX=0.5, anchorY=1)_tooltip",
                                    assetKey: "coinValueSliderTooltip(anchorX=0.5, anchorY=1)_tooltip",
                                    x: "1049",
                                    y: "663",
                                    alpha: "1"
                                }]
                            }, {
                                type: 0,
                                name: "betLevelMinimumNumber(class=betMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text",
                                assetKey: "betLevelMinimumNumber(class=betMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text",
                                x: "575",
                                y: "362",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "betLevelMaximumNumber(class=betMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text",
                                assetKey: "betLevelMaximumNumber(class=betMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text",
                                x: "1711",
                                y: "362",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "linesMinimumNumber(class=linesMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text",
                                assetKey: "linesMinimumNumber(class=linesMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text",
                                x: "575",
                                y: "567",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "linesMaximumNumber(class=linesMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text",
                                assetKey: "linesMaximumNumber(class=linesMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text",
                                x: "1705",
                                y: "567",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "coinsMinimumNumber(class=coinsMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text",
                                assetKey: "coinsMinimumNumber(class=coinsMinimum, font=29pt futuraptmedium, fill=#eee0bf, anchorX=1, anchorY=0.5)_text",
                                x: "575",
                                y: "772",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "coinsMaximumNumber(class=coinsMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text",
                                assetKey: "coinsMaximumNumber(class=coinsMaximum, font=29pt futuraptmedium, fill=#eee0bf, anchorY=0.5)_text",
                                x: "1705",
                                y: "772",
                                alpha: "1"
                            }, {
                                type: mt.objects.IMAGE,
                                name: "coinValueBetSettingsBg1_asset",
                                assetKey: "coinValueBetSettingsBg1_asset",
                                x: 66,
                                y: 679
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "coinValueBetSettingsBg",
                                assetKey: "coinValueBetSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 679
                            }, {
                                type: mt.objects.IMAGE,
                                name: "linesBetSettingsBg1_asset",
                                assetKey: "linesBetSettingsBg1_asset",
                                x: 66,
                                y: 474
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "linesBetSettingsBg",
                                assetKey: "linesBetSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 474
                            }, {
                                type: mt.objects.IMAGE,
                                name: "betLevelBetSettingsBg1_asset",
                                assetKey: "betLevelBetSettingsBg1_asset",
                                x: 66,
                                y: 269
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "betLevelBetSettingsBg",
                                assetKey: "betLevelBetSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 269
                            }]
                        }]
                    }
                }
            }
        },
        1097: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Help = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "infoNextButtonButton_button",
                            fullPath: e + "playarea/infoNextButtonButton_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "infoPrevButtonButton_button",
                            fullPath: e + "playarea/infoPrevButtonButton_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoSixPlate(spritesY=2, groupName=helpCarousel, selection=5)_radioButton",
                            fullPath: e + "playarea/pageInfoSixPlate(spritesY=2, groupName=helpCarousel, selection=5)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoFivePlate(spritesY=2, groupName=helpCarousel, selection=4)_radioButton",
                            fullPath: e + "playarea/pageInfoFivePlate(spritesY=2, groupName=helpCarousel, selection=4)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoFourPlate(spritesY=2, groupName=helpCarousel, selection=3)_radioButton",
                            fullPath: e + "playarea/pageInfoFourPlate(spritesY=2, groupName=helpCarousel, selection=3)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoThreePlate(spritesY=2, groupName=helpCarousel, selection=2)_radioButton",
                            fullPath: e + "playarea/pageInfoThreePlate(spritesY=2, groupName=helpCarousel, selection=2)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoTwoPlate(spritesY=2, groupName=helpCarousel, selection=1)_radioButton",
                            fullPath: e + "playarea/pageInfoTwoPlate(spritesY=2, groupName=helpCarousel, selection=1)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoOnePlate(spritesY=2, groupName=helpCarousel, selection=0)_radioButton",
                            fullPath: e + "playarea/pageInfoOnePlate(spritesY=2, groupName=helpCarousel, selection=0)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "nameBg",
                            fullPath: e + "playarea/nameBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesText_aliases",
                            fullPath: e + "playarea/rulesText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesName_aliases",
                            fullPath: e + "playarea/rulesName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFive1_content",
                            fullPath: e + "playarea/pageFive1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFive0_content",
                            fullPath: e + "playarea/pageFive0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFiveText1_aliases",
                            fullPath: e + "playarea/pageFiveText1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFiveText0_aliases",
                            fullPath: e + "playarea/pageFiveText0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFour4_content",
                            fullPath: e + "playarea/pageFour4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFour3_content",
                            fullPath: e + "playarea/pageFour3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFour0_content",
                            fullPath: e + "playarea/pageFour0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFourText3_aliases",
                            fullPath: e + "playarea/pageFourText3_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFourText2_aliases",
                            fullPath: e + "playarea/pageFourText2_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFourText1_aliases",
                            fullPath: e + "playarea/pageFourText1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFourText0_aliases",
                            fullPath: e + "playarea/pageFourText0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree5_content",
                            fullPath: e + "playarea/pageThree5_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree4_content",
                            fullPath: e + "playarea/pageThree4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree3_content",
                            fullPath: e + "playarea/pageThree3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree2_content",
                            fullPath: e + "playarea/pageThree2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree1_content",
                            fullPath: e + "playarea/pageThree1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree0_content",
                            fullPath: e + "playarea/pageThree0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber8(class=ps11-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber8(class=ps11-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber7(class=ps11-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber7(class=ps11-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber6(class=ps11-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber6(class=ps11-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber2(text=2 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber2(text=2 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber5(class=ps10-2 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber5(class=ps10-2 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber5(class=ps10-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber5(class=ps10-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber4(class=ps10-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber4(class=ps10-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber3(class=ps10-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber3(class=ps10-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber11(class=ps9-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber11(class=ps9-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber10(class=ps9-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber10(class=ps9-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber9(class=ps9-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber9(class=ps9-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber14(class=ps8-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber14(class=ps8-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber13(class=ps8-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber13(class=ps8-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber12(class=ps8-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber12(class=ps8-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber17(class=ps7-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber17(class=ps7-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber16(class=ps7-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber16(class=ps7-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber15(class=ps7-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber15(class=ps7-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber2(class=ps6-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber2(class=ps6-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber1(class=ps6-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber1(class=ps6-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber0(class=ps6-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber0(class=ps6-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo4_content",
                            fullPath: e + "playarea/pageTwo4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo3_content",
                            fullPath: e + "playarea/pageTwo3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo2_content",
                            fullPath: e + "playarea/pageTwo2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo1_content",
                            fullPath: e + "playarea/pageTwo1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo0_content",
                            fullPath: e + "playarea/pageTwo0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber14(class=ps5-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber14(class=ps5-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber13(class=ps5-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber13(class=ps5-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber12(class=ps5-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber12(class=ps5-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber11(class=ps4-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber11(class=ps4-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber10(class=ps4-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber10(class=ps4-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber9(class=ps4-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber9(class=ps4-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber8(class=ps3-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber8(class=ps3-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber7(class=ps3-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber7(class=ps3-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber6(class=ps3-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber6(class=ps3-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=2 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=2 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber5(class=ps1-2 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber5(class=ps1-2 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber5(class=ps1-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber5(class=ps1-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber4(class=ps1-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber4(class=ps1-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber3(class=ps1-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber3(class=ps1-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber2(class=ps2-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber2(class=ps2-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber1(class=ps2-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber1(class=ps2-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber0(class=ps2-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber0(class=ps2-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoText_aliases",
                            fullPath: e + "playarea/pageTwoText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOne1_content",
                            fullPath: e + "playarea/pageOne1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOne0_content",
                            fullPath: e + "playarea/pageOne0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3, class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3, class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4, class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4, class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5, class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5, class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber6(class=ps12-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber6(class=ps12-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber5(class=ps12-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber5(class=ps12-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber4(class=ps12-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber4(class=ps12-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText2_aliases",
                            fullPath: e + "playarea/pageOneText2_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText1_aliases",
                            fullPath: e + "playarea/pageOneText1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText0_aliases",
                            fullPath: e + "playarea/pageOneText0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumbersYellow(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#fec36d)_style",
                            fullPath: e + "playarea/textNumbersYellow(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#fec36d)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#ffffff)_style",
                            fullPath: e + "playarea/paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#ffffff)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "info_container",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "pagesInfo_container",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "pageInfoOne_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "960",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#ffffff)_style",
                                        assetKey: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#ffffff)_style",
                                        x: "583",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumbersYellow(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#fec36d)_style",
                                        assetKey: "textNumbersYellow(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#fec36d)_style",
                                        x: "583",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText0_aliases",
                                        assetKey: "pageOneText0_aliases",
                                        x: "604",
                                        y: "687",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText1_aliases",
                                        assetKey: "pageOneText1_aliases",
                                        x: "1293",
                                        y: "687",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText2_aliases",
                                        assetKey: "pageOneText2_aliases",
                                        x: "960",
                                        y: "870",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber4(class=ps12-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber4(class=ps12-5 paytableNumbersWhite)_text",
                                        x: "834",
                                        y: "343",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber5(class=ps12-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber5(class=ps12-4 paytableNumbersWhite)_text",
                                        x: "834",
                                        y: "398",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber6(class=ps12-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber6(class=ps12-3 paytableNumbersWhite)_text",
                                        x: "834",
                                        y: "454",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5, class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5, class=textNumbersYellow)_text",
                                        x: "786",
                                        y: "343",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4, class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4, class=textNumbersYellow)_text",
                                        x: "786",
                                        y: "398",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3, class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3, class=textNumbersYellow)_text",
                                        x: "786",
                                        y: "454",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOne0_content",
                                        assetKey: "pageOne0_content",
                                        x: "452",
                                        y: "249",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOne1_content",
                                        assetKey: "pageOne1_content",
                                        x: "1137",
                                        y: "208",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoTwo_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "960",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoText_aliases",
                                        assetKey: "pageTwoText_aliases",
                                        x: "960",
                                        y: "870",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber0(class=ps2-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber0(class=ps2-5 paytableNumbersWhite)_text",
                                        x: "1052",
                                        y: "249",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber1(class=ps2-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber1(class=ps2-4 paytableNumbersWhite)_text",
                                        x: "1052",
                                        y: "304",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber2(class=ps2-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber2(class=ps2-3 paytableNumbersWhite)_text",
                                        x: "1052",
                                        y: "359",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1017",
                                        y: "249",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1017",
                                        y: "304",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1017",
                                        y: "359",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        x: "513",
                                        y: "219",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        x: "513",
                                        y: "274",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        x: "513",
                                        y: "328",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber5(class=ps1-2 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber5(class=ps1-2 paytableNumbersWhite)_text",
                                        x: "513",
                                        y: "383",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "478",
                                        y: "219",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "478",
                                        y: "274",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "478",
                                        y: "328",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=2 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=2 , class=textNumbersYellow)_text",
                                        x: "478",
                                        y: "383",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber6(class=ps3-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber6(class=ps3-5 paytableNumbersWhite)_text",
                                        x: "1595",
                                        y: "247",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber7(class=ps3-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber7(class=ps3-4 paytableNumbersWhite)_text",
                                        x: "1595",
                                        y: "303",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber8(class=ps3-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber8(class=ps3-3 paytableNumbersWhite)_text",
                                        x: "1595",
                                        y: "358",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1556",
                                        y: "247",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1556",
                                        y: "303",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1556",
                                        y: "358",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber9(class=ps4-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber9(class=ps4-5 paytableNumbersWhite)_text",
                                        x: "841",
                                        y: "620",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber10(class=ps4-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber10(class=ps4-4 paytableNumbersWhite)_text",
                                        x: "841",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber11(class=ps4-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber11(class=ps4-3 paytableNumbersWhite)_text",
                                        x: "841",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "806",
                                        y: "620",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "806",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "806",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber12(class=ps5-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber12(class=ps5-5 paytableNumbersWhite)_text",
                                        x: "1407",
                                        y: "625",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber13(class=ps5-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber13(class=ps5-4 paytableNumbersWhite)_text",
                                        x: "1407",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber14(class=ps5-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber14(class=ps5-3 paytableNumbersWhite)_text",
                                        x: "1407",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1372",
                                        y: "625",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1372",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1372",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo0_content",
                                        assetKey: "pageTwo0_content",
                                        x: "509",
                                        y: "536",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo1_content",
                                        assetKey: "pageTwo1_content",
                                        x: "1267",
                                        y: "189",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo2_content",
                                        assetKey: "pageTwo2_content",
                                        x: "190",
                                        y: "161",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo3_content",
                                        assetKey: "pageTwo3_content",
                                        x: "1082",
                                        y: "552",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo4_content",
                                        assetKey: "pageTwo4_content",
                                        x: "728",
                                        y: "186",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoThree_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "960",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber0(class=ps6-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber0(class=ps6-5 paytableNumbersWhite)_text",
                                        x: "538",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber1(class=ps6-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber1(class=ps6-4 paytableNumbersWhite)_text",
                                        x: "538",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber2(class=ps6-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber2(class=ps6-3 paytableNumbersWhite)_text",
                                        x: "538",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "503",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "503",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "503",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber15(class=ps7-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber15(class=ps7-5 paytableNumbersWhite)_text",
                                        x: "1070",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber16(class=ps7-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber16(class=ps7-4 paytableNumbersWhite)_text",
                                        x: "1070",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber17(class=ps7-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber17(class=ps7-3 paytableNumbersWhite)_text",
                                        x: "1070",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1035",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1035",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1035",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber12(class=ps8-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber12(class=ps8-5 paytableNumbersWhite)_text",
                                        x: "1585",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber13(class=ps8-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber13(class=ps8-4 paytableNumbersWhite)_text",
                                        x: "1585",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber14(class=ps8-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber14(class=ps8-3 paytableNumbersWhite)_text",
                                        x: "1585",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1550",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1550",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1550",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber9(class=ps9-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber9(class=ps9-5 paytableNumbersWhite)_text",
                                        x: "539",
                                        y: "625",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber10(class=ps9-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber10(class=ps9-4 paytableNumbersWhite)_text",
                                        x: "539",
                                        y: "678",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber11(class=ps9-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber11(class=ps9-3 paytableNumbersWhite)_text",
                                        x: "539",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "504",
                                        y: "625",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "504",
                                        y: "679",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "504",
                                        y: "731",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber3(class=ps10-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber3(class=ps10-5 paytableNumbersWhite)_text",
                                        x: "1121",
                                        y: "613",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber4(class=ps10-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber4(class=ps10-4 paytableNumbersWhite)_text",
                                        x: "1121",
                                        y: "666",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber5(class=ps10-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber5(class=ps10-3 paytableNumbersWhite)_text",
                                        x: "1121",
                                        y: "718",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber5(class=ps10-2 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber5(class=ps10-2 paytableNumbersWhite)_text",
                                        x: "1121",
                                        y: "770",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1086",
                                        y: "613",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1086",
                                        y: "666",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1086",
                                        y: "718",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber2(text=2 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber2(text=2 , class=textNumbersYellow)_text",
                                        x: "1086",
                                        y: "770",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber6(class=ps11-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber6(class=ps11-5 paytableNumbersWhite)_text",
                                        x: "1576",
                                        y: "627",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber7(class=ps11-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber7(class=ps11-4 paytableNumbersWhite)_text",
                                        x: "1576",
                                        y: "680",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber8(class=ps11-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber8(class=ps11-3 paytableNumbersWhite)_text",
                                        x: "1576",
                                        y: "732",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1541",
                                        y: "627",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1541",
                                        y: "680",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1541",
                                        y: "732",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree0_content",
                                        assetKey: "pageThree0_content",
                                        x: "223",
                                        y: "152",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree1_content",
                                        assetKey: "pageThree1_content",
                                        x: "732",
                                        y: "123",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree2_content",
                                        assetKey: "pageThree2_content",
                                        x: "1242",
                                        y: "160",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree3_content",
                                        assetKey: "pageThree3_content",
                                        x: "223",
                                        y: "523",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree4_content",
                                        assetKey: "pageThree4_content",
                                        x: "720",
                                        y: "529",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree5_content",
                                        assetKey: "pageThree5_content",
                                        x: "1221",
                                        y: "508",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoFour_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "960",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFourText0_aliases",
                                        assetKey: "pageFourText0_aliases",
                                        x: "960",
                                        y: "154",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFourText1_aliases",
                                        assetKey: "pageFourText1_aliases",
                                        x: "960",
                                        y: "594",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFourText2_aliases",
                                        assetKey: "pageFourText2_aliases",
                                        x: "895",
                                        y: "864",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFourText3_aliases",
                                        assetKey: "pageFourText3_aliases",
                                        x: "1028",
                                        y: "864",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFour0_content",
                                        assetKey: "pageFour0_content",
                                        x: "683",
                                        y: "203",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFour3_content",
                                        assetKey: "pageFour3_content",
                                        x: "960",
                                        y: "660",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFour4_content",
                                        assetKey: "pageFour4_content",
                                        x: "827",
                                        y: "660",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoFive_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "960",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFiveText0_aliases",
                                        assetKey: "pageFiveText0_aliases",
                                        x: "587",
                                        y: "158",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFiveText1_aliases",
                                        assetKey: "pageFiveText1_aliases",
                                        x: "1330",
                                        y: "824",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFive0_content",
                                        assetKey: "pageFive0_content",
                                        x: "250",
                                        y: "209",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFive1_content",
                                        assetKey: "pageFive1_content",
                                        x: "1021",
                                        y: "111",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoSix_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "rulesName_aliases",
                                        assetKey: "rulesName_aliases",
                                        x: "960",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "rulesText_aliases",
                                        assetKey: "rulesText_aliases",
                                        x: "960",
                                        y: "480",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "rtpTextEN_aliases",
                                        assetKey: "rulesText_aliases",
                                        x: "960",
                                        y: "835",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "rtpTextRU_aliases",
                                        assetKey: "rulesText_aliases",
                                        x: "960",
                                        y: "835",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: 0,
                                name: "nameBg",
                                assetKey: "nameBg",
                                x: "0",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "paginationInfo_container",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "pageInfoOnePlate(spritesY=2, groupName=helpCarousel, selection=0)_radioButton",
                                    assetKey: "pageInfoOnePlate(spritesY=2, groupName=helpCarousel, selection=0)_radioButton",
                                    x: "814",
                                    y: "914",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoTwoPlate(spritesY=2, groupName=helpCarousel, selection=1)_radioButton",
                                    assetKey: "pageInfoTwoPlate(spritesY=2, groupName=helpCarousel, selection=1)_radioButton",
                                    x: "864",
                                    y: "914",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoThreePlate(spritesY=2, groupName=helpCarousel, selection=2)_radioButton",
                                    assetKey: "pageInfoThreePlate(spritesY=2, groupName=helpCarousel, selection=2)_radioButton",
                                    x: "914",
                                    y: "914",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoFourPlate(spritesY=2, groupName=helpCarousel, selection=3)_radioButton",
                                    assetKey: "pageInfoFourPlate(spritesY=2, groupName=helpCarousel, selection=3)_radioButton",
                                    x: "964",
                                    y: "914",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoFivePlate(spritesY=2, groupName=helpCarousel, selection=4)_radioButton",
                                    assetKey: "pageInfoFivePlate(spritesY=2, groupName=helpCarousel, selection=4)_radioButton",
                                    x: "1014",
                                    y: "914",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoSixPlate(spritesY=2, groupName=helpCarousel, selection=5)_radioButton",
                                    assetKey: "pageInfoSixPlate(spritesY=2, groupName=helpCarousel, selection=5)_radioButton",
                                    x: "1064",
                                    y: "914",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "buttonsHelpContainer",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "leftButtonsHelpContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "infoPrevButtonButton_button",
                                        assetKey: "infoPrevButtonButton_button",
                                        x: "0",
                                        y: "469",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "rightButtonsHelpContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "infoNextButtonButton_button",
                                        assetKey: "infoNextButtonButton_button",
                                        x: "1788",
                                        y: "469",
                                        alpha: "1"
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1098: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Tabs = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        "^headersContainer .tabHeaderText": {
                            style: {
                                fill: "#ffffff"
                            }
                        },
                        "^headersContainer .active .tabHeaderText": {
                            style: {
                                fill: "#fec36d"
                            }
                        },
                        "^headersContainer .tabHeaderImage": {
                            isVisible: !1
                        },
                        "^headersContainer .active .tabHeaderImage": {
                            isVisible: !0
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "menuPlateBg1_asset",
                            fullPath: e + "playarea/menuPlateBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paginationInfoBg1_asset",
                            fullPath: e + "playarea/paginationInfoBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settings_group",
                            fullPath: e + "playarea/settings_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettings_group",
                            fullPath: e + "playarea/betSettings_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "help_group",
                            fullPath: e + "playarea/help_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageThreeHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeHeaderText(text=SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                            fullPath: e + "playarea/pageThreeHeaderText(text=SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageTwoHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoHeaderText(text=BET SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                            fullPath: e + "playarea/pageTwoHeaderText(text=BET SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageOneHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneHeaderText(text=RULES, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                            fullPath: e + "playarea/pageOneHeaderText(text=RULES, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea",
                            fullPath: e + "playarea/pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeTriggerButtonText_text",
                            fullPath: e + "playarea/pageThreeTriggerButtonText_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                            fullPath: e + "playarea/pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoTriggerButtonText_text",
                            fullPath: e + "playarea/pageTwoTriggerButtonText_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                            fullPath: e + "playarea/pageOneTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "mobileBackToGameButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/mobileBackToGameButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "backToGameButtonText_text",
                            fullPath: e + "playarea/backToGameButtonText_text.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "helpPagesContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "mobileBackToGameButton",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "backToGameButtonText_text",
                                    assetKey: "backToGameButtonText_text",
                                    x: "63",
                                    y: "1017",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "mobileBackToGameButtonButton(spritesX=4)_button",
                                    assetKey: "mobileBackToGameButtonButton(spritesX=4)_button",
                                    x: "19",
                                    y: "958",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "menu(tabs=1, tabActiveHeader=pageOneHeaderContainer, tabActiveContainer=pageOneContainer)_container",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "headersContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 1,
                                        name: "pageOneTriggerButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageOneTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            assetKey: "pageOneTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            x: "217",
                                            y: "969",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageTwoTriggerButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageTwoTriggerButtonText_text",
                                            assetKey: "pageTwoTriggerButtonText_text",
                                            x: "714",
                                            y: "962",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            assetKey: "pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            x: "714",
                                            y: "969",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageThreeTriggerButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageThreeTriggerButtonText_text",
                                            assetKey: "pageThreeTriggerButtonText_text",
                                            x: "1210",
                                            y: "962",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea",
                                            assetKey: "pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea",
                                            x: "1210",
                                            y: "969",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageOneHeaderContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageOneHeaderText(text=RULES, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            assetKey: "pageOneHeaderText(text=RULES, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            x: "465",
                                            y: "1014",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageOneHeaderImage(class=tabHeaderImage)_image",
                                            assetKey: "pageOneHeaderImage(class=tabHeaderImage)_image",
                                            x: "214",
                                            y: "961",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageTwoHeaderContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageTwoHeaderText(text=BET SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            assetKey: "pageTwoHeaderText(text=BET SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            x: "962",
                                            y: "1014",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                                            assetKey: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                                            x: "710",
                                            y: "961",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageThreeHeaderContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageThreeHeaderText(text=SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            assetKey: "pageThreeHeaderText(text=SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            x: "1459",
                                            y: "1014",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageThreeHeaderImage(class=tabHeaderImage)_image",
                                            assetKey: "pageThreeHeaderImage(class=tabHeaderImage)_image",
                                            x: "1207",
                                            y: "961",
                                            alpha: "1"
                                        }]
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageOneContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "help_group",
                                        assetKey: "help_group",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageTwoContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "betSettings_group",
                                        assetKey: "betSettings_group",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageThreeContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "settings_group",
                                        assetKey: "settings_group",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "paginationInfoBg1_asset",
                                assetKey: "paginationInfoBg1_asset",
                                x: 217,
                                y: 957
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "paginationInfoBg",
                                assetKey: "paginationInfoBg1",
                                bottom: 8,
                                top: 8,
                                left: 8,
                                right: 8,
                                height: 8,
                                width: 1492,
                                x: 215,
                                y: 961
                            }, {
                                type: mt.objects.IMAGE,
                                name: "menuPlateBg1_asset",
                                assetKey: "menuPlateBg1_asset",
                                x: 211,
                                y: 971
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "menuPlateBg",
                                assetKey: "menuPlateBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 100,
                                width: 1492,
                                x: 215,
                                y: 965
                            }, {
                                type: mt.objects.IMAGE,
                                name: "settingsContainerBg",
                                assetKey: "settingsContainerBg",
                                scaleX: 1920,
                                scaleY: 1080
                            }]
                        }]
                    }
                }
            }
        },
        1099: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_ar = {}
        },
        1100: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_ar.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Ui();
                e.styles[".titleTextStyle"].style.font = "24pt futuraptheavy", e.styles[".titleButtonStyle"].style.font = "29pt futuraptheavy";
                var t = function(e, a, s) {
                    for (var n = 0; n < e.contents.length; n++) {
                        var l = e.contents[n];
                        if (l[a] === s || l.contents && (l = t(l, a, s))) return l
                    }
                    return !1
                };
                return "totalWinTextA_aliases coinValueText_aliases totalBetCoinsText_aliases balanceText_aliases winText_aliases linesText_aliases balanceCoinsTextt_aliases".split(" ").forEach((function(a) {
                    (a = t(e.objects, "name", a)) && (a.y = +a.y - 8)
                })), e
            }
        },
        1101: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_zh = {}
        },
        1102: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_zh.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Ui();
                e.styles[".titleTextStyle"].style.font = "25pt futuraptheavy", e.styles[".titleTextStyle"].style.strokeThickness = 4, e.styles[".titleButtonStyle"].style.font = "26pt futuraptheavy", e.styles[".titleButtonFreespinStyle"].style.strokeThickness = 4;
                var t = function(e, a, s) {
                    for (var n = 0; n < e.contents.length; n++) {
                        var l = e.contents[n];
                        if (l[a] === s || l.contents && (l = t(l, a, s))) return l
                    }
                    return !1
                };
                return "totalWinTextA_aliases coinValueText_aliases totalBetCoinsText_aliases balanceText_aliases winText_aliases linesText_aliases balanceCoinsTextt_aliases".split(" ").forEach((function(a) {
                    (a = t(e.objects, "name", a)) && (a.y = +a.y - 8)
                })), e
            }
        },
        1103: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile = {}
        },
        1104: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Ui = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        ".titleStyleMobile": {
                            style: {
                                font: "26pt futuraptheavy",
                                fill: 15720895,
                                stroke: 4399635,
                                strokeThickness: 8
                            }
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "balancebg",
                            fullPath: e + "playarea/balancebg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalbetbg",
                            fullPath: e + "playarea/totalbetbg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winbg",
                            fullPath: e + "playarea/winbg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceMobileNumber_aliases",
                            fullPath: e + "playarea/balanceMobileNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceMobileContainerArea(width=440, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/balanceMobileContainerArea(width=440, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceCoinsMobileNumber_aliases",
                            fullPath: e + "playarea/balanceCoinsMobileNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceCoinsMobileContainerArea(width=440, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/balanceCoinsMobileContainerArea(width=440, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "creditsWinMobileNumber_aliases",
                            fullPath: e + "playarea/creditsWinMobileNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winMobileNumber_aliases",
                            fullPath: e + "playarea/winMobileNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winMobileContainerArea(width=556, height=140, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/winMobileContainerArea(width=556, height=140, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetCoinsMobileNumber_aliases",
                            fullPath: e + "playarea/totalBetCoinsMobileNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetMobileContainerArea(width=232, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/totalBetMobileContainerArea(width=232, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetMobilleNumber_aliases",
                            fullPath: e + "playarea/totalBetMobilleNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetMobileContainerArea(width=232, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                            fullPath: e + "playarea/totalBetMobileContainerArea(width=232, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betPlusButtonMobileButton(spritesX=4)_button",
                            fullPath: e + "playarea/betPlusButtonMobileButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betMinusButtonMobileButton(spritesX=4)_button",
                            fullPath: e + "playarea/betMinusButtonMobileButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "totalBetMobileName_aliases",
                            fullPath: e + "playarea/totalBetMobileName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winMobileName_aliases",
                            fullPath: e + "playarea/winMobileName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balanceMobileName_aliases",
                            fullPath: e + "playarea/balanceMobileName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterFreeSpinsText4_aliases",
                            fullPath: e + "playarea/counterFreeSpinsText4_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterFreeSpinsText3_aliases",
                            fullPath: e + "playarea/counterFreeSpinsText3_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterFreeSpinsText2_aliases",
                            fullPath: e + "playarea/counterFreeSpinsText2_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "counterFreeSpinsText1_aliases",
                            fullPath: e + "playarea/counterFreeSpinsText1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingPanelMobileBackBg_aliases",
                            fullPath: e + "playarea/settingPanelMobileBackBg_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "helpMobileButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/helpMobileButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsMobileButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/settingsMobileButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "soundMobileButtonButton(spritesX=10)_button",
                            fullPath: e + "playarea/soundMobileButtonButton(spritesX=10)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "quickSettingsPanelMobileButtonButton(spritesX=6)_button",
                            fullPath: e + "playarea/quickSettingsPanelMobileButtonButton(spritesX=6)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingPanelMobileBackBg1_asset",
                            fullPath: e + "playarea/settingPanelMobileBackBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingButtonMobileButton(spritesX=4)_button",
                            fullPath: e + "playarea/betSettingButtonMobileButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "spinButtonButton(spritesX=4, spritesY=2)_button",
                            fullPath: e + "playarea/spinButtonButton(spritesX=4, spritesY=2)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoSpinButtonMobileButton_button",
                            fullPath: e + "playarea/autoSpinButtonMobileButton_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoSpinButtonName2_aliases",
                            fullPath: e + "playarea/autoSpinButtonName2_aliases.png"
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
                            key: "buttonStyleNormal(anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                            fullPath: e + "playarea/buttonStyleNormal(anchorX=0.5, anchorY=0.5, fill=#fec36d)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "buttonStylePressed(anchorX=0.5, anchorY=0.5, fill=#5d4739)_style",
                            fullPath: e + "playarea/buttonStylePressed(anchorX=0.5, anchorY=0.5, fill=#5d4739)_style.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "buttonsMobileContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "buttonsContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 0,
                                name: "buttonStylePressed(anchorX=0.5, anchorY=0.5, fill=#5d4739)_style",
                                assetKey: "buttonStylePressed(anchorX=0.5, anchorY=0.5, fill=#5d4739)_style",
                                x: "1905",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "buttonStyleNormal(anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                assetKey: "buttonStyleNormal(anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                x: "1905",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "assets",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "home_asset",
                                    assetKey: "home_asset",
                                    x: "38",
                                    y: "11",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "cash_asset",
                                    assetKey: "cash_asset",
                                    x: "1649",
                                    y: "641",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "autoSpinMobileContainer",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "autoSpinButtonMobile",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "autoSpinButtonName2_aliases",
                                        assetKey: "autoSpinButtonName2_aliases",
                                        x: "1737",
                                        y: "222",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "autoSpinButtonMobileButton_button",
                                        assetKey: "autoSpinButtonMobileButton_button",
                                        x: "1650",
                                        y: "133",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: 1,
                                name: "playButtonMobileContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "spinButtonButton(spritesX=4, spritesY=2)_button",
                                    assetKey: "spinButtonButton(spritesX=4, spritesY=2)_button",
                                    x: "1592",
                                    y: "330",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "betSettingButtonMobile",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "betSettingButtonMobileButton(spritesX=4)_button",
                                    assetKey: "betSettingButtonMobileButton(spritesX=4)_button",
                                    x: "1754",
                                    y: "941",
                                    alpha: "1"
                                }]
                            }]
                        }, {
                            type: 1,
                            name: "settingBottomUIMobileContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "settingPanelMobileBackBg1_asset",
                                assetKey: "settingPanelMobileBackBg1_asset",
                                x: "39",
                                y: "598",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "infoPanelPlusMobileButton",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "quickSettingsPanelMobileButtonButton(spritesX=6)_button",
                                    assetKey: "quickSettingsPanelMobileButtonButton(spritesX=6)_button",
                                    x: "38",
                                    y: "939",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "soundOffOnMobileButtonButton",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "soundMobileButtonButton(spritesX=10)_button",
                                    assetKey: "soundMobileButtonButton(spritesX=10)_button",
                                    x: "56",
                                    y: "622",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "settingPanelMobileButtonButton",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "settingsMobileButtonButton(spritesX=4)_button",
                                    assetKey: "settingsMobileButtonButton(spritesX=4)_button",
                                    x: "57",
                                    y: "733",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "helpMobileButtonButtonPanel",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "helpMobileButtonButton(spritesX=4)_button",
                                    assetKey: "helpMobileButtonButton(spritesX=4)_button",
                                    x: "55",
                                    y: "843",
                                    alpha: "1"
                                }]
                            }, {
                                type: 0,
                                name: "settingPanelMobileBackBg_aliases",
                                assetKey: "settingPanelMobileBackBg_aliases",
                                x: "167",
                                y: "1066",
                                alpha: "1"
                            }]
                        }, {
                            type: 1,
                            name: "gameFreeSpinMobileContainer",
                            alpha: "1",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "counterFreeSpinsText",
                                text: "FREE GAME: 2 OF 2",
                                style: {
                                    font: "22pt futuraptheavy",
                                    fill: 16696173
                                },
                                class: "freeSpinAmount",
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 1017
                            }]
                        }, {
                            type: 1,
                            name: "infoPanelMobileContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "balanceMobileName_aliases",
                                assetKey: "balanceMobileName_aliases",
                                x: "1501",
                                y: "936",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "winMobileName_aliases",
                                assetKey: "winMobileName_aliases",
                                x: "965",
                                y: "909",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "totalBetMobileName_aliases",
                                assetKey: "totalBetMobileName_aliases",
                                x: "430",
                                y: "936",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "betMinusButtonMobile",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "betMinusButtonMobileButton(spritesX=4)_button",
                                    assetKey: "betMinusButtonMobileButton(spritesX=4)_button",
                                    x: "217",
                                    y: "967",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "betPlusButtonMobile",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "betPlusButtonMobileButton(spritesX=4)_button",
                                    assetKey: "betPlusButtonMobileButton(spritesX=4)_button",
                                    x: "556",
                                    y: "966",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "totalBetMobileContaner",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "totalBetMobileContent_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "totalBetMobileContainerArea(width=232, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "totalBetMobileContainerArea(width=232, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "430",
                                        y: "1007",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "totalBetMobilleNumber_aliases",
                                        assetKey: "totalBetMobilleNumber_aliases",
                                        x: "430",
                                        y: "1007",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "totalBetMobileCoinsContent_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "totalBetMobileContainerArea(width=232, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "totalBetMobileContainerArea(width=232, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "430",
                                        y: "1007",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "totalBetCoinsMobileNumber_aliases",
                                        assetKey: "totalBetCoinsMobileNumber_aliases",
                                        x: "430",
                                        y: "1007",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: 1,
                                name: "winBottomlUIMobileContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "winMobileContainerArea(width=556, height=140, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                    assetKey: "winMobileContainerArea(width=556, height=140, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                    x: "960",
                                    y: "989",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "winMobileNumber_aliases",
                                    assetKey: "winMobileNumber_aliases",
                                    x: "967",
                                    y: "989",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "creditsWinMobileNumber_aliases",
                                    assetKey: "creditsWinMobileNumber_aliases",
                                    x: "967",
                                    y: "989",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "balanceMobileContainer",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "balanceMobileCoinsContent_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "balanceCoinsMobileContainerArea(width=440, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "balanceCoinsMobileContainerArea(width=440, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "1497",
                                        y: "1007",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceCoinsMobileNumber_aliases",
                                        assetKey: "balanceCoinsMobileNumber_aliases",
                                        x: "1497",
                                        y: "1007",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "balanceMobileContent_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "balanceMobileContainerArea(width=440, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "balanceMobileContainerArea(width=440, height=96, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "1497",
                                        y: "1007",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceMobileNumber_aliases",
                                        assetKey: "balanceMobileNumber_aliases",
                                        x: "1497",
                                        y: "1007",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: 0,
                                name: "winbg",
                                assetKey: "winbg",
                                x: "680",
                                y: "923",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "totalbetbg",
                                assetKey: "totalbetbg",
                                x: "200",
                                y: "952",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "balancebg",
                                assetKey: "balancebg",
                                x: "1271",
                                y: "952",
                                alpha: "1"
                            }]
                        }]
                    }
                }
            }
        },
        1105: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Help = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "1px_empty",
                            fullPath: e + "playarea/1px_empty.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "infoNextButtonButton_button",
                            fullPath: e + "playarea/infoNextButtonButtonM_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "infoPrevButtonButton_button",
                            fullPath: e + "playarea/infoPrevButtonButtonM_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoSixPlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoSixPlate(spritesY=2, groupName=helpCarousel, selection=5)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoFivePlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoFivePlate(spritesY=2, groupName=helpCarousel, selection=4)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoFourPlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoFourPlate(spritesY=2, groupName=helpCarousel, selection=3)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoThreePlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoThreePlate(spritesY=2, groupName=helpCarousel, selection=2)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoTwoPlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoTwoPlate(spritesY=2, groupName=helpCarousel, selection=1)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoOnePlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoOnePlate(spritesY=2, groupName=helpCarousel, selection=0)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "nameBg",
                            fullPath: e + "playarea/nameBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "fake_end_px",
                            fullPath: e + "playarea/fake_end_px.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesText_aliases",
                            fullPath: e + "playarea/rulesText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesName_aliases",
                            fullPath: e + "playarea/rulesName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFive1_content",
                            fullPath: e + "playarea/pageFive1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFive0_content",
                            fullPath: e + "playarea/pageFive0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFiveText1_aliases",
                            fullPath: e + "playarea/pageFiveText1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFiveText0_aliases",
                            fullPath: e + "playarea/pageFiveText0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFour4_content",
                            fullPath: e + "playarea/pageFour4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFour3_content",
                            fullPath: e + "playarea/pageFour3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFour0_content",
                            fullPath: e + "playarea/pageFour0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFourText3_aliases",
                            fullPath: e + "playarea/pageFourText3_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFourText2_aliases",
                            fullPath: e + "playarea/pageFourText2_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFourText1_aliases",
                            fullPath: e + "playarea/pageFourText1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFourText0_aliases",
                            fullPath: e + "playarea/pageFourText0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree5_content",
                            fullPath: e + "playarea/pageThree5_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree4_content",
                            fullPath: e + "playarea/pageThree4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree3_content",
                            fullPath: e + "playarea/pageThree3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree2_content",
                            fullPath: e + "playarea/pageThree2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree1_content",
                            fullPath: e + "playarea/pageThree1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThree0_content",
                            fullPath: e + "playarea/pageThree0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber8(class=ps11-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber8(class=ps11-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber7(class=ps11-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber7(class=ps11-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber6(class=ps11-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber6(class=ps11-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber2(text=2 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber2(text=2 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber5(class=ps10-2 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber5(class=ps10-2 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber5(class=ps10-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber5(class=ps10-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber4(class=ps10-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber4(class=ps10-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber3(class=ps10-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber3(class=ps10-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber11(class=ps9-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber11(class=ps9-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber10(class=ps9-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber10(class=ps9-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber9(class=ps9-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber9(class=ps9-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber14(class=ps8-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber14(class=ps8-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber13(class=ps8-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber13(class=ps8-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber12(class=ps8-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber12(class=ps8-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber17(class=ps7-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber17(class=ps7-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber16(class=ps7-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber16(class=ps7-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber15(class=ps7-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber15(class=ps7-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber2(class=ps6-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber2(class=ps6-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber1(class=ps6-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber1(class=ps6-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber0(class=ps6-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber0(class=ps6-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo4_content",
                            fullPath: e + "playarea/pageTwo4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo3_content",
                            fullPath: e + "playarea/pageTwo3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo2_content",
                            fullPath: e + "playarea/pageTwo2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo1_content",
                            fullPath: e + "playarea/pageTwo1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwo0_content",
                            fullPath: e + "playarea/pageTwo0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber14(class=ps5-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber14(class=ps5-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber13(class=ps5-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber13(class=ps5-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber12(class=ps5-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber12(class=ps5-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber11(class=ps4-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber11(class=ps4-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber10(class=ps4-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber10(class=ps4-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber9(class=ps4-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber9(class=ps4-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber8(class=ps3-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber8(class=ps3-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber7(class=ps3-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber7(class=ps3-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber6(class=ps3-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber6(class=ps3-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=2 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=2 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber5(class=ps1-2 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber5(class=ps1-2 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber5(class=ps1-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber5(class=ps1-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber4(class=ps1-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber4(class=ps1-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber3(class=ps1-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber3(class=ps1-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5 , class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5 , class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber2(class=ps2-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber2(class=ps2-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber1(class=ps2-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber1(class=ps2-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoNumber0(class=ps2-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageTwoNumber0(class=ps2-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoText_aliases",
                            fullPath: e + "playarea/pageTwoText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOne1_content",
                            fullPath: e + "playarea/pageOne1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOne0_content",
                            fullPath: e + "playarea/pageOne0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber3(text=3, class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber3(text=3, class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber4(text=4, class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber4(text=4, class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumber5(text=5, class=textNumbersYellow)_text",
                            fullPath: e + "playarea/textNumber5(text=5, class=textNumbersYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber6(class=ps12-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber6(class=ps12-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber5(class=ps12-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber5(class=ps12-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber4(class=ps12-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber4(class=ps12-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText2_aliases",
                            fullPath: e + "playarea/pageOneText2_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText1_aliases",
                            fullPath: e + "playarea/pageOneText1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText0_aliases",
                            fullPath: e + "playarea/pageOneText0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumbersYellow(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#fec36d)_style",
                            fullPath: e + "playarea/textNumbersYellow(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#fec36d)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#ffffff)_style",
                            fullPath: e + "playarea/paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#ffffff)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "info_container",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "pagesInfo(x=100, width=1720, height=1080, swipe=2, dragScrollSensivity=0.001)_container",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "pageInfoOne_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "860",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#ffffff)_style",
                                        assetKey: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#ffffff)_style",
                                        x: "483",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumbersYellow(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#fec36d)_style",
                                        assetKey: "textNumbersYellow(font=30pt futuraptmedium, anchorX=0.05, anchorY=0.5, fill=#fec36d)_style",
                                        x: "483",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText0_aliases",
                                        assetKey: "pageOneText0_aliases",
                                        x: "504",
                                        y: "687",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText1_aliases",
                                        assetKey: "pageOneText1_aliases",
                                        x: "1193",
                                        y: "687",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText2_aliases",
                                        assetKey: "pageOneText2_aliases",
                                        x: "860",
                                        y: "870",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber4(class=ps12-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber4(class=ps12-5 paytableNumbersWhite)_text",
                                        x: "734",
                                        y: "343",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber5(class=ps12-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber5(class=ps12-4 paytableNumbersWhite)_text",
                                        x: "734",
                                        y: "398",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber6(class=ps12-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber6(class=ps12-3 paytableNumbersWhite)_text",
                                        x: "734",
                                        y: "454",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5, class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5, class=textNumbersYellow)_text",
                                        x: "686",
                                        y: "343",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4, class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4, class=textNumbersYellow)_text",
                                        x: "686",
                                        y: "398",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3, class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3, class=textNumbersYellow)_text",
                                        x: "686",
                                        y: "454",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOne0_content",
                                        assetKey: "pageOne0_content",
                                        x: "352",
                                        y: "249",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOne1_content",
                                        assetKey: "pageOne1_content",
                                        x: "1038",
                                        y: "208",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoTwo_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "860",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoText_aliases",
                                        assetKey: "pageTwoText_aliases",
                                        x: "860",
                                        y: "870",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber0(class=ps2-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber0(class=ps2-5 paytableNumbersWhite)_text",
                                        x: "952",
                                        y: "249",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber1(class=ps2-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber1(class=ps2-4 paytableNumbersWhite)_text",
                                        x: "952",
                                        y: "304",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber2(class=ps2-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber2(class=ps2-3 paytableNumbersWhite)_text",
                                        x: "952",
                                        y: "359",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "917",
                                        y: "249",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "917",
                                        y: "304",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "917",
                                        y: "359",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        x: "413",
                                        y: "219",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        x: "413",
                                        y: "274",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        x: "413",
                                        y: "328",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber5(class=ps1-2 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber5(class=ps1-2 paytableNumbersWhite)_text",
                                        x: "413",
                                        y: "383",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "378",
                                        y: "219",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "378",
                                        y: "274",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "378",
                                        y: "328",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=2 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=2 , class=textNumbersYellow)_text",
                                        x: "378",
                                        y: "383",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber6(class=ps3-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber6(class=ps3-5 paytableNumbersWhite)_text",
                                        x: "1495",
                                        y: "247",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber7(class=ps3-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber7(class=ps3-4 paytableNumbersWhite)_text",
                                        x: "1495",
                                        y: "303",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber8(class=ps3-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber8(class=ps3-3 paytableNumbersWhite)_text",
                                        x: "1495",
                                        y: "358",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1456",
                                        y: "247",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1456",
                                        y: "303",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1456",
                                        y: "358",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber9(class=ps4-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber9(class=ps4-5 paytableNumbersWhite)_text",
                                        x: "741",
                                        y: "620",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber10(class=ps4-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber10(class=ps4-4 paytableNumbersWhite)_text",
                                        x: "741",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber11(class=ps4-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber11(class=ps4-3 paytableNumbersWhite)_text",
                                        x: "741",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "706",
                                        y: "620",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "706",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "706",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber12(class=ps5-5 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber12(class=ps5-5 paytableNumbersWhite)_text",
                                        x: "1307",
                                        y: "625",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber13(class=ps5-4 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber13(class=ps5-4 paytableNumbersWhite)_text",
                                        x: "1307",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwoNumber14(class=ps5-3 paytableNumbersWhite)_text",
                                        assetKey: "pageTwoNumber14(class=ps5-3 paytableNumbersWhite)_text",
                                        x: "1307",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1272",
                                        y: "625",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1272",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1272",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo0_content",
                                        assetKey: "pageTwo0_content",
                                        x: "409",
                                        y: "536",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo1_content",
                                        assetKey: "pageTwo1_content",
                                        x: "1167",
                                        y: "189",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo2_content",
                                        assetKey: "pageTwo2_content",
                                        x: "90",
                                        y: "161",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo3_content",
                                        assetKey: "pageTwo3_content",
                                        x: "982",
                                        y: "552",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo4_content",
                                        assetKey: "pageTwo4_content",
                                        x: "628",
                                        y: "186",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoThree_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "860",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber0(class=ps6-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber0(class=ps6-5 paytableNumbersWhite)_text",
                                        x: "438",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber1(class=ps6-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber1(class=ps6-4 paytableNumbersWhite)_text",
                                        x: "438",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber2(class=ps6-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber2(class=ps6-3 paytableNumbersWhite)_text",
                                        x: "438",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "403",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "403",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "403",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber15(class=ps7-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber15(class=ps7-5 paytableNumbersWhite)_text",
                                        x: "970",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber16(class=ps7-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber16(class=ps7-4 paytableNumbersWhite)_text",
                                        x: "970",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber17(class=ps7-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber17(class=ps7-3 paytableNumbersWhite)_text",
                                        x: "970",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "935",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "935",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "935",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber12(class=ps8-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber12(class=ps8-5 paytableNumbersWhite)_text",
                                        x: "1485",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber13(class=ps8-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber13(class=ps8-4 paytableNumbersWhite)_text",
                                        x: "1485",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber14(class=ps8-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber14(class=ps8-3 paytableNumbersWhite)_text",
                                        x: "1485",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1450",
                                        y: "277",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1450",
                                        y: "327",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1450",
                                        y: "382",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber9(class=ps9-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber9(class=ps9-5 paytableNumbersWhite)_text",
                                        x: "439",
                                        y: "625",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber10(class=ps9-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber10(class=ps9-4 paytableNumbersWhite)_text",
                                        x: "439",
                                        y: "678",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber11(class=ps9-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber11(class=ps9-3 paytableNumbersWhite)_text",
                                        x: "439",
                                        y: "730",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "404",
                                        y: "625",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "404",
                                        y: "679",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "404",
                                        y: "731",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber3(class=ps10-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber3(class=ps10-5 paytableNumbersWhite)_text",
                                        x: "1021",
                                        y: "613",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber4(class=ps10-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber4(class=ps10-4 paytableNumbersWhite)_text",
                                        x: "1021",
                                        y: "666",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber5(class=ps10-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber5(class=ps10-3 paytableNumbersWhite)_text",
                                        x: "1021",
                                        y: "718",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber5(class=ps10-2 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber5(class=ps10-2 paytableNumbersWhite)_text",
                                        x: "1021",
                                        y: "770",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "986",
                                        y: "613",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "986",
                                        y: "666",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "986",
                                        y: "718",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber2(text=2 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber2(text=2 , class=textNumbersYellow)_text",
                                        x: "986",
                                        y: "770",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber6(class=ps11-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber6(class=ps11-5 paytableNumbersWhite)_text",
                                        x: "1476",
                                        y: "627",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber7(class=ps11-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber7(class=ps11-4 paytableNumbersWhite)_text",
                                        x: "1476",
                                        y: "680",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber8(class=ps11-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber8(class=ps11-3 paytableNumbersWhite)_text",
                                        x: "1476",
                                        y: "732",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1441",
                                        y: "627",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1441",
                                        y: "680",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1441",
                                        y: "732",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree0_content",
                                        assetKey: "pageThree0_content",
                                        x: "123",
                                        y: "152",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree1_content",
                                        assetKey: "pageThree1_content",
                                        x: "632",
                                        y: "123",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree2_content",
                                        assetKey: "pageThree2_content",
                                        x: "1142",
                                        y: "160",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree3_content",
                                        assetKey: "pageThree3_content",
                                        x: "123",
                                        y: "523",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree4_content",
                                        assetKey: "pageThree4_content",
                                        x: "620",
                                        y: "529",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree5_content",
                                        assetKey: "pageThree5_content",
                                        x: "1121",
                                        y: "508",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoFour_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "860",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFourText0_aliases",
                                        assetKey: "pageFourText0_aliases",
                                        x: "860",
                                        y: "154",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFourText1_aliases",
                                        assetKey: "pageFourText1_aliases",
                                        x: "860",
                                        y: "594",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFourText2_aliases",
                                        assetKey: "pageFourText2_aliases",
                                        x: "792",
                                        y: "864",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFourText3_aliases",
                                        assetKey: "pageFourText3_aliases",
                                        x: "925",
                                        y: "864",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFour0_content",
                                        assetKey: "pageFour0_content",
                                        x: "583",
                                        y: "203",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFour3_content",
                                        assetKey: "pageFour3_content",
                                        x: "857",
                                        y: "660",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFour4_content",
                                        assetKey: "pageFour4_content",
                                        x: "724",
                                        y: "660",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoFive_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paytableNameText_aliases",
                                        assetKey: "paytableNameText_aliases",
                                        x: "860",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFiveText0_aliases",
                                        assetKey: "pageFiveText0_aliases",
                                        x: "487",
                                        y: "158",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFiveText1_aliases",
                                        assetKey: "pageFiveText1_aliases",
                                        x: "1230",
                                        y: "824",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFive0_content",
                                        assetKey: "pageFive0_content",
                                        x: "150",
                                        y: "209",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFive1_content",
                                        assetKey: "pageFive1_content",
                                        x: "917",
                                        y: "111",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoSix_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "rulesName_aliases",
                                        assetKey: "rulesName_aliases",
                                        x: "860",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "rulesText_aliases",
                                        assetKey: "rulesText_aliases",
                                        x: "860",
                                        y: "480",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "rtpTextEN_aliases",
                                        assetKey: "rulesText_aliases",
                                        x: "860",
                                        y: "835",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "rtpTextRU_aliases",
                                        assetKey: "rulesText_aliases",
                                        x: "860",
                                        y: "835",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "fake_end_px",
                                        assetKey: "fake_end_px",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: 0,
                                name: "nameBg",
                                assetKey: "nameBg",
                                x: "0",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "paginationInfo_container",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "pageInfoOnePlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoOnePlate(spritesY=2)_spritesheet",
                                    x: "822",
                                    y: "910",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoTwoPlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoTwoPlate(spritesY=2)_spritesheet",
                                    x: "872",
                                    y: "910",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoThreePlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoThreePlate(spritesY=2)_spritesheet",
                                    x: "922",
                                    y: "910",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoFourPlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoFourPlate(spritesY=2)_spritesheet",
                                    x: "972",
                                    y: "910",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoFivePlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoFivePlate(spritesY=2)_spritesheet",
                                    x: "1022",
                                    y: "910",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoSixPlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoSixPlate(spritesY=2)_spritesheet",
                                    x: "1072",
                                    y: "910",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "buttonsHelpContainer",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "leftButtonsHelpContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "infoPrevButtonButton_button",
                                        assetKey: "infoPrevButtonButton_button",
                                        x: "0",
                                        y: "133",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "rightButtonsHelpContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "infoNextButtonButton_button",
                                        assetKey: "infoNextButtonButton_button",
                                        x: "1780",
                                        y: "133",
                                        alpha: "1"
                                    }]
                                }]
                            }]
                        }, {
                            type: 0,
                            name: "1px_empty",
                            assetKey: "1px_empty",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }]
                    }
                }
            }
        },
        1106: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Tabs = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        "^headersContainer .tabHeaderText": {
                            style: {
                                fill: "#ffffff"
                            }
                        },
                        "^headersContainer .active .tabHeaderText": {
                            style: {
                                fill: "#fec36d"
                            }
                        },
                        "^headersContainer .tabHeaderImage": {
                            isVisible: !1
                        },
                        "^headersContainer .active .tabHeaderImage": {
                            isVisible: !0
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "menuPlateBg1_asset",
                            fullPath: e + "playarea/menuPlateBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paginationInfoBg1_asset",
                            fullPath: e + "playarea/paginationInfoBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settings_group",
                            fullPath: e + "playarea/settings_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettings_group",
                            fullPath: e + "playarea/betSettings_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "help_group",
                            fullPath: e + "playarea/help_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageThreeHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeHeaderText(text=SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                            fullPath: e + "playarea/pageThreeHeaderText(text=SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageTwoHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoHeaderText(text=BET SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                            fullPath: e + "playarea/pageTwoHeaderText(text=BET SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageOneHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneHeaderText(text=RULES, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                            fullPath: e + "playarea/pageOneHeaderText(text=RULES, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea",
                            fullPath: e + "playarea/pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeTriggerButtonText_text",
                            fullPath: e + "playarea/pageThreeTriggerButtonText_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                            fullPath: e + "playarea/pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoTriggerButtonText_text",
                            fullPath: e + "playarea/pageTwoTriggerButtonText_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                            fullPath: e + "playarea/pageOneTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "mobileBackToGameButtonButton(spritesX=4)_button",
                            fullPath: e + "playarea/mobileBackToGameButtonButton(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "backToGameButtonText_text",
                            fullPath: e + "playarea/backToGameButtonText_text.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "helpPagesContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "mobileBackToGameButton",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "backToGameButtonText_text",
                                    assetKey: "backToGameButtonText_text",
                                    x: "92",
                                    y: "988",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "mobileBackToGameButtonButton(spritesX=4)_button",
                                    assetKey: "mobileBackToGameButtonButton(spritesX=4)_button",
                                    x: "38",
                                    y: "939",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "menu(tabs=1, tabActiveHeader=pageOneHeaderContainer, tabActiveContainer=pageOneContainer)_container",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "headersContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 1,
                                        name: "pageOneTriggerButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageOneTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            assetKey: "pageOneTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            x: "217",
                                            y: "959",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageTwoTriggerButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageTwoTriggerButtonText_text",
                                            assetKey: "pageTwoTriggerButtonText_text",
                                            x: "714",
                                            y: "952",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            assetKey: "pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            x: "714",
                                            y: "959",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageThreeTriggerButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageThreeTriggerButtonText_text",
                                            assetKey: "pageThreeTriggerButtonText_text",
                                            x: "1210",
                                            y: "952",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea",
                                            assetKey: "pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea",
                                            x: "1210",
                                            y: "959",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageOneHeaderContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageOneHeaderText(text=RULES, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            assetKey: "pageOneHeaderText(text=RULES, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            x: "465",
                                            y: "1004",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageOneHeaderImage(class=tabHeaderImage)_image",
                                            assetKey: "pageOneHeaderImage(class=tabHeaderImage)_image",
                                            x: "214",
                                            y: "951",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageTwoHeaderContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageTwoHeaderText(text=BET SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            assetKey: "pageTwoHeaderText(text=BET SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            x: "962",
                                            y: "1004",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                                            assetKey: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                                            x: "710",
                                            y: "951",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageThreeHeaderContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageThreeHeaderText(text=SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            assetKey: "pageThreeHeaderText(text=SETTINGS, class=tabHeaderText, font=38pt futuraptheavy, anchorX=0.5, anchorY=0.5, maxWidth=470)_text",
                                            x: "1459",
                                            y: "1004",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageThreeHeaderImage(class=tabHeaderImage)_image",
                                            assetKey: "pageThreeHeaderImage(class=tabHeaderImage)_image",
                                            x: "1207",
                                            y: "951",
                                            alpha: "1"
                                        }]
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageOneContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "help_group",
                                        assetKey: "help_group",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageTwoContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "betSettings_group",
                                        assetKey: "betSettings_group",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageThreeContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "settings_group",
                                        assetKey: "settings_group",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "paginationInfoBg1_asset",
                                assetKey: "paginationInfoBg1_asset",
                                x: 217,
                                y: 957
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "paginationInfoBg",
                                assetKey: "paginationInfoBg1",
                                bottom: 8,
                                top: 8,
                                left: 8,
                                right: 8,
                                height: 8,
                                width: 1492,
                                x: 215,
                                y: 951
                            }, {
                                type: mt.objects.IMAGE,
                                name: "menuPlateBg1_asset",
                                assetKey: "menuPlateBg1_asset",
                                x: 211,
                                y: 971
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "menuPlateBg",
                                assetKey: "menuPlateBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 100,
                                width: 1492,
                                x: 215,
                                y: 955
                            }, {
                                type: mt.objects.IMAGE,
                                name: "settingsContainerBg",
                                assetKey: "settingsContainerBg",
                                scaleX: 1920,
                                scaleY: 1080
                            }]
                        }]
                    }
                }
            }
        },
        1107: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Settings = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "spinSettingsBg1_asset",
                            fullPath: e + "playarea/spinSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "visualSettingsBg1_asset",
                            fullPath: e + "playarea/visualSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "optionsSettingsBg1_asset",
                            fullPath: e + "playarea/optionsSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSettingsBg1_asset",
                            fullPath: e + "playarea/audioSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderButtonPlus",
                            fullPath: e + "playarea/audioSliderButtonPlus.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderButtonMinus",
                            fullPath: e + "playarea/audioSliderButtonMinus.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSlider_bg",
                            fullPath: e + "playarea/audioSlider_bg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderInactiveBg",
                            fullPath: e + "playarea/audioSliderInactiveBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderBg_fill",
                            fullPath: e + "playarea/audioSliderBg_fill.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderButtonButton(spritesX=4)_handle",
                            fullPath: e + "playarea/audioSliderButtonButton(spritesX=4)_handle.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "turboModeButtonButton(spritesX=8)_button",
                            fullPath: e + "playarea/turboModeButtonButton(spritesX=8)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsSplashScreenButtonButton(spritesX=8)_button",
                            fullPath: e + "playarea/settingsSplashScreenButtonButton(spritesX=8)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsDisplayValuesInCoinsButtonButton(spritesX=8)_button",
                            fullPath: e + "playarea/settingsDisplayValuesInCoinsButtonButton(spritesX=8)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "turboText_alias",
                            fullPath: e + "playarea/turboText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "showText_alias",
                            fullPath: e + "playarea/showText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "displayText_alias",
                            fullPath: e + "playarea/displayText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textStyle_aliases",
                            fullPath: e + "playarea/textStyle_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "spinSpeedName_alias",
                            fullPath: e + "playarea/spinSpeedName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsVisualName_alias",
                            fullPath: e + "playarea/settingsVisualName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsOptionsName_alias",
                            fullPath: e + "playarea/settingsOptionsName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsAudioName_alias",
                            fullPath: e + "playarea/settingsAudioName_alias.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "settingWindowContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "settingsAudioName_alias",
                                assetKey: "settingsAudioName_alias",
                                x: "164",
                                y: "161",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "settingsOptionsName_alias",
                                assetKey: "settingsOptionsName_alias",
                                x: "163",
                                y: "363",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "settingsVisualName_alias",
                                assetKey: "settingsVisualName_alias",
                                x: "164",
                                y: "572",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "spinSpeedName_alias",
                                assetKey: "spinSpeedName_alias",
                                x: "163",
                                y: "773",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "textStyle_aliases",
                                assetKey: "textStyle_aliases",
                                x: "0",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "displayText_alias",
                                assetKey: "displayText_alias",
                                x: "902",
                                y: "370",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "showText_alias",
                                assetKey: "showText_alias",
                                x: "902",
                                y: "575",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "turboText_alias",
                                assetKey: "turboText_alias",
                                x: "902",
                                y: "779",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "optionValueButtonContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "settingsDisplayValuesInCoinsButtonButton(spritesX=8)_button",
                                    assetKey: "settingsDisplayValuesInCoinsButtonButton(spritesX=8)_button",
                                    x: "569",
                                    y: "327",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "visualButtonContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "settingsSplashScreenButtonButton(spritesX=8)_button",
                                    assetKey: "settingsSplashScreenButtonButton(spritesX=8)_button",
                                    x: "569",
                                    y: "532",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "turboModeButtonContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "turboModeButtonButton(spritesX=8)_button",
                                    assetKey: "turboModeButtonButton(spritesX=8)_button",
                                    x: "569",
                                    y: "735",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "audioSliderButtonContainer(marginLeft=38, marginRight=38, fillInactiveAssetKey=audioSliderInactiveBg)_sliderAdvanced",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "audioSliderButtonButton(spritesX=4)_handle",
                                    assetKey: "audioSliderButtonButton(spritesX=4)_handle",
                                    x: "1025",
                                    y: "125",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "audioSliderBg_fill",
                                    assetKey: "audioSliderBg_fill",
                                    x: "578",
                                    y: "154",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "audioSliderInactiveBg",
                                    assetKey: "audioSliderInactiveBg",
                                    x: "578",
                                    y: "154",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "audioSlider_bg",
                                    assetKey: "audioSlider_bg",
                                    x: "568",
                                    y: "144",
                                    alpha: "1"
                                }]
                            }, {
                                type: 0,
                                name: "audioSliderButtonMinus",
                                assetKey: "audioSliderButtonMinus",
                                x: "505",
                                y: "157",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "audioSliderButtonPlus",
                                assetKey: "audioSliderButtonPlus",
                                x: "1641",
                                y: "144",
                                alpha: "1"
                            }, {
                                type: mt.objects.IMAGE,
                                name: "spinSettingsBg1_asset",
                                assetKey: "spinSettingsBg1_asset",
                                x: 66,
                                y: 679
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "spinSettingsBg",
                                assetKey: "spinSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 679
                            }, {
                                type: mt.objects.IMAGE,
                                name: "visualSettingsBg1_asset",
                                assetKey: "visualSettingsBg1_asset",
                                x: 66,
                                y: 474
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "visualSettingsBg",
                                assetKey: "visualSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 474
                            }, {
                                type: mt.objects.IMAGE,
                                name: "optionsSettingsBg1_asset",
                                assetKey: "optionsSettingsBg1_asset",
                                x: 66,
                                y: 269
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "optionsSettingsBg",
                                assetKey: "optionsSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 269
                            }, {
                                type: mt.objects.IMAGE,
                                name: "audioSettingsBg1_asset",
                                assetKey: "audioSettingsBg1_asset",
                                x: 66,
                                y: 64
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "audioSettingsBg",
                                assetKey: "audioSettingsBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 184,
                                width: 1788,
                                x: 66,
                                y: 64
                            }]
                        }]
                    }
                }
            }
        },
        1108: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_ar = {}
        },
        1109: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_ar.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Mobile.Ui();
                e.styles[".titleStyleMobile"].style.font = "32pt futuraptheavy", e.styles[".titleStyleMobile"].style.strokeThickness = 6;
                var t = function(e, a, s) {
                    for (var n = 0; n < e.contents.length; n++) {
                        var l = e.contents[n];
                        if (l[a] === s || l.contents && (l = t(l, a, s))) return l
                    }
                    return !1
                };
                return ["balanceMobileName_aliases", "winMobileName_aliases", "totalBetMobileName_aliases"].forEach((function(a) {
                    (a = t(e.objects, "name", a)) && (a.y = +a.y - 8)
                })), e
            }
        },
        1110: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_zh = {}
        },
        1111: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_zh.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Mobile.Ui();
                e.styles[".titleStyleMobile"].style.font = "30pt futuraptheavy", e.styles[".titleStyleMobile"].style.strokeThickness = 6;
                var t = function(e, a, s) {
                    for (var n = 0; n < e.contents.length; n++) {
                        var l = e.contents[n];
                        if (l[a] === s || l.contents && (l = t(l, a, s))) return l
                    }
                    return !1
                };
                return ["balanceMobileName_aliases", "winMobileName_aliases", "totalBetMobileName_aliases"].forEach((function(a) {
                    (a = t(e.objects, "name", a)) && (a.y = +a.y - 5)
                })), e
            }
        },
        1112: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1113: function(e, t) {
            nge.App[nge.appNS].Tpl.States.BonusWheel = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "pillars",
                            fullPath: e + "playarea/pillars.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bonusWheel2",
                            fullPath: e + "playarea/bonusWheel2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "wheel2Center",
                            fullPath: e + "playarea/wheel2Center.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bonusWheel2Shadow",
                            fullPath: e + "playarea/bonusWheel2Shadow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "shadowBonusWheel1",
                            fullPath: e + "playarea/shadowBonusWheel1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bonusWheel1",
                            fullPath: e + "playarea/bonusWheel1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "wheel1Center",
                            fullPath: e + "playarea/wheel1Center.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "respin7Text",
                            fullPath: e + "playarea/respin7Text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "respin6Text",
                            fullPath: e + "playarea/respin6Text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "respin5Text",
                            fullPath: e + "playarea/respin5Text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "respin4Text",
                            fullPath: e + "playarea/respin4Text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "respin3Text",
                            fullPath: e + "playarea/respin3Text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "respin2Text",
                            fullPath: e + "playarea/respin2Text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "respin1Text",
                            fullPath: e + "playarea/respin1Text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "respinText",
                            fullPath: e + "playarea/respinText.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "freeSpinsNumber7_aliases",
                            fullPath: e + "playarea/freeSpinsNumber7_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "freeSpinsNumber6_aliases",
                            fullPath: e + "playarea/freeSpinsNumber6_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "freeSpinsNumber5_aliases",
                            fullPath: e + "playarea/freeSpinsNumber5_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "freeSpinsNumber4_aliases",
                            fullPath: e + "playarea/freeSpinsNumber4_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "freeSpinsNumber3_aliases",
                            fullPath: e + "playarea/freeSpinsNumber3_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "freeSpinsNumber2_aliases",
                            fullPath: e + "playarea/freeSpinsNumber2_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "freeSpinsNumber1_aliases",
                            fullPath: e + "playarea/freeSpinsNumber1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "freeSpinsNumber_aliases",
                            fullPath: e + "playarea/freeSpinsNumber_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "inc",
                            fullPath: e + "playarea/inc.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bonusWheel1Shadow",
                            fullPath: e + "playarea/bonusWheel1Shadow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bottomBg",
                            fullPath: e + "playarea/bottomBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pointer1_shadow",
                            fullPath: e + "playarea/pointer1_shadow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pointer1",
                            fullPath: e + "playarea/pointer1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pointer2_shadow",
                            fullPath: e + "playarea/pointer2_shadow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pointer2",
                            fullPath: e + "playarea/pointer2.png"
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
                            key: "intro_group",
                            fullPath: e + "playarea/intro_group.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 0,
                            name: "intro_group",
                            assetKey: "intro_group",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: 0,
                            name: "tabs_group",
                            assetKey: "tabs_group",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: 1,
                            name: "multiplierSpinContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "popupsContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "spearAnimationContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 0,
                            name: "ui_group",
                            assetKey: "ui_group",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: 1,
                            name: "bonusWheelContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "pointerContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "pointer2",
                                    assetKey: "pointer2",
                                    x: "908",
                                    y: "15",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pointer2_shadow",
                                    assetKey: "pointer2_shadow",
                                    x: "888",
                                    y: "-19",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pointer1",
                                    assetKey: "pointer1",
                                    x: "903",
                                    y: "329",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pointer1_shadow",
                                    assetKey: "pointer1_shadow",
                                    x: "866",
                                    y: "267",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "bonusWheelWinAnimationContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 1,
                                name: "bonusWheelFrameAnimationContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 1,
                                name: "backgroundBonus",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "bottomBg",
                                    assetKey: "bottomBg",
                                    x: "361",
                                    y: "706",
                                    alpha: "1"
                                }]
                            }, {
                                type: 0,
                                name: "bonusWheel1Shadow",
                                assetKey: "bonusWheel1Shadow",
                                x: "439",
                                y: "435",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "bonusWheel1Container",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "freeSpinsNumbersContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "inc",
                                        assetKey: "inc",
                                        x: "0",
                                        y: "4",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "freeSpinsNumber_aliases",
                                        assetKey: "freeSpinsNumber_aliases",
                                        x: "78",
                                        y: "-391",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "freeSpinsNumber1_aliases",
                                        assetKey: "freeSpinsNumber1_aliases",
                                        x: "332",
                                        y: "-220",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "freeSpinsNumber2_aliases",
                                        assetKey: "freeSpinsNumber2_aliases",
                                        x: "393",
                                        y: "80",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "freeSpinsNumber3_aliases",
                                        assetKey: "freeSpinsNumber3_aliases",
                                        x: "227",
                                        y: "332",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "freeSpinsNumber4_aliases",
                                        assetKey: "freeSpinsNumber4_aliases",
                                        x: "-76",
                                        y: "389",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "freeSpinsNumber5_aliases",
                                        assetKey: "freeSpinsNumber5_aliases",
                                        x: "-330",
                                        y: "220",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "freeSpinsNumber6_aliases",
                                        assetKey: "freeSpinsNumber6_aliases",
                                        x: "-390",
                                        y: "-80",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "freeSpinsNumber7_aliases",
                                        assetKey: "freeSpinsNumber7_aliases",
                                        x: "-225",
                                        y: "-332",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "respinTextContainer",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "respinText",
                                        assetKey: "respinText",
                                        x: "808",
                                        y: "505",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "respin1Text",
                                        assetKey: "respin1Text",
                                        x: "1128",
                                        y: "559",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "respin2Text",
                                        assetKey: "respin2Text",
                                        x: "1335",
                                        y: "807",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "respin3Text",
                                        assetKey: "respin3Text",
                                        x: "1153",
                                        y: "1065",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "respin4Text",
                                        assetKey: "respin4Text",
                                        x: "975",
                                        y: "1140",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "respin5Text",
                                        assetKey: "respin5Text",
                                        x: "660",
                                        y: "1257",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "respin6Text",
                                        assetKey: "respin6Text",
                                        x: "508",
                                        y: "974",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "respin7Text",
                                        assetKey: "respin7Text",
                                        x: "563",
                                        y: "655",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 0,
                                    name: "wheel1Center",
                                    assetKey: "wheel1Center",
                                    x: "961",
                                    y: "960",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bonusWheel1",
                                    assetKey: "bonusWheel1",
                                    x: "393",
                                    y: "392",
                                    alpha: "1"
                                }]
                            }, {
                                type: 0,
                                name: "shadowBonusWheel1",
                                assetKey: "shadowBonusWheel1",
                                x: "505",
                                y: "302",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "bonusWheel2Shadow",
                                assetKey: "bonusWheel2Shadow",
                                x: "585",
                                y: "122",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "bonusWheel2Container",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "wheel2Center",
                                    assetKey: "wheel2Center",
                                    x: "959",
                                    y: "459",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bonusWheel2",
                                    assetKey: "bonusWheel2",
                                    x: "585",
                                    y: "85",
                                    alpha: "1"
                                }]
                            }, {
                                type: 0,
                                name: "pillars",
                                assetKey: "pillars",
                                x: "188",
                                y: "0",
                                alpha: "1"
                            }]
                        }, {
                            type: 1,
                            name: "backgroundContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "cloudsAnimationContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: mt.objects.IMAGE,
                                name: "bonusBg",
                                assetKey: "bonusBg"
                            }]
                        }, {
                            type: 1,
                            name: "slotMachineContainer",
                            alpha: "1",
                            contents: []
                        }]
                    }
                }
            }
        },
        1114: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Demo = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "frameIntroScreen",
                            fullPath: e + "playarea/frameIntroScreen.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenArrow",
                            fullPath: e + "playarea/introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextBottom",
                            fullPath: e + "playarea/introScreenTextBottom.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoStart(width=415, height=30, class=autoStartCheckBox)_clickableArea",
                            fullPath: e + "playarea/autoStart(width=415, height=30, class=autoStartCheckBox)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter1",
                            fullPath: e + "playarea/introScreenTextCenter1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter",
                            fullPath: e + "playarea/introScreenTextCenter.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "testBitmapText_aliases",
                            fullPath: e + "playarea/testBitmapText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton(spritesX=3)_button",
                            fullPath: e + "playarea/demoPlayButton(spritesX=3)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "demoPlayButtonText_aliases",
                            fullPath: e + "playarea/demoPlayButtonText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "popupNotification(scaleX=1920, scaleY=1080, color=#161525, class=cover)_cover",
                            fullPath: e + "playarea/popupNotification(scaleX=1920, scaleY=1080, color=#161525, class=cover)_cover.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "notificationPopupBackground",
                            fullPath: e + "playarea/notificationPopupBackground1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "popupNotificationsOkButton(spritesX=3)_button",
                            fullPath: e + "playarea/popupNotificationsOkButton(spritesX=3)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "popupNotificationsContent_aliases",
                            fullPath: e + "playarea/popupNotificationsContent_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "popupNotificationsHeadText_aliases",
                            fullPath: e + "playarea/popupNotificationsHeadText_aliases.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1115: function(e, t) {
            nge.App[nge.appNS].Tpl.States.LoadAssets = function() {
                var e = nge.appPath + "img/",
                    t = nge.Lib.Helper.mobileAndTabletCheck(),
                    a = {
                        name: "assets",
                        contents: []
                    };
                return ["psd_atlases_help", "psd_atlas_bonusWheel_0", "psd_atlas_bonusWheel_1", "psd_atlases_play"].forEach((function(t) {
                    a.contents.push({
                        type: mt.assets.ATLAS,
                        key: t,
                        atlas: e + "atlases/" + t + ".json",
                        fullPath: e + "atlases/" + t + ".png"
                    })
                })), a.contents.push({
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
                }), t = t ? "psd_atlases_ui_mobile" : "psd_atlases_ui", a.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: t,
                    atlas: e + "atlases/" + t + ".json",
                    fullPath: e + "atlases/" + t + ".png"
                }), a.contents.push({
                    type: mt.assets.IMAGE,
                    key: "bgArea",
                    fullPath: e + "atlases/bgArea.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "bgAreaFreeSpins",
                    fullPath: e + "atlases/bgArea.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "bonusBg",
                    fullPath: e + "atlases/bonusBg.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "reelsBg",
                    fullPath: e + "atlases/reelsBg.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "reelsBgFreeSpins",
                    fullPath: e + "atlases/reelsBgFreeSpins.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "introScreenBg",
                    fullPath: e + "atlases/introScreenBg.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "popupJackpot",
                    fullPath: e + "jackpot/images/jackpotPopup.png"
                }, {
                    type: mt.assets.SPINE,
                    key: "M00_000_Anim",
                    spine: e + "spine/symbols/M00_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M00_000_Anim_x2",
                    spine: e + "spine/symbols/M00_000_x2.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M00_000_Anim_x3",
                    spine: e + "spine/symbols/M00_000_x3.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M01_000_Anim",
                    spine: e + "spine/symbols/M01_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M02_000_Anim",
                    spine: e + "spine/symbols/M02_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M03_000_Anim",
                    spine: e + "spine/symbols/M03_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M04_000_Anim",
                    spine: e + "spine/symbols/M04_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M05_000_Anim",
                    spine: e + "spine/symbols/M05_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M06_000_Anim",
                    spine: e + "spine/symbols/M06_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M07_000_Anim",
                    spine: e + "spine/symbols/M07_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M08_000_Anim",
                    spine: e + "spine/symbols/M08_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M09_000_Anim",
                    spine: e + "spine/symbols/M09_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M10_000_Anim",
                    spine: e + "spine/symbols/M10_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M11_000_Anim",
                    spine: e + "spine/symbols/M11_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M12_000_Anim",
                    spine: e + "spine/symbols/M12_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "popupSpineBackground",
                    spine: e + "spine/animatedPopup/animatedPopup.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "spinButtonAnimation",
                    spine: e + "spine/ui/spin_button.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bigWinAnim",
                    spine: e + "spine/bigWin/big_win.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bigWinFlareAnim",
                    spine: e + "spine/bigWin/big_win_flare.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bigWinSphere",
                    spine: e + "spine/bigWin/big_win_sphere.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "totems",
                    spine: e + "spine/bg/totems.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "totems_bonus",
                    spine: e + "spine/bonusWheel/totems_bonus.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "totems_spear",
                    spine: e + "spine/bonusWheel/totems_spear.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bg_clouds",
                    spine: e + "spine/bg/bg_clouds.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "fs_background_glow",
                    spine: e + "spine/bg/fs_background_glow.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "logs_glow",
                    spine: e + "spine/bg/logs_glow.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "logs_glow_bonus",
                    spine: e + "spine/bonusWheel/logs_glow_bonus.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "slot_machine_frame",
                    spine: e + "spine/bg/slot_machine_frame.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "slot_machine_front_grass",
                    spine: e + "spine/bg/slot_machine_front_grass.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "win_counter",
                    spine: e + "spine/bg/win_counter.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bonus_wheel",
                    spine: e + "spine/bonusWheel/bonus_wheel.json"
                }), {
                    assets: a,
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1116: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Play = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "bgAreaFreeSpinsGlow2",
                            fullPath: e + "playarea/bgAreaFreeSpinsGlow2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bgAreaFreeSpinsGlow1",
                            fullPath: e + "playarea/bgAreaFreeSpinsGlow1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bgAreaFreeSpinsGlow0",
                            fullPath: e + "playarea/bgAreaFreeSpinsGlow0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachine_container",
                            fullPath: e + "playarea/slotMachine_container.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameBottomFreeSpinsA",
                            fullPath: e + "playarea/slotMachineFrameBottomFreeSpinsA.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameFreeSpinsTop",
                            fullPath: e + "playarea/slotMachineFrameFreeSpinsTop.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameFreeSpinsRight",
                            fullPath: e + "playarea/slotMachineFrameFreeSpinsRight.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameFreeSpinsLeft",
                            fullPath: e + "playarea/slotMachineFrameFreeSpinsLeft.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameBottomA",
                            fullPath: e + "playarea/slotMachineFrameBottomA.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameTop",
                            fullPath: e + "playarea/slotMachineFrameTop.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameRight",
                            fullPath: e + "playarea/slotMachineFrameRight.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameLeft",
                            fullPath: e + "playarea/slotMachineFrameLeft.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "playareaLogo_asset",
                            fullPath: e + "playarea/playareaLogo_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "playareaLogo",
                            fullPath: e + "playarea/playareaLogo.png"
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
                            key: "offers_group",
                            fullPath: e + "playarea/offers_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "jackpotPopup_group",
                            fullPath: e + "playarea/jackpotPopup_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "intro_group",
                            fullPath: e + "playarea/intro_group.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "popupsContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 0,
                            name: "intro_group",
                            assetKey: "intro_group",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: 0,
                            name: "jackpotPopup_group",
                            assetKey: "jackpotPopup_group",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: 0,
                            name: "offers_group",
                            assetKey: "offers_group",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: 0,
                            name: "tabs_group",
                            assetKey: "tabs_group",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: 1,
                            name: "winPopupContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 0,
                            name: "ui_group",
                            assetKey: "ui_group",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: 1,
                            name: "gameLogoContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "playareaLogo",
                                assetKey: "playareaLogo",
                                x: "760",
                                y: "-2",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "playareaLogo_asset",
                                assetKey: "playareaLogo_asset",
                                x: "760",
                                y: "0",
                                alpha: "1"
                            }]
                        }, {
                            type: 1,
                            name: "jackpotStatusPanelContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "winlinesTextContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "slotMachineFrameContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "frontGrassAnimationContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 1,
                                name: "totemAnimationContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 1,
                                name: "slotMachineFrameAnimationContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 1,
                                name: "slotMachineWildAnimationContainer",
                                x: "379",
                                y: "89",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 0,
                                name: "slotMachineFrameLeft",
                                assetKey: "slotMachineFrameLeft",
                                x: "194",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "slotMachineFrameRight",
                                assetKey: "slotMachineFrameRight",
                                x: "1454",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "slotMachineFrameTop",
                                assetKey: "slotMachineFrameTop",
                                x: "399",
                                y: "28",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "slotMachineFrameBottomA",
                                assetKey: "slotMachineFrameBottomA",
                                x: "64",
                                y: "864",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "slotMachineFrameFreeSpinsLeft",
                                assetKey: "slotMachineFrameFreeSpinsLeft",
                                x: "194",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "slotMachineFrameFreeSpinsRight",
                                assetKey: "slotMachineFrameFreeSpinsRight",
                                x: "1454",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "slotMachineFrameFreeSpinsTop",
                                assetKey: "slotMachineFrameFreeSpinsTop",
                                x: "399",
                                y: "33",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "slotMachineFrameBottomFreeSpinsA",
                                assetKey: "slotMachineFrameBottomFreeSpinsA",
                                x: "64",
                                y: "864",
                                alpha: "1"
                            }]
                        }, {
                            type: 1,
                            name: "gameScreenContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "slotMachine_container",
                                assetKey: "slotMachine_container",
                                x: "379",
                                y: "89",
                                alpha: "1"
                            }]
                        }, {
                            type: 1,
                            name: "reelsBorderContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "reelsBg",
                                assetKey: "reelsBg",
                                x: "365",
                                y: "84",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "reelsBgFreeSpins",
                                assetKey: "reelsBgFreeSpins",
                                x: "365",
                                y: "83",
                                alpha: "1"
                            }]
                        }, {
                            type: 1,
                            name: "backgroundContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "fsGlowAnimationContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 1,
                                name: "bgAreaFreeSpinsGlow",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "bgAreaFreeSpinsGlow0",
                                    assetKey: "bgAreaFreeSpinsGlow0",
                                    x: "0",
                                    y: "0",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bgAreaFreeSpinsGlow1",
                                    assetKey: "bgAreaFreeSpinsGlow1",
                                    x: "1520",
                                    y: "0",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bgAreaFreeSpinsGlow2",
                                    assetKey: "bgAreaFreeSpinsGlow2",
                                    x: "400",
                                    y: "0",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "cloudsAnimationContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 0,
                                name: "bgArea",
                                assetKey: "bgArea",
                                x: "0",
                                y: "0",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "bgAreaFreeSpins",
                                assetKey: "bgAreaFreeSpins",
                                x: "0",
                                y: "0",
                                alpha: "1"
                            }]
                        }]
                    }
                }
            }
        },
        1117: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1118: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1119: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.BonusWheel = nge.App.DjGameBase.Mlm.Brain.BonusWheel.extend((function() {
                function e(e) {
                    "fakeLoaderBonusToGame" === e && (nge.statesManager.display("play"), nge.localData.set("buffalo.spaceHandler.isBlocked", !0), e = nge.App.getInstance("Com.LayersSwitcher.Cfg"), nge.localData.get("bonusGame.lastResponse.params.freeSpins") ? (e.scenes.play.defaultLayer = "gameFreeSpin", nge.localData.set("slotMachine.state", "FreeSpins")) : (e.scenes.play.defaultLayer = "game", nge.localData.set("slotMachine.state", "Ready"), nge.localData.set("bonusWon", !1)), nge.observer.add("StatesManager.create.end", (function() {
                        o(), nge.observer.remove("StatesManager.create.end", !1, "playStateBonusFreeSpinsRun", !0)
                    }), "playStateBonusFreeSpinsRun", !0))
                }

                function t(e) {
                    "bonusWheel1" === e && nge.localData.get("bonusWheel.bigWheel.sectorIndex") && p()
                }
                var a, s = nge.Lib.Helper.mobileAndTabletCheck(),
                    n = !1;
                this.bonusWheelStopped = function(e) {}, this.endBonusGameHandler = function() {};
                var l = function(e) {
                        if ("bonusWheel" === e) {
                            n = !1, nge.localData.set("slotMachine.state", "BonusWheel");
                            var t = 0;
                            (e = nge.localData.get("slotMachine")) && e.slotWin && (t = +e.slotWin.totalWin || 0), nge.localData.get("bonusWheel.restoreTotalWin") && (t = nge.localData.get("bonusWheel.restoreTotalWin"), nge.localData.set("bonusWheel.restoreTotalWin", !1)), nge.localData.get("bonusWheel.bigWheel.sectorIndex") && (a = nge.localData.get("bonusWheel.bigWheel.sectorIndex")), nge.localData.set("bonusWheel.totalWin", t)
                        }
                    },
                    o = function() {
                        nge.localData.set("bonusWheelWon", !1);
                        var e = nge.localData.get("bonusGame").lastResponse.params.freeSpins;
                        if (e) {
                            var t = nge.localData.get("freespin");
                            t.spinsLeft = e, t.spinsTotal = e, nge.localData.set("freespin", t), nge.localData.set("bonusGame.freespins", e), nge.observer.fire("freespin.start", e, 200)
                        } else nge.localData.set("slotMachine.lastResponse", !1), nge.observer.fire("bonusWheel.balanceRequest", null, 200);
                        nge.localData.set("slotMachine.slotWin.lineWinAmounts", !1), nge.localData.set("bonusWheel.bigWheel.sectorIndex", !1), nge.rafSetTimeout((function() {
                            nge.localData.set("buffalo.spaceHandler.isBlocked", !1), nge.App.getInstance("Com.LayersSwitcher.Cfg").scenes.play.defaultLayer = "game"
                        }), 1e3)
                    },
                    i = function() {
                        var e = s ? nge.findOne("^playButtonMobileContainer") : nge.findOne("^playButtonContainer"),
                            t = s ? nge.findOne("^buttonsMobileContainer") : nge.findOne("^UISpinPanelsContainer");
                        t.addChild(e), t.bringToTop(e), s ? nge.rafSetTimeout((function() {
                            nge.findOne("^quickSettingsPanelMobileButtonButton").enable(1)
                        }), 1) : (e = nge.findOne("^spin_button_fx"), t.addChild(e), t.bringToTop(e), nge.rafSetTimeout((function() {
                            nge.findOne("^quickSettingsPanelButtonButton").enable(1)
                        }), 1))
                    },
                    p = function() {
                        nge.localData.set("bonusWheel.multiplierPopupShowed", !0),
                            function() {
                                var e = s ? nge.findOne("^playButtonMobileContainer") : nge.findOne("^playButtonContainer"),
                                    t = nge.findOne("^multiplierSpinContainer");
                                t.addChild(e), s ? nge.rafSetTimeout((function() {
                                    nge.findOne("^quickSettingsPanelMobileButtonButton").disable(0)
                                }), 1) : (e = nge.findOne("^spin_button_fx"), t.addChild(e), t.bringToTop(e), nge.rafSetTimeout((function() {
                                    nge.findOne("^quickSettingsPanelButtonButton").disable(0)
                                }), 1))
                            }(), nge.observer.fire("popup.show", {
                                popupName: "bonusWheelMultiplyJackpot",
                                onClick: function() {
                                    nge.observer.fire("bonusWheel.disableSpinButton")
                                },
                                onHide: function() {
                                    nge.localData.set("bonusWheel.multiplierPopupShowed", !1), i(), n || nge.observer.fire("bonusWheel.spinPressed")
                                }
                            }, 1)
                    };
                this.checkBonusWheelStage = function(e) {
                    var t = nge.localData.get("bonusWheel.stage"),
                        s = nge.localData.get("bonusGame.lastResponse");
                    if (1 === t) {
                        if ("FreeSpins" === s.state) e = s.params.freeSpins, nge.observer.fire("bonusWheel.winPopup.play"), nge.observer.fire("popup.show", {
                            popupName: "freespinsPopup",
                            layerName: "freespinsPopup",
                            bonusWheelFreespinsCounter: e,
                            onHide: function() {
                                nge.observer.fire("layersSwitcher.show", "fakeLoaderBonusToGame", 1)
                            }
                        });
                        else if ("jackpot" === e.type)
                            if ("MiniWheel" === s.state) a = e.index, nge.localData.set("bonusWheel.stage", 2), nge.localData.set("bonusWheel.canSpin", !0), nge.observer.fire("buttons.updateState"), nge.observer.fire("bonusWheel.jackpotMultiplyPopup.play"), nge.observer.fire("bonusWheel.enableSpinButton"), p();
                            else {
                                t = nge.Lib.Money.toCoinsInt(s.bonusItem.value);
                                var l = nge.localData.get("bonusWheel.totalWin") || 0;
                                l += +s.bonusItem.value, nge.localData.set("bonusWheel.totalWin", l), e = e.value + " JACKPOT", nge.localData.set("bonusWheel.canSpin", !0), nge.observer.fire("buttons.updateState"), nge.observer.fire("bonusWheel.jackpotPopup.play"), nge.observer.fire("bonusWheel.respinPanel.hide"), nge.observer.fire("popup.show", {
                                    popupName: "bonusWheelCreditsPopup",
                                    onClick: function() {
                                        nge.observer.fire("bonusWheel.winField.showVFX")
                                    },
                                    onHide: function() {
                                        "Ready" === s.state ? nge.observer.fire("layersSwitcher.show", "fakeLoaderBonusToGame", 1) : (nge.observer.fire("bonusWheel.bigWheel.tintHide"), n || nge.observer.fire("bonusWheel.spinPressed"))
                                    },
                                    creditsPopupJackpotName: e,
                                    creditsPopupWinAmountCounter: t
                                })
                            }
                    } else if (2 === t) {
                        t = nge.Lib.Money.toCoinsInt(s.params.winAmount), l = nge.localData.get("bonusWheel.totalWin") || 0, l += +s.params.winAmount, nge.localData.set("bonusWheel.totalWin", l), l = function(e) {
                            return void 0 === a ? "" : nge.App.getInstance("Com.BonusWheel.Cfg").get().wheel1Sectors[e].value
                        }(a);
                        var o = "x" + e.value;
                        e = "MINI" === l ? 10 == +e.value ? "bonusWheelCreditsPopupWithMultiplierMiniX10" : "bonusWheelCreditsPopupWithMultiplierMini" : 10 == +e.value ? "bonusWheelCreditsPopupWithMultiplierX10" : "bonusWheelCreditsPopupWithMultiplier", nge.observer.fire("bonusWheel.jackpotPopup.play"), nge.observer.fire("bonusWheel.respinPanel.hide"), nge.observer.fire("popup.show", {
                            popupName: e,
                            onClick: function() {
                                nge.observer.fire("bonusWheel.winField.showVFX")
                            },
                            onHide: function() {
                                "Ready" === s.state ? nge.observer.fire("layersSwitcher.show", "fakeLoaderBonusToGame", 1) : (nge.observer.fire("bonusWheel.bigWheel.tintHide"), nge.observer.fire("bonusWheel.smallWheel.tintHide"), nge.localData.set("bonusWheel.stage", 1), nge.localData.set("bonusWheel.canSpin", !0), nge.observer.fire("buttons.updateState"), n || nge.observer.fire("bonusWheel.spinPressed"))
                            },
                            creditsPopupMultiplier: o,
                            creditsPopupJackpotName: l,
                            creditsPopupWinAmountCounter: t
                        })
                    }
                };
                var r = function() {
                    nge.localData.set("bonusWheelWon", !1), nge.localData.get("bonusWheel.multiplierPopupShowed") && i(), nge.localData.set("bonusWheel.multiplierPopupShowed", !1), nge.localData.set("bonusWheel.bigWheel.sectorIndex", !1), n = !0
                };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("StatesManager.create.end", l, !1, !0), nge.observer.add("layersSwitcher.animationComplete", e, !1, !0), nge.observer.add("layersSwitcher.switched", t, !1, !0), nge.observer.add("Transport.close", r, !1, !0)
                }
            }))
        },
        1120: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.SpinButton = nge.App.DjGameBase.Mlm.Brain.SpinButton.extend((function() {
                var e = this,
                    t = !1;
                this.spinButtonDisableEvents.push("freespin.additional"), this.stopButtonDisableEvents.push("freespin.additional"), this.spinButtonDisableEvents.push("bonusWheel.disableSpinButton"), this.stopButtonDisableEvents.push("bonusWheel.disableSpinButton"), this.spinButtonEnableEvents.push("freespin.additionalHide.end"), this.spinButtonEnableEvents.push("bonusWheel.enableSpinButton"), this.spinEnableBlockers.push((function() {
                    return nge.localData.get("additionalPopup.willBeShownNext")
                })), this.spinEnableBlockers.push((function() {
                    return nge.localData.get("bonusWheelWon") && "bonusWheel" !== nge.statesManager.getCurrentName()
                })), this.spinButtonEnableLayers.push("bonusWheel1", "bonusWheel2"), this.bonusLayers = ["bonusWheel1", "bonusWheel2"], this.spinLayers.push("returnFromBonus"), this.spinButtonEnableLayers.push("returnFromBonus"), this.pressHandlerForBonusWheelGame = function() {
                    e.disableButton("press", !0, e.stopFrames), nge.localData.get("bonusWheel.multiplierPopupShowed") ? (nge.observer.fire("spinButton.showPressAnimation"), nge.observer.fire("popup.hide")) : nge.observer.fire("bonusWheel.spinPressed")
                }, this.pressHandler = function(a, s) {
                    this.super.pressHandler(a, s), t && "spin" === s && e.pressHandlerForBonusWheelGame()
                }, this.layerSwitchedHandler = function(a) {
                    t = !1, e.bonusLayers.includes(a) && (t = !0), this.super.layerSwitchedHandler(a)
                }
            }))
        },
        1121: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic = {}
        },
        1122: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States = {}
        },
        1123: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SpinState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SpinState.extend((function() {
                this.subscribeCfgExt["buttons.resetBalanceReceivedFlag"] = "resetBalanceReceivedFlag", this.validityCheckHandler = function() {
                    var e = "PickBonusItemResponse" === nge.localData.get("State.LastResponse"),
                        t = "SpinRequest" === nge.localData.get("spin.type"),
                        a = this.super.validityCheckHandler();
                    return e && t || !nge.localData.get("bonusWheelWon") && a
                }
            }))
        },
        1124: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.BonusWheelState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.BonusWheelState.extend((function() {
                this.model = {
                    order: ["SHOWED"],
                    actions: {
                        SHOWED: {
                            quickSettingsPanel: {
                                callback: function() {
                                    nge.observer.fire("quickSettings.panelSwitch")
                                }
                            },
                            sound: {
                                callback: function() {
                                    nge.observer.fire("settings.soundSwitch")
                                }
                            },
                            fullscreen: {
                                callback: function() {
                                    nge.observer.fire("fullscreen.btnClicked")
                                }
                            }
                        }
                    }
                }, this.rememberLastResponse = function(e) {
                    nge.localData.set("State.LastResponse", e.action)
                }, this.validityCheckHandler = function() {
                    return nge.localData.get("bonusWheelWon")
                }, this.actionUpdateHandlers = {
                    onShowed: function() {
                        return "bonusWheel" === nge.statesManager.getCurrentName()
                    }
                }, this.subscribeCfgExt["transportMessage.PickBonusItemResponse"] = "rememberLastResponse"
            }))
        },
        1125: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SharedState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SharedState.extend((function() {
                var e = nge.brain.do("getAllSpinLayers")[0],
                    t = nge.brain.do("getAllFreespinLayers")[0],
                    a = nge.brain.do("getAllBonusLayers")[0];
                this.model.actions.SHARED.betMinus.enabled = ["show", "!bonusWon", "!winTweenInProgress", "!offerInProgress"], this.model.actions.SHARED.betPlus.enabled = ["show", "!bonusWon", "!winTweenInProgress", "!offerInProgress"], this.propUpdateHandlers.bonusWon = function() {
                    return nge.localData.get("bonusWheelWon")
                }, this.propUpdateHandlers.showSettingsAndInfo = function() {
                    var s = nge.localData.get("autospin"),
                        n = nge.localData.get("slotMachine.state"),
                        l = nge.localData.get("layersSwitcher.currentLayer"),
                        o = !n,
                        i = nge.localData.get("isSpinReadyToProceed"),
                        p = nge.localData.get("bonusWheel.spinning");
                    return "Ready" === n && e.includes(l) ? o = !0 : "FreeSpins" === n && t.includes(l) ? o = !0 : "PickBonus" === n && (a.includes(l) || t.includes(l)) ? i = o = !0 : "BonusWheel" !== n || p || !a.includes(l) && !t.includes(l) || (o = !0), !s && o && i
                }
            }))
        },
        1126: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: ["@PAYTABLE", "@SETTINGS_SCREEN", "BONUS_WHEEL", "SPIN"],
                        BONUS_WHEEL: ["SPIN", "FREESPIN"],
                        FREESPIN: ["SPIN"],
                        PAYTABLE: ["SPIN"],
                        SETTINGS_SCREEN: ["SPIN"]
                    },
                    bonusWheel: {
                        BONUS_WHEEL: ["SPIN", "FREESPIN"],
                        PAYTABLE: ["BONUS_WHEEL"],
                        SETTINGS_SCREEN: ["BONUS_WHEEL"]
                    }
                }, this.sharedStates = {
                    play: ["SHARED"],
                    bonusWheel: ["SHARED"]
                }, this.sharedButtons.play.linesChanger = {
                    name: "linesChanger",
                    enabled: !1,
                    visible: !0
                }, this.buttons.bonusWheel = {}, delete this.buttons.play.freeSpinStart, delete this.buttons.play.finalPopup, this.sharedButtons.bonusWheel = {
                    sound: {
                        name: "sound",
                        enabled: !0,
                        visible: !0
                    },
                    fullscreen: {
                        name: "fullscreen",
                        enabled: !0,
                        visible: !0
                    },
                    quickSettingsPanel: {
                        name: "quickSettingsPanel",
                        enabled: !0,
                        visible: !0
                    },
                    settings: {
                        name: "settings",
                        enabled: !0,
                        visible: !0
                    },
                    paytable: {
                        name: "paytable",
                        enabled: !0,
                        visible: !0
                    },
                    coinMinus: {
                        name: "coinMinus",
                        enabled: !1,
                        visible: !0
                    },
                    coinPlus: {
                        name: "coinPlus",
                        enabled: !1,
                        visible: !0
                    },
                    betMinus: {
                        name: "betMinus",
                        enabled: !1,
                        visible: !0
                    },
                    betPlus: {
                        name: "betPlus",
                        enabled: !1,
                        visible: !0
                    },
                    currencyChanger: {
                        name: "changeCurrencyArea",
                        enabled: !1,
                        visible: !0
                    },
                    auto: {
                        name: "auto",
                        enabled: !1,
                        visible: !0
                    },
                    maxBet: {
                        name: "maxBet",
                        enabled: !1,
                        visible: !0
                    },
                    pageThreeTrigger: {
                        name: "pageThreeTrigger",
                        enabled: !0,
                        visible: !0
                    },
                    pageTwoTrigger: {
                        name: "pageTwoTrigger",
                        enabled: !0,
                        visible: !0
                    },
                    pageOneTrigger: {
                        name: "pageOneTrigger",
                        enabled: !0,
                        visible: !0
                    },
                    mobileBackToGame: {
                        name: "mobileBackToGame",
                        enabled: !0,
                        visible: !0
                    },
                    settingsSplashScreen: {
                        name: "settingsSplashScreen",
                        enabled: !0,
                        visible: !0
                    },
                    settingsDisplayValuesInCoins: {
                        name: "settingsDisplayValuesInCoins",
                        enabled: !0,
                        visible: !0
                    },
                    settingsPressSpaceToSpin: {
                        name: "settingsPressSpaceToSpin",
                        enabled: !0,
                        visible: !0
                    },
                    infoPrev: {
                        name: "infoPrev",
                        enabled: !0,
                        visible: !0
                    },
                    infoNext: {
                        name: "infoNext",
                        enabled: !0,
                        visible: !0
                    },
                    turboMode: {
                        name: "turboMode",
                        enabled: !0,
                        visible: !0
                    },
                    linesChanger: {
                        name: "linesChanger",
                        enabled: !1,
                        visible: !0
                    }
                }
            }))
        },
        1127: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Controller = nge.App.DjGameBase.Mlm.Brain.Controller.extend((function() {
                this._logicBlocks.push("bonusWheel")
            }))
        },
        1128: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Main = nge.Mlm.Brain.Main.extend((function() {
                var e = function(e) {
                    if (e && e.data && e.data.lastResponse) {
                        var t = e.data.lastResponse,
                            a = t.state;
                        "BigWheel" !== a && "MiniWheel" !== a || (a = "BigWheel" === t.state ? 1 : 2, nge.localData.set("bonusWheelWon", !0), nge.localData.set("bonusWheel.initialStage", a), nge.localData.set("bonusWheel.wheelResinAllowed", t.params.wheelRespinAllowed), nge.localData.set("bonusWheel.restoreTotalWin", +e.data.lastResponse.totalBonusWin), !(a = !!t.spinResult && t.spinResult.rows) && e.data.gameParameters && e.data.gameParameters.initialSymbols && (a = e.data.gameParameters.initialSymbols), e = function(e) {
                            if (!e) return 0;
                            var t = 0;
                            return e.forEach((function(e) {
                                for (var a = 0; a < e.length; a++) "12" === e[a] && t++
                            })), (3 > t || 5 < t) && (t = 3, console.log("wrong scatter count")), t
                        }(a), nge.localData.set("bonusWheel.scattersCount", e), t.params.bigWheelWiningSector && nge.localData.set("bonusWheel.bigWheel.sectorIndex", +t.params.bigWheelWiningSector), t.state = "BonusWheel")
                    }
                };
                this.subscribe = function() {
                    nge.observer.add("transportMessage.AuthResponse", e, !1, !0), this.super.subscribe()
                }
            }))
        },
        1129: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Slot = nge.App.DjGameBase.Mlm.Brain.Slot.extend((function() {
                function e(e) {
                    "fakeLoaderGameToBonus" === e && nge.statesManager.display("bonusWheel")
                }
                var t = this;
                t.popupShowDelay = 1, this.canIntrigue = !0, this._wasBonusWheel = !1, this.customIntrigueLogic = function(e, t, a) {
                    return this.super.customIntrigueLogic(e, t, a), !0 === a.status && (a.endsFrom = 5, nge.localData.set("slotMachineIntrigue", a)), a
                }, this.runBonusRoutine = function(e) {
                    if (nge.localData.set("bonusWon", !0), nge.localData.set("slotMachineResponseBonusSpin", !0), t.triggerRoutineCheck(e), "BigWheel" === e.state || "MiniWheel" === e.state) {
                        var a = "BigWheel" === e.state ? 1 : 2;
                        nge.localData.set("bonusWheelWon", !0), nge.localData.set("bonusWheel.initialStage", a), t.bonusGameTriggered = !0, e.state = "BonusWheel"
                    } else nge.localData.set("slotMachineResponseBonusSpin", !1);
                    return !0
                }.bind(this), this.showPreBonusPopup = function() {
                    nge.localData.get("bonusWheelWon") && (nge.observer.fire("bonusWheel.startPopup.play"), nge.observer.fire("popup.show", {
                        popupName: "bonusWheelStartPopup",
                        layerName: "bonusWheelStartPopup",
                        onHide: function() {
                            nge.observer.fire("layersSwitcher.show", "fakeLoaderGameToBonus", 1)
                        }
                    }))
                }, this.tryToChangeQuery = function() {
                    if (t.bonusGameTriggered) {
                        var e = nge.Lib.Helper.jsObjClone(nge.localData.get("slotMachine"));
                        e.slotWin.lineWinAmounts = [], nge.observer.fire("winlines.setNewQuery", e), nge.observer.fire("winlines.animateByOne.cycleComplete", null, 200)
                    }
                }, this.animateBonusSymbols = function() {
                    this.super.animateBonusSymbols();
                    for (var e = t.getLastData(), a = 0; a < e.slotWin.lineWinAmounts.length; a++) {
                        var s = e.slotWin.lineWinAmounts[a];
                        "linePickBonus" !== s.type && "Bonus" !== s.type || nge.localData.set("bonusWheel.scattersCount", s.wonSymbols.length)
                    }
                }, this.spinCompleteHandler = function() {
                    var e = t.checkIfBonus(),
                        a = 0,
                        s = t.getLastData();
                    s.slotWin && s.slotWin.totalWin && (a = s.slotWin.totalWin), s = 1;
                    var n = 1050;
                    t.checkBigWin(a, e) && (s = 2, n = 1050), nge.observer.fire("winlines.setSybcyclesCount", s), nge.observer.fire("winlines.winlines.setAnimationAllDurationTime", n), t.super.spinCompleteHandler()
                };
                var a = function(e) {
                    if (e.data && e.data.spinResult && e.data.slotWin && e.data.slotWin.lineWinAmounts && nge.localData.get("freespin.inProgress"))
                        for (var t = e.data.slotWin.lineWinAmounts, a = t.length; a--;) {
                            var s = t[a];
                            if ("Bonus" === s.type && s.bonusName && "Multiplier" === s.bonusName) {
                                var n = +s.wonSymbols[0][1],
                                    l = +s.wonSymbols[0][0];
                                e.data.spinResult.rows[n][l] = e.data.spinResult.rows[n][l] + "_x" + s.params.multiplier, e.data.spinResult.columns[l][n] = e.data.spinResult.columns[l][n] + "_x" + s.params.multiplier, t.splice(a, 1)
                            }
                        }
                };
                this.onBalanceResponseHandler = function(e) {
                    t.super.onBalanceResponseHandler(e), t._wasBonusWheel && (t._wasBonusWheel = !1, nge.observer.fire("balance.showBalance"), t.winProcessingFinish())
                }, this.bonusWheelBalanceRequest = function() {
                    t._wasBonusWheel = !0, t.balanceRequest()
                }, this.onTransportCloseHandler = function() {
                    t.super.onTransportCloseHandler(), t._wasBonusWheel = !1
                }, this.customSubscribe = function() {
                    this.super.customSubscribe(), nge.observer.add("transportMessage.FreeSpinResponse", a, !1, !0), nge.observer.add("layersSwitcher.animationComplete", e, !1, !0), nge.observer.add("bonusWheel.balanceRequest", t.bonusWheelBalanceRequest, !1, !0), nge.observer.add("transportMessage.FreeSpinResponse", (function(e) {
                        if (nge.localData.set("bonusGame.freespins", !1), (e = e.data.slotWin) && e.lineWinAmounts)
                            for (var t = 0; t < e.lineWinAmounts.length; t++) {
                                var a = e.lineWinAmounts[t];
                                a.params && a.params.freeSpins && nge.localData.set("bonusGame.freespins", a.params.freeSpins)
                            }
                    }), !1, !0)
                }
            }))
        },
        1130: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.DjGameBase.Mlm.Brain.Sounds.extend((function() {
                var e = this,
                    t = 0;
                this.wheelSpinSoundCount = 1, this.reelsCount = 5, this.triggersNeededForBonus = this.triggerReelsCount = 3, this.scatterSymbols = ["12"];
                var a = 0;
                this.loopedSounds.push("wheel_background"), this.spinGameBackgroundSound.push({
                    s: "bs_background",
                    e: "popupFinish.animate.start",
                    action: "play",
                    loop: !0
                }, {
                    s: "bs_background",
                    e: "wheelBackground.play",
                    action: "stop"
                }), this.popupSounds.push({
                    s: "popup_disappear",
                    e: "popup.hideStart"
                }, {
                    s: "additional_fs_pop_up",
                    e: "freespin.additional.show"
                }, {
                    s: "wheelBonus_win_popup",
                    e: "bonusWheel.winPopup.play"
                }, {
                    s: "wheelBonus_jackpot_popup",
                    e: "bonusWheel.jackpotPopup.play"
                }, {
                    s: "wheelBonus_start_popup",
                    e: "bonusWheel.startPopup.play"
                }, {
                    s: "popup_multiply_jackpot",
                    e: "bonusWheel.jackpotMultiplyPopup.play"
                }), this.scatterSounds = [{
                    s: "scatter_0",
                    e: "sound.scatter_0.play"
                }, {
                    s: "scatter_1",
                    e: "sound.scatter_1.play"
                }, {
                    s: "scatter_2",
                    e: "sound.scatter_2.play"
                }, {
                    s: "scatter_3",
                    e: "sound.scatter_3.play"
                }, {
                    s: "scatter_4",
                    e: "sound.scatter_4.play"
                }], this.intrigueSounds = [{
                    s: "spinification",
                    e: "slotMachine.reel_2.intrigue.start"
                }, {
                    s: "spinification",
                    e: "slotMachine.reel_3.intrigue.start"
                }, {
                    s: "spinification",
                    e: "slotMachine.reel_4.intrigue.start"
                }, {
                    s: "spinification",
                    e: "slotMachine.reel_4.animation.stop",
                    action: "stop"
                }], this.buttonsClickSounds = [{
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
                    s: "hover_3",
                    e: "button.hover_3"
                }, {
                    s: "spin_click",
                    e: "sound.spin_click.play",
                    relaunch: !0
                }, {
                    s: "spin_stop",
                    e: "sound.stop_click.play",
                    relaunch: !0
                }], this.counterSounds = [], this.bigWinSounds.push({
                    s: "buffalo_start_finish",
                    e: "bigWin.buffalo.startFinish.play"
                }, {
                    s: "buffalo_start_finish",
                    e: "win.big.counterComplete"
                }, {
                    s: "big_win_start",
                    e: "win.big.show"
                }, {
                    s: "buffalo_loop",
                    e: "bigWinSound.Play",
                    loop: !0
                }, {
                    s: "buffalo_loop",
                    e: "bigWinSound.Stop",
                    action: "stop"
                }, {
                    s: "buffalo_loop",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "buffalo_loop",
                    e: "win.big.counterComplete",
                    action: "stop"
                }), this.regularWinSounds = [{
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
                }], this.soundExt.push({
                    s: "wheel_background",
                    e: "wheelBackground.play",
                    loop: !0
                }, {
                    s: "wheel_background",
                    e: "freespin.start",
                    action: "stop"
                }, {
                    s: "wheel_background",
                    e: "bs_background.play",
                    action: "stop"
                }, {
                    s: "wheel_background",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "wheel_start",
                    e: "wheelStart.play",
                    relaunch: !0
                }, {
                    s: "wheel_rotate",
                    e: "bonusWheel.loopStarted",
                    loop: !0,
                    relaunch: !0
                }, {
                    s: "wheel_rotate",
                    e: "bonusWheel.stopStarted",
                    action: "stop"
                }, {
                    s: "wheel_rotate",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "wheel_stop",
                    e: "bonusWheel.stopStarted",
                    relaunch: !0
                }, {
                    s: "totem_throwing",
                    e: "totem.throwing.play",
                    relaunch: !0
                }, {
                    s: "totem_win",
                    e: "totem.laughing.play"
                }, {
                    s: "totem_win",
                    e: "jackpot.start",
                    action: "stop"
                }, {
                    s: "lightning",
                    e: "lightning.sound.play"
                }), this.layerSwitcherHandler = function(e) {
                    switch (e) {
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
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.play");
                            break;
                        case "bonusWheel1":
                        case "bonusWheel2":
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.stop"), nge.observer.fire("wheelBackground.play")
                    }
                };
                var s = function() {
                        a = 0
                    },
                    n = function() {
                        nge.observer.fire("sound.scatter_" + a + ".play"), a++
                    },
                    l = function() {
                        e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, .2, 200)
                        }))
                    },
                    o = function() {
                        e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, 1, 300)
                        }))
                    },
                    i = function() {
                        "jackpot" !== nge.statesManager.getCurrentName() && (nge.observer.fire("button.hover_" + t), 4 <= ++t && (t = 0))
                    };
                this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("slotMachine.spinCommand", s, !1, !0), nge.observer.add("sound.scatter_landing_0.play", n, !1, !0), nge.observer.add("sound.scatter_landing_1.play", n, !1, !0), nge.observer.add("sound.scatter_landing_2.play", n, !1, !0), nge.observer.add("sound.scatter_landing_3.play", n, !1, !0), nge.observer.add("sound.scatter_landing_4.play", n, !1, !0), nge.observer.add("popup.showStart", l, !1, !0), nge.observer.add("sound.stopped.wheelBonus_win_popup", o, !1, !0), nge.observer.add("sound.stopped.end_freespins_popup", o, !1, !0), nge.observer.add("sound.stopped.wheelBonus_start_popup", o, !1, !0), nge.observer.add("sound.stopped.wheelBonus_jackpot_popup", o, !1, !0), nge.observer.add("sound.stopped.popup_multiply_jackpot", o, !1, !0), nge.observer.add("freespin.additionalHide.end", o, !1, !0), nge.observer.add("button.hover", i, !1, !0)
                }
            }))
        },
        1131: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Win = nge.App.DjGameBase.Mlm.Brain.Win.extend((function() {
                var e = this;
                this.regularWinSound = function(e) {
                    var t = nge.localData.get("totalBet.value");
                    (e = +e.totalWin) <= 1.99 * t ? nge.observer.fire("sounds.win.regularWinLow") : e <= 4.99 * t ? nge.observer.fire("sounds.win.regularWinMid") : e < 9.99 * t && nge.observer.fire("sounds.win.regularWinHigh")
                }, this.lineHighlightStartHandler = function(e) {
                    nge.observer.fire("win.lineWin.start.do", e, 1)
                }, this.showWinPopupHandler = function(t) {
                    var a = nge.Lib.Money.toCoins(t.totalWin);
                    0 === a ? (nge.observer.fire("win.hasBonusSymbolsButNoWin"), e.winAnimationCompleteHandler()) : t.isBigWin ? (nge.observer.fire("win.bigWin.startShow", {
                        totalWin: a,
                        data: t
                    }), nge.observer.fire("winlines.setSybcyclesCount", 1), nge.observer.fire("winlines.winlines.setAnimationAllDurationTime", 1050)) : nge.observer.fire("win.regularWin.startShow", {
                        totalWin: a,
                        data: t
                    })
                }
            }))
        },
        1132: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile = {}
        },
        1133: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic = {}
        },
        1134: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: ["@PAYTABLE", "@SETTINGS_SCREEN", "BONUS_WHEEL", "SPIN"],
                        BONUS_WHEEL: ["SPIN", "FREESPIN"],
                        FREESPIN: ["SPIN"],
                        PAYTABLE: ["SPIN"],
                        SETTINGS_SCREEN: ["SPIN"]
                    },
                    bonusWheel: {
                        BONUS_WHEEL: ["SPIN", "FREESPIN"],
                        PAYTABLE: ["BONUS_WHEEL"],
                        SETTINGS_SCREEN: ["BONUS_WHEEL"]
                    }
                }, delete this.buttons.play.freeSpinStart, delete this.buttons.play.finalPopup, this.sharedStates = {
                    play: ["SHARED"],
                    bonusWheel: ["SHARED"]
                }, this.buttons.bonusWheel = {}, this.sharedButtons.bonusWheel = {
                    sound: {
                        name: "soundMobile",
                        enabled: !0,
                        visible: !0
                    },
                    quickSettingsPanel: {
                        name: "quickSettingsPanel",
                        enabled: !0,
                        visible: !0
                    },
                    settings: {
                        name: "settings",
                        enabled: !0,
                        visible: !0
                    },
                    paytable: {
                        name: "paytable",
                        enabled: !0,
                        visible: !0
                    },
                    pageThreeTrigger: {
                        name: "pageThreeTrigger",
                        enabled: !0,
                        visible: !0
                    },
                    pageTwoTrigger: {
                        name: "pageTwoTrigger",
                        enabled: !0,
                        visible: !0
                    },
                    pageOneTrigger: {
                        name: "pageOneTrigger",
                        enabled: !0,
                        visible: !0
                    },
                    mobileBackToGame: {
                        name: "mobileBackToGame",
                        enabled: !0,
                        visible: !0
                    },
                    settingsSplashScreen: {
                        name: "settingsSplashScreen",
                        enabled: !0,
                        visible: !0
                    },
                    turboMode: {
                        name: "turboMode",
                        enabled: !0,
                        visible: !0
                    },
                    settingsDisplayValuesInCoins: {
                        name: "settingsDisplayValuesInCoins",
                        enabled: !0,
                        visible: !0
                    },
                    infoPrev: {
                        name: "infoPrev",
                        enabled: !0,
                        visible: !0
                    },
                    infoNext: {
                        name: "infoNext",
                        enabled: !0,
                        visible: !0
                    },
                    betSettingButtonMobile: {
                        name: "betSettingButtonMobile",
                        enabled: !1,
                        visible: !0
                    },
                    betMinus: {
                        name: "betMinus",
                        enabled: !1,
                        visible: !0
                    },
                    betPlus: {
                        name: "betPlus",
                        enabled: !1,
                        visible: !0
                    },
                    autoSpinMobile: {
                        name: "autoSpinMobile",
                        enabled: !1,
                        visible: !1
                    }
                }
            }))
        },
        1135: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States = {}
        },
        1136: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.SpinState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.SpinState.extend((function() {
                this.subscribeCfgExt["buttons.resetBalanceReceivedFlag"] = "resetBalanceReceivedFlag", this.validityCheckHandler = function() {
                    var e = "PickBonusItemResponse" === nge.localData.get("State.LastResponse"),
                        t = "SpinRequest" === nge.localData.get("spin.type"),
                        a = this.super.validityCheckHandler();
                    return e && t || !nge.localData.get("bonusWheelWon") && a
                }
            }))
        },
        1137: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.SharedState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.SharedState.extend((function() {
                var e = nge.brain.do("getAllSpinLayers")[0],
                    t = nge.brain.do("getAllFreespinLayers")[0],
                    a = nge.brain.do("getAllBonusLayers")[0];
                this.model.actions.SHARED.betMinus.enabled = ["show", "!bonusWon", "!winTweenInProgress", "!offerInProgress"], this.model.actions.SHARED.betPlus.enabled = ["show", "!bonusWon", "!winTweenInProgress", "!offerInProgress"], this.propUpdateHandlers.bonusWon = function() {
                    return nge.localData.get("bonusWheelWon")
                }, this.propUpdateHandlers.showSettingsAndInfo = function() {
                    var s = nge.localData.get("autospin"),
                        n = nge.localData.get("slotMachine.state"),
                        l = nge.localData.get("layersSwitcher.currentLayer"),
                        o = !n,
                        i = nge.localData.get("isSpinReadyToProceed"),
                        p = nge.localData.get("bonusWheel.spinning");
                    return "Ready" === n && e.includes(l) ? o = !0 : "FreeSpins" === n && t.includes(l) ? o = !0 : "PickBonus" === n && (a.includes(l) || t.includes(l)) ? i = o = !0 : "BonusWheel" !== n || p || !a.includes(l) && !t.includes(l) || (o = !0), !s && o && i
                }
            }))
        },
        1138: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.BonusWheelState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.BonusWheelState.extend((function() {
                this.model = {
                    order: ["SHOWED"],
                    actions: {
                        SHOWED: {}
                    }
                }, this.rememberLastResponse = function(e) {
                    nge.localData.set("State.LastResponse", e.action)
                }, this.validityCheckHandler = function() {
                    return nge.localData.get("bonusWheelWon")
                }, this.actionUpdateHandlers = {
                    onShowed: function() {
                        return "bonusWheel" === nge.statesManager.getCurrentName()
                    }
                }, this.subscribeCfgExt["transportMessage.PickBonusItemResponse"] = "rememberLastResponse"
            }))
        },
        1139: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport = {}
        },
        1140: function(e, t) {
            nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.BigWheel = ["amount", "params.pickItems"], nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.Multiplier = ["params.multiplier"]
        },
        1141: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models = {}
        },
        1142: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models.PickBonusItemResponse = nge.Mlm.Transport.Models.PickBonusItemResponse.extend((function() {
                this.customConstructor = function(e) {
                    this.super.customConstructor(e);
                    var t = nge.Lib.Helper.recursiveGet("data.canGamble", e, !1);
                    t && (this.data.canGamble = t), this.data.params = "", (t = nge.Lib.Helper.recursiveGet("data.params.winAmount", e, !1)) && (this.data.params = {}, this.data.params.winAmount = t), t = nge.Lib.Helper.recursiveGet("data.params.freeSpins", e, !1);
                    var a = nge.Lib.Helper.recursiveGet("data.params.freeSpinsTotal", e, !1);
                    t && a && (this.data.params = {}, this.data.params.freeSpins = t, this.data.params.freeSpinsTotal = a), (e = nge.Lib.Helper.recursiveGet("data.gameParameters.initialSymbols", e, !1)) && (this.data.gameParameters = {}, this.data.gameParameters.initialSymbols = e)
                }
            }))
        },
        1143: function(e, t, a) {
            a(1144), a(1145), a(1146), a(1147), a(1148), a(1149), a(1150)
        },
        1144: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup = {}
        },
        1145: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Helpers = {}
        },
        1146: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Helpers.SlotWin = nge.App.DjGameBase.Mlm.Transport.APIMockup.Helpers.SlotWin.extend((function() {
                var e = this.super.checkBonusGame.bind(this);
                this.checkBonusGame = function(t) {
                    if (t = e(t)) return nge.localData.get("freespin.inProgress") || (t.bonusGameData = {
                        newState: "BonusWheel"
                    }, t.winAmounts[0].bonusName = "BonusWheel"), t
                }.bind(this)
            }))
        },
        1147: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models = {}
        },
        1148: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.PickBonusItemResponse = Class.extend((function() {
                this.data = !1, this.constructor = function(e) {
                    this.data = e
                }, this.get = function() {
                    var e = this.data.baseResponse;
                    e.result = "true", e.sesId = nge.localData.get("apiMockup.sesId"), e.data = {};
                    var t = nge.localData.get("apiMockup.gameSettings"),
                        a = nge.localData.get("apiMockup.buffalo.bonusGameData"),
                        s = a.curStage,
                        n = a["bonusWheel" + s + "CurIndex"],
                        l = a["bonusWheel" + s + "Fields"],
                        o = l[n];
                    if (n++, nge.localData.set("apiMockup.buffalo.bonusGameData.bonusWheel" + s + "CurIndex", n), e.data.bonusItem = o, 1 === s) {
                        if ((s = t.wheel1Sectors[+o.value]).picked = "true", "freespins" === s.type) a = s.value, 4 === nge.localData.get("bonusWheel.scattersCount") && (a = s.valueX4), 5 === nge.localData.get("bonusWheel.scattersCount") && (a = s.valueX5), e.data.params = {
                            freeSpins: a
                        }, e.data.state = "FreeSpins", e.data.lastPick = "true", e.data.items = l, t.bonusGameRequest = "FreeSpinRequest", nge.localData.set("apiMockup.freespins.inProgress", !0), nge.localData.set("apiMockup.bonusGame.inProgress", !0), nge.localData.set("apiMockup.freespins.freespinsTotal", a), nge.localData.set("apiMockup.freespins.freespinRemain", a);
                        else if ("jackpot" === s.type) {
                            o = nge.App.getInstance("nge.Mlm.Transport.APIMockup.Helpers.Balance");
                            var i = nge.localData.get("apiMockup.buffalo.lastSpinRequestData");
                            t = o.toCoins(t.jackpotsBetMult[s.value], i), o.payForWin(t), e.data.params = {
                                winAmount: t + ""
                            }, 2 === n && "bonusWheel" !== s.subType && (e.data.state = "Ready", e.data.lastPick = "true", e.data.items = l, nge.localData.set("apiMockup.bonusGame.inProgress", !1)), "bonusWheel" === s.subType && (nge.localData.set("apiMockup.buffalo.bonusGameData.bonusWheel1WonJackpotSector", s), nge.localData.set("apiMockup.buffalo.bonusGameData.curStage", 2))
                        }
                    } else if (2 === s) {
                        (s = t.wheel2Sectors[+o.value]).picked = "true";
                        var p = nge.localData.get("apiMockup.buffalo.bonusGameData.bonusWheel1WonJackpotSector");
                        s = s.value, o = nge.App.getInstance("nge.Mlm.Transport.APIMockup.Helpers.Balance"), i = nge.localData.get("apiMockup.buffalo.lastSpinRequestData"), t = o.toCoins(t.jackpotsBetMult[p.value], i), o.payForWin(t), e.data.params = {
                            winAmount: t + "",
                            multiplier: s
                        }, 2 === a.bonusWheel1CurIndex || 2 === n ? (e.data.state = "Ready", e.data.lastPick = "true", e.data.items = l, nge.localData.set("apiMockup.bonusGame.inProgress", !1)) : (e.data.state = "BonusWheel", e.data.lastPick = "false", nge.localData.set("apiMockup.buffalo.bonusGameData.curStage", 1))
                    }
                    return e
                }
            }))
        },
        1149: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.SpinResponse = nge.App.ClassicGameBase.Mlm.Transport.APIMockup.Models.SpinResponse.extend((function() {
                this.processBonusGameData = function() {
                    if (this.winResult.bonusGameData)
                        if ("BonusWheel" === this.winResult.bonusGameData.newState) {
                            this.response.data.state = this.winResult.bonusGameData.newState, this.response.data.slotWin.canGamble = nge.App.getInstance("nge.Mlm.Transport.APIMockup.Helpers.Gamble").getCanGamble("false");
                            var e = nge.localData.get("apiMockup.gameSettings");
                            e.bonusGameRequest = "PickBonusItemRequest", nge.localData.set("apiMockup.bonusGame.inProgress", !0), nge.localData.set("apiMockup.freespins.totalBonusWin", +this.winResult.slotWin.totalWin), nge.localData.set("apiMockup.buffalo.lastSpinRequestData", this.data.requestData);
                            for (var t = [], a = e.bonusWheel1Results, s = nge.localData.get("apiMockup.buffalo.bonusGameData.bonusWheel1CurIndex") || 0, n = nge.localData.get("apiMockup.buffalo.bonusGameData.globalBonusWheel1CurIndex") || 0, l = 0; l < a.length; l++) t.push({
                                type: "IndexedItem",
                                index: a[(l + s + n) % a.length],
                                value: a[(l + s + n) % a.length],
                                picked: "false"
                            });
                            a = [], e = e.bonusWheel2Results;
                            var o = nge.localData.get("apiMockup.buffalo.bonusGameData.bonusWheel2CurIndex") || 0,
                                i = nge.localData.get("apiMockup.buffalo.bonusGameData.globalBonusWheel2CurIndex") || 0;
                            for (l = 0; l < e.length; l++) a.push({
                                type: "IndexedItem",
                                index: e[(l + o + i) % e.length],
                                value: e[(l + o + i) % e.length],
                                picked: "false"
                            });
                            nge.localData.set("apiMockup.buffalo.bonusGameData", {
                                curStage: 1,
                                bonusWheel1Fields: t,
                                bonusWheel1CurIndex: 0,
                                bonusWheel1WonFreespinsSector: null,
                                globalBonusWheel1CurIndex: n + s,
                                bonusWheel2Fields: a,
                                bonusWheel2CurIndex: 0,
                                globalBonusWheel2CurIndex: i + o
                            })
                        } else "FreeSpins" === this.winResult.bonusGameData.newState && this.super.processBonusGameData()
                }
            }))
        },
        1150: function(e, t) {
            nge.App[nge.appNS].Cfg.APIMockupGameSettings = nge.App.DjGameBase.Cfg.APIMockupGameSettings.extend((function() {
                this.globalMockupsOn = !1, this.params.bonusGameRequest = "PickBonusItemRequest", this.params.scatterSymbols = ["12"], this.params.jokerSymbols = ["0"], this.params.jackpotsEnabled = !1, this.params.freespinsForScatters = [0, 0, 10, 10, 10], this.params.lines = [
                    ["1", "1", "1", "1", "1"],
                    ["0", "0", "0", "0", "0"],
                    ["2", "2", "2", "2", "2"],
                    ["0", "1", "2", "1", "0"],
                    ["2", "1", "0", "1", "2"],
                    ["1", "2", "2", "2", "1"],
                    ["1", "0", "0", "0", "1"],
                    ["0", "0", "1", "2", "2"],
                    ["2", "2", "1", "0", "0"],
                    ["3", "3", "3", "3", "3"]
                ], this.params.payouts = [{
                    payout: "10",
                    symbols: ["0", "0"]
                }, {
                    payout: "50",
                    symbols: ["0", "0", "0"]
                }, {
                    payout: "100",
                    symbols: ["0", "0", "0", "0"]
                }, {
                    payout: "300",
                    symbols: ["0", "0", "0", "0", "0"]
                }, {
                    payout: "50",
                    symbols: ["1", "1", "1"]
                }, {
                    payout: "100",
                    symbols: ["1", "1", "1", "1"]
                }, {
                    payout: "150",
                    symbols: ["1", "1", "1", "1", "1"]
                }, {
                    payout: "10",
                    symbols: ["2", "2"]
                }, {
                    payout: "50",
                    symbols: ["2", "2", "2"]
                }, {
                    payout: "100",
                    symbols: ["2", "2", "2", "2"]
                }, {
                    payout: "150",
                    symbols: ["2", "2", "2", "2", "2"]
                }, {
                    payout: "20",
                    symbols: ["3", "3", "3"]
                }, {
                    payout: "80",
                    symbols: ["3", "3", "3", "3"]
                }, {
                    payout: "120",
                    symbols: ["3", "3", "3", "3", "3"]
                }, {
                    payout: "20",
                    symbols: ["4", "4", "4"]
                }, {
                    payout: "80",
                    symbols: ["4", "4", "4", "4"]
                }, {
                    payout: "120",
                    symbols: ["4", "4", "4", "4", "4"]
                }, {
                    payout: "10",
                    symbols: ["5", "5", "5"]
                }, {
                    payout: "50",
                    symbols: ["5", "5", "5", "5"]
                }, {
                    payout: "100",
                    symbols: ["5", "5", "5", "5", "5"]
                }, {
                    payout: "10",
                    symbols: ["6", "6", "6"]
                }, {
                    payout: "50",
                    symbols: ["6", "6", "6", "6"]
                }, {
                    payout: "100",
                    symbols: ["6", "6", "6", "6", "6"]
                }, {
                    payout: "5",
                    symbols: ["7", "7", "7"]
                }, {
                    payout: "20",
                    symbols: ["7", "7", "7", "7"]
                }, {
                    payout: "100",
                    symbols: ["7", "7", "7", "7", "7"]
                }, {
                    payout: "5",
                    symbols: ["8", "8", "8"]
                }, {
                    payout: "20",
                    symbols: ["8", "8", "8", "8"]
                }, {
                    payout: "100",
                    symbols: ["8", "8", "8", "8", "8"]
                }, {
                    payout: "2",
                    symbols: ["9", "9"]
                }, {
                    payout: "5",
                    symbols: ["9", "9", "9"]
                }, {
                    payout: "10",
                    symbols: ["9", "9", "9", "9"]
                }, {
                    payout: "100",
                    symbols: ["9", "9", "9", "9", "9"]
                }, {
                    payout: "2",
                    symbols: ["10", "10"]
                }, {
                    payout: "5",
                    symbols: ["10", "10", "10"]
                }, {
                    payout: "10",
                    symbols: ["10", "10", "10", "10"]
                }, {
                    payout: "100",
                    symbols: ["10", "10", "10", "10", "10"]
                }, {
                    payout: "5",
                    symbols: ["11", "11", "11"]
                }, {
                    payout: "10",
                    symbols: ["11", "11", "11", "11"]
                }, {
                    payout: "100",
                    symbols: ["11", "11", "11", "11", "11"]
                }, {
                    payout: "2",
                    symbols: ["12", "12", "12"]
                }, {
                    payout: "10",
                    symbols: ["12", "12", "12", "12"]
                }, {
                    payout: "20",
                    symbols: ["12", "12", "12", "12", "12"]
                }], this.params.spinSymbols = [
                    [
                        ["6", "0", "0", "5", "1"],
                        ["6", "0", "0", "0", "3"],
                        ["12", "12", "12", "6", "6"],
                        ["6", "0", "1", "1", "1"]
                    ],
                    [
                        ["1", "1", "12", "1", "4"],
                        ["4", "4", "4", "4", "12"],
                        ["1", "1", "9", "12", "9"],
                        ["1", "4", "5", "0", "4"]
                    ],
                    [
                        ["1", "1", "12", "12", "4"],
                        ["4", "4", "4", "4", "12"],
                        ["1", "1", "9", "1", "9"],
                        ["1", "4", "5", "0", "4"]
                    ],
                    [
                        ["4", "4", "12", "1", "4"],
                        ["4", "4", "4", "4", "1"],
                        ["1", "12", "9", "1", "9"],
                        ["1", "4", "5", "0", "4"]
                    ],
                    [
                        ["4", "4", "1", "1", "4"],
                        ["4", "4", "4", "4", "1"],
                        ["1", "12", "9", "12", "9"],
                        ["1", "4", "5", "0", "4"]
                    ],
                    [
                        ["4", "4", "1", "1", "4"],
                        ["4", "4", "4", "4", "1"],
                        ["1", "12", "9", "12", "12"],
                        ["1", "4", "5", "0", "4"]
                    ],
                    [
                        ["10", "10", "1", "2", "12"],
                        ["10", "10", "10", "10", "10"],
                        ["10", "6", "7", "6", "6"],
                        ["10", "10", "0", "2", "2"]
                    ],
                    [
                        ["6", "4", "2", "5", "1"],
                        ["6", "6", "6", "6", "3"],
                        ["12", "6", "1", "6", "6"],
                        ["6", "9", "1", "2", "2"]
                    ],
                    [
                        ["6", "0", "0", "5", "1"],
                        ["6", "0", "0", "0", "3"],
                        ["12", "6", "12", "6", "6"],
                        ["6", "0", "1", "2", "2"]
                    ],
                    [
                        ["4", "4", "0", "4", "4"],
                        ["10", "0", "0", "4", "2"],
                        ["12", "9", "9", "9", "9"],
                        ["11", "0", "0", "0", "4"]
                    ],
                    [
                        ["5", "5", "5", "3", "3"],
                        ["1", "3", "3", "6", "2"],
                        ["6", "6", "3", "3", "3"],
                        ["1", "3", "3", "6", "2"]
                    ],
                    [
                        ["5", "5", "5", "5", "12"],
                        ["8", "8", "12", "8", "8"],
                        ["12", "6", "7", "6", "6"],
                        ["4", "0", "0", "2", "2"]
                    ]
                ], this.params.freespinSymbols = [
                    [
                        ["6", "0", "0", "5", "1"],
                        ["6", "0", "0", "0", "3"],
                        ["12", "1", "1", "6", "6"],
                        ["6", "0", "5", "5", "6"]
                    ],
                    [
                        ["1", "12", "10", "4", "12"],
                        ["4", "4", "1", "6", "1"],
                        ["8", "6", "9", "6", "1"],
                        ["8", "6", "9", "6", "1"]
                    ],
                    [
                        ["1", "6", "4", "4", "1"],
                        ["4", "4", "1", "6", "1"],
                        ["8", "6", "1", "6", "1"],
                        ["4", "4", "1", "6", "1"]
                    ],
                    [
                        ["6", "6", "3", "4", "1"],
                        ["4", "3", "1", "6", "1"],
                        ["3", "6", "9", "6", "1"],
                        ["6", "6", "3", "4", "1"]
                    ],
                    [
                        ["1", "1", "3", "4", "1"],
                        ["4", "8", "8", "8", "1"],
                        ["7", "6", "9", "6", "10"],
                        ["6", "6", "3", "7", "10"]
                    ],
                    [
                        ["10", "2", "2", "4", "8"],
                        ["7", "3", "4", "6", "8"],
                        ["3", "6", "4", "8", "8"],
                        ["6", "5", "3", "4", "1"]
                    ],
                    [
                        ["3", "3", "3", "4", "1"],
                        ["4", "5", "1", "6", "1"],
                        ["3", "6", "9", "6", "1"],
                        ["6", "6", "3", "4", "1"]
                    ],
                    [
                        ["2", "5", "3", "4", "1"],
                        ["0", "0", "1", "7", "2"],
                        ["3", "5", "0", "7", "3"],
                        ["6", "5", "3", "4", "4"]
                    ],
                    [
                        ["9", "9", "3", "4", "4"],
                        ["4", "9", "1", "6", "5"],
                        ["3", "9", "9", "6", "4"],
                        ["9", "6", "3", "4", "6"]
                    ],
                    [
                        ["6", "6", "3", "4", "1"],
                        ["4", "3", "1", "6", "1"],
                        ["7", "7", "7", "7", "1"],
                        ["8", "8", "8", "8", "1"]
                    ],
                    [
                        ["11", "6", "3", "4", "1"],
                        ["11", "11", "11", "6", "1"],
                        ["3", "6", "9", "6", "2"],
                        ["7", "0", "0", "4", "1"]
                    ],
                    [
                        ["5", "5", "8", "4", "12"],
                        ["6", "3", "12", "6", "1"],
                        ["3", "6", "9", "6", "1"],
                        ["1", "6", "4", "4", "1"]
                    ],
                    [
                        ["6", "6", "3", "4", "4"],
                        ["4", "0", "1", "3", "8"],
                        ["3", "6", "9", "6", "8"],
                        ["6", "11", "3", "4", "1"]
                    ],
                    [
                        ["6", "7", "3", "4", "1"],
                        ["4", "3", "1", "6", "4"],
                        ["3", "6", "4", "6", "1"],
                        ["6", "9", "3", "4", "10"]
                    ],
                    [
                        ["6", "0", "3", "4", "10"],
                        ["4", "3", "0", "0", "11"],
                        ["3", "6", "9", "6", "7"],
                        ["8", "8", "3", "4", "1"]
                    ],
                    [
                        ["7", "7", "3", "4", "1"],
                        ["4", "4", "1", "12", "1"],
                        ["3", "5", "10", "6", "1"],
                        ["6", "12", "3", "4", "1"]
                    ],
                    [
                        ["5", "6", "3", "4", "10"],
                        ["3", "4", "2", "7", "10"],
                        ["2", "6", "9", "7", "10"],
                        ["5", "5", "3", "4", "1"]
                    ],
                    [
                        ["6", "0", "3", "4", "11"],
                        ["5", "0", "1", "6", "1"],
                        ["3", "0", "9", "9", "12"],
                        ["6", "8", "3", "4", "1"]
                    ],
                    [
                        ["6", "5", "5", "4", "7"],
                        ["5", "0", "1", "6", "7"],
                        ["3", "2", "9", "5", "1"],
                        ["6", "3", "3", "4", "7"]
                    ],
                    [
                        ["9", "9", "3", "4", "2"],
                        ["4", "3", "1", "6", "2"],
                        ["3", "5", "9", "0", "1"],
                        ["5", "5", "3", "4", "3"]
                    ],
                    [
                        ["9", "8", "3", "4", "2"],
                        ["4", "8", "1", "3", "2"],
                        ["3", "8", "5", "2", "2"],
                        ["6", "6", "3", "4", "1"]
                    ],
                    [
                        ["1", "2", "3", "4", "5"],
                        ["6", "7", "8", "9", "10"],
                        ["11", "12", "0", "6", "1"],
                        ["2", "2", "0", "4", "1"]
                    ],
                    [
                        ["1", "2", "3", "4", "5"],
                        ["6", "7", "8", "9", "10"],
                        ["11", "12", "0", "6", "1"],
                        ["2", "2", "0", "4", "1"]
                    ],
                    [
                        ["1", "2", "3", "4", "5"],
                        ["6", "7", "8", "9", "10"],
                        ["11", "12", "0", "6", "1"],
                        ["2", "2", "0", "4", "1"]
                    ],
                    [
                        ["1", "2", "3", "4", "5"],
                        ["6", "7", "8", "9", "10"],
                        ["11", "12", "0", "6", "1"],
                        ["2", "2", "0", "4", "1"]
                    ]
                ], this.params.wheel1Sectors = [{
                    index: 0,
                    type: "freespins",
                    value: 12,
                    subType: "",
                    valueX4: 25,
                    valueX5: 40
                }, {
                    index: 1,
                    type: "jackpot",
                    value: "mini",
                    subType: "bonusWheel"
                }, {
                    index: 2,
                    type: "freespins",
                    value: 15,
                    subType: "",
                    valueX4: 30,
                    valueX5: 50
                }, {
                    index: 3,
                    type: "jackpot",
                    value: "major",
                    subType: ""
                }, {
                    index: 4,
                    type: "freespins",
                    value: 10,
                    subType: "",
                    valueX4: 20,
                    valueX5: 30
                }, {
                    index: 5,
                    type: "jackpot",
                    value: "minor",
                    subType: "bonusWheel"
                }, {
                    index: 6,
                    type: "freespins",
                    value: 8,
                    subType: "",
                    valueX4: 15,
                    valueX5: 20
                }, {
                    index: 7,
                    type: "jackpot",
                    value: "super",
                    subType: "bonusWheel"
                }, {
                    index: 8,
                    type: "freespins",
                    value: 12,
                    subType: "",
                    valueX4: 25,
                    valueX5: 40
                }, {
                    index: 9,
                    type: "jackpot",
                    value: "mini",
                    subType: ""
                }, {
                    index: 10,
                    type: "freespins",
                    value: 15,
                    subType: "",
                    valueX4: 30,
                    valueX5: 50
                }, {
                    index: 11,
                    type: "jackpot",
                    value: "major",
                    subType: "bonusWheel"
                }, {
                    index: 12,
                    type: "freespins",
                    value: 10,
                    subType: "",
                    valueX4: 20,
                    valueX5: 30
                }, {
                    index: 13,
                    type: "jackpot",
                    value: "minor",
                    subType: ""
                }, {
                    index: 14,
                    type: "freespins",
                    value: 8,
                    subType: "",
                    valueX4: 15,
                    valueX5: 20
                }, {
                    index: 15,
                    type: "jackpot",
                    value: "super",
                    subType: ""
                }], this.params.jackpotsBetMult = {
                    mini: 50,
                    minor: 250,
                    major: 500,
                    super: 2e3
                }, this.params.wheel2Sectors = [{
                    index: 0,
                    type: "mult",
                    value: 3
                }, {
                    index: 1,
                    type: "mult",
                    value: 6
                }, {
                    index: 2,
                    type: "mult",
                    value: 2
                }, {
                    index: 3,
                    type: "mult",
                    value: 7
                }, {
                    index: 4,
                    type: "mult",
                    value: 5
                }, {
                    index: 5,
                    type: "mult",
                    value: 2
                }, {
                    index: 6,
                    type: "mult",
                    value: 4
                }, {
                    index: 7,
                    type: "mult",
                    value: 10
                }, {
                    index: 8,
                    type: "mult",
                    value: 3
                }, {
                    index: 9,
                    type: "mult",
                    value: 6
                }, {
                    index: 10,
                    type: "mult",
                    value: 2
                }, {
                    index: 11,
                    type: "mult",
                    value: 7
                }, {
                    index: 12,
                    type: "mult",
                    value: 5
                }, {
                    index: 13,
                    type: "mult",
                    value: 2
                }, {
                    index: 14,
                    type: "mult",
                    value: 4
                }, {
                    index: 15,
                    type: "mult",
                    value: 10
                }], this.params.bonusWheel1Results = ["7", "1", "0", "1", "0"], this.params.bonusWheel2Results = ["1", "7", "2"], this.params.cheats = {
                    symbol0Line: this.generateWinlineCombo("0", 3, 5, 4),
                    symbol1Line: this.generateWinlineCombo("1", 3, 5, 4),
                    symbol2Line: this.generateWinlineCombo("2", 3, 5, 4),
                    symbol3Line: this.generateWinlineCombo("3", 3, 5, 4),
                    symbol4Line: this.generateWinlineCombo("4", 3, 5, 4),
                    symbol5Line: this.generateWinlineCombo("5", 3, 5, 4),
                    symbol6Line: this.generateWinlineCombo("6", 3, 5, 4),
                    symbol7Line: this.generateWinlineCombo("7", 3, 5, 4),
                    symbol8Line: this.generateWinlineCombo("8", 3, 5, 4),
                    symbol9Line: this.generateWinlineCombo("9", 3, 5, 4),
                    symbol10Line: this.generateWinlineCombo("10", 3, 5, 4),
                    symbol11Line: this.generateWinlineCombo("11", 3, 5, 4),
                    bigWin: this.generateWinlineCombo("0", 5, 5, 4)
                }
            }))
        },
        5: function(e, t, a) {
            a(1e3), a(1001), a(1002), a(1003), a(1004), a(1005), a(1006), a(1007), a(1008), a(1009), a(1010), a(1011), a(1012), a(1013), a(1014), a(1015), a(1016), a(1017), a(1018), a(1019), a(1020), a(1021), a(1022), a(1023), a(1024), a(1025), a(1026), a(1027), a(1028), a(1029), a(1030), a(1031), a(1032), a(1033), a(1034), a(1035), a(1036), a(1037), a(1038), a(1039), a(1040), a(1041), a(1042), a(1043), a(1044), a(1045), a(1046), a(1047), a(1048), a(1049), a(1050), a(1051), a(1052), a(1053), a(1054), a(1055), a(1056), a(1057), a(1058), a(1059), a(1060), a(1061), a(1062), a(1063), a(1064), a(1065), a(1066), a(1067), a(1068), a(1069), a(1070), a(1071), a(1072), a(1073), a(1074), a(1075), a(1076), a(1077), a(1078), a(1079), a(1080), a(1081), a(1082), a(1083), a(1084), a(1085), a(1086), a(1087), a(1088), a(1089), a(1090), a(1091), a(1092), a(1093), a(1094), a(1095), a(1096), a(1097), a(1098), a(1099), a(1100), a(1101), a(1102), a(1103), a(1104), a(1105), a(1106), a(1107), a(1108), a(1109), a(1110), a(1111), a(1112), a(1113), a(1114), a(1115), a(1116), a(1117), a(1118), a(1119), a(1120), a(1121), a(1122), a(1123), a(1124), a(1125), a(1126), a(1127), a(1128), a(1129), a(1130), a(1131), a(1132), a(1133), a(1134), a(1135), a(1136), a(1137), a(1138), a(1139), a(1140), a(1141), a(1142), a(1143)
        }
    }
]);