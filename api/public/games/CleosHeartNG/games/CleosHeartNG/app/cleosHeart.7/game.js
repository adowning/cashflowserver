var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.findInternal = function(e, t, a) {
    e instanceof String && (e = String(e));
    for (var n = e.length, s = 0; s < n; s++) {
        var l = e[s];
        if (t.call(a, l, s, e)) return {
            i: s,
            v: l
        }
    }
    return {
        i: -1,
        v: void 0
    }
}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, a) {
    e != Array.prototype && e != Object.prototype && (e[t] = a.value)
}, $jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(e, t, a, n) {
    if (t) {
        for (a = $jscomp.global, e = e.split("."), n = 0; n < e.length - 1; n++) {
            var s = e[n];
            s in a || (a[s] = {}), a = a[s]
        }(t = t(n = a[e = e[e.length - 1]])) != n && null != t && $jscomp.defineProperty(a, e, {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
}, $jscomp.polyfill("Array.prototype.find", (function(e) {
    return e || function(e, t) {
        return $jscomp.findInternal(this, e, t).v
    }
}), "es6", "es3"), (window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        1017: function(e, t) {
            nge.appNS = "CleosHeart", nge.App[nge.appNS] = {}
        },
        1018: function(e, t, a) {
            nge.realPathPrefix = "../../", nge.appPath = "app/cleosHeart.7/", nge.gameCode = "273", nge.loaderTpl = "netgame", nge.loadCfg = []
        },
        1019: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.RiverGameBase.Run.extend((function() {
                nge.App.addSysInstancesMode("UI_v3"), nge.App.addSysInstancesMode("Offers_v3"), nge.App.addSysInstancesMode("gold"), nge.App.addSysInstancesMode("slimJackpot"), nge.App.RiverGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.RiverGameBase, nge.App[nge.appNS]));
                var e = [1];
                nge.localData.set("ways", "576"), this.run = function() {
                    this.runDefault(), nge.localData.set("lines.cfg", e)
                }, this.statesExtentions = {
                    play: ["bgDecor", "bigWin", "leafAnimation", "screenParticleSystem"]
                }, this.applyClassicGameBasePsd(), this.applyClassicGameBaseInstanceMode(), this.applyClassicGameBase()
            })), nge.Cfg.Main.project = "cleosHeart", nge.Cfg.Main.title = "Cleo's Heart", nge.Cfg.Main.gameCode = "273", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.2"
        },
        1020: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        1021: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    big_win_counter: "game:sounds/big_win_counter",
                    big_win_end: "game:sounds/big_win_end",
                    big_win_text_change: "game:sounds/big_win_text_change",
                    bn_background_cust: "game:sounds/bn_background",
                    bn_bs_background: "game:sounds/bn_bs_background",
                    bs_background: "game:sounds/bs_background",
                    bs_wheel_spin_fast: "game:sounds/bs_wheel_spin_fast",
                    bs_bn_wheel: "game:sounds/bs_bn_spin",
                    bs_bn_wheel_stop_0: "game:sounds/bs_bn_wheel_stop_0",
                    bs_bn_wheel_stop_1: "game:sounds/bs_bn_wheel_stop_1",
                    bs_bn_wheel_stop_2: "game:sounds/bs_bn_wheel_stop_2",
                    bs_bn_wheel_stop_3: "game:sounds/bs_bn_wheel_stop_3",
                    bs_bn_wheel_stop_4: "game:sounds/bs_bn_wheel_stop_4",
                    bs_bn_scatter_0: "game:sounds/bs_bn_scatter_0",
                    bs_bn_scatter_1: "game:sounds/bs_bn_scatter_1",
                    bs_bn_scatter_2: "game:sounds/bs_bn_scatter_2",
                    fs_fg_xw_hide: "game:sounds/fs_fg_xw_hide",
                    fs_popup: "game:sounds/fs_popup",
                    xw_popup: "game:sounds/xw_popup",
                    silence: "game:sounds/silence",
                    spin_button_click: "game:sounds/spin_button_click",
                    sr_bell: "game:sounds/sr_bell",
                    sr_win_big: "game:sounds/sr_win_big",
                    sr_win_middle: "game:sounds/sr_win_middle",
                    sr_win_small: "game:sounds/sr_win_small",
                    sr_win_tiny: "game:sounds/sr_win_tiny",
                    denom_change: "game:sounds/denom_change",
                    gn_autoplay_on: "game:sounds/gn_autoplay_on",
                    gn_autoplay_off: "game:sounds/gn_autoplay_off",
                    gn_level: "game:sounds/gn_level",
                    gn_max_bet: "game:sounds/gn_max_bet",
                    gn_win_counter_stop: "game:sounds/gn_win_counter_stop",
                    gn_win_counter_take: "game:sounds/gn_win_counter_take",
                    gn_win_counter_end: "game:sounds/gn_win_counter_end",
                    gn_win_counter: "game:sounds/gn_win_counter",
                    rl_open: "game:sounds/rl_open",
                    rl_close: "game:sounds/rl_close",
                    jackpot_online_background: "game:sounds/jackpot_online_background",
                    jackpot_online_coincidence_1: "game:sounds/jackpot_online_coincidence_1",
                    jackpot_online_coincidence_2: "game:sounds/jackpot_online_coincidence_2",
                    jackpot_online_coincidence_3: "game:sounds/jackpot_online_coincidence_3",
                    jackpot_online_finish_jackpot_popup: "game:sounds/jackpot_online_finish_jackpot_popup",
                    jackpot_online_won_jackpot_movie: "game:sounds/jackpot_online_won_jackpot_movie"
                }
            }))
        },
        1022: function(e, t) {
            nge.App[nge.appNS].Com = {}
        },
        1023: function(e, t) {
            nge.App[nge.appNS].Com.Load = {}
        },
        1024: function(e, t) {
            nge.App[nge.appNS].Com.Load.Cfg = nge.App.RiverGameBase.Com.Load.Cfg.extend((function() {
                var e = nge.appPath + "img/fonts/";
                this.fonts.myriadprobold = nge.appPath + "css/fonts/myriadprobold", this.bitmapFonts.winlineFont = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "winlineFont.png",
                    bitmapFont: e + "winlineFont.fnt"
                }, this.bitmapFonts.bigWinFont = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "bigWinFont.png",
                    bitmapFont: e + "bigWinFont.fnt"
                }
            }))
        },
        1025: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets = {}
        },
        1026: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets.Controller = nge.App.RiverGameBase.Com.LoadAssets.Controller.extend((function() {
                this.preload = function() {
                    this.super.preload(), nge.wrap.cache.checkImageKey("startPopupPickemCover") || nge.wrap.load.image("startPopupPickemCover", nge.Lib.Helper.create1PxPng(0, 0, 0, 190, !0)), nge.wrap.cache.checkImageKey("bigWinPopupCover") || nge.wrap.load.image("bigWinPopupCover", nge.Lib.Helper.create1PxPng(0, 0, 0, 190, !0))
                }
            }))
        },
        1027: function(e, t) {
            nge.App[nge.appNS].Com.BgDecor = {}
        },
        1028: function(e, t) {
            nge.App[nge.appNS].Com.BgDecor.Controller = nge.Com.Base.extend((function() {
                var e, t, a = [],
                    n = [],
                    s = [],
                    l = [];
                this.create = function() {
                    this.createDefault(), t || this.subscribe(), a = [], s = [], n = [], l = [];
                    for (var i = 1; 8 > i; i++) a.push(nge.findOne("^leaf" + i));
                    for (i = 1; 7 > i; i++) l.push(nge.findOne("^bsReels" + i));
                    s.push(nge.findOne("^flagLeft")), s.push(nge.findOne("^flagRight")), n.push(nge.findOne("^gnFireLeft")), n.push(nge.findOne("^gnFireRight")), e = nge.findOne("^playareaBg"), nge.findOne("^bnFireContainer").visible = !1, nge.findOne("^bgAreaFreeSpins").visible = !1, n[0].x = 80, n[0].y = 632, n[1].x = 1719, n[1].y = 632, n[0].loadTexture("fire"), n[1].loadTexture("fire")
                };
                var i = function(t) {
                    for (var i = 0; i < a.length; i++) a[i].loadTexture((t ? "bnLeaf" : "leaf") + (i + 1));
                    for (i = 0; i < l.length; i++) l[i].loadTexture((t ? "bnReels" : "bsReels") + (i + 1));
                    n[0].loadTexture(t ? "fire_bonus" : "fire"), n[1].loadTexture(t ? "fire_bonus" : "fire"), n[0].x = t ? 81 : 80, n[1].x = t ? 1720 : 1719, s[0].loadTexture(t ? "bnFlagLeft" : "flagLeft"), s[1].loadTexture(t ? "bnFlagRight" : "flagRight"), e.loadTexture(t ? "bgAreaFreeSpins" : "playareaBg")
                };
                this.subscribe = function() {
                    t = !0, nge.observer.add("bgDecore.changeTexture", i)
                }
            }))
        },
        1029: function(e, t) {
            nge.App[nge.appNS].Com.BgDecor.Tpl = function() {
                var e = [];
                return e.push({
                    type: mt.assets.IMAGE,
                    key: "fire_bonus",
                    fullPath: nge.appPath + "img/playarea/fire_bonus.png"
                }), e.push({
                    type: mt.assets.IMAGE,
                    key: "fire",
                    fullPath: nge.appPath + "img/playarea/fire.png"
                }), {
                    assets: {
                        name: "assets",
                        contents: e
                    },
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1030: function(e, t) {
            nge.App[nge.appNS].Com.BigWin = {}
        },
        1031: function(e, t) {
            nge.App[nge.appNS].Com.BigWin.Cfg = nge.App.RiverGameBase.Com.BigWin.Cfg.extend((function() {
                this.params.shadowPopupCover = !0, this.params.lightsVisible = !1, this.params.backgroundStarScale = 2.25, this.params.thresholds = {
                    big: 10,
                    mega: 20,
                    super: 50,
                    ultra: 100
                }
            }))
        },
        1032: function(e, t) {
            nge.App[nge.appNS].Com.BigWin.Controller = nge.App.RiverGameBase.Com.BigWin.Controller.extend((function() {
                var e, t = this;
                this.create = function() {
                    this.super.create(), e = nge.assets.getQualityFactor()
                }, this.setAmount = function(e) {
                    t.bigWinAmount.text = e, t.bigWinAmount.updateTransform(), t.changeWinAmountFieldSize(), nge.observer.fire("bigWin.amount", e), nge.observer.fire("cleosHeart.printWin", e)
                }, this.changeWinAmountFieldSize = function() {
                    t.bigWinCounterLeft.x = -(400 > t.bigWinAmount.width ? 330 : t.bigWinAmount.width / 2 + 150), t.bigWinCounterRight.x = 400 > t.bigWinAmount.width ? 330 : t.bigWinAmount.width / 2 + 150, t.bigWinCounterCenter.scale.x = (400 > t.bigWinAmount.width ? 100 : t.bigWinAmount.width / 3.25) / e
                }
            }))
        },
        1033: function(e, t) {
            nge.App[nge.appNS].Com.BigWin.Tpl = function() {
                var e = nge.appPath + "img/";
                (e = [{
                    type: mt.assets.IMAGE,
                    key: "big_win_conter_frame_bottom",
                    fullPath: e + "bigWin/big_win_conter_frame_bottom.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_conter_frame_top",
                    fullPath: e + "bigWin/big_win_conter_frame_top.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_conter_frame_central",
                    fullPath: e + "bigWin/big_win_conter_frame_stretch.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_conter_frame_left",
                    fullPath: e + "bigWin/big_win_conter_frame_left.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_conter_frame_right",
                    fullPath: e + "bigWin/big_win_conter_frame_right.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_lbl_big",
                    fullPath: e + "bigWin/big_win_lbl_big.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_lbl_big_lights",
                    fullPath: e + "bigWin/big_win_lbl_big_lights.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_lbl_mega",
                    fullPath: e + "bigWin/big_win_lbl_mega.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_lbl_mega_lights",
                    fullPath: e + "bigWin/big_win_lbl_mega_lights.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_lbl_super",
                    fullPath: e + "bigWin/big_win_lbl_super.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_lbl_super_lights",
                    fullPath: e + "bigWin/big_win_lbl_super_lights.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_lbl_ultra",
                    fullPath: e + "bigWin/big_win_lbl_ultra.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_lbl_ultra_lights",
                    fullPath: e + "bigWin/big_win_lbl_ultra_lights.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_particle_texture_star_00",
                    fullPath: e + "bigWin/big_win_particle_texture_star_00.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_particle_texture_star_01",
                    fullPath: e + "bigWin/big_win_particle_texture_star_01.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_particle_texture_star_02",
                    fullPath: e + "bigWin/big_win_particle_texture_star_02.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "big_win_star",
                    fullPath: e + "bigWin/big_win_star.png"
                }]).push({
                    type: mt.assets.JSON,
                    key: "splash",
                    fullPath: nge.appPath + "img/playarea/splash.json"
                }), e.push({
                    type: mt.assets.JSON,
                    key: "splash_stars",
                    fullPath: nge.appPath + "img/playarea/splash_stars.json"
                }), e.push({
                    type: mt.assets.JSON,
                    key: "coins_loop",
                    fullPath: nge.appPath + "img/playarea/coins_loop.json"
                }), e.push({
                    type: mt.assets.JSON,
                    key: "stars_loop",
                    fullPath: nge.appPath + "img/playarea/stars_loop.json"
                });
                for (var t = 0; 16 > t; t++) {
                    var a = nge.Lib.Helper.LdgZero(t, 3);
                    e.push({
                        type: mt.assets.IMAGE,
                        key: "coin_" + a,
                        fullPath: nge.appPath + "img/playarea/coin_" + a + ".png"
                    })
                }
                return {
                    styles: {},
                    assets: {
                        name: "assets",
                        contents: e
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            x: 0,
                            y: 0,
                            name: "bigWinInnerContainer",
                            isVisible: !0,
                            contents: [{
                                type: 1,
                                x: 960,
                                y: 440,
                                name: "bigWinGameContainer",
                                isVisible: !0,
                                contents: [{
                                    type: 1,
                                    name: "bigWinScalableContainer",
                                    contents: [{
                                        type: 1,
                                        y: 240,
                                        name: "bigWinCounterContainer",
                                        contents: [{
                                            type: 7,
                                            name: "bigWinAmount",
                                            y: 38,
                                            anchorX: .5,
                                            anchorY: .5,
                                            text: "0",
                                            assetKey: "bigWinFont",
                                            size: 150
                                        }, {
                                            type: 0,
                                            x: 0,
                                            y: 0,
                                            name: "bigWinCounterBottom",
                                            assetKey: "big_win_conter_frame_bottom",
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: 0,
                                            x: 0,
                                            y: 0,
                                            name: "bigWinCounterTop",
                                            assetKey: "big_win_conter_frame_top",
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: 0,
                                            x: -400,
                                            name: "bigWinCounterLeft",
                                            assetKey: "big_win_conter_frame_left",
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: 0,
                                            x: 400,
                                            name: "bigWinCounterRight",
                                            assetKey: "big_win_conter_frame_right",
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: 0,
                                            name: "bigWinCounterCenter",
                                            assetKey: "big_win_conter_frame_central",
                                            scaleX: 100,
                                            anchorX: .5,
                                            anchorY: .5
                                        }]
                                    }, {
                                        type: 0,
                                        name: "bigWinLights3",
                                        assetKey: "big_win_lbl_ultra_lights",
                                        anchorX: .5,
                                        anchorY: .5,
                                        scaleX: 0,
                                        scaleY: 0,
                                        isVisible: !1
                                    }, {
                                        type: 0,
                                        name: "bigWin3",
                                        assetKey: "big_win_lbl_ultra",
                                        anchorX: .5,
                                        anchorY: .5,
                                        isVisible: !1
                                    }, {
                                        type: 0,
                                        name: "bigWinLights2",
                                        assetKey: "big_win_lbl_mega_lights",
                                        anchorX: .5,
                                        anchorY: .5,
                                        isVisible: !1
                                    }, {
                                        type: 0,
                                        name: "bigWin2",
                                        assetKey: "big_win_lbl_mega",
                                        anchorX: .5,
                                        anchorY: .5,
                                        scaleX: 0,
                                        scaleY: 0,
                                        isVisible: !1
                                    }, {
                                        type: 0,
                                        name: "bigWinLights1",
                                        assetKey: "big_win_lbl_super_lights",
                                        anchorX: .5,
                                        anchorY: .5,
                                        isVisible: !1
                                    }, {
                                        type: 0,
                                        name: "bigWin1",
                                        assetKey: "big_win_lbl_super",
                                        anchorX: .5,
                                        anchorY: .5,
                                        isVisible: !1
                                    }, {
                                        type: 0,
                                        name: "bigWinLights0",
                                        assetKey: "big_win_lbl_big_lights",
                                        anchorX: .5,
                                        anchorY: .5,
                                        isVisible: !1
                                    }, {
                                        type: 0,
                                        name: "bigWin0",
                                        assetKey: "big_win_lbl_big",
                                        anchorX: .5,
                                        anchorY: .5,
                                        scaleX: 0,
                                        scaleY: 0,
                                        isVisible: !1
                                    }]
                                }, {
                                    type: 1,
                                    name: "bigWinScalableStarsContainer",
                                    contents: [{
                                        type: 0,
                                        name: "bigWinStar1",
                                        assetKey: "big_win_star",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 650,
                                        y: -100,
                                        scaleX: 1,
                                        scaleY: 1
                                    }, {
                                        type: 0,
                                        name: "bigWinStar1",
                                        assetKey: "big_win_star",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 465,
                                        y: 180,
                                        scaleX: .75,
                                        scaleY: .75
                                    }, {
                                        type: 0,
                                        name: "bigWinStar1",
                                        assetKey: "big_win_star",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 350,
                                        y: 220,
                                        scaleX: 1,
                                        scaleY: 1
                                    }, {
                                        type: 0,
                                        name: "bigWinStar1",
                                        assetKey: "big_win_star",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: -450,
                                        y: 220,
                                        scaleX: 1,
                                        scaleY: 1
                                    }, {
                                        type: 0,
                                        name: "bigWinStar1",
                                        assetKey: "big_win_star",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: -330,
                                        y: -90,
                                        scaleX: 1,
                                        scaleY: 1
                                    }, {
                                        type: 0,
                                        name: "bigWinStar1",
                                        assetKey: "big_win_star",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: -550,
                                        y: -90,
                                        scaleX: .9,
                                        scaleY: .9
                                    }, {
                                        type: 0,
                                        name: "bigWinStar1",
                                        assetKey: "big_win_star",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: -475,
                                        y: -180,
                                        scaleX: .75,
                                        scaleY: .75
                                    }]
                                }, {
                                    type: 1,
                                    name: "bigWinEmitterContainer",
                                    contents: []
                                }, {
                                    type: 0,
                                    name: "bigWinBackground",
                                    assetKey: "bigWinBackground",
                                    anchorX: .5,
                                    anchorY: .5,
                                    alpha: .85
                                }]
                            }, {
                                type: 0,
                                name: "bigWinPopupCover",
                                assetKey: "bigWinBackground",
                                x: 960,
                                y: 440,
                                anchorX: .5,
                                anchorY: .5,
                                alpha: "1"
                            }]
                        }]
                    }
                }
            }
        },
        1034: function(e, t) {
            nge.App[nge.appNS].Com.Freespin = {}
        },
        1035: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Controller = nge.App.RiverGameBase.Com.Freespin.Controller.extend((function() {
                var e, t, a, n, s, l, i, r, p, o, y, g, m, c, u, b, f, h = null;
                this.create = function() {
                    this.super.create(), f = this, l = nge.findOne("^freespinPopupContainer"), e = nge.findOne("^startPopupContainer"), a = nge.findOne("^restartPopUpContainer"), t = nge.findOne("^finalPopupContainer"), (n = nge.findOne("^popUpCover")).loadTexture("startPopupPickemCover"), r = nge.findOne("^fPWin"), o = nge.findOne("^rPWin"), p = nge.findOne("^sPWin"), y = nge.findOne("^sPCombinations"), g = nge.findOne("^rPCombinations"), nge.findOne("^freespinPopupParticles").add(l), l.scale.set(0), l.visible = !1, e.visible = !1, a.visible = !1, t.visible = !1, n.visible = !1, e.x = 960, e.y = 540, a.x = 960, a.y = 540, t.x = 960, t.y = 540, s = nge.find("^freespinPopupStar");
                    for (var m = 0; m < s.length; m++) {
                        var c = nge.Lib.Random.generate_range(0, 360);
                        s[m].angleScale = c
                    }
                    m = nge.find("^freespinEmitterContainer"), c = {
                        config: "freespinSplashEmitter",
                        animated: !1,
                        count: 3,
                        prefix: "big_win_particle_texture_star_",
                        blendMode: 0,
                        ldgZero: 2
                    };
                    var u = nge.objects.create(new nge.Mlm.Objects.Emitter({
                        type: mt.objects.EMITTER,
                        name: c.config,
                        particles: _(c),
                        assetKey: c.config,
                        animated: c.animated
                    }));
                    m.add(u), u.x = 0, u.y = 0, u.blendMode = c.blendMode, u.emitter.emit = !1, i = u.emitter
                };
                var _ = function(e) {
                    var t, a = [];
                    if (e.animated)
                        for (var n = 0; n < e.variants; n++) {
                            var s = [],
                                l = nge.Lib.Helper.getRandomInt(0, e.count);
                            for (t = 0; t < e.count; t++) {
                                l = l >= e.count ? 0 : l;
                                var i = nge.Lib.Helper.LdgZero(l, e.ldgZero);
                                s.push(e.prefix + i), l++
                            }
                            a.push({
                                framerate: e.framerate,
                                loop: !0,
                                textures: s
                            })
                        } else
                            for (t = 0; t < e.count; t++) i = nge.Lib.Helper.LdgZero(t, e.ldgZero), a.push(e.prefix + i);
                    return a
                };
                this.animatePopup = function(b, _) {
                    h = null, nge.localData.set("autospin", !1), nge.localData.set("spaceHandler.isEnable", !1);
                    var d = b.text,
                        T = b.duration;
                    _ = _ || function() {}, c = b.freespinState, "finish" === b.freespinState ? (nge.observer.fire("bgDecore.changeTexture", !1), r.text = d, m = t, nge.observer.fire("xw_popup")) : ("start" === b.freespinState ? (nge.observer.fire("bgDecore.changeTexture", !0), p.text = d, y.text = +d / 8, m = e) : (o.text = d, g.text = +d / 8, m = a), nge.observer.fire("fs_popup")), nge.observer.fire("buttons.disable.all"), nge.observer.fire("freespin.popup.open"), x(m, n, l, !0, (function() {
                        l.visible = !0, l.scale.set(.6), nge.tween.add(l.scale).to({
                            x: 1.2,
                            y: 1.2
                        }, 800, nge.Lib.Tween.Easing.Linear.None, !1).start(), (u = nge.tween.add({
                            angle: 0
                        }).to({
                            angle: 360
                        }, 1e4, nge.Lib.Tween.Easing.Linear.None, !0, 0, -1)).onUpdateCallback((function(e) {
                            for (var t = 0; t < s.length; t++) s[t].angle = e.target.angle - s[t].angleScale
                        })), u.start(), i.emit = !0, nge.rafSetTimeout((function() {
                            var e = function() {
                                e = function() {}, nge.observer.fire("cleosHeart.freespin.finishPressed"), nge.localData.set("slotMachineTrySpinWaiting", !1), nge.observer.fire("fairyButton.disable"), "finish" !== b.freespinState ? nge.observer.fire("buttons.doSpinPress") : (h = function() {
                                    h = null, _()
                                }, f.closePopup())
                            };
                            nge.localData.set("slotMachineTrySpinWaiting", e), nge.observer.fire("fairyButton.enableAndSetCallback", e), nge.observer.fire("cleosHeart.freespin.buttons.waitForFinish"), "finish" !== b.freespinState && _()
                        }), T)
                    }))
                }, this.closePopup = function() {
                    m && m.visible && (nge.observer.fire("fs_fg_xw_hide"), x(m, n, l, !1, (function() {
                        nge.observer.fire("fairyButton.disable"), nge.observer.fire("freespin.popupFinishClose"), u.stop(), l.visible = !1, "start" === c ? nge.observer.fire("freespin.playbg") : "inside" === c ? nge.observer.fire("freespin.close.inside") : "finish" === c && nge.observer.fire("freespin.close.finish"), nge.localData.set("spaceHandler.isEnable", !0), nge.rafSetTimeout((function() {
                            h && h()
                        }), 300)
                    }))), "start" === c && nge.observer.fire("slotMachine.spinCommand")
                }, this.startText = function(e) {
                    return e
                }, this.inProgressText = function(e) {
                    return e
                }, this.finishText = function() {
                    return parseFloat(nge.localData.get("freespin.totalWinCoins").toFixed(2))
                };
                var x = function(e, t, a, n, s, l) {
                        if (n) {
                            e.visible = !0, t.visible = !0, e.alpha = 0, t.alpha = 0, e.scale.x = .5, e.scale.y = .5;
                            var i = nge.tween.add(e).to({
                                alpha: 1
                            }, 200, nge.Lib.Tween.Easing.Linear.None, !1);
                            i.onUpdateCallback((function(n, s, l) {
                                t.alpha = e.alpha / 2, e.scale.set(.35 + .85 * l.percent), a.scale.set(l.percent)
                            })), i.onComplete.add((function() {
                                e.alpha = 1, t.alpha = .5, s && s(), (i = nge.tween.add(e).to({
                                    scaleX: 1,
                                    scaleY: 1
                                }, 100, nge.Lib.Tween.Easing.Linear.None, !1)).onComplete.add((function() {
                                    l && l()
                                })), i.start()
                            }))
                        } else(i = nge.tween.add(e).to({
                            scaleX: 1.2,
                            scaleY: 1.2
                        }, 100, nge.Lib.Tween.Easing.Linear.None, !1)).onUpdateCallback((function(e, t, n) {
                            a.scale.set(1 - n.percent)
                        })), i.onComplete.add((function() {
                            (i = nge.tween.add(e).to({
                                alpha: 0
                            }, 200, nge.Lib.Tween.Easing.Linear.None, !1)).onUpdateCallback((function(a, n, s) {
                                t.alpha = e.alpha / 2, e.scale.x = 1.2 - .85 * s.percent, e.scale.y = 1.2 - .85 * s.percent
                            })), i.onComplete.add((function() {
                                e.visible = !1, t.visible = !1, e.alpha = 0, t.alpha = 0, e.scale.x = .35, e.scale.y = .35, s && s()
                            })), i.start()
                        }));
                        i.start()
                    },
                    d = function() {
                        u && u.stop()
                    },
                    T = function() {
                        nge.observer.fire("bgDecore.changeTexture", !0), nge.observer.fire("freespin.playbg"), b = !0
                    };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("freespin.press.spinButton", (function() {
                        b && (nge.observer.fire("slotMachine.spinCommand"), b = !1)
                    })), nge.observer.add("freespin.restore", T), nge.observer.add("Transport.close", d), nge.observer.add("freespinTest", (function() {
                        x(m = e, n, l, !0, (function() {
                            l.scale.set(.6), nge.tween.add(l.scale).to({
                                x: 1.2,
                                y: 1.2
                            }, 800, nge.Lib.Tween.Easing.Linear.None, !1).start(), i.emit = !0
                        }))
                    }))
                }
            }))
        },
        1036: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Tpl = function() {
                return {
                    styles: {},
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.JSON,
                            key: "freespinSplashEmitter",
                            fullPath: nge.appPath + "img/playarea/freespinSplashEmitter.json"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            x: 0,
                            y: 0,
                            name: "freespinPopupContainer",
                            isVisible: !0,
                            contents: [{
                                type: 0,
                                name: "freespinPopupStar",
                                assetKey: "big_win_star",
                                anchorX: .5,
                                anchorY: .5,
                                x: 500,
                                y: -220,
                                scaleX: 1.2,
                                scaleY: 1.2
                            }, {
                                type: 0,
                                name: "freespinPopupStar",
                                assetKey: "big_win_star",
                                anchorX: .5,
                                anchorY: .5,
                                x: 350,
                                y: -250,
                                scaleX: 1,
                                scaleY: 1
                            }, {
                                type: 0,
                                name: "freespinPopupStar",
                                assetKey: "big_win_star",
                                anchorX: .5,
                                anchorY: .5,
                                x: 480,
                                y: 80,
                                scaleX: 1,
                                scaleY: 1
                            }, {
                                type: 0,
                                name: "freespinPopupStar",
                                assetKey: "big_win_star",
                                anchorX: .5,
                                anchorY: .5,
                                x: -430,
                                y: -280,
                                scaleX: .9,
                                scaleY: .9
                            }, {
                                type: 0,
                                name: "freespinPopupStar",
                                assetKey: "big_win_star",
                                anchorX: .5,
                                anchorY: .5,
                                x: -500,
                                y: -190,
                                scaleX: 1.2,
                                scaleY: 1.2
                            }, {
                                type: 0,
                                name: "freespinPopupStar",
                                assetKey: "big_win_star",
                                anchorX: .5,
                                anchorY: .5,
                                x: -550,
                                y: -100,
                                scaleX: 1,
                                scaleY: 1
                            }, {
                                type: 0,
                                name: "freespinPopupStar",
                                assetKey: "big_win_star",
                                anchorX: .5,
                                anchorY: .5,
                                x: -420,
                                y: -60,
                                scaleX: .9,
                                scaleY: .9
                            }, {
                                type: 1,
                                name: "freespinEmitterContainer",
                                contents: []
                            }]
                        }]
                    }
                }
            }
        },
        1037: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel = {}
        },
        1038: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel.View = nge.App.ClassicGameBase.Com.JackpotStatusPanel.View.extend((function() {
                var e;
                this.init = function() {
                    this.super.init(), (e = nge.findOne("^sideLogo")).visible = !1
                }, this.switchJackpotStatusPanelVisibility = function(t) {
                    this.super.switchJackpotStatusPanelVisibility(t), e.visible = "true" === t
                }
            }))
        },
        1039: function(e, t) {
            nge.App[nge.appNS].Com.LeafAnimation = {}
        },
        1040: function(e, t) {
            nge.App[nge.appNS].Com.LeafAnimation.Controller = nge.Com.Base.extend((function() {
                var e, t, a = [],
                    n = 2;
                this.create = function() {
                    if (this.createDefault(), !nge.Lib.Helper.mobileAndTabletCheck()) {
                        a = [];
                        for (var t = 1; 8 > t; t++) a.push(nge.findOne("^leaf" + t));
                        for (e || this.subscribe(), s(), a[2].anchor.x = 1, a[6].anchor.x = 1, a[3].anchor.x = 1, a[3].anchor.y = .75, a[5].anchor.y = .5, t = 0; t < a.length; t++) {
                            a[t].x += a[t].width * a[t].anchor.x, a[t].y += a[t].height * a[t].anchor.y;
                            var n = nge.Lib.Random.generate_range(80, 125) / 100;
                            a[t].angleScale = 2 * n
                        }
                        a[3].x = 1950
                    }
                };
                var s = function() {
                        var e = {
                            angle: 0
                        };
                        t && t.stop(), (t = nge.tween.add(e).to({
                            angle: n
                        }, 2500, null, !0, 0, -1, !0)).onUpdateCallback((function(t, n, s) {
                            for (t = 0; t < a.length; t++) a[t].angle = e.angle * (0 == t % 2 ? 1 : -1) * a[t].angleScale
                        })), t.onLoop.add((function() {
                            n *= -1
                        }), this), t.start()
                    },
                    l = function() {
                        t && t.stop()
                    },
                    i = function(e) {
                        for (var t = 0; t < a.length; t++) a[t].loadTexture((e ? "bnLeaf" : "leaf") + (t + 1))
                    };
                this.subscribe = function() {
                    e = !0, nge.observer.add("leafs.changeTexture", i), nge.observer.add("Transport.close", l)
                }
            }))
        },
        1041: function(e, t) {
            nge.App[nge.appNS].Com.ScreenParticleSystem = {}
        },
        1042: function(e, t) {
            nge.App[nge.appNS].Com.ScreenParticleSystem.Controller = nge.Com.Base.extend((function() {
                var e, t, a;
                this.create = function() {
                    this.createDefault(), this.subscribe();
                    var s = nge.findOne("^gameScreenContainer"),
                        l = nge.findOne("^bgFireParticlesContainer");
                    e = n(s, "screen_emitter", 960, 540, ["screen_emitter_particle"], !1, 1, "screen_emitter"), t = n(l, "fire_left_emitter", 140, 642, ["screen_emitter_particle"], !1, 1, "fire_emitter_left"), a = n(l, "fire_right_emitter", 1777, 642, ["screen_emitter_particle"], !1, 1, "fire_emitter_left"), nge.Lib.Helper.mobileAndTabletCheck() || (e.emit = !0), t.emit = !0, a.emit = !0
                };
                var n = function(e, t, a, n, s, l, i, r) {
                        return t = nge.objects.create(new nge.Mlm.Objects.Emitter({
                            type: mt.objects.EMITTER,
                            name: t,
                            particles: s,
                            assetKey: r,
                            animated: l
                        })), e.add(t), t.x = a, t.y = n, t.blendMode = i, t.emitter.emit = !1, t.emitter
                    },
                    s = function() {
                        t.emit = !1, a.emit = !1, e.emit = !1
                    };
                this.subscribe = function() {
                    nge.observer.add("Transport.close", s)
                }
            }))
        },
        1043: function(e, t) {
            nge.App[nge.appNS].Com.ScreenParticleSystem.Tpl = function() {
                var e = [];
                return e.push({
                    type: mt.assets.JSON,
                    key: "screen_emitter",
                    fullPath: nge.appPath + "img/playarea/screen_emitter.json"
                }), e.push({
                    type: mt.assets.IMAGE,
                    key: "screen_emitter_particle",
                    fullPath: nge.appPath + "img/playarea/screen_emitter_particle_orange.png"
                }), e.push({
                    type: mt.assets.JSON,
                    key: "fire_emitter_left",
                    fullPath: nge.appPath + "img/playarea/fire_emitter_left.json"
                }), e.push({
                    type: mt.assets.JSON,
                    key: "fire_emitter_right",
                    fullPath: nge.appPath + "img/playarea/fire_emitter_right.json"
                }), {
                    assets: {
                        name: "assets",
                        contents: e
                    },
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1044: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1045: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.ClassicGameBase.Com.SlotMachine.Cfg.extend((function() {
                this.params.mh = 4, this.params.mhv = [3, 4, 4, 4, 3], this.params.mw = 5, this.params.th = [8, 12, 16, 20, 24], this.params.imageWidth = 276, this.params.imageHeight = 200, this.params.padding = {
                    x: 5,
                    y: 15
                }, this.params.rowsYoffset = [100, 0, 0, 0, 100], this.params.symbolsBlurKeys = "1_blur 2_blur 3_blur 4_blur 5_blur 6_blur 7_blur 8_blur 9_blur".split(" "), this.params.intrigueSpeedReelsFactor = 1.5;
                var e = function(e, t) {
                    for (var a = [], n = 0; n < t; n++) a.push(e + nge.Lib.Helper.LdgZero(n, 3));
                    return a
                };
                this.params.animations = {
                    fast_spin_cycle: e("fast_spin_cycle_", 14),
                    fast_spin_in: e("fast_spin_in_", 14),
                    fast_spin_out: e("fast_spin_out_", 14)
                }, this.params.recyclerView.enabled = !0, this.params.recyclerView.reelsStopCounter = [13, 21, 29, 37, 45], this.params.recyclerView.reelsMinStopCounter = 0, this.params.recyclerView.reelsSpeed = [2.45, 2.45, 2.45, 2.45, 2.45], this.params.recyclerView.reelsSpeedUpSpeed = 5, this.params.recyclerView.hideBorderSymbols = !0, this.params.recyclerView.borderSymbolsCount = 1, this.params.recyclerView.intrigueAdditionalCounter = 40
            }))
        },
        1046: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.RiverGameBase.Com.SlotMachine.Controller.extend((function() {
                var e, t, a, n, s, l, i, r, p, o, y, g = this,
                    m = [];
                this.create = function() {
                    this.super.create(), (e = nge.findOne("^frame")).visible = !1, n = g._service._cfg, l = nge.findOne("^borderContainer"), i = nge.findOne("^gameScreenContainer"), r = nge.findOne("^reelsContainer"), y = g._service._view, S(), nge.rafSetTimeout((function() {
                        nge.Lib.Helper.mobileAndTabletCheck() || (nge.findOne("^linesButtonAreaButton") && (nge.findOne("^linesButtonAreaButton").visible = !1), nge.findOne("^linesNumber") && (nge.findOne("^linesNumber").text = "576")), nge.findOne("^linesMinimumNumber") && (nge.findOne("^linesMinimumNumber").text = "576"), nge.findOne("^linesMaximumNumber") && (nge.findOne("^linesMaximumNumber").text = "576"), nge.findOne("^linesLevelSliderValue") && (nge.findOne("^linesLevelSliderValue").text = "576")
                    }), 1);
                    for (var t = 0; 5 > t; t++) h(t, !1);
                    return !0
                };
                var c = function(e) {
                        p = o = !1, s = !0, m = [], e = e.spinResult.columns;
                        for (var t = 0; t < e.length; t++) {
                            for (var a = e[t], n = [], l = 0; l < a.length; l++) "0" === a[l] && n.push(l);
                            m.push(n)
                        }
                    },
                    u = function() {
                        o = !0
                    },
                    b = function() {
                        t && (t.stop(), I(), e.visible = !1), S()
                    },
                    f = function(e) {
                        return function() {
                            if (h(e, !1), s && 0 < m[e].length) {
                                for (var t = 0; t < m[e].length; t++) y.getSymbolByPosition({
                                    reel: e,
                                    row: m[e][t]
                                }).animate(!1, !0);
                                nge.observer.fire("bs_scatter_" + (e + 1))
                            } else s = !1, nge.observer.fire("reel_stop");
                            !0 === (t = nge.localData.get("slotMachineIntrigue")).status && e === t.startsFrom - 1 && x(), t.startsFrom === e && d()
                        }
                    },
                    h = function(e, t) {
                        var a = nge.localData.get("origin.columns");
                        a || (a = nge.Lib.Helper.rowsToColumns(nge.localData.get("slotMachine.gameParameters.initialSymbols")));
                        for (var n = 0; n < a[e].length; n++) "-1" !== a[e][n] && g._service.setSymbol({
                            coords: [e, n],
                            key: t ? a[e][n] + "_blur" : a[e][n]
                        })
                    },
                    _ = function(e, t, a, n, s) {
                        n = t.length - 1;
                        var l = nge.tween.add({
                            x: 0
                        });
                        return l.to({
                            x: n
                        }, 60 * n, null, !1, 0, a), l.onUpdateCallback((function(a, n, s) {
                            e.loadTexture(t[~~(s.percent * s.vEnd.x)])
                        })).onComplete.add((function() {
                            s && s()
                        })), l
                    },
                    x = function() {
                        nge.rafSetTimeout((function() {
                            o || (t && t.stop(), e.visible = !0, e.x = 1065, e.y = 80, p = !0, I(), (a = k()).start(), (t = _(e, n.animations.fast_spin_in, 0, !0, (function() {
                                (t = _(e, n.animations.fast_spin_cycle, -1, !0, null)).start()
                            }))).start(), e.visible = !0, nge.observer.fire("slotmachine.intrigue", !0))
                        }), 10)
                    },
                    d = function() {
                        nge.observer.fire("slotmachine.intrigue", !1), t && (t.stop(), i.y = 0, l.y = 0, p ? (I(), (t = _(e, n.animations.fast_spin_out, 0, !1, (function() {
                            e.visible = !1
                        }))).start()) : e.visible = !1)
                    },
                    T = function() {
                        nge.localData.get("slotMachineIntrigue").status && e.visible && d()
                    },
                    S = function() {
                        for (var e = "1_blur 2_blur 3_blur 4_blur 5_blur 6_blur 7_blur 8_blur 9_blur".split(" "), t = 0; 5 > t; t++) {
                            for (var a = !1, n = [], s = function(t) {
                                    if (0 === e.length) return console.error("nge.Com.SlotMachine.View _createBlur getBlurRandomKey error: symbolsKeys.length = 0"), !1;
                                    if (1 === e.length) return e[0];
                                    var a = e[~~(Math.random() * e.length)];
                                    return t !== a ? a : s(t)
                                }, l = 0; 100 > l;) {
                                a = s(a);
                                var i = 1;
                                if (0 !== t && 4 !== t) {
                                    (i = nge.Lib.Helper.getRandomInt(2, 4)) > 100 - l && (i = 100 - l), l += i;
                                    for (var r = 0; r < i; r++) n.push(a)
                                } else l += i, n.push(a)
                            }
                            if (0 !== t && 4 !== t && (a = 0, 10 >= nge.Lib.Helper.getRandomInt(0, 100) && (n[a = nge.Lib.Helper.getRandomInt(0, n.length - 1)] = "0_blur"), l = 0, 10 >= nge.Lib.Helper.getRandomInt(0, 100))) {
                                for (l = nge.Lib.Helper.getRandomInt(0, n.length - 1); a === l;) l = nge.Lib.Helper.getRandomInt(0, n.length - 1);
                                n[l] = "10_blur"
                            }
                            P(t, n)
                        }
                    },
                    P = function(e, t) {
                        y.getReels()[e].setBlurs(t)
                    },
                    A = function() {
                        for (var e = 0; 5 > e; e++) h(e, !0)
                    },
                    k = function() {
                        var e = nge.tween.add({
                            x: 0
                        });
                        return e.to({
                            x: 1
                        }, 100, null, !1, 0, -1, !0), e.onUpdateCallback((function(e, t, a) {
                            i.y = e.target.x, l.y = e.target.x, r.y = e.target.x
                        })), e
                    },
                    I = function() {
                        a && a.stop(), i.y = 0, l.y = 0, r.y = 0
                    };
                this.customSubscribe = function() {
                    this.super.customSubscribe(), nge.observer.add("betSettings.updateSliders", (function() {
                        nge.rafSetTimeout((function() {
                            nge.findOne("^linesLevelSliderValue") && (nge.findOne("^linesLevelSliderValue").text = "576")
                        }), 1)
                    })), nge.observer.add("slotMachine.spinStart", A), nge.observer.add("slotMachine.quickFinish", T), nge.observer.add("slotMachine.stopCommand", u), nge.observer.add("slotMachine.spinComplete", b), nge.observer.add("slotMachine.spinResponse", c), nge.observer.add("slotMachine.frameStart", x), nge.observer.add("slotMachine.frameFinish", d);
                    for (var e = 0; 5 > e; e++) nge.observer.add("slotMachine.reel_" + e + ".animation.stop", f(e));
                    nge.observer.add("offers.list.apply", (function() {
                        nge.rafSetTimeout((function() {
                            nge.Lib.Helper.mobileAndTabletCheck() || (nge.findOne("^linesButtonAreaButton") && (nge.findOne("^linesButtonAreaButton").visible = !1), nge.findOne("^linesNumber") && (nge.findOne("^linesNumber").text = "576")), nge.findOne("^linesMinimumNumber") && (nge.findOne("^linesMinimumNumber").text = "576"), nge.findOne("^linesMaximumNumber") && (nge.findOne("^linesMaximumNumber").text = "576"), nge.findOne("^linesLevelSliderValue") && (nge.findOne("^linesLevelSliderValue").text = "576")
                        }), 1)
                    }))
                }
            }))
        },
        1047: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerView = nge.App.RiverGameBase.Com.SlotMachine.RecyclerView.extend((function() {
                this.stopJumpTime = 250
            }))
        },
        1048: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.View = nge.App.ClassicGameBase.Com.SlotMachine.View.extend((function() {}))
        },
        1049: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol = nge.Com.SlotMachine.Symbol.extend((function() {
                var e = this;
                this.durationScale = 500, this._createScaleTween = function() {
                    return e._tween = nge.tween.add(e._textureAnimation.scale), e._initialScale.x = e._textureAnimation.scale.x, e._initialScale.y = e._textureAnimation.scale.y, e._tween.to({
                        x: e._initialScale.x * e.maxScale.x,
                        y: e._initialScale.y * e.maxScale.y
                    }, e.durationScale).to(e._initialScale, e.durationScale).onComplete.add((function() {
                        e._animationEndHandler()
                    })), !0
                }
            }))
        },
        1050: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbols = nge.Com.SlotMachine.Symbols.extend((function() {
                this.items = [{
                    name: "0",
                    textureUrl: "m00.png",
                    frameTime: 33,
                    animationFramesAuto: {
                        prefix: "m00_",
                        count: 31,
                        suffix: ".png",
                        ldg: 3
                    },
                    animateAllWinlinesCycle: !1
                }, {
                    name: "1",
                    textureUrl: "m01.png",
                    frameTime: 33,
                    animationFramesAuto: {
                        prefix: "m01_",
                        count: 31,
                        suffix: ".png",
                        ldg: 3
                    },
                    animateAllWinlinesCycle: !1
                }, {
                    name: "2",
                    textureUrl: "m02.png",
                    repeat: 1,
                    frameTime: 33,
                    animationFramesAuto: {
                        prefix: "m02_",
                        count: 31,
                        suffix: ".png",
                        ldg: 3
                    },
                    animationMainTextureNeed: !0
                }, {
                    name: "3",
                    textureUrl: "m03.png",
                    frameTime: 33,
                    animationFramesAuto: {
                        prefix: "m03_",
                        count: 31,
                        suffix: ".png",
                        ldg: 3
                    }
                }, {
                    name: "4",
                    textureUrl: "m04.png",
                    animationFrames: !1,
                    animationSprite: !1,
                    animateAllWinlinesCycle: !1
                }, {
                    name: "5",
                    textureUrl: "m05.png",
                    animationFrames: !1,
                    animationSprite: !1,
                    repeat: 1,
                    animateAllWinlinesCycle: !1
                }, {
                    name: "6",
                    textureUrl: "m06.png",
                    animationFrames: !1,
                    animationSprite: !1,
                    animateAllWinlinesCycle: !1
                }, {
                    name: "7",
                    textureUrl: "m07.png",
                    animationFrames: !1,
                    animationSprite: !1,
                    animateAllWinlinesCycle: !1
                }, {
                    name: "8",
                    textureUrl: "m08.png",
                    animationFrames: !1,
                    animationSprite: !1,
                    animateAllWinlinesCycle: !1
                }, {
                    name: "9",
                    textureUrl: "m09.png",
                    animationFrames: !1,
                    animationSprite: !1,
                    animateAllWinlinesCycle: !1
                }, {
                    name: "10",
                    textureUrl: "m10.png",
                    frameTime: 33,
                    animationFramesAuto: {
                        prefix: "m10_",
                        count: 31,
                        suffix: ".png",
                        ldg: 3
                    },
                    animateAllWinlinesCycle: !1
                }, {
                    name: "winFrame",
                    textureUrl: "gn_routeframe_000.png",
                    frameTime: 33,
                    animationFramesAuto: {
                        prefix: "gn_routeframe_",
                        count: 31,
                        suffix: ".png",
                        ldg: 3
                    },
                    animateAllWinlinesCycle: !1
                }, {
                    name: "0_blur",
                    textureUrl: "wl_f_b_00.png"
                }, {
                    name: "1_blur",
                    textureUrl: "wl_f_b_01.png"
                }, {
                    name: "2_blur",
                    textureUrl: "wl_f_b_02.png"
                }, {
                    name: "3_blur",
                    textureUrl: "wl_f_b_03.png"
                }, {
                    name: "4_blur",
                    textureUrl: "wl_f_b_04.png"
                }, {
                    name: "5_blur",
                    textureUrl: "wl_f_b_05.png"
                }, {
                    name: "6_blur",
                    textureUrl: "wl_f_b_06.png"
                }, {
                    name: "7_blur",
                    textureUrl: "wl_f_b_07.png"
                }, {
                    name: "8_blur",
                    textureUrl: "wl_f_b_08.png"
                }, {
                    name: "9_blur",
                    textureUrl: "wl_f_b_09.png"
                }, {
                    name: "10_blur",
                    textureUrl: "wl_f_b_10.png"
                }]
            }))
        },
        1051: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Tpl = function() {
                for (var e = [], t = 0; 14 > t; t++) {
                    var a = nge.Lib.Helper.LdgZero(t, 3);
                    e.push({
                        type: mt.assets.IMAGE,
                        key: "fast_spin_cycle_" + a,
                        fullPath: nge.appPath + "img/symbols/fast_spin_cycle_" + a + ".png"
                    }), e.push({
                        type: mt.assets.IMAGE,
                        key: "fast_spin_in_" + a,
                        fullPath: nge.appPath + "img/symbols/fast_spin_in_" + a + ".png"
                    }), e.push({
                        type: mt.assets.IMAGE,
                        key: "fast_spin_out_" + a,
                        fullPath: nge.appPath + "img/symbols/fast_spin_out_" + a + ".png"
                    })
                }
                return {
                    assets: {
                        name: "assets",
                        contents: e
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 0,
                            name: "frame",
                            assetKey: "fast_spin_cycle_000",
                            x: "840",
                            y: "195",
                            alpha: "1",
                            scaleX: 1.4,
                            scaleY: 1.4
                        }]
                    }
                }
            }
        },
        1052: function(e, t) {
            nge.App[nge.appNS].Com.Winlines = {}
        },
        1053: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Cfg = nge.App.ClassicGameBase.Com.Winlines.Cfg.extend((function() {
                this.showLinesOnWin = this.buildWinLines = !1, this.animationAllDelay = 0, this.animateAllSymbols = !0, this.animationAllDelayPerLine = 100, this.animationAllDuration = 15e6, this.animationOneByOneDuration = 1500
            }))
        },
        1054: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Controller = nge.Com.Winlines.Controller.extend((function() {
                var e, t, a, n, s, l, i, r, p, o, y, g, m, c, u, b = this,
                    f = [210, 410, 610, 810];
                this.create = function() {
                    this.super.create(), C();
                    var t = nge.findOne("^winCounterLightContainer");
                    o = nge.findAll("^winCounterLight");
                    for (var s = 0; s < o.length; s++) o[s].scale.set(0), o[s].alpha = .35, o[s].anchor.x = .5, o[s].anchor.y = .5, t.add(o[s]);
                    (e = nge.findOne("^winLinesCount")).anchor.y = .25, e.x = 960, e.visible = !0, n = a = !1, r = nge.assets.getQualityFactor(), t = e, (s = nge.objects.create(new nge.Mlm.Objects.Emitter({
                        type: mt.objects.EMITTER,
                        name: "emitter_particle",
                        particles: ["emitter_particle"],
                        assetKey: "emitter"
                    }))).emitter.emit = !1, t.add(s), p = s.emitter
                };
                var h, _ = function() {
                        nge.observer.fire("big_counter_loop.stop"), nge.observer.fire("winlines.animateByOne.cycleComplete")
                    },
                    x = function() {
                        nge.observer.fire("winCounter.finished"), E(), _()
                    },
                    d = function(t) {
                        e.text = t, nge.observer.fire("cleosHeart.printWin", t)
                    },
                    T = function(n) {
                        h = !1, e.x = 960, e.y = 500, 0 < +n.totalWin ? (s = +n.totalWin, function(n, s) {
                            i = !0, e.visible = !0, e.alpha = 1, e.scale.x = 1, e.scale.y = 1, t = nge.tween.add({
                                x: 0
                            }).to({
                                x: n
                            }, s, null, !1), u.push(t), t.onStart.add((function() {
                                d(0), p.emit = !0
                            })), t.onUpdateCallback((function(e, t, a) {
                                d(Math.ceil(e.target.x))
                            })), t.onComplete.addOnce((function() {
                                nge.observer.fire("big_counter_loop.stop"), nge.observer.fire("winCounter.countingFinished"), d(Math.ceil(n)), t = nge.tween.add(e.scale).to({
                                    x: 1.25,
                                    y: 1.25
                                }, 200), u.push(t), l = !0, t.onComplete.addOnce((function() {
                                    t = nge.tween.add(e.scale).to({
                                        x: 1,
                                        y: 1
                                    }, 200), u.push(t), t.onComplete.addOnce((function() {
                                        t = nge.tween.add(e.scale).to({
                                            x: 1.5,
                                            y: 1.5
                                        }, 200, null, !1, 500), u.push(t), t.onUpdateCallback((function(t, a, n) {
                                            e.alpha = 1 - 1.5 * n.percent
                                        })), t.onComplete.addOnce((function() {
                                            p.emit = !1, a && (nge.observer.fire("gn_win_counter_end"), a = !1), E(), nge.observer.fire("big_counter_loop.stop"), nge.observer.fire("slotmachine.custom.win"), x()
                                        }), this), t.start()
                                    }), this), t.start()
                                }), this), t.start()
                            }), this), a = !0, t.start(), nge.observer.fire("big_counter_loop.start"), w()
                        }(n.totalWin, 200 * Math.sqrt(n.totalWin))) : x()
                    },
                    S = function(s) {
                        n && (0 < nge.Lib.Money.toCoinsInt(s.amount) ? (t && t.stop(), e.alpha = 1, e.scale.x = .7, e.scale.y = .7, e.text = nge.Lib.Money.toCoinsInt(s.amount), h = e.visible = !0, e.y = f[+s.wonSymbols[2][1]], e.x = 960, t = nge.tween.add(e.scale).to({
                            x: .8,
                            y: .8
                        }, 550), u.push(t), t.onComplete.addOnce((function() {
                            t = nge.tween.add(e.scale).to({
                                x: 0,
                                y: 0
                            }, 550), u.push(t), t.onUpdateCallback((function(t, a, n) {
                                e.alpha = 1 - (n.percent - .2) / (.6 - .2)
                            })), t.onComplete.addOnce((function() {
                                a && (nge.observer.fire("gn_win_counter_end"), a = !1), nge.observer.fire("big_counter_loop.stop")
                            }), this), t.start()
                        }), this), t.start()) : e.visible = !1)
                    },
                    P = function() {
                        l || nge.localData.get("bigWin.show") || (l = !0, i || (e.x = 960, e.y = 500, e.scale.x = 1, e.scale.y = 1, s = nge.Lib.Money.toCoinsInt(nge.localData.get("slotMachine.slotWin.totalWin")), b._view.quickFinish(), nge.observer.fire("slotmachine.custom.win")), 0 < s ? (e.visible = !0, d(Math.ceil(s)), nge.observer.fire("winCounter.countingFinished"), nge.observer.fire("big_counter_loop.stop"), E(), t && t.stop(), t = nge.tween.add(e.scale).to({
                            x: 1.25,
                            y: 1.25
                        }, 200), u.push(t), t.onComplete.addOnce((function() {
                            t = nge.tween.add(e.scale).to({
                                x: 1,
                                y: 1
                            }, 200), u.push(t), t.onComplete.addOnce((function() {
                                t = nge.tween.add(e.scale).to({
                                    x: 1.5,
                                    y: 1.5
                                }, 200, null, !1, 500), u.push(t), t.onUpdateCallback((function(t, a, n) {
                                    e.alpha = 1 - 1.5 * n.percent
                                })), t.onComplete.addOnce((function() {
                                    p.emit = !1, a && (nge.observer.fire("gn_win_counter_end"), a = !1), nge.observer.fire("big_counter_loop.stop"), x()
                                }), this), t.start()
                            }), this), t.start()
                        }), this), t.start()) : x())
                    },
                    A = function(e) {
                        C(), l = i = !1, s = 0, a = n = !1
                    },
                    k = function() {
                        if (e) {
                            if (a && (nge.observer.fire("gn_win_counter_end"), a = !1), h) e.visible = !1;
                            else {
                                var t = nge.tween.add(e).to({
                                    alpha: 0
                                }, 300);
                                t.onComplete.addOnce((function() {
                                    e.visible = !1
                                }), this), t.start()
                            }
                            E(), nge.observer.fire("big_counter_loop.stop")
                        }
                    },
                    I = function() {
                        0 < s && (t && t.stop(), a && (nge.observer.fire("gn_win_counter_end"), a = !1), e.x = 960, e.y = 500, e.scale.x = 1, e.scale.y = 1, nge.observer.fire("big_counter_loop.stop"))
                    },
                    v = function() {
                        t && t.stop(), e.visible = !1
                    },
                    M = function() {
                        !n && nge.localData.get("slotMachine.slotWin") && (n = !0, nge.observer.fire("winlines.animateAllDone"))
                    },
                    w = function() {
                        y = nge.tween.add({
                            angle: 0
                        }).to({
                            angle: 360
                        }, 15e3, nge.Lib.Tween.Easing.Linear.None, !0, 0, -1), u.push(t), y.onUpdateCallback((function(e, t, a) {
                            for (t = 0; t < o.length; t++) o[t].angle = e.target.angle * (t % 2 ? 1 : -1)
                        })), y.start(), c = nge.tween.add({
                            scale: 0
                        }).to({
                            scale: 4 / r
                        }, 350, nge.Lib.Tween.Easing.Linear.None, !0, 0, 0), u.push(c), c.onUpdateCallback((function(e, t, a) {
                            for (t = 0; t < o.length; t++) o[t].scale.set(e.target.scale)
                        })), c.start(), o[0].alpha = .35, g = nge.tween.add(o[0]).to({
                            alpha: .1
                        }, 500, nge.Lib.Tween.Easing.Linear.None, !0, 0, -1, !0), u.push(g), g.start(), o[1].alpha = .1, m = nge.tween.add(o[1]).to({
                            alpha: .35
                        }, 500, nge.Lib.Tween.Easing.Linear.None, !0, 0, -1, !0), u.push(m), m.start()
                    },
                    E = function() {
                        c && c.stop(), c = nge.tween.add({
                            scale: o[0].scale
                        }).to({
                            scale: 0
                        }, 350, nge.Lib.Tween.Easing.Linear.None, !0, 0, 0), u.push(c), c.onUpdateCallback((function(e, t, a) {
                            for (t = 0; t < o.length; t++) o[t].scale.set(e.target.scale)
                        })), c.onComplete.addOnce((function() {
                            y && y.stop(), g && g.stop(), m && m.stop();
                            for (var e = 0; e < o.length; e++) o[e].scale.set(0)
                        })), c.start()
                    },
                    C = function() {
                        if (u)
                            for (var e = 0; e < u.length; e++) u[e] && u[e].stop();
                        u = []
                    };
                this.customSubscribe = function() {
                    nge.observer.add("winlines.lights.start", w), nge.observer.add("winlines.lights.stop", E), nge.observer.add("slotMachine.spinResponse", A), nge.observer.add("winlines.showCounter", T), nge.observer.add("winlines.animateByOne", _), nge.observer.add("slotMachine.quickFinish", P), nge.observer.add("winlines.lineHighlite.start", S), nge.observer.add("winlines.animateAllDone", I), nge.observer.add("winlines.hideAll", k), nge.observer.add("Transport.close", v), nge.observer.add("bigWin.complete", _), nge.observer.add("spinAndWinComplete", M), nge.observer.add("freespin.popup.open", (function() {
                        n = e.visible = !1
                    })), nge.observer.add("freespin.popupFinishClose", (function() {
                        n = !0
                    }))
                }
            }))
        },
        1055: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.View = nge.Com.Winlines.View.extend((function() {
                var e, t = this,
                    a = this.super.animateAll.bind(this);
                this.animateAll = function() {
                    e = !1;
                    var s = t.getAnimationQuery();
                    if (nge.localData.get("bonus.inline")) nge.observer.fire("buttons.disable.all"), nge.observer.fire("scatter_win"), nge.observer.fire("winlines.lineHighlite.startComplete", s[0]), n(s[0].wonSymbols), nge.rafSetTimeout((function() {
                        if (!e) {
                            nge.localData.set("bonus.inline", !1), a(), nge.observer.fire("winlines.animateAll2");
                            for (var t = 0; t < s.length; t++) nge.observer.fire("winlines.lineHighlite.startComplete", s[t])
                        }
                    }), 1e3);
                    else {
                        a(), nge.observer.fire("winlines.animateAll2");
                        for (var l = 0; l < s.length; l++) nge.observer.fire("winlines.lineHighlite.startComplete", s[l])
                    }
                    return !0
                }, this.quickFinish = function() {
                    if (!e) {
                        e = !0, a();
                        for (var n = t.getAnimationQuery(), s = 0; s < n.length; s++) nge.observer.fire("winlines.lineHighlite.startComplete", n[s])
                    }
                };
                var n = function(e) {
                    for (var t = 0; t < e.length; t++) e[t] && nge.observer.fire("slotMachine.animateSymbol", {
                        reel: e[t][0],
                        row: e[t][1]
                    })
                }
            }))
        },
        1056: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Tpl = function() {
                var e = [];
                return e.push({
                    type: mt.assets.JSON,
                    key: "emitter",
                    fullPath: nge.appPath + "img/playarea/emitter.json"
                }), e.push({
                    type: mt.assets.IMAGE,
                    key: "emitter_particle",
                    fullPath: nge.appPath + "img/atlases/emitter_particle.png"
                }), e.push({
                    type: mt.assets.IMAGE,
                    key: "win_light_texture",
                    fullPath: nge.appPath + "img/playarea/win_light_texture.png"
                }), {
                    assets: {
                        name: "assets",
                        contents: e
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 0,
                            name: "winCounterLight",
                            assetKey: "win_light_texture",
                            x: "960",
                            y: "545",
                            alpha: "1",
                            scaleX: 4.5,
                            scaleY: 4
                        }, {
                            type: 0,
                            name: "winCounterLight",
                            assetKey: "win_light_texture",
                            x: "960",
                            y: "545",
                            alpha: "1",
                            scaleX: 4.5,
                            scaleY: 4
                        }]
                    }
                }
            }
        },
        1057: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesAddon = {}
        },
        1058: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesAddon.Cfg = nge.App.ClassicGameBase.Com.WinlinesAddon.Cfg.extend((function() {
                this.params = this.super.get(), this.params.generateLines = !1, this.params.borderWinNeed = !1, this.params.routeframesNeed = !0, this.params.scaleFactor = 1, this.params.rowsXoffset = [25, 30, 33, 33, 36]
            }))
        },
        1059: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesAddon.TexturesController = nge.Com.Base.extend((function() {
                var e, t, a, n, s, l, i, r = "0 0_blur 4 5 6 7 8 9 4_blur 5_blur 6_blur 7_blur 8_blur 9_blur".split(" "),
                    p = {},
                    o = [];
                this.create = function() {
                    if (a = this.getInstance("Cfg", "slotMachine").get(), t = this.getInstance("Cfg").get(), u(), n = nge.findOne("^" + a.parentName)) {
                        var r = n.mt.data;
                        for (s = r.width / a.mw, l = r.height / a.mh, _winlines = nge.localData.get("winlines"), i = new nge.Mlm.Objects.Folder({
                                name: "w-a-line-main",
                                isVisible: !0
                            }), p = {}, r = 0; 4 > r; r++)
                            for (var o = 0; 5 > o; o++) {
                                var g = 0;
                                if (0 === o || 4 === o) {
                                    if (3 === r) continue;
                                    g = l / 2
                                }
                                g = new nge.Mlm.Objects.Folder({
                                    name: "w-a-el-" + r + "-" + o,
                                    x: o * s + s / 2 + 30,
                                    y: (.5 + r) * l + g,
                                    isVisible: !1
                                });
                                var c = new nge.Mlm.Objects.Image({
                                    assetKey: "gn_routeframe_010.png",
                                    scaleX: t.scaleFactor,
                                    scaleY: t.scaleFactor,
                                    anchorX: .5,
                                    anchorY: .5
                                });
                                g.contents.push(c), i.contents.push(g)
                            }(r = []).push(i)
                    } else r = !1;
                    for (o = this.getInstance("Tpl", !1, r), (r = nge.findOne("^winlinesAddonContainer")).y = 18, nge.objects.create(o.objects.contents[0], r), t.routeframesUnderSymbols && ((o = nge.findOne("^" + a.parentName)).add(r), r.x -= o.x, r.y -= o.y), e || (t.routeframesUnderSymbols ? nge.observer.add("winlines.lineHighlite.start.previousHided", y) : nge.observer.add("winlines.lineHighlite.startComplete", y), nge.observer.add("winlines.view.startHideAll", m)), r = 0; 4 > r; r++)
                        for (o = 0; 5 > o; o++) p[r + "-" + o] = nge.findOne("^w-a-el-" + r + "-" + o);
                    return e = !0
                };
                var y = function(e) {
                        for (var t = [], a = 0; a < e.wonSymbols.length; a++) {
                            var n = e.wonSymbols[a],
                                s = p[n[1] + "-" + n[0]];
                            s && -1 < r.indexOf(g(n)) && (t.push(s), s.visible = !0)
                        }
                        0 < t.length && c(t)
                    },
                    g = function(e) {
                        return nge.localData.get("slotMachine.spinResult.columns")[e[0]][e[1]]
                    },
                    m = function(e) {
                        for (var t in u(), p) p[t] && (p[t].visible = !1)
                    },
                    c = function(e) {
                        var t = nge.tween.add({
                            x: 0
                        }).to({
                            x: 31
                        }, 1020);
                        t.onUpdateCallback((function(t, a, n) {
                            for (t = 0; t < e.length; t++) e[t].children[0].loadTexture("gn_routeframe_" + nge.Lib.Helper.LdgZero(~~(n.percent * n.vEnd.x), 3) + ".png")
                        })), t.start(), o.push(t)
                    },
                    u = function() {
                        if (o) {
                            for (var e = 0; e < o.length; e++) o[e] && o[e].stop();
                            o = []
                        }
                    }
            }))
        },
        1060: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1061: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1062: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsExtension = function() {
                var e, t = this,
                    a = function() {
                        e = !0
                    },
                    n = function() {
                        e && nge.localData.get("slotMachine.lastResponse") && nge.rafSetTimeout((function() {
                            t.enableFreespinText(!0);
                            var e = nge.localData.get("freespin.spinsTotal"),
                                a = nge.localData.get("freespin.spinsLeft");
                            nge.observer.fire("freespin.counterUpdate", {
                                current: e - a,
                                total: e
                            })
                        }), 1)
                    },
                    s = function() {
                        nge.observer.fire("buttons.changeData", {
                            spin: {
                                enabled: !1
                            }
                        }), nge.observer.fire("buttons.completeBigWin")
                    },
                    l = function() {
                        nge.observer.fire("buttons.changeData", {
                            spin: {
                                enabled: !0
                            }
                        }), nge.observer.fire("buttons.startBigWin")
                    };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("freespin.restore", a, !1, !0), nge.observer.add("freespin.start", n, !1, !0), nge.observer.add("freespin.end", (function() {
                        e = !1
                    }), !1, !0), nge.observer.add("cleosHeart.freespin.buttons.waitForFinish", l, !1, !0), nge.observer.add("cleosHeart.freespin.finishPressed", s, !1, !0)
                }
            }
        },
        1063: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Buttons = nge.App.RiverGameBase.Mlm.Brain.Buttons.extend(nge.App[nge.appNS].Mlm.Brain.ButtonsExtension)
        },
        1064: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile = {}
        },
        1065: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.Buttons = nge.App.RiverGameBase.Mlm.Brain.Mobile.Buttons.extend((function() {
                var e, t = function(e, t, a, n, s) {
                        var l = {};
                        l[e] = {
                            title: t,
                            callback: a,
                            enabled: n,
                            visible: s
                        }, nge.observer.fire("buttons.changeData", l)
                    },
                    a = function() {
                        t("stopMobile", void 0, (function() {
                            nge.observer.fire("slotMachine.quickFinish")
                        }), !0, !0)
                    },
                    n = function() {
                        e = !0
                    },
                    s = function() {
                        e && nge.localData.get("slotMachine.lastResponse") && nge.rafSetTimeout((function() {
                            var e = nge.localData.get("freespin.spinsTotal"),
                                t = nge.localData.get("freespin.spinsLeft");
                            nge.observer.fire("freespin.counterUpdate", {
                                current: e - t,
                                total: e
                            })
                        }), 1)
                    },
                    l = function() {
                        nge.rafSetTimeout((function() {
                            t("stopMobile", void 0, (function() {
                                nge.observer.fire("slotMachine.quickFinish"), t("stopMobile", void 0, (function() {}), !1, !0)
                            }), !0, !0)
                        }), 1)
                    },
                    i = function() {
                        nge.observer.fire("buttons.changeData", {
                            spinMobile: {
                                enabled: !1
                            }
                        }), nge.observer.fire("buttons.completeBigWin")
                    },
                    r = function() {
                        nge.observer.fire("buttons.changeData", {
                            spinMobile: {
                                enabled: !0,
                                visible: !0
                            }
                        }), nge.observer.fire("buttons.startBigWin")
                    };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("bigWin.start", l, !1, !0), nge.observer.add("freespin.restore", n, !1, !0), nge.observer.add("freespin.start", s, !1, !0), nge.observer.add("freespin.end", (function() {
                        e = !1
                    }), !1, !0), nge.observer.add("buttons.disable.all", (function() {
                        t("autoSpinMobile", void 0, void 0, !1, !1)
                    }), !1, !0), nge.observer.add("buttons.cust.stop", a, !1, !0), nge.observer.add("winlines.animateByOne.cycleComplete", (function() {
                        var e = nge.Lib.Helper.mobileAndTabletCheck(),
                            a = nge.localData.get("freespin.inProgress");
                        e && !a && t("autoSpinMobile", void 0, void 0, !0, !0)
                    }), !1, !0), nge.observer.add("disableAuto", (function() {
                        nge.Lib.Helper.mobileAndTabletCheck() && t("autoSpinMobile", void 0, void 0, !1, !1)
                    }), !1, !0), nge.observer.add("cleosHeart.freespin.buttons.waitForFinish", r, !1, !0), nge.observer.add("cleosHeart.freespin.finishPressed", i, !1, !0)
                }
            }))
        },
        1066: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.SoundsExtension = function() {
                var e, t, a, n, s = this,
                    l = [];
                this.scatterSymbols = ["10", "10_blur"], this.wheelSpinSoundCount = 6, this.soundedSymbols = [], this.soundsUnused = "sr_bell_low sr_bell_middle sr_bell_high db_background gn_wait db_open db_win_1 db_win_2 db_win_3 db_win_4 db_win_5 bn_background".split(" "), this.soundExt = [{
                    s: "bs_background",
                    e: "bs_background.resume",
                    action: "resume"
                }, {
                    s: "bs_background",
                    e: "bs_background.stop",
                    action: "stop"
                }, {
                    s: "bs_background",
                    e: "bs_background.play",
                    loop: !0,
                    action: "play"
                }, {
                    s: "bs_background",
                    e: "riverslot.bigWin.show",
                    action: "pause"
                }, {
                    s: "bs_background",
                    e: "acceleration.start",
                    action: "pause"
                }, {
                    s: "bs_background",
                    e: "freespin.restore",
                    action: "stop"
                }, {
                    s: "bs_background",
                    e: "pickUp.openPopup",
                    action: "stop"
                }, {
                    s: "bs_background",
                    e: "pickBonus.restore",
                    action: "stop"
                }, {
                    s: "bs_background",
                    e: "jackpot.show",
                    action: "stop"
                }, {
                    s: "bn_background_cust",
                    e: "bn_background_cust.play",
                    loop: !0
                }, {
                    s: "bn_background_cust",
                    e: "bn_background_cust.stop",
                    action: "stop"
                }, {
                    s: "bn_background_cust",
                    e: "popupFinish.animate.start",
                    action: "stop"
                }, {
                    s: "bn_background_cust",
                    e: "freespin.end",
                    action: "stop"
                }, {
                    s: "bn_background_cust",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "bn_background_cust",
                    e: "jackpot.start",
                    action: "stop"
                }, {
                    s: "bn_background_cust",
                    e: "bn_background_cust.resume",
                    action: "resume"
                }, {
                    s: "bn_background_cust",
                    e: "popupInsideBonus.animate.start",
                    action: "pause"
                }, {
                    s: "bn_background_cust",
                    e: "sound.stopped.popupInsideBonus.animate.start",
                    action: "resume"
                }, {
                    s: "big_win_counter",
                    e: "bigWin.start",
                    loop: !0,
                    relaunch: !0
                }, {
                    s: "big_win_counter",
                    e: "bigWin.quickFinish.start",
                    action: "stop"
                }, {
                    s: "big_win_counter",
                    e: "bigWin.complete.start",
                    action: "stop"
                }, {
                    s: "big_win_counter",
                    e: "jackpot.start",
                    action: "stop"
                }, {
                    s: "big_win_counter",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "big_win_end",
                    e: "bigWin.quickFinish.start",
                    relaunch: !0
                }, {
                    s: "big_win_end",
                    e: "bigWin.counter.complete",
                    relaunch: !0
                }, {
                    s: "big_win_text_change",
                    e: "bigWin.changestate",
                    relaunch: !0
                }, {
                    s: "bs_bn_wheel",
                    e: "slotMachine.spinStart",
                    relaunch: !0,
                    action: "play",
                    loop: !0
                }, {
                    s: "bs_bn_wheel",
                    e: "jackpot.start",
                    action: "stop"
                }, {
                    s: "bs_bn_wheel",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "bs_bn_wheel",
                    e: "slotMachine.spinComplete",
                    action: "stop"
                }, {
                    s: "bs_bn_wheel_stop_0",
                    e: "bs_bn_wheel_stop_0",
                    relaunch: !0
                }, {
                    s: "bs_bn_wheel_stop_1",
                    e: "bs_bn_wheel_stop_1",
                    relaunch: !0
                }, {
                    s: "bs_bn_wheel_stop_2",
                    e: "bs_bn_wheel_stop_2",
                    relaunch: !0
                }, {
                    s: "bs_bn_wheel_stop_3",
                    e: "bs_bn_wheel_stop_3",
                    relaunch: !0
                }, {
                    s: "bs_bn_wheel_stop_4",
                    e: "bs_bn_wheel_stop_4",
                    relaunch: !0
                }, {
                    s: "bs_bn_scatter_0",
                    e: "bs_bn_scatter_0",
                    relaunch: !0
                }, {
                    s: "bs_bn_scatter_1",
                    e: "bs_bn_scatter_1",
                    relaunch: !0
                }, {
                    s: "bs_bn_scatter_2",
                    e: "bs_bn_scatter_2",
                    relaunch: !0
                }, {
                    s: "fs_fg_xw_hide",
                    e: "fs_fg_xw_hide",
                    relaunch: !0
                }, {
                    s: "fs_popup",
                    e: "fs_popup",
                    relaunch: !0
                }, {
                    s: "xw_popup",
                    e: "xw_popup",
                    relaunch: !0
                }, {
                    s: "sr_bell",
                    e: "scatter_win",
                    relaunch: !0
                }, {
                    s: "sr_win_big",
                    e: "sr_win_big",
                    relaunch: !0
                }, {
                    s: "sr_win_middle",
                    e: "sr_win_middle",
                    relaunch: !0
                }, {
                    s: "sr_win_small",
                    e: "sr_win_small",
                    relaunch: !0
                }, {
                    s: "sr_win_tiny",
                    e: "sr_win_tiny",
                    relaunch: !0
                }, {
                    s: "bs_wheel_spin_fast",
                    e: "bs_wheel_spin_fast.play",
                    relaunch: !0
                }, {
                    s: "bs_wheel_spin_fast",
                    e: "bs_wheel_spin_fast.stop",
                    action: "stop"
                }, {
                    s: "bn_bs_background",
                    e: "bn_bs_background.play",
                    relaunch: !0,
                    loop: !0
                }, {
                    s: "bn_bs_background",
                    e: "jackpot.start",
                    action: "stop"
                }, {
                    s: "bn_bs_background",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "gn_win_counter",
                    e: "big_counter_loop.stop",
                    action: "stop"
                }, {
                    s: "gn_win_counter",
                    e: "jackpot.start",
                    action: "stop"
                }, {
                    s: "gn_win_counter",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "gn_win_counter",
                    e: "big_counter_loop.start",
                    action: "play",
                    loop: !0,
                    relaunch: !0
                }, {
                    s: "rl_close",
                    e: "paytable.hide"
                }], this.constructor = function() {
                    n = !1, nge.localData.set("scatterSymbols", this.scatterSymbols), this.winSoundsQueue = nge.App.getInstance("Mlm.Brain.SoundsQueue", !1, this, [])
                }, this.determineWinEvent = function(e) {
                    var t = nge.Lib.Money.toCoins(+nge.localData.get("totalBet.value"));
                    return e <= 2 * t ? "sr_win_tiny" : e <= 5 * t ? "sr_win_small" : e < 10 * t ? "sr_win_middle" : void 0
                };
                var i = function(e, t) {
                        0 < t && nge.observer.fire(e + ".play"), nge.observer.fire("sound.volume", {
                            s: e,
                            volume: t,
                            duration: 100
                        }, 1)
                    },
                    r = function(n) {
                        e = 0;
                        var s = n.spinResult.columns,
                            i = !0,
                            r = 0,
                            p = 0;
                        l = [];
                        for (var o = 0; o < s.length; o++) {
                            var y = s[o].some(function(e) {
                                return -1 !== ["10", "10_blur"].indexOf(e)
                            }.bind(this));
                            1 !== o || y || (i = !1), y && i ? (l.push("bs_bn_scatter_" + r), r++) : (0 < r && (i = !1), l.push("bs_bn_wheel_stop_" + p), p++)
                        }
                        nge.localData.set("bigWin.show", !1), (t = n.slotWin) && t.lineWinAmounts && (e = nge.Lib.Money.toCoins(t.totalWin), a = 10 * +nge.localData.get("totalBet.value"), nge.localData.set("bigWin.show", t.totalWin > a))
                    };
                this.reelStopHandler = function(e) {
                    return function() {
                        nge.observer.fire(l[e])
                    }
                }, this.soundsForSymbolsHandler = function(e) {};
                var p, o = function() {
                        if (a = 10 * +nge.localData.get("totalBet.value"), t.totalWin >= a) {
                            var l = t.totalWin / +nge.localData.get("totalBet.value") / .15 * 100;
                            l = 1e3 > l ? 3e3 : l, l *= .9, nge.observer.fire("sr_win_big"), nge.observer.fire("buttons.disable.all", null, 10), nge.observer.fire("winlines.lights.start"), nge.rafSetTimeout((function() {
                                nge.observer.fire("winlines.lights.stop"), nge.observer.fire("riverslot.bigWin.show", {
                                    value: e,
                                    duration: l
                                })
                            }), 1e3)
                        } else {
                            if (0 < e) {
                                var r = s.determineWinEvent(e);
                                s.winSoundsQueue.push(r), s.winSoundsQueue.play()
                            }
                            i(n ? "bn_background_cust" : "bs_background", .5), nge.observer.fire("winlines.showCounter", {
                                totalWin: e
                            }, 1)
                        }
                    },
                    y = function(e) {
                        nge.observer.fire("bn_bs_background.play"), "play" === e && (nge.localData.get("freespin.inProgress") || nge.observer.fire("bs_background.play"))
                    },
                    g = function(e) {
                        var t = nge.localData.get("freespin.inProgress");
                        e ? (i(t ? "bn_background_cust" : "bs_background", .5), i("bs_wheel_spin_fast", 1)) : (i(t ? "bn_background_cust" : "bs_background", 1), i("bs_wheel_spin_fast", 0))
                    },
                    m = function(e) {
                        i(n ? "bn_background_cust" : "bs_background", e ? .1 : 1), i("bn_bs_background", e ? .5 : 1)
                    },
                    c = function() {
                        n = !0, i("bn_background_cust", 1), nge.observer.fire("bs_background.stop")
                    },
                    u = function() {
                        nge.Lib.Helper.mobileAndTabletCheck() ? nge.observer.fire("buttons.cust.stop", null, 1) : (nge.observer.fire("buttons.enable.spin"), nge.rafSetTimeout((function() {
                            nge.localData.set("slotMachine.quickFinishWaiting", !0), nge.localData.set("spaceHandler.isEnable", !0)
                        }), 10))
                    },
                    b = function() {
                        p = !1, nge.localData.get("freespin.inProgress") || i("bs_background", 1)
                    };
                this.customSubscribe = function() {
                    nge.observer.add("winlines.animateByOne.cycleComplete", (function() {
                        p || i(n ? "bn_background_cust" : "bs_background", 1)
                    }), !1, !0), nge.observer.add("freespin.close.inside", (function() {
                        n = !0, nge.observer.fire("bn_background_cust.stop"), nge.observer.fire("bn_background_cust.play", 1), nge.observer.fire("sound.volume", {
                            s: "bn_background_cust",
                            volume: 0,
                            duration: 1
                        }, 2), nge.observer.fire("sound.volume", {
                            s: "bn_background_cust",
                            volume: 1,
                            duration: 200
                        }, 3)
                    }), !1, !0), nge.observer.add("freespin.close.finish", (function() {
                        n = !1
                    }), !1, !0), nge.observer.add("freespin.popup.open", (function() {
                        p = !0, nge.observer.fire("sound.volume", {
                            s: "bs_background",
                            volume: 0,
                            duration: 200
                        }, 10)
                    }), !1, !0), nge.observer.add("freespin.playbg", c, !1, !0), nge.observer.add("bigWin.start", (function() {
                        m(!0)
                    }), !1, !0), nge.observer.add("bigWin.complete", (function() {
                        m(!1)
                    }), !1, !0), nge.observer.add("freespin.end", (function() {
                        n = !1
                    }), !1, !0), nge.observer.add("slotmachine.intrigue", g, !1, !0), nge.observer.add("slotMachine.spinResponse", r, !1, !0), nge.observer.add("winlines.animateAll2", o, !1, !0), nge.observer.add("StatesManager.create.end", y, !1, !0), nge.observer.add("bigWin.scale.complete", u, !1, !0), nge.observer.add("slotMachine.spinStart", b, !1, !0), this.super.customSubscribe()
                }
            }
        },
        1067: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.ClassicGameBase.Mlm.Brain.Sounds.extend(nge.App[nge.appNS].Mlm.Brain.SoundsExtension)
        },
        1068: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Slot = nge.App.RiverGameBase.Mlm.Brain.Slot.extend((function() {
                var e, t, a = this;
                this.canIntrigue = !0, this.quickFinishHandler = function() {
                    var e = nge.localData.get("freespin"),
                        t = nge.localData.get("slotMachine"),
                        n = this.checkStartFreespinGame(t);
                    t.slotWin && !n && (a.getWinValueTween() && a.getWinValueTween().stop(), e = nge.Lib.Money.toCoinsInt(+(e.inProgress ? e.totalWin : t.slotWin.totalWin)), a.printWin(e), nge.observer.fire("slotMachine.quickFinish.done"))
                };
                var n = function(t) {
                    nge.localData.set("origin.rows", t.data.spinResult.rows), nge.localData.set("origin.columns", t.data.spinResult.columns);
                    for (var a = t.data.spinResult.rows, n = 0; n < a.length; n++)
                        for (var s = 0; s < a[n].length; s++) a[n][s] += "_blur";
                    if (t.data.spinResult.columns = nge.Lib.Helper.rowsToColumns(a), e = !1, t.data.slotWin && t.data.slotWin.lineWinAmounts) {
                        for (a = t.data.slotWin.lineWinAmounts, n = 0; n < a.length; n++)
                            if (a[n].bonusName && "FreeSpins" === a[n].bonusName) {
                                s = a[n], a.splice(n, 1), a.splice(0, 0, s), e = !0;
                                break
                            } t.data.slotWin.lineWinAmounts = a
                    }
                    nge.localData.set("bonus.inline", e)
                };
                this.setIntrigue = function(e) {
                    nge.localData.set("slotMachineIntrigue", {
                        status: !1
                    });
                    var t = nge.brain._logicBlocksInstances.sounds;
                    if (this.canIntrigue && 0 < t.scatterSymbols.length) {
                        e = e.spinResult.columns;
                        for (var a = 0, n = 1; n < e.length && e[n].some(function(e) {
                                return -1 !== t.scatterSymbols.indexOf(e)
                            }.bind(this)); n++)
                            if (2 === ++a) {
                                nge.localData.set("slotMachineIntrigue", {
                                    status: !0,
                                    startsFrom: 3,
                                    endsFrom: 4
                                });
                                break
                            }
                    }
                }, this.printWin = function(e) {};
                var s = function(e) {
                        var a = 0;
                        nge.localData.get("freespin.inProgress") && t && (a = t), nge.observer.fire("creditsWin.setValue", e + a)
                    },
                    l = function() {
                        t = nge.Lib.Money.toCoinsInt(+nge.localData.get("slotMachine.lastResponse.totalBonusWin") || 0)
                    },
                    i = function() {
                        (t = nge.Lib.Money.toCoinsInt(+nge.localData.get("slotMachine.lastResponse.totalBonusWin") || 0)) || (t = nge.Lib.Money.toCoinsInt(+nge.localData.get("slotMachine.totalBonusWin") || 0)), t || (t = nge.Lib.Money.toCoinsInt(+nge.localData.get("slotMachine.slotWin.totalWin") || 0)), nge.localData.get("freespin.inProgress") || (t = 0)
                    };
                this.customSubscribe = function() {
                    this.super.customSubscribe(), nge.observer.add("freespin.restore", l, !1, !0), nge.observer.add("slotMachine.spinStart", i, !1, !0), nge.observer.add("cleosHeart.printWin", s, !1, !0), nge.observer.add("transportMessage.SpinResponse", n, !1, !0), nge.observer.add("transportMessage.FreeSpinResponse", n, !1, !0)
                }
            }))
        },
        1069: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.PickBonus = Class.extend((function() {
                var e = function() {
                    nge.observer.add("StatesManager.create.end", (function() {
                        var e = nge.localData.get("bonusGame");
                        nge.observer.fire("freespin.start", e.freespins, 100), nge.observer.remove("StatesManager.create.end", !1, "playStateBonusFreeSpinsRun", !0)
                    }), "playStateBonusFreeSpinsRun", !0)
                };
                this.subscribe = function() {
                    nge.observer.add("pickBonus.endGame", e, !1, !0), nge.observer.add("pickBonus.sendRequest", (function(e) {
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
        1070: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Controller = nge.App.ClassicGameBase.Mlm.Brain.Controller.extend((function() {
                this._logicBlocks.push("pickBonus")
            }))
        },
        1071: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.UI_v3 = {}
        },
        1072: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.UI_v3.Buttons = nge.App.RiverGameBase.Mlm.Brain.UI_v3.Buttons.extend(nge.App[nge.appNS].Mlm.Brain.ButtonsExtension)
        },
        1073: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.UI_v3.Sounds = nge.App.ClassicGameBase.Mlm.Brain.UI_v3.Sounds.extend(nge.App[nge.appNS].Mlm.Brain.SoundsExtension)
        },
        1074: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1075: function(e, t) {
            nge.App[nge.appNS].Tpl.PsdAliases = nge.App.RiverGameBase.Tpl.PsdAliases.extend((function() {
                this.singleton = !0, this.data = nge.Lib.Helper.mergeObjs(this.data, {
                    hT0Text0: "hT0Text0(text=SUBSTITUTES FOR ALL, font=24pt myriadprobold, fill=#ffe536, anchorX=0.5, anchorY=0.5, align=center, maxWidth=500)_text",
                    hT0Text1: "hT0Text1(text=SYMBOLS EXCEPT           , font=24pt myriadprobold, fill=#ffe536, anchorX=0.5, anchorY=0.5, align=center, maxWidth=430)_text",
                    hT0Text2: "hT0Text2(text=APPEARS ON REELS 2, 3, 4., font=24pt myriadprobold, fill=#ffe536, anchorX=0.5, anchorY=0.5, align=center, maxWidth=600)_text",
                    hT0Text31: "hT0Text31(text=EACH WINNING COMBINATION, font=24pt myriadprobold, fill=#ffe536)_text",
                    hT0Text32: "hT0Text32(text=OF BONUS ON REELS 2, 3, 4, font=24pt myriadprobold, fill=#ffe536)_text",
                    hT0Text33: "hT0Text33(text=AWARDS 8 FREE SPINS., font=24pt myriadprobold, fill=#ffe536)_text",
                    hT0Text4: "hT0Text4(text=MULTIPLE COMBINATIONS CAN OCCUR IN A SINGLE GAME. THE MAXIMUM\nNUMBERS OF SPINS AWARDED IN A SINGLE GAME IS 128. FREE GAMES ARE PLAYED\nAT THE TRIGGERING BET MULTIPLIED BY BET MULTIPLIER. JACKPOT CAN ONLY BE\nWON DURING BASE GAME WITHOUT WILD SUBSTITUTION. THE FREE SPIN BONUS IS\nPLAYED ON A DIFFERENT SET OF REELS., font=18pt myriadprobold, fill=#ffffff, anchorX=0.5, anchorY=0.5, align=center)_text",
                    hT0Text5: "hT0Text5(text=ADDITIONAL FREE SPINS CAN BE WON DURING FREE SPIN PLAY., font=18pt myriadprobold, fill=#36b6ff, anchorX=0.5, anchorY=0.5, align=center, maxWidth=1300)_text",
                    hT2Text0: "hT2Text0(text=ALL WINS PAYS LEFT TO RIGHT AND RIGHT TO LEFT, ON ADJACENT REELS STARTING\nWITH THE LEFTMOST OR RIGHTMOST REEL.\nONLY HIGHEST PAYING COMBINATION FOR EACH SYMBOL IS PAID PER SPIN., font=23pt myriadprobold, fill=#ffe536, anchorX=0.5, anchorY=0.5, align=center)_text",
                    hT2Text1: "hT2Text1(text=THERE ARE 576 WAYS TO WIN EACH DIRECTION., font=31pt myriadprobold, fill=#a03131, anchorX=0.5, anchorY=0.5, align=center)_text",
                    hT2Text2: "hT2Text2(text=MULFUNCTION VOIDS ALL PAYS AND PLAYS.\nAT THE START OF EACH SPIN, A SYMBOL IS RANDOMLY CHOSEN TO BE STACKED ON\nREELS 2, 3 AND 4., font=23pt myriadprobold, fill=#ffe536, anchorX=0.5, anchorY=0.5, align=center)_text",
                    hT2Text3: "hT2Text3(text=ALL SYMBOLS MAY BE AVAILABLE FOR STREAMING STACKS., font=23pt myriadprobold, fill=#36b6ff, anchorX=0.5, anchorY=0.5, align=center)_text",
                    rtp: "rtp(text=THE THEORETICAL AVERAGE RETURN TO PLAYER (RTP) IS %rtpValue%, class=rtpInfo, font=23pt myriadprobold, fill=#ffe536, anchorX=0.5, anchorY=0.5, align=center)_text",
                    sPFreeSpins: "sPFreeSpins(text=8, assetKey=bigWinFont, anchorX=0.5, anchorY=0.5, size=90)_bitmapText",
                    sPCombinations: "sPCombinations(text=3, assetKey=bigWinFont, anchorX=0.5, anchorY=0.5, size=90)_bitmapText",
                    sPWin: "sPWin(text=10, assetKey=bigWinFont, anchorX=1, anchorY=0.5, size=120)_bitmapText",
                    fPWin: "fPWin(text=10, assetKey=bigWinFont, anchorX=0.5, anchorY=0.45, size=200, align=center)_bitmapText",
                    rPFreeSpins: "rPFreeSpins(text=8, assetKey=bigWinFont, anchorX=0.5, anchorY=0.5, size=90)_bitmapText",
                    rPCombinations: "rPCombinations(text=3, assetKey=bigWinFont, anchorX=0.5, anchorY=0.5, size=90)_bitmapText",
                    rPWin: "rPWin(text=10, assetKey=bigWinFont, anchorX=1, anchorY=0.5, size=120)_bitmapText"
                })
            }))
        },
        1076: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1077: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Play = function() {
                var e = nge.appPath + "img/",
                    t = nge.tpl.group("insufficientFundsPopup");
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.GROUP,
                            contents: t.assets.contents
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bgAreaFreeSpins",
                            fullPath: e + "playarea/bgAreaFreeSpins.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "playareaBg",
                            fullPath: e + "playarea/playareaBg.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnFireRight",
                            fullPath: e + "playarea/bnFireRight.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnFireLeft",
                            fullPath: e + "playarea/bnFireLeft.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gnFireRight",
                            fullPath: e + "playarea/gnFireRight.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gnFireLeft",
                            fullPath: e + "playarea/gnFireLeft.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnFlagRight",
                            fullPath: e + "playarea/bnFlagRight.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnFlagLeft",
                            fullPath: e + "playarea/bnFlagLeft.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnLeaf7",
                            fullPath: e + "playarea/bnLeaf7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnLeaf6",
                            fullPath: e + "playarea/bnLeaf6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnLeaf5",
                            fullPath: e + "playarea/bnLeaf5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnLeaf4",
                            fullPath: e + "playarea/bnLeaf4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnLeaf3",
                            fullPath: e + "playarea/bnLeaf3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnLeaf2",
                            fullPath: e + "playarea/bnLeaf2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnLeaf1",
                            fullPath: e + "playarea/bnLeaf1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "flagRight",
                            fullPath: e + "playarea/flagRight.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "flagLeft",
                            fullPath: e + "playarea/flagLeft.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "leaf7",
                            fullPath: e + "playarea/leaf7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "leaf6",
                            fullPath: e + "playarea/leaf6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "leaf5",
                            fullPath: e + "playarea/leaf5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "leaf4",
                            fullPath: e + "playarea/leaf4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "leaf3",
                            fullPath: e + "playarea/leaf3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "leaf2",
                            fullPath: e + "playarea/leaf2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "leaf1",
                            fullPath: e + "playarea/leaf1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sideLogo",
                            fullPath: e + "playarea/sideLogo.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnReels6",
                            fullPath: e + "playarea/bnReels6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnReels5",
                            fullPath: e + "playarea/bnReels5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnReels4",
                            fullPath: e + "playarea/bnReels4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnReels3",
                            fullPath: e + "playarea/bnReels3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnReels2",
                            fullPath: e + "playarea/bnReels2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bnReels1",
                            fullPath: e + "playarea/bnReels1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bsReels6",
                            fullPath: e + "playarea/bsReels6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bsReels5",
                            fullPath: e + "playarea/bsReels5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bsReels4",
                            fullPath: e + "playarea/bsReels4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bsReels3",
                            fullPath: e + "playarea/bsReels3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bsReels2",
                            fullPath: e + "playarea/bsReels2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bsReels1",
                            fullPath: e + "playarea/bsReels1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels14",
                            fullPath: e + "playarea/borderReels14.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels13",
                            fullPath: e + "playarea/borderReels13.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels12",
                            fullPath: e + "playarea/borderReels12.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels11",
                            fullPath: e + "playarea/borderReels11.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels10",
                            fullPath: e + "playarea/borderReels10.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels9",
                            fullPath: e + "playarea/borderReels9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels8",
                            fullPath: e + "playarea/borderReels8.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels7",
                            fullPath: e + "playarea/borderReels7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels6",
                            fullPath: e + "playarea/borderReels6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels5",
                            fullPath: e + "playarea/borderReels5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels4",
                            fullPath: e + "playarea/borderReels4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels3",
                            fullPath: e + "playarea/borderReels3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels2",
                            fullPath: e + "playarea/borderReels2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels1",
                            fullPath: e + "playarea/borderReels1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "playareaLogo",
                            fullPath: e + "playarea/playareaLogo.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "borderReels0",
                            fullPath: e + "playarea/borderReels0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "popUpCover(scaleY=1080, scaleX=1920, class=cover)_image",
                            fullPath: e + "playarea/popUpCover(scaleY=1080, scaleX=1920, class=cover)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "finalPopupBg",
                            fullPath: e + "playarea/popupBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "fPWin",
                            fullPath: e + "playarea/fPWin.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "finalPopupText",
                            fullPath: e + "playarea/finalPopupText.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "startPopupBg",
                            fullPath: e + "playarea/popupBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPWin",
                            fullPath: e + "playarea/sPWin.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPCombinations",
                            fullPath: e + "playarea/sPCombinations.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPFreeSpins",
                            fullPath: e + "playarea/sPFreeSpins.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPTextX",
                            fullPath: e + "playarea/sPTextX.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPText6",
                            fullPath: e + "playarea/sPText6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPText5",
                            fullPath: e + "playarea/sPText5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPLine",
                            fullPath: e + "playarea/sPLine.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPLetterS",
                            fullPath: e + "playarea/sPLetterS.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPText4",
                            fullPath: e + "playarea/sPText4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPText3",
                            fullPath: e + "playarea/sPText3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPText2",
                            fullPath: e + "playarea/rPText2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sPText1",
                            fullPath: e + "playarea/sPText1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "restartPopupBg",
                            fullPath: e + "playarea/popupBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPWin",
                            fullPath: e + "playarea/rPWin.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPCombinations",
                            fullPath: e + "playarea/rPCombinations.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPFreeSpins",
                            fullPath: e + "playarea/rPFreeSpins.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPTextX",
                            fullPath: e + "playarea/rPTextX.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPText6",
                            fullPath: e + "playarea/rPText6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPText5",
                            fullPath: e + "playarea/rPText5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPLine",
                            fullPath: e + "playarea/rPLine.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPLetterS",
                            fullPath: e + "playarea/rPLetterS.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPText4",
                            fullPath: e + "playarea/rPText4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPText3",
                            fullPath: e + "playarea/rPText3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPText2",
                            fullPath: e + "playarea/rPText2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rPText1",
                            fullPath: e + "playarea/sPText1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "freespinPopupParticles",
                            fullPath: e + "playarea/freespinPopupParticles.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleBG",
                            fullPath: e + "playarea/gambleBG.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleActionBlackButtonButton(spritesX=3)_button",
                            fullPath: e + "playarea/gambleActionBlackButtonButton(spritesX=3)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "dummy1(class=buttonStyle, font=24pt)_text",
                            fullPath: e + "playarea/dummy1(class=buttonStyle, font=24pt roboto_condensed_regular)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleActionRedButtonButton(spritesX=3)_button",
                            fullPath: e + "playarea/gambleActionRedButtonButton(spritesX=3)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "dummy1(class=buttonStyle, font=24pt)_text",
                            fullPath: e + "playarea/dummy1(class=buttonStyle, font=24pt roboto_condensed_regular)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gamble-hc-4",
                            fullPath: e + "playarea/gamble-hc-4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gamble-hc-3",
                            fullPath: e + "playarea/gamble-hc-3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gamble-hc-2",
                            fullPath: e + "playarea/gamble-hc-2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gamble-hc-1",
                            fullPath: e + "playarea/gamble-hc-1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gamble-hc-0",
                            fullPath: e + "playarea/gamble-hc-0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textButtonBlack(text=Black, class=gambleText, font=bold 27pt arial, anchorX=0.5, fill=#000000, stroke=#ffffff, strokeThickness=3)_text",
                            fullPath: e + "playarea/textButtonBlack(text=Black, class=gambleText, font=bold 27pt arial, anchorX=0.5, fill=#000000, stroke=#ffffff, strokeThickness=3)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textButtonRed(text=Red, class=gambleText, font=bold 27pt arial, anchorX=0.5, fill=#c10101, stroke=#ffffff, strokeThickness=3)_text",
                            fullPath: e + "playarea/textButtonRed(text=Red, class=gambleText, font=bold 27pt arial, anchorX=0.5, fill=#c10101, stroke=#ffffff, strokeThickness=3)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textPreviousCard",
                            fullPath: e + "playarea/textPreviousCard.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleAmountCredits",
                            fullPath: e + "playarea/gambleAmountCredits.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleAmount",
                            fullPath: e + "playarea/gambleAmount.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleAmountText",
                            fullPath: e + "playarea/gambleAmountText.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleToWin",
                            fullPath: e + "playarea/gambleToWin.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleToWinText",
                            fullPath: e + "playarea/gambleToWinText.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleToWinCredits",
                            fullPath: e + "playarea/gambleToWinCredits.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleCardBig",
                            fullPath: e + "playarea/gambleCardBig.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleRed3_asset",
                            fullPath: e + "playarea/gambleRed3_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleRed2_asset",
                            fullPath: e + "playarea/gambleRed2_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleRed1_asset",
                            fullPath: e + "playarea/gambleRed1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleBlack3_asset",
                            fullPath: e + "playarea/gambleBlack3_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleBlack2_asset",
                            fullPath: e + "playarea/gambleBlack2_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleBlack1_asset",
                            fullPath: e + "playarea/gambleBlack1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleCardSmallBlack_asset",
                            fullPath: e + "playarea/gambleCardSmallBlack_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleCardSmallRed_asset",
                            fullPath: e + "playarea/gambleCardSmallRed_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleCardBigRed_asset",
                            fullPath: e + "playarea/gambleCardBigRed_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleCardBigBlack_asset",
                            fullPath: e + "playarea/gambleCardBigBlack_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleCardBig1_asset",
                            fullPath: e + "playarea/gambleCardBig1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "gambleCardBig0_asset",
                            fullPath: e + "playarea/gambleCardBig0_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winLinesCount(assetKey=winlineFont, anchorX=0.5, anchorY=0.5, size=200)_bitmapText",
                            fullPath: e + "playarea/winLinesCount(assetKey=winlineFont, anchorX=0.5, anchorY=0.5, size=200)_bitmapText.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "ui_group",
                            fullPath: e + "playarea/ui_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "jackpotPopup_group",
                            fullPath: e + "playarea/jackpotPopup_group.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            contents: t.objects.contents
                        }, {
                            type: mt.objects.GROUP,
                            name: "spinButtonTopContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "fairyButtonContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "introContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "offersContainer"
                        }, {
                            type: 0,
                            name: "jackpotPopup_group",
                            assetKey: "jackpotPopup_group",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: mt.objects.GROUP,
                            name: "jackpotStatusPanelContainer"
                        }, {
                            type: 1,
                            name: "jackpotGameContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "playareaContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "settingsSimpleContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "fullscreenContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "helpContainer",
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
                            name: "bigWinContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "playareaLogoContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 0,
                            name: "winLinesCount(assetKey=winlineFont, anchorX=0.5, anchorY=0.5, size=200)_bitmapText",
                            assetKey: "winLinesCount(assetKey=winlineFont, anchorX=0.5, anchorY=0.5, size=200)_bitmapText",
                            x: "954",
                            y: "534",
                            alpha: "1"
                        }, {
                            type: 1,
                            name: "gambleContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "assetsGamble",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "gambleCardBig0_asset",
                                    assetKey: "gambleCardBig0_asset",
                                    x: "1877",
                                    y: "24",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleCardBig1_asset",
                                    assetKey: "gambleCardBig1_asset",
                                    x: "1877",
                                    y: "24",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleCardBigBlack_asset",
                                    assetKey: "gambleCardBigBlack_asset",
                                    x: "1877",
                                    y: "24",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleCardBigRed_asset",
                                    assetKey: "gambleCardBigRed_asset",
                                    x: "1877",
                                    y: "24",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleCardSmallRed_asset",
                                    assetKey: "gambleCardSmallRed_asset",
                                    x: "1804",
                                    y: "158",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleCardSmallBlack_asset",
                                    assetKey: "gambleCardSmallBlack_asset",
                                    x: "1804",
                                    y: "158",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleBlack1_asset",
                                    assetKey: "gambleBlack1_asset",
                                    x: "165",
                                    y: "101",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleBlack2_asset",
                                    assetKey: "gambleBlack2_asset",
                                    x: "165",
                                    y: "101",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleBlack3_asset",
                                    assetKey: "gambleBlack3_asset",
                                    x: "165",
                                    y: "101",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleRed1_asset",
                                    assetKey: "gambleRed1_asset",
                                    x: "165",
                                    y: "101",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleRed2_asset",
                                    assetKey: "gambleRed2_asset",
                                    x: "165",
                                    y: "101",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleRed3_asset",
                                    assetKey: "gambleRed3_asset",
                                    x: "165",
                                    y: "101",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "gambleScreen",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "gambleCardBig",
                                    assetKey: "gambleCardBig",
                                    x: "933",
                                    y: "525",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleToWinCredits",
                                    assetKey: "gambleToWinCredits",
                                    x: "1298",
                                    y: "249",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleToWinText",
                                    assetKey: "gambleToWinText",
                                    x: "1297",
                                    y: "203",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleToWin",
                                    assetKey: "gambleToWin",
                                    x: "1298",
                                    y: "249",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleAmountText",
                                    assetKey: "gambleAmountText",
                                    x: "620",
                                    y: "203",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleAmount",
                                    assetKey: "gambleAmount",
                                    x: "620",
                                    y: "249",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gambleAmountCredits",
                                    assetKey: "gambleAmountCredits",
                                    x: "620",
                                    y: "249",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "textPreviousCard",
                                    assetKey: "textPreviousCard",
                                    x: "621",
                                    y: "365",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "textButtonRed(text=Red, class=gambleText, font=bold 27pt arial, anchorX=0.5, fill=#c10101, stroke=#ffffff, strokeThickness=3)_text",
                                    assetKey: "textButtonRed(text=Red, class=gambleText, font=bold 27pt arial, anchorX=0.5, fill=#c10101, stroke=#ffffff, strokeThickness=3)_text",
                                    x: "577",
                                    y: "660",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "textButtonBlack(text=Black, class=gambleText, font=bold 27pt arial, anchorX=0.5, fill=#000000, stroke=#ffffff, strokeThickness=3)_text",
                                    assetKey: "textButtonBlack(text=Black, class=gambleText, font=bold 27pt arial, anchorX=0.5, fill=#000000, stroke=#ffffff, strokeThickness=3)_text",
                                    x: "1343",
                                    y: "660",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gamble-hc-0",
                                    assetKey: "gamble-hc-0",
                                    x: "919",
                                    y: "422",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gamble-hc-1",
                                    assetKey: "gamble-hc-1",
                                    x: "1078",
                                    y: "421",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gamble-hc-2",
                                    assetKey: "gamble-hc-2",
                                    x: "1199",
                                    y: "423",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gamble-hc-3",
                                    assetKey: "gamble-hc-3",
                                    x: "1442",
                                    y: "393",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gamble-hc-4",
                                    assetKey: "gamble-hc-4",
                                    x: "1355",
                                    y: "396",
                                    alpha: "1"
                                }, {
                                    type: 1,
                                    name: "gambleActionRedButton",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "dummy1(class=buttonStyle, font=24pt)_text",
                                        assetKey: "dummy1(class=buttonStyle, font=24pt)_text",
                                        x: "574",
                                        y: "692",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "gambleActionRedButtonButton(spritesX=3)_button",
                                        assetKey: "gambleActionRedButtonButton(spritesX=3)_button",
                                        x: "578",
                                        y: "695",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "gambleActionBlackButton",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "dummy1(class=buttonStyle, font=24pt)_text",
                                        assetKey: "dummy1(class=buttonStyle, font=24pt)_text",
                                        x: "1340",
                                        y: "685",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "gambleActionBlackButtonButton(spritesX=3)_button",
                                        assetKey: "gambleActionBlackButtonButton(spritesX=3)_button",
                                        x: "850",
                                        y: "721",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 0,
                                    name: "gambleBG",
                                    assetKey: "gambleBG",
                                    x: "1592",
                                    y: "155",
                                    alpha: "1"
                                }]
                            }]
                        }, {
                            type: 1,
                            name: "restartPopUpContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "rPText1",
                                assetKey: "rPText1",
                                x: "-355",
                                y: "-227",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPText2",
                                assetKey: "rPText2",
                                x: "-211",
                                y: "-134",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPText3",
                                assetKey: "rPText3",
                                x: "-71",
                                y: "-34",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPText4",
                                assetKey: "rPText4",
                                x: "-72",
                                y: "38",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPLetterS",
                                assetKey: "rPLetterS",
                                x: "254",
                                y: "38",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPLine",
                                assetKey: "rPLine",
                                x: "-298",
                                y: "95",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPText5",
                                assetKey: "rPText5",
                                x: "-72",
                                y: "177",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPText6",
                                assetKey: "rPText6",
                                x: "-70",
                                y: "133",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPTextX",
                                assetKey: "rPTextX",
                                x: "-289",
                                y: "3",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPFreeSpins",
                                assetKey: "rPFreeSpins",
                                x: "-126",
                                y: "6",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPCombinations",
                                assetKey: "rPCombinations",
                                x: "-126",
                                y: "74",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "rPWin",
                                assetKey: "rPWin",
                                x: "-89",
                                y: "200",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "restartPopupBg",
                                assetKey: "restartPopupBg",
                                x: "-442",
                                y: "-314",
                                alpha: "1"
                            }]
                        }, {
                            type: 1,
                            name: "startPopupContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "sPText1",
                                assetKey: "sPText1",
                                x: "-355",
                                y: "-227",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPText2",
                                assetKey: "sPText2",
                                x: "-211",
                                y: "-134",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPText3",
                                assetKey: "sPText3",
                                x: "-71",
                                y: "-34",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPText4",
                                assetKey: "sPText4",
                                x: "-72",
                                y: "38",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPLetterS",
                                assetKey: "sPLetterS",
                                x: "254",
                                y: "38",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPLine",
                                assetKey: "sPLine",
                                x: "-298",
                                y: "95",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPText5",
                                assetKey: "sPText5",
                                x: "-73",
                                y: "121",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPText6",
                                assetKey: "sPText6",
                                x: "-72",
                                y: "177",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPTextX",
                                assetKey: "sPTextX",
                                x: "-289",
                                y: "3",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPFreeSpins",
                                assetKey: "sPFreeSpins",
                                x: "-126",
                                y: "6",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPCombinations",
                                assetKey: "sPCombinations",
                                x: "-126",
                                y: "74",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "sPWin",
                                assetKey: "sPWin",
                                x: "-89",
                                y: "195",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "startPopupBg",
                                assetKey: "startPopupBg",
                                x: "-442",
                                y: "-314",
                                alpha: "1"
                            }]
                        }, {
                            type: 1,
                            name: "finalPopupContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "finalPopupText",
                                assetKey: "finalPopupText",
                                x: "-265",
                                y: "-129",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "fPWin",
                                assetKey: "fPWin",
                                x: "-1",
                                y: "98",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "finalPopupBg",
                                assetKey: "finalPopupBg",
                                x: "-442",
                                y: "-314",
                                alpha: "1"
                            }]
                        }, {
                            type: 0,
                            name: "freespinPopupParticles",
                            assetKey: "freespinPopupParticles",
                            x: "960",
                            y: "540",
                            alpha: "1"
                        }, {
                            type: 0,
                            name: "popUpCover(scaleY=1080, scaleX=1920, class=cover)_image",
                            assetKey: "popUpCover(scaleY=1080, scaleX=1920, class=cover)_image",
                            x: "0",
                            y: "0",
                            alpha: "1"
                        }, {
                            type: 1,
                            name: "winlinesAddonContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "slotMachineContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "winlinesPointsContainer",
                                alpha: "1",
                                contents: []
                            }, {
                                type: 1,
                                name: "lineMarkersContainer",
                                alpha: "1",
                                contents: []
                            }]
                        }, {
                            type: 1,
                            name: "borderContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "borderReels0",
                                assetKey: "borderReels0",
                                x: "502",
                                y: "85",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "playareaLogo",
                                assetKey: "playareaLogo",
                                x: "695",
                                y: "25",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels1",
                                assetKey: "borderReels1",
                                x: "650",
                                y: "21",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels2",
                                assetKey: "borderReels2",
                                x: "1219",
                                y: "44",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels3",
                                assetKey: "borderReels3",
                                x: "672",
                                y: "44",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels4",
                                assetKey: "borderReels4",
                                x: "1367",
                                y: "111",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels5",
                                assetKey: "borderReels5",
                                x: "525",
                                y: "111",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels6",
                                assetKey: "borderReels6",
                                x: "233",
                                y: "181",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels7",
                                assetKey: "borderReels7",
                                x: "1368",
                                y: "181",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels8",
                                assetKey: "borderReels8",
                                x: "526",
                                y: "905",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels9",
                                assetKey: "borderReels9",
                                x: "1638",
                                y: "210",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels10",
                                assetKey: "borderReels10",
                                x: "253",
                                y: "210",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels11",
                                assetKey: "borderReels11",
                                x: "253",
                                y: "804",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels12",
                                assetKey: "borderReels12",
                                x: "1367",
                                y: "804",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels13",
                                assetKey: "borderReels13",
                                x: "1367",
                                y: "831",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "borderReels14",
                                assetKey: "borderReels14",
                                x: "523",
                                y: "817",
                                alpha: "1"
                            }]
                        }, {
                            type: 1,
                            name: "gameScreenContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "slotMachine(x=281, y=120)_container",
                                alpha: "1",
                                contents: [{
                                    type: 1,
                                    name: "slotMachineGame(width=1360, height=796)_container",
                                    alpha: "1",
                                    contents: []
                                }]
                            }]
                        }, {
                            type: 1,
                            name: "reelsContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "bsReels",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "bsReels1",
                                    assetKey: "bsReels1",
                                    x: "694",
                                    y: "40",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bsReels2",
                                    assetKey: "bsReels2",
                                    x: "281",
                                    y: "199",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bsReels3",
                                    assetKey: "bsReels3",
                                    x: "553",
                                    y: "118",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bsReels4",
                                    assetKey: "bsReels4",
                                    x: "825",
                                    y: "118",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bsReels5",
                                    assetKey: "bsReels5",
                                    x: "1097",
                                    y: "118",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bsReels6",
                                    assetKey: "bsReels6",
                                    x: "1369",
                                    y: "199",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "bnReels",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "bnReels1",
                                    assetKey: "bnReels1",
                                    x: "693",
                                    y: "41",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bnReels2",
                                    assetKey: "bnReels2",
                                    x: "281",
                                    y: "198",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bnReels3",
                                    assetKey: "bnReels3",
                                    x: "553",
                                    y: "117",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bnReels4",
                                    assetKey: "bnReels4",
                                    x: "825",
                                    y: "117",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bnReels5",
                                    assetKey: "bnReels5",
                                    x: "1097",
                                    y: "117",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bnReels6",
                                    assetKey: "bnReels6",
                                    x: "1369",
                                    y: "199",
                                    alpha: "1"
                                }]
                            }]
                        }, {
                            type: 1,
                            name: "winCounterLightContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "bgDecorContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "sideLogo",
                                assetKey: "sideLogo",
                                x: "1692",
                                y: "26",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "gnBgDecor",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "leaf1",
                                    assetKey: "leaf1",
                                    x: "0",
                                    y: "0",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "leaf2",
                                    assetKey: "leaf2",
                                    x: "0",
                                    y: "41",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "leaf3",
                                    assetKey: "leaf3",
                                    x: "1744",
                                    y: "20",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "leaf4",
                                    assetKey: "leaf4",
                                    x: "1748",
                                    y: "776",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "leaf5",
                                    assetKey: "leaf5",
                                    x: "0",
                                    y: "944",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "leaf6",
                                    assetKey: "leaf6",
                                    x: "0",
                                    y: "801",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "leaf7",
                                    assetKey: "leaf7",
                                    x: "1620",
                                    y: "0",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "flagLeft",
                                    assetKey: "flagLeft",
                                    x: "21",
                                    y: "19",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "flagRight",
                                    assetKey: "flagRight",
                                    x: "1680",
                                    y: "19",
                                    alpha: "1"
                                }]
                            }]
                        }, {
                            type: 1,
                            name: "bgFireContainer",
                            alpha: "1",
                            contents: [{
                                type: 1,
                                name: "gnFireContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "gnFireLeft",
                                    assetKey: "gnFireLeft",
                                    x: "34",
                                    y: "519",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "gnFireRight",
                                    assetKey: "gnFireRight",
                                    x: "1678",
                                    y: "525",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "bnFireContainer",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "bnFireLeft",
                                    assetKey: "bnFireLeft",
                                    x: "35",
                                    y: "528",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "bnFireRight",
                                    assetKey: "bnFireRight",
                                    x: "1666",
                                    y: "529",
                                    alpha: "1"
                                }]
                            }]
                        }, {
                            type: 1,
                            name: "bgFireParticlesContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: 1,
                            name: "playareaBgContainer",
                            alpha: "1",
                            contents: [{
                                type: 0,
                                name: "playareaBg",
                                assetKey: "playareaBg",
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
        1078: function(e, t) {
            nge.App[nge.appNS].Tpl.States.LoadAssets = function(e) {
                return e || (e = nge.appPath + "img/"), {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "popupJackpot",
                            fullPath: e + "jackpot/images/jackpotPopup.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "playareaBg",
                            fullPath: e + "playarea/playareaBg.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bgAreaFreeSpins",
                            fullPath: e + "playarea/bgAreaFreeSpins.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introPlayButton",
                            fullPath: e + "intro/introPlayButton.png",
                            frameWidth: 288
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introArrow",
                            fullPath: e + "intro/introArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introFrame",
                            fullPath: e + "intro/introFrame.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introBg",
                            fullPath: e + "intro/introBg.jpg"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1079: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1080: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = nge.appPath + "img/intro/";
                return {
                    styles: {},
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "introPlayButton",
                            fullPath: e + "introPlayButton.png",
                            frameWidth: 288
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introArrow",
                            fullPath: e + "introArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introFrame",
                            fullPath: e + "introFrame.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introBg",
                            fullPath: e + "introBg.jpg"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "introInnerContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "introPlayButton",
                                contents: [{
                                    type: mt.objects.TEXT,
                                    x: 337,
                                    y: 576,
                                    anchorX: .5,
                                    text: nge.i18n.get("KEY_INTRO_CONTENT_NEXT_TEXT_LEFT"),
                                    style: {
                                        font: '28pt "myriadprobold"',
                                        fill: "#ffff99",
                                        stroke: "#4f3c13",
                                        align: "center",
                                        strokeThickness: 6
                                    }
                                }, {
                                    type: mt.objects.TEXT,
                                    x: 960,
                                    y: 576,
                                    anchorX: .5,
                                    text: nge.i18n.get("KEY_INTRO_CONTENT_NEXT_TEXT_CENTER"),
                                    style: {
                                        font: '28pt "myriadprobold"',
                                        fill: "#ffff99",
                                        stroke: "#4f3c13",
                                        align: "center",
                                        strokeThickness: 6
                                    }
                                }, {
                                    type: mt.objects.TEXT,
                                    x: 1592,
                                    y: 576,
                                    anchorX: .5,
                                    text: nge.i18n.get("KEY_INTRO_CONTENT_NEXT_TEXT_RIGHT"),
                                    style: {
                                        font: '28pt "myriadprobold"',
                                        fill: "#ffff99",
                                        stroke: "#4f3c13",
                                        align: "center",
                                        strokeThickness: 6
                                    }
                                }, {
                                    type: mt.objects.TEXT,
                                    name: "demoPlayButtonText",
                                    x: 960,
                                    y: 910,
                                    anchorX: .5,
                                    anchorY: .5,
                                    text: nge.i18n.get("PLAY_BUTTON"),
                                    maxWidth: 180,
                                    style: {
                                        font: '38pt "futuraptheavy"',
                                        fill: "#0a2c35",
                                        stroke: "#ffe38e",
                                        strokeThickness: 2
                                    }
                                }, {
                                    type: mt.objects.BUTTON,
                                    assetKey: "introPlayButton",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 910,
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    action: 'function () { nge.observer.fire("buttons.pressCommand", "introPlayButton"); }'
                                }]
                            }, {
                                type: mt.objects.BUTTON,
                                assetKey: "areaEmpty",
                                x: 960,
                                y: 980,
                                scaleX: 400,
                                scaleY: 30,
                                alpha: 0,
                                anchorX: .5,
                                align: "center",
                                pixelPerfectClick: 0,
                                pixelPerfectOver: 0,
                                action: 'function () { nge.observer.fire("buttons.pressCommand", "autoStartCheckBox"); }'
                            }, {
                                type: mt.objects.TEXT,
                                x: 812,
                                y: 1004,
                                text: nge.i18n.get("show_next_time"),
                                align: "center",
                                anchorY: .5,
                                maxWidth: 350,
                                style: {
                                    font: '22pt "futuraptheavy"',
                                    fill: "#fdfefb"
                                }
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introArrow",
                                assetKey: "introArrow",
                                x: 760,
                                y: 983
                            }, {
                                type: mt.objects.IMAGE,
                                assetKey: "introFrame",
                                x: 760,
                                y: 983
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introBg",
                                assetKey: "introBg"
                            }]
                        }]
                    }
                }
            }
        },
        1081: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Atlases = function() {
                var e = nge.appPath + "img/atlases/",
                    t = nge.appPath + "img/",
                    a = nge.Lib.Helper.mobileAndTabletCheck();
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.ATLAS,
                            key: "jackpotsPlay0",
                            atlas: e + "jackpotsPlay0.json",
                            fullPath: e + "jackpotsPlay0.png",
                            subtype: "noPngQuant"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "symbols_fastspin0",
                            atlas: e + "symbols_fastspin0.json",
                            fullPath: e + "symbols_fastspin0.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "symbols_fastspin1",
                            atlas: e + "symbols_fastspin1.json",
                            fullPath: e + "symbols_fastspin1.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "symbols_animations00",
                            atlas: e + "symbols_animations00.json",
                            fullPath: e + "symbols_animations00.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "symbols_animations01",
                            atlas: e + "symbols_animations01.json",
                            fullPath: e + "symbols_animations01.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "symbols_animations02",
                            atlas: e + "symbols_animations02.json",
                            fullPath: e + "symbols_animations02.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "symbols_animations03",
                            atlas: e + "symbols_animations03.json",
                            fullPath: e + "symbols_animations03.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "symbols_animations04",
                            atlas: e + "symbols_animations04.json",
                            fullPath: e + "symbols_animations04.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "playArea0",
                            atlas: e + "playArea0.json",
                            fullPath: e + "playArea0.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "play_atlas_non_png",
                            atlas: e + "play_atlas_non_png.json",
                            fullPath: e + "play_atlas_non_png.png",
                            subtype: "noPngQuant"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "symbols_static0",
                            atlas: e + "symbols_static0.json",
                            fullPath: e + "symbols_static0.png",
                            subtype: "noPngQuant"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "bigWinCust",
                            atlas: e + "bigWin.json",
                            fullPath: e + "bigWin.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "bigWinCustNonPng",
                            atlas: e + "bigWinNonPng.json",
                            fullPath: e + "bigWinNonPng.png",
                            subtype: "noPngQuant"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "coins",
                            atlas: e + "coins0.json",
                            fullPath: e + "coins0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bigWinBackground",
                            fullPath: t + "bigWin/big_win_back_spin.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "blurs",
                            atlas: e + "blurs.json",
                            fullPath: e + "blurs.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "particles",
                            atlas: e + "particles.json",
                            fullPath: e + "particles.png",
                            subtype: "noPngQuant"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "ui_atlas",
                            atlas: e + (a ? "river_ui_united_mobile.json" : "river_ui_united_desktop.json"),
                            fullPath: e + (a ? "river_ui_united_mobile.png" : "river_ui_united_desktop.png"),
                            subtype: "noPngQuant"
                        }]
                    },
                    objects: {}
                }
            }
        },
        1082: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Atlases_play = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.ATLAS,
                            key: "play_atlas1",
                            atlas: e + "atlases/play/play_atlas0000.json",
                            fullPath: e + "atlases/play/play_atlas0000.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "play_atlas2",
                            atlas: e + "atlases/play/play_atlas0001.json",
                            fullPath: e + "atlases/play/play_atlas0001.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "play_atlas3",
                            atlas: e + "atlases/play/play_atlas0002.json",
                            fullPath: e + "atlases/play/play_atlas0002.png"
                        }]
                    },
                    objects: {}
                }
            }
        },
        1083: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Atlases_help = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.ATLAS,
                            key: "help_atlas1",
                            atlas: e + "atlases/help/help_atlas0000.json",
                            fullPath: e + "atlases/help/help_atlas0000.png"
                        }]
                    },
                    objects: {}
                }
            }
        },
        1084: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Help = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "helpPage2",
                            fullPath: e + "playarea/helpPage2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT2BottomBorder",
                            fullPath: e + "playarea/hT2BottomBorder.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rtp",
                            fullPath: e + "playarea/rtp.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT2Text3",
                            fullPath: e + "playarea/hT2Text3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT2Text2",
                            fullPath: e + "playarea/hT2Text2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT2Text1",
                            fullPath: e + "playarea/hT2Text1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT2Text0",
                            fullPath: e + "playarea/hT2Text0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "helpPage1",
                            fullPath: e + "playarea/helpPage1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH18",
                            fullPath: e + "playarea/contentH18.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH17",
                            fullPath: e + "playarea/contentH17.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH16",
                            fullPath: e + "playarea/contentH16.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH15",
                            fullPath: e + "playarea/contentH15.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH14",
                            fullPath: e + "playarea/contentH14.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH13",
                            fullPath: e + "playarea/contentH13.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH12",
                            fullPath: e + "playarea/contentH12.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH11",
                            fullPath: e + "playarea/contentH11.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH10",
                            fullPath: e + "playarea/contentH10.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym09ID5(class=ps9-5 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym09ID5(class=ps9-5 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym09ID4(class=ps9-4 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym09ID4(class=ps9-4 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym09ID3(class=ps9-3 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym09ID3(class=ps9-3 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym09number5(text=5, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym09number5(text=5, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym09number4(text=4, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym09number4(text=4, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym09number3(text=3, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym09number3(text=3, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym08ID5(class=ps8-5 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym08ID5(class=ps8-5 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym08ID4(class=ps8-4 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym08ID4(class=ps8-4 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym08ID3(class=ps8-3 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym08ID3(class=ps8-3 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym08number5(text=5, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym08number5(text=5, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym08number4(text=4, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym08number4(text=4, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym08number3(text=3, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym08number3(text=3, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym07ID5(class=ps7-5 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym07ID5(class=ps7-5 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym07ID4(class=ps7-4 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym07ID4(class=ps7-4 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym07ID3(class=ps7-3 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym07ID3(class=ps7-3 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym07number5(text=5, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym07number5(text=5, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym07number4(text=4, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym07number4(text=4, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym07number3(text=3, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym07number3(text=3, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym06ID5(class=ps6-5 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym06ID5(class=ps6-5 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym06ID4(class=ps6-4 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym06ID4(class=ps6-4 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym06ID3(class=ps6-3 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym06ID3(class=ps6-3 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym06number5(text=5, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym06number5(text=5, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym06number4(text=4, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym06number4(text=4, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym06number3(text=3, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym06number3(text=3, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym04ID5(class=ps5-5 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym04ID5(class=ps5-5 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym04ID4(class=ps5-4 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym04ID4(class=ps5-4 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym04ID3(class=ps5-3 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym04ID3(class=ps5-3 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym05number5(text=5, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym05number5(text=5, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym05number4(text=4, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym05number4(text=4, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym05number3(text=3, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym05number3(text=3, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym04ID5(class=ps4-5 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym04ID5(class=ps4-5 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym04ID4(class=ps4-4 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym04ID4(class=ps4-4 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym04ID3(class=ps4-3 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym04ID3(class=ps4-3 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym04number5(text=5, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym04number5(text=5, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym04number4(text=4, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym04number4(text=4, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym04number3(text=3, class=pinkTextStyle)_text",
                            fullPath: e + "playarea/sym04number3(text=3, class=pinkTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym03ID5(class=ps3-5 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym03ID5(class=ps3-5 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym03ID4(class=ps3-4 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym03ID4(class=ps3-4 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym03ID3(class=ps3-3 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym03ID3(class=ps3-3 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym03number5(text=5, class=whiteTextStyle)_text",
                            fullPath: e + "playarea/sym03number5(text=5, class=whiteTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym03number4(text=4, class=whiteTextStyle)_text",
                            fullPath: e + "playarea/sym03number4(text=4, class=whiteTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym03number3(text=3, class=whiteTextStyle)_text",
                            fullPath: e + "playarea/sym03number3(text=3, class=whiteTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym02ID5(class=ps2-5 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym02ID5(class=ps2-5 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym02ID4(class=ps2-4 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym02ID4(class=ps2-4 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym02ID3(class=ps2-3 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym02ID3(class=ps2-3 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym02number5(text=5, class=whiteTextStyle)_text",
                            fullPath: e + "playarea/sym02number5(text=5, class=whiteTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym02number4(text=4, class=whiteTextStyle)_text",
                            fullPath: e + "playarea/sym02number4(text=4, class=whiteTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym02number3(text=3, class=whiteTextStyle)_text",
                            fullPath: e + "playarea/sym02number3(text=3, class=whiteTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym01ID5(class=ps1-5 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym01ID5(class=ps1-5 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym01ID4(class=ps1-4 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym01ID4(class=ps1-4 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym01ID3(class=ps1-3 orangeTextStyle)_text",
                            fullPath: e + "playarea/sym01ID3(class=ps1-3 orangeTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym01number5(text=5, class=whiteTextStyle)_text",
                            fullPath: e + "playarea/sym01number5(text=5, class=whiteTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym01number4(text=4, class=whiteTextStyle)_text",
                            fullPath: e + "playarea/sym01number4(text=4, class=whiteTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "sym01number3(text=3, class=whiteTextStyle)_text",
                            fullPath: e + "playarea/sym01number3(text=3, class=whiteTextStyle)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "orangeTextStyle(font=24pt myriadprobold, fill=#ffbb72)_style",
                            fullPath: e + "playarea/orangeTextStyle(font=24pt myriadprobold, fill=#ffbb72)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pinkTextStyle(font=24pt myriadprobold, fill=#ff6d6d)_style",
                            fullPath: e + "playarea/pinkTextStyle(font=24pt myriadprobold, fill=#ff6d6d)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "yellowTextStyle(font=28pt myriadprobold, fill=#ffe536)_style",
                            fullPath: e + "playarea/yellowTextStyle(font=28pt myriadprobold, fill=#ffe536)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "whiteTextStyle(font=28pt myriadprobold, fill=#ffffff)_style",
                            fullPath: e + "playarea/whiteTextStyle(font=28pt myriadprobold, fill=#ffffff)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "helpPage0",
                            fullPath: e + "playarea/helpPage0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableLogo",
                            fullPath: e + "playarea/paytableLogo.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH02",
                            fullPath: e + "playarea/contentH02.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH01",
                            fullPath: e + "playarea/contentH01.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "contentH00",
                            fullPath: e + "playarea/contentH00.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT0Text5",
                            fullPath: e + "playarea/hT0Text5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT0Text4",
                            fullPath: e + "playarea/hT0Text4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT0Text33",
                            fullPath: e + "playarea/hT0Text33.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT0Text32",
                            fullPath: e + "playarea/hT0Text32.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT0Text31",
                            fullPath: e + "playarea/hT0Text31.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT0Text2",
                            fullPath: e + "playarea/hT0Text2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT0Text1",
                            fullPath: e + "playarea/hT0Text1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "hT0Text0",
                            fullPath: e + "playarea/hT0Text0.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "helpPagesContainer",
                            alpha: "1",
                            x: "50",
                            contents: [{
                                type: 1,
                                name: "helpPage0",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "hT0Text0",
                                    assetKey: "hT0Text0",
                                    x: "631",
                                    y: "379",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT0Text1",
                                    assetKey: "hT0Text1",
                                    x: "631",
                                    y: "453",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT0Text2",
                                    assetKey: "hT0Text2",
                                    x: "631",
                                    y: "526",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT0Text31",
                                    assetKey: "hT0Text31",
                                    x: "937",
                                    y: "398",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT0Text32",
                                    assetKey: "hT0Text32",
                                    x: "937",
                                    y: "438",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT0Text33",
                                    assetKey: "hT0Text33",
                                    x: "937",
                                    y: "481",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT0Text4",
                                    assetKey: "hT0Text4",
                                    x: "860",
                                    y: "656",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT0Text5",
                                    assetKey: "hT0Text5",
                                    x: "860",
                                    y: "756",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH00",
                                    assetKey: "contentH00",
                                    x: "460",
                                    y: "101",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH01",
                                    assetKey: "contentH01",
                                    x: "907",
                                    y: "90",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH02",
                                    assetKey: "contentH02",
                                    x: "739",
                                    y: "413",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "paytableLogo",
                                    assetKey: "paytableLogo",
                                    x: "348",
                                    y: "0",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "helpPage0",
                                    assetKey: "helpPage0",
                                    x: "132",
                                    y: "170",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "helpPage1",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "whiteTextStyle(font=28pt myriadprobold, fill=#ffffff)_style",
                                    assetKey: "whiteTextStyle(font=28pt myriadprobold, fill=#ffffff)_style",
                                    x: "203",
                                    y: "975",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "yellowTextStyle(font=28pt myriadprobold, fill=#ffe536)_style",
                                    assetKey: "yellowTextStyle(font=28pt myriadprobold, fill=#ffe536)_style",
                                    x: "203",
                                    y: "975",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pinkTextStyle(font=24pt myriadprobold, fill=#ff6d6d)_style",
                                    assetKey: "pinkTextStyle(font=24pt myriadprobold, fill=#ff6d6d)_style",
                                    x: "203",
                                    y: "975",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "orangeTextStyle(font=24pt myriadprobold, fill=#ffbb72)_style",
                                    assetKey: "orangeTextStyle(font=24pt myriadprobold, fill=#ffbb72)_style",
                                    x: "203",
                                    y: "975",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym01number3(text=3, class=whiteTextStyle)_text",
                                    assetKey: "sym01number3(text=3, class=whiteTextStyle)_text",
                                    x: "513",
                                    y: "1099",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym01number4(text=4, class=whiteTextStyle)_text",
                                    assetKey: "sym01number4(text=4, class=whiteTextStyle)_text",
                                    x: "513",
                                    y: "1052",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym01number5(text=5, class=whiteTextStyle)_text",
                                    assetKey: "sym01number5(text=5, class=whiteTextStyle)_text",
                                    x: "513",
                                    y: "1005",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym01ID3(class=ps1-3 orangeTextStyle)_text",
                                    assetKey: "sym01ID3(class=ps1-3 orangeTextStyle)_text",
                                    x: "571",
                                    y: "1099",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym01ID4(class=ps1-4 orangeTextStyle)_text",
                                    assetKey: "sym01ID4(class=ps1-4 orangeTextStyle)_text",
                                    x: "571",
                                    y: "1052",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym01ID5(class=ps1-5 orangeTextStyle)_text",
                                    assetKey: "sym01ID5(class=ps1-5 orangeTextStyle)_text",
                                    x: "571",
                                    y: "1005",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym02number3(text=3, class=whiteTextStyle)_text",
                                    assetKey: "sym02number3(text=3, class=whiteTextStyle)_text",
                                    x: "939",
                                    y: "1099",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym02number4(text=4, class=whiteTextStyle)_text",
                                    assetKey: "sym02number4(text=4, class=whiteTextStyle)_text",
                                    x: "939",
                                    y: "1052",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym02number5(text=5, class=whiteTextStyle)_text",
                                    assetKey: "sym02number5(text=5, class=whiteTextStyle)_text",
                                    x: "939",
                                    y: "1005",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym02ID3(class=ps2-3 orangeTextStyle)_text",
                                    assetKey: "sym02ID3(class=ps2-3 orangeTextStyle)_text",
                                    x: "997",
                                    y: "1099",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym02ID4(class=ps2-4 orangeTextStyle)_text",
                                    assetKey: "sym02ID4(class=ps2-4 orangeTextStyle)_text",
                                    x: "997",
                                    y: "1052",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym02ID5(class=ps2-5 orangeTextStyle)_text",
                                    assetKey: "sym02ID5(class=ps2-5 orangeTextStyle)_text",
                                    x: "997",
                                    y: "1005",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym03number3(text=3, class=whiteTextStyle)_text",
                                    assetKey: "sym03number3(text=3, class=whiteTextStyle)_text",
                                    x: "1363",
                                    y: "1099",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym03number4(text=4, class=whiteTextStyle)_text",
                                    assetKey: "sym03number4(text=4, class=whiteTextStyle)_text",
                                    x: "1363",
                                    y: "1052",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym03number5(text=5, class=whiteTextStyle)_text",
                                    assetKey: "sym03number5(text=5, class=whiteTextStyle)_text",
                                    x: "1363",
                                    y: "1005",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym03ID3(class=ps3-3 orangeTextStyle)_text",
                                    assetKey: "sym03ID3(class=ps3-3 orangeTextStyle)_text",
                                    x: "1421",
                                    y: "1099",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym03ID4(class=ps3-4 orangeTextStyle)_text",
                                    assetKey: "sym03ID4(class=ps3-4 orangeTextStyle)_text",
                                    x: "1421",
                                    y: "1052",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym03ID5(class=ps3-5 orangeTextStyle)_text",
                                    assetKey: "sym03ID5(class=ps3-5 orangeTextStyle)_text",
                                    x: "1421",
                                    y: "1005",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym04number3(text=3, class=pinkTextStyle)_text",
                                    assetKey: "sym04number3(text=3, class=pinkTextStyle)_text",
                                    x: "545",
                                    y: "1284",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym04number4(text=4, class=pinkTextStyle)_text",
                                    assetKey: "sym04number4(text=4, class=pinkTextStyle)_text",
                                    x: "545",
                                    y: "1243",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym04number5(text=5, class=pinkTextStyle)_text",
                                    assetKey: "sym04number5(text=5, class=pinkTextStyle)_text",
                                    x: "545",
                                    y: "1202",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym04ID3(class=ps4-3 orangeTextStyle)_text",
                                    assetKey: "sym04ID3(class=ps4-3 orangeTextStyle)_text",
                                    x: "599",
                                    y: "1284",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym04ID4(class=ps4-4 orangeTextStyle)_text",
                                    assetKey: "sym04ID4(class=ps4-4 orangeTextStyle)_text",
                                    x: "599",
                                    y: "1243",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym04ID5(class=ps4-5 orangeTextStyle)_text",
                                    assetKey: "sym04ID5(class=ps4-5 orangeTextStyle)_text",
                                    x: "599",
                                    y: "1202",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym05number3(text=3, class=pinkTextStyle)_text",
                                    assetKey: "sym05number3(text=3, class=pinkTextStyle)_text",
                                    x: "922",
                                    y: "1284",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym05number4(text=4, class=pinkTextStyle)_text",
                                    assetKey: "sym05number4(text=4, class=pinkTextStyle)_text",
                                    x: "922",
                                    y: "1243",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym05number5(text=5, class=pinkTextStyle)_text",
                                    assetKey: "sym05number5(text=5, class=pinkTextStyle)_text",
                                    x: "922",
                                    y: "1202",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym04ID3(class=ps5-3 orangeTextStyle)_text",
                                    assetKey: "sym04ID3(class=ps5-3 orangeTextStyle)_text",
                                    x: "976",
                                    y: "1284",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym04ID4(class=ps5-4 orangeTextStyle)_text",
                                    assetKey: "sym04ID4(class=ps5-4 orangeTextStyle)_text",
                                    x: "976",
                                    y: "1243",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym04ID5(class=ps5-5 orangeTextStyle)_text",
                                    assetKey: "sym04ID5(class=ps5-5 orangeTextStyle)_text",
                                    x: "976",
                                    y: "1202",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym06number3(text=3, class=pinkTextStyle)_text",
                                    assetKey: "sym06number3(text=3, class=pinkTextStyle)_text",
                                    x: "1279",
                                    y: "1284",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym06number4(text=4, class=pinkTextStyle)_text",
                                    assetKey: "sym06number4(text=4, class=pinkTextStyle)_text",
                                    x: "1279",
                                    y: "1243",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym06number5(text=5, class=pinkTextStyle)_text",
                                    assetKey: "sym06number5(text=5, class=pinkTextStyle)_text",
                                    x: "1279",
                                    y: "1202",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym06ID3(class=ps6-3 orangeTextStyle)_text",
                                    assetKey: "sym06ID3(class=ps6-3 orangeTextStyle)_text",
                                    x: "1333",
                                    y: "1284",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym06ID4(class=ps6-4 orangeTextStyle)_text",
                                    assetKey: "sym06ID4(class=ps6-4 orangeTextStyle)_text",
                                    x: "1333",
                                    y: "1243",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym06ID5(class=ps6-5 orangeTextStyle)_text",
                                    assetKey: "sym06ID5(class=ps6-5 orangeTextStyle)_text",
                                    x: "1333",
                                    y: "1202",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym07number3(text=3, class=pinkTextStyle)_text",
                                    assetKey: "sym07number3(text=3, class=pinkTextStyle)_text",
                                    x: "545",
                                    y: "1467",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym07number4(text=4, class=pinkTextStyle)_text",
                                    assetKey: "sym07number4(text=4, class=pinkTextStyle)_text",
                                    x: "545",
                                    y: "1426",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym07number5(text=5, class=pinkTextStyle)_text",
                                    assetKey: "sym07number5(text=5, class=pinkTextStyle)_text",
                                    x: "545",
                                    y: "1385",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym07ID3(class=ps7-3 orangeTextStyle)_text",
                                    assetKey: "sym07ID3(class=ps7-3 orangeTextStyle)_text",
                                    x: "599",
                                    y: "1467",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym07ID4(class=ps7-4 orangeTextStyle)_text",
                                    assetKey: "sym07ID4(class=ps7-4 orangeTextStyle)_text",
                                    x: "599",
                                    y: "1426",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym07ID5(class=ps7-5 orangeTextStyle)_text",
                                    assetKey: "sym07ID5(class=ps7-5 orangeTextStyle)_text",
                                    x: "599",
                                    y: "1385",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym08number3(text=3, class=pinkTextStyle)_text",
                                    assetKey: "sym08number3(text=3, class=pinkTextStyle)_text",
                                    x: "922",
                                    y: "1467",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym08number4(text=4, class=pinkTextStyle)_text",
                                    assetKey: "sym08number4(text=4, class=pinkTextStyle)_text",
                                    x: "922",
                                    y: "1426",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym08number5(text=5, class=pinkTextStyle)_text",
                                    assetKey: "sym08number5(text=5, class=pinkTextStyle)_text",
                                    x: "922",
                                    y: "1385",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym08ID3(class=ps8-3 orangeTextStyle)_text",
                                    assetKey: "sym08ID3(class=ps8-3 orangeTextStyle)_text",
                                    x: "976",
                                    y: "1467",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym08ID4(class=ps8-4 orangeTextStyle)_text",
                                    assetKey: "sym08ID4(class=ps8-4 orangeTextStyle)_text",
                                    x: "976",
                                    y: "1426",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym08ID5(class=ps8-5 orangeTextStyle)_text",
                                    assetKey: "sym08ID5(class=ps8-5 orangeTextStyle)_text",
                                    x: "976",
                                    y: "1385",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym09number3(text=3, class=pinkTextStyle)_text",
                                    assetKey: "sym09number3(text=3, class=pinkTextStyle)_text",
                                    x: "1279",
                                    y: "1467",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym09number4(text=4, class=pinkTextStyle)_text",
                                    assetKey: "sym09number4(text=4, class=pinkTextStyle)_text",
                                    x: "1279",
                                    y: "1426",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym09number5(text=5, class=pinkTextStyle)_text",
                                    assetKey: "sym09number5(text=5, class=pinkTextStyle)_text",
                                    x: "1279",
                                    y: "1385",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym09ID3(class=ps9-3 orangeTextStyle)_text",
                                    assetKey: "sym09ID3(class=ps9-3 orangeTextStyle)_text",
                                    x: "1333",
                                    y: "1467",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym09ID4(class=ps9-4 orangeTextStyle)_text",
                                    assetKey: "sym09ID4(class=ps9-4 orangeTextStyle)_text",
                                    x: "1333",
                                    y: "1426",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "sym09ID5(class=ps9-5 orangeTextStyle)_text",
                                    assetKey: "sym09ID5(class=ps9-5 orangeTextStyle)_text",
                                    x: "1333",
                                    y: "1385",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH10",
                                    assetKey: "contentH10",
                                    x: "216",
                                    y: "941",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH11",
                                    assetKey: "contentH11",
                                    x: "309",
                                    y: "1157",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH12",
                                    assetKey: "contentH12",
                                    x: "344",
                                    y: "1339",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH13",
                                    assetKey: "contentH13",
                                    x: "640",
                                    y: "938",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH14",
                                    assetKey: "contentH14",
                                    x: "675",
                                    y: "1155",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH15",
                                    assetKey: "contentH15",
                                    x: "701",
                                    y: "1339",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH16",
                                    assetKey: "contentH16",
                                    x: "1064",
                                    y: "941",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH17",
                                    assetKey: "contentH17",
                                    x: "1046",
                                    y: "1154",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "contentH18",
                                    assetKey: "contentH18",
                                    x: "1063",
                                    y: "1339",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "helpPage1",
                                    assetKey: "helpPage1",
                                    x: "132",
                                    y: "928",
                                    alpha: "1"
                                }]
                            }, {
                                type: 1,
                                name: "helpPage2",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "hT2Text0",
                                    assetKey: "hT2Text0",
                                    x: "861",
                                    y: "1799",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT2Text1",
                                    assetKey: "hT2Text1",
                                    x: "861",
                                    y: "1920",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT2Text2",
                                    assetKey: "hT2Text2",
                                    x: "861",
                                    y: "2039",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT2Text3",
                                    assetKey: "hT2Text3",
                                    x: "861",
                                    y: "2140",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "rtp",
                                    assetKey: "rtp",
                                    x: "861",
                                    y: "2257",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "hT2BottomBorder",
                                    assetKey: "hT2BottomBorder",
                                    x: "858",
                                    y: "2424",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "helpPage2",
                                    assetKey: "helpPage2",
                                    x: "133",
                                    y: "1686",
                                    alpha: "1"
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        7: function(e, t, a) {
            a(1017), a(1018), a(1019), a(1020), a(1021), a(1022), a(1023), a(1024), a(1025), a(1026), a(1027), a(1028), a(1029), a(1030), a(1031), a(1032), a(1033), a(1034), a(1035), a(1036), a(1037), a(1038), a(1039), a(1040), a(1041), a(1042), a(1043), a(1044), a(1045), a(1046), a(1047), a(1048), a(1049), a(1050), a(1051), a(1052), a(1053), a(1054), a(1055), a(1056), a(1057), a(1058), a(1059), a(1060), a(1061), a(1062), a(1063), a(1064), a(1065), a(1066), a(1067), a(1068), a(1069), a(1070), a(1071), a(1072), a(1073), a(1074), a(1075), a(1076), a(1077), a(1078), a(1079), a(1080), a(1081), a(1082), a(1083), a(1084)
        }
    }
]);