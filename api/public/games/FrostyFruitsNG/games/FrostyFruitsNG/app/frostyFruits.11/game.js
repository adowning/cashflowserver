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
}, $jscomp.findInternal = function(e, t, n) {
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
        1067: function(e, t) {
            nge.appNS = "FrostyFruits", nge.App[nge.appNS] = {}
        },
        1068: function(e, t, n) {
            nge.realPathPrefix = "../../", nge.appPath = "app/frostyFruits.11/", nge.gameCode = "289", nge.loaderTpl = "netgame", nge.loaderShowGamePreview = !1, nge.loadCfg = []
        },
        1069: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.DjGameBase.Run.extend((function() {
                var e = [20];
                nge.App.addSysInstancesMode("SlimJackpot"), nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang);
                var t = nge.Cfg.Main.lang;
                nge.Lib.Helper.makeReactive(nge.Cfg.Main, "lang", (function(e) {
                    nge.App.removeSysInstancesMode("lang_" + t), nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang), t = e
                })), this.run = function() {
                    this.runDefault(), nge.localData.set("lines.cfg", e)
                }, nge.App.DjGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.DjGameBase, nge.App[nge.appNS])), this.applyClassicGameBase(), this.statesReplacements.play.push("background", "winlines", "popup", "bigWinUni", "spinButtonAnimation", "miniPaytable", "blinker")
            })), nge.Cfg.Main.project = "frostyFruits", nge.Cfg.Main.title = "Frosty Fruits", nge.Cfg.Main.gameCode = "289", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.51"
        },
        1070: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        1071: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    all_symbols_gone_and_come: "game:sounds/all_symbols_gone_and_come",
                    bs_background: "game:sounds/ambient_basic_game",
                    bn_background: "game:sounds/ambient_free_spins",
                    intro_sound: "game:sounds/ambient_sfx",
                    sr_bell: "game:sounds/bell",
                    big_win_ending: "game:sounds/big_win_end",
                    big_win_start: "game:sounds/big_win_start",
                    big_win: "game:sounds/big_win",
                    button_start: "game:sounds/button_start",
                    button_stop: "game:sounds/button_stop",
                    default_btn_hover: "game:sounds/default_btn_hover",
                    default_btn: "game:sounds/default_btn",
                    end_fs_popup: "game:sounds/end_fs_popup",
                    intro_big_win: "game:sounds/intro_big_win",
                    scatter_0: "game:sounds/scatter_0",
                    scatter_1: "game:sounds/scatter_1",
                    scatter_2: "game:sounds/scatter_2",
                    scatter_3: "game:sounds/scatter_3",
                    scatter_4: "game:sounds/scatter_4",
                    win_regularWinLow: "game:sounds/sr_win_0",
                    win_regularWinMid: "game:sounds/sr_win_1",
                    win_regularWinHigh: "game:sounds/sr_win_2",
                    stage_inc: "game:sounds/stage_inc",
                    open_fs_popup: "game:sounds/start_fs_popup",
                    symbol_drop_0: "game:sounds/symbol_drop_0",
                    symbol_drop_1: "game:sounds/symbol_drop_1",
                    symbol_drop_2: "game:sounds/symbol_drop_2",
                    symbol_drop_3: "game:sounds/symbol_drop_3",
                    symbol_drop_4: "game:sounds/symbol_drop_4",
                    symbol_explosion_0: "game:sounds/symbol_explosion_0",
                    symbol_explosion_1: "game:sounds/symbol_explosion_1",
                    symbol_explosion_2: "game:sounds/symbol_explosion_2",
                    symbol_explosion_3: "game:sounds/symbol_explosion_3",
                    symbol_explosion_4: "game:sounds/symbol_explosion_4",
                    pop_up_disappear: "game:sounds/pop_up_disappear",
                    symbol_drop_fs_0: "symbol_drop_fs_1-5",
                    symbol_drop_fs_1: "symbol_drop_fs_1-5",
                    symbol_drop_fs_2: "symbol_drop_fs_1-5",
                    symbol_drop_fs_3: "symbol_drop_fs_1-5",
                    symbol_drop_fs_4: "symbol_drop_fs_1-5",
                    jackpot_online_background: "game:sounds/jackpot_online_background",
                    jackpot_online_coincidence_1: "game:sounds/jackpot_online_coincidence_1",
                    jackpot_online_coincidence_2: "game:sounds/jackpot_online_coincidence_2",
                    jackpot_online_coincidence_3: "game:sounds/jackpot_online_coincidence_3",
                    jackpot_online_finish_jackpot_popup: "game:sounds/jackpot_online_finish_jackpot_popup",
                    jackpot_online_won_jackpot_movie: "game:sounds/jackpot_online_won_jackpot_movie"
                }
            }))
        },
        1072: function(e, t) {
            nge.App[nge.appNS].Cfg.Spine = nge.Cfg.Spine.extend((function() {
                this.preloadForStates = {
                    play: [{
                        spineName: "symbol_bang",
                        animationName: "bang"
                    }, {
                        spineName: "M00_000",
                        animationName: "play"
                    }, {
                        spineName: "M01_000",
                        animationName: "play"
                    }, {
                        spineName: "M02_000",
                        animationName: "play"
                    }, {
                        spineName: "M03_000",
                        animationName: "play"
                    }, {
                        spineName: "M04_000",
                        animationName: "play"
                    }, {
                        spineName: "M05_000",
                        animationName: "play"
                    }, {
                        spineName: "M06_000",
                        animationName: "play"
                    }, {
                        spineName: "M07_000",
                        animationName: "play"
                    }, {
                        spineName: "M08_000",
                        animationName: "play"
                    }, {
                        spineName: "M09_000",
                        animationName: "play"
                    }, {
                        spineName: "symbol_ice_effects",
                        animationName: "landing"
                    }, {
                        spineName: "symbol_ice_cracks",
                        animationName: "in"
                    }, {
                        spineName: "bigWinAnim",
                        animationName: "big_win_all"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "popup_fs_appear"
                    }]
                }
            }))
        },
        1073: function(e, t) {
            nge.App[nge.appNS].Com = {}
        },
        1074: function(e, t) {
            nge.App[nge.appNS].Com.Autospin = {}
        },
        1075: function(e, t) {
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
        1076: function(e, t) {
            nge.App[nge.appNS].Com.Balance = {}
        },
        1077: function(e, t) {
            nge.App[nge.appNS].Com.Balance.Controller = nge.App.DjGameBase.Com.Balance.Controller.extend((function() {
                var e = this;
                this.showBalance = function() {
                    var t = nge.localData.get("balance.totalAmount"),
                        n = nge.localData.get("cascades.inProgress"),
                        a = nge.localData.get("freespin.inProgress");
                    n || a || t && e.drawText(t)
                }
            }))
        },
        1078: function(e, t) {
            nge.App[nge.appNS].Com.Balance.Mobile = {}
        },
        1079: function(e, t) {
            nge.App[nge.appNS].Com.Balance.Mobile.Controller = nge.App[nge.appNS].Com.Balance.Controller.extend((function() {}))
        },
        1080: function(e, t) {
            nge.App[nge.appNS].Com.Background = {}
        },
        1081: function(e, t) {
            nge.App[nge.appNS].Com.Background.Controller = nge.Com.Base.extend((function() {
                var e = !1,
                    t = null,
                    n = function() {
                        return nge.Lib.Helper.mobileAndTabletCheck()
                    },
                    a = function(e) {
                        switch (e) {
                            case "game":
                                n || t.stop();
                                break;
                            case "gameFreeSpin":
                                n || t.setAnimationByMode(0, "bg_fs_idle", nge.spine.LOOP)
                        }
                    },
                    s = function() {
                        n || t.stop()
                    };
                this.create = function() {
                    this.createDefault(), e || (nge.observer.add("layersSwitcher.show", a), nge.observer.add("Transport.close", s), e = !0), n || (t = nge.findOne("^freespinBackgroundAnimation"))
                }
            }))
        },
        1082: function(e, t) {
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
                            name: "bgAreaFreeSpins",
                            assetKey: "bgAreaFreeSpins",
                            isVisible: !1
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgArea",
                            assetKey: "bgArea",
                            isVisible: !1
                        }]
                    }
                }
            }
        },
        1083: function(e, t) {
            nge.App[nge.appNS].Com.Blinker = {}
        },
        1084: function(e, t) {
            nge.App[nge.appNS].Com.Blinker.Cfg = nge.App.DjGameBase.Com.Blinker.Cfg.extend((function() {
                this.params.blinkEvents = ["blinker.show"]
            }))
        },
        1085: function(e, t) {
            nge.App[nge.appNS].Com.Buttons = {}
        },
        1086: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Cfg = nge.App.DjGameBase.Com.Buttons.Cfg.extend((function() {}))
        },
        1087: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile = {}
        },
        1088: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile.Cfg = nge.App.DjGameBase.Com.Buttons.Mobile.Cfg.extend((function() {}))
        },
        1089: function(e, t) {
            nge.App[nge.appNS].Com.Freespin = {}
        },
        1090: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Cfg = nge.App.DjGameBase.Com.Freespin.Cfg.extend((function() {
                this.params.counterNotUpdateOnBonusGameName = !0, this.params.counterUpdatePlayedEvent = "freespin.counterPlayedUpdateEvent", this.params.counterUpdateTotalEvent = "freespin.counterTotalUpdateEvent"
            }))
        },
        1091: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Controller = nge.App.DjGameBase.Com.Freespin.Controller.extend((function() {
                var e = this,
                    t = null,
                    n = [2, 3, 5, 10, 15],
                    a = 0,
                    s = function(e) {
                        if (a = e || 0, !t) throw Error("_multipliers is invalid");
                        e = n[a], t.spine.state.hasAnimationByName("x" + e) && (0 !== a && nge.observer.fire("frostyFruits.sounds.freespinSetMult"), t.setAnimationByMode(0, "x" + e + "_bang", nge.spine.HIDE), t.setAnimationByMode(1, "x" + e, nge.spine.LOOP))
                    };
                this.freespinStart = function(n) {
                    e.super.freespinStart(n), e._restoringFlag && (s(nge.localData.get("frostyFruits.storedMult") || 0), t.setAnimationByMode(2, "movement_loop", nge.spine.LOOP))
                }, this.startFreespinsOnWinlinesComplete = function() {
                    e.freespinsInProgress || nge.rafSetTimeout((function() {
                        var e = nge.localData.get("freespinsCountForStartPopup");
                        nge.observer.fire("popup.show", {
                            popupName: "freespinStartPopup",
                            layerName: "freespinStartPopup",
                            onClick: function() {
                                nge.observer.fire("layersSwitcher.show", "gameFreeSpin"), s(0), t.setAnimationByMode(2, "movement_loop", nge.spine.LOOP)
                            },
                            freespinsCounter: e
                        }), nge.observer.fire("winlines.stopAnimation"), nge.observer.fire("win.hide")
                    }), 1e3)
                }, this.prepareFreespinsToEnd = function() {
                    !0 !== nge.localData.get("pickBonusWon") && (nge.localData.set("bonusGame.lastResponse", !1), nge.observer.fire("popupFinish.animate.start"), nge.rafSetTimeout((function() {
                        nge.observer.fire("winlines.stopAnimation");
                        var e = nge.localData.get("slotMachine.totalBonusWin") || 0;
                        isNaN(e) && (console.error("Total bonus win is NaN"), e = 0), t.stop();
                        var n = nge.i18n.get("FREE_GAMES_PLAYED");
                        n = n.replace("%spinsTotal%", nge.localData.get("freespin.spinsTotal")), nge.observer.fire("popup.show", {
                            popupName: "freespinEndPopup",
                            layerName: "freespinEndPopup",
                            onClick: function() {
                                nge.observer.fire("freespin.press.endPopupButton")
                            },
                            freespinEndPopupValue: nge.Lib.Money.toCoins(e),
                            freespinEndPopupFSValue: "" + n
                        }, 20)
                    }), 800))
                }, this.onAdditionalFreespins = function() {
                    nge.observer.fire("winlines.pauseAnimation"), nge.observer.fire("freespin.additionalShow.start"), nge.observer.fire("popup.show", {
                        popupName: "additionalFreespinsPopup",
                        onClick: function() {
                            var e = nge.localData.get("slotMachine");
                            nge.observer.fire("freespin.counterPlayedUpdateEvent", e), nge.observer.fire("freespin.counterTotalUpdateEvent", e), nge.observer.fire("bn_background.play")
                        },
                        onHide: function() {
                            nge.localData.set("additionalPopup.willBeShownNext", !1), nge.observer.fire("freespin.additionalHide.start"), nge.observer.fire("freespin.additionalHide.end"), nge.observer.fire("freespin.resume")
                        },
                        additionalFreespinValue: +nge.localData.get("additionalPopup.value")
                    })
                }, this.checkForAdditionalFreespinOnTheEndOfCascades = function() {
                    nge.localData.get("additionalPopup.willBeShownNext") && nge.observer.fire("freespin.additional", nge.localData.get("bonusGame.freespins"))
                }, this.checkForAdditionalFreespin = function() {
                    nge.localData.get("cascades.inProgress") || e.checkForAdditionalFreespinOnTheEndOfCascades()
                }, this.createFreespinStartPopupEntity = function() {}, this.createFreespinEndPopupEntity = function() {}, this.createAdditionalPopupEntity = function() {}, this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("cascades.state.completed", e.checkForAdditionalFreespinOnTheEndOfCascades), nge.observer.add("freespin.setMultiplier", (function(e) {
                        s(e)
                    })), nge.observer.add("Transport.close", (function() {
                        nge.localData.set("frostyFruits.storedMult", a)
                    }))
                }, this.spinResponseHandler = function(t) {
                    if (!nge.localData.get("freespin.inProgress")) return !1;
                    if (t.slotWin) {
                        var n;
                        e: {
                            if ((n = nge.localData.get("cascades.spinResult.cascades")) && n.length)
                                for (var a = (n = $jscomp.makeIterator(n)).next(); !a.done; a = n.next())
                                    if ((a = a.value).bonuses && a.bonuses.FreeSpins) {
                                        n = a.bonuses.FreeSpins.value;
                                        break e
                                    } n = !1
                        }
                        if (n) {
                            a = nge.localData.get("freespin.spinsTotal");
                            var s = nge.localData.get("freespin.spinsLeft");
                            (s = a - s + 1) > a && (s = a), s && a && !nge.localData.get("respin.inProgress") && e.initFreespinsText(s, a), nge.localData.set("additionalPopup.value", n), nge.localData.set("additionalPopup.willBeShownNext", !0), nge.observer.fire("freespin.pause")
                        } else nge.observer.fire("freespin.counterUpdateEvent", t)
                    } else nge.observer.fire("freespin.counterUpdateEvent", t);
                    nge.localData.set("freespin.spinsLeft", parseInt(t.freeSpinRemain)), 0 === parseInt(t.freeSpinRemain) && "Ready" === t.state && nge.observer.fire("freespin.balanceRequest")
                }, this.getForAdditionalBonusGame = function(e) {
                    if ((e = nge.localData.get("cascades.spinResult.cascades")) && e.length)
                        for (var t = (e = $jscomp.makeIterator(e)).next(); !t.done && (!(t = t.value).bonuses || !t.bonuses.FreeSpins); t = e.next());
                }, this.create = function() {
                    e.super.create(), t = nge.findOne("^fsMultipliers")
                }
            }))
        },
        1092: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.SPINE,
                            key: "multipliers",
                            spine: nge.appPath + "img/spine/multiplier.json"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.SPINE,
                            name: "fsMultipliers",
                            assetKey: "multipliers",
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
        1093: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile = {}
        },
        1094: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile.Controller = nge.App[nge.appNS].Com.Freespin.Controller.extend((function() {}))
        },
        1095: function(e, t) {
            nge.App[nge.appNS].Com.Help = {}
        },
        1096: function(e, t) {
            nge.App[nge.appNS].Com.Help.Controller = nge.App.DjGameBase.Com.Help.Controller.extend((function() {}))
        },
        1097: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe = {}
        },
        1098: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe.Controller = nge.App.DjGameBase.Com.InfoSwipe.Controller.extend((function() {
                this.pageNames = "page0Container page1Container page2Container page3Container page4Container page5Container page6Container page7Container".split(" ")
            }))
        },
        1099: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel = {}
        },
        1100: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel.Cfg = nge.App.DjGameBase.Com.JackpotStatusPanel.Cfg.extend((function() {
                this.params.animateTransition = !0, this.params.animateInEasing = nge.Lib.Tween.Easing.Bounce.Out, this.params.animateOutEasing = nge.Lib.Tween.Easing.Quintic.Out
            }))
        },
        1101: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher = {}
        },
        1102: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                nge.App.getInstance("Com.Freespin.Cfg").get(), this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "winPopupContainer UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer UIFreespinWinContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer reelsBg bgArea reelsBgFreeSpins bgAreaFreeSpins customButtonsVerticalMobileContainer offersFreespinCounter offers1Container".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer reelsBg bgArea".split(" ")
                            },
                            freespinStartPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer reelsBg bgArea".split(" ")
                            },
                            gameFreeSpin: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer reelsBgFreeSpins bgAreaFreeSpins".split(" ")
                            },
                            freespinEndPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer reelsBgFreeSpins bgAreaFreeSpins".split(" ")
                            },
                            gameOfferPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer reelsBg bgArea offers1Container".split(" ")
                            },
                            gameOffer: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer reelsBg bgArea offersFreespinCounter".split(" ")
                            }
                        }
                    }
                }
            }))
        },
        1103: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile = {}
        },
        1104: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "winPopupContainer gameFreeSpinMobileContainer gameScreenContainer reelsBorderContainer backgroundContainer reelsBg bgArea reelsBgFreeSpins bgAreaFreeSpins autoSpinMobileContainer offers1Container customButtonsVerticalMobileContainer".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer reelsBg bgArea autoSpinMobileContainer".split(" ")
                            },
                            freespinStartPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer reelsBg bgArea".split(" ")
                            },
                            gameFreeSpin: {
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer reelsBgFreeSpins bgAreaFreeSpins".split(" ")
                            },
                            freespinEndPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer reelsBgFreeSpins bgAreaFreeSpins".split(" ")
                            },
                            gameOfferPopup: {
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer reelsBg bgArea autoSpinMobileContainer offers1Container".split(" ")
                            },
                            gameOffer: {
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer reelsBg bgArea autoSpinMobileContainer".split(" ")
                            }
                        }
                    }
                }
            }))
        },
        1105: function(e, t) {
            nge.App[nge.appNS].Com.Load = {}
        },
        1106: function(e, t) {
            nge.App[nge.appNS].Com.Load.Cfg = nge.App.DjGameBase.Com.Load.Cfg.extend((function() {
                var e = nge.appPath + "img/fonts/";
                this.atlasesGroups = ["atlases"], this.bitmapFonts.orange_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "orange_font.png",
                    bitmapFont: e + "orange_font.fnt"
                }, this.bitmapFonts.c_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "c_font.png",
                    bitmapFont: e + "c_font.fnt"
                }
            }))
        },
        1107: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable = {}
        },
        1108: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Cfg = Class.extend((function() {
                this.singleton = !0, this.cfg = {
                    slotMachineWidth: 1720,
                    slotMachineHeight: 880,
                    clickableZonePadding: 0,
                    tableCoords: [
                        [{
                            x: 103,
                            y: 13
                        }, {
                            x: 103,
                            y: 306
                        }, {
                            x: 103,
                            y: 599
                        }],
                        [{
                            x: 447,
                            y: 13
                        }, {
                            x: 447,
                            y: 306
                        }, {
                            x: 447,
                            y: 599
                        }],
                        [{
                            x: 791,
                            y: 13
                        }, {
                            x: 791,
                            y: 306
                        }, {
                            x: 791,
                            y: 599
                        }],
                        [{
                            x: 1135,
                            y: 13
                        }, {
                            x: 1135,
                            y: 306
                        }, {
                            x: 1135,
                            y: 599
                        }],
                        [{
                            x: 1144,
                            y: 13
                        }, {
                            x: 1144,
                            y: 306
                        }, {
                            x: 1144,
                            y: 599
                        }]
                    ],
                    miniPaytableGlobalCoverName: "miniPaytableGlobalCover",
                    miniPaytablesContainerName: "miniPaytableContainer",
                    miniPaytableClickableZonesName: "miniPaytableClickableZones",
                    miniPaytablePopupContainerName: "miniPaytablePopupContainer",
                    leftContainer: {
                        name: "miniPaytableLeftContainer",
                        x: 108
                    },
                    rightContainer: {
                        name: "miniPaytableRightContainer",
                        x: 443
                    },
                    symbolSpriteName: "miniPaytableSymbolImage",
                    symbolSettings: {
                        9: {
                            selectorPostfix: "s",
                            numbers: {
                                offsetX: 0,
                                offsetY: -20,
                                hDist: 49,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16696173
                                }
                            },
                            values: {
                                offsetX: 41,
                                offsetY: -20,
                                hDist: 49,
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
                                x: 65,
                                y: 120
                            },
                            additional: {
                                x: 70,
                                y: 170,
                                maxWidth: 290,
                                style: {
                                    font: "17pt futuraptmedium",
                                    fill: 16777215,
                                    align: "center",
                                    stroke: 3087887,
                                    strokeThickness: 2
                                },
                                localizationKey: "MINI_PAYTABLE_SCATTER_DESCRIPTION"
                            }
                        },
                        0: {
                            numbers: {
                                offsetX: 0,
                                offsetY: -20,
                                hDist: 49,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16696173
                                }
                            },
                            values: {
                                offsetX: 41,
                                offsetY: -20,
                                hDist: 49,
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
                                x: 65,
                                y: 120
                            },
                            additional: {
                                x: 70,
                                y: 170,
                                maxWidth: 290,
                                style: {
                                    font: "17pt futuraptmedium",
                                    fill: 16777215,
                                    align: "center",
                                    stroke: 3087887,
                                    strokeThickness: 2
                                },
                                localizationKey: "MINI_PAYTABLE_WILD_DESCRIPTION"
                            }
                        },
                        other: {
                            numbers: {
                                offsetX: 0,
                                offsetY: 0,
                                hDist: 49,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16696173
                                }
                            },
                            values: {
                                offsetX: 41,
                                offsetY: 0,
                                hDist: 49,
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
        1109: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "miniPaytableBg",
                            fullPath: e + "playarea/miniPaytableBg.png"
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
                                x: 100,
                                y: 50,
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
                                    x: 443,
                                    y: 107,
                                    contents: []
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "miniPaytableLeftContainer",
                                    x: 108,
                                    y: 107,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "miniPaytableSymbolImage",
                                        assetKey: "2",
                                        x: 61,
                                        y: 57,
                                        anchorX: .5,
                                        anchorY: .5
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
        1110: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Controller = nge.App.DjGameBase.Com.MiniPaytable.Controller.extend((function() {
                var e = this;
                this.updateCascade = function() {
                    var e = nge.localData.get("cascades.all"),
                        t = nge.localData.get("cascades.currentIndex");
                    void 0 !== e && void 0 !== t && (e = nge.localData.get("slotMachine.spinResultStage" + (t + 2))) && e.rows && this.setSlotMachineReelsSymbols(e.rows)
                }, this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("frostyFruits.slotMachineProcessCascades", e.updateCascade)
                }
            }))
        },
        1111: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile = {}
        },
        1112: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile.Controller = nge.App.DjGameBase.Com.MiniPaytable.Mobile.Controller.extend((function() {
                var e = this;
                this.updateCascade = function() {
                    var e = nge.localData.get("cascades.all"),
                        t = nge.localData.get("cascades.currentIndex");
                    void 0 !== e && void 0 !== t && (e = nge.localData.get("slotMachine.spinResultStage" + (t + 2))) && e.rows && this.setSlotMachineReelsSymbols(e.rows)
                }, this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("frostyFruits.slotMachineProcessCascades", e.updateCascade)
                }
            }))
        },
        1113: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile.Tpl = function() {
                var e = new nge.App[nge.appNS].Com.MiniPaytable.Tpl,
                    t = e.objects.contents.find((function(e) {
                        return "miniPaytableMainContainer" === e.name
                    }));
                return t.scaleX = .9, t.scaleY = .9, t.x = 40, t.y = 50, e
            }
        },
        1114: function(e, t) {
            nge.App[nge.appNS].Com.Popup = {}
        },
        1115: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                        type: mt.objects.BUTTON,
                        name: "okButton",
                        x: -3,
                        y: 211,
                        anchorX: .5,
                        anchorY: .5,
                        isVisible: !1,
                        pixelPerfectOver: !1,
                        pixelPerfectClick: !1,
                        class: "popupButton",
                        assetKey: "okButtonAsset"
                    },
                    t = {
                        color: 0,
                        a: 0,
                        showDuration: 300,
                        hideDuration: 250,
                        hideDelay: 250
                    },
                    n = {
                        font: "35pt futuraptheavy",
                        fill: 16777215,
                        stroke: 2253748,
                        strokeThickness: 6,
                        align: "center",
                        lineHeight: 48
                    };
                this.cfg.popups = {
                    freespinStartPopup: {
                        shadow: t,
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "popup_fs_appear",
                                loop: "popup_fs_loop",
                                hide: "popup_fs_disappear"
                            }
                        },
                        button: e,
                        content: [{
                            model: {
                                type: mt.objects.IMAGE,
                                assetKey: "popupCongratulationsText",
                                anchorX: .5,
                                anchorY: .5
                            },
                            followSlotName: "ft_congrats_text"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                anchorX: .5,
                                anchorY: .5,
                                size: 110,
                                maxWidth: 530,
                                assetKey: "orange_font"
                            },
                            dataKey: "freespinsCounter",
                            followSlotName: "ft_freespin_counter"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("FREE_GAMES_WITH_WIN_MULT"),
                                anchorX: .5,
                                anchorY: .5,
                                maxWidth: 420,
                                style: n
                            },
                            followSlotName: "ft_free_spins_text"
                        }]
                    },
                    freespinEndPopup: {
                        shadow: t,
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "popup_credits_appear",
                                loop: "popup_credits_loop",
                                hide: "popup_credits_disappear"
                            }
                        },
                        button: e,
                        content: [{
                            model: {
                                type: mt.objects.IMAGE,
                                assetKey: "popupCongratulationsText",
                                anchorX: .5,
                                anchorY: .5
                            },
                            followSlotName: "ft_congrats_text"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("TOTAL_WIN"),
                                anchorX: .5,
                                anchorY: .5,
                                maxWidth: 512,
                                style: n
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: mt.objects.BITMAP_TEXT,
                                text: "1234",
                                anchorX: .5,
                                anchorY: .5,
                                size: 95,
                                maxWidth: 530,
                                assetKey: "orange_font"
                            },
                            dataKey: "freespinEndPopupValue",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: "123",
                                anchorX: .5,
                                anchorY: .5,
                                maxWidth: 450,
                                style: n
                            },
                            dataKey: "freespinEndPopupFSValue",
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    additionalFreespinsPopup: {
                        shadow: t,
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "popup_credits_appear",
                                loop: "popup_credits_loop",
                                hide: "popup_credits_disappear"
                            }
                        },
                        button: e,
                        content: [{
                            model: {
                                type: mt.objects.IMAGE,
                                assetKey: "popupCongratulationsText",
                                anchorX: .5,
                                anchorY: .5
                            },
                            followSlotName: "ft_congrats_text"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                maxWidth: 512,
                                style: n
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                anchorX: .5,
                                anchorY: .5,
                                size: 95,
                                maxWidth: 530,
                                assetKey: "orange_font"
                            },
                            dataKey: "additionalFreespinValue",
                            followSlotName: "ft_credits_counter"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("ADDITIONAL_FREE_SPINS"),
                                anchorX: .5,
                                anchorY: .5,
                                maxWidth: 512,
                                style: n
                            },
                            followSlotName: "ft_credits_text"
                        }]
                    },
                    insufficientFundsPopup: {
                        shadow: {
                            color: 0,
                            a: .7,
                            showDuration: 300,
                            hideDuration: 250,
                            hideDelay: 250
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
                            type: mt.objects.BUTTON,
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
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("INSUFFICIENT_FUNDS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -45,
                                maxWidth: 670,
                                style: {
                                    font: "52pt futuraptheavy",
                                    fill: 16777215
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
                                    fill: 15720895,
                                    align: "center"
                                }
                            }
                        }]
                    }
                }
            }))
        },
        1116: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Tpl = function(e) {
                var t = e;
                return t || (t = nge.appPath + "img/"), (e = nge.App.DjGameBase.Com.Popup.Tpl(e)).assets.contents = [{
                    type: mt.assets.SPINE,
                    key: "animatedPopup",
                    spine: t + "spine/popup/animatedPopup.json"
                }, {
                    type: mt.assets.IMAGE,
                    key: "popupCongratulationsText",
                    fullPath: t + "playarea/congratulations.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "notificationPopupBackground",
                    fullPath: t + "playarea/notification_popup_bg.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "okButtonAsset",
                    width: 816,
                    height: 124,
                    frameWidth: 272,
                    frameHeight: 124,
                    fullPath: t + "playarea/okButtonAsset.png"
                }], e
            }
        },
        1117: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin = {}
        },
        1118: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Controller = nge.App.DjGameBase.Com.RegularWin.Controller.extend((function() {
                this.showWinlinesOnComplete = function() {
                    nge.observer.fire("slotmachine.tint.restore"), nge.observer.fire("slotMachine.blowCascadesStart", null, 0)
                }
            }))
        },
        1119: function(e, t) {
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
                                y: 70,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "c_font",
                                size: 120
                            }]
                        }]
                    }
                }
            }
        },
        1120: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Cfg = nge.App.DjGameBase.Com.RegularWin.Cfg.extend((function() {
                this.params = this.super.get(), this.params.regularProfile = "custom", this.params.turboProfile = "custom", this.params.profiles.custom = {
                    regularWinTextAnimationParams: this.params.DEFAULT_REGULAR_WIN_TEXT_ANIMATION_PARAMS,
                    fadeConfig: this.params.DEFAULT_FADE_CONFIG,
                    fadeDuration: 400,
                    fadeDurationQuick: 400,
                    onCompleteDelay: 100,
                    onCompleteDelayQuick: 100,
                    hideCounterOnSkip: !1,
                    odometerDurations: {
                        quickGrow: 400,
                        grow: 500,
                        still: 600,
                        stillStopped: 600
                    }
                }
            }))
        },
        1121: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Mobile = {}
        },
        1122: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Mobile.Tpl = function() {
                var e = new nge.App[nge.appNS].Com.RegularWin.Tpl,
                    t = e.objects.contents.find((function(e) {
                        return "regularWinContainer" === e.name
                    }));
                return t.x -= 60, t.y -= 5, e
            }
        },
        1123: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1124: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.DjGameBase.Com.SlotMachine.Cfg.extend((function() {
                this.params.additionalBlurs = [3, 5, 7, 9, 11], this.params.mw = 5, this.params.mh = 3, this.params.wildSymbol = "0", this.params.tintDark = 9863, this.params.tintNormal = 16777215, this.params.tintDarkAlpha = 1, this.params.tintNormalAlpha = 1, this.params.imageHeight = "original", this.params.imageWidth = "original", this.params.tweenDuration.blur = 85, this.params.th = [3, 3, 3, 3, 3], this.params.symbolsBlurKeys = "100 101 102 103 104 105 106 107 108 109".split(" "), this.params.tweenDuration.oldSymbols = 120, this.params.tweenDuration.newSymbols = 120, this.params.lastSymbolsBlurStaticKeys = [
                    ["7"],
                    ["8"],
                    ["9"],
                    ["7"],
                    ["7"]
                ], this.params.parentName = "slotMachineGameContainer", this.params.maskName = "slotMachineMaskContainer", this.params.recyclerView.enabled = !1, this.params.duration = {
                    blur: 85,
                    oldSymbols: 120,
                    newSymbols: 120
                }, this.params.freespinDuration = {
                    blur: 15,
                    oldSymbols: 15,
                    newSymbols: 15
                }, this.params.speedUpReelsFactor = 3
            }))
        },
        1125: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.DjGameBase.Com.SlotMachine.Controller.extend((function() {
                var e, t = this,
                    n = !1,
                    a = !1,
                    s = function() {
                        return nge.localData.get("freespin.inProgress")
                    };
                this.setSymbolsTintToDark = function() {
                    e.visible && 1 === e.alpha || (e.alpha = 0, e.visible = !0, nge.tween.add(e).to({
                        alpha: 1
                    }, 250, nge.Lib.Tween.Easing.Default, !0))
                }, this.setSymbolsTintToNormal = function() {
                    e.visible && 0 !== e.alpha && (e.alpha = 1, nge.tween.add(e).to({
                        alpha: 0
                    }, 500, nge.Lib.Tween.Easing.Default, !0, 800).onComplete.addOnce((function() {
                        e && (e.visible = !1)
                    })))
                }, this.resetTint = function() {
                    e.alpha = 0, e.visible = !1
                }, this.customSubscribe = function() {
                    t.super.customSubscribe(), nge.observer.add("slotMachine.animateSymbolBang", (function(e) {
                        t.view.animateSymbolBang(e)
                    })), nge.observer.add("cascade.appendSymbolsAnimationStart", (function(e) {
                        t.view.dropNewCascadeSymbol(e.symbol, e.symbolPosition.reel, e.symbolPosition.row, e.callback)
                    })), nge.observer.add("cascade.dropExistingSymbol", (function(e) {
                        t.view.dropExistingSymbol(e)
                    })), nge.observer.add("layersSwitcher.show", (function(e) {
                        var n = !0;
                        "game" !== e || "gameFreeSpin" !== a && "freespinEndPopup" !== a || (n = !1), t.view.showAllCracks(e, n), "gameFreeSpin" === e ? t.freespinSlotMachineAnimator.start() : "freespinEndPopup" === e && t.freespinSlotMachineAnimator.stop(), a = e
                    })), nge.observer.add("Transport.close", (function() {
                        a = !1, t.view.onTransportCloseHandler(), s() && t.freespinSlotMachineAnimator.stop()
                    })), nge.observer.add("slotMachine.spinComplete", (function() {
                        s() && t.freespinSlotMachineAnimator.start()
                    })), nge.observer.add("win.big.phase2", (function() {
                        t.resetTint()
                    })), nge.observer.add("frostyFruits.slotMachineProcessCascades", (function() {
                        s() && t.freespinSlotMachineAnimator.stop()
                    })), nge.observer.add("miniPaytable.shown", (function(e) {
                        s() && t.freespinSlotMachineAnimator.miniPaytableShown(e)
                    })), nge.observer.add("miniPaytable.hidden", (function() {
                        s() && t.freespinSlotMachineAnimator.miniPaytableHidden()
                    }))
                }, this.create = function() {
                    t.super.create(), t.view = t._service._view;
                    var a = nge.findOne("^slotMachineGlobalTint");
                    if (!nge.wrap.cache.hasTexture("slotMachineTintTexture")) {
                        var s = nge.Lib.Helper.create1PxPng(0, 15, 53, 178, !0);
                        nge.wrap.cache.addTexture("slotMachineTintTexture", PIXI.Texture.fromImage(s))
                    }
                    s = nge.Mlm.Objects.Image({
                        name: "slotMachineTint",
                        assetKey: "slotMachineTintTexture"
                    }), e = nge.objects.create(s, a, !0), nge.Lib.Helper.mobileAndTabletCheck() ? (e.x -= 10, e.y -= 10, e.width = 2320, e.height = 1300) : (e.width = 1920, e.height = 1080), e.visible = !1, t.lastElapsedTime = Date.now(), n || (t.freespinSlotMachineAnimator = t.getInstance("FreespinSlotMachineAnimator"), n = !0), t.freespinSlotMachineAnimator.create(t)
                }, this.update = function() {
                    if (t.freespinSlotMachineAnimator) {
                        var e = Date.now();
                        t.freespinSlotMachineAnimator.update(e - t.lastElapsedTime), t.lastElapsedTime = e
                    }
                }
            }))
        },
        1126: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.View = Class.extend((function() {
                var e, t, n, a, s, o, i = this,
                    r = {},
                    l = !1,
                    p = [-920, -680, -440];
                this.allTweens = [];
                var c = [],
                    m = 0,
                    g = 0;
                this._reelsSymbols = this._symbolSize = this._pool = this._cfg = null, this._speedReelsCustom = [], this.symbolBangAnimations = this.iceCracks = this.iceParticles = null;
                var u = function() {
                        return nge.localData.get("freespin.inProgress")
                    },
                    y = function() {
                        return u() ? "_fs" : ""
                    },
                    b = function(e, t, n, a, s, o) {
                        a = void 0 === a ? null : a, s = void 0 === s ? 1 : s, o = void 0 !== o && o, e = i.iceCracks[e][t], (t = a) && ((t = e.spine) && t.skeleton && t.skeleton.data.findSkin(a) ? (t.skeleton.setSkinByName(a), t = !0) : t = !1), t ? o ? e.spine.state.getCurrent(0).trackTime = .09 : e.setAnimationByMode({
                            name: n,
                            mode: nge.spine.FREEZE,
                            speed: s
                        }) : e.stop()
                    },
                    f = function() {
                        var t = e.get();
                        return t[nge.Lib.Helper.getRandomInt(0, t.length - 1)].name
                    },
                    h = function(e, t) {
                        e.y = (t.row + .5) * i._symbolSize.height, e.x = i._symbolSize.width / 2
                    },
                    d = function(e, t) {
                        return {
                            x: +e * i._symbolSize.width + i._symbolSize.width / 2,
                            y: (+t + .5) * i._symbolSize.height
                        }
                    },
                    x = function(e) {
                        var t = i._cfg.mh;
                        return i._cfg.mhv && (t = i._cfg.mhv[e]), t
                    },
                    _ = function(e, t) {
                        for (e = 0; e < i.allTweens.length; e++) {
                            var n = i.allTweens[e];
                            n && n.stop()
                        }
                        i.allTweens = [], c = [], m = 0, i._reelsSymbols = [], a = [], s = [], i._pool && !t && i._pool.reset()
                    },
                    S = function(e, t) {
                        var n = i._reelsSymbols;
                        if (!(n && n.length && n[e] && n[e][t])) return !1;
                        a[e].remove(n[e][t].texture), n[e][t].reset(), i._pool.store(!1, n[e][t]), n[e][t] = null
                    },
                    P = function() {
                        var e = i._reelsSymbols;
                        if (!e || !e.length) return !1;
                        for (var t = 0; t < e.length; t++)
                            for (var n = 0; n < e[t].length; n++) S(t, n);
                        return !0
                    },
                    T = function(e, t) {
                        nge.observer.fire("slotMachine.reel_" + t + ".animation.stop"), e && (function(e, t) {
                            for (var n, a = 0; a < i._reelsSymbols[t].length; a++)(n = i._reelsSymbols[t][a]) && (e.removeChild(n.texture), i._pool.store(!1, n));
                            i._reelsSymbols[t].splice(0, i._reelsSymbols[t].length)
                        }(e, t), c[t].forEach((function(e, n) {
                            i._reelsSymbols[t][n] = c[t][n]
                        }))), nge.observer.fire("slotMachine.reel_" + t + ".animation.stopped"), ++m === i._cfg.mw && (m = 0, i.allTweens = [], o.spinCompleteCallback())
                    },
                    A = function(e, t, n) {
                        c[t] = [];
                        for (var a = 0; a < i._cfg.mh; a++) {
                            var s = i._pool.release(n[a]);
                            if (c[t].push(s), s.texture.y = p[a], s.texture.x = i._symbolSize.width / 2, s.texture.z = a, e.addChild(s.texture), l) {
                                var o = s.getConfig().textureZ ? s.getConfig().textureZ : 0;
                                s.texture.z = o, s.texture.z += .01 * a
                            }
                        }
                        nge.observer.fire("slotMachine.reel.newSymbolsAppended", t)
                    },
                    E = function(e, t, n, a, s, o, r) {
                        var l = nge.tween.add(t).to(s, o);
                        return l.onComplete.addOnce((function() {
                            t.visible = !1
                        })), l.startCallback = function() {
                            l.start(), b(n, a, "out", "" + e + y()), u || i.iceParticles[n][a].setAnimationByMode(0, "sliding", nge.spine.HIDE)
                        }, l.rafDelay = nge.rafSetTimeout(l.startCallback, r), l
                    },
                    M = function(e, t, n, a, s, o, r, l) {
                        var p = nge.tween.add(t).to(s, o);
                        return p.rafDelay = nge.rafSetTimeout((function() {
                            p.start()
                        }), r), p.onComplete.addOnce((function() {
                            t.y = s.y;
                            var o = nge.tween.add(t);
                            u() ? o.to({
                                y: s.y + 50
                            }, 60, nge.Lib.Tween.Easing.Quadratic.Out).to({
                                y: s.y
                            }, 240, nge.Lib.Tween.Easing.Quadratic.In) : o.to({
                                y: s.y - 30
                            }, 60).to({
                                y: s.y
                            }, 60), o.onComplete.addOnce((function() {
                                t.y = s.y, l && l()
                            })), o.start(), nge.observer.fire("frostyFruits.sounds.playRandomSymbolDrop"), b(n, a, "in", "" + e + y()), "M09_000" === e && (g++, nge.observer.fire("frostyFruits.sounds.scatter." + g)), u() || i.iceParticles[n][a].setAnimationByMode(0, "landing", nge.spine.HIDE)
                        })), p
                    },
                    C = function(e, t) {
                        var n = function(n, a, s) {
                                if (n) {
                                    var o = n.texture;
                                    return E("M0" + n._symbolConfig.name + "_000", o, e, a, {
                                        y: o.y + 1200
                                    }, 350, t + s)
                                }
                            },
                            a = i._reelsSymbols[e],
                            s = n(a[0], 0, 300);
                        i.allTweens.push(s), s = n(a[1], 1, 150), i.allTweens.push(s), n = n(a[2], 2, 0), i.allTweens.push(n), nge.observer.fire("slotMachine.reelAnimationStart", e, t), nge.observer.fire("slotMachine.reel_" + e + ".animation.start", t)
                    },
                    j = function(e, t, n, a, s, o, i) {
                        var r = "M0" + e._symbolConfig.name + "_000";
                        e = e.texture;
                        var l = {
                            y: d(t, n).y
                        };
                        return {
                            movementTween: M(r, e, t, n, l, a, s + o, i)
                        }
                    },
                    v = function(e, t, n) {
                        var a = 0,
                            s = function() {
                                n && 3 == ++a && (nge.observer.fire("sound.reel_stop_" + e + ".play"), nge.rafSetTimeout(n, 1))
                            },
                            o = c[e][0];
                        o = j(o, e, 0, 350, t, 300, s), i.allTweens.push(o.movementTween), o = c[e][1], o = j(o, e, 1, 350, t, 150, s), i.allTweens.push(o.movementTween), o = c[e][2], o = j(o, e, 2, 350, t, 0, s), i.allTweens.push(o.movementTween)
                    },
                    I = function(e, t, n) {
                        return A(e, t, n), v(t, 250 * t + 250, (function() {
                            T(e, t)
                        })), !0
                    };
                this.createSlotMachine = function(r, p, c, m) {
                    for (i._cfg = r, o = p, m || (i._pool && i._pool.reset(), i._pool = i.getInstance("Pool")), p = (e = c).get(), c = 0; c < p.length; c++) p[c].textureZ && (l = !0);
                    for (_(r, m), t = nge.find("^" + i._cfg.parentName), n = nge.objects.create(new nge.Mlm.Objects.Folder), r = t.getData(), i._symbolSize = {
                            width: r.width / i._cfg.mw,
                            height: r.height / i._cfg.mh
                        }, r = nge.findOne("^slotMachineIceParticles", t), i.iceParticles = [], p = 0; p < i._cfg.mw; p++)
                        for (i.iceParticles[p] = [], c = 0; c < i._cfg.mh; c++) i.iceParticles[p][c] = nge.findOne("^smIceParticle" + p.toString() + c.toString(), r);
                    for (r = nge.findOne("^slotMachineIceCracks", t), i.iceCracks = [], p = 0; p < i._cfg.mw; p++)
                        for (i.iceCracks[p] = [], c = 0; c < i._cfg.mh; c++) i.iceCracks[p][c] = nge.findOne("^smIceCrack" + p.toString() + c.toString(), r);
                    for (r = nge.findOne("^slotMachineTopContainer", t), i.symbolBangAnimations = [], p = 0; p < i._cfg.mw; p++)
                        for (i.symbolBangAnimations[p] = [], c = 0; c < i._cfg.mh; c++) i.symbolBangAnimations[p][c] = nge.findOne("^smSymbolBang" + p.toString() + c.toString(), r);
                    for (t.add(n), p = n.parent.getData(), c = 0; c < i._cfg.mw; c++)(r = nge.objects.create(new nge.Mlm.Objects.Folder)).width = i._symbolSize.width, r.height = p.height, r.x = c * i._symbolSize.width, r.y = 0, i._cfg.rowsXoffset && i._cfg.rowsXoffset[c] && (r.x += i._cfg.rowsXoffset[c]), i._cfg.rowsYoffset && i._cfg.rowsYoffset[c] && (r.y += i._cfg.rowsYoffset[c]), n.add(r), a.push(r), i._reelsSymbols.push([]), s.push([]);
                    if (!m)
                        for (m = i._cfg.mw * (2 * i._cfg.mh + 1), r = 0; r < m; r++)(p = i.getInstance("Symbol")).init(!1, i._symbolSize, t), p.setView(i), i._pool.store(!1, p);
                    return !0
                }, this.fakeSpinsStart = function() {
                    for (var e = 0; e < i._cfg.mw; e++) C(e, 250 * e)
                }, this.reelSpins = function(e) {
                    g = 0, i.freespinSlotMachineAnimator.stop(), e = e.spinResult.columns;
                    for (var t = 0; t < i._cfg.mw; t++) I(a[t], t, e[t]);
                    return !0
                }, this.setSymbol = function(e) {
                    var t = e.coords[0],
                        n = e.coords[1];
                    if (e = e.key, S(t, n), e = i._pool.release(e), i._reelsSymbols[t][n] = e, h(e.texture, {
                            row: n
                        }), a[t].addChild(e.texture), i._displaySymbolCallback(e, a[t]), l) {
                        var s = e.getConfig().textureZ ? e.getConfig().textureZ : 0;
                        e.texture.z = s, e.texture.z += .01 * n, a[t].sort()
                    }
                }, this.displaySymbols = function(e, n) {
                    if (!t) return !1;
                    P(), i._customClearSymbols();
                    for (var s = 0; s < i._cfg.mw; s++) {
                        a[s].removeChildren();
                        for (var o = x(s), r = 0; r < o; r++) {
                            var p = i._pool.release(e[s][r]);
                            if (i._reelsSymbols[s][r] = p, h(p.texture, {
                                    row: r
                                }), a[s].addChild(p.texture), i._displaySymbolCallback(p, a[s], n, s, r), l) {
                                var c = p.getConfig().textureZ ? p.getConfig().textureZ : 0;
                                p.texture.z = c, p.texture.z += .01 * r
                            }
                        }
                        l && a[s].sort()
                    }
                    return !0
                }, this.getSymbolByPosition = function(e) {
                    return i._reelsSymbols[e.reel][e.row]
                }, this.getReels = function() {
                    return a
                }, this.speedUpReels = function() {
                    for (var e = 0; e < i.allTweens.length; e++) {
                        var t = i.allTweens[e];
                        t && (t.timeScale = i._cfg.speedUpReelsFactor, !t.isRunning && t.rafDelay && (nge.rafClearTimeout(t.rafDelay), delete t.rafDelay, t.startCallback ? t.startCallback() : t.start()))
                    }
                }, this.getRandomSymbolsTable = function() {
                    for (var e = [], t = 0; t < i._cfg.mw; t++) {
                        for (var n = [], a = x(t), s = 0; s < a; s++) {
                            var o = f();
                            n.push(o)
                        }
                        e.push(n)
                    }
                    return e
                }, this.animateSymbolBang = function(e) {
                    var t = e.symbolPosition.reel,
                        n = e.symbolPosition.row,
                        a = i.getSymbolByPosition(e.symbolPosition);
                    a && ("9" === a.getName() && g--, nge.observer.fire("slotMachine.animateSymbol", {
                        reel: t,
                        row: n,
                        mode: nge.spine.HIDE,
                        prefix: "_short"
                    }), nge.rafSetTimeout((function() {
                        i.symbolBangAnimations[t][n].setAnimationByMode(0, "bang", nge.spine.HIDE), nge.observer.fire("frostyFruits.sounds.playRandomSymbolExplosion"), nge.observer.fire("slotMachine.animateSymbolBangComplete", e.symbolPosition), b(t, n, "out", null)
                    }), +e.symbolPosition.reel + 500))
                }, this.holdSymbol = function(e, t) {}, this.unholdSymbol = function(e) {}, this.unholdAll = function() {
                    for (var e in r)
                        for (var t in r[e]) {
                            var n = t,
                                a = e;
                            r[a][n] && (r[a][n].destroy(!0), r[a][n] = null)
                        }
                }, this.holdReel = function(e) {}, this.unholdReel = function(e) {}, this.unholdAllReels = function() {}, this.destroySymbol = function(e, t) {
                    if (!i._reelsSymbols[e.reel][e.row]) return console.error("nge.Com.SlotMachine.View destroySymbol error: no symbol in this position"), !1;
                    var n = function() {},
                        a = i._reelsSymbols[e.reel][e.row];
                    return S(e.reel, e.row), nge.observer.fire("slotMachine.destroySymbolComplete", e), t || (t = n), t(a, e, n)
                }, this.appendSymbol = function(e, t, n) {
                    if (i._reelsSymbols[e.reel][e.row]) return console.error("nge.Com.SlotMachine.View appendSymbol error: symbol already exists in this position"), !1;
                    var s = a[e.reel];
                    if (t = i._pool.release(t), i._reelsSymbols[e.reel][e.row] = t, h(t.texture, e), s.addChildAt(t.texture), l) {
                        var o = t.getConfig().textureZ ? t.getConfig().textureZ : 0;
                        t.texture.z = o, t.texture.z += .01 * e.row, s.sort()
                    }
                    return n(t, e)
                }, this.dropNewCascadeSymbol = function(e, t, n, a) {
                    e = j(e, t, n, 150, 0, 0, a), i.allTweens.push(e.movementTween)
                }, this.dropExistingSymbol = function(e) {
                    var t = +e.reel,
                        n = +e.row,
                        a = function() {
                            0
                        };
                    e = nge.localData.get("cascades.all");
                    var s = nge.localData.get("cascades.currentIndex");
                    if ("none" === (e = e[s].fallMap)[t][n].type) {
                        s = function(e, n, s) {
                            nge.rafSetTimeout((function() {
                                var s = e + n.to,
                                    o = i._reelsSymbols[t][e];
                                i._reelsSymbols[t][s] = o, i._reelsSymbols[t][e] = !1, h(o.texture, {
                                    reel: t,
                                    row: s
                                }), s = function(e, t, n, a, s, o, r) {
                                    var l = d(n, a).y,
                                        p = {
                                            y: d(s, o).y
                                        };
                                    return t.y = l, l = nge.tween.add(t).to(p, 100, nge.Lib.Tween.Easing.Quadratic.In), b(n, a, "out", "" + e + y()), l.start(), l.onComplete.addOnce((function() {
                                        var n = nge.tween.add(t);
                                        u() ? n.to({
                                            y: p.y + 30
                                        }, 20, nge.Lib.Tween.Easing.Quadratic.Out).to({
                                            y: p.y
                                        }, 80, nge.Lib.Tween.Easing.Quadratic.In) : n.to({
                                            y: p.y - 10
                                        }, 20).to({
                                            y: p.y
                                        }, 20), n.onComplete.addOnce(r), n.start(), nge.observer.fire("frostyFruits.sounds.playRandomSymbolDrop"), b(s, o, "in", "" + e + y()), u() || i.iceParticles[s][o].setAnimationByMode(0, "landing", nge.spine.HIDE)
                                    })), l
                                }("M0" + o._symbolConfig.name + "_000", o.texture, t, e, t, s, a), i.allTweens.push(s)
                            }), 350 + 2 * s)
                        }, n = +n - 1;
                        for (var o = 1; 0 <= n; n--, o++) {
                            var r = e[t][n];
                            if ("drop" !== r.type) break;
                            s(n, r, o)
                        }
                        0
                    }
                }, this.customReelStartCallback = function(e, t, n, a) {
                    return {
                        tween: n,
                        startDelay: a
                    }
                }, this.isPassAdditionalLandingRule = function(e, t) {
                    return !0
                }, this.deactivate = function() {
                    _(i._cfg)
                }, this.destroy = function() {
                    _(i._cfg)
                }, this.destroyReelsContainer = function() {
                    P(), n.parent.removeChild(n), n.destroy(!0), n = null
                }, this.showAllCracks = function(e, t) {
                    for (var n = 0; n < i._reelsSymbols.length; n++)
                        for (var a = 0; a < i._reelsSymbols[n].length; a++) {
                            var s = i._reelsSymbols[n][a];
                            s && b(n, a, "in", "M0" + s._symbolConfig.name + "_000" + ("gameFreeSpin" === e ? "_fs" : ""), 1, t)
                        }
                }, this.hideCrack = function(e, t) {
                    i.iceCracks[e][t].setAnimationByMode(0, "out", nge.spine.HIDE)
                }, this.hideAllCracks = function() {
                    for (var e = 0; e < i.iceCracks.length; e++)
                        for (var t = 0; t < i.iceCracks[e].length; t++) i.hideCrack(e, t)
                }, this.reelSpinsFinishTweenOnUpdateCallback = this.reelSpinsStartTweenOnUpdateCallback = !1, this._getRandomSymbolName = f, this.customReelStopCallback = function(e, t) {}, this.changeBlursSpeed = function(e) {}, this.showAnimationSymbolsCover = function(e) {}, this.hideAnimationSymbolsCovers = function() {}, this.updateBlurs = function() {}, this.setNewReelsCfg = function(e) {}, this._customClearSymbols = function() {}, this._displaySymbolCallback = function(e, t, n, a, s) {
                    b(a, s, "in", "M0" + e._symbolConfig.name + "_000" + y())
                }, this.onTransportCloseHandler = function() {
                    g = 0, i.freespinSlotMachineAnimator.onTransportCloseHandler()
                }
            }))
        },
        1127: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Service = nge.App.DjGameBase.Com.SlotMachine.Service.extend((function() {
                var e = this;
                this.fakeSpinsStart = function() {
                    nge.observer.fire("slotMachine.spinStart"), nge.observer.fire("winlines.stopAnimation"), e._view.fakeSpinsStart()
                }, this.doSpin = function(t) {
                    e.super.doSpin(t), e._view.reelSpins(t)
                }
            }))
        },
        1128: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol = nge.Com.SlotMachine.Symbol.extend((function() {
                var e = this;
                this.customHideAnimation = this.fsSpineAnimationName = this.spineAnimationName = this.texture = null;
                var t, n = !1,
                    a = !1;
                this.spineAnimation = null;
                var s = 1,
                    o = 1,
                    i = function() {
                        e.texture && (e.texture.visible = !0), e.customHideAnimation && e.customHideAnimation(), e.stopAnimationsOnHideAnimation(), e.reset()
                    };
                this.getTextureAnimation = function() {}, this.reset = function() {
                    return e.super.reset(), !0
                }, this.resize = function(t, n) {
                    var a = nge.assets.getQualityFactor();
                    e.texture.scale.set(t / a, n / a), s = t, o = n
                }, this.setSymbolBase = function(t) {
                    e.super.setSymbolBase(t), n = !1, a && e._unsubscribe(), e.spineAnimation && (e.spineAnimation.stop(), e.spineAnimation = null), e._symbolConfig.spine ? (e.spineAnimationName = e._symbolConfig.spine.animation, e.fsSpineAnimationName = e._symbolConfig.spine.fsAnimation) : (e.spineAnimationName = null, e.fsSpineAnimationName = null)
                }, this.animate = function(t, s, o, i) {
                    return o = void 0 === o ? nge.spine.FREEZE : o, i = void 0 === i ? "" : i, e.texture && e.texture.parent ? (a || e._subscribe(), n || e.animationCreate(s), n = !0, e.textureAnimationShow(t, s, o, i), !0) : (console.warn("nge.Com.SlotMachine.Symbol.animate error", e._symbolConfig), !1)
                }, this.animationCreate = function() {
                    if (e._symbolConfig.spine) {
                        var n = nge.Mlm.Objects.Spine({
                            assetKey: e._symbolConfig.spine.atlas,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1
                        });
                        e.spineAnimation = nge.objects.create(n, t, !0), e.spineAnimation.x = e.texture.parent.x
                    }
                }, this.getSymbolWinAnimation = function() {
                    return e.spineAnimation
                }, this.animateSymbolLanding = function() {
                    throw Error("Not supported in this game")
                }, this.changeTint = function() {
                    throw Error("Not supported in this game")
                }, this.pause = function() {
                    e.spineAnimation && e.spineAnimation.stop()
                }, this.stopAnimationsOnHideAnimation = function() {
                    e.spineAnimation && e.spineAnimation._mode === nge.spine.LOOP && e.spineAnimation.stop(!0)
                }, this.changeTintOnHideAnimation = function() {
                    throw Error("Not supported in this game")
                }, this.textureAnimationShow = function(t, n, a, r) {
                    return a = void 0 === a ? nge.spine.FREEZE : a, r = void 0 === r ? "" : r, n ? i() : !!e.spineAnimation && (t = nge.localData.get("freespin.inProgress"), e.spineAnimation.scale.set(s, o), e.spineAnimation.play({
                        name: (t ? e.fsSpineAnimationName : e.spineAnimationName) + r,
                        mode: a,
                        x: e.texture.x + e.texture.parent.x,
                        y: e.texture.y,
                        z: e.texture.z + (e._symbolConfig.animationOnTop ? 500 : 0)
                    }), e.texture.parent.sort(), void(e.texture.visible = !1))
                }, this.customStopAnimation = null;
                var r = function() {
                    e.spineAnimation && (e.spineAnimation = e.spineAnimation.destroy(!0)), e.customStopAnimation && e.customStopAnimation(), n = !1
                };
                this.stop = function() {
                    return r(), !0
                }, this._subscribe = function() {
                    e.super._subscribe(), nge.observer.add("winlines.view.startHideAll", i, "slotMachine.symbol." + e._sid + ".hide"), nge.observer.add("winlines.stoppingAnimation.start", r, "slotMachine.symbol." + e._sid + ".stop"), a = !0
                }, this._unsubscribe = function() {
                    e.super._unsubscribe(), nge.observer.remove("winlines.view.startHideAll", !1, "slotMachine.symbol." + e._sid + ".hide"), nge.observer.remove("winlines.stoppingAnimation.start", !1, "slotMachine.symbol." + e._sid + ".stop"), a = !1
                }, this.init = function(n, a, s, o) {
                    return e.super.init(n, a, s, o), t = nge.findOne("^slotMachineSymbolWinContainer"), !0
                }
            }))
        },
        1129: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbols = nge.Com.SlotMachine.Symbols.extend((function() {
                this.items = [{
                    name: "0",
                    textureUrl: "M00_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M00_000"
                    },
                    repeat: 1
                }, {
                    name: "1",
                    textureUrl: "M01_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M01_000"
                    },
                    repeat: 1
                }, {
                    name: "2",
                    textureUrl: "M02_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M02_000"
                    },
                    repeat: 1
                }, {
                    name: "3",
                    textureUrl: "M03_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M03_000"
                    },
                    repeat: 1
                }, {
                    name: "4",
                    textureUrl: "M04_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M04_000"
                    },
                    repeat: 1
                }, {
                    name: "5",
                    textureUrl: "M05_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M05_000"
                    },
                    repeat: 1,
                    tintAlpha: .7
                }, {
                    name: "6",
                    textureUrl: "M06_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M06_000"
                    },
                    repeat: 1
                }, {
                    name: "7",
                    textureUrl: "M07_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M07_000"
                    },
                    repeat: 1
                }, {
                    name: "8",
                    textureUrl: "M08_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M08_000"
                    },
                    repeat: 1
                }, {
                    name: "9",
                    textureUrl: "M09_000.png",
                    spine: {
                        animation: "play_glow",
                        fsAnimation: "play",
                        atlas: "M09_000"
                    },
                    repeat: 1
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
                }]
            }))
        },
        1130: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.FreespinSlotMachineAnimator = nge.Com.Base.extend((function() {
                var e, t = this,
                    n = !1;
                this.speedUp = 1, this.animators = [], this.followData = null;
                var a = function(e) {
                        var t = +e.x,
                            n = +e.y;
                        return e.parent && (t += +(e = a(e.parent)).x, n += +e.y), {
                            x: t,
                            y: n
                        }
                    },
                    s = function(e, t, n, a, s, o) {
                        for (var i in this.target = e, this.timeline = n, this.duration = 0, this.dataKey = t, this.offset = +this.target.orig[this.dataKey], this.animationOffset = null, n) this.duration = +i;
                        this.originalDuration = +this.duration, this.loop = a, this.onComplete = s, this.coords = o
                    };
                s.prototype.animate = function(e) {
                    100 < e && (e = 16), this.duration -= e;
                    var t = this.originalDuration - this.duration;
                    if (0 > this.duration)
                        if (this.loop) this.duration = this.originalDuration;
                        else if (this.onComplete) return void this.onComplete();
                    for (var n in e = 0, this.timeline) {
                        if (0 < +n && t < +n) {
                            if (t = 100 * (t - e) / (+n - e) / 100, this.target.texture) {
                                var a = this.offset + +this.timeline[e],
                                    s = this.offset + +this.timeline[+n];
                                a = this.lerp(a, s, t), this.target.texture[this.dataKey] = a
                            }
                            this.target.spineAnimation && (this.target.orig.spine || (this.target.orig.spine = {}, this.target.orig.spine.x = this.target.spineAnimation.x, this.target.orig.spine.y = this.target.spineAnimation.y), a = this.target.orig.spine[this.dataKey] + +this.timeline[e], s = this.target.orig.spine[this.dataKey] + +this.timeline[+n], a = this.lerp(a, s, t), this.target.spineAnimation[this.dataKey] = a);
                            break
                        }
                        e = +n
                    }
                }, s.prototype.stop = function(e) {
                    this.duration = 0, this.offset = null, this.loop = !1, this.animationOffset = null, e && this.onComplete && this.onComplete()
                }, s.prototype.lerp = function(e, t, n) {
                    return (1 - n) * e + n * t
                }, s.prototype.bezier = function(e, t, n, a, s) {
                    return Math.pow(1 - s, 3) * e + 3 * Math.pow(1 - s, 2) * s * t + 3 * (1 - s) * Math.pow(s, 2) * n + Math.pow(s, 3) * a
                };
                var o = [
                    [{
                        name: "slot1",
                        x: {
                            0: 0,
                            1500: 6.422,
                            3e3: 0,
                            4300: 6.422,
                            6e3: 0
                        },
                        y: {
                            0: 0,
                            3e3: 7,
                            6e3: 0
                        }
                    }, {
                        name: "slot6",
                        x: {
                            0: -2.87,
                            200: -3.17,
                            1600: 3.24,
                            3e3: -2.87
                        },
                        y: {
                            0: .62,
                            400: 0,
                            3e3: 9.85,
                            6e3: .62
                        }
                    }, {
                        name: "slot11",
                        x: {
                            0: -.9,
                            500: -2.67,
                            2e3: 3.74,
                            3e3: -.9
                        },
                        y: {
                            0: 2,
                            800: 0,
                            3800: 10,
                            6e3: 2
                        }
                    }],
                    [{
                        name: "slot2",
                        x: {
                            0: -2.24,
                            300: -3.3,
                            1800: 3.11,
                            3e3: -2.24
                        },
                        y: {
                            0: -7.8,
                            700: 0,
                            3600: -9.8,
                            6e3: -7.8
                        }
                    }, {
                        name: "slot7",
                        x: {
                            0: -3.27,
                            1600: 3.14,
                            3e3: -3.27
                        },
                        y: {
                            0: 2.03,
                            800: 0,
                            3600: 9.85,
                            6e3: 2.03
                        }
                    }, {
                        name: "slot12",
                        x: {
                            0: -1.7,
                            700: -4.78,
                            2e3: 1.63,
                            3e3: -1.7
                        },
                        y: {
                            0: 4.8,
                            1400: 0,
                            4400: 9.8,
                            6e3: 4.8
                        }
                    }],
                    [{
                        name: "slot3",
                        x: {
                            0: -.44,
                            700: -3.38,
                            2e3: 3.04,
                            3e3: -.44
                        },
                        y: {
                            0: 4.6,
                            1200: 0,
                            4200: 9.8,
                            6e3: 4.6
                        }
                    }, {
                        name: "slot8",
                        x: {
                            0: .58,
                            800: -3.38,
                            2200: 3.04,
                            3e3: .58
                        },
                        y: {
                            0: 4.6,
                            1400: 0,
                            4200: 9.9,
                            6e3: 4.6
                        }
                    }, {
                        name: "slot13",
                        x: {
                            0: 1.02,
                            800: -3.38,
                            2200: 3.04,
                            3e3: 1.02
                        },
                        y: {
                            0: -4.8,
                            3e3: 5,
                            6e3: -4.8
                        }
                    }],
                    [{
                        name: "slot4",
                        x: {
                            0: .94,
                            800: -3.5,
                            2200: 2.91,
                            3e3: .94
                        },
                        y: {
                            0: 6.2,
                            1600: 0,
                            4400: 9.8,
                            6e3: 6.2
                        }
                    }, {
                        name: "slot9",
                        x: {
                            0: 1.9,
                            900: -3.02,
                            2400: 3.4,
                            3e3: 1.9
                        },
                        y: {
                            0: 7.94,
                            2e3: 0,
                            5e3: 9.85,
                            6e3: 7.94
                        }
                    }, {
                        name: "slot14",
                        x: {
                            0: -5.2,
                            1e3: 0,
                            2400: -6.41,
                            3e3: -5.2
                        },
                        y: {
                            0: 8.7,
                            2200: 0,
                            5e3: 9.8,
                            6e3: 8.7
                        }
                    }],
                    [{
                        name: "slot5",
                        x: {
                            0: 1.63,
                            1100: -4.1,
                            2500: 2.31,
                            3e3: 1.63
                        },
                        y: {
                            0: 9,
                            2300: 0,
                            5e3: 9.9,
                            6e3: 9
                        }
                    }, {
                        name: "slot10",
                        x: {
                            0: 2.67,
                            1200: -3.58,
                            2600: 2.83,
                            3e3: 2.67
                        },
                        y: {
                            0: 9.67,
                            3e3: 0,
                            5500: 9.85,
                            6e3: 9.67
                        }
                    }, {
                        name: "slot15",
                        x: {
                            0: 1.87,
                            1300: -4.54,
                            2700: 1.87
                        },
                        y: {
                            0: 9.8,
                            2800: 0,
                            6e3: 9.8
                        }
                    }]
                ];
                this.followObject = function(e, n) {
                    n = a(n), e = a(e);
                    var s = n.y - e.y;
                    t.followData.target.x += n.x - e.x, t.followData.target.y += s
                }, this.updateAnimators = function(a) {
                    if (n)
                        for (var s = t.speedUp, o = 0; o < t.animators.length; o++) 0 <= t.animators[o].duration ? (t.animators[o].animate(a * s), t.followData && t.followObject(t.followData.target, e._reelsSymbols[t.followData.reel][t.followData.row].texture)) : (t.animators[o].stop(), t.animators.splice(o, 1), o--)
                }, this.onTransportCloseHandler = function() {
                    n = !1, t.followData = null, t.animators = []
                }, this.start = function() {
                    t.animators = [];
                    for (var a = e._reelsSymbols, i = function() {
                            for (var e = 0; e < a.length; e++)
                                for (var n = 0; n < a[e].length; n++) {
                                    var i = a[e][n],
                                        r = o[e][n],
                                        l = new s(i, "x", r.x, !0, null, {
                                            reel: e,
                                            row: n
                                        });
                                    i = new s(i, "y", r.y, !0, null, {
                                        reel: e,
                                        row: n
                                    }), t.animators.push(l), t.animators.push(i)
                                }
                        }, r = 0; r < a.length; r++)
                        for (var l = 0; l < a[r].length; l++) {
                            var p = a[r][l],
                                c = o[r][l],
                                m = null;
                            r === a.length - 1 && l === a[r].length - 1 && (m = i), p.orig = {}, p.orig.x = p.texture.x, p.orig.y = p.texture.y;
                            var g = new s(p, "x", {
                                0: 0,
                                1e3: c.x[0]
                            }, !1, null, {
                                reel: r,
                                row: l
                            });
                            p = new s(p, "y", {
                                0: 0,
                                1e3: c.y[0]
                            }, !1, m, {
                                reel: r,
                                row: l
                            }), t.animators.push(g), t.animators.push(p)
                        }
                    n = !0
                }, this.miniPaytableShown = function(e) {
                    t.followData = e
                }, this.miniPaytableHidden = function() {
                    t.followData && (t.followData = null)
                }, this.stop = function() {
                    n = !1;
                    for (var e = 0; e < t.animators.length; e++) t.animators[e].stop();
                    t.animators = [], t.followData = null
                }, this.update = function(e) {
                    t.updateAnimators(e)
                }, this.create = function(n) {
                    (e = n.view).freespinSlotMachineAnimator = t
                }
            }))
        },
        1131: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.SPINE,
                            key: "M00_000",
                            spine: e + "spine/symbols/sm00_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "M01_000",
                            spine: e + "spine/symbols/sm01_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "M02_000",
                            spine: e + "spine/symbols/sm02_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "M03_000",
                            spine: e + "spine/symbols/sm03_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "M04_000",
                            spine: e + "spine/symbols/sm04_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "M05_000",
                            spine: e + "spine/symbols/sm05_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "M06_000",
                            spine: e + "spine/symbols/sm06_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "M07_000",
                            spine: e + "spine/symbols/sm07_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "M08_000",
                            spine: e + "spine/symbols/sm08_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "M09_000",
                            spine: e + "spine/symbols/sm09_000.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "symbol_ice_effects",
                            spine: e + "spine/slotMachine/ice_effects.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "symbol_ice_cracks",
                            spine: e + "spine/slotMachine/ice_cracks.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "symbol_bang",
                            spine: e + "spine/slotMachine/symbol_bang.json"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winline_chunk_0",
                            fullPath: e + "winlines/winline_chunk_0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winline_chunk_1",
                            fullPath: e + "winlines/winline_chunk_1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winline_chunk_2",
                            fullPath: e + "winlines/winline_chunk_2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winline_chunk_3",
                            fullPath: e + "winlines/winline_chunk_3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winline_chunk_4",
                            fullPath: e + "winlines/winline_chunk_4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winline_chunk_5",
                            fullPath: e + "winlines/winline_chunk_5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winline_chunk_6",
                            fullPath: e + "winlines/winline_chunk_6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winline_chunk_7",
                            fullPath: e + "winlines/winline_chunk_7.png"
                        }, {
                            type: mt.assets.SPINE,
                            key: "winline_ice_shards",
                            spine: e + "spine/ice_shards.json"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "slotMachineMaskContainer",
                            x: -100,
                            y: -20,
                            width: 1920,
                            height: 1e3,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "slotMachineTopContainer",
                                x: 100,
                                y: 30,
                                width: 1720,
                                height: 880,
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang00",
                                    assetKey: "symbol_bang",
                                    x: 170,
                                    y: 150,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang01",
                                    assetKey: "symbol_bang",
                                    x: 170,
                                    y: 443,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang02",
                                    assetKey: "symbol_bang",
                                    x: 170,
                                    y: 736,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang10",
                                    assetKey: "symbol_bang",
                                    x: 515,
                                    y: 150,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang11",
                                    assetKey: "symbol_bang",
                                    x: 515,
                                    y: 443,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang12",
                                    assetKey: "symbol_bang",
                                    x: 515,
                                    y: 736,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang20",
                                    assetKey: "symbol_bang",
                                    x: 860,
                                    y: 150,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang21",
                                    assetKey: "symbol_bang",
                                    x: 860,
                                    y: 443,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang22",
                                    assetKey: "symbol_bang",
                                    x: 860,
                                    y: 736,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang30",
                                    assetKey: "symbol_bang",
                                    x: 1205,
                                    y: 150,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang31",
                                    assetKey: "symbol_bang",
                                    x: 1205,
                                    y: 443,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang32",
                                    assetKey: "symbol_bang",
                                    x: 1205,
                                    y: 736,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang40",
                                    assetKey: "symbol_bang",
                                    x: 1550,
                                    y: 150,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang41",
                                    assetKey: "symbol_bang",
                                    x: 1550,
                                    y: 443,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "smSymbolBang42",
                                    assetKey: "symbol_bang",
                                    x: 1550,
                                    y: 736,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineSymbolWinContainer",
                                x: 100,
                                y: 30,
                                width: 1720,
                                height: 880
                            }, {
                                type: mt.objects.GROUP,
                                name: "winlinesContainer",
                                x: 0,
                                y: -10
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineGlobalTint"
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineGameContainer",
                                x: 100,
                                y: 30,
                                width: 1720,
                                height: 880
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineIceBackgroundEffects",
                                x: 100,
                                y: 30,
                                width: 1720,
                                height: 880,
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "slotMachineIceParticles",
                                    contents: [{
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle00",
                                        assetKey: "symbol_ice_effects",
                                        x: 170,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle01",
                                        assetKey: "symbol_ice_effects",
                                        x: 170,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle02",
                                        assetKey: "symbol_ice_effects",
                                        x: 170,
                                        y: 736,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle10",
                                        assetKey: "symbol_ice_effects",
                                        x: 515,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle11",
                                        assetKey: "symbol_ice_effects",
                                        x: 515,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle12",
                                        assetKey: "symbol_ice_effects",
                                        x: 515,
                                        y: 736,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle20",
                                        assetKey: "symbol_ice_effects",
                                        x: 860,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle21",
                                        assetKey: "symbol_ice_effects",
                                        x: 860,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle22",
                                        assetKey: "symbol_ice_effects",
                                        x: 860,
                                        y: 736,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle30",
                                        assetKey: "symbol_ice_effects",
                                        x: 1205,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle31",
                                        assetKey: "symbol_ice_effects",
                                        x: 1205,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle32",
                                        assetKey: "symbol_ice_effects",
                                        x: 1205,
                                        y: 736,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle40",
                                        assetKey: "symbol_ice_effects",
                                        x: 1550,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle41",
                                        assetKey: "symbol_ice_effects",
                                        x: 1550,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceParticle42",
                                        assetKey: "symbol_ice_effects",
                                        x: 1550,
                                        y: 736,
                                        isVisible: !1
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "slotMachineIceCracks",
                                    contents: [{
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack00",
                                        assetKey: "symbol_ice_cracks",
                                        x: 170,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack01",
                                        assetKey: "symbol_ice_cracks",
                                        x: 170,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack02",
                                        assetKey: "symbol_ice_cracks",
                                        x: 170,
                                        y: 736,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack10",
                                        assetKey: "symbol_ice_cracks",
                                        x: 515,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack11",
                                        assetKey: "symbol_ice_cracks",
                                        x: 515,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack12",
                                        assetKey: "symbol_ice_cracks",
                                        x: 515,
                                        y: 736,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack20",
                                        assetKey: "symbol_ice_cracks",
                                        x: 860,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack21",
                                        assetKey: "symbol_ice_cracks",
                                        x: 860,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack22",
                                        assetKey: "symbol_ice_cracks",
                                        x: 860,
                                        y: 736,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack30",
                                        assetKey: "symbol_ice_cracks",
                                        x: 1204,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack31",
                                        assetKey: "symbol_ice_cracks",
                                        x: 1204,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack32",
                                        assetKey: "symbol_ice_cracks",
                                        x: 1204,
                                        y: 736,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack40",
                                        assetKey: "symbol_ice_cracks",
                                        x: 1545,
                                        y: 150,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack41",
                                        assetKey: "symbol_ice_cracks",
                                        x: 1545,
                                        y: 443,
                                        isVisible: !1
                                    }, {
                                        type: mt.objects.SPINE,
                                        name: "smIceCrack42",
                                        assetKey: "symbol_ice_cracks",
                                        x: 1545,
                                        y: 736,
                                        isVisible: !1
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1132: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Mobile = {}
        },
        1133: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Mobile.Tpl = function() {
                var e = new nge.App[nge.appNS].Com.SlotMachine.Tpl,
                    t = e.objects.contents.find((function(e) {
                        return "slotMachineMaskContainer" === e.name
                    }));
                return t.scaleX = .9, t.scaleY = .9, t.x = -60, t.y = 30, (t = t.contents.find((function(e) {
                    return "slotMachineGlobalTint" === e.name
                }))).x = -40, t.y = -54, e
            }
        },
        1134: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation = {}
        },
        1135: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation.Cfg = Class.extend((function() {
                this.singleton = !0, this.cfg = {
                    idleAnimationTime: 7e3,
                    spinButtonAnimation: "spinButtonAnimation",
                    idleAnimationName: "spin_btn_idle",
                    pressAnimationName: "spin_btn_press_fx",
                    avaliableIdleLayers: ["gameFreeSpin", "game"],
                    avaliableIdleState: ["play"],
                    spinButtonAnimationName: "spin_button_fx",
                    spinPanelsContainerName: "UISpinPanelsContainer"
                }, this.get = function() {
                    return this.cfg
                }
            }))
        },
        1136: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation.Controller = nge.Com.Base.extend((function() {
                var e = this,
                    t = !1;
                this.spinButtonAnimation = this.cfg = null, this.stateCreated = function(e) {
                    this.availableIdleAnimation = this.cfg.avaliableIdleState.includes(e)
                }, this.onLayerSwitcherShowHandler = function(t) {
                    e.availableIdleAnimation = e.cfg.avaliableIdleLayers.includes(t)
                }, this.playPressAnimation = function() {
                    e.spinButtonAnimation.setAnimationByName(0, e.cfg.pressAnimationName, !1)
                }, this.playIdleAnimation = function() {
                    e.spinButtonAnimation.setAnimationByName(0, e.cfg.idleAnimationName, !0)
                }, this.startTimer = function() {
                    e.availableIdleAnimation && (e.rafTime = nge.rafSetTimeout((function() {
                        e.playIdleAnimation()
                    }), e.cfg.idleAnimationTime))
                }, this.onSpinCommandHandler = function() {
                    e.playPressAnimation()
                }, this.onTransportClose = function() {
                    e.rafTime && (nge.rafClearTimeout(e.rafTime), delete e.rafTime), e.availableIdleAnimation = !1, e.spinButtonAnimation.stop()
                }, this.onSpinButtonStateChanged = function(t, n) {
                    e.rafTime && (nge.rafClearTimeout(e.rafTime), delete e.rafTime), t && n && e.startTimer()
                }, this.subscribe = function() {
                    nge.observer.add("slotMachine.spinCommand", e.onSpinCommandHandler), nge.observer.add("spinButton.stateChanged", (function(t) {
                        e.onSpinButtonStateChanged(t.isSpin, t.isEnabled)
                    })), nge.observer.add("layersSwitcher.show", e.onLayerSwitcherShowHandler), nge.observer.add("StatesManager.create.end", e.stateCreated), nge.observer.add("Transport.close", e.onTransportClose)
                }, this.create = function() {
                    if (!nge.Lib.Helper.mobileAndTabletCheck() && (t || (e.subscribe(), t = !0), e.cfg = e.getInstance("Cfg").get(), e.spinButtonAnimation = nge.findOne("^" + e.cfg.spinButtonAnimation), !e.spinButtonAnimation)) throw Error("Can't find spine object with name: " + e.cfg.spinButtonAnimation)
                }
            }))
        },
        1137: function(e, t) {
            nge.App[nge.appNS].Com.SpinButtonAnimation.Tpl = function() {
                return {
                    assets: {},
                    objects: {}
                }
            }
        },
        1138: function(e, t) {
            nge.App[nge.appNS].Com.Winlines = {}
        },
        1139: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Cfg = nge.App.DjGameBase.Com.Winlines.Cfg.extend((function() {
                this.linesType = "chunk_lines", this.linesContainerName = "winlinesContainer", this.animationAllDuration = 0, this.subcycles = 1, this.symbolSpineModeAll = nge.spine.LOOP, this.symbolSpineModeBonus = this.symbolSpineModeByOne = nge.spine.FREEZE, this.animationTimings = {
                    appear: 266,
                    still: 468,
                    disappear: 266
                }, this.particleElements = {
                    containerName: "winlinesContainer",
                    poolCount: 15,
                    model: {
                        name: "winline_ice_shards",
                        assetKey: "winline_ice_shards",
                        isVisible: !1
                    },
                    animationName: "ice_shards",
                    starter: {
                        x: [-14],
                        y: [90, 390, 723]
                    },
                    line: {
                        x: [348, 690, 1042, 1394],
                        y: [90, 390, 690]
                    },
                    slash_up: {
                        x: [348, 690, 1042, 1394],
                        y: [246, 549]
                    },
                    slash_up_large: {
                        x: [348, 690, 1042, 1394],
                        y: [690]
                    },
                    slash_down: {
                        x: [348, 690, 1042, 1394],
                        y: [246, 549]
                    },
                    slash_down_large: {
                        x: [348, 690, 1042, 1394],
                        y: [90]
                    },
                    cross: {
                        x: [348, 690, 1042, 1394],
                        y: [246, 549]
                    },
                    ender: {
                        x: [1756],
                        y: [90, 390, 690]
                    }
                }, this.lineElements = {
                    starter: {
                        name: "winline_chunk_5",
                        objs: null,
                        x: [31],
                        y: [122, 423, 724]
                    },
                    line: {
                        name: "winline_chunk_2",
                        objs: null,
                        x: [246, 587, 926, 1267],
                        y: [106, 407, 707]
                    },
                    slash_up: {
                        name: "winline_chunk_1",
                        objs: null,
                        x: [265, 604, 943, 1282],
                        y: [172, 473]
                    },
                    slash_up_large: {
                        name: "winline_chunk_7",
                        objs: null,
                        x: [272, 612, 952, 1292],
                        y: [172]
                    },
                    slash_down: {
                        name: "winline_chunk_3",
                        objs: null,
                        x: [261, 600, 939, 1278],
                        y: [176, 476]
                    },
                    slash_down_large: {
                        name: "winline_chunk_6",
                        objs: null,
                        x: [248, 591, 931, 1272],
                        y: [183]
                    },
                    cross: {
                        name: "winline_chunk_0",
                        objs: null,
                        x: [261, 600, 939, 1279],
                        y: [172, 472]
                    },
                    ender: {
                        name: "winline_chunk_4",
                        objs: null,
                        x: [1637],
                        y: [116, 418, 717]
                    }
                }
            }))
        },
        1140: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Controller = nge.App.DjGameBase.Com.Winlines.Controller.extend((function() {
                var e = this,
                    t = function(t) {
                        e.cfg.animationAllDuration = t
                    },
                    n = function() {
                        e.cfg.animationAllDuration = nge.localData.get("frostyFruits.winlines.allRegularDuration")
                    };
                this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("winlines.changeAllDuration", t), nge.observer.add("Transport.close", n)
                }, this.create = function() {
                    e.super.create(), nge.localData.set("frostyFruits.winlines.allRegularDuration", 1e3), nge.localData.set("frostyFruits.winlines.allBigWinDuration", 900)
                }
            }))
        },
        1141: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText = {}
        },
        1142: function(e, t) {
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
                                y: -225,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "c_font",
                                size: 108
                            }, {
                                type: mt.objects.BITMAP_TEXT,
                                name: "lineWinAmount1",
                                isVisible: !1,
                                x: 0,
                                y: 70,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "c_font",
                                size: 108
                            }, {
                                type: mt.objects.BITMAP_TEXT,
                                name: "lineWinAmount2",
                                isVisible: !1,
                                x: 0,
                                y: 365,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "c_font",
                                size: 108
                            }]
                        }]
                    }
                }
            }
        },
        1143: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Cfg = nge.App.DjGameBase.Com.WinlinesText.Cfg.extend((function() {
                this.params = this.super.get(), this.params.winlinesTextContainerName = "winlinesTextContainer"
            }))
        },
        1144: function(e, t) {
            nge.App[nge.appNS].Com.WinField = {}
        },
        1145: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Controller = nge.App.DjGameBase.Com.WinField.Controller.extend((function() {
                this.preWin = function() {}, this.showVFX = function() {
                    var e = nge.localData.get("slotMachine");
                    if (e) {
                        for (var t = nge.localData.get("cascades.all"), n = nge.localData.get("cascades.currentIndex"), a = 0, s = 0; s <= n && t.length; s++) a += t[s].totalWin;
                        nge.localData.get("freespin.inProgress") && (a = +e.totalBonusWin - +e.slotWin.totalWin + a), n === t.length - 1 && (nge.localData.get("freespin.inProgress") ? (a !== +e.totalBonusWin && console.log("TotalWin values didn't match (1) - " + a + ", (2) - " + e.totalBonusWin), a = e.totalBonusWin) : (a !== +e.slotWin.totalWin && console.log("TotalWin values didn't match (1) - " + a + ", (2) - " + e.slotWin.totalWin), a = e.slotWin.totalWin)), e = nge.Lib.Money.toCoins(a), this.setText(e)
                    }
                }
            }))
        },
        1146: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Mobile = {}
        },
        1147: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Mobile.Controller = nge.App.DjGameBase.Com.WinField.Mobile.Controller.extend((function() {
                this.preWin = function() {}, this.showVFX = function() {
                    var e = nge.localData.get("slotMachine");
                    if (e) {
                        for (var t = nge.localData.get("cascades.all"), n = nge.localData.get("cascades.currentIndex"), a = 0, s = 0; s <= n && t.length; s++) a += t[s].totalWin;
                        nge.localData.get("freespin.inProgress") && (a = +e.totalBonusWin - +e.slotWin.totalWin + a), n === t.length - 1 && (nge.localData.get("freespin.inProgress") ? (a !== +e.totalBonusWin && console.log("TotalWin values didn't match (1) - " + a + ", (2) - " + e.totalBonusWin), a = e.totalBonusWin) : (a !== +e.slotWin.totalWin && console.log("TotalWin values didn't match (1) - " + a + ", (2) - " + e.slotWin.totalWin), a = e.slotWin.totalWin)), e = nge.Lib.Money.toCoins(a), this.setText(e)
                    }
                }
            }))
        },
        1148: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1149: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1150: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = nge.appPath + "img/demo/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton",
                            fullPath: e + "demoPlayButton.png",
                            frameWidth: 240
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenArrow",
                            fullPath: e + "introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameIntroScreen",
                            fullPath: e + "frameIntroScreen.png"
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
                                    x: 959,
                                    y: 901,
                                    maxWidth: 180,
                                    style: {
                                        font: "40pt futuraptheavy",
                                        fill: 16777215,
                                        align: "center"
                                    }
                                }, {
                                    type: mt.objects.BUTTON,
                                    assetKey: "demoPlayButton",
                                    name: "demoPlayButton",
                                    x: 838,
                                    y: 845,
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
                                text: nge.i18n.get("FROSTY_FRUITS_IS_A_TUMBLING_REEL"),
                                maxWidth: 1200,
                                anchorX: .5,
                                anchorY: .5,
                                x: 959,
                                y: 710,
                                style: {
                                    font: "52pt futuraptheavy",
                                    fill: 5962750,
                                    align: "center",
                                    shadowColor: 205134,
                                    shadowOffsetY: 5,
                                    class: "coloredText",
                                    lineHeight: 85
                                }
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenArrow",
                                assetKey: "introScreenArrow",
                                x: 748,
                                y: 990
                            }, {
                                type: mt.objects.IMAGE,
                                name: "frameIntroScreen",
                                assetKey: "frameIntroScreen",
                                x: 747,
                                y: 986
                            }, {
                                type: mt.objects.TEXT,
                                name: "introScreenTextBottom",
                                text: "show_next_time",
                                style: {
                                    font: "28pt futuraptheavy",
                                    fill: 16777215
                                },
                                anchorY: .5,
                                maxWidth: 380,
                                x: 788,
                                y: 1001
                            }, {
                                type: mt.objects.BUTTON,
                                name: "autoStart",
                                assetKey: "areaEmpty",
                                class: "autoStartCheckBox",
                                alpha: 0,
                                pixelPerfectClick: 0,
                                pixelPerfectOver: 0,
                                anchorX: .5,
                                anchorY: .5,
                                width: 420,
                                height: 36,
                                scaleX: 420,
                                scaleY: 34,
                                x: 946,
                                y: 996,
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
        1151: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Ui();
                e.styles[".titleButtonStyle"].style.font = "24pt futuraptheavy", e.styles[".titleButtonStyle"].style.fill = 405901, e.styles[".titleButtonStyle"].style.stroke = 903679, e.styles[".titleButtonStyle"].style.strokeThickness = 4, e.styles[".titleButtonStyle"].style.lineHeight = 30, e.styles[".titleTextStyle"].style.font = "18pt futuraptheavy", e.styles[".titleTextStyle"].style.fill = 8182783, e.styles[".titleTextStyle"].style.stroke = 4204, e.styles[".titleTextStyle"].style.strokeThickness = 4;
                var t = nge.Lib.Helper.customRecursiveFind("name", "UISpinPanelsContainer", "contents", e.objects, !1, !0, !1);
                return t && t.contents.unshift({
                    type: mt.objects.SPINE,
                    assetKey: "spinButtonAnimation",
                    name: "spinButtonAnimation",
                    anchorX: .5,
                    anchorY: .5,
                    y: -1,
                    isVisible: !1
                }), ["UICointainer"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) + 20)
                })), "winAreaPlate totalWinPlate coinValueBg cashBetContainerBg balanceCoinsContainerBg balanceContainerPlate".split(" ").forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) - 3)
                })), ["coinPlusButton", "betPlusButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = +t.x - 4)
                })), ["buttonLinesPlate", "framInfoContainerBg"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) - 1)
                })), "winNumber creditsWinNumber creditsTotalWinNumber totalWinNumber linesNumber coinValueNumber totalBetCoinsNumber totalBetNumber balanceCoinNumber balanceNumber".split(" ").forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) + 1)
                })), ["autospinAmountSetterPanel"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) - 4)
                })), ["autoButtonButton", "turboModeUIButtonButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) - 1)
                })), e
            }
        },
        1152: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.BetSettings = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.BetSettings();
                e.assets.contents.push({
                    type: mt.assets.IMAGE,
                    key: "containerBg1",
                    fullPath: nge.appPath + "img/playarea/containerBg1.png"
                });
                var t = nge.Lib.Helper.customRecursiveFind("name", "betInCoinContainerBg", "contents", e.objects, !1, !0, !1);
                return t && (t.assetKey = "containerBg1"), t.y = (+t.y || 0) - 12, e
            }
        },
        1153: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Help = function() {
                var e = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    t = {
                        font: "30pt futuraptmedium",
                        fill: 16777215,
                        align: "center"
                    },
                    n = {
                        font: "40pt futuraptmedium",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 45
                    },
                    a = {
                        font: "44pt futuraptmedium",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 55
                    },
                    s = {
                        font: "30pt futuraptmedium",
                        fill: 16696173
                    },
                    o = {
                        font: "30pt futuraptmedium",
                        fill: 16777215
                    },
                    i = {
                        font: "30pt futuraptmedium",
                        fill: 15655103
                    },
                    r = nge.appPath + "img/",
                    l = nge.appPath + "img/help/";
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
                            key: "page0image0",
                            fullPath: l + "page0image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image1",
                            fullPath: l + "page0image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image2",
                            fullPath: l + "page0image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image3",
                            fullPath: l + "page0image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image4",
                            fullPath: l + "page0image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image5",
                            fullPath: l + "page0image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image6",
                            fullPath: l + "page0image6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image0",
                            fullPath: l + "page1image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image1",
                            fullPath: l + "page1image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image2",
                            fullPath: l + "page1image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image3",
                            fullPath: l + "page1image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image0",
                            fullPath: l + "page2image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image1",
                            fullPath: l + "page2image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image2",
                            fullPath: l + "page2image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image3",
                            fullPath: l + "page2image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3image0",
                            fullPath: r + "atlases/page3image0.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3image1",
                            fullPath: r + "atlases/page3image1.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image0",
                            fullPath: l + "page6image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image1",
                            fullPath: l + "page6image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image2",
                            fullPath: l + "page6image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image3",
                            fullPath: l + "page6image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image4",
                            fullPath: l + "page6image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image5",
                            fullPath: l + "page6image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image6",
                            fullPath: l + "page6image6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image7",
                            fullPath: l + "page6image7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image8",
                            fullPath: l + "page6image8.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image9",
                            fullPath: l + "page6image9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image10",
                            fullPath: l + "page6image10.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image11",
                            fullPath: l + "page6image11.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image12",
                            fullPath: l + "page6image12.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image13",
                            fullPath: l + "page6image13.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image14",
                            fullPath: l + "page6image14.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image15",
                            fullPath: l + "page6image15.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image16",
                            fullPath: l + "page6image16.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image17",
                            fullPath: l + "page6image17.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image18",
                            fullPath: l + "page6image18.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image19",
                            fullPath: l + "page6image19.png"
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
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image0",
                                        assetKey: "page0image0",
                                        x: 254,
                                        y: 154
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image1",
                                        assetKey: "page0image1",
                                        x: 1036,
                                        y: 159
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image2",
                                        assetKey: "page0image2",
                                        x: 580,
                                        y: 720
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image3",
                                        assetKey: "page0image3",
                                        x: 735,
                                        y: 720
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image4",
                                        assetKey: "page0image4",
                                        x: 887,
                                        y: 720
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image6",
                                        assetKey: "page0image6",
                                        x: 1045,
                                        y: 724
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image5",
                                        assetKey: "page0image5",
                                        x: 1200,
                                        y: 724
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text0",
                                        text: "SUBSTITUTES_FOR_ALL",
                                        style: t,
                                        x: 498,
                                        y: 644,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 750,
                                        lineHeight: 22
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text1",
                                        text: "3_OR_MORE_SYMBOLS",
                                        style: t,
                                        x: 1290,
                                        y: 644,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 750,
                                        lineHeight: 22
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text1",
                                        text: "15_SPINS_WITH",
                                        style: t,
                                        x: 960,
                                        y: 886,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 750,
                                        lineHeight: 22
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: s,
                                        x: 738,
                                        y: 340,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: s,
                                        x: 738,
                                        y: 393,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: s,
                                        x: 738,
                                        y: 445,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: s,
                                        x: 1528,
                                        y: 340,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: s,
                                        x: 1528,
                                        y: 393,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: s,
                                        x: 1528,
                                        y: 445,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableWild5",
                                        class: "ps0-5",
                                        style: o,
                                        x: 778,
                                        y: 340,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableWild4",
                                        class: "ps0-4",
                                        style: o,
                                        x: 778,
                                        y: 393,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableWild3",
                                        class: "ps0-3",
                                        style: o,
                                        x: 778,
                                        y: 445,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableBonus5",
                                        class: "ps9s-5",
                                        style: o,
                                        x: 1565,
                                        y: 340,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableBonus4",
                                        class: "ps9s-4",
                                        style: o,
                                        x: 1565,
                                        y: 393,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableBonus3",
                                        class: "ps9s-3",
                                        style: o,
                                        x: 1565,
                                        y: 445,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
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
                                        x: 397,
                                        y: 164
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image1",
                                        assetKey: "page1image1",
                                        x: 971,
                                        y: 153
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image2",
                                        assetKey: "page2image2",
                                        x: 384,
                                        y: 524
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image3",
                                        assetKey: "page2image3",
                                        x: 990,
                                        y: 520
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: s,
                                        x: 748,
                                        y: 285,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: s,
                                        x: 748,
                                        y: 338,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: s,
                                        x: 748,
                                        y: 392,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: s,
                                        x: 1328,
                                        y: 285,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: s,
                                        x: 1328,
                                        y: 338,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: s,
                                        x: 1328,
                                        y: 392,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "5",
                                        style: s,
                                        x: 748,
                                        y: 618,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: s,
                                        x: 748,
                                        y: 670,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: s,
                                        x: 748,
                                        y: 724,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "5",
                                        style: s,
                                        x: 1328,
                                        y: 618,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: s,
                                        x: 1328,
                                        y: 670,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: s,
                                        x: 1328,
                                        y: 724,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableSeven5",
                                        type: mt.objects.TEXT,
                                        class: "ps1-5",
                                        style: o,
                                        x: 785,
                                        y: 285,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableSeven4",
                                        type: mt.objects.TEXT,
                                        class: "ps1-4",
                                        style: o,
                                        x: 785,
                                        y: 338,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableSeven3",
                                        type: mt.objects.TEXT,
                                        class: "ps1-3",
                                        style: o,
                                        x: 785,
                                        y: 392,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableBell5",
                                        type: mt.objects.TEXT,
                                        class: "ps4-5",
                                        style: o,
                                        x: 1364,
                                        y: 285,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableBell4",
                                        type: mt.objects.TEXT,
                                        class: "ps4-4",
                                        style: o,
                                        x: 1364,
                                        y: 338,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableBell3",
                                        type: mt.objects.TEXT,
                                        class: "ps4-3",
                                        style: o,
                                        x: 1364,
                                        y: 392,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableWatermelon5",
                                        type: mt.objects.TEXT,
                                        class: "ps3-5",
                                        style: o,
                                        x: 785,
                                        y: 618,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableWatermelon4",
                                        type: mt.objects.TEXT,
                                        class: "ps3-4",
                                        style: o,
                                        x: 785,
                                        y: 670,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableWatermelon3",
                                        type: mt.objects.TEXT,
                                        class: "ps3-3",
                                        style: o,
                                        x: 785,
                                        y: 724,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableStrawbery5",
                                        type: mt.objects.TEXT,
                                        class: "ps2-5",
                                        style: o,
                                        x: 1364,
                                        y: 618,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableStrawbery4",
                                        type: mt.objects.TEXT,
                                        class: "ps2-4",
                                        style: o,
                                        x: 1364,
                                        y: 670,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableStrawbery3",
                                        type: mt.objects.TEXT,
                                        class: "ps2-3",
                                        style: o,
                                        x: 1364,
                                        y: 724,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image0",
                                        assetKey: "page2image0",
                                        x: 389,
                                        y: 173
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image1",
                                        assetKey: "page2image1",
                                        x: 988,
                                        y: 177
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image2",
                                        assetKey: "page1image2",
                                        x: 393,
                                        y: 521
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image3",
                                        assetKey: "page1image3",
                                        x: 982,
                                        y: 517
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "5",
                                        style: s,
                                        x: 748,
                                        y: 285,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: s,
                                        x: 748,
                                        y: 338,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: s,
                                        x: 748,
                                        y: 392,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "5",
                                        style: s,
                                        x: 1328,
                                        y: 285,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: s,
                                        x: 1328,
                                        y: 338,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: s,
                                        x: 1328,
                                        y: 392,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "5",
                                        style: s,
                                        x: 748,
                                        y: 618,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: s,
                                        x: 748,
                                        y: 670,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: s,
                                        x: 748,
                                        y: 724,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "5",
                                        style: s,
                                        x: 1328,
                                        y: 618,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: s,
                                        x: 1328,
                                        y: 670,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: s,
                                        x: 1328,
                                        y: 724,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableOrange5",
                                        type: mt.objects.TEXT,
                                        class: "ps7-5",
                                        style: o,
                                        x: 785,
                                        y: 285,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableOrange4",
                                        type: mt.objects.TEXT,
                                        class: "ps7-4",
                                        style: o,
                                        x: 785,
                                        y: 338,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableOrange3",
                                        type: mt.objects.TEXT,
                                        class: "ps7-3",
                                        style: o,
                                        x: 785,
                                        y: 392,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableLemon5",
                                        type: mt.objects.TEXT,
                                        class: "ps5-5",
                                        style: o,
                                        x: 1364,
                                        y: 285,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableLemon4",
                                        type: mt.objects.TEXT,
                                        class: "ps5-4",
                                        style: o,
                                        x: 1364,
                                        y: 338,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableLemon3",
                                        type: mt.objects.TEXT,
                                        class: "ps5-3",
                                        style: o,
                                        x: 1364,
                                        y: 392,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableCherry5",
                                        type: mt.objects.TEXT,
                                        class: "ps8-5",
                                        style: o,
                                        x: 785,
                                        y: 618,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableCherry4",
                                        type: mt.objects.TEXT,
                                        class: "ps8-4",
                                        style: o,
                                        x: 785,
                                        y: 670,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytableCherry3",
                                        type: mt.objects.TEXT,
                                        class: "ps8-3",
                                        style: o,
                                        x: 785,
                                        y: 724,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytablePlum5",
                                        type: mt.objects.TEXT,
                                        class: "ps6-5",
                                        style: o,
                                        x: 1364,
                                        y: 618,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytablePlum4",
                                        type: mt.objects.TEXT,
                                        class: "ps6-4",
                                        style: o,
                                        x: 1364,
                                        y: 670,
                                        anchorY: .5
                                    }, {
                                        name: "textPaytablePlum3",
                                        type: mt.objects.TEXT,
                                        class: "ps6-3",
                                        style: o,
                                        x: 1364,
                                        y: 724,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page3_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "RULES_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesText",
                                        text: "Frosty_Fruits_is_a_Tumbling_Reel",
                                        style: a,
                                        x: 960,
                                        y: 320,
                                        maxWidth: 1650,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3image0",
                                        assetKey: "page3image0",
                                        x: 315,
                                        y: 550
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3image1",
                                        assetKey: "page3image1",
                                        x: 1020,
                                        y: 550
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page4_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "RULES_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesText",
                                        text: "3_4_or_5_Scatter",
                                        style: a,
                                        maxWidth: 1650,
                                        x: 960,
                                        y: 540,
                                        anchorX: .5,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page5_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "RULES_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesText",
                                        text: "All_prizes_are_for_combinations_of_a_kind",
                                        style: n,
                                        maxWidth: 1550,
                                        x: 960,
                                        y: 520,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextRU",
                                        text: nge.i18n.get("rtpRU"),
                                        class: "rtpInfo",
                                        style: n,
                                        x: 960,
                                        y: 850,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextEN",
                                        text: nge.i18n.get("rtpEN"),
                                        class: "rtpInfo",
                                        style: n,
                                        x: 960,
                                        y: 830,
                                        anchorX: .5,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page6_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        text: "PAYLINE_help",
                                        name: "paylineNameText",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image0",
                                        assetKey: "page6image0",
                                        x: 305,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image1",
                                        assetKey: "page6image1",
                                        x: 665,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image2",
                                        assetKey: "page6image2",
                                        x: 1006,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image3",
                                        assetKey: "page6image3",
                                        x: 1356,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image4",
                                        assetKey: "page6image4",
                                        x: 305,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image5",
                                        assetKey: "page6image5",
                                        x: 655,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image6",
                                        assetKey: "page6image6",
                                        x: 1006,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image7",
                                        assetKey: "page6image7",
                                        x: 1356,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image8",
                                        assetKey: "page6image8",
                                        x: 655,
                                        y: 704
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image9",
                                        assetKey: "page6image9",
                                        x: 1006,
                                        y: 704
                                    }, {
                                        name: "textNumber1",
                                        type: mt.objects.TEXT,
                                        text: "1",
                                        style: i,
                                        x: 280,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber1",
                                        type: mt.objects.TEXT,
                                        text: "2",
                                        style: i,
                                        x: 630,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: i,
                                        x: 978,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: i,
                                        x: 1331,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "5",
                                        style: i,
                                        x: 280,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber6",
                                        type: mt.objects.TEXT,
                                        text: "6",
                                        style: i,
                                        x: 630,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber7",
                                        type: mt.objects.TEXT,
                                        text: "7",
                                        style: i,
                                        x: 978,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber8",
                                        type: mt.objects.TEXT,
                                        text: "8",
                                        style: i,
                                        x: 1331,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber9",
                                        type: mt.objects.TEXT,
                                        text: "9",
                                        style: i,
                                        x: 630,
                                        y: 731,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber10",
                                        type: mt.objects.TEXT,
                                        text: "10",
                                        style: i,
                                        x: 978,
                                        y: 731,
                                        anchorX: .5,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page7_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        text: "PAYLINE_help",
                                        name: "paylineNameText",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image10",
                                        assetKey: "page6image10",
                                        x: 305,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image11",
                                        assetKey: "page6image11",
                                        x: 665,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image12",
                                        assetKey: "page6image12",
                                        x: 1006,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image13",
                                        assetKey: "page6image13",
                                        x: 1356,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image14",
                                        assetKey: "page6image14",
                                        x: 305,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image15",
                                        assetKey: "page6image15",
                                        x: 655,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image16",
                                        assetKey: "page6image16",
                                        x: 1006,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image17",
                                        assetKey: "page6image17",
                                        x: 1356,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image18",
                                        assetKey: "page6image18",
                                        x: 655,
                                        y: 704
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image19",
                                        assetKey: "page6image19",
                                        x: 1006,
                                        y: 704
                                    }, {
                                        name: "textNumber1",
                                        type: mt.objects.TEXT,
                                        text: "11",
                                        style: i,
                                        x: 280,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber1",
                                        type: mt.objects.TEXT,
                                        text: "12",
                                        style: i,
                                        x: 630,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "13",
                                        style: i,
                                        x: 978,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "14",
                                        style: i,
                                        x: 1331,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "15",
                                        style: i,
                                        x: 280,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber6",
                                        type: mt.objects.TEXT,
                                        text: "16",
                                        style: i,
                                        x: 630,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber7",
                                        type: mt.objects.TEXT,
                                        text: "17",
                                        style: i,
                                        x: 978,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber8",
                                        type: mt.objects.TEXT,
                                        text: "18",
                                        style: i,
                                        x: 1331,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber9",
                                        type: mt.objects.TEXT,
                                        text: "19",
                                        style: i,
                                        x: 630,
                                        y: 731,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber10",
                                        type: mt.objects.TEXT,
                                        text: "20",
                                        style: i,
                                        x: 978,
                                        y: 731,
                                        anchorX: .5,
                                        anchorY: .5
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
                                x: -25,
                                y: -10,
                                contents: [{
                                    type: mt.objects.RADIO_BUTTON,
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
                                    x: 797,
                                    y: 933,
                                    action: 'function(){nge.observer.fire("radiobutton.click.helpCarousel",_selectPage);}'
                                }, {
                                    type: mt.objects.RADIO_BUTTON,
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
                                    x: 847,
                                    y: 933,
                                    action: 'function(){nge.observer.fire("radiobutton.click.helpCarousel",_selectPage);}'
                                }, {
                                    type: mt.objects.RADIO_BUTTON,
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
                                    x: 897,
                                    y: 933,
                                    action: 'function(){nge.observer.fire("radiobutton.click.helpCarousel",_selectPage);}'
                                }, {
                                    type: mt.objects.RADIO_BUTTON,
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
                                    x: 947,
                                    y: 933,
                                    action: 'function(){nge.observer.fire("radiobutton.click.helpCarousel",_selectPage);}'
                                }, {
                                    type: mt.objects.RADIO_BUTTON,
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
                                    x: 997,
                                    y: 933,
                                    action: 'function(){nge.observer.fire("radiobutton.click.helpCarousel",_selectPage);}'
                                }, {
                                    type: mt.objects.RADIO_BUTTON,
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
                                    x: 1047,
                                    y: 933,
                                    action: 'function(){nge.observer.fire("radiobutton.click.helpCarousel",_selectPage);}'
                                }, {
                                    type: mt.objects.RADIO_BUTTON,
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
                                    x: 1097,
                                    y: 933,
                                    action: 'function(){nge.observer.fire("radiobutton.click.helpCarousel",_selectPage);}'
                                }, {
                                    type: mt.objects.RADIO_BUTTON,
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
                                    x: 1147,
                                    y: 933,
                                    action: 'function(){nge.observer.fire("radiobutton.click.helpCarousel",_selectPage);}'
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
        1154: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Tabs = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Tabs();
                return ["mobileBackToGameButtonButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = +t.y + 19)
                })), e
            }
        },
        1155: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_vi = {}
        },
        1156: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_vi.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Ui();
                return e.styles[".titleTextStyle"].style.font = "20pt futuraptheavy", e.styles[".titleTextStyle"].style.strokeThickness = 1, e.styles[".titleButtonStyle"].style.font = "20pt futuraptheavy", e.styles[".titleButtonStyle"].style.strokeThickness = 1, e
            }
        },
        1157: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile = {}
        },
        1158: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_hi = {}
        },
        1159: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Lang_hi.Ui = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Mobile.Ui();
                return e.styles[".titleStyleMobile"].style.font = "24pt futuraptheavy", e.styles[".freeSpinsStyleMobile"].style.font = "18pt futuraptheavy", e.styles[".titleStyleMobile"].style.strokeThickness = 3, ["counterFreeSpinsText"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = +t.y + 5)
                })), e
            }
        },
        1160: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Ui = function() {
                var e = {
                        font: "30pt futuraptheavy",
                        fill: 16777215
                    },
                    t = {
                        font: "36pt futuraptheavy",
                        fill: 16777215
                    },
                    n = nge.appPath + "img/ui_mobile/";
                return {
                    styles: {
                        ".titleStyleMobile": {
                            style: {
                                font: "26pt futuraptheavy",
                                fill: 8182783,
                                stroke: 4204,
                                strokeThickness: 6
                            }
                        },
                        ".freeSpinsStyleMobile": {
                            style: {
                                font: "22pt futuraptheavy",
                                fill: 8182783
                            }
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "totalbetbg",
                            fullPath: n + "totalbetbg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balancebg",
                            fullPath: n + "balancebg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winbg",
                            fullPath: n + "winbg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoSpinButtonMobile",
                            fullPath: n + "autoSpinButtonMobile.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "cash_asset",
                            fullPath: n + "cash_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "home_asset",
                            fullPath: n + "home_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingPanelMobileBackBg1_asset",
                            fullPath: n + "settingPanelMobileBackBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betPlusButtonMobile",
                            fullPath: n + "betPlusButtonMobile.png",
                            frameWidth: 72
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betMinusButtonMobile",
                            fullPath: n + "betMinusButtonMobile.png",
                            frameWidth: 72
                        }, {
                            type: mt.assets.IMAGE,
                            key: "helpMobileButton",
                            fullPath: n + "helpMobileButton.png",
                            frameWidth: 84
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsMobileButton",
                            fullPath: n + "settingsMobileButton.png",
                            frameWidth: 84
                        }, {
                            type: mt.assets.IMAGE,
                            key: "soundMobileButton",
                            fullPath: n + "soundMobileButton.png",
                            frameWidth: 84
                        }, {
                            type: mt.assets.IMAGE,
                            key: "quickSettingsPanelMobileButton",
                            fullPath: n + "quickSettingsPanelMobileButton.png",
                            frameWidth: 128
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingButtonMobile",
                            fullPath: n + "betSettingButtonMobile.png",
                            frameWidth: 128
                        }, {
                            type: mt.assets.IMAGE,
                            key: "spinButton",
                            fullPath: n + "spinButton.png",
                            frameWidth: 292,
                            frameHeight: 292
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
                                            font: "24pt futuraptheavy",
                                            fill: 16777215
                                        },
                                        class: "buttonStyleNormal",
                                        lineHeight: 25,
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 1737,
                                        y: 224,
                                        maxWidth: 104
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
                                        x: 1649,
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
                                    x: 1593,
                                    y: 331,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "spin");}'
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "betSettingButtonMobile",
                                x: -40,
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
                                    x: 1790,
                                    y: 941,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "betSettingButtonMobile");}'
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "settingBottomUIMobileContainer",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "settingPanelMobileBackBg1_asset",
                                assetKey: "settingPanelMobileBackBg1_asset",
                                x: 39,
                                y: 598,
                                alpha: .5019
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
                                    x: 38,
                                    y: 941,
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
                                    x: 60,
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
                                    x: 60,
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
                                    x: 60,
                                    y: 847,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "paytable");}'
                                }]
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "settingPanelMobileBackBg",
                                assetKey: "settingPanelMobileBackBg1",
                                x: 166,
                                y: 1069,
                                alpha: .8,
                                anchorX: 0,
                                anchorY: 0,
                                height: 464,
                                width: 128,
                                left: 64,
                                right: 64,
                                top: 64,
                                bottom: 64,
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
                                maxWidth: 470,
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 1010
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
                                x: 1498,
                                y: 928
                            }, {
                                type: mt.objects.TEXT,
                                name: "winMobileName",
                                text: "WIN",
                                class: "titleStyleMobile",
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 899
                            }, {
                                type: mt.objects.TEXT,
                                name: "totalBetMobileName",
                                text: "TOTAL BET",
                                class: "titleStyleMobile",
                                anchorX: .5,
                                anchorY: .5,
                                x: 430,
                                y: 928
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
                                    x: 218,
                                    y: 968,
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
                                    x: 558,
                                    y: 968,
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
                                        height: 96,
                                        width: 232,
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
                                        style: e,
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
                                        width: 232,
                                        height: 96,
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
                                        style: e,
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
                                    width: 556,
                                    height: 140,
                                    pixelPerfectClick: 0,
                                    pixelPerfectOver: 0,
                                    scaleX: 556,
                                    scaleY: 140,
                                    x: 960,
                                    y: 989,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "winMobileContentContainer",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "winMobileNumber",
                                        style: t,
                                        class: "playAreaTextMobile winNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 960,
                                        y: 987,
                                        maxWidth: 460
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "winMobileCoinsContentContainer",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "creditsWinMobileNumber",
                                        style: t,
                                        class: "playAreaTextMobile creditsWinNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 960,
                                        y: 987,
                                        maxWidth: 460
                                    }]
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
                                        width: 440,
                                        height: 96,
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
                                        style: e,
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
                                        width: 440,
                                        height: 96,
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
                                        style: e,
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
                                x: 678,
                                y: 905
                            }, {
                                type: mt.objects.IMAGE,
                                name: "balancebg",
                                assetKey: "balancebg",
                                x: 1269,
                                y: 941
                            }, {
                                type: mt.objects.IMAGE,
                                name: "totalbetbg",
                                assetKey: "totalbetbg",
                                x: 198,
                                y: 943
                            }]
                        }]
                    }
                }
            }
        },
        1161: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Help = function() {
                var e = nge.appPath + "img/",
                    t = nge.appPath + "img/help_mobile/",
                    n = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    a = {
                        font: "30pt futuraptmedium",
                        fill: 16777215,
                        align: "center"
                    },
                    s = {
                        font: "40pt futuraptmedium",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 45
                    },
                    o = {
                        font: "44pt futuraptmedium",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 55
                    },
                    i = {
                        font: "30pt futuraptmedium",
                        fill: 16696173
                    },
                    r = {
                        font: "30pt futuraptmedium",
                        fill: 16777215
                    },
                    l = {
                        font: "30pt futuraptmedium",
                        fill: 15655103
                    };
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "1px_empty",
                            fullPath: t + "blank.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "fake_end_px",
                            fullPath: t + "blank.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "infoMobileNextButton",
                            fullPath: t + "playarea/infoMobileNextButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoPlate",
                            fullPath: t + "playarea/pageInfoPlate.png",
                            frameHeight: 40
                        }, {
                            type: mt.assets.IMAGE,
                            key: "nameBg1_asset",
                            fullPath: t + "playarea/nameBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image0",
                            fullPath: t + "page0image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image1",
                            fullPath: t + "page0image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image2",
                            fullPath: t + "page0image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image3",
                            fullPath: t + "page0image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image4",
                            fullPath: t + "page0image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image5",
                            fullPath: t + "page0image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image6",
                            fullPath: t + "page0image6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image0",
                            fullPath: t + "page1image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image1",
                            fullPath: t + "page1image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image2",
                            fullPath: t + "page1image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image3",
                            fullPath: t + "page1image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image0",
                            fullPath: t + "page2image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image1",
                            fullPath: t + "page2image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image2",
                            fullPath: t + "page2image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image3",
                            fullPath: t + "page2image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3image0",
                            fullPath: e + "atlases/page3image0.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3image1",
                            fullPath: e + "atlases/page3image1.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image0",
                            fullPath: t + "page6image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image1",
                            fullPath: t + "page6image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image2",
                            fullPath: t + "page6image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image3",
                            fullPath: t + "page6image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image4",
                            fullPath: t + "page6image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image5",
                            fullPath: t + "page6image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image6",
                            fullPath: t + "page6image6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image7",
                            fullPath: t + "page6image7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image8",
                            fullPath: t + "page6image8.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image9",
                            fullPath: t + "page6image9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image10",
                            fullPath: t + "page6image10.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image11",
                            fullPath: t + "page6image11.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image12",
                            fullPath: t + "page6image12.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image13",
                            fullPath: t + "page6image13.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image14",
                            fullPath: t + "page6image14.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image15",
                            fullPath: t + "page6image15.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image16",
                            fullPath: t + "page6image16.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image17",
                            fullPath: t + "page6image17.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image18",
                            fullPath: t + "page6image18.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page6image19",
                            fullPath: t + "page6image19.png"
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
                                    name: "page0Container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "PAYTABLE_help",
                                        style: n,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image0",
                                        assetKey: "page0image0",
                                        x: 154,
                                        y: 154
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image1",
                                        assetKey: "page0image1",
                                        x: 936,
                                        y: 159
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image2",
                                        assetKey: "page0image2",
                                        x: 480,
                                        y: 720
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image3",
                                        assetKey: "page0image3",
                                        x: 635,
                                        y: 720
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image4",
                                        assetKey: "page0image4",
                                        x: 787,
                                        y: 720
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image6",
                                        assetKey: "page0image5",
                                        x: 945,
                                        y: 724
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image5",
                                        assetKey: "page0image6",
                                        x: 1100,
                                        y: 724
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text0",
                                        text: "SUBSTITUTES_FOR_ALL",
                                        style: a,
                                        x: 398,
                                        y: 644,
                                        maxWidth: 750,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text1",
                                        text: "3_OR_MORE_SYMBOLS",
                                        style: a,
                                        x: 1290,
                                        y: 644,
                                        maxWidth: 750,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text1",
                                        text: "15_SPINS_WITH",
                                        style: a,
                                        x: 860,
                                        y: 886,
                                        maxWidth: 750,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 638,
                                        y: 340,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 638,
                                        y: 393,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 638,
                                        y: 445,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 1428,
                                        y: 340,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 1428,
                                        y: 393,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 1428,
                                        y: 445,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableWild5",
                                        class: "ps0-5",
                                        style: r,
                                        x: 678,
                                        y: 340,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableWild4",
                                        class: "ps0-4",
                                        style: r,
                                        x: 678,
                                        y: 393,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableWild3",
                                        class: "ps0-3",
                                        style: r,
                                        x: 678,
                                        y: 445,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableBonus5",
                                        class: "ps9s-5",
                                        style: r,
                                        x: 1465,
                                        y: 340,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableBonus4",
                                        class: "ps9s-4",
                                        style: r,
                                        x: 1465,
                                        y: 393,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableBonus3",
                                        class: "ps9s-3",
                                        style: r,
                                        x: 1465,
                                        y: 445,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1Container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "PAYTABLE_help",
                                        style: n,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image0",
                                        assetKey: "page1image0",
                                        x: 297,
                                        y: 164
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image1",
                                        assetKey: "page1image1",
                                        x: 871,
                                        y: 153
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image2",
                                        assetKey: "page2image2",
                                        x: 284,
                                        y: 524
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image3",
                                        assetKey: "page2image3",
                                        x: 890,
                                        y: 520
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 648,
                                        y: 285,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 648,
                                        y: 338,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 648,
                                        y: 392,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 1228,
                                        y: 285,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 1228,
                                        y: 338,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 1228,
                                        y: 392,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 638,
                                        y: 618,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 638,
                                        y: 670,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 638,
                                        y: 724,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 1218,
                                        y: 618,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 1218,
                                        y: 670,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 1218,
                                        y: 724,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableSeven5",
                                        class: "ps1-5",
                                        style: r,
                                        x: 685,
                                        y: 285,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableSeven4",
                                        class: "ps1-4",
                                        style: r,
                                        x: 685,
                                        y: 338,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableSeven3",
                                        class: "ps1-3",
                                        style: r,
                                        x: 685,
                                        y: 392,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableBell5",
                                        class: "ps4-5",
                                        style: r,
                                        x: 1264,
                                        y: 285,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableBell4",
                                        class: "ps4-4",
                                        style: r,
                                        x: 1264,
                                        y: 338,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableBell3",
                                        class: "ps4-3",
                                        style: r,
                                        x: 1264,
                                        y: 392,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableWatermelon5",
                                        class: "ps3-5",
                                        style: r,
                                        x: 685,
                                        y: 618,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableWatermelon4",
                                        class: "ps3-4",
                                        style: r,
                                        x: 685,
                                        y: 670,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableWatermelon3",
                                        class: "ps3-3",
                                        style: r,
                                        x: 685,
                                        y: 724,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableStrawbery5",
                                        class: "ps2-5",
                                        style: r,
                                        x: 1264,
                                        y: 618,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableStrawbery4",
                                        class: "ps2-4",
                                        style: r,
                                        x: 1264,
                                        y: 670,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableStrawbery3",
                                        class: "ps2-3",
                                        style: r,
                                        x: 1264,
                                        y: 724,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2Container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "PAYTABLE_help",
                                        style: n,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image0",
                                        assetKey: "page2image0",
                                        x: 289,
                                        y: 173
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image1",
                                        assetKey: "page2image1",
                                        x: 888,
                                        y: 177
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image2",
                                        assetKey: "page1image2",
                                        x: 293,
                                        y: 521
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image3",
                                        assetKey: "page1image3",
                                        x: 882,
                                        y: 517
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 648,
                                        y: 285,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 648,
                                        y: 338,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 648,
                                        y: 392,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 1228,
                                        y: 285,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 1228,
                                        y: 338,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 1228,
                                        y: 392,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 638,
                                        y: 618,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 638,
                                        y: 670,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 638,
                                        y: 724,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber5",
                                        text: "5",
                                        style: i,
                                        x: 1228,
                                        y: 618,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber4",
                                        text: "4",
                                        style: i,
                                        x: 1228,
                                        y: 670,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textNumber3",
                                        text: "3",
                                        style: i,
                                        x: 1228,
                                        y: 724,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableOrange5",
                                        class: "ps7-5",
                                        style: r,
                                        x: 685,
                                        y: 285,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableOrange4",
                                        class: "ps7-4",
                                        style: r,
                                        x: 685,
                                        y: 338,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableOrange3",
                                        class: "ps7-3",
                                        style: r,
                                        x: 685,
                                        y: 392,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableLemon5",
                                        class: "ps5-5",
                                        style: r,
                                        x: 1264,
                                        y: 285,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableLemon4",
                                        class: "ps5-4",
                                        style: r,
                                        x: 1264,
                                        y: 338,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableLemon3",
                                        class: "ps5-3",
                                        style: r,
                                        x: 1264,
                                        y: 392,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableCherry5",
                                        class: "ps8-5",
                                        style: r,
                                        x: 685,
                                        y: 618,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableCherry4",
                                        class: "ps8-4",
                                        style: r,
                                        x: 685,
                                        y: 670,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytableCherry3",
                                        class: "ps8-3",
                                        style: r,
                                        x: 685,
                                        y: 724,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytablePlum5",
                                        class: "ps6-5",
                                        style: r,
                                        x: 1264,
                                        y: 618,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytablePlum4",
                                        class: "ps6-4",
                                        style: r,
                                        x: 1264,
                                        y: 670,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "textPaytablePlum3",
                                        class: "ps6-3",
                                        style: r,
                                        x: 1264,
                                        y: 724,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page3Container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "RULES_help",
                                        style: n,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesText",
                                        text: "Frosty_Fruits_is_a_Tumbling_Reel",
                                        style: o,
                                        x: 860,
                                        y: 320,
                                        maxWidth: 1650,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3image0",
                                        assetKey: "page3image0",
                                        x: 215,
                                        y: 550
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3image1",
                                        assetKey: "page3image1",
                                        x: 920,
                                        y: 550
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page4Container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "RULES_help",
                                        style: n,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesText",
                                        text: "3_4_or_5_Scatter",
                                        style: o,
                                        maxWidth: 1650,
                                        x: 860,
                                        y: 500,
                                        anchorX: .5,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page5Container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "RULES_help",
                                        style: {
                                            font: "60pt futuraptmedium",
                                            fill: 15655103
                                        },
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "rulesText",
                                        type: mt.objects.TEXT,
                                        text: "All_prizes_are_for_combinations_of_a_kind",
                                        style: s,
                                        maxWidth: 1550,
                                        x: 860,
                                        y: 520,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextRU",
                                        text: nge.i18n.get("rtpRU"),
                                        class: "rtpInfo",
                                        style: s,
                                        x: 860,
                                        y: 850,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextEN",
                                        text: nge.i18n.get("rtpEN"),
                                        class: "rtpInfo",
                                        style: s,
                                        x: 860,
                                        y: 830,
                                        anchorX: .5,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page6Container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paylineNameText",
                                        text: "PAYLINE_help",
                                        style: n,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image0",
                                        assetKey: "page6image0",
                                        x: 205,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image1",
                                        assetKey: "page6image1",
                                        x: 565,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image2",
                                        assetKey: "page6image2",
                                        x: 906,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image3",
                                        assetKey: "page6image3",
                                        x: 1256,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image4",
                                        assetKey: "page6image4",
                                        x: 205,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image5",
                                        assetKey: "page6image5",
                                        x: 555,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image6",
                                        assetKey: "page6image6",
                                        x: 906,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image7",
                                        assetKey: "page6image7",
                                        x: 1256,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image8",
                                        assetKey: "page6image8",
                                        x: 555,
                                        y: 704
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image9",
                                        assetKey: "page6image9",
                                        x: 906,
                                        y: 704
                                    }, {
                                        name: "textNumber1",
                                        type: mt.objects.TEXT,
                                        text: "1",
                                        style: l,
                                        x: 180,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber2",
                                        type: mt.objects.TEXT,
                                        text: "2",
                                        style: l,
                                        x: 530,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: l,
                                        x: 878,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: l,
                                        x: 1231,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "5",
                                        style: l,
                                        x: 180,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber6",
                                        type: mt.objects.TEXT,
                                        text: "6",
                                        style: l,
                                        x: 530,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber7",
                                        type: mt.objects.TEXT,
                                        text: "7",
                                        style: l,
                                        x: 878,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber8",
                                        type: mt.objects.TEXT,
                                        text: "8",
                                        style: l,
                                        x: 1231,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber9",
                                        type: mt.objects.TEXT,
                                        text: "9",
                                        style: l,
                                        x: 530,
                                        y: 731,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber10",
                                        type: mt.objects.TEXT,
                                        text: "10",
                                        style: l,
                                        x: 878,
                                        y: 731,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "fake_end_px",
                                        assetKey: "fake_end_px"
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page7Container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        text: "PAYLINE_help",
                                        name: "paylineNameText",
                                        style: n,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image10",
                                        assetKey: "page6image10",
                                        x: 205,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image11",
                                        assetKey: "page6image11",
                                        x: 565,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image12",
                                        assetKey: "page6image12",
                                        x: 906,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image13",
                                        assetKey: "page6image13",
                                        x: 1256,
                                        y: 176
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image14",
                                        assetKey: "page6image14",
                                        x: 205,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image15",
                                        assetKey: "page6image15",
                                        x: 555,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image16",
                                        assetKey: "page6image16",
                                        x: 906,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image17",
                                        assetKey: "page6image17",
                                        x: 1256,
                                        y: 448
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image18",
                                        assetKey: "page6image18",
                                        x: 555,
                                        y: 704
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page6image19",
                                        assetKey: "page6image19",
                                        x: 906,
                                        y: 704
                                    }, {
                                        name: "textNumber1",
                                        type: mt.objects.TEXT,
                                        text: "11",
                                        style: l,
                                        x: 180,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber1",
                                        type: mt.objects.TEXT,
                                        text: "12",
                                        style: l,
                                        x: 530,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber3",
                                        type: mt.objects.TEXT,
                                        text: "13",
                                        style: l,
                                        x: 878,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber4",
                                        type: mt.objects.TEXT,
                                        text: "14",
                                        style: l,
                                        x: 1231,
                                        y: 201,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber5",
                                        type: mt.objects.TEXT,
                                        text: "15",
                                        style: l,
                                        x: 180,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber6",
                                        type: mt.objects.TEXT,
                                        text: "16",
                                        style: l,
                                        x: 530,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber7",
                                        type: mt.objects.TEXT,
                                        text: "17",
                                        style: l,
                                        x: 878,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber8",
                                        type: mt.objects.TEXT,
                                        text: "18",
                                        style: l,
                                        x: 1231,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber9",
                                        type: mt.objects.TEXT,
                                        text: "19",
                                        style: l,
                                        x: 530,
                                        y: 731,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        name: "textNumber10",
                                        type: mt.objects.TEXT,
                                        text: "20",
                                        style: l,
                                        x: 878,
                                        y: 731,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "fake_end_px",
                                        assetKey: "fake_end_px"
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
                                y: 920,
                                x: -25,
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoOnePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 797
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoTwoPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 847
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoThreePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 897
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoFourPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 947
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoFivePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 997
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoSixPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 1047
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoSevenPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 1097
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoEightPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 1147
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
        1162: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1163: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Demo = function() {
                var e = nge.appPath + "img/demo/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton",
                            fullPath: e + "demoPlayButton.png",
                            frameWidth: 240
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenArrow",
                            fullPath: e + "introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameIntroScreen",
                            fullPath: e + "frameIntroScreen.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1164: function(e, t) {
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
                            type: mt.objects.GROUP,
                            name: "blinkerContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "winPopupContainer"
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
                            name: "jackpotStatusPanelContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "foregroundContainer"
                        }, {
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
                        }, {
                            type: mt.objects.GROUP,
                            name: "winlinesTextContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "freespin_container"
                        }, {
                            type: mt.objects.GROUP,
                            name: "gameScreenContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "slotMachine_container",
                                x: 100,
                                y: 20
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "reelsBorderContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "reelsBg"
                            }, {
                                type: mt.objects.GROUP,
                                name: "reelsBgFreeSpins",
                                assetKey: "reelsBgFreeSpins"
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
        1165: function(e, t) {
            nge.App[nge.appNS].Tpl.States.LoadAssets = function() {
                var e = nge.appPath + "img/",
                    t = nge.Lib.Helper.mobileAndTabletCheck(),
                    n = {
                        name: "assets",
                        contents: []
                    };
                return n.contents.push({
                    type: mt.assets.ATLAS,
                    key: "helpMobileAtlas",
                    atlas: e + "atlases/psd_atlases_help.json",
                    fullPath: e + "atlases/psd_atlases_help.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: "symbolsWinlines",
                    atlas: e + "atlases/symbols_winlines.json",
                    fullPath: e + "atlases/symbols_winlines.png"
                }), t = t ? "psd_atlases_ui_mobile" : "psd_atlases_ui", n.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: t,
                    atlas: e + "atlases/" + t + ".json",
                    fullPath: e + "atlases/" + t + ".png"
                }), n.contents.push({
                    type: mt.assets.IMAGE,
                    key: "bgArea",
                    fullPath: e + "bgArea.jpg"
                }), n.contents.push({
                    type: mt.assets.IMAGE,
                    key: "bgAreaFreeSpins",
                    fullPath: e + "bgAreaFreeSpins.jpg"
                }), n.contents.push({
                    type: mt.assets.IMAGE,
                    key: "introScreenBg",
                    fullPath: e + "introScreenBg.jpg"
                }), n.contents.push({
                    type: mt.assets.IMAGE,
                    key: "page3image0",
                    fullPath: e + "atlases/page3image0.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "page3image1",
                    fullPath: e + "atlases/page3image1.jpg"
                }, {
                    type: mt.assets.SPINE,
                    key: "M00_000",
                    spine: e + "spine/symbols/sm00_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M01_000",
                    spine: e + "spine/symbols/sm01_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M02_000",
                    spine: e + "spine/symbols/sm02_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M03_000",
                    spine: e + "spine/symbols/sm03_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M04_000",
                    spine: e + "spine/symbols/sm04_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M05_000",
                    spine: e + "spine/symbols/sm05_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M06_000",
                    spine: e + "spine/symbols/sm06_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M07_000",
                    spine: e + "spine/symbols/sm07_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M08_000",
                    spine: e + "spine/symbols/sm08_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "M09_000",
                    spine: e + "spine/symbols/sm09_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "symbol_ice_effects",
                    spine: e + "spine/slotMachine/ice_effects.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "symbol_ice_cracks",
                    spine: e + "spine/slotMachine/ice_cracks.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "symbol_bang",
                    spine: e + "spine/slotMachine/symbol_bang.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bigWinAnim",
                    spine: e + "spine/bigWin/big_win.json"
                }, {
                    type: mt.assets.IMAGE,
                    key: "popupJackpot",
                    fullPath: e + "jackpot/images/jackpotPopup.png"
                }, {
                    type: mt.assets.SPINE,
                    key: "animatedPopup",
                    spine: e + "spine/popup/animatedPopup.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "spinButtonAnimation",
                    spine: e + "spine/spinButton/spin_button.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "multipliers",
                    spine: e + "spine/multiplier.json"
                }), {
                    assets: n,
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1166: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1167: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1168: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Slot = nge.App.DjGameBase.Mlm.Brain.Slot.extend((function() {
                var e, t = this,
                    n = null;
                this.bigWinMult = 7, this.checkIfBonus = function() {
                    return !1
                };
                var a = null,
                    s = function() {
                        return nge.localData.get("freespin.inProgress")
                    },
                    o = function() {
                        return nge.localData.set("cascades.spinResult", !1)
                    };
                this.spinResponseHandler = function(e) {
                    for (var a in e)
                        if (e.hasOwnProperty(a) && a.includes("spinResult")) {
                            var o = e[a];
                            o.rows && 4 === o.rows.length && o.rows.splice(0, 1)
                        } if (t.super.spinResponseHandler(e), n = null, e.slotWin && e.slotWin.lineWinAmounts) {
                        for (n = {
                                cascades: [],
                                bonus: null
                            }, a = 0; o = e.slotWin["lineWinAmounts" + (0 === a ? "" : "Stage" + (a + 1))];) {
                            for (var i = {}, r = void 0, l = o, p = l.length; p--;) {
                                var c = l[p];
                                "Bonus" === c.type && ("Multiplier" === c.bonusName && (r || (r = {}), r[c.bonusName] = {
                                    value: c.params.value,
                                    line: l[p]
                                }, l.splice(p, 1)), "FreeSpins" === c.bonusName && (r || (r = {}), r[c.bonusName] = {
                                    value: c.params.freeSpins,
                                    line: l[p]
                                }))
                            }
                            i.bonuses = r, i.lines = [].concat($jscomp.arrayFromIterable(o)), i.bonuses && i.bonuses.FreeSpins && !s() && (n.bonus = {
                                freeSpins: +i.bonuses.FreeSpins.value
                            }), n.cascades.push(i), a++
                        }
                        nge.localData.set("cascades.spinResult", n)
                    }
                }, this.winlinesAnimateByOneCycleCompleteSubscription = function() {
                    nge.observer.add("winlines.animateByOne.cycleComplete", (function() {
                        e && (e = !1, t.spinAndWinComplete())
                    }), !1, !0)
                }, this.runBonusRoutine = function(e) {
                    return nge.localData.set("bonusWon", !0), nge.localData.set("slotMachineResponseBonusSpin", !0), "ReSpins" === e.state || "FreeSpins" === e.state && !s() ? (t.bonusGameTriggered = !0, t.runBonusGame()) : nge.localData.set("slotMachineResponseBonusSpin", !1), !0
                }, this.animateBonusSymbols = function(e) {
                    nge.observer.fire("winlines.showBonusLine", {
                        wonSymbols: e.line.wonSymbols
                    })
                }, this.spinCompleteHandler = function() {
                    nge.observer.fire("winlines.changeAllDuration", nge.localData.get("frostyFruits.winlines.allRegularDuration"));
                    var s = function() {
                        nge.observer.fire("winlines.animateAllDone"), nge.observer.fire("winlines.animateByOne.cycleComplete"), nge.observer.fire("spinComplete.noWin")
                    };
                    if (e = !0, nge.localData.set("bonusWon", !1), n) {
                        var o = t.getLastData(),
                            i = nge.localData.get("cascades.inProgress"),
                            r = nge.localData.get("cascades.completed"),
                            l = nge.localData.get("cascades.currentIndex"),
                            p = 0,
                            c = n.cascades[l];
                        if (r && n.bonus && n.bonus.freeSpins && (nge.observer.fire("cascades.winBonus"), t.processAutospinOnFeatureStart(), !t.runBonusRoutine(o))) return;
                        c.bonuses && c.bonuses.FreeSpins && (p = 2200, t.tryPlayBonusWinSound(), t.animateBonusSymbols(c.bonuses.FreeSpins)), a = nge.rafSetTimeout((function() {
                            var e = 0;
                            if (!r && i) {
                                var n = nge.localData.get("cascades.all"),
                                    a = nge.localData.get("cascades.currentIndex");
                                n[a] && (e = +n[a].totalWin)
                            } else c.bonuses && c.bonuses.FreeSpins && c.bonuses.FreeSpins.line && (e += +c.bonuses.FreeSpins.line.amount);
                            t.isBigWin = t.checkBigWin(e, !1), o.slotWin && c.lines && (c.lines.length || o.slotWin.jackpotWin) ? (t.isBigWin && nge.observer.fire("winlines.changeAllDuration", nge.localData.get("frostyFruits.winlines.allBigWinDuration")), t.winlinesAnimateAll()) : (nge.observer.fire("winlines.animateAllDone"), nge.observer.fire("winlines.animateByOne.cycleComplete")), 0 < e ? t.isBigWin ? (nge.observer.fire("win.big.preWinEvent", !1), nge.observer.fire("sounds.win.intro_big_win.play")) : (nge.localData.set("isSpinReadyToProceed", !0), nge.observer.fire("win.regular.preWinEvent"), nge.observer.fire("win", e), nge.observer.fire("winData", {
                                totalWin: e,
                                isBigWin: !1,
                                isBonus: !1
                            })) : s()
                        }), p)
                    } else s()
                }, this.winlinesAllDone = function() {
                    var e = t.getLastData();
                    if (!(e.slotWin && e.slotWin.linePickBonus && e.slotWin.linePickBonus.length && e.slotWin.Bonus && e.slotWin.Bonus.length)) {
                        e = 0;
                        var n = nge.localData.get("cascades.completed"),
                            a = nge.localData.get("cascades.inProgress"),
                            s = nge.localData.get("cascades.currentIndex"),
                            o = nge.localData.get("cascades.spinResult");
                        o && (o = o.cascades[s], !n && a ? (n = nge.localData.get("cascades.all"))[s] && (e = n[s].totalWin) : o.bonuses && o.bonuses.FreeSpins && o.bonuses.FreeSpins.line && (e += +o.bonuses.FreeSpins.line.amount)), s = t.checkIfBonus(), t.isBigWin ? (nge.observer.fire("win", e), nge.observer.fire("winData", {
                            totalWin: e,
                            isBigWin: !0
                        }), t.isBigWin = !1) : s && 0 == +e && nge.observer.fire("winlines.animateByOne")
                    }
                }, this.winProcessingFinish = function() {
                    nge.localData.get("cascades.inProgress") || t.super.winProcessingFinish()
                }, this.runBonusGame = function() {
                    var e = t.getLastData(),
                        a = e.state;
                    if (!a) return !1;
                    "FreeSpins" === e.state ? nge.observer.fire("freespin.start", n.bonus.freeSpins) : nge.observer.fire("brain.runBonusGame", a)
                }, this.reset = function() {
                    t.super.reset(), t.isBigWin = !1
                }, this.onTransportCloseHandler = function() {
                    t.super.onTransportCloseHandler(), nge.localData.set("cascades.spinResult", !1), nge.localData.set("bonusWon", !1), nge.localData.set("lastReelSymbolLanding", !1), nge.localData.set("slotMachineResponseBonusSpin", !1), nge.rafClearTimeout(a), a = null, nge.localData.set("additionalPopup.willBeShownNext", !1)
                };
                var i = function() {
                    t.reset()
                };
                this.customSubscribe = function() {
                    t.super.customSubscribe(), nge.observer.add("cascades.state.completed", o, !1, !0), nge.observer.add("transportMessage.AuthResponse", i, !1, !0)
                }
            }))
        },
        1169: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Win = nge.App.DjGameBase.Mlm.Brain.Win.extend((function() {
                this.regularWinParams = {
                    low: 1.1,
                    mid: 3,
                    high: 6.99
                }, this.bigWinHideHandler = function() {
                    nge.observer.fire("slotmachine.tint.restore"), nge.observer.fire("slotMachine.blowCascadesStart", null, 500)
                }, this.freespinAdditionalHideHandler = function() {}, this.showLineWinHandler = function() {}
            }))
        },
        1170: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Controller = nge.App.DjGameBase.Mlm.Brain.Controller.extend((function() {
                this._logicBlocks.push("cascade")
            }))
        },
        1171: function(e, t) {
            nge.Mlm.Brain.Cascade = Class.extend((function() {
                var e = this,
                    t = [-920, -680, -440],
                    n = [],
                    a = 0,
                    s = 0,
                    o = !1,
                    i = [],
                    r = function() {
                        return nge.localData.get("freespin.inProgress")
                    },
                    l = function(e, t) {
                        return 0 !== e.filter((function(e) {
                            return e.reel === t.reel && e.row === t.row
                        })).length
                    },
                    p = function(t, n) {
                        var a = {},
                            s = [0, 0, 0, 0, 0];
                        a.symbolsToRemove = [], a.symbolsToAdd = [];
                        for (var o = 0; o < t.length; o++)
                            for (var i = t[o].wonSymbols, r = 0; r < i.length; r++) {
                                var p = {
                                    reel: i[r][0],
                                    row: i[r][1]
                                };
                                l(a.symbolsToRemove, p) || (a.symbolsToRemove.push(p), s[+p.reel]++)
                            }
                        var c = {};
                        for (a.symbolsToRemove.forEach((function(e) {
                                c[e.reel] || (c[e.reel] = []), c[e.reel][e.row] || (c[e.reel][e.row] = []), c[e.reel][e.row] = !0
                            })), t = 0; 5 > t; t++)
                            if (c[t])
                                for (o = 0, i = 2; 0 <= i; i--) c[t][i] ? (o++, c[t][i] = {
                                    type: "none"
                                }) : c[t][i] = o ? {
                                    type: "drop",
                                    to: o
                                } : {
                                    type: "static"
                                };
                            else c[t] = [{
                                type: "static"
                            }, {
                                type: "static"
                            }, {
                                type: "static"
                            }];
                        for (a.fallMap = c, t = 0; 5 > t; t++)
                            for (o = 0; o < s[t]; o++) a.symbolsToAdd.push({
                                symbolPosition: {
                                    reel: t,
                                    row: o
                                },
                                key: n[o][t]
                            });
                        var m = {
                            2: {},
                            1: {},
                            0: {}
                        };
                        return a.symbolsToAdd.forEach((function(e) {
                            m[e.symbolPosition.row][e.symbolPosition.reel] = e
                        })), a.symbolsToAdd = m, e.log("_getCascade()"), a
                    },
                    c = function(e, n, a) {
                        e.texture.z = 100 - n.row, e.texture.y = t[n.row], nge.observer.fire("cascade.appendSymbolsAnimationStart", {
                            symbol: e,
                            symbolPosition: n,
                            callback: a
                        })
                    },
                    m = function() {
                        r() && nge.observer.fire("freespin.setMultiplier", 0)
                    },
                    g = function(t) {
                        if (o = !1, i = [], nge.localData.set("cascades.inProgress", !1), nge.localData.set("cascades.completed", !1), nge.localData.set("cascades.currentIndex", 0), nge.localData.set("cascades.all", []), s = a = 0, t && t.slotWin) {
                            var n = [];
                            t.slotWin.lineWinAmounts && n.push(t.slotWin.lineWinAmounts);
                            for (var r = 2; t.slotWin["lineWinAmountsStage" + r];) n.push(t.slotWin["lineWinAmountsStage" + r]), r++;
                            var l = [];
                            for (l.push(t.spinResult.rows), r = 2; t["spinResultStage" + r];) l.push(t["spinResultStage" + r].rows), r++;
                            t = [], r = 0;
                            for (var c = {}; n[r] && l[r + 1];) {
                                var m = p(n[r], l[r + 1]);
                                n[r + 1] && (m.lineWinAmounts = n[r + 1]), c.$jscomp$loop$prop$totalWin$9 = 0, n[r].forEach(function(e) {
                                    return function(t) {
                                        t.amount && (e.$jscomp$loop$prop$totalWin$9 += +t.amount)
                                    }
                                }(c)), m.totalWin = c.$jscomp$loop$prop$totalWin$9, t.push(m), r++, c = {
                                    $jscomp$loop$prop$totalWin$9: c.$jscomp$loop$prop$totalWin$9
                                }
                            }
                            nge.localData.set("cascades.all", t), 0 < t.length ? (nge.localData.set("cascades.inProgress", !0), nge.observer.fire("buttons.updateState")) : (nge.localData.set("cascades.inProgress", !1), nge.localData.set("cascades.completed", !0)), e.log("on spinResponse handler")
                        }
                    },
                    u = function() {
                        e.log("_processCascades"), i = [];
                        var t = nge.localData.get("cascades.all"),
                            r = nge.localData.get("cascades.currentIndex");
                        if (!t || !t.length || r >= t.length) nge.localData.set("cascades.inProgress", !1), nge.observer.fire("buttons.updateState");
                        else {
                            for (var l in nge.observer.fire("winlines.stopAnimation"), nge.observer.fire("win.hide"), t = t[r], s = a = 0, n = [], r = 1.1, o && (r = 1.4), t.symbolsToRemove) nge.observer.fire("slotMachine.animateSymbolBang", {
                                symbolPosition: t.symbolsToRemove[l],
                                speed: r
                            }), a++;
                            nge.observer.fire("frostyFruits.slotMachineProcessCascades")
                        }
                    },
                    y = function(e) {
                        for (var t = 0; t < n.length; t++)
                            if (n[t].reel === e.reel && n[t].row === e.row) return;
                        n.push(e), nge.observer.fire("slotMachine.destroySymbol", {
                            symbolPosition: e,
                            animation: null
                        })
                    },
                    b = function() {
                        i = [];
                        var t = nge.localData.get("cascades.all"),
                            n = nge.localData.get("cascades.currentIndex");
                        !t || !t.length || n >= t.length ? (nge.localData.set("cascades.inProgress", !1), nge.localData.set("cascades.completed", !0), nge.observer.fire("buttons.updateState")) : ((t = t[n]).lineWinAmounts && t.lineWinAmounts.length ? nge.observer.fire("winlines.setNewQuery", {
                            slotWin: {
                                lineWinAmounts: t.lineWinAmounts
                            }
                        }) : (nge.localData.set("cascades.inProgress", !1), nge.localData.set("cascades.completed", !0), e.log("cascades.inProgress - false"), e.log("cascades.completed - true"), nge.observer.fire("cascades.state.completed"), nge.observer.fire("winlines.setNewQuery", {
                            slotWin: {}
                        }), nge.observer.fire("buttons.updateState")), nge.observer.fire("slotMachine.spinComplete", null, 100), o = !1, n++, nge.localData.set("cascades.currentIndex", n))
                    },
                    f = function(e) {
                        e = nge.localData.get("cascades.all");
                        var t = nge.localData.get("cascades.currentIndex");
                        (!e || !e.length || t >= e.length) && (nge.localData.set("cascades.inProgress", !1), nge.observer.fire("buttons.updateState"))
                    },
                    h = function(e) {
                        if (s++, nge.observer.fire("cascade.dropExistingSymbol", e), s === a) {
                            e = nge.localData.get("cascades.all");
                            var t = nge.localData.get("cascades.currentIndex");
                            if (r()) {
                                var n = nge.localData.get("cascades.spinResult");
                                n.cascades[t + 1] && (n = n.cascades[t + 1].bonuses) && n.Multiplier && nge.observer.fire("freespin.setMultiplier", t + 1)
                            }! function() {
                                var e = nge.localData.get("cascades.all"),
                                    t = nge.localData.get("cascades.currentIndex");
                                e = e[t].symbolsToAdd;
                                for (var n = t = 0, a = 0; 3 > a; a++)
                                    if (e[a]) {
                                        n = a;
                                        break
                                    } for (a = 4; 0 <= a; a--)
                                    if (e[n][a]) {
                                        t = a;
                                        break
                                    } a = 2;
                                for (var s = 0; 0 <= a; a--)
                                    if (e[a])
                                        for (var o = 0; 5 > o; o++) {
                                            var i = e[a][o];
                                            i && (s++, i.animation = a === n && o === t ? function(e, t) {
                                                c(e, t, b)
                                            } : c, nge.observer.fire("slotMachine.appendSymbol", i, 600 + 150 * s))
                                        }
                            }(), (!e || !e.length || t >= e.length) && (nge.localData.set("cascades.inProgress", !1), nge.observer.fire("buttons.updateState"))
                        }
                    },
                    d = function() {
                        o || (o = !0, i.forEach((function(e) {
                            e.timeScale = 2, e.speedUpCascade = !0, !e.isRunning && e.rafDelay && (nge.rafClearTimeout(e.rafDelay), delete e.rafDelay, e.start())
                        })))
                    };
                this.log = function(e) {
                    console.log("CASCADE: " + e)
                };
                var x = function() {
                    nge.localData.set("cascades.inProgress", !1), nge.localData.set("cascades.completed", !1), nge.localData.set("cascades.currentIndex", 0), nge.localData.set("cascades.all", [])
                };
                this.subscribe = function() {
                    nge.observer.add("slotMachine.spinStart", m, !1, !0), nge.observer.add("slotMachine.spinResponse", g, !1, !0), nge.observer.add("slotMachine.blowCascadesStart", u, !1, !0), nge.observer.add("slotMachine.animateSymbolBangComplete", y, !1, !0), nge.observer.add("slotMachine.destroySymbolComplete", h, !1, !0), nge.observer.add("slotMachine.normalizeSymbolPositionComplete", f, !1, !0), nge.observer.add("spinButton.speedUpCascades", d, !1, !0), nge.observer.add("Transport.close", x, !1, !0)
                }
            }))
        },
        1172: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.DjGameBase.Mlm.Brain.Sounds.extend((function() {
                var e = this;
                this.soundedSymbols = [], this.reelsCount = 5, this.soundsUnused = [], this.introSounds = [{
                    s: "intro_sound",
                    e: "introSound.Play",
                    loop: !0
                }, {
                    s: "intro_sound",
                    e: "jackpot.end",
                    action: "play",
                    loop: !0
                }, {
                    s: "intro_sound",
                    e: "jackpot.startPopup.show",
                    action: "stop"
                }], this.spinGameBackgroundSound.push({
                    s: "bs_background",
                    e: "sound.open_fs_popup.play",
                    action: "stop"
                }), this.freespinGameBackgroundSound = [{
                    s: "bn_background",
                    e: "bn_background.play",
                    action: "play",
                    loop: !0
                }, {
                    s: "bn_background",
                    e: "popupFinish.animate.start",
                    action: "stop"
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
                    s: "scatter_0",
                    e: "frostyFruits.sounds.scatter.1",
                    relaunch: !0
                }, {
                    s: "scatter_1",
                    e: "frostyFruits.sounds.scatter.2",
                    relaunch: !0
                }, {
                    s: "scatter_2",
                    e: "frostyFruits.sounds.scatter.3",
                    relaunch: !0
                }, {
                    s: "scatter_3",
                    e: "frostyFruits.sounds.scatter.4",
                    relaunch: !0
                }, {
                    s: "scatter_4",
                    e: "frostyFruits.sounds.scatter.5",
                    relaunch: !0
                }], this.buttonsClickSounds = [{
                    s: "default_btn",
                    e: "button.click"
                }, {
                    s: "default_btn_hover",
                    e: "button.hover"
                }, {
                    s: "button_start",
                    e: "sound.spin_click.play",
                    relaunch: !0
                }, {
                    s: "button_stop",
                    e: "sound.stop_click.play",
                    relaunch: !0
                }], this.bigWinSounds.push({
                    s: "big_win_start",
                    e: "frostyFruits.sounds.bigWinIceExplosion"
                }), this.popupSounds.push({
                    s: "open_fs_popup",
                    e: "sound.open_fs_popup.play"
                }, {
                    s: "open_fs_popup",
                    e: "sound.open_fs_popup.stop",
                    action: "stop"
                }, {
                    s: "end_fs_popup",
                    e: "sound.end_fs_popup.play"
                }, {
                    s: "end_fs_popup",
                    e: "sound.end_fs_popup.stop",
                    action: "stop"
                }, {
                    s: "pop_up_disappear",
                    e: "frostyFruits.sounds.popupDisappear"
                }), this.counterSounds = [], this.soundExt.push({
                    s: "symbol_explosion_0",
                    e: "frostyFruits.sounds.symbolExplosion.0"
                }, {
                    s: "symbol_explosion_1",
                    e: "frostyFruits.sounds.symbolExplosion.1"
                }, {
                    s: "symbol_explosion_2",
                    e: "frostyFruits.sounds.symbolExplosion.2"
                }, {
                    s: "symbol_explosion_3",
                    e: "frostyFruits.sounds.symbolExplosion.3"
                }, {
                    s: "symbol_explosion_4",
                    e: "frostyFruits.sounds.symbolExplosion.4"
                }, {
                    s: "symbol_drop_0",
                    e: "frostyFruits.sounds.symbolDrop.0",
                    relaunch: !0
                }, {
                    s: "symbol_drop_1",
                    e: "frostyFruits.sounds.symbolDrop.1",
                    relaunch: !0
                }, {
                    s: "symbol_drop_2",
                    e: "frostyFruits.sounds.symbolDrop.2",
                    relaunch: !0
                }, {
                    s: "symbol_drop_3",
                    e: "frostyFruits.sounds.symbolDrop.3",
                    relaunch: !0
                }, {
                    s: "symbol_drop_4",
                    e: "frostyFruits.sounds.symbolDrop.4",
                    relaunch: !0
                }, {
                    s: "symbol_drop_fs_0",
                    e: "frostyFruits.sounds.symbolDrop.fs.0",
                    relaunch: !0
                }, {
                    s: "symbol_drop_fs_1",
                    e: "frostyFruits.sounds.symbolDrop.fs.1",
                    relaunch: !0
                }, {
                    s: "symbol_drop_fs_2",
                    e: "frostyFruits.sounds.symbolDrop.fs.2",
                    relaunch: !0
                }, {
                    s: "symbol_drop_fs_3",
                    e: "frostyFruits.sounds.symbolDrop.fs.3",
                    relaunch: !0
                }, {
                    s: "symbol_drop_fs_4",
                    e: "frostyFruits.sounds.symbolDrop.fs.4",
                    relaunch: !0
                }, {
                    s: "all_symbols_gone_and_come",
                    e: "slotMachine.spinResponse",
                    relaunch: !0
                }, {
                    s: "stage_inc",
                    e: "frostyFruits.sounds.freespinSetMult"
                });
                var t = function() {
                    var e = nge.localData.get("slotMachine.slotWin");
                    e && (0 < (e = parseFloat(e.totalWin)) / (nge.localData.get("lines.value") * nge.localData.get("bet.value") * nge.localData.get("coins.value")) && (nge.observer.fire("sound.volume", {
                        s: "bs_background",
                        volume: .7,
                        duration: 1e3
                    }), nge.observer.fire("sound.volume", {
                        s: "bn_background",
                        volume: .7,
                        duration: 1e3
                    })))
                };
                this.playReelStopSound = function() {}, this.wheelsSpinSounds = function() {}, this.wheelSpin0Sounds = function() {}, this.wheelStopSounds = function() {}, this.layerSwitcherHandler = function(e) {
                    switch (e) {
                        case "intro":
                            nge.observer.fire("introSound.Play");
                            break;
                        case "game":
                        case "gameOffer":
                            nge.observer.fire("introSound.Play"), nge.observer.fire("bs_background.play"), nge.observer.fire("bn_background.stop"), nge.observer.fire("sound.volume", {
                                s: "intro_sound",
                                volume: 1
                            }), nge.observer.fire("sound.volume", {
                                s: "bs_background",
                                volume: 1
                            }), nge.observer.fire("sound.volume", {
                                s: "bn_background",
                                volume: 1
                            });
                            break;
                        case "gameFreeSpin":
                            nge.observer.fire("introSound.Play"), nge.observer.fire("sound.volume", {
                                s: "intro_sound",
                                volume: .5
                            }), nge.observer.fire("bn_background.play"), nge.observer.fire("bs_background.stop")
                    }
                };
                var n = function() {
                        var e = nge.Lib.Helper.getRandomInt(0, 4);
                        nge.observer.fire("frostyFruits.sounds.symbolExplosion." + e)
                    },
                    a = function() {
                        var e = nge.Lib.Helper.getRandomInt(0, 4),
                            t = nge.localData.get("freespin.inProgress") ? "fs." : "";
                        nge.observer.fire("frostyFruits.sounds.symbolDrop." + t + e)
                    },
                    s = function(e) {
                        switch (e) {
                            case "freespinStartPopup":
                                nge.observer.fire("sound.open_fs_popup.play");
                                break;
                            case "freespinEndPopup":
                                nge.observer.fire("sound.end_fs_popup.play");
                                break;
                            case "additionalFreespinsPopup":
                                nge.observer.fire("sound.open_fs_popup.play")
                        }
                    },
                    o = function() {
                        nge.observer.fire("sound.open_fs_popup.stop"), nge.observer.fire("sound.end_fs_popup.stop"), nge.observer.fire("frostyFruits.sounds.popupDisappear")
                    },
                    i = function() {
                        nge.observer.fire("sound.volume", {
                            s: "bs_background",
                            volume: 0
                        }), nge.observer.fire("sound.volume", {
                            s: "bn_background",
                            volume: 0
                        })
                    },
                    r = function() {
                        nge.observer.fire("sound.volume", {
                            s: "bs_background",
                            volume: 1
                        }), nge.observer.fire("sound.volume", {
                            s: "bn_background",
                            volume: 1
                        })
                    },
                    l = function() {
                        nge.observer.fire("sound.volume", {
                            s: "bs_background",
                            volume: .5
                        }), nge.observer.fire("sound.volume", {
                            s: "bn_background",
                            volume: .5
                        })
                    },
                    p = function() {
                        nge.observer.fire("sound.volume", {
                            s: "bs_background",
                            volume: 1
                        }), nge.observer.fire("sound.volume", {
                            s: "bn_background",
                            volume: 1
                        })
                    },
                    c = function() {
                        nge.observer.fire("sound.volume", {
                            s: "bs_background",
                            volume: .5
                        }), nge.observer.fire("sound.volume", {
                            s: "bn_background",
                            volume: .5
                        })
                    };
                this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("winlines.animateAll", t, !1, !0), nge.observer.add("frostyFruits.sounds.playRandomSymbolExplosion", n, !1, !0), nge.observer.add("frostyFruits.sounds.playRandomSymbolDrop", a, !1, !0), nge.observer.add("popup.showStart", s, !1, !0), nge.observer.add("popup.hideStart", o, !1, !0), nge.observer.add("win.big.show", i, !1, !0), nge.observer.add("win.brain.animationComplete", r, !1, !0), nge.observer.add("win.brain.regular.show", l, !1, !0), nge.observer.add("win.regular.hide", p, !1, !0), nge.observer.add("sound.bonus.trigger.play", c, !1, !0)
                }
            }))
        },
        1173: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.SpinButton = nge.App.DjGameBase.Mlm.Brain.SpinButton.extend((function() {
                var e = this,
                    t = this;
                this.logType = "warn", this.useActiveStopSystem = !0, nge.Lib.Helper.removeElementFromArray(this.spinButtonEnableEvents, "win.regular.readyToHide"), nge.Lib.Helper.removeElementFromArray(this.spinButtonEnableEvents, "win.big.hide"), this.spinButtonEnableEvents.push("cascades.winBonusInFreespin"), nge.Lib.Helper.removeElementFromArray(this.spinButtonDisableEvents, "win.big.show"), this.spinButtonDisableEvents.push("cascades.winBonus", "spinButton.speedUpCascades", "freespin.additional"), this.stopButtonDisableEvents.push("win.big.show"), this.stopButtonEnableEvents.push("win.big.hide");
                var n = function() {
                    nge.observer.fire("spinButton.speedUpCascades")
                };
                this.spinGameOnlyBlockers = [function() {
                    return "FreeSpins" === nge.localData.get("slotMachine.state")
                }], this.pressHandlerForSpinGame = function(t) {
                    if (nge.observer.fire("sound.spin_click.stop"), nge.observer.fire("sound.stop_click.stop"), e.modeSpin) {
                        var a = nge.localData.get("regularWinInProgress"),
                            s = nge.localData.get("cascades.inProgress");
                        console[e.logType]("[1] (pressHandlerForSpinGame) needStopRegularWin: " + a + ", cascadesInProgress: " + s), a ? (console[e.logType]("[2] (pressHandlerForSpinGame) needStopRegularWin: " + a + ", cascadesInProgress: " + s), n()) : s ? (console[e.logType]("[3] (pressHandlerForSpinGame) needStopRegularWin: " + a + ", cascadesInProgress: " + s), n()) : e.checkSpinBlockers(e.spinEnableBlockers) || e.checkSpinBlockers(e.spinGameOnlyBlockers) || (console[e.logType]("[4] (pressHandlerForSpinGame) needStopRegularWin: " + a + ", cascadesInProgress: " + s), t += " by press //to start slot machine//", e.useActiveStopSystem ? e.onStopButtonEnable(t) : e.disableButton(t, e.modeSpin, e.spinFrames), nge.observer.fire("slotMachine.spinCommandAnimation"), nge.observer.fire("slotMachine.spinCommand", null, 10)), nge.observer.fire("button.spin.pressed"), nge.observer.fire("sound.spin_click.play")
                    } else {
                        if (e.useActiveStopSystem) {
                            if (e.isStopping) return
                        } else e.onStopButtonDisable(t + " by press //to stop slot machine//");
                        e.isStopping = !0, nge.observer.fire("slotMachine.stopCommand"), t = nge.localData.get("slotMachineSpinning"), a = nge.localData.get("settings.turboMode"), t && !a && nge.observer.fire("blinker.show"), nge.observer.fire("sound.stop_click.play")
                    }
                }, this.pressHandlerForFreespinGame = function(a) {
                    if (nge.observer.fire("sound.spin_click.stop"), nge.observer.fire("sound.stop_click.stop"), e.modeSpin) {
                        if (e.freespinsInProgress) {
                            var s = nge.localData.get("regularWinInProgress"),
                                o = nge.localData.get("cascades.inProgress");
                            console[e.logType]("[1] (pressHandlerForFreespinGame) needStopRegularWin: " + s + ", cascadesInProgress: " + o), s ? (nge.observer.fire("win.abortWin"), nge.observer.fire("spinButton.speedUpSymbolsAnimation"), n(), console[e.logType]("[2] (pressHandlerForFreespinGame) needStopRegularWin: " + s + ", cascadesInProgress: " + o)) : o ? (n(), console[e.logType]("[3] (pressHandlerForFreespinGame) needStopRegularWin: " + s + ", cascadesInProgress: " + o)) : (console[e.logType]("[4] (pressHandlerForFreespinGame) needStopRegularWin: " + s + ", cascadesInProgress: " + o), e.disableButton(a + " by press //to spin slot machine in fs game//", e.modeSpin, e.spinFrames), nge.observer.fire("slotMachine.spinCommandAnimation"), nge.observer.fire("freespin.makeSpin", null, 10))
                        } else {
                            if (t.checkSpinBlockers(t.spinEnableBlockers)) return;
                            e.freespinsInProgress = !0, e.disableButton(a + " by press //to launch fs game//", e.modeSpin, e.spinFrames), nge.observer.fire("slotMachine.spinCommandAnimation"), nge.observer.fire("freespin.press.spinButton", null, 10)
                        }
                        nge.observer.fire("button.spin.pressed"), nge.observer.fire("sound.spin_click.play")
                    } else {
                        if (e.useActiveStopSystem) {
                            if (e.isStopping) return
                        } else e.onStopButtonDisable("by press //to stop slot machine from fs game");
                        e.isStopping = !0, nge.observer.fire("slotMachine.stopCommand"), nge.localData.get("slotMachineSpinning") && nge.observer.fire("blinker.show"), nge.observer.fire("sound.stop_click.play")
                    }
                };
                var a = function() {
                    nge.localData.get("settings.turboMode") && !nge.localData.get("freespin.inProgress") && (console.log("_onSlotMachineSpinResponse"), nge.observer.fire("spinButton.pressFromCode", null, 1))
                };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("slotMachine.spinResponse", a, !1, !0)
                }
            }))
        },
        1174: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic = {}
        },
        1175: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: ["@PAYTABLE", "@SETTINGS_SCREEN", "FREESPIN", "SPIN"],
                        FREESPIN: ["SPIN"],
                        PAYTABLE: ["SPIN"],
                        SETTINGS_SCREEN: ["SPIN"]
                    }
                }, this.sharedStates = {
                    play: ["SHARED"]
                }, this.sharedButtons.play.linesChanger = {
                    name: "linesChanger",
                    enabled: !1,
                    visible: !0
                }
            }))
        },
        1176: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.Controller = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.Controller.extend((function() {}))
        },
        1177: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States = {}
        },
        1178: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SharedState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SharedState.extend((function() {
                var e = this,
                    t = nge.brain.do("getAllSpinLayers")[0],
                    n = nge.brain.do("getAllFreespinLayers")[0],
                    a = nge.brain.do("getAllBonusLayers")[0];
                this.propUpdateHandlers.showSettingsAndInfo = function() {
                    var e = nge.localData.get("autospin"),
                        s = nge.localData.get("slotMachine.state"),
                        o = nge.localData.get("layersSwitcher.currentLayer"),
                        i = !s,
                        r = nge.localData.get("isSpinReadyToProceed"),
                        l = nge.localData.get("freespin.inProgress"),
                        p = nge.localData.get("bonusWheel.spinning"),
                        c = nge.localData.get("cascades.inProgress"),
                        m = "big" === nge.localData.get("win.winType") || "regular" === nge.localData.get("win.winType");
                    return "Ready" === s && t.includes(o) || "FreeSpins" === s && n.includes(o) ? i = !0 : "PickBonus" !== s || p || !a.includes(o) && !n.includes(o) ? "BonusWheel" === s && (a.includes(o) || n.includes(o)) && (i = !0) : r = i = !0, !e && i && r && !c && !l && !m
                }, this.spinCompleteHandler = function() {
                    nge.localData.get("cascades.inProgress") || (e._spinInProgress = !1)
                }
            }))
        },
        1179: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile = {}
        },
        1180: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic = {}
        },
        1181: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: ["@PAYTABLE", "@SETTINGS_SCREEN", "FREESPIN", "SPIN"],
                        FREESPIN: ["SPIN"],
                        PAYTABLE: ["SPIN"],
                        SETTINGS_SCREEN: ["SPIN"]
                    }
                }, this.sharedStates = {
                    play: ["SHARED"]
                }
            }))
        },
        1182: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States = {}
        },
        1183: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.SharedState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.SharedState.extend((function() {
                var e = this,
                    t = nge.brain.do("getAllSpinLayers")[0],
                    n = nge.brain.do("getAllFreespinLayers")[0],
                    a = nge.brain.do("getAllBonusLayers")[0];
                this.propUpdateHandlers.showSettingsAndInfo = function() {
                    var e = nge.localData.get("autospin"),
                        s = nge.localData.get("slotMachine.state"),
                        o = nge.localData.get("layersSwitcher.currentLayer"),
                        i = !s,
                        r = nge.localData.get("isSpinReadyToProceed"),
                        l = nge.localData.get("freespin.inProgress"),
                        p = nge.localData.get("bonusWheel.spinning"),
                        c = nge.localData.get("cascades.inProgress"),
                        m = "big" === nge.localData.get("win.winType") || "regular" === nge.localData.get("win.winType");
                    return "Ready" === s && t.includes(o) || "FreeSpins" === s && n.includes(o) ? i = !0 : "PickBonus" !== s || p || !a.includes(o) && !n.includes(o) ? "BonusWheel" === s && (a.includes(o) || n.includes(o)) && (i = !0) : r = i = !0, !e && i && r && !c && !l && !m
                }, this.spinCompleteHandler = function() {
                    nge.localData.get("cascades.inProgress") || (e._spinInProgress = !1)
                }
            }))
        },
        1184: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport = {}
        },
        1185: function(e, t) {
            nge.Mlm.Transport.Helper.winlineTypes.Bonus.splice(nge.Mlm.Transport.Helper.winlineTypes.Bonus.indexOf("amount"), 1), nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.FreeSpins.push("amount"), nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.Multiplier = ["wonSymbols", "params.value"]
        },
        1186: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup = {}
        },
        1187: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models = {}
        },
        1188: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.AuthResponse = nge.App.DjGameBase.Mlm.Transport.APIMockup.Models.AuthResponse.extend((function() {
                this.get = function() {
                    var e = this.super.get();
                    return e.data.gameParameters.initialSymbols = e.data.gameParameters.initialSymbols[0], e
                }
            }))
        },
        1189: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.SpinResponse = nge.App.ClassicGameBase.Mlm.Transport.APIMockup.Models.SpinResponse.extend((function() {
                this.get = function() {
                    var e = this.data.requestData;
                    if (this.checkErrors(e)) return !1;
                    this.chargeForSpin(e);
                    var t = this.data.baseResponse;
                    t.result = "true", t.sesId = nge.localData.get("apiMockup.sesId"), t.data.state = "Ready", this.response = t, this.spinSymbols = this.getSpinSymbols(), t.data.spinResult = {
                        type: "SpinResult",
                        rows: this.spinSymbols[0]
                    };
                    for (var n = 1; n < this.spinSymbols.length; n++) t.data["spinResultStage" + (n + 1)] = {
                        type: "SpinResult",
                        rows: this.spinSymbols[n]
                    };
                    for (this.winResult = {
                            slotWin: {
                                totalWin: 0,
                                canGamble: "false"
                            }
                        }, this.winResult.bonusGameData = null, t = 0; t < this.spinSymbols.length; t++) n = this.generateSlotWin(this.spinSymbols[t], e), this.winResult.slotWin["lineWinAmounts" + (0 === t ? "" : "Stage" + (t + 1))] = n.slotWin.lineWinAmounts, n.bonusGameData && (this.winResult.bonusGameData = n.bonusGameData), this.winResult.slotWin.totalWin += parseFloat(n.slotWin.totalWin);
                    if (1 < this.spinSymbols.length)
                        for (e = 2; e <= this.spinSymbols.length; e++)(t = this.winResult.slotWin["lineWinAmountsStage" + e] || []).push({
                            type: "Bonus",
                            bonusName: "Multiplier",
                            wonSymbols: "",
                            params: {
                                value: "1"
                            }
                        }), this.winResult.slotWin["lineWinAmountsStage" + e] = t;
                    return this.winResult.slotWin.totalWin = (this.winResult.slotWin.totalWin || 0) + "", this.winResult.slotWin.lineWinAmounts ? (this.response.data.slotWin = this.winResult.slotWin, this.processBonusGameData(), this.payForWin(this.response.data.slotWin.totalWin)) : this.response.data.slotWin = !1, nge.localData.set("apiMockup.gamble.tryCount", 0), nge.localData.set("apiMockup.gamble.lastWin", 0), nge.localData.set("apiMockup.slotMachine.spinResult", this.response.data.spinResult), nge.localData.set("apiMockup.slotMachine.slotWin", this.response.data.slotWin), this.response
                }, this.generateSlotWin = function(e, t, n) {
                    return this.super.generateSlotWin(e, t, n)
                }, this.processBonusGameData = function() {
                    if (this.winResult.bonusGameData) {
                        this.response.data.state = this.winResult.bonusGameData.newState, this.response.data.slotWin.canGamble = nge.App.getInstance("nge.Mlm.Transport.APIMockup.Helpers.Gamble").getCanGamble("false");
                        var e = nge.localData.get("apiMockup.gameSettings");
                        if ("FreeSpins" === this.winResult.bonusGameData.newState) this.super.processBonusGameData(), e.bonusGameRequest = "FreeSpinRequest";
                        else if ("PickBonus" === this.winResult.bonusGameData.newState) {
                            e.bonusGameRequest = "PickBonusItemRequest", nge.localData.set("apiMockup.bonusGame.inProgress", !0), nge.localData.set("apiMockup.shamrockTreasure.lastSpinRequestData", this.data.requestData);
                            var t = [];
                            e = e.luckyMillResults;
                            for (var n = 0; n < e.length; n++) t.push({
                                type: "IndexedItem",
                                index: n + "",
                                value: e[n],
                                picked: "false"
                            });
                            nge.localData.set("apiMockup.shamrockTreasure.bonusGameData", {
                                fields: t,
                                openedFieldCounts: []
                            })
                        }
                    }
                }
            }))
        },
        5: function(e, t, n) {
            n(1067), n(1068), n(1069), n(1070), n(1071), n(1072), n(1073), n(1074), n(1075), n(1076), n(1077), n(1078), n(1079), n(1080), n(1081), n(1082), n(1083), n(1084), n(1085), n(1086), n(1087), n(1088), n(1089), n(1090), n(1091), n(1092), n(1093), n(1094), n(1095), n(1096), n(1097), n(1098), n(1099), n(1100), n(1101), n(1102), n(1103), n(1104), n(1105), n(1106), n(1107), n(1108), n(1109), n(1110), n(1111), n(1112), n(1113), n(1114), n(1115), n(1116), n(1117), n(1118), n(1119), n(1120), n(1121), n(1122), n(1123), n(1124), n(1125), n(1126), n(1127), n(1128), n(1129), n(1130), n(1131), n(1132), n(1133), n(1134), n(1135), n(1136), n(1137), n(1138), n(1139), n(1140), n(1141), n(1142), n(1143), n(1144), n(1145), n(1146), n(1147), n(1148), n(1149), n(1150), n(1151), n(1152), n(1153), n(1154), n(1155), n(1156), n(1157), n(1158), n(1159), n(1160), n(1161), n(1162), n(1163), n(1164), n(1165), n(1166), n(1167), n(1168), n(1169), n(1170), n(1171), n(1172), n(1173), n(1174), n(1175), n(1176), n(1177), n(1178), n(1179), n(1180), n(1181), n(1182), n(1183), n(1184), n(1185), n(1186), n(1187), n(1188), n(1189)
        }
    }
]);