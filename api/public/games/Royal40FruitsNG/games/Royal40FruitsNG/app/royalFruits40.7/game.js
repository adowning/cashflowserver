var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, a) {
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
}, $jscomp.polyfill("Object.is", (function(e) {
    return e || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
}), "es6", "es3"), $jscomp.polyfill("Array.prototype.includes", (function(e) {
    return e || function(e, t) {
        var a = this;
        a instanceof String && (a = String(a));
        var n = a.length;
        for (0 > (t = t || 0) && (t = Math.max(t + n, 0)); t < n; t++) {
            var s = a[t];
            if (s === e || Object.is(s, e)) return !0
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
    return function t(a) {
        if (this instanceof t) throw new TypeError("Symbol is not a constructor");
        return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (a || "") + "_" + e++, a)
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
    var a = 0,
        n = {
            next: function() {
                if (a < e.length) {
                    var s = a++;
                    return {
                        value: t(s, e[s]),
                        done: !1
                    }
                }
                return n.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                }, n.next()
            }
        };
    return n[Symbol.iterator] = function() {
        return n
    }, n
}, $jscomp.polyfill("Array.prototype.values", (function(e) {
    return e || function() {
        return $jscomp.iteratorFromArray(this, (function(e, t) {
            return t
        }))
    }
}), "es8", "es3"), (window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        1176: function(e, t) {
            nge.appNS = "RoyalFruits40", nge.App[nge.appNS] = {}
        },
        1177: function(e, t, a) {
            nge.appPath = "app/royalFruits40.7/", nge.gameCode = "319"
        },
        1178: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.DjGameBase.Run.extend((function() {
                this.linesCfg = [40], nge.App.addSysInstancesMode("SlimJackpot"), nge.App.DjGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.DjGameBase, nge.App[nge.appNS])), this.applyClassicGameBase(), this.statesReplacements.play.push("background", "popup", "miniPaytable", "bigWinUni", "shaker")
            })), nge.Cfg.Main.project = "royalFruits40", nge.Cfg.Main.title = "Royal Fruits 40", nge.Cfg.Main.gameCode = "319", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.22"
        },
        1179: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        1180: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    silence: "game:sounds/silence",
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
                    }, {
                        spineName: "winlineAll",
                        animationName: "w0"
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
                this.cfg.followSlotName = "counter", this.cfg.loopStartFrame = 23, this.cfg.loopEndFrame = 237, this.cfg.jump2Frame = 237
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
                }, this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("win.big.counterComplete", (function() {
                        e: for (var t in e.coinsEmitters) {
                            var a = e.coinsEmitters[t];
                            if (!a.on) {
                                a.start();
                                break e
                            }
                        }
                    }))
                }, this.subscribeToSpineEvents = function() {
                    e.mainAnim.onEvent.add((function(t, a) {
                        "start_meteor" === a.data.name ? (e.mainAnim.setAnimationByName(1, "meteorites_loop_first", !0), e.mainAnim.spine.state.getCurrent(1) && e.speedupTrack(1, .5)) : "start" === a.data.name ? e.playStage1() : "end" === a.data.name ? e.playStage2() : a.data.name.includes("speedup") && (t = +a.data.name.replace("speedup_", ""), e.mainAnim.spine.state.getCurrent(1) && e.speedupTrack(1, .5 + .05 * t))
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
                    block: mt.assets.blocks.STATIC,
                    textureURL: e + "orange_font.png",
                    bitmapFont: e + "orange_font.fnt"
                }, this.bitmapFonts.counter_font = {
                    type: mt.assets.BITMAP_FONT,
                    block: mt.assets.blocks.STATIC,
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
                        x: 278,
                        y: 52
                    }, {
                        x: 278,
                        y: 269
                    }, {
                        x: 278,
                        y: 486
                    }, {
                        x: 278,
                        y: 703
                    }],
                    [{
                        x: 548,
                        y: 52
                    }, {
                        x: 548,
                        y: 269
                    }, {
                        x: 548,
                        y: 486
                    }, {
                        x: 548,
                        y: 703
                    }],
                    [{
                        x: 822,
                        y: 52
                    }, {
                        x: 822,
                        y: 269
                    }, {
                        x: 822,
                        y: 486
                    }, {
                        x: 822,
                        y: 703
                    }],
                    [{
                        x: 1095,
                        y: 52
                    }, {
                        x: 1095,
                        y: 269
                    }, {
                        x: 1095,
                        y: 486
                    }, {
                        x: 1095,
                        y: 703
                    }],
                    [{
                        x: 1095,
                        y: 52
                    }, {
                        x: 1095,
                        y: 269
                    }, {
                        x: 1095,
                        y: 486
                    }, {
                        x: 1095,
                        y: 703
                    }]
                ], this.cfg.slotMachineWidth = 1360, this.cfg.slotMachineHeight = 864, this.cfg.leftContainer = {
                    name: "miniPaytableLeftContainer",
                    x: 70,
                    y: 0
                }, this.cfg.rightContainer = {
                    name: "miniPaytableRightContainer",
                    x: 333,
                    y: 0
                }, this.cfg.miniPaytableBg = {
                    name: "miniPaytableBg"
                }, this.cfg.symbolSettings = {
                    7: {
                        selectorPostfix: "s",
                        numbers: {
                            offsetX: -10,
                            offsetY: -40,
                            hDist: 34,
                            style: {
                                font: "23pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 31,
                            offsetY: -40,
                            hDist: 34,
                            style: {
                                font: "23pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        divider: {
                            assetKey: "miniPaytableBgSeparator",
                            anchorX: .5,
                            anchorY: .5,
                            left: 335,
                            right: -195,
                            top: 110,
                            bottom: 160
                        },
                        additional: {
                            maxWidth: 310,
                            left: 335,
                            right: -195,
                            top: 30,
                            bottom: 250,
                            style: {
                                font: "18pt futuraptmedium",
                                fill: 16777215,
                                align: "center",
                                stroke: 4728599,
                                strokeThickness: 4
                            },
                            localizationKey: "MINI_PAYTABLE_SCATTER_DESCRIPTION"
                        }
                    },
                    0: {
                        numbers: {
                            offsetX: -10,
                            offsetY: -40,
                            hDist: 40,
                            style: {
                                font: "28pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 31,
                            offsetY: -40,
                            hDist: 40,
                            style: {
                                font: "28pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        divider: {
                            assetKey: "miniPaytableBgSeparator",
                            anchorX: .5,
                            anchorY: .5,
                            x: 70,
                            y: 70
                        },
                        additional: {
                            x: 65,
                            y: 100,
                            maxWidth: 310,
                            style: {
                                font: "12pt futuraptmedium",
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
                            offsetX: -10,
                            offsetY: -20,
                            hDist: 49,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 31,
                            offsetY: -20,
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
                var e, t, a, n, s, o, i, l, p = this;
                this.initialize = function(i) {
                    p.super.initialize(i), e = nge.findOne("^" + p.cfg.rightContainer.name, p.popupContainer), t = nge.findOne("^" + p.cfg.leftContainer.name, p.popupContainer), o = nge.findOne("^" + p.cfg.miniPaytableBg.name, p.popupContainer), a = nge.App.getInstance("Com.SlotMachine.Cfg").get(), n = p.cfg.leftContainer.x, s = p.cfg.rightContainer.x
                }, this.show = function(e, t) {
                    var a = nge.localData.get("slotMachine_reelsSymbols");
                    if (!a) throw Error('Can\'t find "slotMachine_reelsSymbols" in localData');
                    p.state.activeMiniPaytable = {
                        reel: e,
                        row: t
                    }, a = a[e][t];
                    var n = p.getSymbolSettings(a),
                        s = n.assetKey ? n.assetKey : a;
                    p.changePopupContainerPosition(e, t), p.generatePayTable(a), p.changeSymbolTexture(s, e, t), p.popupContainer.visible = !!(n.numbers || n.values || n.additional || n.bonusGame)
                }, this.changePopupContainerPosition = function(a, m) {
                    var r = nge.localData.get("slotMachine_reelsSymbols")[a][m],
                        c = p.cfg.tableCoords.length - 1,
                        y = p.cfg.tableCoords[0].length - 1,
                        g = p.cfg.tableCoords[a][m];
                    p.popupContainer.position.set(g.x, g.y), t && (t.x = a < c ? n : s), e.x = a < c ? s : n, i = m === y, l = a === c, "7" === r ? (a = m < y ? 74 : -143, t.y = a, e.y = a, o.height = 440, o.y = m < y ? 0 : -217) : (o.height = 220, o.y = 0, t.y = 74, e.y = 74)
                }, this.generateAdditionalText = function(t) {
                    return (t = nge.objects.create(new nge.Mlm.Objects.Text({
                        name: "miniPaytableAdditionalText",
                        text: nge.i18n.get(t.localizationKey),
                        style: t.style,
                        x: t.x,
                        y: t.y,
                        maxWidth: t.maxWidth,
                        anchorX: .5,
                        anchorY: .5
                    }), e)).updateTransform(), t
                }, this.generatePayTable = function(t) {
                    e.removeChildren();
                    for (var n = p.getLinesData(t), s = p.getSymbolSettings(t), o = s.selectorPostfix ? s.selectorPostfix : "", m = "7" === t ? 20 : a.mw, r = 0;
                        "7" === t ? 9 <= m : 2 <= m; m--, r++) {
                        var c = "ps" + t + o + "-" + m,
                            y = n[m];
                        y && (p.generatePaytableNumbers(m, r, s.numbers), p.generatePaytableValues(m, r, c, y, s.values))
                    }
                    s.divider && ("7" === t && (s.divider.x = l ? s.divider.left : s.divider.right, s.divider.y = i ? s.divider.top : s.divider.bottom), nge.objects.create(new nge.Mlm.Objects.Image(s.divider), e)), s.additional && ("7" === t && (s.additional.x = l ? s.additional.left : s.additional.right, s.additional.y = i ? s.additional.top : s.additional.bottom), p.generateAdditionalText(s.additional)), n = 1, "s" === o ? n = nge.localData.get("lines.value") : "b" === o && (n = 2), nge.observer.fire("paytable.updatePayoutForSymbol", {
                        symbolId: t,
                        suffix: o,
                        modificator: n,
                        parent: e
                    })
                }
            }))
        },
        1200: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "miniPaytableBg",
                            fullPath: e + "playarea/miniPaytableBg1_asset.png"
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
                            x: 0,
                            y: 0,
                            scaleX: 1,
                            scaleY: 1,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "miniPaytableClickableZones",
                                x: 280,
                                y: 58,
                                contents: []
                            }, {
                                type: mt.objects.GROUP,
                                name: "miniPaytablePopupContainer",
                                isVisible: !1,
                                x: 548,
                                y: 220,
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
                                    height: 220,
                                    width: 550
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
                            x: 280,
                            y: 58
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "miniPaytableBg",
                            fullPath: e + "playarea/miniPaytableBg1_asset.png"
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
                                x: 548,
                                y: 220,
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
                                    height: 220,
                                    width: 550
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1203: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile.View = nge.App.DjGameBase.Com.MiniPaytable.Mobile.View.extend((function() {
                var e, t, a, n, s, o, i, l, p = this;
                this.initialize = function(i) {
                    p.super.initialize(i), e = nge.findOne("^" + p.cfg.rightContainer.name, p.popupContainer), t = nge.findOne("^" + p.cfg.leftContainer.name, p.popupContainer), o = nge.findOne("^" + p.cfg.miniPaytableBg.name, p.popupContainer), a = nge.App.getInstance("Com.SlotMachine.Cfg").get(), n = p.cfg.leftContainer.x, s = p.cfg.rightContainer.x
                }, this.show = function(e, t) {
                    var a = nge.localData.get("slotMachine_reelsSymbols");
                    if (!a) throw Error('Can\'t find "slotMachine_reelsSymbols" in localData');
                    p.state.activeMiniPaytable = {
                        reel: e,
                        row: t
                    }, a = a[e][t];
                    var n = p.getSymbolSettings(a),
                        s = n.assetKey ? n.assetKey : a;
                    p.changePopupContainerPosition(e, t), p.generatePayTable(a), p.changeSymbolTexture(s, e, t), p.popupContainer.visible = !!(n.numbers || n.values || n.additional || n.bonusGame)
                }, this.changePopupContainerPosition = function(a, m) {
                    var r = nge.localData.get("slotMachine_reelsSymbols")[a][m],
                        c = p.cfg.tableCoords.length - 1,
                        y = p.cfg.tableCoords[0].length - 1,
                        g = p.cfg.tableCoords[a][m];
                    p.popupContainer.position.set(g.x, g.y), t && (t.x = a < c ? n : s), e.x = a < c ? s : n, i = m === y, l = a === c, "7" === r ? (a = m < y ? 74 : -143, t.y = a, e.y = a, o.height = 440, o.y = m < y ? 0 : -217) : (o.height = 220, o.y = 0, t.y = 74, e.y = 74)
                }, this.generateAdditionalText = function(t) {
                    return (t = nge.objects.create(new nge.Mlm.Objects.Text({
                        name: "miniPaytableAdditionalText",
                        text: nge.i18n.get(t.localizationKey),
                        style: t.style,
                        x: t.x,
                        y: t.y,
                        maxWidth: t.maxWidth,
                        anchorX: .5,
                        anchorY: .5
                    }), e)).updateTransform(), t
                }, this.generatePayTable = function(t) {
                    e.removeChildren();
                    for (var n = p.getLinesData(t), s = p.getSymbolSettings(t), o = s.selectorPostfix ? s.selectorPostfix : "", m = "7" === t ? 20 : a.mw, r = 0;
                        "7" === t ? 9 <= m : 2 <= m; m--, r++) {
                        var c = "ps" + t + o + "-" + m,
                            y = n[m];
                        y && (p.generatePaytableNumbers(m, r, s.numbers), p.generatePaytableValues(m, r, c, y, s.values))
                    }
                    s.divider && ("7" === t && (s.divider.x = l ? s.divider.left : s.divider.right, s.divider.y = i ? s.divider.top : s.divider.bottom), nge.objects.create(new nge.Mlm.Objects.Image(s.divider), e)), s.additional && ("7" === t && (s.additional.x = l ? s.additional.left : s.additional.right, s.additional.y = i ? s.additional.top : s.additional.bottom), p.generateAdditionalText(s.additional)), n = 1, "s" === o ? n = nge.localData.get("lines.value") : "b" === o && (n = 2), nge.observer.fire("paytable.updatePayoutForSymbol", {
                        symbolId: t,
                        suffix: o,
                        modificator: n,
                        parent: e
                    })
                }
            }))
        },
        1204: function(e, t) {
            nge.App[nge.appNS].Com.Popup = {}
        },
        1205: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                    font: "54pt rounds_black",
                    fill: "#FFFFFF",
                    stroke: "#915818",
                    strokeThickness: 6,
                    align: "center"
                };
                this.cfg.popups = {
                    freespinStartPopup: {
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "appear_free_games",
                                loop: "loop_free_games",
                                hide: "disappear_free_games"
                            }
                        },
                        button: {
                            type: 4,
                            name: "popupOkButton",
                            x: 0,
                            y: 252,
                            anchorX: .496,
                            anchorY: .505,
                            isVisible: !1,
                            pixelPerfectOver: !1,
                            pixelPerfectClick: !1,
                            class: "popupButton",
                            assetKey: "popupOkButtonAsset"
                        },
                        content: [{
                            model: {
                                type: 0,
                                isVisible: !1,
                                name: "popup_congratulations",
                                assetKey: "popup_congratulations_en",
                                anchorX: .5,
                                anchorY: .5
                            },
                            followSlotName: "congratulations"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 180,
                                anchorX: .5,
                                anchorY: .48,
                                assetKey: "counter_font"
                            },
                            followSlotName: "free_games_counter",
                            dataKey: "freespinsCounter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_FREE_SPINS"),
                                anchorX: .5,
                                anchorY: .5,
                                style: e
                            },
                            followSlotName: "free_games"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                style: e
                            },
                            followSlotName: "free_games_won"
                        }]
                    },
                    freespinEndPopup: {
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "appear_total_win",
                                loop: "loop_total_win",
                                hide: "disappear_total_win"
                            }
                        },
                        button: {
                            type: 4,
                            name: "popupOkButton",
                            x: 0,
                            y: 165,
                            anchorX: .496,
                            anchorY: .509,
                            isVisible: !1,
                            pixelPerfectOver: !1,
                            pixelPerfectClick: !1,
                            class: "popupButton",
                            assetKey: "popupOkButtonAsset"
                        },
                        content: [{
                            model: {
                                type: 0,
                                isVisible: !1,
                                name: "popup_congratulations",
                                assetKey: "popup_congratulations_en",
                                anchorX: .5,
                                anchorY: .5
                            },
                            followSlotName: "congratulations"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_TOTAL_WIN"),
                                anchorX: .5,
                                anchorY: .5,
                                style: {
                                    font: "50pt rounds_black",
                                    fill: "#FFFFFF",
                                    stroke: "#915818",
                                    strokeThickness: 5,
                                    align: "center"
                                }
                            },
                            followSlotName: "total_win"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 120,
                                anchorX: .5,
                                anchorY: .48,
                                assetKey: "counter_font"
                            },
                            followSlotName: "total_win_counter",
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
        1206: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Tpl = function(e) {
                return (e = nge.App.DjGameBase.Com.Popup.Tpl(e)).assets.contents = [], e
            }
        },
        1207: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Lang_ru = {}
        },
        1208: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Lang_ru.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                    font: "54pt rounds_black",
                    fill: "#FFFFFF",
                    stroke: "#915818",
                    strokeThickness: 6,
                    align: "center"
                };
                this.cfg.popups = {
                    freespinStartPopup: {
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "appear_free_games",
                                loop: "loop_free_games",
                                hide: "disappear_free_games"
                            }
                        },
                        button: {
                            type: 4,
                            name: "okButton",
                            x: 0,
                            y: 252,
                            anchorX: .496,
                            anchorY: .505,
                            isVisible: !1,
                            pixelPerfectOver: !1,
                            pixelPerfectClick: !1,
                            class: "popupButton",
                            assetKey: "popupOkButtonAsset"
                        },
                        content: [{
                            model: {
                                type: 0,
                                isVisible: !1,
                                name: "popup_congratulations",
                                assetKey: "popup_congratulations_en",
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
                                anchorY: 3.1,
                                style: e
                            },
                            followSlotName: "free_games"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 180,
                                anchorX: .5,
                                anchorY: .07,
                                assetKey: "counter_font"
                            },
                            followSlotName: "free_games_counter",
                            dataKey: "freespinsCounter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_FREE_SPINS"),
                                anchorX: .5,
                                anchorY: .5,
                                style: e
                            },
                            followSlotName: "free_games_won"
                        }]
                    },
                    freespinEndPopup: {
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "appear_total_win",
                                loop: "loop_total_win",
                                hide: "disappear_total_win"
                            }
                        },
                        button: {
                            type: 4,
                            name: "okButton",
                            x: 0,
                            y: 165,
                            anchorX: .496,
                            anchorY: .509,
                            isVisible: !1,
                            pixelPerfectOver: !1,
                            pixelPerfectClick: !1,
                            class: "popupButton",
                            assetKey: "popupOkButtonAsset"
                        },
                        content: [{
                            model: {
                                type: 0,
                                isVisible: !1,
                                name: "popup_congratulations",
                                assetKey: "popup_congratulations_en",
                                anchorX: .5,
                                anchorY: .5
                            },
                            followSlotName: "congratulations"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_TOTAL_WIN"),
                                anchorX: .5,
                                anchorY: .5,
                                style: {
                                    font: "50pt rounds_black",
                                    fill: "#FFFFFF",
                                    stroke: "#915818",
                                    strokeThickness: 5,
                                    align: "center"
                                }
                            },
                            followSlotName: "total_win"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 120,
                                anchorX: .5,
                                anchorY: .48,
                                assetKey: "counter_font"
                            },
                            followSlotName: "total_win_counter",
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
        1209: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin = {}
        },
        1210: function(e, t) {
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
                                y: -70,
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
        1211: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Cfg = nge.App.DjGameBase.Com.RegularWin.Cfg.extend((function() {
                this.params = this.super.get(), this.params.regularProfile = "hideWithDelayFast", this.params.turboProfile = "hideWithDelayFast"
            }))
        },
        1212: function(e, t) {
            nge.App[nge.appNS].Com.Shaker = {}
        },
        1213: function(e, t) {
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
        1214: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar = {}
        },
        1215: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile = {}
        },
        1216: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.Cfg = nge.App.DjGameBase.Com.Sidebar.Mobile.Cfg.extend((function() {
                var e = this;
                this.PAYTABLE.winlines.rows = 4, this.paytablePayoutsVariables = [e.getPayoutItem("page0image0", "0", [5, 4, 3]), e.getPayoutItem("page0image1", "1", [5, 4, 3]), e.getPayoutItem("page0image2", "2", [5, 4, 3]), e.getPayoutItem("page0image3", "3", [5, 4, 3]), e.getPayoutItem("page0image4", "4", [5, 4, 3]), e.getPayoutItem("page0image6", "5", [5, 4, 3]), e.getPayoutItem("page0image5", "6", [5, 4, 3]), e.getPayoutItem("page0image7", "7s", [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9])], this.paytableFeaturesVariables = [e.paytableFeatureItem("0", "Wild Symbol", nge.i18n.get("WILD_DESCRIPTION")), e.paytableFeatureItem("7", "Scatter symbol", nge.i18n.get("SCATTER_DESCRIPTION"))], this.rulesVariables = [{
                    text: nge.i18n.get("The_paytable_always")
                }], this.fillPaytableHtmlBlocks = function(t) {
                    e.pushPaytableHtmlBlock(t, "0", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "1", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "2", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "3", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "4", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "5", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "6", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "7s", [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9])
                }
            }))
        },
        1217: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1218: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.DjGameBase.Com.SlotMachine.Cfg.extend((function() {
                this.params.additionalBlurs = !1, this.params.mw = 5, this.params.mh = 4, this.params.wildSymbol = "0", this.params.tintDark = 6962094, this.params.tintNormal = 16777215, this.params.tintDarkAlpha = .85, this.params.tintNormalAlpha = 1, this.params.imageHeight = 320, this.params.imageWidth = 320, this.params.tweenDuration.blur = 85, this.params.th = [4, 4, 4, 4, 4], this.params.tweenDuration.oldSymbols = 184, this.params.tweenDuration.newSymbols = 184, this.params.symbolsBlurKeys = "100 101 102 103 104 105 106 107".split(" "), this.params.symbolAnimationContainerName = "slotMachineSymbolWinContainer", this.params.recyclerView.enabled = !0, this.params.recyclerView.reelsStopCounterBase = [8, 12, 16, 20, 24], this.params.recyclerView.reelsStopCounterBonus = [8, 12, 16, 20, 24], this.params.recyclerView.reelsStopCounter = [8, 12, 16, 20, 24], this.params.recyclerView.reelsSpeed = [1.5, 1.5, 1.5, 1.5, 1.5], this.params.recyclerView.reelsSpeedUpSpeed = 5, this.params.recyclerView.reelsIntrigueSpeed = 2, this.params.recyclerView.hideBorderSymbols = !1, this.params.recyclerView.borderSymbolsCount = 1, this.params.symbolsLanding = [{
                    symbol: "7",
                    assetKey: "m07_000",
                    animationName: "landing"
                }]
            }))
        },
        1219: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.DjGameBase.Com.SlotMachine.Controller.extend((function() {
                var e, t, a, n = this,
                    s = 0;
                this.create = function() {
                    n.super.create(), (e = nge.findOne("^slotmachineframe")).setAnimationByName(0, "win2", !0), e.spine.state.addListener({
                        complete: function(n) {
                            "spin" !== t || a || (a = !0, e.setAnimationByName(0, "win2", !0))
                        }
                    }), a = !0, t = "spin"
                };
                var o = function() {
                        a = !1, t = "win", e.setAnimationByName(0, "win"), e.onComplete.addOnce((function() {
                            e.setAnimationByName(0, "win3", !0)
                        }))
                    },
                    i = function() {
                        s = 0, t = "spin"
                    },
                    l = function(e) {
                        e = e.spinResult.columns;
                        for (var t = [], a = 0; a < e.length; a++) {
                            for (var n = e[a], o = 0, i = 0; i < n.length; i++) "7" === n[i] && (o++, s++);
                            0 === o ? t.push(0) : 9 <= 20 - 4 * (a + 1) + s ? t.push(i) : t.push(0)
                        }
                        nge.localData.set("scatterReels", t)
                    };
                this.customSubscribe = function() {
                    this.super.customSubscribe(), nge.observer.add("winlines.showAll", o), nge.observer.add("slotMachine.spinCommand", i), nge.observer.add("slotMachine.spinResponse", l)
                }
            }))
        },
        1220: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerReel = nge.App.DjGameBase.Com.SlotMachine.RecyclerReel.extend((function() {
                this.jumpDistance = 100, this.jumpTimeUp = 200, this.jumpTimeDown = 75
            }))
        },
        1221: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerView = nge.App.DjGameBase.Com.SlotMachine.RecyclerView.extend((function() {
                this.isPassAdditionalLandingRule = function(e, t) {
                    return !!(t = nge.localData.get("scatterReels")) && 0 < t[e]
                }
            }))
        },
        1222: function(e, t) {
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
        1223: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Tpl = function() {
                var e = nge.Lib.Helper.mobileAndTabletCheck();
                return {
                    styles: {
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
                            y: 336,
                            alignY: "top",
                            scaleX: .64,
                            scaleY: .64
                        },
                        ".album .slotMachineFrameAnimationContainer": {
                            x: 0,
                            y: e ? -35 : -5,
                            alignY: "center",
                            scaleX: e ? .96 : 1.01,
                            scaleY: e ? .96 : 1.01
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
                            x: 280,
                            y: 47
                        },
                        ".album .slotMachineSymbolWinContainer": {
                            x: 280,
                            y: 47
                        },
                        ".portrait .slotMachineGameContainer": {
                            x: 280,
                            y: 47
                        },
                        ".album .slotMachineGameContainer": {
                            x: 280,
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
                                width: 1360,
                                height: 864
                            }]
                        }]
                    }
                }
            }
        },
        1224: function(e, t) {
            nge.App[nge.appNS].Com.Winlines = {}
        },
        1225: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Cfg = nge.App.ClassicGameBase.Com.Winlines.Cfg.extend((function() {
                this.linesType = "chunk_lines", this.linesContainerName = "winlinesContainer", this.animationOneByOneDuration = this.animationAllDuration = 950, this.subcycles = 1, this.symbolSpineModeAll = nge.spine.LOOP, this.symbolSpineModeBonus = this.symbolSpineModeByOne = nge.spine.FREEZE, this.lineElements = {
                    starter: {
                        name: "winline",
                        objs: null,
                        x: [345],
                        y: [168, 382, 596, 810],
                        scaleX: .42,
                        scaleY: 1,
                        angle: 0
                    },
                    line: {
                        name: "winline",
                        objs: null,
                        x: [552, 823, 1094, 1365],
                        y: [168, 382, 596, 810],
                        scaleX: .85,
                        scaleY: 1,
                        angle: 0
                    },
                    slash_down: {
                        name: "winline",
                        objs: null,
                        x: [552, 823, 1094, 1365],
                        y: [275, 489, 703],
                        scaleX: 1,
                        scaleY: 1,
                        angle: 38
                    },
                    slash_up: {
                        name: "winline",
                        objs: null,
                        x: [552, 823, 1094, 1365],
                        y: [275, 489, 703],
                        scaleX: 1,
                        scaleY: 1,
                        angle: 322
                    },
                    ender: {
                        name: "winline",
                        objs: null,
                        x: [1578],
                        y: [168, 382, 596, 810],
                        scaleX: .42,
                        scaleY: 1,
                        angle: 0
                    }
                }
            }))
        },
        1226: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.ChunkLinesGenerator = nge.App.DjGameBase.Com.Winlines.ChunkLinesGenerator.extend((function() {
                var e, t = this;
                this.chunkType = "Spine", this.hasParticles = !1, this.show = function(t) {
                    e.setAnimationByName(0, "w" + t)
                }, this.hide = function() {
                    t.hideAll()
                }, this.hideAll = function() {
                    e.stop(), t.super.hideAll()
                }, this.animateWave = function() {
                    t.elementReels.forEach((function(e, t) {
                        e.forEach((function(e) {
                            e.visible && e.setAnimationByName(0, "starter")
                        }))
                    }))
                }, this.init = function(a, n) {
                    t.super.init(a, n), e = nge.findOne("^winlinesAll")
                }, this.reset = function() {}
            }))
        },
        1227: function(e, t) {
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
                            y: 540,
                            isVisible: !1
                        }]
                    }
                }
            }
        },
        1228: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText = {}
        },
        1229: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Cfg = nge.App.DjGameBase.Com.WinlinesText.Cfg.extend((function() {
                this.params = this.super.get(), this.params.maxReels = 5, this.params.maxRows = 4, this.params.symbolWidth = 350
            }))
        },
        1230: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Tpl = function() {
                var e = nge.Lib.Helper.mobileAndTabletCheck();
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    styles: {
                        ".portrait .winlinesTextContainer": {
                            y: 710
                        },
                        ".album .winlinesTextContainer": {
                            y: e ? 370 : 385
                        },
                        ".portrait .lineWinContainer": {
                            y: 0,
                            scaleX: .64,
                            scaleY: .64
                        },
                        ".album .lineWinContainer": {
                            y: 0,
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
                                y: -225,
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
                                y: -9,
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
                                y: 207,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 90
                            }, {
                                type: 7,
                                name: "lineWinAmount3",
                                isVisible: !1,
                                x: 0,
                                y: 423,
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
        1231: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1232: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1233: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.DjGameBase.Mlm.Brain.Sounds.extend((function() {
                var e = this;
                this.wheelSpinSoundCount = 1, this.reelsCount = 5, this.triggersNeededForBonus = this.triggerReelsCount = 3, this.scatterSymbols = ["7"];
                var t = 0,
                    a = [],
                    n = !1;
                this.counterSounds = [], this.loopedSounds = ["bs_background", "big_win"], this.spinGameBackgroundSound.push({
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
                }], this.layerSwitcherHandler = function(e) {
                    switch (e) {
                        case "intro":
                            nge.observer.fire("bs_background.play");
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
                        t = 0, a = [], n && p()
                    },
                    o = function() {
                        var t = nge.localData.get("freespin.inProgress"),
                            a = nge.Lib.Helper.getRandomInt(0, e.wheelSpinSoundCount - 1);
                        t && nge.observer.fire("slotMachine.reelsStartRandSound." + a)
                    },
                    i = function(n) {
                        return function() {
                            var s = nge.localData.get("slotMachine.spinResult.columns")[n].some((function(t) {
                                    return -1 !== e.scatterSymbols.indexOf(t)
                                })),
                                o = n / Math.round(e.reelsCount / e.scatterReelsCount);
                            s && (a.push(n), e.scattersNeededForFreespins - a.length <= e.scatterReelsCount - 1 - o && (nge.observer.fire("sound.scatter_" + t + ".play"), t++))
                        }
                    },
                    l = function() {
                        n = !0, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, .5, 100)
                        }))
                    },
                    p = function() {
                        n && (n = !1, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, 1, 100)
                        })))
                    },
                    m = function() {
                        n = !1
                    };
                this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("slotMachine.spinCommand", s, !1, !0), nge.observer.add("slotMachine.spinStart", o, !1, !0);
                    for (var t = 0; t < this.reelsCount; t++) nge.observer.add("slotMachine.reel_" + t + ".animation.stop", i(t), !1, !0);
                    nge.observer.add("sounds.win.regularWinLow", l, !1, !0), nge.observer.add("sounds.win.regularWinMid", l, !1, !0), nge.observer.add("sounds.win.regularWinHigh", l, !1, !0), nge.observer.add("sound.stopped.win_regularWinLow", p, !1, !0), nge.observer.add("sound.stopped.win_regularWinMid", p, !1, !0), nge.observer.add("sound.stopped.win_regularWinHigh", p, !1, !0), nge.observer.add("Transport.close", m, !1, !0)
                }
            }))
        },
        1234: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1235: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1236: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = new nge.App.DjGameBase.Tpl.Groups.Intro,
                    t = nge.Lib.Helper.tplObjFind(e, "demoPlayButtonText");
                return t.style.fill = 1980215, t.style.stroke = 14329662, t.style.strokeThickness = 4, t.y = 2, nge.Lib.Helper.tplSetContainerContents(e, "introUniqueContent", [{
                    type: mt.objects.TEXT,
                    name: "introScreenTextCenter",
                    class: "coloredText",
                    text: nge.i18n.get("INTRO_TEXT"),
                    anchorX: .5,
                    anchorY: .5,
                    maxWidth: 1050,
                    x: 0,
                    y: -480,
                    alignY: "bottom",
                    style: {
                        font: "31pt futuraptheavy",
                        fill: 16769869,
                        align: "center",
                        shadowColor: 3888,
                        shadowBlur: 10,
                        shadowOffsetY: 4,
                        stroke: 0,
                        strokeThickness: 2,
                        lineHeight: 50
                    }
                }]), e
            }
        },
        1237: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Ui();
                return e.styles[".titleButtonStyle"].style.font = "26pt futuraptheavy", e.styles[".titleButtonStyle"].style.fill = 1980215, e.styles[".titleButtonStyle"].style.stroke = 14329662, e.styles[".titleButtonStyle"].style.strokeThickness = 4, e.styles[".titleButtonStyle"].style.lineHeight = 33, ["UICointainer"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = +t.y + 20)
                })), ["coinPlusButton", "betPlusButton", "coinMinusButton", "betMinusButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) - 1)
                })), ["autoButtonText", "turboModeUIButtonText"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) + 5), t.maxWidth = 120
                })), e
            }
        },
        1238: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Help = function() {
                var e = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    t = {
                        font: "28pt futuraptmedium",
                        fill: 16696173
                    },
                    a = {
                        font: "28pt futuraptmedium",
                        fill: 16777215
                    },
                    n = {
                        font: "26pt futuraptmedium",
                        fill: 16696173
                    },
                    s = {
                        font: "26pt futuraptmedium",
                        fill: 16777215
                    },
                    o = {
                        font: "17pt futuraptheavy",
                        fill: 15327167
                    },
                    i = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "infoNextButton",
                            fullPath: i + "playarea/infoNextButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "pageInfoPlate",
                            fullPath: i + "playarea/pageInfoPlate.png",
                            frameHeight: 40
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "nameBg1",
                            fullPath: i + "playarea/nameBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image0",
                            fullPath: i + "playarea/page0image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image7",
                            fullPath: i + "playarea/page0image7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image1",
                            fullPath: i + "playarea/page0image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image2",
                            fullPath: i + "playarea/page0image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image3",
                            fullPath: i + "playarea/page0image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image4",
                            fullPath: i + "playarea/page0image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image5",
                            fullPath: i + "playarea/page0image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page0image6",
                            fullPath: i + "playarea/page0image6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image00",
                            fullPath: i + "playarea/page2image00.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image01",
                            fullPath: i + "playarea/page2image01.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image02",
                            fullPath: i + "playarea/page2image02.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image03",
                            fullPath: i + "playarea/page2image03.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image04",
                            fullPath: i + "playarea/page2image04.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image05",
                            fullPath: i + "playarea/page2image05.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image06",
                            fullPath: i + "playarea/page2image06.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image07",
                            fullPath: i + "playarea/page2image07.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image08",
                            fullPath: i + "playarea/page2image08.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image09",
                            fullPath: i + "playarea/page2image09.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image10",
                            fullPath: i + "playarea/page2image10.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image11",
                            fullPath: i + "playarea/page2image11.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image12",
                            fullPath: i + "playarea/page2image12.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image13",
                            fullPath: i + "playarea/page2image13.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image14",
                            fullPath: i + "playarea/page2image14.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image15",
                            fullPath: i + "playarea/page2image15.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image16",
                            fullPath: i + "playarea/page2image16.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image17",
                            fullPath: i + "playarea/page2image17.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image18",
                            fullPath: i + "playarea/page2image18.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image19",
                            fullPath: i + "playarea/page2image19.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image20",
                            fullPath: i + "playarea/page2image20.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image21",
                            fullPath: i + "playarea/page2image21.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image22",
                            fullPath: i + "playarea/page2image22.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image23",
                            fullPath: i + "playarea/page2image23.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image24",
                            fullPath: i + "playarea/page2image24.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image25",
                            fullPath: i + "playarea/page2image25.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image26",
                            fullPath: i + "playarea/page2image26.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image27",
                            fullPath: i + "playarea/page2image27.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image28",
                            fullPath: i + "playarea/page2image28.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image29",
                            fullPath: i + "playarea/page2image29.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image30",
                            fullPath: i + "playarea/page2image30.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image31",
                            fullPath: i + "playarea/page2image31.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image32",
                            fullPath: i + "playarea/page2image32.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image33",
                            fullPath: i + "playarea/page2image33.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image34",
                            fullPath: i + "playarea/page2image34.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image35",
                            fullPath: i + "playarea/page2image35.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image36",
                            fullPath: i + "playarea/page2image36.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image37",
                            fullPath: i + "playarea/page2image37.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image38",
                            fullPath: i + "playarea/page2image38.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "page2image39",
                            fullPath: i + "playarea/page2image39.png"
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
                                        text: "PAYTABLE",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image0",
                                        assetKey: "page0image0",
                                        x: 712,
                                        y: 140
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image7",
                                        assetKey: "page0image7",
                                        x: 560,
                                        y: 530
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image1",
                                        assetKey: "page0image1",
                                        x: 110,
                                        y: 120
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image2",
                                        assetKey: "page0image2",
                                        x: 110,
                                        y: 380
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image3",
                                        assetKey: "page0image3",
                                        x: 110,
                                        y: 650
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image4",
                                        assetKey: "page0image4",
                                        x: 1330,
                                        y: 120
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image5",
                                        assetKey: "page0image5",
                                        x: 1330,
                                        y: 650
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image6",
                                        assetKey: "page0image6",
                                        x: 1330,
                                        y: 380
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text0",
                                        text: "SUBSTITUTES_FOR_ALL",
                                        style: {
                                            font: "22pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center",
                                            lineHeight: 40
                                        },
                                        class: "coloredText",
                                        x: 960,
                                        y: 440,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text1",
                                        text: "PAY_AT_ANY",
                                        style: {
                                            font: "22pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center",
                                            lineHeight: 40
                                        },
                                        class: "coloredText",
                                        x: 960,
                                        y: 870,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber20img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 20,
                                        style: n,
                                        x: 870,
                                        y: 550,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber19img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 19,
                                        style: n,
                                        x: 870,
                                        y: 600,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber18img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 18,
                                        style: n,
                                        x: 870,
                                        y: 650,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber17img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 17,
                                        style: n,
                                        x: 870,
                                        y: 700,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber16img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 16,
                                        style: n,
                                        x: 870,
                                        y: 750,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber15img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 15,
                                        style: n,
                                        x: 870,
                                        y: 800,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber14img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 14,
                                        style: n,
                                        x: 1130,
                                        y: 550,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber13img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 13,
                                        style: n,
                                        x: 1130,
                                        y: 600,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber12img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 12,
                                        style: n,
                                        x: 1130,
                                        y: 650,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber11img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 11,
                                        style: n,
                                        x: 1130,
                                        y: 700,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber10img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 10,
                                        style: n,
                                        x: 1130,
                                        y: 750,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber9img1Scatter",
                                        type: mt.objects.TEXT,
                                        text: 9,
                                        style: n,
                                        x: 1130,
                                        y: 800,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter20img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-20",
                                        style: s,
                                        x: 920,
                                        y: 550,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter19img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-19",
                                        style: s,
                                        x: 920,
                                        y: 600,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter18img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-18",
                                        style: s,
                                        x: 920,
                                        y: 650,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter17img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-17",
                                        style: s,
                                        x: 920,
                                        y: 700,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter16img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-16",
                                        style: s,
                                        x: 920,
                                        y: 750,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter15img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-15",
                                        style: s,
                                        x: 920,
                                        y: 800,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter14img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-14",
                                        style: s,
                                        x: 1180,
                                        y: 550,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter13img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-13",
                                        style: s,
                                        x: 1180,
                                        y: 600,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter12img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-12",
                                        style: s,
                                        x: 1180,
                                        y: 650,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter11img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-11",
                                        style: s,
                                        x: 1180,
                                        y: 700,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter10img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-10",
                                        style: s,
                                        x: 1180,
                                        y: 750,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableScatter9img1",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-9",
                                        style: s,
                                        x: 1180,
                                        y: 800,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img0Wild",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1013,
                                        y: 226,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img0Wild",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1013,
                                        y: 277,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img0Wild",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1013,
                                        y: 332,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableWild5img1",
                                        type: mt.objects.TEXT,
                                        class: "ps0-5",
                                        style: a,
                                        x: 1048,
                                        y: 226,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableWild4img1",
                                        type: mt.objects.TEXT,
                                        class: "ps0-4",
                                        style: a,
                                        x: 1048,
                                        y: 277,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableWild3img1",
                                        type: mt.objects.TEXT,
                                        class: "ps0-3",
                                        style: a,
                                        x: 1048,
                                        y: 332,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img2Strawberry",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 373,
                                        y: 187,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img2Strawberry",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 373,
                                        y: 239,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img2Strawberry",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 373,
                                        y: 294,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableStrawberry5",
                                        type: mt.objects.TEXT,
                                        class: "ps1-5",
                                        style: a,
                                        x: 405,
                                        y: 187,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableStrawberry4",
                                        type: mt.objects.TEXT,
                                        class: "ps1-4",
                                        style: a,
                                        x: 405,
                                        y: 239,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableStrawberry3",
                                        type: mt.objects.TEXT,
                                        class: "ps1-3",
                                        style: a,
                                        x: 405,
                                        y: 294,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img4Watermelon",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 373,
                                        y: 720,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img4Watermelon",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 373,
                                        y: 772,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img4Watermelon",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 373,
                                        y: 824,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable2Watermelon5",
                                        type: mt.objects.TEXT,
                                        class: "ps3-5",
                                        style: a,
                                        x: 405,
                                        y: 720,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable2Watermelon4",
                                        type: mt.objects.TEXT,
                                        class: "ps3-4",
                                        style: a,
                                        x: 405,
                                        y: 772,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable2Watermelon3",
                                        type: mt.objects.TEXT,
                                        class: "ps3-3",
                                        style: a,
                                        x: 405,
                                        y: 824,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img3Plum",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 373,
                                        y: 454,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img3Plum",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 373,
                                        y: 505,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img3Plum",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 373,
                                        y: 559,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable3Plum5",
                                        type: mt.objects.TEXT,
                                        class: "ps2-5",
                                        style: a,
                                        x: 405,
                                        y: 454,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable3Plum4",
                                        type: mt.objects.TEXT,
                                        class: "ps2-4",
                                        style: a,
                                        x: 405,
                                        y: 505,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable3Plum3",
                                        type: mt.objects.TEXT,
                                        class: "ps2-3",
                                        style: a,
                                        x: 405,
                                        y: 559,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img5Lemon",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1603,
                                        y: 187,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img5Lemon",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1603,
                                        y: 239,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img5Lemon",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1603,
                                        y: 294,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Lemon5",
                                        type: mt.objects.TEXT,
                                        class: "ps4-5",
                                        style: a,
                                        x: 1636,
                                        y: 187,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Lemon4",
                                        type: mt.objects.TEXT,
                                        class: "ps4-4",
                                        style: a,
                                        x: 1636,
                                        y: 239,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Lemon3",
                                        type: mt.objects.TEXT,
                                        class: "ps4-3",
                                        style: a,
                                        x: 1636,
                                        y: 294,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img6Cherry",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1603,
                                        y: 454,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img6Cherry",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1603,
                                        y: 505,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img6Cherry",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1603,
                                        y: 559,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Cherry5",
                                        type: mt.objects.TEXT,
                                        class: "ps5-5",
                                        style: a,
                                        x: 1636,
                                        y: 454,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Cherry4",
                                        type: mt.objects.TEXT,
                                        class: "ps5-4",
                                        style: a,
                                        x: 1636,
                                        y: 505,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Cherry3",
                                        type: mt.objects.TEXT,
                                        class: "ps5-3",
                                        style: a,
                                        x: 1636,
                                        y: 559,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5img7Orange",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1603,
                                        y: 720,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4img7Orange",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1603,
                                        y: 772,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3img7Orange",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1603,
                                        y: 824,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Orange5",
                                        type: mt.objects.TEXT,
                                        class: "ps6-5",
                                        style: a,
                                        x: 1636,
                                        y: 720,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Orange4",
                                        type: mt.objects.TEXT,
                                        class: "ps6-4",
                                        style: a,
                                        x: 1636,
                                        y: 772,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytable1Orange3",
                                        type: mt.objects.TEXT,
                                        class: "ps6-3",
                                        style: a,
                                        x: 1636,
                                        y: 824,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1Container",
                                    contents: [{
                                        name: "rulesNameText",
                                        type: mt.objects.TEXT,
                                        text: "RULES",
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
                                        class: "rtpInfo",
                                        name: "page3Text2",
                                        text: nge.i18n.get("rtpEN"),
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 960,
                                        y: 700,
                                        style: {
                                            font: "36pt futuraptmedium",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        class: "rtpInfo",
                                        name: "page3Text3",
                                        text: nge.i18n.get("rtpRU"),
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 960,
                                        y: 736,
                                        style: {
                                            font: "36pt futuraptmedium",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2Container",
                                    contents: [{
                                        name: "paylineNameText",
                                        type: mt.objects.TEXT,
                                        text: "PAYLINE",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image00",
                                        assetKey: "page2image00",
                                        x: 216,
                                        y: 132
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image01",
                                        assetKey: "page2image01",
                                        x: 410,
                                        y: 132
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image02",
                                        assetKey: "page2image02",
                                        x: 605,
                                        y: 132
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image03",
                                        assetKey: "page2image03",
                                        x: 800,
                                        y: 132
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image04",
                                        assetKey: "page2image04",
                                        x: 994,
                                        y: 132
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image05",
                                        assetKey: "page2image05",
                                        x: 1189,
                                        y: 132
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image06",
                                        assetKey: "page2image06",
                                        x: 1388,
                                        y: 132
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image07",
                                        assetKey: "page2image07",
                                        x: 1586,
                                        y: 132
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image08",
                                        assetKey: "page2image08",
                                        x: 216,
                                        y: 297
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image09",
                                        assetKey: "page2image09",
                                        x: 410,
                                        y: 297
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image10",
                                        assetKey: "page2image10",
                                        x: 605,
                                        y: 297
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image11",
                                        assetKey: "page2image11",
                                        x: 800,
                                        y: 297
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image12",
                                        assetKey: "page2image12",
                                        x: 994,
                                        y: 297
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image13",
                                        assetKey: "page2image13",
                                        x: 1189,
                                        y: 297
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image14",
                                        assetKey: "page2image14",
                                        x: 1388,
                                        y: 297
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image15",
                                        assetKey: "page2image15",
                                        x: 1586,
                                        y: 297
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image16",
                                        assetKey: "page2image16",
                                        x: 216,
                                        y: 462
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image17",
                                        assetKey: "page2image17",
                                        x: 410,
                                        y: 462
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image18",
                                        assetKey: "page2image18",
                                        x: 605,
                                        y: 462
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image19",
                                        assetKey: "page2image19",
                                        x: 800,
                                        y: 462
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image20",
                                        assetKey: "page2image20",
                                        x: 994,
                                        y: 462
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image21",
                                        assetKey: "page2image21",
                                        x: 1189,
                                        y: 462
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image22",
                                        assetKey: "page2image22",
                                        x: 1388,
                                        y: 462
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image23",
                                        assetKey: "page2image23",
                                        x: 1586,
                                        y: 462
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image24",
                                        assetKey: "page2image24",
                                        x: 216,
                                        y: 627
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image25",
                                        assetKey: "page2image25",
                                        x: 410,
                                        y: 627
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image26",
                                        assetKey: "page2image26",
                                        x: 605,
                                        y: 627
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image27",
                                        assetKey: "page2image27",
                                        x: 800,
                                        y: 627
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image28",
                                        assetKey: "page2image28",
                                        x: 994,
                                        y: 627
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image29",
                                        assetKey: "page2image29",
                                        x: 1189,
                                        y: 627
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image30",
                                        assetKey: "page2image30",
                                        x: 1388,
                                        y: 627
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image31",
                                        assetKey: "page2image31",
                                        x: 1586,
                                        y: 627
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image32",
                                        assetKey: "page2image32",
                                        x: 216,
                                        y: 793
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image33",
                                        assetKey: "page2image33",
                                        x: 410,
                                        y: 793
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image34",
                                        assetKey: "page2image34",
                                        x: 605,
                                        y: 793
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image35",
                                        assetKey: "page2image35",
                                        x: 800,
                                        y: 793
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image36",
                                        assetKey: "page2image36",
                                        x: 994,
                                        y: 793
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image37",
                                        assetKey: "page2image37",
                                        x: 1189,
                                        y: 793
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image38",
                                        assetKey: "page2image38",
                                        x: 1388,
                                        y: 793
                                    }, {
                                        type: mt.assets.IMAGE,
                                        name: "page2image39",
                                        assetKey: "page2image39",
                                        x: 1586,
                                        y: 793
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber1",
                                        text: 1,
                                        style: o,
                                        x: 218,
                                        y: 146,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber2",
                                        text: 2,
                                        style: o,
                                        x: 408,
                                        y: 146,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: 3,
                                        style: o,
                                        x: 604,
                                        y: 146,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: 4,
                                        style: o,
                                        x: 798,
                                        y: 146,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: 5,
                                        style: o,
                                        x: 992,
                                        y: 146,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber6",
                                        text: 6,
                                        style: o,
                                        x: 1187,
                                        y: 146,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber7",
                                        text: 7,
                                        style: o,
                                        x: 1385,
                                        y: 146,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber8",
                                        text: 8,
                                        style: o,
                                        x: 1584,
                                        y: 146,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber9",
                                        text: 9,
                                        style: o,
                                        x: 215,
                                        y: 310,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber10",
                                        text: 10,
                                        style: o,
                                        x: 408,
                                        y: 310,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber11",
                                        text: 11,
                                        style: o,
                                        x: 604,
                                        y: 310,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber12",
                                        text: 12,
                                        style: o,
                                        x: 798,
                                        y: 310,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber13",
                                        text: 13,
                                        style: o,
                                        x: 992,
                                        y: 310,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber14",
                                        text: 14,
                                        style: o,
                                        x: 1187,
                                        y: 310,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber15",
                                        text: 15,
                                        style: o,
                                        x: 1385,
                                        y: 310,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber16",
                                        text: 16,
                                        style: o,
                                        x: 1584,
                                        y: 310,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber17",
                                        text: 17,
                                        style: o,
                                        x: 215,
                                        y: 476,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber18",
                                        text: 18,
                                        style: o,
                                        x: 408,
                                        y: 476,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber19",
                                        text: 19,
                                        style: o,
                                        x: 604,
                                        y: 476,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber20",
                                        text: 20,
                                        style: o,
                                        x: 798,
                                        y: 476,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber21",
                                        text: 21,
                                        style: o,
                                        x: 992,
                                        y: 476,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber22",
                                        text: 22,
                                        style: o,
                                        x: 1187,
                                        y: 476,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber23",
                                        text: 23,
                                        style: o,
                                        x: 1385,
                                        y: 476,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber24",
                                        text: 24,
                                        style: o,
                                        x: 1584,
                                        y: 476,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber25",
                                        text: 25,
                                        style: o,
                                        x: 215,
                                        y: 642,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber26",
                                        text: 26,
                                        style: o,
                                        x: 408,
                                        y: 642,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber27",
                                        text: 27,
                                        style: o,
                                        x: 604,
                                        y: 642,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber28",
                                        text: 28,
                                        style: o,
                                        x: 798,
                                        y: 642,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber29",
                                        text: 29,
                                        style: o,
                                        x: 992,
                                        y: 642,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber30",
                                        text: 30,
                                        style: o,
                                        x: 1187,
                                        y: 642,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber31",
                                        text: 31,
                                        style: o,
                                        x: 1385,
                                        y: 642,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber32",
                                        text: 32,
                                        style: o,
                                        x: 1584,
                                        y: 642,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber33",
                                        text: 33,
                                        style: o,
                                        x: 215,
                                        y: 808,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber34",
                                        text: 34,
                                        style: o,
                                        x: 408,
                                        y: 808,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber35",
                                        text: 35,
                                        style: o,
                                        x: 604,
                                        y: 808,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber36",
                                        text: 36,
                                        style: o,
                                        x: 798,
                                        y: 808,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber37",
                                        text: 37,
                                        style: o,
                                        x: 992,
                                        y: 808,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber38",
                                        text: 38,
                                        style: o,
                                        x: 1187,
                                        y: 808,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber39",
                                        text: 39,
                                        style: o,
                                        x: 1385,
                                        y: 808,
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber40",
                                        text: 40,
                                        style: o,
                                        x: 1584,
                                        y: 808,
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
                                    x: 888,
                                    y: 920
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
                                    y: 920
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
                                    x: 992,
                                    y: 920
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
        1239: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Tabs = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Tabs();
                return ["mobileBackToGameButtonButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = +t.y + 20)
                })), e
            }
        },
        1240: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile = {}
        },
        1241: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Intro = function() {
                var e = new nge.App.DjGameBase.Tpl.Groups.Mobile.Intro;
                return e.styles[".album .introScreenTextCenter"] = {
                    alignY: "bottom",
                    y: -440,
                    maxWidth: 1400
                }, e.styles[".portrait .introScreenTextCenter"] = {
                    alignY: "bottom",
                    y: -520,
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
                    class: "introScreenTextCenter coloredText",
                    text: nge.i18n.get("INTRO_TEXT"),
                    anchorX: .5,
                    anchorY: .5,
                    maxWidth: 1050,
                    x: 0,
                    style: {
                        font: "31pt futuraptheavy",
                        fill: 16769869,
                        align: "center",
                        shadowColor: 3888,
                        shadowBlur: 10,
                        shadowOffsetY: 4,
                        stroke: 0,
                        strokeThickness: 2,
                        lineHeight: 50
                    }
                }]), e
            }
        },
        1242: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Help = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image0",
                            fullPath: e + "playarea/page0image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "page0image7",
                            fullPath: e + "playarea/page0image7.png"
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
        1243: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Mobile.Ui();
                return e.styles[".titleStyleMobile"].style.fill = 16764490, e.styles[".freeSpinAmountStyle"].style.fill = 6684577, e.styles[".freeSpinAmountStyle"].style.font = "24pt futuraptmedium", e
            }
        },
        1244: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1245: function(e, t) {
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
                            key: "demoPlayButton",
                            block: mt.assets.blocks.STATIC,
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
        1246: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Play = function() {
                var e = nge.appPath + "img/",
                    t = nge.Lib.Helper.mobileAndTabletCheck(),
                    a = new nge.App.DjGameBase.Tpl.States.Play;
                return a.styles = nge.Lib.Helper.mergeObjs(a.styles, {
                    ".album .reelsBorderContainer": {
                        y: -5
                    },
                    ".portrait .reelsBorderContainer": {
                        y: 460
                    },
                    ".album .reelsBgScaleContainer": {
                        scaleX: t ? .95 : 1,
                        scaleY: t ? .95 : 1,
                        y: t ? 57 : 60
                    },
                    ".portrait .reelsBgScaleContainer": {
                        scaleX: .64,
                        scaleY: .64,
                        y: 37
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
                        x: -960 * (t ? .95 : 1),
                        y: -540,
                        scaleX: t ? .95 : 1,
                        scaleY: t ? .95 : 1
                    },
                    ".portrait .slotMachineFrameMainGame": {
                        x: -614.4,
                        y: 460,
                        scaleX: .64,
                        scaleY: .64
                    }
                }), a.assets.contents.push({
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "logo",
                    fullPath: e + "playarea/logo.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "reelsBg",
                    fullPath: e + "playarea/reelsBg.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameBottom",
                    fullPath: e + "playarea/slotMachineFrameBottom.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameLeft",
                    fullPath: e + "playarea/slotMachineFrameLeft.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameRight",
                    fullPath: e + "playarea/slotMachineFrameRight.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameTop",
                    fullPath: e + "playarea/slotMachineFrameTop.png"
                }), nge.Lib.Helper.tplSetContainerContents(a, "logoAlbumContainer", [{
                    type: mt.objects.IMAGE,
                    name: "playareaLogo",
                    assetKey: "logo",
                    anchorX: .5,
                    anchorY: .5,
                    y: 45
                }]), nge.Lib.Helper.tplSetContainerContents(a, "logoPortraitContainer", [{
                    type: mt.objects.IMAGE,
                    name: "playareaLogoVertical",
                    assetKey: "logo",
                    scaleX: 1.65,
                    scaleY: 1.65,
                    anchorX: .5,
                    anchorY: .5,
                    y: 335
                }]), nge.Lib.Helper.tplObjFind(a, "slotMachineFrameContainer").class = "slotMachineFrameContainer", nge.Lib.Helper.tplSetContainerContents(a, "slotMachineFrameContainer", [{
                    type: mt.objects.GROUP,
                    name: "slotMachineFrameMainGame",
                    class: "slotMachineFrameMainGame",
                    contents: [{
                        type: mt.objects.GROUP,
                        name: "slotMachineFrameFreeSpinGame"
                    }, {
                        type: mt.objects.IMAGE,
                        name: "slotMachineFrameLeft",
                        assetKey: "slotMachineFrameLeft",
                        x: 246,
                        y: 45
                    }, {
                        type: mt.objects.IMAGE,
                        name: "slotMachineFrameRight",
                        assetKey: "slotMachineFrameRight",
                        x: 1622,
                        y: 45
                    }, {
                        type: mt.objects.IMAGE,
                        name: "slotMachineFrameBottom",
                        assetKey: "slotMachineFrameBottom",
                        x: 268,
                        y: 904
                    }, {
                        type: mt.objects.IMAGE,
                        name: "slotMachineFrameTop",
                        assetKey: "slotMachineFrameTop",
                        x: 268,
                        y: 24
                    }]
                }]), (e = nge.Lib.Helper.tplObjFind(a, "reelsBorderContainer")).alignX = "center", e.alignY = "top", e.class = "reelsBorderContainer", e.contents = [{
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
                            anchorY: 0
                        }]
                    }]
                }], a
            }
        },
        1247: function(e, t) {
            nge.App[nge.appNS].Tpl.States.LoadAssets = function() {
                var e = nge.appPath + "img/",
                    t = nge.Lib.Helper.mobileAndTabletCheck(),
                    a = {
                        name: "assets",
                        contents: []
                    };
                return t && a.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "sidebar",
                    atlas: e + "atlases/sidebar.json",
                    fullPath: e + "atlases/sidebar.png"
                }), a.contents.push({
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
                    block: mt.assets.blocks.STATIC,
                    key: "symbols_blur",
                    atlas: e + "atlases/symbols_blur.json",
                    fullPath: e + "atlases/symbols_blur.png"
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
                    key: "atlases_bgStatic",
                    atlas: e + "atlases/atlases_bgStatic.json",
                    fullPath: e + "atlases/atlases_bgStatic.png"
                }), a.contents.push({
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "loading-progress-bar",
                    fullPath: e + "atlases/loading-progress-bar.png"
                }, {
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
                    key: "introScreenBg",
                    fullPath: e + "atlases/introScreenBg.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "introScreenBgVertical",
                    fullPath: e + "atlases/introScreenBgVertical.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "bgAreaVertical",
                    fullPath: e + "atlases/bgAreaVertical.jpg"
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
                    key: "winlineAll",
                    spine: e + "spine/winlines/winlines_all.json"
                }), {
                    assets: a,
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        5: function(e, t, a) {
            a(1176), a(1177), a(1178), a(1179), a(1180), a(1181), a(1182), a(1183), a(1184), a(1185), a(1186), a(1187), a(1188), a(1189), a(1190), a(1191), a(1192), a(1193), a(1194), a(1195), a(1196), a(1197), a(1198), a(1199), a(1200), a(1201), a(1202), a(1203), a(1204), a(1205), a(1206), a(1207), a(1208), a(1209), a(1210), a(1211), a(1212), a(1213), a(1214), a(1215), a(1216), a(1217), a(1218), a(1219), a(1220), a(1221), a(1222), a(1223), a(1224), a(1225), a(1226), a(1227), a(1228), a(1229), a(1230), a(1231), a(1232), a(1233), a(1234), a(1235), a(1236), a(1237), a(1238), a(1239), a(1240), a(1241), a(1242), a(1243), a(1244), a(1245), a(1246), a(1247)
        }
    }
]);