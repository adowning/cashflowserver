var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
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
}), "es6", "es3"), $jscomp.arrayIteratorImpl = function(e) {
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
}, $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
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
}, $jscomp.polyfill("Array.prototype.values", (function(e) {
    return e || function() {
        return $jscomp.iteratorFromArray(this, (function(e, t) {
            return t
        }))
    }
}), "es8", "es3"), (window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        1176: function(e, t) {
            nge.appNS = "RoyalFruits20", nge.App[nge.appNS] = {}
        },
        1177: function(e, t, n) {
            nge.appPath = "app/royalFruits20.19/", nge.gameCode = "318"
        },
        1178: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.DjGameBase.Run.extend((function() {
                this.linesCfg = [20], nge.App.addSysInstancesMode("SlimJackpot"), nge.App.DjGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.DjGameBase, nge.App[nge.appNS])), this.applyClassicGameBase(), this.statesReplacements.play.push("background", "popup", "miniPaytable", "bigWinUni", "shaker")
            })), nge.Cfg.Main.project = "royalFruits20", nge.Cfg.Main.title = "Royal Fruits 20", nge.Cfg.Main.gameCode = "318", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.24"
        },
        1179: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        1180: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    bs_wheel_spin_0: "game:/sounds/reel_spin",
                    reels_stop_0: "game:sounds/bs_bn_wheel_stop_0",
                    reels_stop_1: "game:sounds/bs_bn_wheel_stop_1",
                    reels_stop_2: "game:sounds/bs_bn_wheel_stop_2",
                    reels_stop_3: "game:sounds/bs_bn_wheel_stop_3",
                    reels_stop_4: "game:sounds/bs_bn_wheel_stop_4",
                    bs_background: "game:sounds/ambient_basic_game",
                    intro_sound: "game:sounds/ambient_sfx",
                    big_win: "game:/sounds/big_win",
                    big_win_start: "game:/sounds/big_win_start",
                    big_win_ending: "game:/sounds/big_win_end",
                    intro_big_win: "game:/sounds/intro_big_win",
                    hover: "game:sounds/default_hover",
                    click: "game:sounds/default_btn",
                    spin_click: "game:/sounds/button_start",
                    spin_stop: "game:/sounds/button_stop",
                    scatter_0: "game:sounds/scatter_0",
                    scatter_1: "game:sounds/scatter_1",
                    scatter_2: "game:sounds/scatter_2",
                    scatter_3: "game:sounds/scatter_3",
                    scatter_4: "game:sounds/scatter_4",
                    sr_bell: "game:sounds/bell",
                    win_regularWinHigh: "game:/sounds/sr_win_2",
                    win_regularWinMid: "game:sounds/sr_win_1",
                    win_regularWinLow: "game:sounds/sr_win_0",
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
        1181: function(e, t) {
            nge.App[nge.appNS].Cfg.Spine = nge.Cfg.Spine.extend((function() {
                this.preloadForStates = {
                    play: [{
                        spineName: "slotmachineframe",
                        animationName: "win"
                    }, {
                        spineName: "slotmachineframe",
                        animationName: "win2"
                    }, {
                        spineName: "slotmachineframe",
                        animationName: "win3"
                    }]
                }, this.preloadForEvents = []
            }))
        },
        1182: function(e, t) {
            nge.App[nge.appNS].Com = {}
        },
        1183: function(e, t) {
            nge.App[nge.appNS].Com.Autospin = {}
        },
        1184: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.View = nge.App.DjGameBase.Com.Autospin.View.extend((function() {
                this.firstPanelElementTopYOffset = -4, this.yPanelOffset = 20, this.infinityTextYOffset = 2
            }))
        },
        1185: function(e, t) {
            nge.App[nge.appNS].Com.Background = {}
        },
        1186: function(e, t) {
            nge.App[nge.appNS].Com.Background.Tpl = function() {
                return {
                    styles: {
                        ".album .bgAreaHorizontal": {
                            isVisible: !0
                        },
                        ".portrait .bgAreaHorizontal": {
                            isVisible: !1
                        },
                        ".album .bgAreaVertical": {
                            isVisible: !1
                        },
                        ".portrait .bgAreaVertical": {
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
                            type: mt.objects.IMAGE,
                            assetKey: "bgArea",
                            class: "bgArea bgAreaHorizontal",
                            name: "bgArea",
                            alignX: "center",
                            alignY: "center",
                            anchorX: .5,
                            anchorY: .5,
                            sWidth: "100%",
                            sHeight: "100%",
                            sType: "circumscribed",
                            isVisible: !1
                        }, {
                            type: mt.objects.IMAGE,
                            assetKey: "bgAreaVertical",
                            class: "bgArea bgAreaVertical",
                            name: "bgAreaVertical",
                            alignX: "center",
                            alignY: "center",
                            anchorX: .5,
                            anchorY: .5,
                            sWidth: "100%",
                            sHeight: "100%",
                            sType: "circumscribed",
                            isVisible: !1
                        }]
                    }
                }
            }
        },
        1187: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni = {}
        },
        1188: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Cfg = nge.App.DjGameBase.Com.BigWinUni.Cfg.extend((function() {
                this.cfg.followSlotName = "counter", this.cfg.loopStartFrame = 23, this.cfg.loopEndFrame = 227, this.cfg.jump2Frame = 237
            }))
        },
        1189: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Controller = nge.App.DjGameBase.Com.BigWinUni.Controller.extend((function() {
                var e = this,
                    t = this;
                this.create = function() {
                    e.super.create();
                    var t = nge.findOne("^bigWinShadowContainer");
                    (t = nge.Lib.Helper.generateImage("#080039", t, 0, 0, null, null, "bigWin_shadow")).alpha = .5, t.inputEnabled = !0, t.click = e.abort, t.tap = e.abort
                }, this.playStage2 = function() {
                    e.stopTrack(1), e.super.playStage2()
                }, this.abortOdometerExtension = function() {
                    e.stopTrack(1)
                };
                var n = function() {
                    for (var t in e.coinsEmitters) {
                        var n = e.coinsEmitters[t];
                        if (!n.on) {
                            n.start();
                            break
                        }
                    }
                };
                this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("win.big.counterComplete", (function() {
                        n()
                    })), nge.observer.add("playCoinsExplosion", (function() {
                        n()
                    }))
                }, this.subscribeToSpineEvents = function() {
                    e.mainAnim.onEvent.add((function(t, n) {
                        "start_meteor" === n.data.name ? (e.mainAnim.setAnimationByName(1, "meteorites_loop_first", !0), e.mainAnim.spine.state.getCurrent(1) && e.speedupTrack(1, .5)) : "start" === n.data.name ? e.playStage1() : "end" === n.data.name ? e.playStage2() : n.data.name.includes("speedup") && (t = +n.data.name.replace("speedup_", ""), e.mainAnim.spine.state.getCurrent(1) && e.speedupTrack(1, .5 + .05 * t))
                    }), e)
                }, this.emitterInit = function() {
                    t.coinsEmitters = nge.findAll("^bigWinEmitter")
                }
            }))
        },
        1190: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Tpl = function() {
                return {
                    styles: {
                        ".portrait .bigWinContainer": {
                            y: "38%"
                        },
                        ".album .bigWinContainer": {
                            y: "50%"
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
        1191: function(e, t) {
            nge.App[nge.appNS].Com.BuyTime = {}
        },
        1192: function(e, t) {
            nge.App[nge.appNS].Com.BuyTime.Tpl = function(e) {
                var t = nge.App.DjGameBase.Com.BuyTime.Tpl(e);
                return ["buyTimeButton"].forEach((function(e) {
                    (e = nge.Lib.Helper.customRecursiveFind("name", e, "contents", t.objects, !1, !0, !1)) && (e.y = +e.y + 18)
                })), t
            }
        },
        1193: function(e, t) {
            nge.App[nge.appNS].Com.Load = {}
        },
        1194: function(e, t) {
            nge.App[nge.appNS].Com.Load.Cfg = nge.App.DjGameBase.Com.Load.Cfg.extend((function() {
                var e = nge.appPath + "img/fonts/";
                this.fonts.rounds_black = nge.appPath + "css/fonts/rounds_black", this.bitmapFonts.orange_font = {
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
        1195: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets = {}
        },
        1196: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets.Controller = nge.App.DjGameBase.Com.LoadAssets.Controller.extend((function() {
                this.preload = function() {
                    this.super.preload(), nge.wrap.cache.checkImageKey("settingsContainerBg") || nge.wrap.load.image("settingsContainerBg", nge.Lib.Helper.create1PxPng(42, 39, 50, 240, !0))
                }
            }))
        },
        1197: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable = {}
        },
        1198: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Cfg = nge.App.DjGameBase.Com.MiniPaytable.Cfg.extend((function() {
                this.cfg.tableCoords = [
                    [{
                        x: 190,
                        y: 50.5
                    }, {
                        x: 190,
                        y: 338.5
                    }, {
                        x: 190,
                        y: 625.5
                    }],
                    [{
                        x: 500,
                        y: 50.5
                    }, {
                        x: 500,
                        y: 338.5
                    }, {
                        x: 500,
                        y: 625.5
                    }],
                    [{
                        x: 805,
                        y: 50.5
                    }, {
                        x: 805,
                        y: 338.5
                    }, {
                        x: 805,
                        y: 625.5
                    }],
                    [{
                        x: 1112,
                        y: 50.5
                    }, {
                        x: 1112,
                        y: 338.5
                    }, {
                        x: 1112,
                        y: 625.5
                    }],
                    [{
                        x: 1190,
                        y: 50.5
                    }, {
                        x: 1190,
                        y: 338.5
                    }, {
                        x: 1190,
                        y: 625.5
                    }]
                ], this.cfg.slotMachineWidth = 1536, this.cfg.slotMachineHeight = 865, this.cfg.leftContainer = {
                    name: "miniPaytableLeftContainer",
                    x: 70,
                    y: 107
                }, this.cfg.rightContainer = {
                    name: "miniPaytableRightContainer",
                    x: 333,
                    y: 107
                }, this.cfg.symbolSettings = {
                    7: {
                        selectorPostfix: "s",
                        numbers: {
                            offsetX: -5,
                            offsetY: -50,
                            hDist: 40,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 36,
                            offsetY: -50,
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
                            x: 70,
                            y: 137
                        },
                        additional: {
                            x: 75,
                            y: 175,
                            maxWidth: 310,
                            style: {
                                font: "16pt futuraptmedium",
                                fill: 16777215,
                                align: "center",
                                stroke: 4728599,
                                strokeThickness: 6
                            },
                            localizationKey: "MINI_PAYTABLE_SCATTER_DESCRIPTION"
                        }
                    },
                    0: {
                        numbers: {
                            offsetX: -5,
                            offsetY: -20,
                            hDist: 45,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 36,
                            offsetY: -20,
                            hDist: 45,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        divider: {
                            assetKey: "miniPaytableBgSeparator",
                            anchorX: .5,
                            anchorY: .5,
                            x: 70,
                            y: 120
                        },
                        additional: {
                            x: 65,
                            y: 170,
                            maxWidth: 310,
                            style: {
                                font: "14pt futuraptmedium",
                                fill: 16777215,
                                align: "center",
                                stroke: 4728599,
                                strokeThickness: 4
                            },
                            localizationKey: "MINI_PAYTABLE_WILD_DESCRIPTION"
                        }
                    },
                    other: {
                        numbers: {
                            offsetX: 0,
                            offsetY: 30,
                            hDist: 49,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 41,
                            offsetY: 30,
                            hDist: 49,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16777215
                            }
                        }
                    }
                }
            }))
        },
        1199: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.View = nge.App.DjGameBase.Com.MiniPaytable.View.extend((function() {
                var e, t, n = this;
                this.initialize = function(a) {
                    n.super.initialize(a), e = nge.findOne("^" + n.cfg.rightContainer.name, n.popupContainer), t = nge.App.getInstance("Com.SlotMachine.Cfg").get()
                }, this.generatePayTable = function(a) {
                    e.removeChildren();
                    for (var s = n.getLinesData(a), o = n.getSymbolSettings(a), i = o.selectorPostfix ? o.selectorPostfix : "", l = "7" === a ? 9 : t.mw, r = 0;
                        "7" === a ? 5 <= l : 2 <= l; l--, r++) {
                        var p = "ps" + a + i + "-" + l,
                            m = s[l];
                        m && (n.generatePaytableNumbers(l, r, o.numbers), n.generatePaytableValues(l, r, p, m, o.values)), o.divider && nge.objects.create(new nge.Mlm.Objects.Image(o.divider), e), o.additional && n.generateAdditionalText(o.additional)
                    }
                    s = 1, "s" === i ? s = nge.localData.get("lines.value") : "b" === i && (s = 2), nge.observer.fire("paytable.updatePayoutForSymbol", {
                        symbolId: a,
                        suffix: i,
                        modificator: s,
                        parent: e
                    })
                }
            }))
        },
        1200: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Tpl = function() {
                var e = nge.appPath + "img/";
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
                            fullPath: e + "playarea/miniPaytableBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "miniPaytableBgSeparator",
                            fullPath: e + "playarea/miniPaytableBgSeparator.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "miniPaytableMainContainer",
                            x: -960,
                            y: -540,
                            alignX: "center",
                            alignY: "center",
                            scaleX: 1,
                            scaleY: 1,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "miniPaytableClickableZones",
                                x: 188,
                                y: 20
                            }, {
                                type: mt.objects.GROUP,
                                name: "miniPaytablePopupContainer",
                                isVisible: !1,
                                x: 791,
                                y: 296,
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "miniPaytableRightContainer",
                                    y: 83
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
                                    assetKey: "miniPaytableBg"
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1201: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile = {}
        },
        1202: function(e, t) {
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
                        ".album .miniPaytableMainContainer": {
                            alignX: "center",
                            x: -912,
                            y: 0,
                            scaleX: .95,
                            scaleY: .95
                        },
                        ".album .miniPaytableClickableZones": {
                            x: 188,
                            y: -20
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "miniPaytableBg",
                            fullPath: e + "playarea/miniPaytableBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
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
                                contents: []
                            }, {
                                type: mt.objects.GROUP,
                                name: "miniPaytablePopupContainer",
                                isVisible: !1,
                                x: 771,
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
                                    assetKey: "miniPaytableBg"
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1203: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile.View = nge.App.DjGameBase.Com.MiniPaytable.Mobile.View.extend((function() {
                var e, t, n = this;
                this.initialize = function(a) {
                    n.super.initialize(a), e = nge.findOne("^" + n.cfg.rightContainer.name, n.popupContainer), t = nge.App.getInstance("Com.SlotMachine.Cfg").get()
                }, this.generatePayTable = function(a) {
                    e.removeChildren();
                    for (var s = n.getLinesData(a), o = n.getSymbolSettings(a), i = o.selectorPostfix ? o.selectorPostfix : "", l = "7" === a ? 9 : t.mw, r = 0;
                        "7" === a ? 5 <= l : 2 <= l; l--, r++) {
                        var p = "ps" + a + i + "-" + l,
                            m = s[l];
                        m && (n.generatePaytableNumbers(l, r, o.numbers), n.generatePaytableValues(l, r, p, m, o.values)), o.divider && nge.objects.create(new nge.Mlm.Objects.Image(o.divider), e), o.additional && n.generateAdditionalText(o.additional)
                    }
                    s = 1, "s" === i ? s = nge.localData.get("lines.value") : "b" === i && (s = 2), nge.observer.fire("paytable.updatePayoutForSymbol", {
                        symbolId: a,
                        suffix: i,
                        modificator: s,
                        parent: e
                    })
                }
            }))
        },
        1204: function(e, t) {
            nge.App[nge.appNS].Com.Popup = {}
        },
        1205: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Tpl = function(e) {
                return (e = nge.App.DjGameBase.Com.Popup.Tpl(e)).assets.contents = [], e
            }
        },
        1206: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin = {}
        },
        1207: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Cfg = nge.App.DjGameBase.Com.RegularWin.Cfg.extend((function() {
                this.params = this.super.get(), this.params.regularProfile = "hideWithDelayFast", this.params.turboProfile = "hideWithDelayFast"
            }))
        },
        1208: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Tpl = function() {
                return {
                    styles: {
                        ".portrait .regularWinContainer": {
                            y: 816
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
                            isVisible: !1,
                            x: "50%",
                            contents: [{
                                type: 7,
                                name: "regularWinCounter",
                                isVisible: !1,
                                x: 0,
                                y: -66,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "orange_font",
                                size: 120
                            }]
                        }]
                    }
                }
            }
        },
        1209: function(e, t) {
            nge.App[nge.appNS].Com.Shaker = {}
        },
        1210: function(e, t) {
            nge.App[nge.appNS].Com.Shaker.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    bigWin: {
                        shakingLayers: ["gameScreenContainer", "reelsBgShakeContainer", "backgroundContainer"],
                        time: 3e3,
                        startEvents: ["win.big.preWinEvent"],
                        stopEvents: !1,
                        scaleWorld: !1,
                        moveWorld: !1
                    }
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1211: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar = {}
        },
        1212: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile = {}
        },
        1213: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.Cfg = nge.App.DjGameBase.Com.Sidebar.Mobile.Cfg.extend((function() {
                var e = this;
                this.paytablePayoutsVariables = [e.getPayoutItem("page0image0", "0", [5, 4, 3]), e.getPayoutItem("page0image2", "1", [5, 4, 3]), e.getPayoutItem("page0image3", "2", [5, 4, 3]), e.getPayoutItem("page0image4", "3", [5, 4, 3]), e.getPayoutItem("page0image5", "4", [5, 4, 3]), e.getPayoutItem("page0image7", "5", [5, 4, 3]), e.getPayoutItem("page0image6", "6", [5, 4, 3]), e.getPayoutItem("page0image1", "7s", [9, 8, 7, 6, 5])], this.paytableFeaturesVariables = [e.paytableFeatureItem("0", "Wild Symbol", nge.i18n.get("WILD_DESCRIPTION")), e.paytableFeatureItem("7", "Scatter symbol", nge.i18n.get("SCATTER_DESCRIPTION"))], this.rulesVariables = [{
                    text: nge.i18n.get("The_paytable_always")
                }], this.fillPaytableHtmlBlocks = function(t) {
                    e.pushPaytableHtmlBlock(t, "0", [5, 4, 3, 2]), e.pushPaytableHtmlBlock(t, "1", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "2", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "3", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "4", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "5", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "6", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "7s", [9, 8, 7, 6, 5])
                }
            }))
        },
        1214: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1215: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.DjGameBase.Com.SlotMachine.Cfg.extend((function() {
                this.params.additionalBlurs = !1, this.params.mw = 5, this.params.mh = 3, this.params.wildSymbol = "0", this.params.tintDark = 9853273, this.params.tintNormal = 16777215, this.params.tintDarkAlpha = 1, this.params.tintNormalAlpha = 1, this.params.imageHeight = "original", this.params.imageWidth = "original", this.params.tweenDuration.blur = 85, this.params.th = [3, 3, 3, 3, 3], this.params.tweenDuration.oldSymbols = 138, this.params.tweenDuration.newSymbols = 138, this.params.symbolsBlurKeys = "100 101 102 103 104 105 106 107".split(" "), this.params.symbolAnimationContainerName = "slotMachineSymbolWinContainer", this.params.recyclerView.enabled = !0, this.params.recyclerView.reelsStopCounterBase = [8, 12, 16, 20, 24], this.params.recyclerView.reelsStopCounterBonus = [8, 12, 16, 20, 24], this.params.recyclerView.reelsStopCounter = [8, 12, 16, 20, 24], this.params.recyclerView.reelsSpeed = [1.5, 1.5, 1.5, 1.5, 1.5], this.params.recyclerView.reelsSpeedUpSpeed = 5, this.params.recyclerView.reelsIntrigueSpeed = 2, this.params.recyclerView.hideBorderSymbols = !1, this.params.recyclerView.borderSymbolsCount = 1, this.params.symbolsLanding = [{
                    symbol: "7",
                    assetKey: "m07_000",
                    animationName: "landing"
                }]
            }))
        },
        1216: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.DjGameBase.Com.SlotMachine.Controller.extend((function() {
                var e, t = this,
                    n = 0;
                this.create = function() {
                    t.super.create(), n = 0, (e = nge.findOne("^slotmachineframe")).setAnimationByName(0, "win2", !0)
                };
                var a = function() {
                        e.setAnimationByName(0, "win"), e.onComplete.addOnce((function() {
                            e.setAnimationByName(0, "win3", !0)
                        }))
                    },
                    s = function() {
                        n = 0, e.stop(), e.setAnimationByName(0, "win2", !0)
                    },
                    o = function(e) {
                        e = e.spinResult.columns;
                        for (var t = [], a = 0; a < e.length; a++) {
                            for (var s = 0, o = 0; o < e[a].length; o++) "7" === e[a][o] && (s++, n++);
                            0 !== s && (3 > a || 3 === a && (1 < n || 1 < s) || 4 === a && 5 <= n) && t.push(a)
                        }
                        nge.localData.set("scatterReels", t)
                    };
                this.customSubscribe = function() {
                    t.super.customSubscribe(), nge.observer.add("winlines.showAll", a), nge.observer.add("slotMachine.spinCommand", s), nge.observer.add("slotMachine.spinResponse", o)
                }
            }))
        },
        1217: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerReel = nge.App.DjGameBase.Com.SlotMachine.RecyclerReel.extend((function() {
                this.jumpDistance = 100, this.jumpTimeUp = 200, this.jumpTimeDown = 75
            }))
        },
        1218: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerView = nge.App.DjGameBase.Com.SlotMachine.RecyclerView.extend((function() {
                this.isPassAdditionalLandingRule = function(e, t) {
                    return -1 < nge.localData.get("scatterReels").indexOf(e)
                }
            }))
        },
        1219: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol = nge.App.DjGameBase.Com.SlotMachine.Symbol.extend((function() {
                this.animateSymbolLanding = function(e, t, n) {
                    this.super.animateSymbolLanding(e, t, !1)
                }
            }))
        },
        1220: function(e, t) {
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
                }]
            }))
        },
        1221: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Tpl = function() {
                var e = nge.Lib.Helper.mobileAndTabletCheck();
                return {
                    styles: {
                        ".portrait .winlinesContainer": {
                            x: 0,
                            y: -35
                        },
                        ".album .winlinesContainer": {
                            x: 0,
                            y: -35
                        },
                        ".portrait .slotMachineContainer": {
                            x: 0,
                            y: 460,
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
                        ".portrait .slotMachineFrameAnimationContainer": {
                            x: 0,
                            y: 460 * .64 + 47,
                            alignY: "top",
                            scaleX: .64,
                            scaleY: .64
                        },
                        ".album .slotMachineFrameAnimationContainer": {
                            x: 0,
                            y: e ? -30 : 0,
                            alignY: "center",
                            scaleX: e ? .95 : 1,
                            scaleY: e ? .95 : 1
                        },
                        ".portrait .slotMachineContentContainer": {
                            x: -614.4,
                            y: 0,
                            scaleX: .64,
                            scaleY: .64
                        },
                        ".album .slotMachineContentContainer": {
                            x: -1920 * (e ? .95 : 1) / 2,
                            y: 0,
                            scaleX: e ? .95 : 1,
                            scaleY: e ? .95 : 1
                        },
                        ".portrait .slotMachineSymbolWinContainer": {
                            x: 192,
                            y: 47
                        },
                        ".album .slotMachineSymbolWinContainer": {
                            x: 192,
                            y: 47
                        },
                        ".portrait .slotMachineGameContainer": {
                            x: 192,
                            y: 47
                        },
                        ".album .slotMachineGameContainer": {
                            x: 192,
                            y: 47
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
                            name: "slotMachineFrameAnimationContainer",
                            class: "slotMachineFrameAnimationContainer",
                            contents: [{
                                type: mt.objects.SPINE,
                                name: "slotmachineframe",
                                assetKey: "slotmachineframe",
                                anchorX: .5,
                                anchorY: .5,
                                x: 0,
                                y: 0,
                                isVisible: !1
                            }]
                        }, {
                            type: 1,
                            name: "slotMachineContentContainer",
                            class: "slotMachineContentContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "slotMachineSymbolWinContainer",
                                class: "slotMachineSymbolWinContainer"
                            }, {
                                type: mt.objects.GROUP,
                                name: "winlinesContainer",
                                class: "winlinesContainer"
                            }, {
                                type: mt.objects.GROUP,
                                id: "slotMachineGameContainer",
                                name: "slotMachineGameContainer",
                                class: "slotMachineGameContainer",
                                width: 1536,
                                height: 882
                            }]
                        }]
                    }
                }
            }
        },
        1222: function(e, t) {
            nge.App[nge.appNS].Com.Winlines = {}
        },
        1223: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Cfg = nge.App.ClassicGameBase.Com.Winlines.Cfg.extend((function() {
                this.linesType = "chunk_lines", this.linesContainerName = "winlinesContainer", this.animationOneByOneDuration = this.animationAllDuration = 1e3, this.subcycles = 1, this.symbolSpineModeAll = nge.spine.LOOP, this.symbolSpineModeBonus = this.symbolSpineModeByOne = nge.spine.FREEZE, this.lineElements = {
                    starter: {
                        name: "winlines",
                        objs: null,
                        x: [265],
                        y: [236, 523, 808],
                        scaleX: .47,
                        scaleY: 1,
                        angle: 0
                    },
                    line: {
                        name: "winlines",
                        objs: null,
                        x: [500, 808, 1116, 1424],
                        y: [235, 522, 809],
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
                        x: [1657],
                        y: [236, 523, 808],
                        scaleX: .47,
                        scaleY: 1,
                        angle: 0
                    }
                }
            }))
        },
        1224: function(e, t) {
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
        1225: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
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
        1226: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText = {}
        },
        1227: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Controller = nge.App.DjGameBase.Com.WinlinesText.Controller.extend((function() {
                var e = this;
                this.onLineHighlightStart = function(t) {
                    if ("big" !== nge.localData.get("win.winType")) {
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
                            for (e.container.visible = !0, s = 0; s < e.lineWins.length; s++) e.lineWins[s].visible = s === n, e.lineWins[s].alpha = 1, e.lineWins[s].visible && (e.lineWins[s].x = 350 * (a - 2));
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
        1228: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Tpl = function() {
                var e = nge.Lib.Helper.mobileAndTabletCheck();
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    styles: {
                        ".portrait .winlinesTextContainer": {
                            y: 460
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
                            y: 70,
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
                                y: 130,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "orange_font",
                                size: 90
                            }, {
                                type: 7,
                                name: "lineWinAmount1",
                                isVisible: !1,
                                x: 0,
                                y: 430,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "orange_font",
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
                                assetKey: "orange_font",
                                size: 90
                            }]
                        }]
                    }
                }
            }
        },
        1229: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1230: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1231: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = new nge.App.DjGameBase.Tpl.Groups.Intro,
                    t = nge.Lib.Helper.tplObjFind(e, "demoPlayButtonText");
                return t.style.fill = 1980215, t.style.stroke = 14329662, t.style.strokeThickness = 4, t.y = 2, nge.Lib.Helper.tplSetContainerContents(e, "introUniqueContent", [{
                    type: mt.objects.TEXT,
                    name: "introScreenTextCenter",
                    text: nge.i18n.get("ROYAL_FRUITS_20"),
                    anchorX: .5,
                    anchorY: .5,
                    x: 0,
                    y: 655,
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
        1232: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Ui(),
                    t = e.objects.contents[0];
                return delete t.anchorX, delete t.anchorY, t.alignX = "center", t.alignY = "center", t.x = 0, t.y = 440, e.styles[".titleButtonStyle"].style.font = "26pt futuraptheavy", e.styles[".titleButtonStyle"].style.fill = 1980215, e.styles[".titleButtonStyle"].style.stroke = 14329662, e.styles[".titleButtonStyle"].style.strokeThickness = 4, e.styles[".titleButtonStyle"].style.lineHeight = 33, ["coinPlusButton", "betPlusButton", "coinMinusButton", "betMinusButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) - 1)
                })), ["UICointainer"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) + 20)
                })), ["autoButtonText", "turboModeUIButtonText"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) + 5), t.maxWidth = 120
                })), e
            }
        },
        1233: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Help = function() {
                var e = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    t = {
                        font: "30pt futuraptmedium",
                        fill: 16696173
                    },
                    n = {
                        font: "30pt futuraptmedium",
                        fill: 16777215
                    },
                    a = {
                        font: "20pt futuraptheavy",
                        fill: 15327167
                    },
                    s = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "infoNextButton",
                            fullPath: s + "playarea/infoNextButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "pageInfoPlate",
                            fullPath: s + "playarea/pageInfoPlate.png",
                            frameHeight: 40
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "nameBg1",
                            fullPath: s + "playarea/nameBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image0",
                            fullPath: s + "playarea/page0image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image1",
                            fullPath: s + "playarea/page0image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image2",
                            fullPath: s + "playarea/page0image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image3",
                            fullPath: s + "playarea/page0image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image4",
                            fullPath: s + "playarea/page0image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image5",
                            fullPath: s + "playarea/page0image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image6",
                            fullPath: s + "playarea/page0image6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image7",
                            fullPath: s + "playarea/page0image7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image0",
                            fullPath: s + "playarea/page2image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image1",
                            fullPath: s + "playarea/page2image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image2",
                            fullPath: s + "playarea/page2image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image3",
                            fullPath: s + "playarea/page2image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image4",
                            fullPath: s + "playarea/page2image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image5",
                            fullPath: s + "playarea/page2image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image6",
                            fullPath: s + "playarea/page2image6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image7",
                            fullPath: s + "playarea/page2image7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image8",
                            fullPath: s + "playarea/page2image8.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image9",
                            fullPath: s + "playarea/page2image9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image10",
                            fullPath: s + "playarea/page2image10.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image11",
                            fullPath: s + "playarea/page2image11.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image12",
                            fullPath: s + "playarea/page2image12.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image13",
                            fullPath: s + "playarea/page2image13.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image14",
                            fullPath: s + "playarea/page2image14.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image15",
                            fullPath: s + "playarea/page2image15.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image16",
                            fullPath: s + "playarea/page2image16.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image17",
                            fullPath: s + "playarea/page2image17.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image18",
                            fullPath: s + "playarea/page2image18.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image19",
                            fullPath: s + "playarea/page2image19.png"
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
                                        type: mt.objects.IMAGE,
                                        name: "page0image0Wild",
                                        assetKey: "page0image0",
                                        x: 700,
                                        y: 110
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image1Scatter",
                                        assetKey: "page0image1",
                                        x: 698,
                                        y: 540
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image2Strawberry",
                                        assetKey: "page0image2",
                                        x: 160,
                                        y: 105
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image3Plum",
                                        assetKey: "page0image3",
                                        x: 160,
                                        y: 632
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image4Watermelon",
                                        assetKey: "page0image4",
                                        x: 160,
                                        y: 364
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image5Lemon",
                                        assetKey: "page0image5",
                                        x: 1250,
                                        y: 98
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image7Orange",
                                        assetKey: "page0image7",
                                        x: 1250,
                                        y: 367
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image6Cherry",
                                        assetKey: "page0image6",
                                        x: 1245,
                                        y: 614
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "ScatterText",
                                        text: "PAYTABLE_SCATTER_DESCRIPTION",
                                        style: {
                                            font: "24pt futuraptmedium",
                                            fill: 16777215,
                                            align: "center",
                                            lineHeight: 40
                                        },
                                        x: 970,
                                        y: 860,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 9,
                                        style: t,
                                        x: 1023,
                                        y: 581,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 8,
                                        style: t,
                                        x: 1023,
                                        y: 635,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 7,
                                        style: t,
                                        x: 1023,
                                        y: 689,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 6,
                                        style: t,
                                        x: 1023,
                                        y: 743,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1023,
                                        y: 797,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "WildText",
                                        text: "PAYTABLE_WILD_DESCRIPTION",
                                        style: {
                                            font: "24pt futuraptmedium",
                                            fill: 16777215,
                                            align: "center",
                                            lineHeight: 40
                                        },
                                        x: 960,
                                        y: 485,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img0Wild",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1023,
                                        y: 246,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img0Wild",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1023,
                                        y: 297,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img0Wild",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1023,
                                        y: 352,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img2Strawberry",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 468,
                                        y: 187,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img2Strawberry",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 468,
                                        y: 239,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img2Strawberry",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 468,
                                        y: 294,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img3Plum",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 468,
                                        y: 454,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img3Plum",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 468,
                                        y: 505,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img3Plum",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 468,
                                        y: 559,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img4Watermelon",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 468,
                                        y: 720,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img4Watermelon",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 468,
                                        y: 772,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img4Watermelon",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 468,
                                        y: 824,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img5Lemon",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1573,
                                        y: 187,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img5Lemon",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1573,
                                        y: 239,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img5Lemon",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1573,
                                        y: 294,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img6Cherry",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1573,
                                        y: 454,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img6Cherry",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1573,
                                        y: 505,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img6Cherry",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1573,
                                        y: 559,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img7Orange",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1573,
                                        y: 720,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img7Orange",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1573,
                                        y: 772,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img7Orange",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1573,
                                        y: 824,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter3img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-9",
                                        style: n,
                                        x: 1058,
                                        y: 581,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter3img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-8",
                                        style: n,
                                        x: 1058,
                                        y: 635,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter4img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-7",
                                        style: n,
                                        x: 1058,
                                        y: 689,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter5img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-6",
                                        style: n,
                                        x: 1058,
                                        y: 743,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter5img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-5",
                                        style: n,
                                        x: 1058,
                                        y: 797,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableWild5img1",
                                        type: mt.objects.TEXT,
                                        class: "ps0-5",
                                        style: n,
                                        x: 1058,
                                        y: 246,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableWild4img1",
                                        type: mt.objects.TEXT,
                                        class: "ps0-4",
                                        style: n,
                                        x: 1058,
                                        y: 297,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableWild3img1",
                                        type: mt.objects.TEXT,
                                        class: "ps0-3",
                                        style: n,
                                        x: 1058,
                                        y: 352,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableStrawberry5",
                                        type: mt.objects.TEXT,
                                        class: "ps1-5",
                                        style: n,
                                        x: 503,
                                        y: 187,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableStrawberry4",
                                        type: mt.objects.TEXT,
                                        class: "ps1-4",
                                        style: n,
                                        x: 503,
                                        y: 239,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableStrawberry3",
                                        type: mt.objects.TEXT,
                                        class: "ps1-3",
                                        style: n,
                                        x: 503,
                                        y: 294,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable3Plum5",
                                        type: mt.objects.TEXT,
                                        class: "ps2-5",
                                        style: n,
                                        x: 503,
                                        y: 454,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable3Plum4",
                                        type: mt.objects.TEXT,
                                        class: "ps2-4",
                                        style: n,
                                        x: 503,
                                        y: 505,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable3Plum3",
                                        type: mt.objects.TEXT,
                                        class: "ps2-3",
                                        style: n,
                                        x: 503,
                                        y: 559,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable2Watermelon5",
                                        type: mt.objects.TEXT,
                                        class: "ps3-5",
                                        style: n,
                                        x: 503,
                                        y: 720,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable2Watermelon4",
                                        type: mt.objects.TEXT,
                                        class: "ps3-4",
                                        style: n,
                                        x: 503,
                                        y: 772,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable2Watermelon3",
                                        type: mt.objects.TEXT,
                                        class: "ps3-3",
                                        style: n,
                                        x: 503,
                                        y: 824,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Lemon5",
                                        type: mt.objects.TEXT,
                                        class: "ps4-5",
                                        style: n,
                                        x: 1609,
                                        y: 187,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Lemon4",
                                        type: mt.objects.TEXT,
                                        class: "ps4-4",
                                        style: n,
                                        x: 1609,
                                        y: 239,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Lemon3",
                                        type: mt.objects.TEXT,
                                        class: "ps4-3",
                                        style: n,
                                        x: 1609,
                                        y: 294,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Cherry5",
                                        type: mt.objects.TEXT,
                                        class: "ps5-5",
                                        style: n,
                                        x: 1609,
                                        y: 454,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Cherry4",
                                        type: mt.objects.TEXT,
                                        class: "ps5-4",
                                        style: n,
                                        x: 1609,
                                        y: 505,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Cherry3",
                                        type: mt.objects.TEXT,
                                        class: "ps5-3",
                                        style: n,
                                        x: 1609,
                                        y: 559,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Orange5",
                                        type: mt.objects.TEXT,
                                        class: "ps6-5",
                                        style: n,
                                        x: 1609,
                                        y: 720,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Orange4",
                                        type: mt.objects.TEXT,
                                        class: "ps6-4",
                                        style: n,
                                        x: 1609,
                                        y: 772,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Orange3",
                                        type: mt.objects.TEXT,
                                        class: "ps6-3",
                                        style: n,
                                        x: 1609,
                                        y: 824,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1Container",
                                    contents: [{
                                        name: "rulesNameText",
                                        type: mt.objects.TEXT,
                                        text: "RULES_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "rulesText",
                                        type: mt.objects.TEXT,
                                        text: "The_paytable_always",
                                        style: {
                                            font: "36pt futuraptmedium",
                                            fill: 16777215,
                                            align: "center",
                                            lineHeight: 50
                                        },
                                        x: 960,
                                        y: 500,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextRU",
                                        text: nge.i18n.get("rtpRU"),
                                        class: "rtpInfo",
                                        style: {
                                            font: "36pt futuraptmedium",
                                            fill: 16777215,
                                            align: "center"
                                        },
                                        x: 960,
                                        y: 750,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextEN",
                                        text: nge.i18n.get("rtpEN"),
                                        class: "rtpInfo",
                                        style: {
                                            font: "36pt futuraptmedium",
                                            fill: 16777215,
                                            align: "center"
                                        },
                                        x: 960,
                                        y: 700,
                                        anchorX: .5,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2Container",
                                    contents: [{
                                        name: "paylineNameText",
                                        type: mt.objects.TEXT,
                                        text: "PAYLINE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image0",
                                        assetKey: "page2image0",
                                        x: 290,
                                        y: 132
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image1",
                                        assetKey: "page2image1",
                                        x: 577,
                                        y: 132
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image2",
                                        assetKey: "page2image2",
                                        x: 864,
                                        y: 132
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image3",
                                        assetKey: "page2image3",
                                        x: 1150,
                                        y: 132
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image4",
                                        assetKey: "page2image4",
                                        x: 1436,
                                        y: 132
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image5",
                                        assetKey: "page2image5",
                                        x: 290,
                                        y: 341
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image6",
                                        assetKey: "page2image6",
                                        x: 577,
                                        y: 341
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image7",
                                        assetKey: "page2image7",
                                        x: 864,
                                        y: 341
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image8",
                                        assetKey: "page2image8",
                                        x: 1150,
                                        y: 341
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image9",
                                        assetKey: "page2image9",
                                        x: 1436,
                                        y: 341
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image10",
                                        assetKey: "page2image10",
                                        x: 290,
                                        y: 549
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image11",
                                        assetKey: "page2image11",
                                        x: 577,
                                        y: 549
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image12",
                                        assetKey: "page2image12",
                                        x: 864,
                                        y: 549
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image13",
                                        assetKey: "page2image13",
                                        x: 1150,
                                        y: 549
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image14",
                                        assetKey: "page2image14",
                                        x: 1436,
                                        y: 549
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image15",
                                        assetKey: "page2image15",
                                        x: 290,
                                        y: 757
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image16",
                                        assetKey: "page2image16",
                                        x: 577,
                                        y: 757
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image17",
                                        assetKey: "page2image17",
                                        x: 864,
                                        y: 757
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image18",
                                        assetKey: "page2image18",
                                        x: 1150,
                                        y: 757
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image19",
                                        assetKey: "page2image19",
                                        x: 1436,
                                        y: 757
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber1",
                                        text: 1,
                                        style: a,
                                        x: 285,
                                        y: 141,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber2",
                                        text: 2,
                                        style: a,
                                        x: 570,
                                        y: 141,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: 3,
                                        style: a,
                                        x: 858,
                                        y: 141,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: 4,
                                        style: a,
                                        x: 1143,
                                        y: 141,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: 5,
                                        style: a,
                                        x: 1430,
                                        y: 141,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber6",
                                        text: 6,
                                        style: a,
                                        x: 285,
                                        y: 350,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber7",
                                        text: 7,
                                        style: a,
                                        x: 570,
                                        y: 350,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber8",
                                        text: 8,
                                        style: a,
                                        x: 858,
                                        y: 350,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber9",
                                        text: 9,
                                        style: a,
                                        x: 1143,
                                        y: 350,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber10",
                                        text: 10,
                                        style: a,
                                        x: 1430,
                                        y: 350,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber11",
                                        text: 11,
                                        style: a,
                                        x: 285,
                                        y: 559,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber12",
                                        text: 12,
                                        style: a,
                                        x: 570,
                                        y: 559,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber13",
                                        text: 13,
                                        style: a,
                                        x: 858,
                                        y: 559,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber14",
                                        text: 14,
                                        style: a,
                                        x: 1143,
                                        y: 559,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber15",
                                        text: 15,
                                        style: a,
                                        x: 1430,
                                        y: 559,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber16",
                                        text: 16,
                                        style: a,
                                        x: 285,
                                        y: 767,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber17",
                                        text: 17,
                                        style: a,
                                        x: 570,
                                        y: 767,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber18",
                                        text: 18,
                                        style: a,
                                        x: 858,
                                        y: 767,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber19",
                                        text: 19,
                                        style: a,
                                        x: 1143,
                                        y: 767,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber20",
                                        text: 20,
                                        style: a,
                                        x: 1430,
                                        y: 767,
                                        anchorX: 1,
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
                                    x: 890,
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
                                    x: 940,
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
                                    x: 990,
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
        1234: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Tabs = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Tabs();
                return ["mobileBackToGameButtonButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = +t.y + 20)
                })), e
            }
        },
        1235: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile = {}
        },
        1236: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Help = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "1px_empty",
                            fullPath: e + "1px_empty.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "fake_end_px",
                            fullPath: e + "1px_empty.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "infoMobileNextButton",
                            fullPath: e + "playarea/1px_empty.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "pageInfoPlate",
                            fullPath: e + "playarea/1px_empty.png",
                            frameHeight: 40
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "nameBg1",
                            fullPath: e + "playarea/1px_empty.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image0",
                            fullPath: e + "playarea/page0image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image1",
                            fullPath: e + "playarea/page0image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image2",
                            fullPath: e + "playarea/page0image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image3",
                            fullPath: e + "playarea/page0image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image4",
                            fullPath: e + "playarea/page0image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image5",
                            fullPath: e + "playarea/page0image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image6",
                            fullPath: e + "playarea/page0image6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image7",
                            fullPath: e + "playarea/page0image7.png"
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
                            }, {
                                type: mt.objects.IMAGE,
                                name: "1px_empty",
                                assetKey: "1px_empty"
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
                                    x: 890,
                                    y: 910
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoTwoPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 940,
                                    y: 910
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoThreePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 990,
                                    y: 910
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
        1237: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Intro = function() {
                var e = new nge.App.DjGameBase.Tpl.Groups.Mobile.Intro;
                e.styles[".album .introScreenTextCenter"] = {
                    alignY: "bottom",
                    y: -440,
                    maxWidth: 1400
                }, e.styles[".portrait .introScreenTextCenter"] = {
                    alignY: "bottom",
                    y: -500,
                    maxWidth: 1050
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
                    class: "introScreenTextCenter",
                    text: nge.i18n.get("ROYAL_FRUITS_20"),
                    anchorX: .5,
                    anchorY: .5,
                    x: 0,
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
                }]);
                var t = nge.Lib.Helper.tplObjFind(e, "introScreenBackgroundVerticalContainer");
                return t.alignY = .43, t.class = "introScreenBackgroundConintroScreenBackgroundVerticalContainertainer", t.contents = [{
                    type: mt.objects.IMAGE,
                    name: "introScreenBgVertical",
                    class: "introScreenBg introScreenBgVertical",
                    assetKey: "introScreenBgVertical",
                    sWidth: "100%",
                    sHeight: "100%",
                    x: 0,
                    y: 0,
                    anchorX: .5,
                    anchorY: .43,
                    sType: "circumscribed",
                    inputEnabled: !0
                }], e
            }
        },
        1238: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Mobile.Ui();
                return e.styles[".titleStyleMobile"].style.fill = 16764490, e.styles[".freeSpinAmountStyle"].style.fill = 6684577, e.styles[".freeSpinAmountStyle"].style.font = "24pt futuraptmedium", e
            }
        },
        1239: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1240: function(e, t) {
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
                            frameWidth: 560
                        } : {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "demoPlayButton",
                            fullPath: e + "playarea/demoPlayButton.png",
                            frameWidth: 288
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
        1241: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Play = function() {
                var e = nge.Lib.Helper.mobileAndTabletCheck(),
                    t = nge.appPath + "img/",
                    n = new nge.App.DjGameBase.Tpl.States.Play;
                return n.styles = nge.Lib.Helper.mergeObjs(n.styles, {
                    ".album .reelsBorderContainer": {
                        y: -5
                    },
                    ".portrait .reelsBorderContainer": {
                        y: 460
                    },
                    ".album .reelsBgScaleContainer": {
                        scaleX: e ? .95 : 1,
                        scaleY: e ? .95 : 1
                    },
                    ".portrait .reelsBgScaleContainer": {
                        scaleX: .64,
                        scaleY: .64
                    },
                    ".album .slotMachineFrameContainer": {
                        alignX: "center",
                        alignY: "center"
                    },
                    ".portrait .slotMachineFrameContainer": {
                        alignX: "center",
                        alignY: "top"
                    },
                    ".album .slotMachineFrameMainGame": {
                        x: -960 * (e ? .95 : 1),
                        y: -540,
                        scaleX: e ? .95 : 1,
                        scaleY: e ? .95 : 1
                    },
                    ".portrait .slotMachineFrameMainGame": {
                        x: -614.4,
                        y: 460,
                        scaleX: .64,
                        scaleY: .64
                    }
                }), n.assets.contents.push({
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "logo",
                    fullPath: t + "playarea/logo.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameBottom",
                    fullPath: t + "playarea/slotMachineFrameBottom.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameLeft",
                    fullPath: t + "playarea/slotMachineFrameLeft.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameRight",
                    fullPath: t + "playarea/slotMachineFrameRight.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameTop",
                    fullPath: t + "playarea/slotMachineFrameTop.png"
                }), nge.Lib.Helper.tplSetContainerContents(n, "logoAlbumContainer", [{
                    type: mt.objects.IMAGE,
                    name: "playareaLogo",
                    assetKey: "logo",
                    anchorX: .5,
                    anchorY: .5,
                    y: 55
                }]), nge.Lib.Helper.tplSetContainerContents(n, "logoPortraitContainer", [{
                    type: mt.objects.IMAGE,
                    name: "playareaLogoVertical",
                    assetKey: "logo",
                    scaleX: 1.65,
                    scaleY: 1.65,
                    anchorX: .5,
                    anchorY: .5,
                    y: 335
                }]), nge.Lib.Helper.tplObjFind(n, "slotMachineFrameContainer").class = "slotMachineFrameContainer", nge.Lib.Helper.tplSetContainerContents(n, "slotMachineFrameContainer", [{
                    type: mt.objects.GROUP,
                    name: "slotMachineFrameMainGame",
                    class: "slotMachineFrameMainGame",
                    contents: [{
                        type: mt.objects.IMAGE,
                        name: "slotMachineFrameLeft",
                        assetKey: "slotMachineFrameLeft",
                        x: 90
                    }, {
                        type: mt.objects.IMAGE,
                        name: "slotMachineFrameRight",
                        assetKey: "slotMachineFrameRight",
                        x: 1704
                    }, {
                        type: mt.objects.IMAGE,
                        name: "slotMachineFrameBottom",
                        assetKey: "slotMachineFrameBottom",
                        x: 92,
                        y: 912
                    }, {
                        type: mt.objects.IMAGE,
                        name: "slotMachineFrameTop",
                        assetKey: "slotMachineFrameTop",
                        scaleX: 1.0015,
                        x: 186
                    }]
                }]), (e = nge.Lib.Helper.tplObjFind(n, "reelsBorderContainer")).scaleY = 1.01, e.alignX = "center", e.alignY = "top", e.class = "reelsBorderContainer", e.contents = [{
                    type: mt.objects.GROUP,
                    name: "reelsBgShakeContainer",
                    contents: [{
                        type: mt.objects.GROUP,
                        name: "reelsBgScaleContainer",
                        class: "reelsBgScaleContainer",
                        contents: [{
                            type: mt.objects.IMAGE,
                            assetKey: "reelsBg",
                            anchorX: .5,
                            anchorY: 0,
                            y: 47
                        }]
                    }]
                }], n
            }
        },
        1242: function(e, t) {
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
                        block: mt.assets.blocks.STATIC,
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
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "symbols_static",
                    atlas: e + "atlases/symbols_static.json",
                    fullPath: e + "atlases/symbols_static.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: t ? mt.assets.blocks.STATIC : mt.assets.blocks.PAYTABLE,
                    key: "paytable",
                    atlas: e + "atlases/paytable.json",
                    fullPath: e + "atlases/paytable.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "paytable_buttons",
                    atlas: e + "atlases/paytable_buttons.json",
                    fullPath: e + "atlases/paytable_buttons.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "play",
                    atlas: e + "atlases/play.json",
                    fullPath: e + "atlases/play.png"
                }, {
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
                    key: "loading-progress-bar",
                    fullPath: e + "atlases/loading-progress-bar.png"
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
                    key: "introScreenBg",
                    fullPath: e + "atlases/introScreenBg.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "reelsBg",
                    fullPath: e + "atlases/reelsBg.jpg"
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
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations0",
                    atlas: e + "spine/symbols/symbols_animations0.json",
                    fullPath: e + "spine/symbols/symbols_animations0.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations1",
                    atlas: e + "spine/symbols/symbols_animations1.json",
                    fullPath: e + "spine/symbols/symbols_animations1.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations2",
                    atlas: e + "spine/symbols/symbols_animations2.json",
                    fullPath: e + "spine/symbols/symbols_animations2.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations3",
                    atlas: e + "spine/symbols/symbols_animations3.json",
                    fullPath: e + "spine/symbols/symbols_animations3.png"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    subtype: "noPngQuant",
                    key: "slotmachineframe",
                    spine: e + "spine/slotmachineFrame/slotmachine_frame.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SPINE_ANIMATION,
                    subtype: "noPngQuant",
                    key: "bigWinAnim",
                    spine: e + "spine/bigWin/big_win.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SPINE_ANIMATION,
                    key: "big_win_animations",
                    atlas: e + "spine/bigWin/big_win_animations.json",
                    fullPath: e + "spine/bigWin/big_win_animations.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SPINE_ANIMATION,
                    key: "big_win_animations_1",
                    atlas: e + "spine/bigWin/big_win_animations_1.json",
                    fullPath: e + "spine/bigWin/big_win_animations_1.jpg"
                }, {
                    type: mt.assets.BINARY,
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
                    key: "winline",
                    spine: e + "spine/winlines/winlines.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "winlineLarge",
                    spine: e + "spine/winlines/winlinesLarge.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "winlineAll",
                    spine: e + "spine/winlines/winlines_all.json"
                }), {
                    assets: n,
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1243: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1244: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1245: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.DjGameBase.Mlm.Brain.Sounds.extend((function() {
                var e = this;
                this.wheelSpinSoundCount = 1, this.reelsCount = 5, this.triggersNeededForBonus = this.triggerReelsCount = 3, this.scatterSymbols = ["7"];
                var t = 0,
                    n = [],
                    a = !1;
                this.counterSounds = [], this.freespinGameBackgroundSound = [], this.loopedSounds = ["bs_background", "big_win"], this.spinGameBackgroundSound.push({
                    s: "bs_background",
                    e: "popupFinish.animate.start",
                    action: "play",
                    loop: !0
                }), this.scatterSounds = [{
                    s: "scatter_0",
                    e: "sound.scatter_landing_0.play"
                }, {
                    s: "scatter_1",
                    e: "sound.scatter_landing_1.play"
                }, {
                    s: "scatter_2",
                    e: "sound.scatter_landing_2.play"
                }, {
                    s: "scatter_3",
                    e: "sound.scatter_landing_3.play"
                }, {
                    s: "scatter_4",
                    e: "sound.scatter_landing_4.play"
                }], this.bigWinSounds.push({
                    s: "big_win_start",
                    e: "win.big.show"
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
                }], this.onSpinReadyToProceed = function() {
                    nge.observer.fire("sound.volume", {
                        s: "bs_background",
                        volume: 1,
                        duration: 500
                    })
                }, this.layerSwitcherHandler = function(e) {
                    switch (e) {
                        case "intro":
                            nge.observer.fire("introSound.Play");
                            break;
                        case "game":
                        case "gameOffer":
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.play"), nge.observer.fire("sound.volume", {
                                s: "bs_background",
                                volume: 1
                            })
                    }
                };
                var s = function() {
                        var t = nge.localData.get("freespin.inProgress"),
                            n = nge.Lib.Helper.getRandomInt(0, e.wheelSpinSoundCount - 1);
                        t && nge.observer.fire("slotMachine.reelsStartRandSound." + n)
                    },
                    o = function(a) {
                        return function() {
                            nge.localData.get("slotMachine.spinResult.columns")[a].some((function(t) {
                                return -1 !== e.scatterSymbols.indexOf(t)
                            })) && (n.push(a), nge.observer.fire("sound.scatter_" + t + ".play"), t++)
                        }
                    },
                    i = function() {
                        a = !0, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, .5, 100)
                        }))
                    },
                    l = function() {
                        a && (a = !1, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, 1, 100)
                        })))
                    },
                    r = function() {
                        a = !1
                    },
                    p = function() {
                        t = 0, n = [], a && l()
                    };
                this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("slotMachine.spinCommand", p, !1, !0), nge.observer.add("slotMachine.spinStart", s, !1, !0);
                    for (var t = 0; t < this.reelsCount; t++) nge.observer.add("slotMachine.reel_" + t + ".animation.stop", o(t), !1, !0);
                    nge.observer.add("sounds.win.regularWinLow", i, !1, !0), nge.observer.add("sounds.win.regularWinMid", i, !1, !0), nge.observer.add("sounds.win.regularWinHigh", i, !1, !0), nge.observer.add("sound.stopped.win_regularWinLow", l, !1, !0), nge.observer.add("sound.stopped.win_regularWinMid", l, !1, !0), nge.observer.add("sound.stopped.win_regularWinHigh", l, !1, !0), nge.observer.add("Transport.close", r, !1, !0)
                }
            }))
        },
        5: function(e, t, n) {
            n(1176), n(1177), n(1178), n(1179), n(1180), n(1181), n(1182), n(1183), n(1184), n(1185), n(1186), n(1187), n(1188), n(1189), n(1190), n(1191), n(1192), n(1193), n(1194), n(1195), n(1196), n(1197), n(1198), n(1199), n(1200), n(1201), n(1202), n(1203), n(1204), n(1205), n(1206), n(1207), n(1208), n(1209), n(1210), n(1211), n(1212), n(1213), n(1214), n(1215), n(1216), n(1217), n(1218), n(1219), n(1220), n(1221), n(1222), n(1223), n(1224), n(1225), n(1226), n(1227), n(1228), n(1229), n(1230), n(1231), n(1232), n(1233), n(1234), n(1235), n(1236), n(1237), n(1238), n(1239), n(1240), n(1241), n(1242), n(1243), n(1244), n(1245)
        }
    }
]);