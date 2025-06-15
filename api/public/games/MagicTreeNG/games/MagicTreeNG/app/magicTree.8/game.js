var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, a) {
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
        for (t = t || 0; t < s; t++)
            if (a[t] == e || Object.is(a[t], e)) return !0;
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
}), "es6", "es3"), (window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        1e3: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile = {}
        },
        1001: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile.Controller = nge.App[nge.appNS].Com.Freespin.Controller.extend((function() {}))
        },
        1002: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe = {}
        },
        1003: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe.Controller = nge.App.DjGameBase.Com.InfoSwipe.Controller.extend((function() {
                this.pageNames = "pageInfoOneContainer pageInfoTwoContainer pageInfoThreeContainer pageInfoFourContainer pageInfoFiveContainer pageInfoSixContainer pageInfoSevenContainer pageInfoEightContainer pageInfoNineContainer pageInfoTenContainer".split(" ")
            }))
        },
        1004: function(e, t) {
            nge.App[nge.appNS].Com.Intro = {}
        },
        1005: function(e, t) {
            nge.App[nge.appNS].Com.Intro.Controller = nge.App.DjGameBase.Com.Intro.Controller.extend((function() {
                var e = this;
                this.playableStates = ["play", "pickBonus"], this.lastStateToLayer = {
                    FreeSpins: "gameFreeSpin",
                    PickBonus: "pickBonus1",
                    CollectionBonus: "pickBonus2"
                }, this.hideIntro = function() {
                    if (nge.localData.set("introScreen.shown", !0), e.introScreenContainer.visible = !1, nge.localData.get("freeGame.showingOfferMenu")) nge.observer.fire("layersSwitcher.show", "gameOfferPopup");
                    else {
                        var t = nge.localData.get("slotMachine.lastResponse");
                        t && (t = t.realState ? e.lastStateToLayer[t.realState] : e.lastStateToLayer[t.state]) ? nge.observer.fire("layersSwitcher.show", t) : nge.observer.fire("layersSwitcher.showDefault")
                    }
                }
            }))
        },
        1006: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel = {}
        },
        1007: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel.Tpl = function() {
                for (var e = nge.appPath + "img/jackpotStatusPanel/", t = {
                        styles: {
                            ".jackpotValue": {
                                style: {
                                    font: '17pt "futuraptheavy"',
                                    fill: "#e5e7db"
                                }
                            },
                            ".jackpotValue.currency": {
                                style: {
                                    font: '16pt "futuraptheavy"',
                                    fill: "#fec36d"
                                }
                            },
                            ".badgeText": {
                                style: {
                                    font: '16pt "futuraptheavy"',
                                    fill: "#110F1A"
                                }
                            },
                            ".left": {
                                style: {
                                    align: "left"
                                }
                            },
                            ".right": {
                                style: {
                                    align: "right"
                                }
                            }
                        },
                        assets: {
                            name: "assets",
                            contents: [{
                                type: mt.assets.IMAGE,
                                key: "jackpotStatusLeftBg",
                                fullPath: e + "images/leftPanel.png"
                            }, {
                                type: mt.assets.IMAGE,
                                key: "jackpotStatusRightBg",
                                fullPath: e + "images/rightPanel.png"
                            }, {
                                type: mt.assets.IMAGE,
                                key: "jackpotStatusTopLeftBadge",
                                fullPath: e + "images/red.png"
                            }, {
                                type: mt.assets.IMAGE,
                                key: "jackpotStatusBottomLeftBadge",
                                fullPath: e + "images/silver.png"
                            }, {
                                type: mt.assets.IMAGE,
                                key: "jackpotStatusTopRightBadge",
                                fullPath: e + "images/gold.png"
                            }, {
                                type: mt.assets.IMAGE,
                                key: "jackpotStatusBottomRightBadge",
                                fullPath: e + "images/platinum.png"
                            }, {
                                type: mt.assets.IMAGE,
                                key: "jackpotHoverBottomLeft",
                                fullPath: e + "images/silverPanelShadow.png"
                            }, {
                                type: mt.assets.IMAGE,
                                key: "jackpotHoverTopLeft",
                                fullPath: e + "images/redPanelShadow.png"
                            }, {
                                type: mt.assets.IMAGE,
                                key: "jackpotHoverBottomRight",
                                fullPath: e + "images/platinumDiamandPanelShadow.png"
                            }, {
                                type: mt.assets.IMAGE,
                                key: "jackpotHoverTopRight",
                                fullPath: e + "images/goldPanelShadow.png"
                            }]
                        },
                        objects: {
                            name: "objects",
                            contents: [{
                                type: mt.objects.GROUP,
                                isVisible: !1,
                                name: "jackpotStatusContainer",
                                anchorX: .5,
                                x: 964,
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    assetKey: "jackpot_000",
                                    name: "jackpotStatusTimer",
                                    x: -4,
                                    y: 0,
                                    anchorX: .5,
                                    anchorY: 0
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "jackpotStatusTopLeftContainer",
                                    x: -407,
                                    y: 6,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "jackpotHoverTopLeft",
                                        assetKey: "jackpotHoverTopLeft"
                                    }, {
                                        type: mt.objects.TEXT,
                                        class: "badgeText jackpotTopLeftBadgeText",
                                        x: 73,
                                        y: 24,
                                        anchorX: .5,
                                        anchorY: .4
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "jackpotStatusTopLeftBadge",
                                        assetKey: "jackpotStatusTopLeftBadge",
                                        x: 73,
                                        y: 24,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        class: "jackpotValue jackpotTopLeftBalanceNumber",
                                        x: 250,
                                        y: 25,
                                        text: "0.00",
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "jackpotTopLeftCurrency",
                                        class: "jackpotValue currency",
                                        x: 303,
                                        y: 26,
                                        anchorX: 1,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "jackpotStatusBottomLeftContainer",
                                    x: -407,
                                    y: 50,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "jackpotHoverBottomLeft",
                                        assetKey: "jackpotHoverBottomLeft"
                                    }, {
                                        type: mt.objects.TEXT,
                                        class: "badgeText jackpotBottomLeftBadgeText",
                                        x: 72,
                                        y: 20,
                                        anchorX: .5,
                                        anchorY: .4
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "jackpotStatusBottomLeftBadge",
                                        assetKey: "jackpotStatusBottomLeftBadge",
                                        x: 72,
                                        y: 20,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        class: "jackpotValue jackpotBottomLeftBalanceNumber",
                                        x: 250,
                                        y: 22,
                                        text: "0.00",
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "jackpotBottomLeftCurrency",
                                        class: "jackpotValue currency",
                                        x: 303,
                                        y: 23,
                                        anchorX: 1,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "jackpotStatusTopRightContainer",
                                    x: 80,
                                    y: 6,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "jackpotHoverTopRight",
                                        assetKey: "jackpotHoverTopRight"
                                    }, {
                                        type: mt.objects.TEXT,
                                        class: "badgeText jackpotTopRightBadgeText",
                                        x: 245,
                                        y: 24,
                                        anchorX: .5,
                                        anchorY: .4
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "jackpotStatusTopRightBadge",
                                        assetKey: "jackpotStatusTopRightBadge",
                                        x: 245,
                                        y: 24,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        class: "jackpotValue jackpotTopRightBalanceNumber",
                                        x: 127,
                                        y: 25,
                                        text: "0.00",
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "jackpotTopRightCurrency",
                                        class: "jackpotValue currency",
                                        x: 179,
                                        y: 26,
                                        anchorX: 1,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "jackpotStatusBottomRightContainer",
                                    x: 80,
                                    y: 50,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "jackpotHoverBottomRight",
                                        assetKey: "jackpotHoverBottomRight",
                                        x: -16
                                    }, {
                                        type: mt.objects.TEXT,
                                        class: "badgeText jackpotBottomRightBadgeText",
                                        x: 245,
                                        y: 20,
                                        anchorX: .5,
                                        anchorY: .4
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "jackpotStatusBottomRightBadge",
                                        assetKey: "jackpotStatusBottomRightBadge",
                                        x: 245,
                                        y: 20,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        class: "jackpotValue jackpotBottomRightBalanceNumber",
                                        x: 127,
                                        y: 22,
                                        text: "0.00",
                                        anchorX: 1,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "jackpotBottomRightCurrency",
                                        class: "jackpotValue currency",
                                        x: 179,
                                        y: 23,
                                        anchorX: 1,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.IMAGE,
                                    x: 42,
                                    y: 0,
                                    name: "jackpotStatusRightBg",
                                    assetKey: "jackpotStatusRightBg"
                                }, {
                                    type: mt.objects.IMAGE,
                                    x: -416,
                                    y: 0,
                                    name: "jackpotStatusLeftBg",
                                    assetKey: "jackpotStatusLeftBg"
                                }]
                            }]
                        }
                    }, a = 0; 30 >= a; a++) t.assets.contents.push({
                    type: mt.assets.IMAGE,
                    key: "jackpot_" + nge.Lib.Helper.LdgZero(a, 3),
                    fullPath: e + "movies/jackpot_" + nge.Lib.Helper.LdgZero(a, 3) + ".png"
                });
                return t
            }
        },
        1008: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher = {}
        },
        1009: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                var e = nge.App.getInstance("Com.Freespin.Cfg").get().manualMode;
                this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "winPopupContainer UISpinPanelsContainer UISpinPanel_Automatic_FreespinGame_Container UISpinPanel_Manual_FreespinGame_Container UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer UIFreespinWinContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGame slotMachineFrameFreeSpinGame frameMainGameLeft frameMainGameRight frameFreeSpinsGameLeft frameFreeSpinsGameRight reelsBg bgArea reelsBgFreeSpins bgAreaFreeSpins offersFreespinCounter offers1Container".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                fakeLoaderOff: {
                                    hideDelay: 1e3,
                                    hideDuration: 500,
                                    bgAlpha: .7
                                },
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGame frameMainGameLeft frameMainGameRight reelsBg bgArea".split(" ")
                            },
                            freespinStartPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGame frameMainGameLeft frameMainGameRight reelsBg bgArea".split(" ")
                            },
                            gameFreeSpin: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameFreeSpinGame frameFreeSpinsGameLeft frameFreeSpinsGameRight reelsBgFreeSpins bgAreaFreeSpins".split(" ")
                            },
                            freespinEndPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: ["UISpinPanelsContainer", e ? "UISpinPanel_Manual_FreespinGame_Container" : "UISpinPanel_Automatic_FreespinGame_Container", e ? "UIWinContainer" : "UIFreespinWinContainer", "UIQuickSettingsPanelContainer", "UIBottomPanelsContainer", "winPopupContainer", "slotMachineFrameContainer", "gameScreenContainer", "reelsBorderContainer", "backgroundContainer", "foregroundContainer", "slotMachineFrameFreeSpinGame", "frameFreeSpinsGameLeft", "frameFreeSpinsGameRight", "reelsBgFreeSpins", "bgAreaFreeSpins"]
                            },
                            pickBonusStartPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGame frameMainGameLeft frameMainGameRight reelsBg bgArea".split(" ")
                            },
                            fakeLoaderGameToBonus: {
                                fakeLoaderOn: {
                                    showDuration: 500,
                                    loaderText: "BONUS GAME",
                                    bgAlpha: .7
                                },
                                static: []
                            },
                            gameOfferPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGame frameMainGameLeft frameMainGameRight reelsBg bgArea offers1Container".split(" ")
                            },
                            gameOffer: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGame frameMainGameLeft frameMainGameRight reelsBg bgArea offersFreespinCounter".split(" ")
                            }
                        }
                    },
                    pickBonus: {
                        defaultLayer: "pickBonus1",
                        allContainers: "UISpinPanelsContainer UISpinPanel_Automatic_FreespinGame_Container UISpinPanel_Manual_FreespinGame_Container UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer UIFreespinWinContainer petalsContainer textContainer pickBonusS2Container pickBonusS1Container pickBonusS1Frames pickBonusS1Bg pickBonusS2Bg".split(" "),
                        layers: {
                            intro: {},
                            pickBonus1: {
                                fakeLoaderOff: {
                                    hideDelay: 1e3,
                                    hideDuration: 500,
                                    loaderText: "BONUS GAME",
                                    alpha: .7
                                },
                                static: "pickBonusS1Container petalsContainer textContainer UIQuickSettingsPanelContainer pickBonusS1Frames pickBonusS1Bg".split(" ")
                            },
                            pickBonus1CaptureTransition: {
                                capture: {},
                                static: "pickBonusS1Container petalsContainer textContainer UIQuickSettingsPanelContainer pickBonusS1Frames pickBonusS1Bg".split(" ")
                            },
                            pickBonus2: {
                                static: ["pickBonusS2Container", "petalsContainer", "UIQuickSettingsPanelContainer", "pickBonusS2Bg"]
                            },
                            pickBonusFinal: {
                                static: ["pickBonusS2Container", "petalsContainer", "UIQuickSettingsPanelContainer", "pickBonusS2Bg"]
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
        1010: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile = {}
        },
        1011: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameMainGame reelsBg bgArea slotMachineFrameFreeSpinGame reelsBgFreeSpins bgAreaFreeSpins autoSpinMobileContainer offers1Container".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                fakeLoaderOff: {
                                    hideDelay: 1e3,
                                    hideDuration: 500,
                                    bgAlpha: .7
                                },
                                static: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameMainGame reelsBg bgArea autoSpinMobileContainer".split(" ")
                            },
                            freespinStartPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameMainGame reelsBg bgArea".split(" ")
                            },
                            gameFreeSpin: {
                                static: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameFreeSpinGame reelsBgFreeSpins bgAreaFreeSpins".split(" ")
                            },
                            freespinEndPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameFreeSpinGame reelsBgFreeSpins bgAreaFreeSpins".split(" ")
                            },
                            pickBonusStartPopup: {
                                static: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameMainGame reelsBg bgArea autoSpinMobileContainer".split(" ")
                            },
                            fakeLoaderGameToBonus: {
                                fakeLoaderOn: {
                                    showDuration: 500,
                                    loaderText: "BONUS GAME",
                                    bgAlpha: .7
                                },
                                static: []
                            },
                            gameOfferPopup: {
                                static: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameMainGame reelsBg bgArea autoSpinMobileContainer offers1Container".split(" ")
                            },
                            gameOffer: {
                                static: "winPopupContainer slotMachineFrameContainer gameScreenContainer reelsBorderContainer backgroundContainer slotMachineFrameMainGame reelsBg bgArea autoSpinMobileContainer".split(" ")
                            }
                        }
                    },
                    pickBonus: {
                        defaultLayer: "pickBonus1",
                        allContainers: "pickBonusS1Container pickBonusS2Container infoPanelMobileContainer buttonsMobileContainer settingBottomUIMobileContainer pickBonusS1Bg pickBonusS1Frames textContainer pickBonusS2Bg gameFreeSpinMobileContainer".split(" "),
                        layers: {
                            intro: {},
                            pickBonus1: {
                                fakeLoaderOff: {
                                    hideDelay: 1e3,
                                    hideDuration: 500,
                                    loaderText: "BONUS GAME",
                                    bgAlpha: .7
                                },
                                static: ["pickBonusS1Container", "textContainer", "settingBottomUIMobileContainer", "pickBonusS1Frames", "pickBonusS1Bg"]
                            },
                            pickBonus1CaptureTransition: {
                                capture: [],
                                static: ["pickBonusS1Container", "textContainer", "settingBottomUIMobileContainer", "pickBonusS1Frames", "pickBonusS1Bg"]
                            },
                            pickBonus2: {
                                static: ["pickBonusS2Container", "settingBottomUIMobileContainer", "pickBonusS2Bg"]
                            },
                            pickBonusFinal: {
                                static: ["pickBonusS2Container", "settingBottomUIMobileContainer", "pickBonusS2Bg"]
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
        1012: function(e, t) {
            nge.App[nge.appNS].Com.Load = {}
        },
        1013: function(e, t) {
            nge.App[nge.appNS].Com.Load.Cfg = nge.App.ClassicGameBase.Com.Load.Cfg.extend((function() {
                var e = nge.appPath + "css/fonts/",
                    t = nge.appPath + "img/fonts/";
                this.fonts.futuraptheavy = e + "FuturaPT-Heavy", this.fonts.futuraptmedium = e + "FuturaPT-Medium", this.fonts.introBlack = e + "Intro-Black", this.fonts.futurasbl = e + "futurasbl", this.fonts.futurasblcash = e + "futurasblcash", this.fonts.rockbl = e + "rockbl", this.fonts.rockstd = e + "rockstd", this.fonts.segoe_UI_Black = e + "segoe_UI_Black", this.fonts.seguibl = e + "seguibl", this.fonts.segoe_ui_black = e + "segoe_UI_Black", this.fonts.brooklynsamuels = e + "brooklynsamuels", this.fonts.futurabtmedium = e + "futurabtmedium", this.fonts.frizquadratactt_bold = e + "frizquadratactt_bold", this.atlasesGroups = ["atlases", "atlases_play", "atlases_pickBonus"], this.bitmapFonts = {
                    orange_font: {
                        type: mt.assets.BITMAP_FONT,
                        textureURL: t + "orange_font.png",
                        bitmapFont: t + "orange_font.fnt"
                    },
                    jackpot_font: {
                        type: mt.assets.BITMAP_FONT,
                        textureURL: t + "jackpot_font.png",
                        bitmapFont: t + "jackpot_font.fnt"
                    }
                }
            }))
        },
        1014: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets = {}
        },
        1015: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets.Controller = nge.App.ClassicGameBase.Com.LoadAssets.Controller.extend((function() {
                this.preload = function() {
                    nge.wrap.cache.checkImageKey("settingsContainerBg") || nge.wrap.load.image("settingsContainerBg", nge.Lib.Helper.create1PxPng(58, 54, 66, 240, !0)), this.super.preload()
                }
            }))
        },
        1016: function(e, t) {
            nge.App[nge.appNS].Com.Popup = {}
        },
        1017: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                        font: "50pt introBlack",
                        fill: "#ffd55b",
                        align: "center"
                    },
                    t = {
                        font: "52pt introBlack",
                        fill: "#ffd55b",
                        align: "center"
                    },
                    a = {
                        color: 0,
                        a: .7,
                        showDuration: 300,
                        hideDuration: 250,
                        hideDelay: 250
                    },
                    s = {
                        type: "static",
                        assetKey: "popupBackground",
                        durations: {
                            show: 500,
                            hide: 510
                        }
                    },
                    n = {
                        type: 4,
                        name: "okButton",
                        x: 0,
                        y: 276,
                        anchorX: .5,
                        anchorY: .5,
                        isVisible: !1,
                        pixelPerfectOver: !1,
                        pixelPerfectClick: !1,
                        class: "popupButton",
                        assetKey: "okButtonAsset"
                    };
                this.cfg.useAlphaOnPopupHide = !0, this.cfg.popups = {
                    pickBonusStartPopup: {
                        shadow: a,
                        background: s,
                        button: n,
                        content: [{
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -313,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -178,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_BONUS_GAME"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -90,
                                maxWidth: 400,
                                style: {
                                    font: "38pt introBlack",
                                    fill: "#ffd55b",
                                    align: "center"
                                }
                            }
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_PICK_BONUS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: 90,
                                maxWidth: 400,
                                style: {
                                    font: "72pt introBlack",
                                    fill: "#fff8af",
                                    align: "center"
                                }
                            }
                        }]
                    },
                    pickBonusFinal: {
                        shadow: a,
                        background: s,
                        button: n,
                        content: [{
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -313,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -178,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 78,
                                anchorX: .5,
                                anchorY: .5,
                                y: -55,
                                maxWidth: 400,
                                assetKey: "orange_font"
                            },
                            dataKey: "finalPopupCounter"
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_CREDITS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: 145,
                                maxWidth: 400,
                                style: e
                            }
                        }]
                    },
                    freespinStartPopup: {
                        shadow: a,
                        background: s,
                        button: n,
                        content: [{
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -313,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -178,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 78,
                                anchorX: .5,
                                anchorY: .5,
                                y: -65,
                                maxWidth: 400,
                                assetKey: "orange_font"
                            },
                            dataKey: "freespinsCounter"
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_FREE_SPINS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: 135,
                                maxWidth: 380,
                                style: {
                                    font: "44pt introBlack",
                                    fill: "#ffd55b",
                                    align: "center"
                                }
                            }
                        }]
                    },
                    freespinEndPopup: {
                        shadow: a,
                        background: s,
                        button: n,
                        content: [{
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -313,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -178,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 78,
                                anchorX: .5,
                                anchorY: .5,
                                y: -55,
                                maxWidth: 400,
                                assetKey: "orange_font"
                            },
                            dataKey: "freespinTotalWinCounter"
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_CREDITS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: 145,
                                maxWidth: 400,
                                style: e
                            }
                        }]
                    },
                    freespinEndPopupNoWin: {
                        shadow: a,
                        background: s,
                        button: n,
                        content: [{
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -178,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 78,
                                anchorX: .5,
                                anchorY: .5,
                                y: -55,
                                maxWidth: 400,
                                assetKey: "orange_font"
                            },
                            dataKey: "freespinTotalWinCounter"
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("POPUP_CREDITS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: 145,
                                maxWidth: 400,
                                style: e
                            }
                        }]
                    },
                    additionalFreespinsPopup: {
                        shadow: a,
                        background: s,
                        button: n,
                        content: [{
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -313,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -178,
                                maxWidth: 450,
                                style: t
                            }
                        }, {
                            model: {
                                type: mt.objects.BITMAP_TEXT,
                                name: "additionalFreespinsPopupCounter",
                                text: "999",
                                size: 105,
                                y: -75,
                                anchorX: .5,
                                anchorY: .5,
                                maxWidth: 200,
                                assetKey: "orange_font"
                            },
                            dataKey: "additionalFreespinValue"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                name: "additionalFreespinsPopupText",
                                text: nge.i18n.get("POPUP_ADDITIONAL_FREE_SPINS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: 125,
                                maxWidth: 350,
                                style: t
                            }
                        }]
                    },
                    insufficientFundsPopup: {
                        shadow: a,
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
                            assetKey: "okButtonAsset",
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
                                maxWidth: 870,
                                anchorY: .5,
                                y: 55,
                                style: {
                                    font: "30pt futuraptheavy",
                                    fill: "#efe1bf",
                                    align: "center"
                                }
                            }
                        }]
                    }
                }
            }))
        },
        1018: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Tpl = function(e) {
                var t = e;
                return t || (t = nge.appPath + "img/"), (e = nge.App.DjGameBase.Com.Popup.Tpl(e)).assets.contents = [{
                    type: mt.assets.IMAGE,
                    key: "popupBackground",
                    fullPath: t + "playarea/popup.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "notificationPopupBackground",
                    fullPath: t + "playarea/notification_popup_bg.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "okButtonAsset",
                    width: 804,
                    height: 108,
                    frameWidth: 268,
                    fullPath: t + "playarea/popupOkButton.png"
                }], e
            }
        },
        1019: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin = {}
        },
        1020: function(e, t) {
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
                            y: 426,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "regularWinCounter",
                                isVisible: !1,
                                x: 0,
                                y: 70,
                                anchorX: .5,
                                anchorY: 1,
                                text: "0",
                                assetKey: "orange_font",
                                size: 108
                            }]
                        }]
                    }
                }
            }
        },
        1021: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1022: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.DjGameBase.Com.SlotMachine.Cfg.extend((function() {
                this.params.additionalBlurs = !1, this.params.mw = 5, this.params.mh = 3, this.params.wildSymbol = "12", this.params.tintDark = 10066329, this.params.tintNormal = 16777215, this.params.tintDarkAlpha = 1, this.params.tintNormalAlpha = 1, this.params.imageHeight = "original", this.params.imageWidth = "original", this.params.tweenDuration.blur = 85, this.params.th = [3, 3, 3, 3, 3], this.params.symbolsBlurKeys = "100 101 102 103 104 105 106 107 108 109 110".split(" "), this.params.tweenDuration.oldSymbols = 120, this.params.tweenDuration.newSymbols = 120, this.params.lastSymbolsBlurStaticKeys = [
                    ["7"],
                    ["8"],
                    ["9"],
                    ["7"],
                    ["7"]
                ], this.params.symbolsLanding = [{
                    symbol: "1",
                    assetKey: "M01_000_Anim",
                    animationName: "landing"
                }], this.params.symbolAnimationContainerName = "symbolAnimations", this.params.recyclerView.enabled = !0, this.params.recyclerView.reelsStopCounter = [12, 18, 24, 30, 36], this.params.recyclerView.reelsSpeed = [1.9, 1.9, 1.9, 1.9, 1.9, 1.9], this.params.recyclerView.reelsIntrigueSpeed = 4, this.params.recyclerView.reelsSpeedUpSpeed = 3, this.params.recyclerView.borderSymbolsCount = 1, this.params.recyclerView.intrigueAdditionalCounter = 60, this.params.useSMJumpOnFreespins = !0
            }))
        },
        1023: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.DjGameBase.Com.SlotMachine.Controller.extend((function() {
                var e, t = this,
                    a = [],
                    s = 1;
                this.create = function() {
                    this.super.create(), e = nge.findOne("^foregroundContainer")
                };
                var n = function() {
                        s = 4, a.forEach((function(e) {
                            e && e.animationActive && (e.animationSpeed = s)
                        }))
                    },
                    l = function() {
                        a = [], s = .8
                    },
                    p = function() {
                        nge.observer.fire("slotMachine.spinComplete.featureCoinsProcess.done")
                    },
                    o = function(e, t, a) {
                        return a || (a = 0), a += e[t], e.parent ? o(e.parent, t, a) : a
                    },
                    i = function(t, n) {
                        var i = nge.Mlm.Objects.Spine({
                            assetKey: "coin_drop",
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1
                        });
                        return (i = nge.objects.create(i, e, !0)).x = o(t.symbObj.texture, "x"), i.y = o(t.symbObj.texture, "y"), i.setAnimationByMode(0, t.animationName, nge.spine.HIDE, s), a.push(i), i.onEvent.addOnce((function(e, a) {
                            "event_transform_start" === a.data.name && nge.observer.fire("slotMachine.setSymbol", {
                                coords: t.coords,
                                key: t.newSymbol
                            })
                        })), n || (n = !0, i.onComplete.addOnce((function() {
                            nge.rafSetTimeout((function() {
                                l(), p()
                            }), 1)
                        }))), n
                    },
                    r = function(e) {
                        if (e.needPlayWin) {
                            var a = e.featureCoins,
                                n = nge.localData.get("slotMachine.spinResult.columns"),
                                l = {
                                    11: "12",
                                    13: "14"
                                };
                            e = [];
                            for (var o = 0; o < a.length; o++) {
                                var r = a[o],
                                    u = n[+r[0]][+r[1]];
                                r = {
                                    coords: [+r[0], +r[1]],
                                    symbObj: t._service._view.getSymbolByPosition({
                                        reel: +r[0],
                                        row: +r[1]
                                    })
                                }, l[u] ? (r.newSymbol = l[u], r.animationName = "drop_symb_scatter_tranform") : (r.newSymbol = "1", r.animationName = "drop_symb_scatter_landing"), e.push(r)
                            }
                            for (a = !1, nge.observer.fire("slotMachine.featureCoins" + Math.min(5, e.length), null, 400 / s), n = 0; n < e.length; n++) a = i(e[n], a)
                        } else p()
                    };
                this.customSubscribe = function() {
                    this.super.customSubscribe(), nge.observer.add("slotMachine.spinComplete.featureCoinsProcess.fakeDone", r), nge.observer.add("Transport.close", l), nge.observer.add("magicTree.coins.skip", n)
                }
            }))
        },
        1024: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Service = nge.App.DjGameBase.Com.SlotMachine.Service.extend((function() {
                this.setSlotMachineAdditionalBlurs = function() {}
            }))
        },
        1025: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbols = nge.Com.SlotMachine.Symbols.extend((function() {
                this.items = [{
                    name: "0",
                    textureUrl: "M00_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M00_000_Anim"
                    },
                    repeat: 1,
                    animationOnTop: !0
                }, {
                    name: "1",
                    textureUrl: "M01_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M01_000_Anim"
                    },
                    repeat: 1,
                    textureZ: 10,
                    animationOnTop: !0
                }, {
                    name: "2",
                    textureUrl: "M02_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M02_000_Anim"
                    },
                    repeat: 1,
                    animationOnTop: !0
                }, {
                    name: "3",
                    textureUrl: "M03_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M03_000_Anim"
                    },
                    repeat: 1,
                    animationOnTop: !0
                }, {
                    name: "4",
                    textureUrl: "M04_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M04_000_Anim"
                    },
                    repeat: 1,
                    tintAlpha: .75,
                    animationOnTop: !0
                }, {
                    name: "5",
                    textureUrl: "M05_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M05_000_Anim"
                    },
                    repeat: 1,
                    animationOnTop: !0
                }, {
                    name: "6",
                    textureUrl: "M06_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M06_000_Anim"
                    },
                    repeat: 1,
                    animationOnTop: !0
                }, {
                    name: "7",
                    textureUrl: "M07_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M07_000_Anim"
                    },
                    repeat: 1,
                    tintAlpha: .75,
                    animationOnTop: !0
                }, {
                    name: "8",
                    textureUrl: "M08_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M08_000_Anim"
                    },
                    repeat: 1,
                    tintAlpha: .75,
                    animationOnTop: !0
                }, {
                    name: "9",
                    textureUrl: "M09_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M09_000_Anim"
                    },
                    repeat: 1,
                    tintAlpha: .75,
                    animationOnTop: !0
                }, {
                    name: "10",
                    textureUrl: "M10_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M10_000_Anim"
                    },
                    repeat: 1,
                    tintAlpha: .75,
                    animationOnTop: !0
                }, {
                    name: "11",
                    textureUrl: "M11_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M11_000_Anim"
                    },
                    repeat: 1,
                    textureZ: 10,
                    animationOnTop: !0
                }, {
                    name: "12",
                    textureUrl: "M12_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M12_000_Anim"
                    },
                    repeat: 1,
                    textureZ: 20,
                    animationOnTop: !0
                }, {
                    name: "13",
                    textureUrl: "M13_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M13_000_Anim"
                    },
                    repeat: 1,
                    textureZ: 30,
                    animationOnTop: !0
                }, {
                    name: "14",
                    textureUrl: "M14_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "M14_000_Anim"
                    },
                    repeat: 1,
                    textureZ: 40,
                    animationOnTop: !0
                }, {
                    name: "blank",
                    textureUrl: "blank.png",
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
                    textureUrl: "111.png",
                    animationFrames: ["111.png"]
                }, {
                    name: "113",
                    textureUrl: "111.png",
                    animationFrames: ["111.png"]
                }, {
                    name: "114",
                    textureUrl: "111.png",
                    animationFrames: ["111.png"]
                }]
            }))
        },
        1026: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Tpl = function() {
                var e = nge.appPath + "img/spine/symbols/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.SPINE,
                            key: "M00_000_Anim",
                            spine: e + "M00_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M01_000_Anim",
                            spine: e + "M01_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M02_000_Anim",
                            spine: e + "M02_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M03_000_Anim",
                            spine: e + "M03_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M04_000_Anim",
                            spine: e + "M04_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M05_000_Anim",
                            spine: e + "M05_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M06_000_Anim",
                            spine: e + "M06_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M07_000_Anim",
                            spine: e + "M07_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M08_000_Anim",
                            spine: e + "M08_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M09_000_Anim",
                            spine: e + "M09_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M10_000_Anim",
                            spine: e + "M10_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M11_000_Anim",
                            spine: e + "M11_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M12_000_Anim",
                            spine: e + "M12_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M13_000_Anim",
                            spine: e + "M13_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "M14_000_Anim",
                            spine: e + "M14_000.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "coin_drop",
                            spine: e + "coin_drop.json",
                            packed: !0
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "symbolAnimations"
                        }, {
                            type: mt.objects.GROUP,
                            id: "slotMachineGameContainer",
                            name: "slotMachineGameContainer",
                            width: 1400,
                            height: 720,
                            contents: []
                        }]
                    }
                }
            }
        },
        1027: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation = {}
        },
        1028: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.SPINE,
                            key: "spin_button_fx",
                            spine: nge.appPath + "img/spine/spinButton/spin_button.json",
                            packed: !0
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 6,
                            assetKey: "spin_button_fx",
                            name: "spin_button_fx",
                            x: 958,
                            y: 992,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1
                        }]
                    }
                }
            }
        },
        1029: function(e, t) {
            nge.App[nge.appNS].Com.PickBonus = {}
        },
        1030: function(e, t) {
            nge.App[nge.appNS].Com.PickBonus.Controller = nge.Com.Base.extend((function() {
                function e(e) {
                    var t = nge.findOne(e);
                    return t || console.error("can't find " + e), t
                }

                function t(e) {
                    nge.localData.set("apiMockup.bonus.magicTree.stage", e)
                }

                function a() {
                    "PickBonus" === nge.localData.get("slotMachine.state") && nge.localData.set("slotMachine.state", "Ready"), nge.observer.fire("pickBonus.endGame")
                }

                function s(e) {
                    1 === nge.localData.get("apiMockup.bonus.magicTree.stage") ? (g.setItemsStates(e.items), g.openPickedLotus(+e.bonusItem.index, e.bonusItem.value, (function() {
                        g.openOtherLoti(e.items, 1e3, (function() {
                            g.makeTransitionToS2(e.bonusItem.value, 3e3)
                        }))
                    }))) : (x.setItemsStates(e.items), x.openPickedLotus(+e.bonusItem.index, e.bonusItem.collectionSymbolId, e.items, (function() {
                        "true" === e.lastPick && x.openOtherLoti(e.items, 1e3, (function() {
                            var t = 0;
                            e.collections.forEach((function(e) {
                                t += +e.value
                            }));
                            var s = nge.Lib.Money.toCoins(t);
                            nge.localData.set("pickBonus.finalPopup.winAmount", s), nge.observer.fire("popup.show", {
                                popupName: "pickBonusFinal",
                                layerName: "pickBonusFinal",
                                nextLayerName: "fakeLoaderBonusToGame",
                                onHide: a,
                                finalPopupCounter: s
                            }, 3e3), nge.observer.fire("pickBonus.showFinalPopup", null, 3e3)
                        }))
                    })))
                }

                function n(e) {
                    s(e)
                }

                function l(e) {
                    s(e)
                }

                function p(e) {
                    var a = /^pickBonusS([1|2])Item([0-9]+)$/.exec(e);
                    a && Array.isArray(a) && (e = +a[1], a = +a[2], 1 === e ? (g.clickOnLotus(a), nge.observer.fire("pickUpBonusGame.actionRequest", a + 1)) : (x.clickOnLotus(a), nge.observer.fire("pickUpBonusGame.CollectionBonusItemRequest", a + 1)), t(e))
                }

                function o(e) {
                    "pickBonus2" === e && x.start()
                }

                function i(e) {
                    "fakeLoaderBonusToGame" === e && x.cleanup()
                }
                var r = this,
                    u = !1,
                    m = {
                        snake: 15,
                        tiger: 16,
                        monkey: 17,
                        pig: 18,
                        cat: 19
                    },
                    c = {
                        15: {
                            slot: "snake",
                            attachment: "snake_0"
                        },
                        16: {
                            slot: "tiger",
                            attachment: "tiger_0"
                        },
                        17: {
                            slot: "monkey",
                            attachment: "monkey_0"
                        },
                        18: {
                            slot: "pig",
                            attachment: "pig_0"
                        },
                        19: {
                            slot: "cat_idle_0",
                            attachment: "cat_idle_0"
                        }
                    },
                    y = function(e, t, a) {
                        return a || (a = 0), a += e[t], e.parent ? y(e.parent, t, a) : a
                    },
                    g = {
                        data: {},
                        proceedShaking: !0,
                        initialize: function() {
                            this.data = {
                                buttons: [],
                                pickOneTextContainer: null,
                                itemsStates: [],
                                flowerPicks: [],
                                lotusFrame: null
                            }, this.data.pickBonusS1ItemsContainer = e("^pickBonusS1ItemsContainer"), this.data.pickBonusS1ItemsContainer.children.forEach((function(t, a) {
                                (t = e("^pickBonusS1Item" + a + "Button")).interactive = !1, t.anchor = {
                                    x: .5,
                                    y: 1,
                                    type: 25
                                }, t.x += t.width / 2, t.y += t.height, this.data.buttons.push(t)
                            }), this), this.data.picksTextPisitionsX = [598, 958, 1317], this.data.picksText = nge.findOne("^picks"), this.data.picksText.alpha = 0;
                            var t = nge.Mlm.Objects.Spine({
                                type: 6,
                                assetKey: "bonus_lamps",
                                name: "s1Lamps",
                                x: 960,
                                y: 540,
                                isVisible: !1
                            });
                            this.data.s1Lamps = nge.objects.create(t, this.data.pickBonusS1ItemsContainer, !0), t = nge.Mlm.Objects.Spine({
                                type: 6,
                                assetKey: "petals",
                                name: "s1Petals",
                                x: 960,
                                y: 540,
                                isVisible: !1
                            });
                            var a = e("^petalsContainer");
                            this.data.s1Petals = nge.objects.create(t, a, !0), this.data.lotusFrame = nge.findOne("^pickBonusS1Frames"), this.data.pickOneTextContainer = nge.findOne("^textContainer"), this.data.pickBonusS1ItemsContainer.addChildAt(this.data.lotusFrame, 0), this.data.pickBonusS1ItemsContainer.addChild(this.data.pickOneTextContainer), this.data.pickBonusS1ItemsContainer.y = -1e3
                        },
                        start: function() {
                            this.data.s1Lamps.setAnimationByName(0, "lamps", !0), this.data.s1Petals.setAnimationByName(0, "play", !0);
                            var e = nge.tween.add(this.data.pickBonusS1ItemsContainer);
                            e.to({
                                y: 0
                            }, 700, nge.Lib.Tween.Easing.Back.Out, 1500), e.onStart.addOnce((function() {
                                nge.observer.fire("pickBonus.stage1.animationStart")
                            })), e.onComplete.addOnce((function() {
                                this.data.pickBonusS1ItemsContainer.y = 0, this.data.buttons.forEach((function(e) {
                                    e.interactive = !0
                                })), nge.observer.fire("s1.shake.random", null, 1e3)
                            }), this), e.start()
                        },
                        setItemsStates: function(e) {
                            this.data.itemsStates = e
                        },
                        clickOnLotus: function(e) {
                            this.disableInput()
                        },
                        shakeRandom: function(e) {
                            if (g.proceedShaking) {
                                var t = g.data.buttons[e];
                                if (t.visible) {
                                    e = nge.tween.add(t);
                                    var a = .5 <= nge.Lib.Helper.getRandomInt(0, 1) ? -1 : 1,
                                        s = .5 <= nge.Lib.Helper.getRandomInt(0, 1) ? nge.Lib.Tween.Easing.Bounce : nge.Lib.Tween.Easing.Back;
                                    e.to({
                                        rotation: .04 * a
                                    }, 400, s.Out), e.to({
                                        rotation: .04 * -a
                                    }, 400, s.In), e.to({
                                        rotation: 0
                                    }, 400, s.Out), e.onComplete.addOnce((function() {
                                        t.rotation = 0, g.proceedShaking && nge.observer.fire("s1.shake.random", null, nge.Lib.Helper.getRandomInt(3e3, 4e3))
                                    }), g), e.start()
                                }
                            }
                        },
                        openLotus: function(e, t, a) {
                            e = +e - 1, nge.observer.fire("pickBonus.bigLotus.open" + (a ? "Win" : "Other"));
                            var s = this.data.buttons[e];
                            s.visible = !1, s = nge.Mlm.Objects.Spine({
                                type: 6,
                                assetKey: "bonus_flowers_and_animals",
                                name: "s1FlowerPick" + e,
                                x: y(s, "x") - 3,
                                y: y(s, "y") - s.height / 2 - 6,
                                isVisible: !1
                            }), (s = nge.objects.create(s, this.data.pickBonusS1ItemsContainer, !0)).setAnimationByMode(0, a ? "flower_pick_win_number" : "flower_pick_auto", nge.spine.FREEZE);
                            var n = s.spine.skeleton.findSlot("pick_numbers");
                            t = s.spine.skeleton.getAttachmentByName("pick_numbers", t + ""), n.setAttachment(t), this.data.flowerPicks.push(s), a && (this.data.picksText.x = this.data.picksTextPisitionsX[e], nge.tween.add(this.data.picksText).to({
                                alpha: 1
                            }, 1e3, null, !0).start())
                        },
                        openPickedLotus: function(e, t, a) {
                            this.openLotus(e, t, !0), a()
                        },
                        openOtherLoti: function(e, t, a) {
                            this.proceedShaking = !1, nge.rafSetTimeout(function() {
                                e.forEach((function(e, t) {
                                    "false" === e.picked && 3 > t && this.openLotus(+e.index, e.value, !1)
                                }), this), a()
                            }.bind(this), t)
                        },
                        makeTransitionToS2: function(e, a) {
                            nge.rafSetTimeout(function() {
                                t(2), nge.tween.add(this.data.picksText).to({
                                    alpha: 0
                                }, 100).start();
                                var a = nge.tween.add(this.data.pickBonusS1ItemsContainer);
                                a.to({
                                    y: -1e3
                                }, 700, nge.Lib.Tween.Easing.Back.In), a.start(), nge.observer.fire("pickBonus.stage1.end"), nge.observer.fire("layersSwitcher.show", "pickBonus1CaptureTransition", 800), nge.observer.fire("layersSwitcher.show", "pickBonus2", 810), nge.rafSetTimeout(function() {
                                    this.cleanup()
                                }.bind(this), 810), x.setCount(0, e)
                            }.bind(this), a)
                        },
                        disableInput: function() {
                            this.data.buttons.forEach((function(e) {
                                e.interactive = !1
                            }), this)
                        },
                        enableInput: function() {
                            this.data.buttons.forEach((function(e) {
                                e.interactive = !0
                            }), this)
                        },
                        cleanup: function() {
                            this.enableInput(), this.data.itemsStates = null, this.data.s1Lamps.destroy(), this.data.s1Petals.destroy();
                            for (var e = 0; e < this.data.flowerPicks.length; e++) this.data.flowerPicks[e].destroy();
                            this.data.flowerPicks = []
                        }
                    },
                    x = {
                        data: {},
                        count: {},
                        proceedShaking: !0,
                        animalTables: {
                            data: null,
                            initialize: function() {
                                this.data = {};
                                var t = e("^animalTablesContainer");
                                for (var a in this.data.s2AnimalsIdle = [nge.objects.create({
                                        type: 6,
                                        assetKey: "bonus_cat_idle",
                                        name: "s2CatIdle",
                                        x: 1805,
                                        y: 340,
                                        scaleX: .9,
                                        scaleY: .9,
                                        isVisible: !1
                                    }, t, !0), nge.objects.create({
                                        type: 6,
                                        assetKey: "bonus_monkey_idle",
                                        name: "s2MonkeyIdle",
                                        x: 295,
                                        y: 453,
                                        scaleX: .9,
                                        scaleY: .9,
                                        isVisible: !1
                                    }, t, !0), nge.objects.create({
                                        type: 6,
                                        assetKey: "bonus_pig_idle",
                                        name: "s2PigIdle",
                                        x: 1618,
                                        y: 450,
                                        scaleX: .9,
                                        scaleY: .9,
                                        isVisible: !1
                                    }, t, !0), nge.objects.create({
                                        type: 6,
                                        assetKey: "bonus_snake_idle",
                                        name: "s2SnakeIdle",
                                        x: 114,
                                        y: 325,
                                        scaleX: .9,
                                        scaleY: .9,
                                        isVisible: !1
                                    }, t, !0), nge.objects.create({
                                        type: 6,
                                        assetKey: "bonus_tiger_idle",
                                        name: "s2TigerIdle",
                                        x: 122,
                                        y: 674,
                                        scaleX: .9,
                                        scaleY: .9,
                                        isVisible: !1
                                    }, t, !0)], t = e("^pickBonusS2Container"), this.data.s2WinEffectContainer = t, this.data.s2GlowWinEffectContainer = t, t = function(e) {
                                        var t = /(^.+)Table(.+)(Text|Image)([0-9]?)$/.exec(e.mt.data.name);
                                        if (t && Array.isArray(t)) {
                                            var a = m[t[1].toLowerCase()],
                                                s = t[2].toLowerCase() + t[3];
                                            t = parseInt(t[4]), isNaN(t) ? (this.data[a][s] = e, e.visible = !1) : (this.data[a][s] || (this.data[a][s] = {}), this.data[a][s][t] = e)
                                        }
                                    }, m) {
                                    var s = e("^" + a.toLowerCase() + "TableContainer");
                                    s && (this.data[m[a.toLowerCase()]] = {}, s.children.forEach(t, this))
                                }
                            },
                            start: function() {
                                this.data.s2AnimalsIdle.forEach((function(e) {
                                    e.play({
                                        name: "animals_idle",
                                        mode: nge.spine.LOOP
                                    })
                                })), nge.observer.fire("pickBonus.stage2.start")
                            },
                            highlight: function(e, t) {
                                var a = 0;
                                e.forEach((function(e) {
                                    "true" === e.picked && e.value === t && a++
                                }), this);
                                var s = (e = this.data[t]).numberText[0],
                                    n = nge.Mlm.Objects.Spine({
                                        type: 6,
                                        assetKey: "bonus_win_effect",
                                        name: "s2AnimalWin" + t,
                                        x: s.x + 40,
                                        y: s.y - 130,
                                        isVisible: !1
                                    });
                                nge.objects.create(n, this.data.s2WinEffectContainer, !0).play({
                                    name: "win_effect",
                                    mode: nge.spine.DESTROY
                                }), s = nge.Mlm.Objects.Spine({
                                    type: 6,
                                    assetKey: "bonus_glow_win_effect",
                                    name: "s2AnimalGlowWin" + t,
                                    x: s.x + 40,
                                    y: s.y - 130,
                                    isVisible: !1
                                }), nge.objects.create(s, this.data.s2GlowWinEffectContainer, !0).play({
                                    name: "glow_win_effect",
                                    mode: nge.spine.DESTROY
                                }), 0 > (a -= 2) || (e.highlightImage.y = e.numberText[a].y - 7, e.highlightImage.visible = !0, e = nge.Mlm.Objects.Spine({
                                    type: 6,
                                    assetKey: "bonus_match_3_effect",
                                    name: "s2AnimalWinMult" + t,
                                    x: y(e.highlightImage, "x") + 40 + e.multText[a].width / 2,
                                    y: y(e.highlightImage, "y") + 20,
                                    isVisible: !1
                                }), nge.objects.create(e, null, !0).play({
                                    name: "match_3_effect",
                                    mode: nge.spine.DESTROY
                                }))
                            },
                            cleanup: function() {
                                for (var e in m) {
                                    var t = this.data[m[e]].highlightImage;
                                    t.y = this.data[m[e]].numberText ? this.data[m[e]].numberText[0].y - 7 : 0, t.visible = !1
                                }
                                this.data.s2AnimalsIdle.forEach((function(e) {
                                    e.destroy()
                                })), this.data.s2AnimalsIdle = []
                            }
                        },
                        initialize: function() {
                            this.data = {
                                items: [],
                                itemsStates: [],
                                flowerPicks: []
                            }, this.animalTables.initialize(), this.count = {
                                picksTotal: 0,
                                picksRemainingText: null,
                                picksPlayed: 0,
                                picksPlayedText: null
                            };
                            var t = 0;
                            this.data.pickBonusS2ItemsContainer = e("^pickBonusS2ItemsContainer");
                            var a = function(e) {
                                /^pickBonusS2Item[0-9]+Button.+$/.test(e.getData().assetKey) && (this.data.items[t].button = e, e.anchor = {
                                    x: .5,
                                    y: 1,
                                    type: 25
                                }, e.x += e.width / 2, e.y += e.height, e.interactive = !0)
                            };
                            for (t = 0; 30 > t; t++) {
                                this.data.items[t] = {}, this.data.items[t].button = {};
                                var s = e("^pickBonusS2Item" + t);
                                if (!s) return;
                                s.children.forEach(a, this)
                            }
                            nge.Lib.Helper.mobileAndTabletCheck() || (a = nge.Mlm.Objects.Spine({
                                type: 6,
                                assetKey: "petals",
                                name: "s2Petals",
                                x: 960,
                                y: 540,
                                isVisible: !1
                            }), s = e("^petalsContainer"), this.data.s2Petals = nge.objects.create(a, s, !0)), this.count.picksRemainingText = e("^pickBonusS2PicksRemainingText"), this.count.picksRemainingText && (this.count.picksPlayedText = e("^pickBonusS2PicksPlayedText"), this.count.picksPlayedText && this.setCount(0, 0))
                        },
                        shakeRandom: function(e) {
                            if (x.proceedShaking) {
                                var t = this.data.items[e].button;
                                if (t.visible) {
                                    var a = nge.tween.add(t),
                                        s = .5 <= nge.Lib.Helper.getRandomInt(0, 1) ? -1 : 1,
                                        n = .5 <= nge.Lib.Helper.getRandomInt(0, 1) ? nge.Lib.Tween.Easing.Bounce : nge.Lib.Tween.Easing.Back;
                                    this.data.items[e].shakingTween = a, a.to({
                                        rotation: .04 * s
                                    }, 400, n.Out), a.to({
                                        rotation: .04 * -s
                                    }, 400, n.In), a.to({
                                        rotation: 0
                                    }, 400, n.Out), a.onComplete.addOnce((function() {
                                        t.rotation = 0, x.proceedShaking && nge.observer.fire("s2.shake.random", null, nge.Lib.Helper.getRandomInt(0, 500))
                                    }), x), a.start()
                                } else nge.observer.fire("s2.shake.random")
                            }
                        },
                        start: function() {
                            nge.Lib.Helper.mobileAndTabletCheck() || this.data.s2Petals.play({
                                name: "play",
                                mode: nge.spine.LOOP
                            }), this.animalTables.start(), nge.observer.fire("s2.shake.random")
                        },
                        setItemsStates: function(e) {
                            this.data.itemsStates = e
                        },
                        clickOnLotus: function(e) {
                            this.disableInput()
                        },
                        shineWinLoti: function() {
                            this.data.flowerPicks.forEach((function(e) {
                                e.setAnimationByMode(0, "flower_win", nge.spine.FREEZE);
                                var t = e.spine.skeleton.findSlot("pick_animals");
                                e = e.spine.skeleton.getAttachmentByName(e.animal.slot, e.animal.attachment), t.setAttachment(e)
                            }))
                        },
                        openLotus: function(e, t, a) {
                            --e;
                            var s = this.data.items[e].button;
                            s.interactive = !1, s.visible = !1, e = nge.Mlm.Objects.Spine({
                                type: 6,
                                assetKey: "bonus_flowers_and_animals",
                                name: "s2FlowerPick" + e,
                                x: y(s, "x") - 2,
                                y: y(s, "y") - s.height / 2 - 5,
                                scaleX: .6,
                                scaleY: .6,
                                isVisible: !1
                            }), (e = nge.objects.create(e, this.data.pickBonusS2ItemsContainer, !0)).setAnimationByMode(0, "flower_pick" + (a ? "_auto" : "_manual"), nge.spine.FREEZE), a = e.spine.skeleton.findSlot("pick_animals"), s = e.spine.skeleton.getAttachmentByName(c[t].slot, c[t].attachment), a.setAttachment(s), e.animal = {
                                slot: c[t].slot,
                                attachment: c[t].attachment
                            }, this.data.flowerPicks.push(e)
                        },
                        openPickedLotus: function(e, t, a, s) {
                            this.openLotus(e, t), nge.observer.fire("pickBonus.miniLotus.open" + (this.count.picksPlayed % 4 + 1)), this.increaseCount(), this.enableInput(), this.animalTables.highlight(a, t), s && s()
                        },
                        openOtherLoti: function(e, t, a) {
                            this.disableInput(), this.proceedShaking = !1, nge.rafSetTimeout(function() {
                                this.shineWinLoti(), e.forEach((function(e) {
                                    var t = +e.index,
                                        a = e.value;
                                    "true" !== e.picked && this.openLotus(t, a, !0)
                                }), this), nge.observer.fire("sound.mini_cell_open_all.play"), a()
                            }.bind(this), t)
                        },
                        disableInput: function() {
                            this.data.items.forEach((function(e) {
                                e.button.interactive = !1
                            }), this)
                        },
                        enableInput: function() {
                            this.data.items.forEach((function(e) {
                                e.button.interactive = !0
                            }), this), this.data.itemsStates.forEach((function(e) {
                                (e = this.data.items[+e.index - 1]) && (e.button.interactive = !1)
                            }), this)
                        },
                        setCount: function(e, t) {
                            this.count.picksPlayed = e, this.count.picksTotal = t, this.count.picksPlayedText.text = e, this.count.picksRemainingText.text = t - e
                        },
                        increaseCount: function() {
                            this.count.picksPlayed++, this.count.picksPlayedText.text = this.count.picksPlayed, this.count.picksRemainingText.text = this.count.picksTotal - this.count.picksPlayed;
                            var e = nge.Mlm.Objects.Spine({
                                type: 6,
                                assetKey: "bonus_count_picks_effect",
                                name: "s2picksPlayedAnimation",
                                x: y(this.count.picksPlayedText, "x"),
                                y: y(this.count.picksPlayedText, "y") + 6,
                                isVisible: !1
                            });
                            nge.objects.create(e, null, !0).play({
                                name: "count_picks_effect",
                                mode: nge.spine.DESTROY
                            }), e = nge.Mlm.Objects.Spine({
                                type: 6,
                                assetKey: "bonus_count_picks_effect",
                                name: "s2picksRemainingAnimation",
                                x: y(this.count.picksRemainingText, "x"),
                                y: y(this.count.picksRemainingText, "y") + 6,
                                isVisible: !1
                            }), nge.objects.create(e, null, !0).play({
                                name: "count_picks_effect",
                                mode: nge.spine.DESTROY
                            })
                        },
                        cleanup: function() {
                            this.data.items.forEach((function(e) {
                                e.button.interactive = !0, e.button.visible = !0
                            }), this), this.data.itemsStates = null, this.count = {
                                picksPlayed: 0,
                                picksTotal: 0
                            };
                            for (var e = 0; e < this.data.flowerPicks.length; e++) this.data.flowerPicks[e].destroy();
                            this.data.flowerPicks = [], nge.Lib.Helper.mobileAndTabletCheck() || this.data.s2Petals.destroy(), this.animalTables.cleanup()
                        },
                        restore: function(e) {
                            "" === e.items && (e.items = []);
                            var t = e.items;
                            x.setCount(0, +e.pickItems), t.forEach(function(e) {
                                this.openPickedLotus(+e.index, e.value, t)
                            }.bind(x))
                        }
                    };
                this.subscribe = function() {
                    nge.observer.add("pickBonus.actionResponse", n), nge.observer.add("collectionBonus.itemResponse", l), nge.observer.add("buttons.pressCommand", p), nge.observer.add("layersSwitcher.show", o), nge.observer.add("layersSwitcher.animationComplete", i), nge.observer.add("s1.shake.random", (function() {
                        g.shakeRandom(nge.Lib.Helper.getRandomInt(0, g.data.buttons.length - 1))
                    })), nge.observer.add("s2.shake.random", (function() {
                        x.shakeRandom(nge.Lib.Helper.getRandomInt(0, x.data.items.length - 1))
                    })), nge.observer.add("s2.restore", x.restore)
                }, this.create = function() {
                    r = this, this.createDefault(), u || (r.subscribe(), u = !0), g.initialize(), x.initialize(), t(1), g.start()
                }
            }))
        },
        1031: function(e, t) {
            nge.App[nge.appNS].Com.PickBonus.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "pickBonusS1Bg",
                            fullPath: e + "atlases/pickBonusS1Bg.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Bg",
                            fullPath: e + "atlases/pickBonusS2Bg.jpg"
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_count_picks_effect",
                            spine: e + "spine/bonusGame/bonus_count_picks_effect.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_flowers_and_animals",
                            spine: e + "spine/bonusGame/bonus_flowers_and_animals.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_cat_idle",
                            spine: e + "spine/bonusGame/bonus_cat_idle.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_monkey_idle",
                            spine: e + "spine/bonusGame/bonus_monkey_idle.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_pig_idle",
                            spine: e + "spine/bonusGame/bonus_pig_idle.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_snake_idle",
                            spine: e + "spine/bonusGame/bonus_snake_idle.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_tiger_idle",
                            spine: e + "spine/bonusGame/bonus_tiger_idle.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_glow_win_effect",
                            spine: e + "spine/bonusGame/bonus_glow_win_effect.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_lamps",
                            spine: e + "spine/bonusGame/bonus_lamps.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_match_3_effect",
                            spine: e + "spine/bonusGame/bonus_match_3_effect.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bonus_win_effect",
                            spine: e + "spine/bonusGame/bonus_win_effect.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "petals",
                            spine: e + "spine/bgAnimations/tree_petals.json",
                            packed: !0
                        }]
                    },
                    objects: {
                        contents: []
                    }
                }
            }
        },
        1032: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue = {}
        },
        1033: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    triggerVariants: [{
                        symbols: ["11", "12"],
                        reelMask: [!0, !1, !0, !1, !0],
                        minCount: 2
                    }, {
                        symbols: ["13", "14"],
                        reelMask: [!1, !0, !0, !0, !1],
                        minCount: 2
                    }]
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1034: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Controller = nge.App.DjGameBase.Com.Intrigue.Controller.extend((function() {
                function e(e) {
                    return function() {
                        if (!n[e]) {
                            n[e] = !0;
                            var t = s.bottomContainer.children[e - 3];
                            t && ((t = nge.findOne("^spinificationsBack_" + e, t)).alpha = 0, t.visible = !0, nge.tween.add(t).to({
                                alpha: 1
                            }, 300).start(), t = s.topContainer.children[e - 3]) && (t.alpha = 0, nge.findOne("^intrigueFrontAnimationSpine_" + e, t).setAnimationByMode(0, "spinification_loop", nge.spine.LOOP), nge.tween.add(t).to({
                                alpha: 1
                            }, 300).start())
                        }
                    }
                }

                function t(e) {
                    return function() {
                        if (!0 === n[e]) {
                            var t = s.bottomContainer.children[e - 3];
                            if (t) {
                                var a = nge.findOne("^spinificationsBack_" + e, t);
                                (t = nge.tween.add(a).to({
                                    alpha: 0
                                }, 300, nge.Lib.Tween.Easing.Linear.None)).onComplete.addOnce((function() {
                                    a.visible = !1
                                })), t.start();
                                var l = s.topContainer.children[e - 3];
                                if (l) {
                                    var p = nge.findOne("^intrigueFrontAnimationSpine_" + e, l);
                                    (t = nge.tween.add(l).to({
                                        alpha: 0
                                    }, 300)).onComplete.addOnce((function() {
                                        p.stop(), l.alpha = 1
                                    })), t.start()
                                }
                            }
                        }
                    }
                }

                function a() {
                    n = {}
                }
                var s = this;
                s.intrigueFrontAnimation = null, s.bottomContainer = null, s.topContainer = null;
                var n = {};
                this.subscribe = function() {
                    s.super.subscribe(), nge.observer.add("slotMachine.spinStart", a), nge.observer.add("Transport.close", a);
                    for (var n = 0; n < s.slotMachineCfg.mw; n++) nge.observer.add("slotMachine.reel_" + n + ".intrigue.start", e(n)), nge.observer.add("slotMachine.reel_" + n + ".animation.stop", t(n));
                    nge.observer.add("slotMachine.reel_4.animation.stop", a)
                }, this.create = function() {
                    s.super.create(), s.createDefault(), s.bottomContainer = nge.findOne("^spinificationContainerBottom"), s.topContainer = nge.findOne("^spinificationContainerTop"), nge.findOne("^gameScreenContainer").addChild(s.topContainer), nge.findOne("^reelsBorderContainer").addChild(s.bottomContainer), n = {}
                }
            }))
        },
        1035: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "spinifications_back",
                            fullPath: e + "playarea/spinifications_back.png"
                        }, {
                            type: mt.assets.SPINE,
                            key: "intrigue_front_animation",
                            spine: e + "spine/intrigue/intrigue_front.json",
                            packed: !0
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "spinificationContainerBottom",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "sm_spinification_bottom_4",
                                x: 1352,
                                y: 90,
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "spinificationsBack_4",
                                    scaleX: 1.38,
                                    scaleY: 1.38,
                                    assetKey: "spinifications_back",
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "sm_spinification_bottom_3",
                                x: 1072,
                                y: 90,
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "spinificationsBack_3",
                                    scaleX: 1.38,
                                    scaleY: 1.38,
                                    assetKey: "spinifications_back",
                                    isVisible: !1
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "spinificationContainerTop",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "sm_spinification_top_4",
                                x: 1520,
                                y: 90,
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "intrigueFrontAnimationSpine_4",
                                    assetKey: "intrigue_front_animation",
                                    x: 3,
                                    y: 387,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "sm_spinification_top_3",
                                x: 1240,
                                y: 90,
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "intrigueFrontAnimationSpine_3",
                                    assetKey: "intrigue_front_animation",
                                    x: 3,
                                    y: 387,
                                    isVisible: !1
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1036: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText = {}
        },
        1037: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Tpl = function() {
                var e = new nge.App.DjGameBase.Com.WinlinesText.Tpl;
                return e.objects.contents[0].y = 450, e
            }
        },
        1038: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1039: function(e, t) {
            nge.App[nge.appNS].Tpl.PsdAliases = Class.extend((function() {
                this.singleton = !0, this.data = {
                    popupNotificationsHeadText_aliases: "popupNotificationsHeadText(text=INSUFFICIENT FUNDS, font=52pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#fff)_text",
                    popupNotificationsContent_aliases: "popupNotificationsContent(text=Please deposit more money or lower your bet, font=30pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#efe1bf)_text",
                    demoPlayButtonText_aliases: "demoPlayButtonText(text=PLAY_BUTTON, font=32pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#ffffff, maxWidth=150, maxHeight=100)_text",
                    introScreenTextBottom_aliases: "introScreenTextBottom(text=show_next_time, font=28pt futuraptheavy, fill=#ffffff, anchorY=0.5, maxWidth=380)_text",
                    introScreenTextCenter_aliases: "introScreenTextCenter(text=CATCH_SOME_WILDS, font=34pt futuraptheavy, fill=#ffffff, stroke=#92054c, strokeThickness=4, class=coloredText, align=center, anchorX=0.5, anchorY=0.5, lineHeight=39, wordWrap=1, wordWrapWidth=1250)_text",
                    introScreenTextCenter1_aliases: "introScreenTextCenter1(text=CATCH_SOME_WILDS_1, font=34pt futuraptheavy, fill=#ffffff, stroke=#92054c, strokeThickness=4, class=coloredText, align=center, anchorX=0.5, anchorY=0.5, lineHeight=39, wordWrap=1, wordWrapWidth=1250)_text",
                    introScreenTextCenter2_aliases: "introScreenTextCenter2(text=CATCH_SOME_WILDS_2, font=34pt futuraptheavy, fill=#ffffff, stroke=#92054c, strokeThickness=4, class=coloredText, align=center, anchorX=0.5, anchorY=0.5, lineHeight=39, wordWrap=1, wordWrapWidth=1250)_text",
                    betSettingsBetLevelName_alias: "betSettingsBetLevelName(text=Bet Level, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5, anchorY=0.5)_text",
                    betSettingsLinesName_alias: "betSettingsLinesName(text=Lines, font=39pt futuraptmedium, fill=#fec36d, anchorY=0.5, anchorY=0.5)_text",
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
                    textStyle_aliases: "textStyle(font=28pt futuraptmedium, fill=#eee0bf, anchorX=0.5, anchorY=0.5, lineHeight=39, align=center)_style",
                    displayText_alias: "displayText(text=DISPLAY, class=textStyle)_text",
                    showText_alias: "showText(text=SHOW, class=textStyle)_text",
                    turboText_alias: "turboText(text=TURBO, class=textStyle)_text",
                    pressSpaceText_alias: "pressSpaceText(text=PRESS SPACE, class=textStyle)_text",
                    autoButtonText_aliases: "autoButtonText(text=AUTO\nSTART, anchorX=0.5, anchorY=0.5, maxWidth=110, class=titleButtonStyle)_text",
                    maxBetButtonText_aliases: "maxBetButtonText(text=MAX_BET, anchorX=0.5, anchorY=0.5, maxWidth=110, class=titleButtonStyle)_text",
                    autoPlayAmountButtonText_aliases: "autoPlayAmountButtonText(anchorX=0.5, anchorY=0.5)_text",
                    menuElementText_aliases: "menuElementText(font=18pt futuraptheavy, anchorX=0.5, anchorY=0.4, fill=#e5e7db)_text",
                    winNumber_aliases: "winNumber(class=winNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_text",
                    creditsWinNumber_aliases: "creditsWinNumber(class=creditsWinNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_text",
                    creditsTotalWinNumber_aliases: "creditsTotalWinNumber(class=creditsWinNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_text",
                    totalWinNumber_aliases: "totalWinNumber(class=winNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    linesNumber_aliases: "linesNumber(class=linesNumber, font=21pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_text",
                    coinValueNumber_aliases: "coinValueNumber(class=coinsNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_text",
                    totalBetCoinsNumber_aliases: "totalBetCoinsNumber(class=creditsTotalBetNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_text",
                    totalBetNumber_aliases: "totalBetNumber(class=totalBetNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_text",
                    balanceCoinsNumber_aliases: "balanceCoinsNumber(class=creditsNumber, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_text",
                    balanceNumber_aliases: "balanceNumber(class=balanceNumber balanceCurrency, font=20pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_text",
                    balanceText_aliases: "balanceText(text=BALANCE, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    winText_aliases: "winText(text=WIN, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    linesText_aliases: "linesText(text=LINES, anchorX=0.5, anchorY=0.5,  maxWidth=90, class=titleTextStyle)_text",
                    balanceCoinsText_aliases: "balanceCoinsText(text=BALANCE, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    totalBetCoinsText_aliases: "totalBetCoinsText(text=TOTAL BET, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    coinValueText_aliases: "coinValueText(text=COIN VALUE, anchorX=0.5, anchorY=0.5, class=titleTextStyle)_text",
                    totalWinTextA_aliases: "totalWinTextA(text=TOTAL WIN, class=buttonLinesText, font=21pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#ffd836, stroke=#5d1223, strokeThickness=8)_text",
                    offersFreespinCounter_aliases: "offersFreespinCounter(text=0, font=24pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#fff, class=freeSpinTotalAmount)_text",
                    autospinAmountSetterPanel_aliases: "autospinAmountSetterPanel(assetKey=autospinAmountSetterPanel1, width=140, height=480, top=0, bottom=0, left=0, right=0, anchorX=0, anchorY=0)_nineSlice",
                    menuElementOver_aliases: "menuElementOver(fill=#fff)_style",
                    menuElementBase_aliases: "menuElementBase(font=17pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#ffd183)_style",
                    menuElementInfinity_aliases: "menuElementInfinity(font=44pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#ffd183)_style",
                    autoButtonAmountTextInfinity_aliases: "autoButtonAmountTextInfinity(font=36pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_style",
                    autoButtonAmountTextBase_aliases: "autoButtonAmountTextBase(font=24pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#f1b96d)_style",
                    autoSpinButtonName2_aliases: "autoSpinButtonName2(text=AUTO, class=buttonStyleNormal, font=23pt futuraptheavy, fill=#efc273, align=center, anchorX=0.5, anchorY=0.5, lineHeight=33, maxWidth=110, stroke=#321223, strokeThickness=4)_text",
                    balanceMobileName_aliases: "balanceMobileName(text=BALANCE, anchorX=0.5, anchorY=0.5, class=titleTextMobileStyle)_text",
                    winMobileName_aliases: "winMobileName(text=WIN, anchorX=0.5, anchorY=0.5, class=titleTextMobileStyle)_text",
                    totalBetMobileName_aliases: "totalBetMobileName(text=TOTAL BET, anchorX=0.5, anchorY=0.5, class=titleTextMobileStyle)_text",
                    totalBetMobilleNumber_aliases: "totalBetMobilleNumber(class=playAreaTextMobile totalBetNumber, font=30pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    totalBetCoinsMobileNumber_aliases: "totalBetCoinsMobileNumber(class=playAreaTextMobile creditsTotalBetNumber, font=30pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    winMobileNumber_aliases: "winMobileNumber(class=playAreaTextMobile winNumber, font=39pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    creditsWinMobileNumber_aliases: "creditsWinMobileNumber(class=playAreaTextMobile creditsWinNumber, font=39pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    balanceCoinsMobileNumber_aliases: "balanceCoinsMobileNumber(class=playAreaTextMobile creditsNumber, font=30pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    balanceMobileNumber_aliases: "balanceMobileNumber(class=playAreaTextMobile balanceNumber, font=30pt futuraptheavy, anchorX=0.5, anchorY=0.5, fill=#e5e7db)_text",
                    picksRemaining_aliases: "picksRemaining(text=PICKS_REMAINING, font=20pt futuraptheavy, fill=#f9ca4b, anchorX=0.5, anchorY=0.5, align=center, lineHeight=29, maxWidth=190)_text",
                    picksPlayed_aliases: "picksPlayed(text=PICKS_PLAYED, font=20pt futuraptheavy, fill=#f9ca4b, anchorX=0.5, anchorY=0.5, align=center, lineHeight=29, maxWidth=190)_text",
                    pickOne_en_aliases: 'pickOne_en(text=PICK_ONE_EN, font=77pt frizquadratactt_bold, fill=#f9c25b, anchorX=0.5, anchorY=0.5, align=center, shadowColor=#732429, class=coloredText, shadowOffsetY=4, stroke=#731f1d, strokeThickness=6, gradient=[[0.1, "#ffd87d"], [0.3, "#ffd778"], [0.5, "#f1b240"], [0.7, "#f1b240"], [0.9, "#f1b240"]])_text',
                    pickOne_aliases: 'pickOne(text=PICK_ONE, font=50pt frizquadratactt_bold, fill=#f9c25b, anchorX=0.5, anchorY=0.5, align=center, shadowColor=#732429, class=coloredText, shadowOffsetY=4, stroke=#722219, strokeThickness=4, gradient=[[0.1, "#ffd97a"], [0.3, "#ffd67a"], [0.5, "#f1b240"], [0.7, "#f1b240"], [0.9, "#f1b240"]])_text',
                    pickOne1_aliases: 'pickOne(text=PICK_ONE1, font=49pt frizquadratactt_bold, fill=#f9c25b, anchorX=0.5, anchorY=0.5, align=center, shadowColor=#732429, class=coloredText, shadowOffsetY=4, stroke=#722219, strokeThickness=4, gradient=[[0.1, "#ffd97a"], [0.3, "#ffd67a"], [0.5, "#f1b240"], [0.7, "#f1b240"], [0.9, "#f1b240"]])_text',
                    picks_aliases: "picks(text=PICKS, font=32pt futuraptheavy, fill=#feeea0, anchorX=0.5, anchorY=0.5, align=center, maxWidth=180)_text",
                    paytableNameText_aliases: "paytableNameText(text=PAYTABLE_help, font=60pt futuraptmedium, fill=#eee0bf, anchorX=0.5, anchorY=0.5)_text",
                    rulesNameText_aliases: "rulesNameText(text=RULES_help, font=60pt futuraptmedium, fill=#eee0bf, anchorX=0.5, anchorY=0.5)_text",
                    pageOneText1_aliases: "pageOneText1(text=Wild Foo Dog, font=30pt futuraptmedium, fill=#e9dbbb, anchorX=0.5, anchorY=0.5)_text",
                    pageOneText2_aliases: "pageOneText2(text=Wild Coin, font=30pt futuraptmedium, fill=#e9dbbb, anchorX=0.5, anchorY=0.5)_text",
                    pageOneText5_aliases: "pageOneText5(text=Dragon_is_wild_and, font=28pt futuraptmedium, fill=#e9dbbb, anchorX=0.5, anchorY=0.5, align=center, lineHeight=39, class=coloredText)_text",
                    pageOneText6_aliases: "pageOneText6(text=Coin_is_wild_and, font=28pt futuraptmedium, fill=#e9dbbb, anchorX=0.5, anchorY=0.5, align=center, lineHeight=39, class=coloredText)_text",
                    page2_Text0_aliases: "page2_Text0(text=ANY, font=40pt futuraptheavy, fill=#e9dbbb, anchorX=0.5, anchorY=0.5)_text",
                    page2_Text5_aliases: "page2_Text5(text=Wild_fortune_cat, font=28pt futuraptmedium, fill=#e9dbbb, anchorX=0.5, anchorY=0.5, align=center, lineHeight=39, class=coloredText)_text",
                    pageFiveText0_aliases: "page5_Text0(text=PICK LOTUS, font=40pt futuraptheavy, fill=#e9dbbb, anchorX=0.5, anchorY=0.5)_text",
                    pageFiveText1_aliases: "page5_Text1(text=Three_scatter_fortune_cat, font=30pt futuraptmedium, fill=#fff, align=center, anchorX=0.5, anchorY=0.5, lineHeight=43, maxWidth=1450, class=coloredText)_text",
                    page6_Text0_aliases: "page6_Text0(text=PICK_BONUS_PAYTABLE, font=40pt futuraptheavy, fill=#e9dbbb, anchorX=0.5, anchorY=0.5)_text",
                    page6_Text1_aliases: "page6_Text1(text=During_the_Pick_Bonus_feature, font=30pt futuraptmedium, fill=#fff, align=center, anchorX=0.5, anchorY=0.5, lineHeight=42, maxWidth=1450)_text",
                    paylinesNameText_aliases: "paylinesNameText(text=PAYLINE_help, font=60pt futuraptmedium, fill=#eee0bf, anchorX=0.5, anchorY=0.5)_text",
                    pageSixText_aliases: "pageSixText(text=RTP, font=30pt futuraptmedium, fill=#fff, align=center, anchorX=0.5, anchorY=0.5, lineHeight=39, class=rtpInfo)_text",
                    rulesName_aliases: "rulesName(text=RULES_help, font=60pt futuraptmedium, fill=#eee0bf, anchorX=0.5, anchorY=0.5)_text",
                    pageSevenText0_aliases: "pageSevenText0(text=WILD COIN MYSTERY FEATURE, font=40pt futuraptheavy, fill=#e9dbbb, anchorX=0.5, anchorY=0.5)_text",
                    pageSevenText1_aliases: "pageSevenText1(text=Any_base_game_spin_may, font=27pt futuraptmedium, fill=#fff, align=center, anchorX=0.5, anchorY=0.5, lineHeight=39, maxWidth=1480, class=coloredText)_text",
                    page8_Text0_aliases: "page8_Text0(text=FREE_GAME_BONUS, font=40pt futuraptheavy, fill=#e9dbbb, anchorX=0.5, anchorY=0.5)_text",
                    page8_Text1_aliases: "page8_Text1(text=3_Scattered_Ying_Yang, font=27pt futuraptmedium, fill=#fff, align=center, anchorX=0.5, anchorY=0.5, lineHeight=39, maxWidth=1570, class=coloredText)_text",
                    page9_Text0_aliases: "page9_Text0(text=PAYS, font=40pt futuraptheavy, fill=#e9dbbb, anchorX=0.5, anchorY=0.5)_text",
                    page9_Text1_aliases: "page9_Text1(text=All_prizes_are_for_combinations, font=30pt futuraptmedium, fill=#fff, align=center, anchorX=0.5, anchorY=0.5, lineHeight=42, maxWidth=1450)_text"
                }
            }))
        },
        1040: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1041: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Atlases = function() {
                var e = nge.appPath + "img/atlases/";
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
                            key: "offersGold_atlas",
                            atlas: e + "offers_gold.json",
                            fullPath: e + "offers_gold.png",
                            subtype: "noPngQuant"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "symbols_static",
                            atlas: e + "symbols_static.json",
                            fullPath: e + "symbols_static.png",
                            subtype: "noPngQuant"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "psd_atlases_play",
                            atlas: e + "psd_atlases_play.json",
                            fullPath: e + "psd_atlases_play.png"
                        }, {
                            type: mt.assets.ATLAS,
                            key: "psd_atlases_play_pick_bonus",
                            atlas: e + "psd_atlases_play_pick_bonus.json",
                            fullPath: e + "psd_atlases_play_pick_bonus.png"
                        }]
                    },
                    objects: {}
                }
            }
        },
        1042: function(e, t) {
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
        1043: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Atlases_pickBonus = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {}
                }
            }
        },
        1044: function(e, t) {
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
        1045: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "introScreenBg",
                            fullPath: e + "playarea/introScreenBg.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoStart(width=290, height=34, class=autoStartCheckBox)_clickableArea",
                            fullPath: e + "playarea/autoStart(width=290, height=34, class=autoStartCheckBox)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextBottom_aliases",
                            fullPath: e + "playarea/introScreenTextBottom_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameIntroScreen",
                            fullPath: e + "playarea/frameIntroScreen.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenArrow",
                            fullPath: e + "playarea/introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter2_aliases",
                            fullPath: e + "playarea/introScreenTextCenter2_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter1_aliases",
                            fullPath: e + "playarea/introScreenTextCenter1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter_aliases",
                            fullPath: e + "playarea/introScreenTextCenter_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton(spritesX=3)_button",
                            fullPath: e + "playarea/demoPlayButton(spritesX=3)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "demoPlayButtonText_aliases",
                            fullPath: e + "playarea/demoPlayButtonText_aliases.png"
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
                                    x: 961,
                                    y: 920
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "demoPlayButton(spritesX=3)_button",
                                    assetKey: "demoPlayButton(spritesX=3)_button",
                                    x: 824,
                                    y: 864
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenTextCenter_aliases",
                                assetKey: "introScreenTextCenter_aliases",
                                x: 959,
                                y: 589
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenTextCenter1_aliases",
                                assetKey: "introScreenTextCenter1_aliases",
                                x: 959,
                                y: 649
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenTextCenter2_aliases",
                                assetKey: "introScreenTextCenter2_aliases",
                                x: 959,
                                y: 709
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenArrow",
                                assetKey: "introScreenArrow",
                                x: 748,
                                y: 988
                            }, {
                                type: mt.objects.IMAGE,
                                name: "frameIntroScreen",
                                assetKey: "frameIntroScreen",
                                x: 747,
                                y: 984
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenTextBottom_aliases",
                                assetKey: "introScreenTextBottom_aliases",
                                x: 788,
                                y: 1001
                            }, {
                                type: mt.objects.IMAGE,
                                name: "autoStart(width=290, height=34, class=autoStartCheckBox)_clickableArea",
                                assetKey: "autoStart(width=290, height=34, class=autoStartCheckBox)_clickableArea",
                                x: 746,
                                y: 985
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
        1046: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.LinesMarkers = function() {
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
        1047: function(e, t) {
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
        1048: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.BonusGame = function() {
                return {
                    assets: {
                        name: "bonusGameAssets",
                        contents: []
                    },
                    objects: {
                        contents: []
                    }
                }
            }
        },
        1049: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.PlayStyles = function() {
                return {}
            }
        },
        1050: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Ui = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        ".titleTextStyle": {
                            style: {
                                font: "16pt futuraptheavy",
                                fill: 16767030,
                                stroke: 6099491,
                                strokeThickness: 8
                            }
                        },
                        ".titleButtonStyle": {
                            style: {
                                font: "23pt futuraptheavy",
                                fill: 16765315,
                                stroke: 8454153,
                                strokeThickness: 5,
                                lineHeight: 30,
                                align: "center"
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
                            key: "balanceCoinsText_aliases",
                            fullPath: e + "playarea/balanceCoinsText_aliases.png"
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
                                        x: "891",
                                        y: "917",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "UISpinPanel_Automatic_FreespinGame_Container",
                                    alpha: "1",
                                    contents: []
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "UISpinPanel_Manual_FreespinGame_Container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "counterManualFreeSpinsNumberA",
                                        x: 803,
                                        y: 1013,
                                        class: "freeSpinPlayedAmount",
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            font: "24pt futuraptheavy",
                                            fill: 16777215
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "counterManualFreeSpinsNumberB",
                                        x: 1118,
                                        y: 1013,
                                        class: "freeSpinTotalAmount",
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            font: "24pt futuraptheavy",
                                            fill: 16777215
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "playedFreespinText",
                                        x: 804,
                                        y: 984,
                                        anchorX: .5,
                                        anchorY: .5,
                                        text: nge.i18n.get("PLAYED"),
                                        maxWidth: 120,
                                        style: {
                                            font: "18pt futuraptheavy",
                                            fill: 15841645,
                                            stroke: 3277067,
                                            strokeThickness: 8
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "totalFreespinText",
                                        x: 1119,
                                        y: 984,
                                        anchorX: .5,
                                        anchorY: .5,
                                        text: nge.i18n.get("TOTAL"),
                                        maxWidth: 148,
                                        style: {
                                            font: "18pt futuraptheavy",
                                            fill: 15841645,
                                            stroke: 3277067,
                                            strokeThickness: 8
                                        }
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "centralButtonFreeSpinsBg",
                                        assetKey: "centralButtonFreeSpinsBg",
                                        x: 705,
                                        y: 895
                                    }]
                                }, {
                                    type: 1,
                                    name: "UISpinPanel_Manual_MainGame_Container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "autoPlayAmountButtonText_aliases",
                                        assetKey: "autoPlayAmountButtonText_aliases",
                                        x: "803",
                                        y: "1017",
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
                                            x: "803",
                                            y: "1002",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "autoButtonButton(spritesX=8)_button",
                                            assetKey: "autoButtonButton(spritesX=8)_button",
                                            x: "716",
                                            y: "944",
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
                                            x: "778",
                                            y: "951",
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
                                            x: "814",
                                            y: "945",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "menuElementBase_aliases",
                                            assetKey: "menuElementBase_aliases",
                                            x: "814",
                                            y: "945",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "menuElementInfinity_aliases",
                                            assetKey: "menuElementInfinity_aliases",
                                            x: "814",
                                            y: "945",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "menuElementText_aliases",
                                            assetKey: "menuElementText_aliases",
                                            x: "814",
                                            y: "945",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "autospinAmountSetterSeparator",
                                            assetKey: "autospinAmountSetterSeparator",
                                            x: "775",
                                            y: "987",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "autospinAmountSetterPanel1_asset",
                                            assetKey: "autospinAmountSetterPanel1_asset",
                                            x: "746",
                                            y: "922",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "autospinAmountSetterPanel_aliases",
                                            assetKey: "autospinAmountSetterPanel_aliases",
                                            x: "814",
                                            y: "945",
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
                                            x: "1112",
                                            y: "1002",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "maxBetButtonButton(spritesX=4)_button",
                                            assetKey: "maxBetButtonButton(spritesX=4)_button",
                                            x: "1025",
                                            y: "944",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 0,
                                        name: "offersFreespinCounter_aliases",
                                        assetKey: "offersFreespinCounter_aliases",
                                        x: "1112",
                                        y: "1002",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "centralButtonBg",
                                        assetKey: "centralButtonBg",
                                        x: "705",
                                        y: "895",
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
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "winText_aliases",
                                        assetKey: "winText_aliases",
                                        x: "1385",
                                        y: "952",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "winNumber_aliases",
                                        assetKey: "winNumber_aliases",
                                        x: "1385",
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "creditsWinNumber_aliases",
                                        assetKey: "creditsWinNumber_aliases",
                                        x: "1385",
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "winAreaPlate",
                                        assetKey: "winAreaPlate",
                                        x: "1217",
                                        y: "968",
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
                                        y: "1010",
                                        alpha: "0.501960784313725"
                                    }, {
                                        type: 0,
                                        name: "creditsTotalWinNumber_aliases",
                                        assetKey: "creditsTotalWinNumber_aliases",
                                        x: "1385",
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "totalWinNumber_aliases",
                                        assetKey: "totalWinNumber_aliases",
                                        x: "1385",
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "totalWinTextA_aliases",
                                        assetKey: "totalWinTextA_aliases",
                                        x: "1385",
                                        y: "952",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "totalWinPlate",
                                        assetKey: "totalWinPlate",
                                        x: "1217",
                                        y: "968",
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
                                        x: "174",
                                        y: "952",
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
                                        x: "174",
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "buttonLinesPlate",
                                        assetKey: "buttonLinesPlate",
                                        x: "128",
                                        y: "968",
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
                                        y: "952",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "coinValueNumber_aliases",
                                        assetKey: "coinValueNumber_aliases",
                                        x: "322",
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 1,
                                        name: "coinMinusButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "coinMinusButtonButton(spritesX=4)_button",
                                            assetKey: "coinMinusButtonButton(spritesX=4)_button",
                                            x: "236",
                                            y: "986",
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
                                            x: "362",
                                            y: "986",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 0,
                                        name: "coinValueBg",
                                        assetKey: "coinValueBg",
                                        x: "218",
                                        y: "968",
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
                                        y: "952",
                                        alpha: "1"
                                    }, {
                                        type: 1,
                                        name: "betMinusButton",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "betMinusButtonButton(spritesX=4)_button",
                                            assetKey: "betMinusButtonButton(spritesX=4)_button",
                                            x: "443",
                                            y: "986",
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
                                            x: "640",
                                            y: "986",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 0,
                                        name: "totalBetClickableArea(width=104, height=54, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "totalBetClickableArea(width=104, height=54, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "565",
                                        y: "1010",
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
                                            y: "1010",
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
                                            y: "1010",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 0,
                                        name: "totalBetContainerBg",
                                        assetKey: "totalBetContainerBg",
                                        x: "425",
                                        y: "968",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "cashBetContainerBg",
                                        assetKey: "cashBetContainerBg",
                                        x: "425",
                                        y: "968",
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
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceCoinsArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        assetKey: "balanceCoinsArea(width=300, height=76, class=currencyChanger, anchorX=0.5, anchorY=0.5)_clickableArea",
                                        x: "1728",
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceCoinsText_aliases",
                                        assetKey: "balanceCoinsText_aliases",
                                        x: "1728",
                                        y: "952",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceCoinsContainerBg",
                                        assetKey: "balanceCoinsContainerBg",
                                        x: "1554",
                                        y: "968",
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
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceNumber_aliases",
                                        assetKey: "balanceNumber_aliases",
                                        x: "1728",
                                        y: "1010",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceText_aliases",
                                        assetKey: "balanceText_aliases",
                                        x: "1728",
                                        y: "952",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "balanceContainerPlate",
                                        assetKey: "balanceContainerPlate",
                                        x: "1554",
                                        y: "968",
                                        alpha: "1"
                                    }]
                                }]
                            }, {
                                type: 1,
                                name: "UIQuickSettingsPanelContainer",
                                alpha: "1",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "settingPanelBackBg1_asset",
                                    assetKey: "settingPanelBackBg1_asset",
                                    x: 37,
                                    y: 621
                                }, {
                                    type: 1,
                                    name: "infoPanelPlusButton",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "quickSettingsPanelButtonButton(spritesX=6)_button",
                                        assetKey: "quickSettingsPanelButtonButton(spritesX=6)_button",
                                        x: "31",
                                        y: "970",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 0,
                                    name: "framInfoContainerBg",
                                    assetKey: "framInfoContainerBg",
                                    x: "31",
                                    y: "970",
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
                                        y: "728",
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
                                        y: "851",
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
                                        y: "911",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: mt.objects.NINE_SLICE,
                                    name: "settingPanelBackBg",
                                    assetKey: "settingPanelBackBg1",
                                    alpha: .8,
                                    anchorX: 0,
                                    anchorY: 0,
                                    height: 316,
                                    width: 76,
                                    left: 32,
                                    right: 32,
                                    top: 32,
                                    bottom: 32,
                                    x: 108,
                                    y: 1035,
                                    scaleX: 1 / nge.assets.getQualityFactor(),
                                    scaleY: 1 / nge.assets.getQualityFactor()
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1051: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Settings = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "audioSettingsBg1_asset",
                            fullPath: e + "audioSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "optionsSettingsBg1_asset",
                            fullPath: e + "optionsSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "visualSettingsBg1_asset",
                            fullPath: e + "visualSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "spinSettingsBg1_asset",
                            fullPath: e + "spinSettingsBg1_asset.png"
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
                                    x: "568",
                                    y: "324",
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
                                    x: "568",
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
                                    y: "737",
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
                                    x: "576",
                                    y: "152",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "audioSliderInactiveBg",
                                    assetKey: "audioSliderInactiveBg",
                                    x: "576",
                                    y: "151",
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
        1052: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.BetSettings = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "betLevelBetSettingsBg1_asset",
                            fullPath: e + "betLevelBetSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "linesBetSettingsBg1_asset",
                            fullPath: e + "linesBetSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "coinValueBetSettingsBg1_asset",
                            fullPath: e + "coinValueBetSettingsBg1_asset.png"
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
                            key: "betInCoinContainerBgName_alias",
                            fullPath: e + "playarea/betInCoinContainerBgName_alias.png"
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
                            key: "betInCashContainerBgName_alias",
                            fullPath: e + "playarea/betInCashContainerBgName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsBetInCashNumber(class=totalBetNumber balanceCurrency betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text",
                            fullPath: e + "playarea/settingsBetInCashNumber(class=totalBetNumber balanceCurrency betSettingsExtended, font=37pt FuturaPTHeavy, fill=#ffffff, anchorX=0.5, anchorY=0.5)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingsCoinValueName_alias",
                            fullPath: e + "playarea/betSettingsCoinValueName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingsLinesName_alias",
                            fullPath: e + "playarea/betSettingsLinesName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingsBetLevelName_alias",
                            fullPath: e + "playarea/betSettingsBetLevelName_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "audioSliderInactiveBg",
                            fullPath: e + "playarea/audioSliderInactiveBg.png"
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
                                name: "betSettingsBetLevelName_alias",
                                assetKey: "betSettingsBetLevelName_alias",
                                x: "163",
                                y: "362",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "betSettingsLinesName_alias",
                                assetKey: "betSettingsLinesName_alias",
                                x: "163",
                                y: "567",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "betSettingsCoinValueName_alias",
                                assetKey: "betSettingsCoinValueName_alias",
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
                                    name: "betInCashContainerBgName_alias",
                                    assetKey: "betInCashContainerBgName_alias",
                                    x: "493",
                                    y: "75",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betInCashContainerBg",
                                    assetKey: "betInCashContainerBg",
                                    x: "55",
                                    y: "108",
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
                                    name: "betInCoinContainerBgName_alias",
                                    assetKey: "betInCoinContainerBgName_alias",
                                    x: "1423",
                                    y: "75",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betInCoinContainerBg",
                                    assetKey: "betInCoinContainerBg",
                                    x: "986",
                                    y: "108",
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
                                    x: "1082",
                                    y: "326",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betLevelSliderBg_fill",
                                    assetKey: "betLevelSliderBg_fill",
                                    x: "633",
                                    y: "353",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betLevelInactiveBg",
                                    assetKey: "betLevelInactiveBg",
                                    x: "633",
                                    y: "352",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "betLevelSlider_bg",
                                    assetKey: "betLevelSlider_bg",
                                    x: "625",
                                    y: "345",
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
                                    x: "1082",
                                    y: "532",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "linesSliderBg_fill",
                                    assetKey: "linesSliderBg_fill",
                                    x: "633",
                                    y: "559",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "linesInactiveBg",
                                    assetKey: "linesInactiveBg",
                                    x: "633",
                                    y: "558",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "linesSlider_bg",
                                    assetKey: "linesSlider_bg",
                                    x: "625",
                                    y: "551",
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
                                    x: "1082",
                                    y: "738",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "coinValueSliderBg_fill",
                                    assetKey: "coinValueSliderBg_fill",
                                    x: "633",
                                    y: "765",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "coinValueInactiveBg",
                                    assetKey: "coinValueInactiveBg",
                                    x: "633",
                                    y: "764",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "coinValueSlider_bg",
                                    assetKey: "coinValueSlider_bg",
                                    x: "625",
                                    y: "757",
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
        1053: function(e, t) {
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
                            key: "pageInfoTenPlate(spritesY=2, groupName=helpCarousel, selection=9)_radioButton",
                            fullPath: e + "playarea/pageInfoTenPlate(spritesY=2, groupName=helpCarousel, selection=9)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoNinePlate(spritesY=2, groupName=helpCarousel, selection=8)_radioButton",
                            fullPath: e + "playarea/pageInfoNinePlate(spritesY=2, groupName=helpCarousel, selection=8)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoEightPlate(spritesY=2, groupName=helpCarousel, selection=7)_radioButton",
                            fullPath: e + "playarea/pageInfoEightPlate(spritesY=2, groupName=helpCarousel, selection=7)_radioButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoSevenPlate(spritesY=2, groupName=helpCarousel, selection=6)_radioButton",
                            fullPath: e + "playarea/pageInfoSevenPlate(spritesY=2, groupName=helpCarousel, selection=6)_radioButton.png"
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
                            key: "pageSix29_content",
                            fullPath: e + "playarea/pageSix29_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix28_content",
                            fullPath: e + "playarea/pageSix28_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix27_content",
                            fullPath: e + "playarea/pageSix27_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix26_content",
                            fullPath: e + "playarea/pageSix26_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix25_content",
                            fullPath: e + "playarea/pageSix25_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix24_content",
                            fullPath: e + "playarea/pageSix24_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix23_content",
                            fullPath: e + "playarea/pageSix23_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix22_content",
                            fullPath: e + "playarea/pageSix22_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix21_content",
                            fullPath: e + "playarea/pageSix21_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix20_content",
                            fullPath: e + "playarea/pageSix20_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix19_content",
                            fullPath: e + "playarea/pageSix19_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix18_content",
                            fullPath: e + "playarea/pageSix18_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix17_content",
                            fullPath: e + "playarea/pageSix17_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix16_content",
                            fullPath: e + "playarea/pageSix16_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix15_content",
                            fullPath: e + "playarea/pageSix15_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix14_content",
                            fullPath: e + "playarea/pageSix14_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix13_content",
                            fullPath: e + "playarea/pageSix13_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix12_content",
                            fullPath: e + "playarea/pageSix12_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix11_content",
                            fullPath: e + "playarea/pageSix11_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix10_content",
                            fullPath: e + "playarea/pageSix10_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix9_content",
                            fullPath: e + "playarea/pageSix9_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix8_content",
                            fullPath: e + "playarea/pageSix8_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix7_content",
                            fullPath: e + "playarea/pageSix7_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix6_content",
                            fullPath: e + "playarea/pageSix6_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix5_content",
                            fullPath: e + "playarea/pageSix5_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix4_content",
                            fullPath: e + "playarea/pageSix4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix3_content",
                            fullPath: e + "playarea/pageSix3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix2_content",
                            fullPath: e + "playarea/pageSix2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix1_content",
                            fullPath: e + "playarea/pageSix1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix0_content",
                            fullPath: e + "playarea/pageSix0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSixText_aliases",
                            fullPath: e + "playarea/pageSixText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paylinesNameText_aliases",
                            fullPath: e + "playarea/paylinesNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page9_Text1_aliases",
                            fullPath: e + "playarea/page9_Text1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page9_Text0_aliases",
                            fullPath: e + "playarea/page9_Text0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesName_aliases",
                            fullPath: e + "playarea/rulesName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_2_content",
                            fullPath: e + "playarea/page8_2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_1_content",
                            fullPath: e + "playarea/page8_1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_0_content",
                            fullPath: e + "playarea/page8_0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_Text1_aliases",
                            fullPath: e + "playarea/page8_Text1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_Text0_aliases",
                            fullPath: e + "playarea/page8_Text0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesName_aliases",
                            fullPath: e + "playarea/rulesName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSeven1_content",
                            fullPath: e + "playarea/pageSeven1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSeven0_content",
                            fullPath: e + "playarea/pageSeven0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSevenText1_aliases",
                            fullPath: e + "playarea/pageSevenText1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSevenText0_aliases",
                            fullPath: e + "playarea/pageSevenText0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesName_aliases",
                            fullPath: e + "playarea/rulesName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_4_content",
                            fullPath: e + "playarea/page6_4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_3_content",
                            fullPath: e + "playarea/page6_3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_2_content",
                            fullPath: e + "playarea/page6_2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_1_content",
                            fullPath: e + "playarea/page6_1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_0_content",
                            fullPath: e + "playarea/page6_0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_Text1_aliases",
                            fullPath: e + "playarea/page6_Text1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_Text0_aliases",
                            fullPath: e + "playarea/page6_Text0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesNameText_aliases",
                            fullPath: e + "playarea/rulesNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page5_2_content",
                            fullPath: e + "playarea/page5_2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page5_1_content",
                            fullPath: e + "playarea/page5_1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page5_0_content",
                            fullPath: e + "playarea/page5_0_content.png"
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
                            key: "rulesNameText_aliases",
                            fullPath: e + "playarea/rulesNameText_aliases.png"
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
                            key: "pageThreeNumber11(class=ps10-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber11(class=ps10-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber10(class=ps10-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber10(class=ps10-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber9(class=ps10-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber9(class=ps10-5 paytableNumbersWhite)_text.png"
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
                            key: "pageThreeNumber8(class=ps9-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber8(class=ps9-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber7(class=ps9-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber7(class=ps9-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber6(class=ps9-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber6(class=ps9-5 paytableNumbersWhite)_text.png"
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
                            key: "pageThreeNumber5(class=ps8-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber5(class=ps8-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber4(class=ps8-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber4(class=ps8-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber3(class=ps8-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber3(class=ps8-5 paytableNumbersWhite)_text.png"
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
                            key: "pageThreeNumber2(class=ps7-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber2(class=ps7-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber1(class=ps7-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber1(class=ps7-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber0(class=ps7-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber0(class=ps7-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber14(class=ps6-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber14(class=ps6-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber13(class=ps6-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber13(class=ps6-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber12(class=ps6-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber12(class=ps6-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber11(class=ps5-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber11(class=ps5-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber10(class=ps5-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber10(class=ps5-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber9(class=ps5-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber9(class=ps5-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber8(class=ps4-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber8(class=ps4-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber7(class=ps4-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber7(class=ps4-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber6(class=ps4-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber6(class=ps4-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber5(class=ps3-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber5(class=ps3-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber4(class=ps3-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber4(class=ps3-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber3(class=ps3-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber3(class=ps3-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber2(class=ps2-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber2(class=ps2-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber1(class=ps2-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber1(class=ps2-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber0(class=ps2-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber0(class=ps2-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_5_content",
                            fullPath: e + "playarea/page2_5_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_4_content",
                            fullPath: e + "playarea/page2_4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_3_content",
                            fullPath: e + "playarea/page2_3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_0_content",
                            fullPath: e + "playarea/page2_0_content.png"
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
                            key: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_Text5_aliases",
                            fullPath: e + "playarea/page2_Text5_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                            fullPath: e + "playarea/textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                            fullPath: e + "playarea/paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_Text0_aliases",
                            fullPath: e + "playarea/page2_Text0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
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
                            key: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOne3_content",
                            fullPath: e + "playarea/pageOne3_content.png"
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
                            key: "pageOneNumber2(class=ps0-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber2(class=ps0-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber1(class=ps0-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber1(class=ps0-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber0(class=ps0-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber0(class=ps0-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOne0_content",
                            fullPath: e + "playarea/pageOne0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText6_aliases",
                            fullPath: e + "playarea/pageOneText6_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText5_aliases",
                            fullPath: e + "playarea/pageOneText5_aliases.png"
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
                            key: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                            fullPath: e + "playarea/textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                            fullPath: e + "playarea/paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style.png"
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
                                        name: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                                        assetKey: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                                        x: "583",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                        assetKey: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                        x: "583",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText1_aliases",
                                        assetKey: "pageOneText1_aliases",
                                        x: "564",
                                        y: "525",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText2_aliases",
                                        assetKey: "pageOneText2_aliases",
                                        x: "1302",
                                        y: "525",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText5_aliases",
                                        assetKey: "pageOneText5_aliases",
                                        x: "960",
                                        y: "665",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText6_aliases",
                                        assetKey: "pageOneText6_aliases",
                                        x: "960",
                                        y: "806",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOne0_content",
                                        assetKey: "pageOne0_content",
                                        x: "353",
                                        y: "199",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber0(class=ps0-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber0(class=ps0-5 paytableNumbersWhite)_text",
                                        x: "677",
                                        y: "290",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber1(class=ps0-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber1(class=ps0-4 paytableNumbersWhite)_text",
                                        x: "677",
                                        y: "345",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber2(class=ps0-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber2(class=ps0-3 paytableNumbersWhite)_text",
                                        x: "677",
                                        y: "400",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "642",
                                        y: "290",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "642",
                                        y: "345",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "642",
                                        y: "400",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOne3_content",
                                        assetKey: "pageOne3_content",
                                        x: "1053",
                                        y: "186",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        x: "1412",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        x: "1412",
                                        y: "346",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        x: "1412",
                                        y: "400",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1377",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1377",
                                        y: "346",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1377",
                                        y: "400",
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
                                        name: "page2_Text0_aliases",
                                        assetKey: "page2_Text0_aliases",
                                        x: "960",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                                        assetKey: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                                        x: "583",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                        assetKey: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                        x: "583",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_Text5_aliases",
                                        assetKey: "page2_Text5_aliases",
                                        x: "960",
                                        y: "699",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        x: "1348",
                                        y: "304",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        x: "1348",
                                        y: "359",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        x: "1348",
                                        y: "413",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1313",
                                        y: "304",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1313",
                                        y: "359",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1313",
                                        y: "413",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_0_content",
                                        assetKey: "page2_0_content",
                                        x: "515",
                                        y: "216",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_3_content",
                                        assetKey: "page2_3_content",
                                        x: "639",
                                        y: "199",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_4_content",
                                        assetKey: "page2_4_content",
                                        x: "821",
                                        y: "209",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_5_content",
                                        assetKey: "page2_5_content",
                                        x: "985",
                                        y: "222",
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
                                        name: "pageOneNumber0(class=ps2-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber0(class=ps2-5 paytableNumbersWhite)_text",
                                        x: "570",
                                        y: "298",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber1(class=ps2-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber1(class=ps2-4 paytableNumbersWhite)_text",
                                        x: "570",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber2(class=ps2-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber2(class=ps2-3 paytableNumbersWhite)_text",
                                        x: "570",
                                        y: "408",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "535",
                                        y: "298",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "535",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "535",
                                        y: "408",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber3(class=ps3-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber3(class=ps3-5 paytableNumbersWhite)_text",
                                        x: "1104",
                                        y: "298",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber4(class=ps3-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber4(class=ps3-4 paytableNumbersWhite)_text",
                                        x: "1104",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber5(class=ps3-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber5(class=ps3-3 paytableNumbersWhite)_text",
                                        x: "1104",
                                        y: "407",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1069",
                                        y: "298",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1069",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1069",
                                        y: "407",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber6(class=ps4-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber6(class=ps4-5 paytableNumbersWhite)_text",
                                        x: "1647",
                                        y: "297",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber7(class=ps4-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber7(class=ps4-4 paytableNumbersWhite)_text",
                                        x: "1647",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber8(class=ps4-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber8(class=ps4-3 paytableNumbersWhite)_text",
                                        x: "1647",
                                        y: "408",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1608",
                                        y: "297",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1608",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1608",
                                        y: "408",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber9(class=ps5-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber9(class=ps5-5 paytableNumbersWhite)_text",
                                        x: "811",
                                        y: "653",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber10(class=ps5-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber10(class=ps5-4 paytableNumbersWhite)_text",
                                        x: "811",
                                        y: "708",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber11(class=ps5-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber11(class=ps5-3 paytableNumbersWhite)_text",
                                        x: "811",
                                        y: "763",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "776",
                                        y: "653",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "776",
                                        y: "708",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "776",
                                        y: "763",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber12(class=ps6-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber12(class=ps6-5 paytableNumbersWhite)_text",
                                        x: "1352",
                                        y: "658",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber13(class=ps6-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber13(class=ps6-4 paytableNumbersWhite)_text",
                                        x: "1352",
                                        y: "708",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber14(class=ps6-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber14(class=ps6-3 paytableNumbersWhite)_text",
                                        x: "1352",
                                        y: "763",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1317",
                                        y: "658",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1317",
                                        y: "708",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1317",
                                        y: "763",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo0_content",
                                        assetKey: "pageTwo0_content",
                                        x: "224",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo1_content",
                                        assetKey: "pageTwo1_content",
                                        x: "762",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo2_content",
                                        assetKey: "pageTwo2_content",
                                        x: "1303",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo3_content",
                                        assetKey: "pageTwo3_content",
                                        x: "474",
                                        y: "576",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo4_content",
                                        assetKey: "pageTwo4_content",
                                        x: "1013",
                                        y: "576",
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
                                        name: "pageThreeNumber0(class=ps7-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber0(class=ps7-5 paytableNumbersWhite)_text",
                                        x: "711",
                                        y: "252",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber1(class=ps7-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber1(class=ps7-4 paytableNumbersWhite)_text",
                                        x: "711",
                                        y: "302",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber2(class=ps7-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber2(class=ps7-3 paytableNumbersWhite)_text",
                                        x: "711",
                                        y: "357",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "676",
                                        y: "252",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "676",
                                        y: "302",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "676",
                                        y: "357",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber3(class=ps8-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber3(class=ps8-5 paytableNumbersWhite)_text",
                                        x: "1473",
                                        y: "252",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber4(class=ps8-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber4(class=ps8-4 paytableNumbersWhite)_text",
                                        x: "1473",
                                        y: "302",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber5(class=ps8-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber5(class=ps8-3 paytableNumbersWhite)_text",
                                        x: "1473",
                                        y: "357",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1438",
                                        y: "252",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1438",
                                        y: "302",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1438",
                                        y: "357",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber6(class=ps9-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber6(class=ps9-5 paytableNumbersWhite)_text",
                                        x: "712",
                                        y: "662",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber7(class=ps9-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber7(class=ps9-4 paytableNumbersWhite)_text",
                                        x: "712",
                                        y: "712",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber8(class=ps9-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber8(class=ps9-3 paytableNumbersWhite)_text",
                                        x: "712",
                                        y: "767",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "677",
                                        y: "662",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "677",
                                        y: "712",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "677",
                                        y: "767",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber9(class=ps10-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber9(class=ps10-5 paytableNumbersWhite)_text",
                                        x: "1472",
                                        y: "662",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber10(class=ps10-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber10(class=ps10-4 paytableNumbersWhite)_text",
                                        x: "1472",
                                        y: "712",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber11(class=ps10-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber11(class=ps10-3 paytableNumbersWhite)_text",
                                        x: "1472",
                                        y: "767",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1437",
                                        y: "662",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1437",
                                        y: "712",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1437",
                                        y: "767",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree0_content",
                                        assetKey: "pageThree0_content",
                                        x: "284",
                                        y: "132",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree1_content",
                                        assetKey: "pageThree1_content",
                                        x: "1054",
                                        y: "132",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree2_content",
                                        assetKey: "pageThree2_content",
                                        x: "284",
                                        y: "540",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree3_content",
                                        assetKey: "pageThree3_content",
                                        x: "1054",
                                        y: "540",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoFive_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "rulesNameText_aliases",
                                        assetKey: "rulesNameText_aliases",
                                        x: "960",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFiveText0_aliases",
                                        assetKey: "pageFiveText0_aliases",
                                        x: "960",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFiveText1_aliases",
                                        assetKey: "pageFiveText1_aliases",
                                        x: "960",
                                        y: "748",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page5_0_content",
                                        assetKey: "page5_0_content",
                                        x: "395",
                                        y: "242",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page5_1_content",
                                        assetKey: "page5_1_content",
                                        x: "777",
                                        y: "240",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page5_2_content",
                                        assetKey: "page5_2_content",
                                        x: "1157",
                                        y: "240",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoSix_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "rulesNameText_aliases",
                                        assetKey: "rulesNameText_aliases",
                                        x: "960",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_Text0_aliases",
                                        assetKey: "page6_Text0_aliases",
                                        x: "960",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_Text1_aliases",
                                        assetKey: "page6_Text1_aliases",
                                        x: "960",
                                        y: "829",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_0_content",
                                        assetKey: "page6_0_content",
                                        x: "414",
                                        y: "172",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_1_content",
                                        assetKey: "page6_1_content",
                                        x: "634",
                                        y: "172",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_2_content",
                                        assetKey: "page6_2_content",
                                        x: "854",
                                        y: "172",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_3_content",
                                        assetKey: "page6_3_content",
                                        x: "1074",
                                        y: "172",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_4_content",
                                        assetKey: "page6_4_content",
                                        x: "1290",
                                        y: "172",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoSeven_container",
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
                                        name: "pageSevenText0_aliases",
                                        assetKey: "pageSevenText0_aliases",
                                        x: "960",
                                        y: "623",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSevenText1_aliases",
                                        assetKey: "pageSevenText1_aliases",
                                        x: "960",
                                        y: "793",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSeven0_content",
                                        assetKey: "pageSeven0_content",
                                        x: "217",
                                        y: "154",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSeven1_content",
                                        assetKey: "pageSeven1_content",
                                        x: "984",
                                        y: "154",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoEight_container",
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
                                        name: "page8_Text0_aliases",
                                        assetKey: "page8_Text0_aliases",
                                        x: "960",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page8_Text1_aliases",
                                        assetKey: "page8_Text1_aliases",
                                        x: "960",
                                        y: "742",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page8_0_content",
                                        assetKey: "page8_0_content",
                                        x: "402",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page8_1_content",
                                        assetKey: "page8_1_content",
                                        x: "785",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page8_2_content",
                                        assetKey: "page8_2_content",
                                        x: "1165",
                                        y: "214",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoNine_container",
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
                                        name: "page9_Text0_aliases",
                                        assetKey: "page9_Text0_aliases",
                                        x: "960",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page9_Text1_aliases",
                                        assetKey: "page9_Text1_aliases",
                                        x: "960",
                                        y: "573",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoTen_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "paylinesNameText_aliases",
                                        assetKey: "paylinesNameText_aliases",
                                        x: "960",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSixText_aliases",
                                        assetKey: "pageSixText_aliases",
                                        x: "960",
                                        y: "846",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix0_content",
                                        assetKey: "pageSix0_content",
                                        x: "294",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix1_content",
                                        assetKey: "pageSix1_content",
                                        x: "527",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix2_content",
                                        assetKey: "pageSix2_content",
                                        x: "760",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix3_content",
                                        assetKey: "pageSix3_content",
                                        x: "997",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix4_content",
                                        assetKey: "pageSix4_content",
                                        x: "1231",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix5_content",
                                        assetKey: "pageSix5_content",
                                        x: "1465",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix6_content",
                                        assetKey: "pageSix6_content",
                                        x: "294",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix7_content",
                                        assetKey: "pageSix7_content",
                                        x: "527",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix8_content",
                                        assetKey: "pageSix8_content",
                                        x: "760",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix9_content",
                                        assetKey: "pageSix9_content",
                                        x: "997",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix10_content",
                                        assetKey: "pageSix10_content",
                                        x: "1231",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix11_content",
                                        assetKey: "pageSix11_content",
                                        x: "1465",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix12_content",
                                        assetKey: "pageSix12_content",
                                        x: "294",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix13_content",
                                        assetKey: "pageSix13_content",
                                        x: "527",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix14_content",
                                        assetKey: "pageSix14_content",
                                        x: "760",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix15_content",
                                        assetKey: "pageSix15_content",
                                        x: "997",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix16_content",
                                        assetKey: "pageSix16_content",
                                        x: "1231",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix17_content",
                                        assetKey: "pageSix17_content",
                                        x: "1465",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix18_content",
                                        assetKey: "pageSix18_content",
                                        x: "294",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix19_content",
                                        assetKey: "pageSix19_content",
                                        x: "527",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix20_content",
                                        assetKey: "pageSix20_content",
                                        x: "760",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix21_content",
                                        assetKey: "pageSix21_content",
                                        x: "997",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix22_content",
                                        assetKey: "pageSix22_content",
                                        x: "1231",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix23_content",
                                        assetKey: "pageSix23_content",
                                        x: "1465",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix24_content",
                                        assetKey: "pageSix24_content",
                                        x: "294",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix25_content",
                                        assetKey: "pageSix25_content",
                                        x: "527",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix26_content",
                                        assetKey: "pageSix26_content",
                                        x: "760",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix27_content",
                                        assetKey: "pageSix27_content",
                                        x: "997",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix28_content",
                                        assetKey: "pageSix28_content",
                                        x: "1231",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix29_content",
                                        assetKey: "pageSix29_content",
                                        x: "1465",
                                        y: "675",
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
                                    x: "727",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoTwoPlate(spritesY=2, groupName=helpCarousel, selection=1)_radioButton",
                                    assetKey: "pageInfoTwoPlate(spritesY=2, groupName=helpCarousel, selection=1)_radioButton",
                                    x: "777",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoThreePlate(spritesY=2, groupName=helpCarousel, selection=2)_radioButton",
                                    assetKey: "pageInfoThreePlate(spritesY=2, groupName=helpCarousel, selection=2)_radioButton",
                                    x: "827",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoFourPlate(spritesY=2, groupName=helpCarousel, selection=3)_radioButton",
                                    assetKey: "pageInfoFourPlate(spritesY=2, groupName=helpCarousel, selection=3)_radioButton",
                                    x: "877",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoFivePlate(spritesY=2, groupName=helpCarousel, selection=4)_radioButton",
                                    assetKey: "pageInfoFivePlate(spritesY=2, groupName=helpCarousel, selection=4)_radioButton",
                                    x: "927",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoSixPlate(spritesY=2, groupName=helpCarousel, selection=5)_radioButton",
                                    assetKey: "pageInfoSixPlate(spritesY=2, groupName=helpCarousel, selection=5)_radioButton",
                                    x: "977",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoSevenPlate(spritesY=2, groupName=helpCarousel, selection=6)_radioButton",
                                    assetKey: "pageInfoSevenPlate(spritesY=2, groupName=helpCarousel, selection=6)_radioButton",
                                    x: "1027",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoEightPlate(spritesY=2, groupName=helpCarousel, selection=7)_radioButton",
                                    assetKey: "pageInfoEightPlate(spritesY=2, groupName=helpCarousel, selection=7)_radioButton",
                                    x: "1077",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoNinePlate(spritesY=2, groupName=helpCarousel, selection=8)_radioButton",
                                    assetKey: "pageInfoNinePlate(spritesY=2, groupName=helpCarousel, selection=8)_radioButton",
                                    x: "1125",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoTenPlate(spritesY=2, groupName=helpCarousel, selection=9)_radioButton",
                                    assetKey: "pageInfoTenPlate(spritesY=2, groupName=helpCarousel, selection=9)_radioButton",
                                    x: "1173",
                                    y: "909",
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
        1054: function(e, t) {
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
                            fullPath: e + "menuPlateBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paginationInfoBg1_asset",
                            fullPath: e + "paginationInfoBg1_asset.png"
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
                            key: "pageThreeHeaderText_alias",
                            fullPath: e + "playarea/pageThreeHeaderText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageTwoHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoHeaderText_alias",
                            fullPath: e + "playarea/pageTwoHeaderText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageOneHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneHeaderText_alias",
                            fullPath: e + "playarea/pageOneHeaderText_alias.png"
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
                                            y: "968",
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
                                            y: "961",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            assetKey: "pageTwoTriggerButtonButton(class=pageOneTrigger, width=500, height=90)_clickableArea",
                                            x: "714",
                                            y: "968",
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
                                            y: "961",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea",
                                            assetKey: "pageThreeTriggerButtonButton(class=pageOneTrigger, width=880, height=162)_clickableArea",
                                            x: "1210",
                                            y: "968",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageOneHeaderContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageOneHeaderText_alias",
                                            assetKey: "pageOneHeaderText_alias",
                                            x: "465",
                                            y: "1013",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageOneHeaderImage(class=tabHeaderImage)_image",
                                            assetKey: "pageOneHeaderImage(class=tabHeaderImage)_image",
                                            x: "214",
                                            y: "960",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageTwoHeaderContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageTwoHeaderText_alias",
                                            assetKey: "pageTwoHeaderText_alias",
                                            x: "962",
                                            y: "1013",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                                            assetKey: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                                            x: "710",
                                            y: "960",
                                            alpha: "1"
                                        }]
                                    }, {
                                        type: 1,
                                        name: "pageThreeHeaderContainer",
                                        alpha: "1",
                                        contents: [{
                                            type: 0,
                                            name: "pageThreeHeaderText_alias",
                                            assetKey: "pageThreeHeaderText_alias",
                                            x: "1459",
                                            y: "1013",
                                            alpha: "1"
                                        }, {
                                            type: 0,
                                            name: "pageThreeHeaderImage(class=tabHeaderImage)_image",
                                            assetKey: "pageThreeHeaderImage(class=tabHeaderImage)_image",
                                            x: "1207",
                                            y: "960",
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
                                y: 962
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
                                y: 960
                            }, {
                                type: mt.objects.IMAGE,
                                name: "menuPlateBg1_asset",
                                assetKey: "menuPlateBg1_asset",
                                x: 211,
                                y: 962
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
                                y: 960
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
        1055: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_ar = {}
        },
        1056: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_ar.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Ui();
                e.styles[".titleTextStyle"].style.font = "26pt futuraptheavy", e.styles[".titleTextStyle"].style.strokeThickness = 2, e.styles[".titleButtonStyle"].style.font = "26pt futuraptheavy", e.styles[".titleButtonStyle"].style.strokeThickness = 3;
                var t = function(e, a, s) {
                    for (var n = 0; n < e.contents.length; n++) {
                        var l = e.contents[n];
                        if (l[a] === s || l.contents && (l = t(l, a, s))) return l
                    }
                    return !1
                };
                return "balanceText_aliases winText_aliases linesText_aliases balanceCoinsText_aliases totalBetCoinsText_aliases coinValueText_aliases".split(" ").forEach((function(a) {
                    a = t(e.objects, "name", a), console.log(a), a && (a.y = +a.y - 5)
                })), e
            }
        },
        1057: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_zh = {}
        },
        1058: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_zh.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Ui();
                e.styles[".titleTextStyle"].style.font = "24pt futuraptheavy", e.styles[".titleTextStyle"].style.strokeThickness = 2, e.styles[".titleButtonStyle"].style.font = "26pt futuraptheavy", e.styles[".titleButtonStyle"].style.strokeThickness = 3;
                var t = function(e, a, s) {
                    for (var n = 0; n < e.contents.length; n++) {
                        var l = e.contents[n];
                        if (l[a] === s || l.contents && (l = t(l, a, s))) return l
                    }
                    return !1
                };
                return "balanceText_aliases winText_aliases linesText_aliases balanceCoinsText_aliases totalBetCoinsText_aliases coinValueText_aliases".split(" ").forEach((function(a) {
                    (a = t(e.objects, "name", a)) && (a.y = +a.y - 5)
                })), e
            }
        },
        1059: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile = {}
        },
        1060: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Ui = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        ".titleTextMobileStyle": {
                            style: {
                                font: "26pt futuraptheavy",
                                fill: 16767030,
                                stroke: 4728855,
                                strokeThickness: 10
                            }
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "totalbetbg",
                            fullPath: e + "playarea/totalbetbg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balancebg",
                            fullPath: e + "playarea/balancebg.png"
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
                                    y: "12",
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
                                        y: "224",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "autoSpinButtonMobileButton_button",
                                        assetKey: "autoSpinButtonMobileButton_button",
                                        x: "1649",
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
                                    y: "940",
                                    alpha: "1"
                                }]
                            }]
                        }, {
                            type: 1,
                            name: "settingBottomUIMobileContainer",
                            alpha: "1",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "settingPanelMobileBackBg1_asset",
                                assetKey: "settingPanelMobileBackBg1_asset",
                                x: 35,
                                y: 586,
                                alpha: .8
                            }, {
                                type: 1,
                                name: "infoPanelPlusMobileButton",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "quickSettingsPanelMobileButtonButton(spritesX=6)_button",
                                    assetKey: "quickSettingsPanelMobileButtonButton(spritesX=6)_button",
                                    x: "53",
                                    y: "954",
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
                                type: mt.objects.NINE_SLICE,
                                name: "settingPanelMobileBackBg",
                                assetKey: "settingPanelMobileBackBg1",
                                x: 167,
                                y: 1066,
                                anchorX: 0,
                                anchorY: 0,
                                height: 468,
                                width: 128,
                                left: 56,
                                right: 56,
                                top: 68,
                                bottom: 56,
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
                                style: {
                                    font: "18pt futuraptheavy",
                                    fill: 15712883
                                },
                                class: "freeSpinAmount",
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 1027
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
                                y: "931",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "winMobileName_aliases",
                                assetKey: "winMobileName_aliases",
                                x: "965",
                                y: "901",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "totalBetMobileName_aliases",
                                assetKey: "totalBetMobileName_aliases",
                                x: "430",
                                y: "931",
                                alpha: "1"
                            }, {
                                type: 1,
                                name: "betMinusButtonMobile",
                                alpha: "1",
                                contents: [{
                                    type: 0,
                                    name: "betMinusButtonMobileButton(spritesX=4)_button",
                                    assetKey: "betMinusButtonMobileButton(spritesX=4)_button",
                                    x: "216",
                                    y: "965",
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
                                    x: "555",
                                    y: "965",
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
                                x: "665",
                                y: "920",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "balancebg",
                                assetKey: "balancebg",
                                x: "1263",
                                y: "948",
                                alpha: "1"
                            }, {
                                type: 0,
                                name: "totalbetbg",
                                assetKey: "totalbetbg",
                                x: "192",
                                y: "948",
                                alpha: "1"
                            }]
                        }]
                    }
                }
            }
        },
        1061: function(e, t) {
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
                            fullPath: e + "playarea/infoNextButtonButton_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "infoPrevButtonButton_button",
                            fullPath: e + "playarea/infoPrevButtonButton_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoTenPlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoTenPlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoNinePlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoNinePlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoEightPlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoEightPlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoSevenPlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoSevenPlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoSixPlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoSixPlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoFivePlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoFivePlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoFourPlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoFourPlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoThreePlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoThreePlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoTwoPlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoTwoPlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoOnePlate(spritesY=2)_spritesheet",
                            fullPath: e + "playarea/pageInfoOnePlate(spritesY=2)_spritesheet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "nameBg",
                            fullPath: e + "playarea/nameBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix29_content",
                            fullPath: e + "playarea/pageSix29_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix28_content",
                            fullPath: e + "playarea/pageSix28_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix27_content",
                            fullPath: e + "playarea/pageSix27_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix26_content",
                            fullPath: e + "playarea/pageSix26_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix25_content",
                            fullPath: e + "playarea/pageSix25_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix24_content",
                            fullPath: e + "playarea/pageSix24_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix23_content",
                            fullPath: e + "playarea/pageSix23_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix22_content",
                            fullPath: e + "playarea/pageSix22_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix21_content",
                            fullPath: e + "playarea/pageSix21_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix20_content",
                            fullPath: e + "playarea/pageSix20_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix19_content",
                            fullPath: e + "playarea/pageSix19_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix18_content",
                            fullPath: e + "playarea/pageSix18_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix17_content",
                            fullPath: e + "playarea/pageSix17_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix16_content",
                            fullPath: e + "playarea/pageSix16_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix15_content",
                            fullPath: e + "playarea/pageSix15_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix14_content",
                            fullPath: e + "playarea/pageSix14_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix13_content",
                            fullPath: e + "playarea/pageSix13_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix12_content",
                            fullPath: e + "playarea/pageSix12_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix11_content",
                            fullPath: e + "playarea/pageSix11_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix10_content",
                            fullPath: e + "playarea/pageSix10_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix9_content",
                            fullPath: e + "playarea/pageSix9_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix8_content",
                            fullPath: e + "playarea/pageSix8_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix7_content",
                            fullPath: e + "playarea/pageSix7_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix6_content",
                            fullPath: e + "playarea/pageSix6_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix5_content",
                            fullPath: e + "playarea/pageSix5_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix4_content",
                            fullPath: e + "playarea/pageSix4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix3_content",
                            fullPath: e + "playarea/pageSix3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix2_content",
                            fullPath: e + "playarea/pageSix2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix1_content",
                            fullPath: e + "playarea/pageSix1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSix0_content",
                            fullPath: e + "playarea/pageSix0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSixText_aliases",
                            fullPath: e + "playarea/pageSixText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paylinesNameText_aliases",
                            fullPath: e + "playarea/paylinesNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "fake_end_px",
                            fullPath: e + "playarea/fake_end_px.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page9_Text1_aliases",
                            fullPath: e + "playarea/page9_Text1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page9_Text0_aliases",
                            fullPath: e + "playarea/page9_Text0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesName_aliases",
                            fullPath: e + "playarea/rulesName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_2_content",
                            fullPath: e + "playarea/page8_2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_1_content",
                            fullPath: e + "playarea/page8_1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_0_content",
                            fullPath: e + "playarea/page8_0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_Text1_aliases",
                            fullPath: e + "playarea/page8_Text1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page8_Text0_aliases",
                            fullPath: e + "playarea/page8_Text0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesName_aliases",
                            fullPath: e + "playarea/rulesName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSeven1_content",
                            fullPath: e + "playarea/pageSeven1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSeven0_content",
                            fullPath: e + "playarea/pageSeven0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSevenText1_aliases",
                            fullPath: e + "playarea/pageSevenText1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageSevenText0_aliases",
                            fullPath: e + "playarea/pageSevenText0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesName_aliases",
                            fullPath: e + "playarea/rulesName_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_4_content",
                            fullPath: e + "playarea/page6_4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_3_content",
                            fullPath: e + "playarea/page6_3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_2_content",
                            fullPath: e + "playarea/page6_2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_1_content",
                            fullPath: e + "playarea/page6_1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_0_content",
                            fullPath: e + "playarea/page6_0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_Text1_aliases",
                            fullPath: e + "playarea/page6_Text1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6_Text0_aliases",
                            fullPath: e + "playarea/page6_Text0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "rulesNameText_aliases",
                            fullPath: e + "playarea/rulesNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFour2_content",
                            fullPath: e + "playarea/pageFour2_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFour1_content",
                            fullPath: e + "playarea/pageFour1_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageFour0_content",
                            fullPath: e + "playarea/pageFour0_content.png"
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
                            key: "rulesNameText_aliases",
                            fullPath: e + "playarea/rulesNameText_aliases.png"
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
                            key: "pageThreeNumber11(class=ps10-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber11(class=ps10-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber10(class=ps10-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber10(class=ps10-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber9(class=ps10-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber9(class=ps10-5 paytableNumbersWhite)_text.png"
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
                            key: "pageThreeNumber8(class=ps9-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber8(class=ps9-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber7(class=ps9-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber7(class=ps9-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber6(class=ps9-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber6(class=ps9-5 paytableNumbersWhite)_text.png"
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
                            key: "pageThreeNumber5(class=ps8-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber5(class=ps8-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber4(class=ps8-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber4(class=ps8-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber3(class=ps8-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber3(class=ps8-5 paytableNumbersWhite)_text.png"
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
                            key: "pageThreeNumber2(class=ps7-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber2(class=ps7-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber1(class=ps7-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber1(class=ps7-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageThreeNumber0(class=ps7-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageThreeNumber0(class=ps7-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber14(class=ps6-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber14(class=ps6-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber13(class=ps6-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber13(class=ps6-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber12(class=ps6-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber12(class=ps6-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber11(class=ps5-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber11(class=ps5-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber10(class=ps5-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber10(class=ps5-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber9(class=ps5-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber9(class=ps5-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber8(class=ps4-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber8(class=ps4-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber7(class=ps4-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber7(class=ps4-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber6(class=ps4-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber6(class=ps4-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber5(class=ps3-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber5(class=ps3-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber4(class=ps3-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber4(class=ps3-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber3(class=ps3-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber3(class=ps3-5 paytableNumbersWhite)_text.png"
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
                            key: "pageOneNumber2(class=ps2-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber2(class=ps2-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber1(class=ps2-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber1(class=ps2-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber0(class=ps2-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber0(class=ps2-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_5_content",
                            fullPath: e + "playarea/page2_5_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_4_content",
                            fullPath: e + "playarea/page2_4_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_3_content",
                            fullPath: e + "playarea/page2_3_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_0_content",
                            fullPath: e + "playarea/page2_0_content.png"
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
                            key: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_Text5_aliases",
                            fullPath: e + "playarea/page2_Text5_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                            fullPath: e + "playarea/textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                            fullPath: e + "playarea/paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2_Text0_aliases",
                            fullPath: e + "playarea/page2_Text0_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNameText_aliases",
                            fullPath: e + "playarea/paytableNameText_aliases.png"
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
                            key: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOne3_content",
                            fullPath: e + "playarea/pageOne3_content.png"
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
                            key: "pageOneNumber2(class=ps0-3 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber2(class=ps0-3 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber1(class=ps0-4 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber1(class=ps0-4 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneNumber0(class=ps0-5 paytableNumbersWhite)_text",
                            fullPath: e + "playarea/pageOneNumber0(class=ps0-5 paytableNumbersWhite)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOne0_content",
                            fullPath: e + "playarea/pageOne0_content.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText6_aliases",
                            fullPath: e + "playarea/pageOneText6_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneText5_aliases",
                            fullPath: e + "playarea/pageOneText5_aliases.png"
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
                            key: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                            fullPath: e + "playarea/textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                            fullPath: e + "playarea/paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style.png"
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
                                name: "pagesInfo(x=100, width=1720, height=1080, swipe=2, dragScrollSensivity=0.0001)_container",
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
                                        name: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                                        assetKey: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                                        x: "483",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                        assetKey: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                        x: "483",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText1_aliases",
                                        assetKey: "pageOneText1_aliases",
                                        x: "494",
                                        y: "525",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText2_aliases",
                                        assetKey: "pageOneText2_aliases",
                                        x: "1232",
                                        y: "525",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText5_aliases",
                                        assetKey: "pageOneText5_aliases",
                                        x: "860",
                                        y: "665",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneText6_aliases",
                                        assetKey: "pageOneText6_aliases",
                                        x: "860",
                                        y: "806",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOne0_content",
                                        assetKey: "pageOne0_content",
                                        x: "283",
                                        y: "199",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber0(class=ps0-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber0(class=ps0-5 paytableNumbersWhite)_text",
                                        x: "607",
                                        y: "290",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber1(class=ps0-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber1(class=ps0-4 paytableNumbersWhite)_text",
                                        x: "607",
                                        y: "345",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber2(class=ps0-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber2(class=ps0-3 paytableNumbersWhite)_text",
                                        x: "607",
                                        y: "400",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "572",
                                        y: "290",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "572",
                                        y: "345",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "572",
                                        y: "400",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOne3_content",
                                        assetKey: "pageOne3_content",
                                        x: "983",
                                        y: "186",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        x: "1342",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        x: "1342",
                                        y: "346",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        x: "1342",
                                        y: "400",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1307",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1307",
                                        y: "346",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1307",
                                        y: "400",
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
                                        name: "page2_Text0_aliases",
                                        assetKey: "page2_Text0_aliases",
                                        x: "860",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                                        assetKey: "paytableNumbersWhite(font=30pt futuraptmedium, anchorX=0.1, anchorY=0.5, fill=#fff)_style",
                                        x: "483",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                        assetKey: "textNumbersYellow(font=30pt futuraptmedium,  anchorX=0.5, anchorY=0.5, fill=#fec36d)_style",
                                        x: "483",
                                        y: "-43",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_Text5_aliases",
                                        assetKey: "page2_Text5_aliases",
                                        x: "860",
                                        y: "719",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber3(class=ps1-5 paytableNumbersWhite)_text",
                                        x: "1228",
                                        y: "304",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber4(class=ps1-4 paytableNumbersWhite)_text",
                                        x: "1228",
                                        y: "359",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber5(class=ps1-3 paytableNumbersWhite)_text",
                                        x: "1228",
                                        y: "413",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1193",
                                        y: "304",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1193",
                                        y: "359",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1193",
                                        y: "413",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_0_content",
                                        assetKey: "page2_0_content",
                                        x: "395",
                                        y: "216",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_3_content",
                                        assetKey: "page2_3_content",
                                        x: "519",
                                        y: "199",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_4_content",
                                        assetKey: "page2_4_content",
                                        x: "701",
                                        y: "209",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page2_5_content",
                                        assetKey: "page2_5_content",
                                        x: "865",
                                        y: "222",
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
                                        name: "pageOneNumber0(class=ps2-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber0(class=ps2-5 paytableNumbersWhite)_text",
                                        x: "470",
                                        y: "298",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber1(class=ps2-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber1(class=ps2-4 paytableNumbersWhite)_text",
                                        x: "470",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber2(class=ps2-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber2(class=ps2-3 paytableNumbersWhite)_text",
                                        x: "470",
                                        y: "408",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "435",
                                        y: "298",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "435",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "435",
                                        y: "408",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber3(class=ps3-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber3(class=ps3-5 paytableNumbersWhite)_text",
                                        x: "1004",
                                        y: "298",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber4(class=ps3-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber4(class=ps3-4 paytableNumbersWhite)_text",
                                        x: "1004",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber5(class=ps3-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber5(class=ps3-3 paytableNumbersWhite)_text",
                                        x: "1004",
                                        y: "407",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "969",
                                        y: "298",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "969",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "969",
                                        y: "407",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber6(class=ps4-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber6(class=ps4-5 paytableNumbersWhite)_text",
                                        x: "1547",
                                        y: "297",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber7(class=ps4-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber7(class=ps4-4 paytableNumbersWhite)_text",
                                        x: "1547",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber8(class=ps4-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber8(class=ps4-3 paytableNumbersWhite)_text",
                                        x: "1547",
                                        y: "408",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1508",
                                        y: "297",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1508",
                                        y: "353",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1508",
                                        y: "408",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber9(class=ps5-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber9(class=ps5-5 paytableNumbersWhite)_text",
                                        x: "711",
                                        y: "653",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber10(class=ps5-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber10(class=ps5-4 paytableNumbersWhite)_text",
                                        x: "711",
                                        y: "708",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber11(class=ps5-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber11(class=ps5-3 paytableNumbersWhite)_text",
                                        x: "711",
                                        y: "763",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "676",
                                        y: "653",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "676",
                                        y: "708",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "676",
                                        y: "763",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber12(class=ps6-5 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber12(class=ps6-5 paytableNumbersWhite)_text",
                                        x: "1252",
                                        y: "658",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber13(class=ps6-4 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber13(class=ps6-4 paytableNumbersWhite)_text",
                                        x: "1252",
                                        y: "708",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageOneNumber14(class=ps6-3 paytableNumbersWhite)_text",
                                        assetKey: "pageOneNumber14(class=ps6-3 paytableNumbersWhite)_text",
                                        x: "1252",
                                        y: "763",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1217",
                                        y: "658",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1217",
                                        y: "708",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1217",
                                        y: "763",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo0_content",
                                        assetKey: "pageTwo0_content",
                                        x: "124",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo1_content",
                                        assetKey: "pageTwo1_content",
                                        x: "662",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo2_content",
                                        assetKey: "pageTwo2_content",
                                        x: "1203",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo3_content",
                                        assetKey: "pageTwo3_content",
                                        x: "374",
                                        y: "576",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageTwo4_content",
                                        assetKey: "pageTwo4_content",
                                        x: "913",
                                        y: "576",
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
                                        name: "pageThreeNumber0(class=ps7-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber0(class=ps7-5 paytableNumbersWhite)_text",
                                        x: "611",
                                        y: "252",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber1(class=ps7-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber1(class=ps7-4 paytableNumbersWhite)_text",
                                        x: "611",
                                        y: "302",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber2(class=ps7-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber2(class=ps7-3 paytableNumbersWhite)_text",
                                        x: "611",
                                        y: "357",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "576",
                                        y: "252",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "576",
                                        y: "302",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "576",
                                        y: "357",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber3(class=ps8-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber3(class=ps8-5 paytableNumbersWhite)_text",
                                        x: "1373",
                                        y: "252",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber4(class=ps8-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber4(class=ps8-4 paytableNumbersWhite)_text",
                                        x: "1373",
                                        y: "302",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber5(class=ps8-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber5(class=ps8-3 paytableNumbersWhite)_text",
                                        x: "1373",
                                        y: "357",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1338",
                                        y: "252",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1338",
                                        y: "302",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1338",
                                        y: "357",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber6(class=ps9-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber6(class=ps9-5 paytableNumbersWhite)_text",
                                        x: "612",
                                        y: "662",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber7(class=ps9-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber7(class=ps9-4 paytableNumbersWhite)_text",
                                        x: "612",
                                        y: "712",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber8(class=ps9-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber8(class=ps9-3 paytableNumbersWhite)_text",
                                        x: "612",
                                        y: "767",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "577",
                                        y: "662",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "577",
                                        y: "712",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "577",
                                        y: "767",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber9(class=ps10-5 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber9(class=ps10-5 paytableNumbersWhite)_text",
                                        x: "1372",
                                        y: "662",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber10(class=ps10-4 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber10(class=ps10-4 paytableNumbersWhite)_text",
                                        x: "1372",
                                        y: "712",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThreeNumber11(class=ps10-3 paytableNumbersWhite)_text",
                                        assetKey: "pageThreeNumber11(class=ps10-3 paytableNumbersWhite)_text",
                                        x: "1372",
                                        y: "767",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber5(text=5 , class=textNumbersYellow)_text",
                                        x: "1337",
                                        y: "662",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber4(text=4 , class=textNumbersYellow)_text",
                                        x: "1337",
                                        y: "712",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        assetKey: "textNumber3(text=3 , class=textNumbersYellow)_text",
                                        x: "1337",
                                        y: "767",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree0_content",
                                        assetKey: "pageThree0_content",
                                        x: "184",
                                        y: "132",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree1_content",
                                        assetKey: "pageThree1_content",
                                        x: "954",
                                        y: "132",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree2_content",
                                        assetKey: "pageThree2_content",
                                        x: "184",
                                        y: "540",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageThree3_content",
                                        assetKey: "pageThree3_content",
                                        x: "954",
                                        y: "540",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoFive_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "rulesNameText_aliases",
                                        assetKey: "rulesNameText_aliases",
                                        x: "860",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFiveText0_aliases",
                                        assetKey: "pageFiveText0_aliases",
                                        x: "860",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFiveText1_aliases",
                                        assetKey: "pageFiveText1_aliases",
                                        x: "860",
                                        y: "748",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFour0_content",
                                        assetKey: "pageFour0_content",
                                        x: "1061",
                                        y: "242",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFour1_content",
                                        assetKey: "pageFour1_content",
                                        x: "679",
                                        y: "242",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageFour2_content",
                                        assetKey: "pageFour2_content",
                                        x: "296",
                                        y: "242",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoSix_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "rulesNameText_aliases",
                                        assetKey: "rulesNameText_aliases",
                                        x: "860",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_Text0_aliases",
                                        assetKey: "page6_Text0_aliases",
                                        x: "860",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_Text1_aliases",
                                        assetKey: "page6_Text1_aliases",
                                        x: "860",
                                        y: "829",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_0_content",
                                        assetKey: "page6_0_content",
                                        x: "314",
                                        y: "172",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_1_content",
                                        assetKey: "page6_1_content",
                                        x: "534",
                                        y: "172",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_2_content",
                                        assetKey: "page6_2_content",
                                        x: "754",
                                        y: "172",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_3_content",
                                        assetKey: "page6_3_content",
                                        x: "974",
                                        y: "172",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page6_4_content",
                                        assetKey: "page6_4_content",
                                        x: "1190",
                                        y: "172",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoSeven_container",
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
                                        name: "pageSevenText0_aliases",
                                        assetKey: "pageSevenText0_aliases",
                                        x: "860",
                                        y: "623",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSevenText1_aliases",
                                        assetKey: "pageSevenText1_aliases",
                                        x: "860",
                                        y: "793",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSeven0_content",
                                        assetKey: "pageSeven0_content",
                                        x: "117",
                                        y: "154",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSeven1_content",
                                        assetKey: "pageSeven1_content",
                                        x: "884",
                                        y: "154",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoEight_container",
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
                                        name: "page8_Text0_aliases",
                                        assetKey: "page8_Text0_aliases",
                                        x: "860",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page8_Text1_aliases",
                                        assetKey: "page8_Text1_aliases",
                                        x: "860",
                                        y: "742",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page8_0_content",
                                        assetKey: "page8_0_content",
                                        x: "302",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page8_1_content",
                                        assetKey: "page8_1_content",
                                        x: "685",
                                        y: "214",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page8_2_content",
                                        assetKey: "page8_2_content",
                                        x: "1065",
                                        y: "214",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoNine_container",
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
                                        name: "page9_Text0_aliases",
                                        assetKey: "page9_Text0_aliases",
                                        x: "860",
                                        y: "147",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "page9_Text1_aliases",
                                        assetKey: "page9_Text1_aliases",
                                        x: "860",
                                        y: "573",
                                        alpha: "1"
                                    }]
                                }, {
                                    type: 1,
                                    name: "pageInfoTen_container",
                                    alpha: "1",
                                    contents: [{
                                        type: 0,
                                        name: "fake_end_px",
                                        assetKey: "fake_end_px",
                                        x: "0",
                                        y: "0",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "paylinesNameText_aliases",
                                        assetKey: "paylinesNameText_aliases",
                                        x: "860",
                                        y: "52",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSixText_aliases",
                                        assetKey: "pageSixText_aliases",
                                        x: "860",
                                        y: "846",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix0_content",
                                        assetKey: "pageSix0_content",
                                        x: "194",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix1_content",
                                        assetKey: "pageSix1_content",
                                        x: "427",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix2_content",
                                        assetKey: "pageSix2_content",
                                        x: "660",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix3_content",
                                        assetKey: "pageSix3_content",
                                        x: "897",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix4_content",
                                        assetKey: "pageSix4_content",
                                        x: "1131",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix5_content",
                                        assetKey: "pageSix5_content",
                                        x: "1365",
                                        y: "168",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix6_content",
                                        assetKey: "pageSix6_content",
                                        x: "194",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix7_content",
                                        assetKey: "pageSix7_content",
                                        x: "427",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix8_content",
                                        assetKey: "pageSix8_content",
                                        x: "660",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix9_content",
                                        assetKey: "pageSix9_content",
                                        x: "897",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix10_content",
                                        assetKey: "pageSix10_content",
                                        x: "1131",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix11_content",
                                        assetKey: "pageSix11_content",
                                        x: "1365",
                                        y: "291",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix12_content",
                                        assetKey: "pageSix12_content",
                                        x: "194",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix13_content",
                                        assetKey: "pageSix13_content",
                                        x: "427",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix14_content",
                                        assetKey: "pageSix14_content",
                                        x: "660",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix15_content",
                                        assetKey: "pageSix15_content",
                                        x: "897",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix16_content",
                                        assetKey: "pageSix16_content",
                                        x: "1131",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix17_content",
                                        assetKey: "pageSix17_content",
                                        x: "1365",
                                        y: "424",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix18_content",
                                        assetKey: "pageSix18_content",
                                        x: "194",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix19_content",
                                        assetKey: "pageSix19_content",
                                        x: "427",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix20_content",
                                        assetKey: "pageSix20_content",
                                        x: "660",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix21_content",
                                        assetKey: "pageSix21_content",
                                        x: "897",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix22_content",
                                        assetKey: "pageSix22_content",
                                        x: "1131",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix23_content",
                                        assetKey: "pageSix23_content",
                                        x: "1365",
                                        y: "547",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix24_content",
                                        assetKey: "pageSix24_content",
                                        x: "194",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix25_content",
                                        assetKey: "pageSix25_content",
                                        x: "427",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix26_content",
                                        assetKey: "pageSix26_content",
                                        x: "660",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix27_content",
                                        assetKey: "pageSix27_content",
                                        x: "897",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix28_content",
                                        assetKey: "pageSix28_content",
                                        x: "1131",
                                        y: "675",
                                        alpha: "1"
                                    }, {
                                        type: 0,
                                        name: "pageSix29_content",
                                        assetKey: "pageSix29_content",
                                        x: "1365",
                                        y: "675",
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
                                    x: "735",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoTwoPlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoTwoPlate(spritesY=2)_spritesheet",
                                    x: "785",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoThreePlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoThreePlate(spritesY=2)_spritesheet",
                                    x: "835",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoFourPlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoFourPlate(spritesY=2)_spritesheet",
                                    x: "885",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoFivePlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoFivePlate(spritesY=2)_spritesheet",
                                    x: "935",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoSixPlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoSixPlate(spritesY=2)_spritesheet",
                                    x: "985",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoSevenPlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoSevenPlate(spritesY=2)_spritesheet",
                                    x: "1035",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoEightPlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoEightPlate(spritesY=2)_spritesheet",
                                    x: "1085",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoNinePlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoNinePlate(spritesY=2)_spritesheet",
                                    x: "1134",
                                    y: "909",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "pageInfoTenPlate(spritesY=2)_spritesheet",
                                    assetKey: "pageInfoTenPlate(spritesY=2)_spritesheet",
                                    x: "1182",
                                    y: "909",
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
        1062: function(e, t) {
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
                            fullPath: e + "menuPlateBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "paginationInfoBg1_asset",
                            fullPath: e + "paginationInfoBg1_asset.png"
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
                            key: "pageThreeHeaderText_alias",
                            fullPath: e + "playarea/pageThreeHeaderText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageTwoHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageTwoHeaderText_alias",
                            fullPath: e + "playarea/pageTwoHeaderText_alias.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneHeaderImage(class=tabHeaderImage)_image",
                            fullPath: e + "playarea/pageOneHeaderImage(class=tabHeaderImage)_image.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageOneHeaderText_alias",
                            fullPath: e + "playarea/pageOneHeaderText_alias.png"
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
                                    x: "39",
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
                                            name: "pageOneHeaderText_alias",
                                            assetKey: "pageOneHeaderText_alias",
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
                                            name: "pageTwoHeaderText_alias",
                                            assetKey: "pageTwoHeaderText_alias",
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
                                            name: "pageThreeHeaderText_alias",
                                            assetKey: "pageThreeHeaderText_alias",
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
                                y: 952
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
                                y: 952
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
        1063: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Settings = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "audioSettingsBg1_asset",
                            fullPath: e + "audioSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "optionsSettingsBg1_asset",
                            fullPath: e + "optionsSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "visualSettingsBg1_asset",
                            fullPath: e + "visualSettingsBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "spinSettingsBg1_asset",
                            fullPath: e + "spinSettingsBg1_asset.png"
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
                                    x: "568",
                                    y: "324",
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
                                    x: "568",
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
                                    y: "737",
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
                                    x: "576",
                                    y: "152",
                                    alpha: "1"
                                }, {
                                    type: 0,
                                    name: "audioSliderInactiveBg",
                                    assetKey: "audioSliderInactiveBg",
                                    x: "576",
                                    y: "151",
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
        1064: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_ar = {}
        },
        1065: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_ar.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Mobile.Ui();
                e.styles[".titleTextMobileStyle"].style.font = "28pt futuraptheavy", e.styles[".titleTextMobileStyle"].style.strokeThickness = 5;
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
        1066: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_zh = {}
        },
        1067: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_zh.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Mobile.Ui();
                e.styles[".titleTextMobileStyle"].style.font = "28pt futuraptheavy", e.styles[".titleTextMobileStyle"].style.strokeThickness = 5;
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
        1068: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1069: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Demo = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "introScreenBg",
                            fullPath: e + "atlases/introScreenBg.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoStart(width=290, height=34, class=autoStartCheckBox)_clickableArea",
                            fullPath: e + "playarea/autoStart(width=290, height=34, class=autoStartCheckBox)_clickableArea.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextBottom_aliases",
                            fullPath: e + "playarea/introScreenTextBottom_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameIntroScreen",
                            fullPath: e + "playarea/frameIntroScreen.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenArrow",
                            fullPath: e + "playarea/introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter2_aliases",
                            fullPath: e + "playarea/introScreenTextCenter2_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter1_aliases",
                            fullPath: e + "playarea/introScreenTextCenter1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenTextCenter_aliases",
                            fullPath: e + "playarea/introScreenTextCenter_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton(spritesX=3)_button",
                            fullPath: e + "playarea/demoPlayButton(spritesX=3)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "demoPlayButtonText_aliases",
                            fullPath: e + "playarea/demoPlayButtonText_aliases.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1070: function(e, t) {
            nge.App[nge.appNS].Tpl.States.LoadAssets = function() {
                var e = nge.Lib.Helper.mobileAndTabletCheck(),
                    t = nge.appPath + "img/",
                    a = {
                        name: "assets",
                        contents: []
                    };
                [].forEach((function(e) {
                    a.contents.push({
                        type: mt.assets.ATLAS,
                        key: e,
                        atlas: t + "atlases/" + e + ".json",
                        fullPath: t + "atlases/" + e + ".png"
                    })
                }));
                var s = e ? "psd_atlases_ui_mobile" : "psd_atlases_ui";
                return a.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: s,
                    atlas: t + "atlases/" + s + ".json",
                    fullPath: t + "atlases/" + s + ".png"
                }), s = e ? "psd_atlases_help_mobile_1" : "psd_atlases_help_1", a.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: s,
                    atlas: t + "atlases/" + s + ".json",
                    fullPath: t + "atlases/" + s + ".png"
                }), a.contents.push({
                    type: mt.assets.ATLAS,
                    key: "psd_atlases_help",
                    atlas: t + "atlases/psd_atlases_help.json",
                    fullPath: t + "atlases/psd_atlases_help.png"
                }), s = nge.appPath + "img/spine/atlases/", a.contents.push({
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_0",
                    atlas: s + "spine_atlas_0.json",
                    fullPath: s + "spine_atlas_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_1_0",
                    atlas: s + "spine_atlas_1_0.json",
                    fullPath: s + "spine_atlas_1_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_1_1",
                    atlas: s + "spine_atlas_1_1.json",
                    fullPath: s + "spine_atlas_1_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_2_0",
                    atlas: s + "spine_atlas_2_0.json",
                    fullPath: s + "spine_atlas_2_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_2_1",
                    atlas: s + "spine_atlas_2_1.json",
                    fullPath: s + "spine_atlas_2_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_3_0",
                    atlas: s + "spine_atlas_3_0.json",
                    fullPath: s + "spine_atlas_3_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_3_1",
                    atlas: s + "spine_atlas_3_1.json",
                    fullPath: s + "spine_atlas_3_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_4",
                    atlas: s + "spine_atlas_4.json",
                    fullPath: s + "spine_atlas_4.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_5_0",
                    atlas: s + "spine_atlas_5_0.json",
                    fullPath: s + "spine_atlas_5_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_5_1",
                    atlas: s + "spine_atlas_5_1.json",
                    fullPath: s + "spine_atlas_5_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_6_0",
                    atlas: s + "spine_atlas_6_0.json",
                    fullPath: s + "spine_atlas_6_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_6_1",
                    atlas: s + "spine_atlas_6_1.json",
                    fullPath: s + "spine_atlas_6_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_7",
                    atlas: s + "spine_atlas_7.json",
                    fullPath: s + "spine_atlas_7.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_8",
                    atlas: s + "spine_atlas_8.json",
                    fullPath: s + "spine_atlas_8.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_9",
                    atlas: s + "spine_atlas_9.json",
                    fullPath: s + "spine_atlas_9.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_10",
                    atlas: s + "spine_atlas_10.json",
                    fullPath: s + "spine_atlas_10.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_11",
                    atlas: s + "spine_atlas_11.json",
                    fullPath: s + "spine_atlas_11.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_atlas_12",
                    atlas: s + "spine_atlas_12.json",
                    fullPath: s + "spine_atlas_12.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_intrigue_0",
                    atlas: s + "spine_intrigue_0.json",
                    fullPath: s + "spine_intrigue_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "spine_intrigue_1",
                    atlas: s + "spine_intrigue_1.json",
                    fullPath: s + "spine_intrigue_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "bigwin_atlas_0",
                    atlas: s + "bigwin_atlas_0.json",
                    fullPath: s + "bigwin_atlas_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "bigwin_atlas_1",
                    atlas: s + "bigwin_atlas_1.json",
                    fullPath: s + "bigwin_atlas_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "bonus_animals_0",
                    atlas: s + "bonus_animals_0.json",
                    fullPath: s + "bonus_animals_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "bonus_animals_1",
                    atlas: s + "bonus_animals_1.json",
                    fullPath: s + "bonus_animals_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "bonus_atlas_1_0",
                    atlas: s + "bonus_atlas_1_0.json",
                    fullPath: s + "bonus_atlas_1_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "bonus_atlas_1_1",
                    atlas: s + "bonus_atlas_1_1.json",
                    fullPath: s + "bonus_atlas_1_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "bonus_atlas_3",
                    atlas: s + "bonus_atlas_3.json",
                    fullPath: s + "bonus_atlas_3.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "background_atlas_0",
                    atlas: s + "background_atlas_0.json",
                    fullPath: s + "background_atlas_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "background_atlas_1",
                    atlas: s + "background_atlas_1.json",
                    fullPath: s + "background_atlas_1.png"
                }), e || a.contents.push({
                    type: mt.assets.ATLAS,
                    key: "spin_button_atlas",
                    atlas: s + "spin_button_atlas.json",
                    fullPath: s + "spin_button_atlas.png"
                }), a.contents.push({
                    type: mt.assets.BINARY,
                    key: "emitterVFX",
                    fullPath: nge.appPath + "/emitter/explosionClearCoin.dat"
                }), {
                    assets: a,
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1071: function(e, t) {
            nge.App[nge.appNS].Tpl.States.PickBonus = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "pickBonusS1Frames",
                            fullPath: e + "playarea/pickBonusS1Frames.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickOne1_aliases",
                            fullPath: e + "playarea/pickOne1_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickOne_en_aliases",
                            fullPath: e + "playarea/pickOne_en_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickOne_aliases",
                            fullPath: e + "playarea/pickOne_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item0Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item0Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item1Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item1Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item2Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item2Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item3Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item3Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item4Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item4Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item5Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item5Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item6Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item6Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item7Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item7Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item8Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item8Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item9Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item9Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item10Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item10Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item11Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item11Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item12Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item12Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item13Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item13Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item14Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item14Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item15Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item15Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item16Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item16Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item17Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item17Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item18Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item18Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item19Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item19Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item20Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item20Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item21Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item21Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item22Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item22Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item23Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item23Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item24Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item24Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item25Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item25Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item26Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item26Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item27Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item27Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item28Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item28Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2Item29Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS2Item29Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2PicksPlayedBg",
                            fullPath: e + "playarea/pickBonusS2PicksPlayedBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2PicksPlayedText(text=1, font=47pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#f9ca4b)_text",
                            fullPath: e + "playarea/pickBonusS2PicksPlayedText(text=1, font=47pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#f9ca4b)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "picksPlayed_aliases",
                            fullPath: e + "playarea/picksPlayed_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableBg",
                            fullPath: e + "playarea/catTableBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableHighlightImage",
                            fullPath: e + "playarea/catTableHighlightImage.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableMultText6(text=5000x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/catTableMultText6(text=5000x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableMultText5(text=2500x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/catTableMultText5(text=2500x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableMultText4(text=250x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/catTableMultText4(text=250x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableMultText3(text=10x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/catTableMultText3(text=10x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableMultText2(text=5x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/catTableMultText2(text=5x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableMultText1(text=3x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/catTableMultText1(text=3x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableMultText0(text=1x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/catTableMultText0(text=1x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableNumberText6(text=8, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/catTableNumberText6(text=8, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableNumberText5(text=7, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/catTableNumberText5(text=7, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableNumberText4(text=6, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/catTableNumberText4(text=6, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/catTableNumberText3(text=5, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/catTableNumberText2(text=4, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/catTableNumberText1(text=3, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "catTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/catTableNumberText0(text=2, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableBg",
                            fullPath: e + "playarea/pigTableBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableHighlightImage",
                            fullPath: e + "playarea/pigTableHighlightImage.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableMultText5(text=1000x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/pigTableMultText5(text=1000x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableMultText4(text=750x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/pigTableMultText4(text=750x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableMultText3(text=15x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/pigTableMultText3(text=15x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableMultText2(text=7x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/pigTableMultText2(text=7x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableMultText1(text=4x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/pigTableMultText1(text=4x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableMultText0(text=2x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/pigTableMultText0(text=2x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableNumberText5(text=7, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/pigTableNumberText5(text=7, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableNumberText4(text=6, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/pigTableNumberText4(text=6, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/pigTableNumberText3(text=5, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/pigTableNumberText2(text=4, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/pigTableNumberText1(text=3, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pigTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/pigTableNumberText0(text=2, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableBg",
                            fullPath: e + "playarea/monkeyTableBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableHighlightImage",
                            fullPath: e + "playarea/monkeyTableHighlightImage.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableMultText4(text=500x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/monkeyTableMultText4(text=500x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableMultText3(text=75x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/monkeyTableMultText3(text=75x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableMultText2(text=10x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/monkeyTableMultText2(text=10x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableMultText1(text=5x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/monkeyTableMultText1(text=5x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableMultText0(text=3x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/monkeyTableMultText0(text=3x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableNumberText4(text=6, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/monkeyTableNumberText4(text=6, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/monkeyTableNumberText3(text=5, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/monkeyTableNumberText2(text=4, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/monkeyTableNumberText1(text=3, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "monkeyTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/monkeyTableNumberText0(text=2, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableBg",
                            fullPath: e + "playarea/tigerTableBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableHighlightImage",
                            fullPath: e + "playarea/tigerTableHighlightImage.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableMultText3(text=150x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/tigerTableMultText3(text=150x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableMultText2(text=15x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/tigerTableMultText2(text=15x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableMultText1(text=7x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/tigerTableMultText1(text=7x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableMultText0(text=4x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/tigerTableMultText0(text=4x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/tigerTableNumberText3(text=5, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/tigerTableNumberText2(text=4, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/tigerTableNumberText1(text=3, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tigerTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/tigerTableNumberText0(text=2, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "snakeTableBg",
                            fullPath: e + "playarea/snakeTableBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "snakeTableHighlightImage",
                            fullPath: e + "playarea/snakeTableHighlightImage.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "snakeTableMultText2(text=75x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/snakeTableMultText2(text=75x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "snakeTableMultText1(text=10x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/snakeTableMultText1(text=10x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "snakeTableMultText0(text=5x, class=pickBonusS2TextYellow)_text",
                            fullPath: e + "playarea/snakeTableMultText0(text=5x, class=pickBonusS2TextYellow)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "snakeTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/snakeTableNumberText2(text=4, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "snakeTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/snakeTableNumberText1(text=3, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "snakeTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                            fullPath: e + "playarea/snakeTableNumberText0(text=2, class=pickBonusS2TextOrange)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2TextYellow(text=1, font=18pt futurasbl, anchorY=0.15, fill=#fff8af)_style",
                            fullPath: e + "playarea/pickBonusS2TextYellow(text=1, font=18pt futurasbl, anchorY=0.15, fill=#fff8af)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2TextOrange(text=1, font=18pt futurasbl, anchorY=0.15, fill=#f9ca4b)_style",
                            fullPath: e + "playarea/pickBonusS2TextOrange(text=1, font=18pt futurasbl, anchorY=0.15, fill=#f9ca4b)_style.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2PicksRemainingBg",
                            fullPath: e + "playarea/pickBonusS2PicksRemainingBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS2PicksRemainingText(text=1, font=47pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#f9ca4b)_text",
                            fullPath: e + "playarea/pickBonusS2PicksRemainingText(text=1, font=47pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#f9ca4b)_text.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "picksRemaining_aliases",
                            fullPath: e + "playarea/picksRemaining_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS1Item2Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS1Item2Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS1Item1Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS1Item1Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pickBonusS1Item0Button(spritesX=4)_button",
                            fullPath: e + "playarea/pickBonusS1Item0Button(spritesX=4)_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "picks_aliases",
                            fullPath: e + "playarea/picks_aliases.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "ui_group",
                            fullPath: e + "playarea/ui_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tabs_group",
                            fullPath: e + "playarea/tabs_group.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "popupsContainer",
                            contents: []
                        }, {
                            type: mt.objects.IMAGE,
                            name: "intro_group",
                            assetKey: "1pxBlack"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "tabs_group",
                            assetKey: "tabs_group"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "ui_group",
                            assetKey: "ui_group"
                        }, {
                            type: mt.objects.GROUP,
                            name: "pickBonusS1Container",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "picks_aliases",
                                assetKey: "picks_aliases",
                                x: 958,
                                y: 559
                            }, {
                                type: mt.objects.GROUP,
                                name: "pickBonusS1ItemsContainer",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "pickBonusS1Item0Button(spritesX=4)_button",
                                    assetKey: "pickBonusS1Item0Button(spritesX=4)_button",
                                    x: 481,
                                    y: 368
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pickBonusS1Item1Button(spritesX=4)_button",
                                    assetKey: "pickBonusS1Item1Button(spritesX=4)_button",
                                    x: 841,
                                    y: 368
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pickBonusS1Item2Button(spritesX=4)_button",
                                    assetKey: "pickBonusS1Item2Button(spritesX=4)_button",
                                    x: 1200,
                                    y: 368
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "pickBonusS2Container",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "pickBonusS2PicksRemainingContainer",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "picksRemaining_aliases",
                                    assetKey: "picksRemaining_aliases",
                                    x: 167,
                                    y: 93
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pickBonusS2PicksRemainingText(text=1, font=47pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#f9ca4b)_text",
                                    assetKey: "pickBonusS2PicksRemainingText(text=1, font=47pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#f9ca4b)_text",
                                    x: 168,
                                    y: 190
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pickBonusS2PicksRemainingBg",
                                    assetKey: "pickBonusS2PicksRemainingBg",
                                    x: 27,
                                    y: 41
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "animalTablesContainer",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "pickBonusS2TextOrange(text=1, font=18pt futurasbl, anchorY=0.15, fill=#f9ca4b)_style",
                                    assetKey: "pickBonusS2TextOrange(text=1, font=18pt futurasbl, anchorY=0.15, fill=#f9ca4b)_style",
                                    x: 544,
                                    y: 276
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pickBonusS2TextYellow(text=1, font=18pt futurasbl, anchorY=0.15, fill=#fff8af)_style",
                                    assetKey: "pickBonusS2TextYellow(text=1, font=18pt futurasbl, anchorY=0.15, fill=#fff8af)_style",
                                    x: 544,
                                    y: 276
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "snakeTableContainer",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "snakeTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        assetKey: "snakeTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        x: 78,
                                        y: 447
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "snakeTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        assetKey: "snakeTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        x: 78,
                                        y: 488
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "snakeTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        assetKey: "snakeTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        x: 78,
                                        y: 527
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "snakeTableMultText0(text=5x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "snakeTableMultText0(text=5x, class=pickBonusS2TextYellow)_text",
                                        x: 100,
                                        y: 447
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "snakeTableMultText1(text=10x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "snakeTableMultText1(text=10x, class=pickBonusS2TextYellow)_text",
                                        x: 100,
                                        y: 488
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "snakeTableMultText2(text=75x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "snakeTableMultText2(text=75x, class=pickBonusS2TextYellow)_text",
                                        x: 100,
                                        y: 527
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "snakeTableHighlightImage",
                                        assetKey: "snakeTableHighlightImage",
                                        x: 41,
                                        y: 440
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "snakeTableBg",
                                        assetKey: "snakeTableBg",
                                        x: 24,
                                        y: 369
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "tigerTableContainer",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        assetKey: "tigerTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        x: 78,
                                        y: 793
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        assetKey: "tigerTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        x: 78,
                                        y: 834
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        assetKey: "tigerTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        x: 78,
                                        y: 873
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                                        assetKey: "tigerTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                                        x: 78,
                                        y: 912
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableMultText0(text=4x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "tigerTableMultText0(text=4x, class=pickBonusS2TextYellow)_text",
                                        x: 100,
                                        y: 793
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableMultText1(text=7x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "tigerTableMultText1(text=7x, class=pickBonusS2TextYellow)_text",
                                        x: 100,
                                        y: 834
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableMultText2(text=15x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "tigerTableMultText2(text=15x, class=pickBonusS2TextYellow)_text",
                                        x: 100,
                                        y: 873
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableMultText3(text=150x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "tigerTableMultText3(text=150x, class=pickBonusS2TextYellow)_text",
                                        x: 100,
                                        y: 912
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableHighlightImage",
                                        assetKey: "tigerTableHighlightImage",
                                        x: 42,
                                        y: 785
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "tigerTableBg",
                                        assetKey: "tigerTableBg",
                                        x: 23,
                                        y: 715
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "monkeyTableContainer",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        assetKey: "monkeyTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        x: 254,
                                        y: 571
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        assetKey: "monkeyTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        x: 254,
                                        y: 612
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        assetKey: "monkeyTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        x: 254,
                                        y: 651
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                                        assetKey: "monkeyTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                                        x: 254,
                                        y: 690
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableNumberText4(text=6, class=pickBonusS2TextOrange)_text",
                                        assetKey: "monkeyTableNumberText4(text=6, class=pickBonusS2TextOrange)_text",
                                        x: 254,
                                        y: 728
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableMultText0(text=3x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "monkeyTableMultText0(text=3x, class=pickBonusS2TextYellow)_text",
                                        x: 276,
                                        y: 571
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableMultText1(text=5x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "monkeyTableMultText1(text=5x, class=pickBonusS2TextYellow)_text",
                                        x: 276,
                                        y: 612
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableMultText2(text=10x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "monkeyTableMultText2(text=10x, class=pickBonusS2TextYellow)_text",
                                        x: 276,
                                        y: 651
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableMultText3(text=75x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "monkeyTableMultText3(text=75x, class=pickBonusS2TextYellow)_text",
                                        x: 276,
                                        y: 690
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableMultText4(text=500x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "monkeyTableMultText4(text=500x, class=pickBonusS2TextYellow)_text",
                                        x: 276,
                                        y: 728
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableHighlightImage",
                                        assetKey: "monkeyTableHighlightImage",
                                        x: 218,
                                        y: 565
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "monkeyTableBg",
                                        assetKey: "monkeyTableBg",
                                        x: 195,
                                        y: 494
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pigTableContainer",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pigTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        assetKey: "pigTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        x: 1581,
                                        y: 566
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        assetKey: "pigTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        x: 1581,
                                        y: 607
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        assetKey: "pigTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        x: 1581,
                                        y: 646
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                                        assetKey: "pigTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                                        x: 1581,
                                        y: 685
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableNumberText4(text=6, class=pickBonusS2TextOrange)_text",
                                        assetKey: "pigTableNumberText4(text=6, class=pickBonusS2TextOrange)_text",
                                        x: 1581,
                                        y: 723
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableNumberText5(text=7, class=pickBonusS2TextOrange)_text",
                                        assetKey: "pigTableNumberText5(text=7, class=pickBonusS2TextOrange)_text",
                                        x: 1581,
                                        y: 760
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableMultText0(text=2x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "pigTableMultText0(text=2x, class=pickBonusS2TextYellow)_text",
                                        x: 1603,
                                        y: 566
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableMultText1(text=4x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "pigTableMultText1(text=4x, class=pickBonusS2TextYellow)_text",
                                        x: 1603,
                                        y: 607
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableMultText2(text=7x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "pigTableMultText2(text=7x, class=pickBonusS2TextYellow)_text",
                                        x: 1603,
                                        y: 646
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableMultText3(text=15x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "pigTableMultText3(text=15x, class=pickBonusS2TextYellow)_text",
                                        x: 1603,
                                        y: 685
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableMultText4(text=750x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "pigTableMultText4(text=750x, class=pickBonusS2TextYellow)_text",
                                        x: 1603,
                                        y: 723
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableMultText5(text=1000x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "pigTableMultText5(text=1000x, class=pickBonusS2TextYellow)_text",
                                        x: 1603,
                                        y: 760
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableHighlightImage",
                                        assetKey: "pigTableHighlightImage",
                                        x: 1547,
                                        y: 559
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pigTableBg",
                                        assetKey: "pigTableBg",
                                        x: 1525,
                                        y: 495
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "catTableContainer",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "catTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        assetKey: "catTableNumberText0(text=2, class=pickBonusS2TextOrange)_text",
                                        x: 1761,
                                        y: 455
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        assetKey: "catTableNumberText1(text=3, class=pickBonusS2TextOrange)_text",
                                        x: 1761,
                                        y: 496
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        assetKey: "catTableNumberText2(text=4, class=pickBonusS2TextOrange)_text",
                                        x: 1761,
                                        y: 535
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                                        assetKey: "catTableNumberText3(text=5, class=pickBonusS2TextOrange)_text",
                                        x: 1761,
                                        y: 574
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableNumberText4(text=6, class=pickBonusS2TextOrange)_text",
                                        assetKey: "catTableNumberText4(text=6, class=pickBonusS2TextOrange)_text",
                                        x: 1761,
                                        y: 612
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableNumberText5(text=7, class=pickBonusS2TextOrange)_text",
                                        assetKey: "catTableNumberText5(text=7, class=pickBonusS2TextOrange)_text",
                                        x: 1761,
                                        y: 649
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableNumberText6(text=8, class=pickBonusS2TextOrange)_text",
                                        assetKey: "catTableNumberText6(text=8, class=pickBonusS2TextOrange)_text",
                                        x: 1761,
                                        y: 686
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableMultText0(text=1x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "catTableMultText0(text=1x, class=pickBonusS2TextYellow)_text",
                                        x: 1783,
                                        y: 455
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableMultText1(text=3x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "catTableMultText1(text=3x, class=pickBonusS2TextYellow)_text",
                                        x: 1783,
                                        y: 496
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableMultText2(text=5x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "catTableMultText2(text=5x, class=pickBonusS2TextYellow)_text",
                                        x: 1783,
                                        y: 535
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableMultText3(text=10x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "catTableMultText3(text=10x, class=pickBonusS2TextYellow)_text",
                                        x: 1783,
                                        y: 574
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableMultText4(text=250x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "catTableMultText4(text=250x, class=pickBonusS2TextYellow)_text",
                                        x: 1783,
                                        y: 612
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableMultText5(text=2500x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "catTableMultText5(text=2500x, class=pickBonusS2TextYellow)_text",
                                        x: 1783,
                                        y: 649
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableMultText6(text=5000x, class=pickBonusS2TextYellow)_text",
                                        assetKey: "catTableMultText6(text=5000x, class=pickBonusS2TextYellow)_text",
                                        x: 1783,
                                        y: 686
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableHighlightImage",
                                        assetKey: "catTableHighlightImage",
                                        x: 1727,
                                        y: 449
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "catTableBg",
                                        assetKey: "catTableBg",
                                        x: 1704,
                                        y: 378
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "pickBonusS2PicksPlayedContainer",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "picksPlayed_aliases",
                                    assetKey: "picksPlayed_aliases",
                                    x: 1747,
                                    y: 93
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pickBonusS2PicksPlayedText(text=1, font=47pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#f9ca4b)_text",
                                    assetKey: "pickBonusS2PicksPlayedText(text=1, font=47pt futurasbl, anchorX=0.5, anchorY=0.5, fill=#f9ca4b)_text",
                                    x: 1747,
                                    y: 190
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pickBonusS2PicksPlayedBg",
                                    assetKey: "pickBonusS2PicksPlayedBg",
                                    x: 1608,
                                    y: 41
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "pickBonusS2ItemsSpineContainer",
                                contents: []
                            }, {
                                type: mt.objects.GROUP,
                                name: "pickBonusS2ItemsContainer",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item29",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item29Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item29Button(spritesX=4)_button",
                                        x: 1335,
                                        y: 852
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item28",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item28Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item28Button(spritesX=4)_button",
                                        x: 1155,
                                        y: 852
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item27",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item27Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item27Button(spritesX=4)_button",
                                        x: 977,
                                        y: 852
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item26",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item26Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item26Button(spritesX=4)_button",
                                        x: 798,
                                        y: 852
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item25",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item25Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item25Button(spritesX=4)_button",
                                        x: 620,
                                        y: 852
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item24",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item24Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item24Button(spritesX=4)_button",
                                        x: 440,
                                        y: 852
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item23",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item23Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item23Button(spritesX=4)_button",
                                        x: 1334,
                                        y: 673
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item22",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item22Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item22Button(spritesX=4)_button",
                                        x: 1154,
                                        y: 673
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item21",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item21Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item21Button(spritesX=4)_button",
                                        x: 976,
                                        y: 673
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item20",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item20Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item20Button(spritesX=4)_button",
                                        x: 797,
                                        y: 673
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item19",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item19Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item19Button(spritesX=4)_button",
                                        x: 619,
                                        y: 673
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item18",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item18Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item18Button(spritesX=4)_button",
                                        x: 439,
                                        y: 673
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item17",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item17Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item17Button(spritesX=4)_button",
                                        x: 1334,
                                        y: 494
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item16",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item16Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item16Button(spritesX=4)_button",
                                        x: 1154,
                                        y: 494
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item15",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item15Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item15Button(spritesX=4)_button",
                                        x: 976,
                                        y: 494
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item14",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item14Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item14Button(spritesX=4)_button",
                                        x: 797,
                                        y: 494
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item13",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item13Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item13Button(spritesX=4)_button",
                                        x: 619,
                                        y: 494
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item12",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item12Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item12Button(spritesX=4)_button",
                                        x: 439,
                                        y: 494
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item11",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item11Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item11Button(spritesX=4)_button",
                                        x: 1335,
                                        y: 316
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item10",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item10Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item10Button(spritesX=4)_button",
                                        x: 1155,
                                        y: 316
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item9",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item9Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item9Button(spritesX=4)_button",
                                        x: 977,
                                        y: 316
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item8",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item8Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item8Button(spritesX=4)_button",
                                        x: 798,
                                        y: 316
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item7",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item7Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item7Button(spritesX=4)_button",
                                        x: 620,
                                        y: 316
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item6",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item6Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item6Button(spritesX=4)_button",
                                        x: 440,
                                        y: 316
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item5",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item5Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item5Button(spritesX=4)_button",
                                        x: 1335,
                                        y: 137
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item4",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item4Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item4Button(spritesX=4)_button",
                                        x: 1155,
                                        y: 137
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item3",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item3Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item3Button(spritesX=4)_button",
                                        x: 977,
                                        y: 137
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item2",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item2Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item2Button(spritesX=4)_button",
                                        x: 798,
                                        y: 137
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item1",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item1Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item1Button(spritesX=4)_button",
                                        x: 620,
                                        y: 137
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "pickBonusS2Item0",
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "pickBonusS2Item0Button(spritesX=4)_button",
                                        assetKey: "pickBonusS2Item0Button(spritesX=4)_button",
                                        x: 440,
                                        y: 137
                                    }]
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "petalsContainer",
                            contents: []
                        }, {
                            type: mt.objects.GROUP,
                            name: "textContainer",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "pickOne_aliases",
                                assetKey: "pickOne_aliases",
                                x: 960,
                                y: 228
                            }, {
                                type: mt.objects.IMAGE,
                                name: "pickOne_en_aliases",
                                assetKey: "pickOne_en_aliases",
                                x: 960,
                                y: 257
                            }, {
                                type: mt.objects.IMAGE,
                                name: "pickOne1_aliases",
                                assetKey: "pickOne1_aliases",
                                x: 960,
                                y: 286
                            }]
                        }, {
                            type: mt.objects.IMAGE,
                            name: "pickBonusS1Frames",
                            assetKey: "pickBonusS1Frames",
                            x: 317,
                            y: 0
                        }, {
                            type: mt.objects.IMAGE,
                            name: "pickBonusS1Bg",
                            assetKey: "pickBonusS1Bg"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "pickBonusS2Bg",
                            assetKey: "pickBonusS2Bg"
                        }, {
                            type: mt.objects.GROUP,
                            name: "slotMachineContainer",
                            contents: []
                        }]
                    }
                }
            }
        },
        1072: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Play = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "popupJackpot",
                            fullPath: e + "jackpot/images/jackpotPopup.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "reelsBgFreeSpins",
                            fullPath: e + "playarea/reelsBgFreeSpins.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "reelsBg",
                            fullPath: e + "playarea/reelsBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachine_container",
                            fullPath: e + "playarea/slotMachine_container.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameFreeSpinsGameTop3",
                            fullPath: e + "playarea/frameFreeSpinsGameTop3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameFreeSpinsGameTop2",
                            fullPath: e + "playarea/frameFreeSpinsGameTop2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameFreeSpinsGameTop1",
                            fullPath: e + "playarea/frameFreeSpinsGameTop1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameFreeSpinsGameTop0",
                            fullPath: e + "playarea/frameFreeSpinsGameTop0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameMainGameTop3",
                            fullPath: e + "playarea/frameMainGameTop3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameMainGameTop2",
                            fullPath: e + "playarea/frameMainGameTop2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameMainGameTop1",
                            fullPath: e + "playarea/frameMainGameTop1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameMainGameTop0",
                            fullPath: e + "playarea/frameMainGameTop0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameFreeSpinsGameRight",
                            fullPath: e + "playarea/frameFreeSpinsGameRight.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameFreeSpinsGameLeft",
                            fullPath: e + "playarea/frameFreeSpinsGameLeft.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameMainGameRight",
                            fullPath: e + "playarea/frameMainGameRight.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameMainGameLeft",
                            fullPath: e + "playarea/frameMainGameLeft.png"
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
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "popupsContainer",
                            contents: []
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
                            name: "winPopupContainer",
                            contents: []
                        }, {
                            type: mt.objects.IMAGE,
                            name: "ui_group",
                            assetKey: "ui_group"
                        }, {
                            type: mt.objects.GROUP,
                            name: "jackpotStatusPanelContainer",
                            contents: []
                        }, {
                            type: mt.objects.GROUP,
                            name: "foregroundContainer",
                            contents: []
                        }, {
                            type: mt.objects.GROUP,
                            name: "slotMachineFrameContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "slotMachineFrameMainGame",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "frameMainGameLeft",
                                    assetKey: "frameMainGameLeft",
                                    x: 221,
                                    y: 120
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "frameMainGameRight",
                                    assetKey: "frameMainGameRight",
                                    x: 1646,
                                    y: 120
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineFrameFreeSpinGame",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "frameFreeSpinsGameLeft",
                                    assetKey: "frameFreeSpinsGameLeft",
                                    x: 215,
                                    y: 115
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "frameFreeSpinsGameRight",
                                    assetKey: "frameFreeSpinsGameRight",
                                    x: 1635,
                                    y: 115
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "goldenElementsContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "goldenElementsMainGame",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "frameMainGameTop0",
                                    assetKey: "frameMainGameTop0",
                                    x: 522,
                                    y: 118
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "frameMainGameTop1",
                                    assetKey: "frameMainGameTop1",
                                    x: 1361,
                                    y: 118
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "frameMainGameTop2",
                                    assetKey: "frameMainGameTop2",
                                    x: 1081,
                                    y: 118
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "frameMainGameTop3",
                                    assetKey: "frameMainGameTop3",
                                    x: 802,
                                    y: 118
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "goldenElementsFreeSpins",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "frameFreeSpinsGameTop0",
                                    assetKey: "frameFreeSpinsGameTop0",
                                    x: 524,
                                    y: 118
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "frameFreeSpinsGameTop1",
                                    assetKey: "frameFreeSpinsGameTop1",
                                    x: 1363,
                                    y: 118
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "frameFreeSpinsGameTop2",
                                    assetKey: "frameFreeSpinsGameTop2",
                                    x: 1083,
                                    y: 118
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "frameFreeSpinsGameTop3",
                                    assetKey: "frameFreeSpinsGameTop3",
                                    x: 804,
                                    y: 118
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "gameScreenContainer",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "slotMachine_container",
                                assetKey: "slotMachine_container",
                                x: 260,
                                y: 122
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "reelsBorderContainer",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "reelsBg",
                                assetKey: "reelsBg"
                            }, {
                                type: mt.objects.IMAGE,
                                name: "reelsBgFreeSpins",
                                assetKey: "reelsBgFreeSpins"
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "backgroundContainer",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "bgArea",
                                assetKey: "bgArea"
                            }, {
                                type: mt.objects.IMAGE,
                                name: "bgAreaFreeSpins",
                                assetKey: "bgAreaFreeSpins"
                            }]
                        }]
                    }
                }
            }
        },
        1073: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1074: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1075: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Slot = nge.App.DjGameBase.Mlm.Brain.Slot.extend((function() {
                function e(e) {
                    "fakeLoaderGameToBonus" === e && nge.statesManager.display("pickBonus")
                }
                var t = this;
                this.canIntrigue = !0;
                var a = this.super.spinCompleteHandler.bind(this);
                this.popupShowDelay = 1, this.triggerCycleDuration = 3e3, this.runBonusRoutine = function(e) {
                    return nge.localData.set("bonusWon", !0), nge.localData.set("slotMachineResponseBonusSpin", !0), t.triggerRoutineCheck(e), "FreeSpins" !== e.state || nge.localData.get("freespin.inProgress") ? "ReSpins" === e.state ? this.runBonusGame() : "PickBonus" === e.state ? (t.bonusGameTriggered = !0, nge.localData.set("pickBonusWon", !0)) : nge.localData.set("slotMachineResponseBonusSpin", !1) : (t.bonusGameTriggered = !0, this.runBonusGame()), !0
                }.bind(this), this.showPreBonusPopup = function() {
                    nge.localData.get("pickBonusWon") && nge.observer.fire("popup.show", {
                        popupName: "pickBonusStartPopup",
                        layerName: "pickBonusStartPopup",
                        nextLayerName: "fakeLoaderGameToBonus"
                    })
                }, this.tryToChangeQuery = function() {
                    if (t.bonusGameTriggered) {
                        var e = nge.Lib.Helper.jsObjClone(nge.localData.get("slotMachine"));
                        e.slotWin.lineWinAmounts = [], nge.observer.fire("winlines.setNewQuery", e), nge.observer.fire("magicTree.winlines.skip", null, 200), nge.observer.fire("winlines.animateByOne.cycleComplete", null, 200)
                    }
                }, this.translateStage2ToCoins = function(e) {
                    if (e.spinResultStage2) {
                        e.slotWin && e.slotWin.lineWinAmountsStage2 && (e.slotWin.lineWinAmounts = e.slotWin.lineWinAmountsStage2);
                        for (var t = [], a = e.spinResult.rows, s = e.spinResultStage2.rows, n = 0; n < a.length; n++)
                            for (var l = a[n], p = 0; p < l.length; p++) l[p] !== s[n][p] && t.push([p, n]);
                        e.params.coins = t
                    }
                }, this.spinResponseHandler = function(e) {
                    nge.localData.set("magicTree.treeShake", "none"), e.params || (e.params = {}), this.translateStage2ToCoins(e);
                    var a = !1,
                        s = e.params.coins;
                    s && s.length ? (nge.localData.set("magicTree.treeShake", "win"), a = !0) : .05 > Math.random() && (nge.localData.set("magicTree.treeShake", "fake"), a = !0), a && nge.observer.fire("slotMachine.spinResponse.featureTreeLoop"), t.super.spinResponseHandler(e)
                }, this.spinCompleteHandler = function() {
                    var e = nge.localData.get("magicTree.treeShake"),
                        t = "win" === e;
                    e = "fake" === e;
                    var s = nge.localData.get("slotMachine.params.coins");
                    t || e ? (nge.localData.set("featureCoinsProcess.inProgress", !0), nge.observer.fire("slotMachine.spinComplete.featureCoinsProcess", {
                        needPlayWin: t,
                        needPlayFake: e,
                        featureCoins: s
                    })) : a()
                }, this.restoreBonusGame = function(e) {
                    nge.localData.set("bonusGame.lastResponse", e), "CollectionBonus" === e.state && (e.state = "PickBonus", e.realState = "CollectionBonus"), nge.observer.fire("brain.runBonusGame", e.state)
                };
                var s = function() {
                        nge.localData.set("featureCoinsProcess.inProgress", !1), a()
                    },
                    n = function() {
                        nge.localData.set("featureCoinsProcess.inProgress", !1)
                    };
                this.customSubscribe = function() {
                    this.super.customSubscribe(), nge.observer.add("layersSwitcher.animationComplete", e, !1, !0), nge.observer.add("slotMachine.spinComplete.featureCoinsProcess.done", s, !1, !0), nge.observer.add("Transport.close", n, !1, !0), nge.observer.add("pickUpBonusGame.CollectionBonusItemRequest", (function(e) {
                        e = nge.App.getInstance("Mlm.Transport.Models.CollectionBonusItemRequest", !1, {
                            msgId: "32c44111-f0b7-4e4f-b774-2aa86cfd8e2a",
                            result: !0,
                            data: {
                                index: e
                            }
                        }), nge.transport.send(e), nge.brain.do("waitForResponse", "CollectionBonusItem")
                    }), !1, !0), nge.observer.add("transportMessage.CollectionBonusItemResponse", (function(e) {
                        nge.brain.do("receivedResponse", "CollectionBonusItem"), e = e.data, nge.localData.set("bonusGame.lastResponse", e), nge.observer.fire("collectionBonus.itemResponse", e)
                    }), !1, !0), nge.observer.add("magicTree.winlines.skip", t.showTriggersAnimation, !1, !0)
                }
            }))
        },
        1076: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Controller = nge.App.DjGameBase.Mlm.Brain.Controller.extend((function() {
                this._logicBlocks.push("pickBonus")
            }))
        },
        1077: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.PickBonus = Class.extend((function() {
                function e(e) {
                    "fakeLoaderBonusToGame" === e && (nge.statesManager.display("play"), nge.observer.add("StatesManager.create.end", (function() {
                        nge.observer.fire("layersSwitcher.show", "game"), nge.observer.remove("StatesManager.create.end", !1, "fromBonusToPlayTransition", !0), nge.observer.fire("balanceRequest")
                    }), "fromBonusToPlayTransition", !0))
                }
                var t = function() {
                        nge.localData.set("pickBonusWon", !1), nge.localData.set("bonusWon", !1), nge.localData.set("slotMachine.lastResponse", !1)
                    },
                    a = function() {
                        nge.localData.set("pickBonusWon", !1), nge.localData.set("bonusWon", !1), nge.localData.set("slotMachine.lastResponse", !1)
                    },
                    s = function(e) {
                        "pickBonus2" === e && (e = nge.localData.get("bonusGame.lastResponse")) && "PickBonus" === e.state && "CollectionBonus" === e.realState && nge.observer.fire("s2.restore", e)
                    },
                    n = function(e) {
                        if (e && e.data && e.data.lastResponse) {
                            var t = (e = e.data.lastResponse).state;
                            "PickBonus" !== t && "CollectionBonus" !== t || "false" !== e.lastPick || nge.localData.set("pickBonusWon", !0)
                        }
                    };
                this.subscribe = function() {
                    nge.observer.add("pickBonus.endGame", t, !1, !0), nge.observer.add("pickBonus.sendRequest", (function(e) {
                        e = nge.App.getInstance("Mlm.Transport.Models.PickBonusItemRequest", !1, {
                            result: !0,
                            data: {
                                index: e
                            }
                        }), nge.transport.send(e), nge.brain.do("waitForResponse", "pickBonus")
                    }), !1, !0), nge.observer.add("transportMessage.PickBonusItemResponse", (function(e) {
                        nge.brain.do("receivedResponse", "pickBonus"), e = e.data, nge.localData.set("bonusGame.lastResponse", e), nge.observer.fire("pickBonus.actionResponse", e)
                    }), !1, !0), nge.observer.add("layersSwitcher.animationComplete", e, !1, !0), nge.observer.add("layersSwitcher.show", s, "magicTree.pickBonusRestore", !0), nge.observer.add("transportMessage.AuthResponse", n, !1, !0), nge.observer.add("Transport.close", a, !1, !0)
                }
            }))
        },
        1078: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.DjGameBase.Mlm.Brain.Sounds.extend((function() {
                function e(e) {
                    return function() {
                        function t(t, a, s, l) {
                            t.push(e), n.triggersNeededForBonus - t.length <= s && nge.observer.fire("sound." + a + "_reel_sound_" + l + ".play")
                        }
                        0 === e && (l = [], p = []);
                        var a = !1,
                            s = !1;
                        if (nge.localData.get("slotMachine.spinResult.columns")[e].forEach((function(e) {
                                e === n.catSymbol ? a = !0 : e === n.fishSymbol && (s = !0)
                            })), a || s) {
                            if (a) {
                                var o = e / Math.round(n.reelsCount / n.triggerReelsCount),
                                    i = n.triggerReelsCount - 1 - o;
                                t(l, "cat", i, o)
                            }
                            s && (o = e - 1, i = n.triggerReelsCount - 1 - o, t(p, "fish", i, o))
                        }
                    }
                }

                function t(e) {
                    switch (e) {
                        case "pickBonusStartPopup":
                            nge.observer.fire("sound.open_pickem_popup.play");
                            break;
                        case "freespinStartPopup":
                        case "additionalFreespinsPopup":
                            nge.observer.fire("sound.open_fs_popup.play");
                            break;
                        case "pickBonusFinal":
                        case "freespinEndPopup":
                            nge.observer.fire("sound.end_fs_and_pickem_popup.play")
                    }
                    nge.observer.fire("sound.popup_background.play")
                }

                function a() {
                    nge.observer.fire("sound.open_pickem_popup.stop"), nge.observer.fire("sound.open_fs_popup.stop"), nge.observer.fire("sound.end_fs_and_pickem_popup.stop")
                }

                function s() {
                    n.loopedSounds.forEach((function(e) {
                        n.fadeSound(e, .5, 200)
                    }))
                }
                var n = this,
                    l = [],
                    p = [];
                this.wheelSpinSoundCount = 1, this.soundedSymbols = [], this.catSymbol = "11", this.fishSymbol = "13", this.reelsCount = 5, this.triggersNeededForBonus = this.triggerReelsCount = 3, this.soundsUnused = [], this.spinGameBackgroundSound = [{
                    s: "bs_background",
                    e: "bs_background.play",
                    action: "play",
                    loop: !0
                }, {
                    s: "bs_background",
                    e: "bs_background.stop",
                    action: "stop",
                    loop: !0
                }, {
                    s: "bs_background",
                    e: "sound.open_fs_popup.play",
                    action: "stop"
                }, {
                    s: "bs_background",
                    e: "jackpot.end",
                    action: "play",
                    loop: !0
                }, {
                    s: "bs_background",
                    e: "sound.open_pickem_popup.play",
                    action: "stop"
                }, {
                    s: "bs_background",
                    e: "sound.end_fs_and_pickem_popup.play",
                    action: "stop"
                }, {
                    s: "bs_background",
                    e: "jackpot.startPopup.show",
                    action: "stop"
                }, {
                    s: "bs_background",
                    e: "Transport.close",
                    action: "stop"
                }], this.freespinGameBackgroundSound = [{
                    s: "bn_background",
                    e: "bn_background.play",
                    action: "play",
                    loop: !0
                }, {
                    s: "bn_background",
                    e: "bn_background.stop",
                    action: "stop",
                    loop: !0
                }, {
                    s: "bn_background",
                    e: "sounds.preloaded.bonus",
                    action: "play",
                    loop: !0
                }, {
                    s: "bn_background",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "bn_background",
                    e: "sound.open_pickem_popup.play",
                    action: "stop"
                }, {
                    s: "bn_background",
                    e: "sound.end_fs_and_pickem_popup.play",
                    action: "stop"
                }, {
                    s: "bn_background",
                    e: "sound.open_fs_popup.play",
                    action: "stop"
                }], this.scatterSounds = [{
                    s: "scatter_drop_cat_1",
                    e: "sound.cat_reel_sound_0.play"
                }, {
                    s: "scatter_drop_cat_2",
                    e: "sound.cat_reel_sound_1.play"
                }, {
                    s: "scatter_drop_cat_3",
                    e: "sound.cat_reel_sound_2.play"
                }, {
                    s: "scatter_drop_fish_1",
                    e: "sound.fish_reel_sound_0.play"
                }, {
                    s: "scatter_drop_fish_2",
                    e: "sound.fish_reel_sound_1.play"
                }, {
                    s: "scatter_drop_fish_3",
                    e: "sound.fish_reel_sound_2.play"
                }], this.buttonsClickSounds = [{
                    s: "default_btn",
                    e: "button.clickSound",
                    relaunch: !0
                }, {
                    s: "default_btn",
                    e: "button.click"
                }, {
                    s: "button_start",
                    e: "sound.spin_click.play",
                    relaunch: !0
                }, {
                    s: "button_stop",
                    e: "sound.stop_click.play",
                    relaunch: !0
                }], this.popupSounds = [{
                    s: "open_fs_popup",
                    e: "sound.open_fs_popup.play"
                }, {
                    s: "open_fs_popup",
                    e: "sound.open_fs_popup.stop",
                    action: "stop"
                }, {
                    s: "open_pickem_popup",
                    e: "sound.open_pickem_popup.play"
                }, {
                    s: "open_pickem_popup",
                    e: "sound.open_pickem_popup.stop",
                    action: "stop"
                }, {
                    s: "end_fs_and_pickem_popup",
                    e: "sound.end_fs_and_pickem_popup.play"
                }, {
                    s: "end_fs_and_pickem_popup",
                    e: "sound.end_fs_and_pickem_popup.stop",
                    action: "stop"
                }, {
                    s: "intro_sound",
                    e: "sound.popup_background.play",
                    loop: !0
                }, {
                    s: "intro_sound",
                    e: "sound.popup_background.stop",
                    action: "stop"
                }, {
                    s: "pop_up_appear_and_disappear",
                    e: "popup.showStart"
                }, {
                    s: "pop_up_appear_and_disappear",
                    e: "popup.hideStart"
                }], this.counterSounds = [], this.soundExt.push({
                    s: "big_cell_incoming",
                    e: "pickBonus.stage1.animationStart"
                }, {
                    s: "big_cell_gone",
                    e: "pickBonus.stage1.end"
                }, {
                    s: "big_cell_open",
                    e: "pickBonus.bigLotus.openWin"
                }, {
                    s: "big_cell_open_other",
                    e: "pickBonus.bigLotus.openOther"
                }, {
                    s: "coin_drop_1",
                    e: "slotMachine.featureCoins1"
                }, {
                    s: "coin_drop_1",
                    e: "slotMachine.featureCoins2"
                }, {
                    s: "coin_drop_2",
                    e: "slotMachine.featureCoins3"
                }, {
                    s: "coin_drop_2",
                    e: "slotMachine.featureCoins4"
                }, {
                    s: "coin_drop_3",
                    e: "slotMachine.featureCoins5"
                }, {
                    s: "tree_move_fake",
                    e: "sound.fake_tree",
                    relaunch: !0
                }, {
                    s: "tree_move_true",
                    e: "sound.win_tree",
                    relaunch: !0
                }, {
                    s: "mini_cell_open_1",
                    e: "pickBonus.miniLotus.open1",
                    relaunch: !0
                }, {
                    s: "mini_cell_open_2",
                    e: "pickBonus.miniLotus.open2",
                    relaunch: !0
                }, {
                    s: "mini_cell_open_3",
                    e: "pickBonus.miniLotus.open3",
                    relaunch: !0
                }, {
                    s: "mini_cell_open_4",
                    e: "pickBonus.miniLotus.open4",
                    relaunch: !0
                }, {
                    s: "mini_cell_open_all",
                    e: "sound.mini_cell_open_all.play"
                }, {
                    s: "pickem_background",
                    e: "pickem_background.play",
                    loop: !0
                }, {
                    s: "pickem_background",
                    e: "pickem_background.stop",
                    action: "stop"
                }, {
                    s: "pickem_background",
                    e: "pickBonus.showFinalPopup",
                    action: "stop"
                }, {
                    s: "pickem_background",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "near_win_intriga",
                    e: "slotMachine.reel_2.intrigue.start"
                }, {
                    s: "near_win_intriga",
                    e: "slotMachine.reel_3.intrigue.start"
                }, {
                    s: "near_win_intriga",
                    e: "slotMachine.reel_4.intrigue.start"
                });
                var o = function() {
                        var e = nge.localData.get("slotMachine.slotWin");
                        e && (0 < (e = parseFloat(e.totalWin)) / (nge.localData.get("lines.value") * nge.localData.get("bet.value") * nge.localData.get("coins.value")) && (nge.observer.fire("sound.volume", {
                            s: "bs_background",
                            volume: .5,
                            duration: 500
                        }), nge.observer.fire("sound.volume", {
                            s: "bn_background",
                            volume: .5,
                            duration: 500
                        })))
                    },
                    i = function() {
                        nge.observer.fire("sound.volume", {
                            s: "bs_background",
                            volume: 1,
                            duration: 500
                        }), nge.observer.fire("sound.volume", {
                            s: "bn_background",
                            volume: 1,
                            duration: 500
                        })
                    },
                    r = function() {
                        nge.observer.fire("sound.volume", {
                            s: "near_win_intriga",
                            volume: 1,
                            duration: 200
                        }), n.loopedSounds.forEach((function(e) {
                            n.fadeSound(e, .5, 200)
                        }))
                    },
                    u = function() {
                        nge.observer.fire("sound.volume", {
                            s: "near_win_intriga",
                            volume: 0,
                            duration: 200
                        }), n.loopedSounds.forEach((function(e) {
                            n.fadeSound(e, 1, 200)
                        }))
                    };
                this.layerSwitcherHandler = function(e) {
                    switch (e) {
                        case "intro":
                            nge.observer.fire("introSound.Play");
                            break;
                        case "game":
                        case "gameOffer":
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.play", null, 100), nge.observer.fire("pickem_background.stop"), nge.observer.fire("sound.volume", {
                                s: "bs_background",
                                volume: 1
                            }), nge.observer.fire("sound.volume", {
                                s: "bn_background",
                                volume: 1
                            });
                            break;
                        case "gameFreeSpin":
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.play"), nge.observer.fire("pickem_background.stop");
                            break;
                        case "pickBonus1":
                        case "pickBonus2":
                            nge.observer.fire("pickem_background.play"), nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.stop"), nge.observer.fire("sound.volume", {
                                s: "pickem_background",
                                volume: 1
                            });
                            break;
                        case "gameOfferPopup":
                            nge.observer.fire("sound.popup_background.play")
                    }
                }, this.customSubscribe = function() {
                    n.super.customSubscribe();
                    for (var l = 0; l < n.reelsCount; l++) nge.observer.add("slotMachine.reel_" + l + ".animation.stop", e(l), !1, !0);
                    nge.observer.add("popup.showStart", t, !1, !0), nge.observer.add("popup.hideComplete", a, !1, !0), nge.observer.add("sound.bonus.trigger.play", s, !1, !0), nge.observer.add("winlines.animateAll", o, !1, !0), nge.observer.add("spinReadyToProceed", i, !1, !0), nge.observer.add("slotMachine.spinComplete", u, !1, !0), nge.observer.add("sounds.intrigue.fade", u, !1, !0), nge.observer.add("slotMachine.reel_2.intrigue.start", r, !1, !0), nge.observer.add("slotMachine.reel_3.intrigue.start", r, !1, !0), nge.observer.add("slotMachine.reel_4.intrigue.start", r, !1, !0)
                }
            }))
        },
        1079: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Jackpot = nge.App.DjGameBase.Mlm.Brain.Jackpot.extend((function() {
                this.jackpotBlockers.push((function() {
                    return "fakeLoaderBonusToGame" === nge.localData.get("layersSwitcher.currentLayer") || "pickBonusFinal" === nge.localData.get("layersSwitcher.currentLayer") || "pickBonus2" === nge.localData.get("layersSwitcher.currentLayer")
                }))
            }))
        },
        1080: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.SpinButton = nge.App.DjGameBase.Mlm.Brain.SpinButton.extend((function() {
                var e = this;
                this.ignoredStates.push("pickBonus"), this.bonusLayers = ["pickBonus1", "pickBonus2"], this.spinButtonEnableEvents.push("slotMachine.spinComplete.featureCoinsProcess.allStart"), this.spinButtonDisableEvents.push("magicTree.coins.skip", "slotMachine.spinComplete.featureCoinsProcess.done"), this.spinEnableBlockers.push((function() {
                    return nge.localData.get("pickBonusWon")
                })), this.pressHandlerForSpinGame = function(t) {
                    e.modeSpin && nge.localData.get("featureCoinsProcess.inProgress") ? nge.observer.fire("magicTree.coins.skip") : e.super.pressHandlerForSpinGame(t)
                }, this.pressHandlerForFreespinGame = function(t) {
                    e.modeSpin && nge.localData.get("featureCoinsProcess.inProgress") ? nge.observer.fire("magicTree.coins.skip") : e.super.pressHandlerForFreespinGame(t)
                }
            }))
        },
        1081: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic = {}
        },
        1082: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: "@PAYTABLE @SETTINGS_SCREEN RESPIN PICK_BONUS FREESPIN SPIN".split(" "),
                        RESPIN: ["PICK_BONUS", "FREESPIN", "SPIN"],
                        FREESPIN: ["SPIN"],
                        PICK_BONUS: ["SPIN"],
                        PAYTABLE: ["SPIN"],
                        SETTINGS_SCREEN: ["SPIN"]
                    },
                    pickBonus: {
                        PICK_BONUS: ["SPIN"],
                        PAYTABLE: ["PICK_BONUS"],
                        SETTINGS_SCREEN: ["PICK_BONUS"]
                    }
                }, this.sharedStates = {
                    play: ["SHARED"],
                    pickBonus: ["SHARED"]
                }, this.sharedButtons.play.linesChanger = {
                    name: "linesChanger",
                    enabled: !1,
                    visible: !0
                }, this.buttons.pickBonus = {}, delete this.buttons.play.freeSpinStart, delete this.buttons.play.finalPopup, this.sharedButtons.pickBonus = {
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
                    coinMinus: {
                        name: "coinMinus",
                        enabled: !1,
                        visible: !1
                    },
                    coinPlus: {
                        name: "coinPlus",
                        enabled: !1,
                        visible: !1
                    },
                    betMinus: {
                        name: "betMinus",
                        enabled: !1,
                        visible: !1
                    },
                    betPlus: {
                        name: "betPlus",
                        enabled: !1,
                        visible: !1
                    }
                }
            }))
        },
        1083: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States = {}
        },
        1084: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SharedState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SharedState.extend((function() {
                this.model.actions.SHARED.betMinus.enabled = ["show", "!bonusWon", "!coinsInProgress", "!winTweenInProgress", "!offerInProgress"], this.model.actions.SHARED.betPlus.enabled = ["show", "!bonusWon", "!coinsInProgress", "!winTweenInProgress", "!offerInProgress"], this.propUpdateHandlers.bonusWon = function() {
                    return nge.localData.get("pickBonusWon")
                }, this.propUpdateHandlers.coinsInProgress = function() {
                    return nge.localData.get("featureCoinsProcess.inProgress")
                }
            }))
        },
        1085: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SpinState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SpinState.extend((function() {
                this.model.actions.READY.auto = {
                    title: nge.i18n.get("AUTO\nSTART"),
                    callback: ["autoCallback"],
                    enabled: ["!bonusInProgress"]
                }, this.model.actions.STARTED.auto = {
                    title: nge.i18n.get("AUTO\nSTART"),
                    callback: ["autoCallback"],
                    enabled: ["!bonusInProgress"]
                }, this.validityCheckHandler = function() {
                    var e = "CollectionBonusItemResponse" === nge.localData.get("State.LastResponse"),
                        t = "SpinRequest" === nge.localData.get("spin.type"),
                        a = this.super.validityCheckHandler();
                    return e && t || !nge.localData.get("pickBonusWon") && a
                }, this.customSubscribe = function() {}, this.propUpdateHandlers.bonusInProgress = function() {
                    return nge.localData.get("pickBonusWon") || nge.localData.get("featureCoinsProcess.inProgress")
                }
            }))
        },
        1086: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.FreespinState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.FreespinState.extend((function() {
                this.model.actions.READY = {}
            }))
        },
        1087: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.PickBonusState = nge.App.ClassicGameBase.Mlm.Brain.ButtonsNewLogic.States.BaseState.extend((function() {
                this.model = {
                    order: ["SHOWED"],
                    actions: {
                        SHOWED: {
                            quickSettingsPanel: {
                                callback: function() {
                                    nge.observer.fire("quickSettings.panelSwitch")
                                }
                            },
                            soundMobile: {
                                callback: function() {
                                    nge.observer.fire("quickSettings.soundSwitch")
                                }
                            },
                            fullscreen: {
                                callback: function() {
                                    nge.observer.fire("fullscreen.btnClicked")
                                }
                            }
                        }
                    }
                }, this.validityCheckHandler = function() {
                    return nge.localData.get("pickBonusWon")
                }, this.actionUpdateHandlers = {
                    onShowed: function() {
                        return "pickBonus" === nge.statesManager.getCurrentName()
                    }
                }, this.rememberLastResponse = function(e) {
                    nge.localData.set("State.LastResponse", e.action)
                }, this.subscribeCfgExt = {
                    "autospin.off": "autospinOffHandler",
                    "autospin.started": "autospinStartHandler",
                    "gamble.taking.stop": "gambleTakingStopHandler",
                    "slotMachine.spinResponse": "onSpinResponse",
                    "transportMessage.PickBonusItemResponse": "rememberLastResponse",
                    "transportMessage.CollectionBonusItemResponse": "rememberLastResponse",
                    "offers.controller.resetBalanceReceivedFlag": "resetBalanceReceivedFlag",
                    "Transport.close": "onTransportClose"
                }
            }))
        },
        1088: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile = {}
        },
        1089: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic = {}
        },
        1090: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: ["@PAYTABLE", "@SETTINGS_SCREEN", "PICK_BONUS", "FREESPIN", "SPIN"],
                        FREESPIN: ["SPIN"],
                        PICK_BONUS: ["SPIN"],
                        PAYTABLE: ["SPIN"],
                        SETTINGS_SCREEN: ["SPIN"]
                    },
                    pickBonus: {
                        PICK_BONUS: ["SPIN"],
                        PAYTABLE: ["PICK_BONUS"],
                        SETTINGS_SCREEN: ["PICK_BONUS"]
                    }
                }, this.sharedStates = {
                    play: ["SHARED"],
                    pickBonus: ["SHARED"]
                }, this.buttons.pickBonus = {}, delete this.buttons.play.freeSpinStart, delete this.buttons.play.finalPopup, this.sharedButtons.pickBonus = {
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
                    }
                }
            }))
        },
        1091: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States = {}
        },
        1092: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.SharedState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.SharedState.extend((function() {
                var e = this.propUpdateHandlers.show;
                this.propUpdateHandlers.show = function() {
                    return !nge.localData.get("featureCoinsProcess.inProgress") && e()
                }
            }))
        },
        1093: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.SpinState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.SpinState.extend((function() {
                this.validityCheckHandler = function() {
                    var e = this.super.validityCheckHandler();
                    return !nge.localData.get("pickBonusWon") && e
                }, this.customSubscribe = function() {}
            }))
        },
        1094: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.FreespinState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.FreespinState.extend((function() {
                this.model.actions.READY = {
                    spin: {
                        enabled: ["!wasBonus"],
                        callback: function() {
                            nge.observer.fire("slotMachine.spinCommand")
                        }
                    }
                }
            }))
        },
        1095: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.PickBonusState = nge.App.ClassicGameBase.Mlm.Brain.ButtonsNewLogic.States.BaseState.extend((function() {
                this.model = {
                    order: ["SHOWED"],
                    actions: {
                        SHOWED: {}
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
        1096: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport = {}
        },
        1097: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models = {}
        },
        1098: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models.PickBonusItemResponse = nge.Mlm.Transport.Models.PickBonusItemResponse.extend((function() {
                this.customConstructor = function(e) {
                    this.super.customConstructor(e);
                    var t = nge.Lib.Helper.recursiveGet("data.canGamble", e, !1);
                    t && (this.data.canGamble = t), (e = nge.Lib.Helper.recursiveGet("data.params.PickBonus", e, !1)) && (this.data.params = {}, this.data.params.PickBonus = e)
                }
            }))
        },
        1099: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models.CollectionBonusItemResponse = nge.Mlm.Transport.Models.CollectionBonusItemResponse.extend((function() {
                this.customConstructor = function(e) {
                    this.super.customConstructor(e), (e = nge.Lib.Helper.recursiveGet("data.gameParameters.initialSymbols", e, !1)) && (this.data.gameParameters = {}, this.data.gameParameters.initialSymbols = e)
                }
            }))
        },
        1100: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup = {}
        },
        1101: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Helpers = {}
        },
        1102: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Helpers.SlotWin = nge.App.DjGameBase.Mlm.Transport.APIMockup.Helpers.SlotWin.extend((function() {
                var e = this.super.checkBonusGame.bind(this);
                this.checkBonusGame = function(t) {
                    var a = nge.localData.get("apiMockup.gameSettings"),
                        s = this.getScattersLineContent(t),
                        n = this.getRespinsBonusGameData(t);
                    if (n) return n;
                    if (a.freespinsForScatters && a.freespinsForScatters.length >= s.length && a.freespinsForScatters[s.length - 1] && !((a = nge.localData.get("apiMockup.respins.respinRemain")) && 1 < a)) {
                        var l = s.wonSymbols.map((function(e) {
                            return +e[0]
                        }));
                        a = function(e) {
                            return !l.includes(e)
                        };
                        var p = this.getLineWinAmounts([
                            [s]
                        ])[0];
                        if (n = 0, p && (n = p.amount), p = s.symbol, 0 === [1, 2, 3].filter(a).length && ("13" === p || "14" === p)) return e(t);
                        if (0 === [0, 2, 4].filter(a).length && ("11" === p || "12" === p)) return {
                            bonusGameData: {
                                newState: "PickBonus"
                            },
                            winAmounts: [t = {
                                amount: n + "",
                                bonusName: "PickBonus",
                                params: {
                                    fields1: "3",
                                    fields2: "30"
                                },
                                type: "Bonus",
                                wonSymbols: s.wonSymbols
                            }],
                            scattersProcessed: !0
                        }
                    }
                };
                var t = this.super.getRespinsBonusGameData.bind(this);
                this.getRespinsBonusGameData = function(e) {
                    var a = nge.localData.get("apiMockup.gameSettings"),
                        s = a.scatterSymbols;
                    a.scatterSymbols = ["11", "12"], a.respinReelsMask = [!0, !1, !0, !1, !0];
                    var n = t(e);
                    return n || (a.scatterSymbols = ["13", "14"], a.respinReelsMask = [!1, !0, !0, !0, !1], n = t(e)), a.scatterSymbols = s, n
                }
            }))
        },
        1103: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models = {}
        },
        1104: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.AuthResponse = nge.App.DjGameBase.Mlm.Transport.APIMockup.Models.AuthResponse.extend((function() {
                this.get = function() {
                    var e = this.super.get();
                    return e.data.gameParameters.initialSymbols = e.data.gameParameters.initialSymbols.spinResult, e
                }
            }))
        },
        1105: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.PickBonusItemResponse = Class.extend((function() {
                this.data = !1, this.constructor = function(e) {
                    this.data = e
                }, this.get = function() {
                    var e = this.data.baseResponse;
                    e.result = "true", e.sesId = nge.localData.get("apiMockup.sesId"), e.data = {};
                    var t = this.data.requestData.data.index,
                        a = nge.localData.get("apiMockup.magicTree.bonusGameData");
                    if (1 === nge.localData.get("apiMockup.bonus.magicTree.stage")) {
                        var s = a.fields1[t];
                        e.data.bonusItem = s, e.data.items = a.fields1, e.data.state = "PickBonus", e.data.lastPick = "false", a.fields1[t].picked = "true"
                    } else s = a.fields2[t], e.data.bonusItem = s, e.data.items = a.fields2, a.openedFieldCounts.push(s.index), 5 === a.openedFieldCounts.length ? (e.data.state = "Ready", e.data.lastPick = "true", nge.localData.set("apiMockup.bonusGame.inProgress", !1)) : (e.data.state = "PickBonus", e.data.lastPick = "false"), a.fields2[t].picked = "true";
                    return e
                }
            }))
        },
        1106: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.SpinResponse = nge.App.DjGameBase.Mlm.Transport.APIMockup.Models.SpinResponse.extend((function() {
                this.processBonusGameData = function() {
                    if (this.super.processBonusGameData(), this.winResult.bonusGameData) {
                        var e = nge.localData.get("apiMockup.gameSettings");
                        if ("FreeSpins" === this.winResult.bonusGameData.newState) e.bonusGameRequest = "FreeSpinRequest";
                        else if ("ReSpins" === this.winResult.bonusGameData.newState) e.bonusGameRequest = "RespinRequest";
                        else if ("PickBonus" === this.winResult.bonusGameData.newState) {
                            e.bonusGameRequest = "PickBonusItemRequest", nge.localData.set("apiMockup.bonusGame.inProgress", !0), nge.localData.set("apiMockup.freespins.totalBonusWin", +this.winResult.slotWin.totalWin), nge.localData.set("apiMockup.magicTree.lastSpinRequestData", this.data.requestData), e = [];
                            for (var t = [], a = 0; 3 > a; a++) e.push({
                                type: "IndexedItem",
                                index: a + 1 + "",
                                value: [5, 5, 5][a],
                                picked: "false"
                            });
                            for (a = 0; 30 > a; a++) t.push({
                                type: "IndexedItem",
                                index: a + 1 + "",
                                value: [0, 1, 2, 3, 4, 0, 0, 1, 2, 3, 4, 0, 0, 1, 2, 3, 4, 0, 0, 1, 2, 3, 4, 0, 0, 1, 2, 3, 4, 0][a],
                                picked: "false"
                            });
                            nge.localData.set("apiMockup.magicTree.bonusGameData", {
                                fields1: e,
                                fields2: t,
                                openedFieldCounts: []
                            })
                        }
                    }
                }, this.generateSlotWin = function(e, t) {
                    this.spinSymbols = e.spinResult;
                    var a = nge.Lib.Helper.jsObjClone(e.spinResult);
                    this.response.data.params = {
                        coins: e.featureCoins
                    };
                    for (var s = 0; s < e.featureCoins.length; s++) {
                        var n = e.featureCoins[s];
                        a[+n[1]][+n[0]] = "1"
                    }
                    return nge.App.getInstance("nge.Mlm.Transport.APIMockup.Helpers.SlotWin").generateSlotWin(a, t)
                }
            }))
        },
        5: function(e, t, a) {
            a(975), a(976), a(977), a(978), a(979), a(980), a(981), a(982), a(983), a(984), a(985), a(986), a(987), a(988), a(989), a(990), a(991), a(992), a(993), a(994), a(995), a(996), a(997), a(998), a(999), a(1e3), a(1001), a(1002), a(1003), a(1004), a(1005), a(1006), a(1007), a(1008), a(1009), a(1010), a(1011), a(1012), a(1013), a(1014), a(1015), a(1016), a(1017), a(1018), a(1019), a(1020), a(1021), a(1022), a(1023), a(1024), a(1025), a(1026), a(1027), a(1028), a(1029), a(1030), a(1031), a(1032), a(1033), a(1034), a(1035), a(1036), a(1037), a(1038), a(1039), a(1040), a(1041), a(1042), a(1043), a(1044), a(1045), a(1046), a(1047), a(1048), a(1049), a(1050), a(1051), a(1052), a(1053), a(1054), a(1055), a(1056), a(1057), a(1058), a(1059), a(1060), a(1061), a(1062), a(1063), a(1064), a(1065), a(1066), a(1067), a(1068), a(1069), a(1070), a(1071), a(1072), a(1073), a(1074), a(1075), a(1076), a(1077), a(1078), a(1079), a(1080), a(1081), a(1082), a(1083), a(1084), a(1085), a(1086), a(1087), a(1088), a(1089), a(1090), a(1091), a(1092), a(1093), a(1094), a(1095), a(1096), a(1097), a(1098), a(1099), a(1100), a(1101), a(1102), a(1103), a(1104), a(1105), a(1106)
        },
        975: function(e, t) {
            nge.appNS = "MagicTree", nge.App[nge.appNS] = {}
        },
        976: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.DjGameBase.Run.extend((function() {
                var e = [30];
                nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang);
                var t = nge.Cfg.Main.lang;
                nge.Lib.Helper.makeReactive(nge.Cfg.Main, "lang", (function(e) {
                    nge.App.removeSysInstancesMode("lang_" + t), nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang), t = e
                })), this.run = function() {
                    this.runDefault(), nge.localData.set("lines.cfg", e)
                }, nge.App.DjGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.DjGameBase, nge.App[nge.appNS])), this.applyClassicGameBase(), this.statesReplacements.play.push("intrigue", "background", "bigWin", "popup", "spinButtonAnimation"), this.statesReplacements.pickBonus = "layersSwitcher intro coins settingsSimple betSettings debug help fullscreen odometer settingsScreen infoSwipe info pickBonus popup credits creditsTotalBet currencySwitcher spaceHandler totalBet buttons quickSettingsPanel".split(" ")
            })), nge.Cfg.Main.project = "magicTree", nge.Cfg.Main.title = "Magic Tree", nge.Cfg.Main.gameCode = "248", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.55"
        },
        977: function(e, t, a) {
            nge.realPathPrefix = "../../", nge.appPath = "app/magicTree.8/", nge.gameCode = "248", nge.loaderTpl = "netgame", nge.loaderShowGamePreview = !1, nge.loadCfg = []
        },
        978: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        979: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    sr_bell: "game:sounds/bell",
                    big_cell_open: "game:sounds/big_cell_open",
                    big_cell_open_other: "game/sounds/big_cell_open_other",
                    big_win: "game:sounds/big_win_counter",
                    big_win_ending: "game:sounds/big_win_end",
                    bn_background: "game:sounds/bn_background",
                    bs_background: "game:sounds/bs_background",
                    reels_stop_0: "game:sounds/bs_bn_wheel_stop_0",
                    reels_stop_1: "game:sounds/bs_bn_wheel_stop_1",
                    reels_stop_2: "game:sounds/bs_bn_wheel_stop_2",
                    reels_stop_3: "game:sounds/bs_bn_wheel_stop_3",
                    reels_stop_4: "game:sounds/bs_bn_wheel_stop_4",
                    big_cell_gone: "game:sounds/big_cell_gone",
                    big_cell_incoming: "game:sounds/big_cell_incoming",
                    button_start: "game:sounds/button_start",
                    button_stop: "game:sounds/button_stop",
                    coin_drop_1: "game:sounds/coin_drop_1",
                    coin_drop_2: "game:sounds/coin_drop_2",
                    coin_drop_3: "game:sounds/coin_drop_3",
                    default_btn: "game:sounds/default_btn",
                    end_fs_and_pickem_popup: "game:sounds/end_fs_and_pickem_popup",
                    intro_big_win: "game:sounds/intro_big_win",
                    intro_sound: "game:sounds/intro_embient",
                    mini_cell_open_1: "game:sounds/mini_cell_open_1",
                    mini_cell_open_2: "game:sounds/mini_cell_open_2",
                    mini_cell_open_3: "game:sounds/mini_cell_open_3",
                    mini_cell_open_4: "game:sounds/mini_cell_open_4",
                    mini_cell_open_all: "game:sounds/mini_cell_open_all",
                    near_win_intriga: "game:sounds/near_win_intriga",
                    open_fs_popup: "game:sounds/open_fs_popup",
                    open_pickem_popup: "game:sounds/open_pickem_popup",
                    pickem_background: "game:sounds/pickem_background",
                    pop_up_appear_and_disappear: "game:sounds/pop_up_appear_and_disappear",
                    bs_wheel_spin_0: "game:sounds/reel_spining",
                    scatter_drop_cat_1: "game:sounds/scatter_drop_cat_1",
                    scatter_drop_cat_2: "game:sounds/scatter_drop_cat_2",
                    scatter_drop_cat_3: "game:sounds/scatter_drop_cat_3",
                    scatter_drop_fish_1: "game:sounds/scatter_drop_fish_1",
                    scatter_drop_fish_2: "game:sounds/scatter_drop_fish_2",
                    scatter_drop_fish_3: "game:sounds/scatter_drop_fish_3",
                    win_regularWinLow: "game:sounds/sr_win_0",
                    win_regularWinMid: "game:sounds/sr_win_1",
                    win_regularWinHigh: "game:sounds/sr_win_2",
                    tree_move_fake: "game:sounds/tree_move_fake",
                    tree_move_true: "game:sounds/tree_move_true",
                    jackpot_online_background: "game:sounds/jackpot_online_background",
                    jackpot_online_coincidence_1: "game:sounds/jackpot_online_coincidence_1",
                    jackpot_online_coincidence_2: "game:sounds/jackpot_online_coincidence_2",
                    jackpot_online_coincidence_3: "game:sounds/jackpot_online_coincidence_3",
                    jackpot_online_finish_jackpot_popup: "game:sounds/jackpot_online_finish_jackpot_popup",
                    jackpot_online_won_jackpot_movie: "game:sounds/jackpot_online_won_jackpot_movie"
                }
            }))
        },
        980: function(e, t) {
            nge.App[nge.appNS].Cfg.Spine = nge.Cfg.Spine.extend((function() {
                nge.Lib.Helper.mobileAndTabletCheck(), this.preloadForStates = {
                    play: []
                }, this.preloadForStates.play.push({
                    spineName: "bigWinAnim",
                    animationName: "big_win_start_3s"
                }, {
                    spineName: "bigWinAnim",
                    animationName: "big_win_start_6s"
                }, {
                    spineName: "bigWinAnim",
                    animationName: "big_win_start_9s"
                }, {
                    spineName: "bigWinFlareAnim",
                    animationName: "count_flare"
                }, {
                    spineName: "bigWinFireworks",
                    animationName: "fireworks"
                }, {
                    spineName: "fire_bowls",
                    animationName: "play_fire_blue"
                }, {
                    spineName: "fire_bowls",
                    animationName: "play_fire_red"
                }, {
                    spineName: "tree",
                    animationName: "tree_loop"
                }, {
                    spineName: "win_anim",
                    animationName: "win_anim"
                }, {
                    spineName: "M00_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M01_000_Anim",
                    animationName: "landing"
                }, {
                    spineName: "M01_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M02_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M03_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M04_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M05_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M06_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M07_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M08_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M09_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M10_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M11_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M12_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M13_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "M14_000_Anim",
                    animationName: "play"
                }, {
                    spineName: "coin_drop",
                    animationName: "drop_symb_scatter_landing"
                }, {
                    spineName: "coin_drop",
                    animationName: "drop_symb_scatter_tranform"
                }, {
                    spineName: "intrigue_front_animation",
                    animationName: "spinification_loop"
                }), this.preloadForEvents = [{
                    eventName: "freespin.ui.on",
                    preload: []
                }]
            }))
        },
        981: function(e, t) {
            nge.App[nge.appNS].Com = {}
        },
        982: function(e, t) {
            nge.App[nge.appNS].Com.Autospin = {}
        },
        983: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.View = nge.App.DjGameBase.Com.Autospin.View.extend((function() {
                this.yPanelOffset = this.firstPanelElementTopYOffset = 16, this.infinityTextYOffset = 1
            }))
        },
        984: function(e, t) {
            nge.App[nge.appNS].Com.Background = {}
        },
        985: function(e, t) {
            nge.App[nge.appNS].Com.Background.Controller = nge.Com.Base.extend((function() {
                function e(e, t, a, s, n, l, p, o) {
                    return e = nge.Mlm.Objects.Spine({
                        assetKey: e,
                        name: t,
                        x: a,
                        y: s,
                        isVisible: !1
                    }), n = nge.findOne("^" + n), n = nge.objects.create(e, n, !0), l && n.setAnimationByName(0, l, p, o), n
                }
                var t, a, s, n = !1,
                    l = !1,
                    p = 1;
                this.create = function() {
                    this.createDefault(), n || (this.subscribe(), n = !0), t = e("fire_bowls", "fireBraziers", 960, 540, "foregroundContainer", "play_fire_red", !0), a = e("tree", "treeAnimations", 960, 540, "foregroundContainer"), s = e("win_anim", "winAnimation", 960, 540, "foregroundContainer"), nge.Lib.Helper.mobileAndTabletCheck() || e("petals", "treePetals", 960, 540, "foregroundContainer", "play", !0), i()
                };
                var o = function(e, t, s, n, p, o) {
                        a.play(e + (l ? "_fs" : ""), t, s, n, p), o && a.onComplete.addOnce(o)
                    },
                    i = function() {
                        o("tree_static", !1, !0, p, !1)
                    },
                    r = function() {
                        t.play("play_fire_blue", !0)
                    },
                    u = function() {
                        t.play("play_fire_red", !0)
                    },
                    m = function() {
                        s.setAnimationByName(0, "win_anim", !1)
                    },
                    c = function() {
                        nge.observer.fire("sound.fake_tree"), x(1), o("tree_loop", !0, !1)
                    },
                    y = function(e) {
                        nge.observer.fire("slotMachine.spinComplete.featureCoinsProcess.allStart");
                        var t = function() {
                            e.needPlayWin ? (m(), nge.observer.fire("sound.win_tree"), o("tree_win", !1, !0, p), a.onComplete.addOnce(i), nge.observer.fire("slotMachine.spinComplete.featureCoinsProcess.fakeDone", e)) : e.needPlayFake && (nge.observer.fire("sound.fake_tree"), o("tree_win_fake", !1, !0, p, !1, (function() {
                                nge.observer.fire("slotMachine.spinComplete.featureCoinsProcess.fakeDone", e)
                            })), a.onComplete.addOnce(i))
                        };
                        a.animationActive ? (a.animationSpeed = 10, a.onComplete.addOnce(t)) : t()
                    },
                    g = function(e) {
                        l = "freespinStartPopup" === e || "gameFreeSpin" === e || "freespinEndPopup" === e, i()
                    },
                    x = function(e) {
                        p = e, a && a.animationActive && (a.animationSpeed = p)
                    };
                this.subscribe = function() {
                    nge.observer.add("freespin.start", r), nge.observer.add("freespin.end", u), nge.observer.add("winlines.animateAll", m), nge.observer.add("layersSwitcher.show", g), nge.observer.add("slotMachine.spinComplete.featureCoinsProcess", y), nge.observer.add("slotMachine.spinResponse.featureTreeLoop", c), nge.observer.add("magicTree.coins.skip", (function() {
                        x(4)
                    })), nge.observer.add("Transport.close", (function() {
                        x(1)
                    }))
                }
            }))
        },
        986: function(e, t) {
            nge.App[nge.appNS].Com.Background.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "bgArea",
                            fullPath: e + "atlases/bgArea.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bgAreaFreeSpins",
                            fullPath: e + "atlases/bgAreaFreeSpins.jpg"
                        }, {
                            type: mt.assets.SPINE,
                            key: "fire_bowls",
                            spine: e + "spine/bgAnimations/fire_bowls.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "petals",
                            spine: e + "spine/bgAnimations/tree_petals.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "tree",
                            spine: e + "spine/bgAnimations/tree.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "win_anim",
                            spine: e + "spine/bgAnimations/win_anim.json",
                            packed: !0
                        }]
                    },
                    objects: {
                        name: "objects"
                    }
                }
            }
        },
        987: function(e, t) {
            nge.App[nge.appNS].Com.Background.Mobile = {}
        },
        988: function(e, t) {
            nge.App[nge.appNS].Com.Background.Mobile.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "bgArea",
                            fullPath: e + "atlases/bgArea.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "bgAreaFreeSpins",
                            fullPath: e + "atlases/bgAreaFreeSpins.jpg"
                        }, {
                            type: mt.assets.SPINE,
                            key: "fire_bowls",
                            spine: e + "spine/bgAnimations/fire_bowls.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "tree",
                            spine: e + "spine/bgAnimations/tree_mobile.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "win_anim",
                            spine: e + "spine/bgAnimations/win_anim.json",
                            packed: !0
                        }]
                    },
                    objects: {
                        name: "objects"
                    }
                }
            }
        },
        989: function(e, t) {
            nge.App[nge.appNS].Com.BigWin = {}
        },
        990: function(e, t) {
            nge.App[nge.appNS].Com.BigWin.Cfg = nge.App.DjGameBase.Com.BigWin.Cfg.extend((function() {
                this.params = this.super.get(), this.params.followSlotName = "txt_holder", this.params.odometerDurations = [{
                    duration: 18e3,
                    name: "9s",
                    mult: 5
                }, {
                    duration: 14e3,
                    name: "9s",
                    mult: 3
                }, {
                    duration: 1e4,
                    name: "9s",
                    mult: 2
                }, {
                    duration: 7e3,
                    name: "6s",
                    mult: 1
                }]
            }))
        },
        991: function(e, t) {
            nge.App[nge.appNS].Com.BigWin.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.SPINE,
                            key: "bigWinAnim",
                            spine: e + "spine/bigWin/bigwin.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bigWinFlareAnim",
                            spine: e + "spine/bigWin/bigwin_flare.json",
                            packed: !0
                        }, {
                            type: mt.assets.SPINE,
                            key: "bigWinFireworks",
                            spine: e + "spine/bigWin/fireworks.json",
                            packed: !0
                        }, {
                            type: mt.assets.BINARY,
                            key: "emitterVFX",
                            fullPath: nge.appPath + "/emitter/explosionClearCoin.dat"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "clCoin_sprite_01",
                            width: 1548,
                            height: 1290,
                            frameWidth: 258,
                            frameHeight: 258,
                            fullPath: e + "atlases/clCoin_sprite_01.png"
                        }]
                    },
                    objects: {
                        contents: [{
                            type: 1,
                            name: "bigWinContainer",
                            anchorX: .5,
                            anchorY: .5,
                            x: 960,
                            y: 540,
                            isVisible: !1,
                            contents: [{
                                type: 6,
                                assetKey: "bigWinFlareAnim",
                                name: "bigWinAnim_flare",
                                anchorX: .5,
                                anchorY: .5,
                                y: 90,
                                isVisible: !1
                            }, {
                                type: 7,
                                name: "bigWinAmount",
                                anchorX: .5,
                                anchorY: 1,
                                text: "0",
                                assetKey: "orange_font",
                                size: 150
                            }, {
                                type: mt.objects.UNITY_EMITTER,
                                name: "bigWinEmitter",
                                y: 960,
                                assetKey: "emitterVFX"
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
                                assetKey: "bigWinFireworks",
                                name: "bigWinFireworks",
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
        992: function(e, t) {
            nge.App[nge.appNS].Com.BigWin.Controller = nge.App.DjGameBase.Com.BigWin.Controller.extend((function() {
                var e, t, a, s = this;
                this.create = function() {
                    this.super.create(), (e = nge.findOne("^bigWinFireworks")).alpha = 1, (a = nge.findOne("^bigWinContainer")).addChildAt(e, 0), s.generateBackground()
                }, this.destroy = function() {
                    this.super.destroy(), e.stop(!1, !1), e.destroy(), e = null
                }, this.hide = function(t) {
                    this.super.hide(t), "abort" === t && e.setSpeed(2)
                }, this.generateBackground = function() {
                    var e = nge.Lib.Helper.create1PxPng(1, 1, 7, 178, !0);
                    nge.wrap.cache.addTexture("1pxBG", PIXI.Texture.fromImage(e)), e = nge.Mlm.Objects.Image({
                        name: "bigWinBg",
                        assetKey: "1pxBG",
                        anchorX: .5,
                        anchorY: .5,
                        scaleX: 1920,
                        scaleY: 1080
                    }), t = nge.objects.create(e, !1, !0), a.addChildAt(t, 0)
                }, this.show = function(t) {
                    if (!this.super.show(t)) return !1;
                    e.play({
                        name: "fireworks",
                        mode: nge.spine.LOOP
                    })
                }, this.showLoop = function() {}, this.showPhase2 = function() {
                    this.super.showPhase2(), nge.tween.add(e).to({
                        alpha: 0
                    }, 1e3).start().onComplete.add((function() {
                        e.stop(!1, !1)
                    }))
                }
            }))
        },
        993: function(e, t) {
            nge.App[nge.appNS].Com.Buttons = {}
        },
        994: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Cfg = nge.App.DjGameBase.Com.Buttons.Cfg.extend((function() {
                delete this.params.freeSpinStart, delete this.params.finalPopup, this.pickBonus = {
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
                    linesChanger: {
                        name: "linesButtonArea",
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
                    maxBet: {
                        name: "maxBetButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: _("MAX\nBET")
                    },
                    auto: {
                        name: "autoButton",
                        disableFrame: 3,
                        nonPixelPerfect: !1,
                        title: _("AUTO\nSTART")
                    }
                };
                for (var e = 0; 3 > e; e++) this.pickBonus["pickBonusS1Item" + e] = {
                    name: "pickBonusS1Item" + e,
                    title: ""
                };
                for (e = 0; 30 > e; e++) this.pickBonus["pickBonusS2Item" + e] = {
                    name: "pickBonusS2Item" + e,
                    title: ""
                }
            }))
        },
        995: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile = {}
        },
        996: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile.Cfg = nge.App.DjGameBase.Com.Buttons.Mobile.Cfg.extend((function() {
                delete this.params.freeSpinStart, delete this.params.finalPopup, this.pickBonus = {
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
                    help: {
                        name: "helpMobileButton",
                        disableFrame: 3,
                        nonPixelPerfect: !0
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
                    }
                };
                for (var e = 0; 3 > e; e++) this.pickBonus["pickBonusS1Item" + e] = {
                    name: "pickBonusS1Item" + e,
                    title: ""
                };
                for (e = 0; 30 > e; e++) this.pickBonus["pickBonusS2Item" + e] = {
                    name: "pickBonusS2Item" + e,
                    title: ""
                }
            }))
        },
        997: function(e, t) {
            nge.App[nge.appNS].Com.Freespin = {}
        },
        998: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Cfg = nge.App.DjGameBase.Com.Freespin.Cfg.extend((function() {
                this.params.manualMode = !0, this.params.counterNotUpdateOnBonusGameName = "FreeSpins", this.params.counterUpdatePlayedEvent = "freespin.counterPlayedUpdateEvent", this.params.counterUpdateTotalEvent = "freespin.counterTotalUpdateEvent"
            }))
        },
        999: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Controller = nge.App.DjGameBase.Com.Freespin.Controller.extend((function() {
                var e = this;
                this.startFreespinsOnWinlinesComplete = function() {
                    e.freespinsInProgress || nge.rafSetTimeout((function() {
                        var e = nge.localData.get("freespinsCountForStartPopup");
                        nge.observer.fire("popup.show", {
                            popupName: "freespinStartPopup",
                            layerName: "freespinStartPopup",
                            onClick: function() {
                                nge.observer.fire("layersSwitcher.show", "gameFreeSpin")
                            },
                            freespinsCounter: e
                        }), nge.observer.fire("winlines.stopAnimation"), nge.observer.fire("win.hide")
                    }), 1e3)
                }, this.prepareFreespinsToEnd = function() {
                    !0 !== nge.localData.get("pickBonusWon") && (nge.localData.set("bonusGame.lastResponse", !1), nge.observer.fire("popupFinish.animate.start"), nge.rafSetTimeout((function() {
                        nge.observer.fire("winlines.stopAnimation");
                        var e = nge.localData.get("slotMachine.totalBonusWin") || 0;
                        if (isNaN(e)) console.error("Total bonus win is NaN");
                        else {
                            var t = nge.Lib.Money.toCoins(e);
                            nge.observer.fire("popup.show", {
                                popupName: t ? "freespinEndPopup" : "freespinEndPopupNoWin",
                                layerName: "freespinEndPopup",
                                onClick: function() {
                                    nge.observer.fire("freespin.press.endPopupButton")
                                },
                                onHide: function() {
                                    nge.observer.fire("bs_background.play")
                                },
                                freespinTotalWinCounter: nge.Lib.Money.toCoins(e)
                            }, 20)
                        }
                    }), 800))
                }
            }))
        }
    }
]);