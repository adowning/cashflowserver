<?php

namespace VanguardLTE\Games\NET;

class SlotSettings
{
    // Properties that were common across analyzed NetEnt games
    public $playerId = null;
    public $splitScreen = null;
    public $reelStrip1 = null;
    public $reelStrip2 = null;
    public $reelStrip3 = null;
    public $reelStrip4 = null;
    public $reelStrip5 = null;
    public $reelStrip6 = null;
    public $reelStripBonus1 = null;
    public $reelStripBonus2 = null;
    public $reelStripBonus3 = null;
    public $reelStripBonus4 = null;
    public $reelStripBonus5 = null;
    public $reelStripBonus6 = null;
    public $slotId = '';
    public $Line = null;
    public $scaleMode = null;
    public $numFloat = null;
    public $gameLine = null;
    public $Bet = null;
    public $isBonusStart = null;
    public $Balance = null;
    public $SymbolGame = null;
    public $GambleType = null;
    public $lastEvent = null;
    public $Jackpots = [];
    public $keyController = null;
    public $slotViewState = null;
    public $hideButtons = null;
    public $slotReelsConfig = null;
    public $slotFreeCount = null;
    public $slotFreeMpl = null;
    public $slotWildMpl = null;
    public $slotExitUrl = null;
    public $slotBonus = null;
    public $slotBonusType = null;
    public $slotScatterType = null;
    public $slotGamble = null;
    public $Paytable = [];
    public $slotSounds = [];

    protected $shop_id = null;
    public $currency = null;
    public $jpgPercentZero = false;
    public $count_balance = null;
    public $CurrentDenom = null;
    public $Denominations = [];
    public $MaxWin = null;
    protected $Bank = null;
    protected $Percent = null;
    protected $WinGamble = null;

    protected $gameData = [];
    protected $gameDataStatic = [];
    protected $ReelStrips = [];
    protected $gameDataInput = [];


    public function __construct($gameDataInput)
    {
        $this->gameDataInput = $gameDataInput;

        $this->slotId = $gameDataInput['slotId'];
        $this->playerId = $gameDataInput['playerId'];
        $this->Balance = $gameDataInput['balance'];
        $this->CurrentDenom = $gameDataInput['currentDenom'];
        $this->Denominations = $gameDataInput['denominations'];
        $this->Bet = $gameDataInput['betLevels'];
        $this->Line = $gameDataInput['lines'];
        $this->gameLine = $gameDataInput['defaultGameLine'];
        $this->currency = $gameDataInput['currency'];

        $this->Paytable = $gameDataInput['paytable'] ?? [];
        $this->ReelStrips = $gameDataInput['reelStrips'] ?? [];
        $this->SymbolGame = $gameDataInput['symbolGame'] ?? [];

        $this->shop_id = $gameDataInput['shop_id'];
        $this->MaxWin = $gameDataInput['maxWin'];
        $this->Percent = $gameDataInput['percent'];
        $this->WinGamble = $gameDataInput['winGamble'];
        $this->count_balance = $gameDataInput['count_balance'];
        $this->jpgPercentZero = $gameDataInput['jpgPercentZero'] ?? false;

        $this->Bank = $gameDataInput['bank'];

        $this->Jackpots = $gameDataInput['jackpots'] ?? [];

        $this->gameData = $gameDataInput['gameData'] ?? [];
        $this->gameDataStatic = $gameDataInput['gameDataStatic'] ?? [];
        $this->lastEvent = $gameDataInput['lastEvent'] ?? 'NULL';
        $this->slotViewState = $gameDataInput['slotViewState'] ?? 'Normal';
        $this->isBonusStart = $gameDataInput['isBonusStart'] ?? false;

        $this->setupReelStrips();

        $this->scaleMode = $gameDataInput['scaleMode'] ?? 0;
        $this->numFloat = $gameDataInput['numFloat'] ?? 0;
        $this->splitScreen = $gameDataInput['splitScreen'] ?? false;
        $this->slotBonus = $gameDataInput['slotBonus'] ?? true;
        $this->slotGamble = $gameDataInput['slotGamble'] ?? true;
        $this->slotFastStop = $gameDataInput['slotFastStop'] ?? 1;
        $this->slotExitUrl = $gameDataInput['slotExitUrl'] ?? '/';
        $this->slotWildMpl = $gameDataInput['slotWildMpl'] ?? 1;
        $this->GambleType = $gameDataInput['gambleType'] ?? 1;
        $this->slotFreeMpl = $gameDataInput['slotFreeMpl'] ?? 1;

        $this->slotBonusType = $gameDataInput['slotBonusType'] ?? 1;
        $this->slotScatterType = $gameDataInput['slotScatterType'] ?? 0;
        $this->slotFreeCount = $gameDataInput['slotFreeCount'] ?? [0,0,0,0,0,0];

        $this->keyController = $gameDataInput['keyController'] ?? [
            '13' => 'uiButtonSpin,uiButtonSkip', '49' => 'uiButtonInfo', '50' => 'uiButtonCollect',
            '51' => 'uiButtonExit2', '52' => 'uiButtonLinesMinus', '53' => 'uiButtonLinesPlus',
            '54' => 'uiButtonBetMinus', '55' => 'uiButtonBetPlus', '56' => 'uiButtonGamble',
            '57' => 'uiButtonRed', '48' => 'uiButtonBlack', '189' => 'uiButtonAuto', '187' => 'uiButtonSpin'
        ];
        $this->slotReelsConfig = $gameDataInput['slotReelsConfig'] ?? [
            [425, 142, 3], [669, 142, 3], [913, 142, 3], [1157, 142, 3], [1401, 142, 3]
        ];
        $this->hideButtons = $gameDataInput['hideButtons'] ?? [];
        $this->slotSounds = $gameDataInput['slotSounds'] ?? [];
    }

    protected function setupReelStrips($reelSetName = 'main')
    {
        $reelSetToUse = $this->ReelStrips[$reelSetName] ?? null;
        if (!$reelSetToUse && $reelSetName !== 'main' && isset($this->ReelStrips['main'])) {
            $reelSetToUse = $this->ReelStrips['main'];
        } elseif (!$reelSetToUse) {
            error_log("Warning: Reel strips for '{$reelSetName}' not found or empty in game {$this->slotId}.");
            return;
        }

        foreach (['reelStrip1', 'reelStrip2', 'reelStrip3', 'reelStrip4', 'reelStrip5', 'reelStrip6'] as $reelStripKey) {
            if (isset($reelSetToUse[$reelStripKey])) {
                $this->{$reelStripKey} = $reelSetToUse[$reelStripKey];
            }
        }
        $bonusReelSet = $this->ReelStrips['bonus'] ?? $reelSetToUse;
        foreach (['reelStripBonus1', 'reelStripBonus2', 'reelStripBonus3', 'reelStripBonus4', 'reelStripBonus5', 'reelStripBonus6'] as $idx => $reelStripKey) {
            $plainKey = 'reelStrip' . ($idx + 1);
            if (isset($bonusReelSet[$plainKey])) {
                $this->{$reelStripKey} = $bonusReelSet[$plainKey];
            } elseif (isset($bonusReelSet[$reelStripKey])) {
                 $this->{$reelStripKey} = $bonusReelSet[$reelStripKey];
            }
        }
    }

    public function SetGameData($key, $value)
    {
        $timeLife = 86400;
        $this->gameData[$key] = [
            'timelife' => time() + $timeLife,
            'payload' => $value
        ];
    }

    public function GetGameData($key)
    {
        if (isset($this->gameData[$key])) {
            if ($this->gameData[$key]['timelife'] <= time()) {
                unset($this->gameData[$key]);
                return 0;
            }
            return $this->gameData[$key]['payload'];
        }
        return 0;
    }

    public function HasGameData($key)
    {
        if (isset($this->gameData[$key])) {
             if ($this->gameData[$key]['timelife'] <= time()) {
                unset($this->gameData[$key]);
                return false;
            }
            return true;
        }
        return false;
    }

    public function GetAllGameData()
    {
        foreach ($this->gameData as $key => $vl) {
            if ($vl['timelife'] <= time()) {
                unset($this->gameData[$key]);
            }
        }
        return $this->gameData;
    }

    public function SetGameDataStatic($key, $value)
    {
        $timeLife = 86400;
        $this->gameDataStatic[$key] = [
            'timelife' => time() + $timeLife,
            'payload' => $value
        ];
    }

    public function GetGameDataStatic($key)
    {
        if (isset($this->gameDataStatic[$key])) {
             if ($this->gameDataStatic[$key]['timelife'] <= time()) {
                unset($this->gameDataStatic[$key]);
                return 0;
            }
            return $this->gameDataStatic[$key]['payload'];
        }
        return 0;
    }

    public function HasGameDataStatic($key)
    {
         if (isset($this->gameDataStatic[$key])) {
             if ($this->gameDataStatic[$key]['timelife'] <= time()) {
                unset($this->gameDataStatic[$key]);
                return false;
            }
            return true;
        }
        return false;
    }

    public function GetAllGameDataStatic()
    {
        foreach ($this->gameDataStatic as $key => $vl) {
            if ($vl['timelife'] <= time()) {
                unset($this->gameDataStatic[$key]);
            }
        }
        return $this->gameDataStatic;
    }

    public function FormatFloat($num)
    {
        $str0 = explode('.', (string)$num);
        if (isset($str0[1])) {
            if (strlen($str0[1]) > 4) {
                return round($num * 100) / 100;
            } else if (strlen($str0[1]) > 2) {
                return floor($num * 100) / 100;
            } else {
                return $num;
            }
        } else {
            return $num;
        }
    }

    public function CheckBonusWin()
    {
        $allRateCnt = 0;
        $allRate = 0;
        if(!is_array($this->Paytable) || empty($this->Paytable)) return 0;
        foreach ($this->Paytable as $vl) {
            if(!is_array($vl)) continue;
            foreach ($vl as $vl2) {
                if ($vl2 > 0) {
                    $allRateCnt++;
                    $allRate += $vl2;
                    break;
                }
            }
        }
        return ($allRateCnt > 0) ? ($allRate / $allRateCnt) : 0;
    }

    public function GetRandomPay()
    {
        $allRate = [];
        if(!is_array($this->Paytable) || empty($this->Paytable)) return 0;
        foreach ($this->Paytable as $vl) {
            if(!is_array($vl)) continue;
            foreach ($vl as $vl2) {
                if ($vl2 > 0) {
                    $allRate[] = $vl2;
                }
            }
        }
        if(empty($allRate)) return 0;
        shuffle($allRate);
        return $allRate[0];
    }

    public function GetBank($slotState = '')
    {
        if($this->CurrentDenom == 0) return 0; // Avoid division by zero
        return $this->Bank / $this->CurrentDenom;
    }

    public function SetBank($slotState = '', $sum, $slotEvent = '')
    {
        $currentBankInSmallestUnit = $this->Bank;
        $sumInSmallestUnit = $sum * $this->CurrentDenom;

        $this->Bank = $currentBankInSmallestUnit + $sumInSmallestUnit;
        return $this->Bank;
    }

    public function GetPercent()
    {
        return $this->Percent;
    }

    public function GetBalance()
    {
        if($this->CurrentDenom == 0) return 0; // Avoid division by zero
        return $this->Balance / $this->CurrentDenom;
    }

    public function SetBalance($sum, $slotEvent = '')
    {
        $currentBalanceInSmallestUnit = $this->Balance;
        $sumInSmallestUnit = $sum * $this->CurrentDenom;

        $this->Balance = $currentBalanceInSmallestUnit + $sumInSmallestUnit;
        return $this->Balance;
    }

    public function GetGambleSettings()
    {
        if (!isset($this->WinGamble) || $this->WinGamble <= 0) return 0;
        $spinWin = rand(1, (int)$this->WinGamble);
        return $spinWin;
    }

    public function GetReelStrips($winType, $slotEvent)
    {
        $currentReelSetKey = 'main';
        // Determine if 'freespin' uses 'bonus' reels or if there's another convention
        if (strtolower($slotEvent) == 'freespin' && isset($this->ReelStrips['bonus'])) {
            $currentReelSetKey = 'bonus';
        } elseif (strtolower($slotEvent) == 'respin' && isset($this->ReelStrips['respin'])) {
             $currentReelSetKey = 'respin'; // Example for respin-specific reels
        }

        $reelSetData = $this->ReelStrips[$currentReelSetKey] ?? ($this->ReelStrips['main'] ?? null);

        if (!$reelSetData || !is_array($reelSetData)) {
            error_log("Error: Reel strips for '{$currentReelSetKey}' or 'main' are not defined or invalid in game {$this->slotId}.");
            $numReelsFallback = is_array($this->slotReelsConfig) ? count($this->slotReelsConfig) : 5;
            $reel = ['rp' => array_fill(0, $numReelsFallback, 0)];
            for($r=1; $r<=$numReelsFallback; $r++) {
                 $numVisibleFallback = (isset($this->slotReelsConfig[$r-1][2])) ? $this->slotReelsConfig[$r-1][2] : 3;
                 $reel['reel'.$r] = array_fill(0, $numVisibleFallback, 'X');
            }
            return $reel;
        }

        $prs = [];
        $numReels = count($this->slotReelsConfig);

        if (strtolower($winType) != 'bonus') {
            for ($r = 0; $r < $numReels; $r++) {
                $reelIdx = $r + 1; // 1-indexed for reelStrip keys
                $reelStripKey = 'reelStrip' . $reelIdx;
                $numVisibleSymbols = $this->slotReelsConfig[$r][2] ?? 3;

                if (isset($reelSetData[$reelStripKey]) && is_array($reelSetData[$reelStripKey]) && count($reelSetData[$reelStripKey]) > 0) {
                    $stripLength = count($reelSetData[$reelStripKey]);
                    // Position 'pos' is the index of the first symbol that will be visible on the reel.
                    // If stripLength < numVisibleSymbols, it means the reel strip is shorter than the view window.
                    // In this case, maxPos should be 0, so we always start from the beginning of the strip.
                    $maxPos = ($stripLength >= $numVisibleSymbols) ? ($stripLength - $numVisibleSymbols) : 0;
                    $prs[$reelIdx] = ($maxPos > 0) ? mt_rand(0, $maxPos) : 0;
                } else {
                     $prs[$reelIdx] = 0;
                }
            }
        } else {
            // Simplified bonus scatter placement for base class.
            // Child classes must override for specific scatter logic (e.g. ensuring N scatters).
            for ($r = 0; $r < $numReels; $r++) {
                $reelIdx = $r + 1;
                $reelStripKey = 'reelStrip' . $reelIdx;
                $numVisibleSymbols = $this->slotReelsConfig[$r][2] ?? 3;

                 if (isset($reelSetData[$reelStripKey]) && is_array($reelSetData[$reelStripKey]) && count($reelSetData[$reelStripKey]) > 0) {
                    $stripLength = count($reelSetData[$reelStripKey]);
                    $maxPos = ($stripLength >= $numVisibleSymbols) ? ($stripLength - $numVisibleSymbols) : 0;
                    // For bonus, one might try to force scatters using GetRandomScatterPos on certain reels.
                    // This is a placeholder for more complex logic.
                    $prs[$reelIdx] = ($maxPos > 0) ? mt_rand(0, $maxPos) : 0;
                } else {
                    $prs[$reelIdx] = 0;
                }
            }
        }

        $reel = ['rp' => []];
        foreach ($prs as $reelNum => $pos) { // $reelNum is 1-indexed from $prs keys
            $reelConfigIndex = $reelNum - 1; // 0-indexed for slotReelsConfig
            $reelStripKeyToUse = 'reelStrip' . $reelNum;
            $numVisibleSymbols = $this->slotReelsConfig[$reelConfigIndex][2] ?? 3;

            $reel['reel' . $reelNum] = array_fill(0, $numVisibleSymbols, 'DEF'); // Default symbol

            if (!isset($reelSetData[$reelStripKeyToUse]) || !is_array($reelSetData[$reelStripKeyToUse])) {
                error_log("Warning: Reel strip '{$reelStripKeyToUse}' not found or invalid for reel {$reelNum} in game {$this->slotId}.");
                $reel['rp'][] = 0; // Record default position
                continue;
            }

            $strip = $reelSetData[$reelStripKeyToUse];
            $stripLength = count($strip);

            if ($stripLength == 0) {
                 error_log("Warning: Reel strip '{$reelStripKeyToUse}' is empty for reel {$reelNum} in game {$this->slotId}.");
                 $reel['rp'][] = 0;
                 continue;
            }

            for($i=0; $i < $numVisibleSymbols; $i++){
                // If strip is shorter than visible window, symbols will repeat due to modulo.
                $symbolIndex = ($pos + $i) % $stripLength;
                $reel['reel' . $reelNum][$i] = $strip[$symbolIndex];
            }

            $reel['rp'][] = $pos;
        }
        return $reel;
    }
}
```
