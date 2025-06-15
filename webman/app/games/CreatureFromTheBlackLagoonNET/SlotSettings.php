<?php

namespace VanguardLTE\Games\CreatureFromTheBlackLagoonNET;

use VanguardLTE\Games\CreatureFromTheBlackLagoonNET\GameReel; // Assuming GameReel will be in the same dir

class SlotSettings extends \VanguardLTE\Games\NET\SlotSettings
{
    public function __construct($gameDataInput)
    {
        // Initialize game-specific properties first
        $this->slotId = $gameDataInput['slotId']; // Set slotId early for GameReel path if needed

        // Paytable specific to CreatureFromTheBlackLagoonNET
        $fsPaytable = [
            'SYM_0' => [0, 0, 0, 0, 0, 0], // Usually Scatter or not used directly for line wins
            'SYM_1' => [0, 0, 0, 0, 0, 0], // Usually Wild
            'SYM_2' => [0, 0, 0, 0, 0, 0], // Usually Bonus
            'SYM_3' => [0, 0, 0, 25, 250, 750],
            'SYM_4' => [0, 0, 0, 20, 200, 600],
            'SYM_5' => [0, 0, 0, 15, 150, 500],
            'SYM_6' => [0, 0, 0, 10, 100, 400],
            'SYM_7' => [0, 0, 0, 5, 40, 125],
            'SYM_8' => [0, 0, 0, 5, 40, 125],
            'SYM_9' => [0, 0, 0, 4, 30, 100],
            'SYM_10' => [0, 0, 0, 4, 30, 100]
        ];

        // Symbol Game specific to CreatureFromTheBlackLagoonNET
        $fsSymbolGame = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']; // Verify these symbols

        // Reel strips
        // GameReel needs to be refactored to not use base_path() or be passed the path.
        // For now, assuming GameReel can be instantiated and its properties accessed.
        // The path to reels.txt will need to be handled correctly.
        // We might need to pass the content of reels.txt to GameReel or GameReel needs to know its location.
        // Let's assume GameReel is in the same directory and can find its reels.txt

        // Path to the reels.txt file for this specific game
        // This assumes the SlotSettings.php file is in webman/app/games/CreatureFromTheBlackLagoonNET/
        $reelsFileBasePath = __DIR__ . '/'; // GameReel should expect path to its directory

        $reelInstance = new GameReel($reelsFileBasePath); // Pass base path to GameReel constructor

        $fsReelStrips = [
            'main' => $reelInstance->reelsStrip,      // From GameReel public property
            'bonus' => $reelInstance->reelsStripBonus // From GameReel public property
        ];

        // Prepare game-specific data for the parent constructor
        $gameDataInput['paytable'] = $fsPaytable;
        $gameDataInput['reelStrips'] = $fsReelStrips;
        $gameDataInput['symbolGame'] = $fsSymbolGame;

        // Game-specific overrides for properties that might differ from base defaults
        // These were previously set in the old constructor after DB loads
        $gameDataInput['slotBonusType'] = $gameDataInput['slotBonusType'] ?? 1;
        $gameDataInput['slotScatterType'] = $gameDataInput['slotScatterType'] ?? 0; // '0' is often the scatter symbol
        $gameDataInput['splitScreen'] = $gameDataInput['splitScreen'] ?? false;
        $gameDataInput['slotBonus'] = $gameDataInput['slotBonus'] ?? true;
        $gameDataInput['slotGamble'] = $gameDataInput['slotGamble'] ?? true;
        $gameDataInput['slotFastStop'] = $gameDataInput['slotFastStop'] ?? 1;
        $gameDataInput['slotWildMpl'] = $gameDataInput['slotWildMpl'] ?? 1; // Wild multiplier if any
        $gameDataInput['GambleType'] = $gameDataInput['GambleType'] ?? 1; // Type of gamble game

        // CreatureFromTheBlackLagoonNET specific free spin counts
        $gameDataInput['slotFreeCount'] = $gameDataInput['slotFreeCount'] ?? [0, 0, 0, 10, 15, 20];
        $gameDataInput['slotFreeMpl'] = $gameDataInput['slotFreeMpl'] ?? 1; // Free spin multiplier

        // Lines configuration for this game
        $gameDataInput['lines'] = $gameDataInput['lines'] ?? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        $gameDataInput['defaultGameLine'] = $gameDataInput['defaultGameLine'] ?? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

        // Slot Reels Configuration - positions and visible symbols per reel
        // [[x, y, num_visible_symbols], [x,y, num_visible_symbols], ...]
        $gameDataInput['slotReelsConfig'] = $gameDataInput['slotReelsConfig'] ?? [
            [425, 142, 3], [669, 142, 3], [913, 142, 3], [1157, 142, 3], [1401, 142, 3]
        ];

        // Call the parent constructor with the fully prepared $gameDataInput
        parent::__construct($gameDataInput);

        // Any other game-specific initialization after parent constructor can go here
        // For example, if this game has specific GameData or GameDataStatic items to set by default:
        // if (!$this->HasGameData('CreatureFeatureLevel')) {
        //     $this->SetGameData('CreatureFeatureLevel', 0);
        // }
    }

    // If CreatureFromTheBlackLagoonNET has any methods that were in its original SlotSettings
    // and are NOT covered by the base class, they should be implemented here.
    // For example, if GetReelStrips had very specific logic for this game that differs
    // from the base implementation, it could be overridden here.
    // public function GetReelStrips($winType, $slotEvent)
    // {
    //    // game specific logic
    //    return parent::GetReelStrips($winType, $slotEvent); // or completely custom
    // }


    /**
     * Determines the type of spin result (none, win, bonus) and potential win limit.
     * This is game-specific.
     *
     * @param string $garantType Type of guarantee ('bet', 'bonus', etc.)
     * @param float $bet Total bet for the spin (in currency units)
     * @param int $lines Number of lines played
     * @return array ['type' => 'win'|'bonus'|'none', 'maxWinAmount' => float]
     */
    public function GetSpinSettings($garantType = 'bet', $bet, $lines)
    {
        // Input $bet is total bet in currency units.
        // $this->AllBet should be set if used by other methods called from here.
        // $this->AllBet = $bet; // Or $bet * $lines if $bet was per line. Assuming $bet is total bet.
        // For Creature, the original Server.php used $allbet = $betline * $lines.
        // The GetSpinSettings in original SlotSettings used $this->AllBet = $bet * $lines where $bet was bet per line.
        // Let's assume the $bet parameter here is total bet value.
        $this->AllBet = $bet;


        // Simplified win/bonus determination logic.
        // Probabilities for win/bonus could be passed in via $this->gameDataInput
        // or defined as game constants.
        // Original game used complex RTP logic from DB. We simplify here.

        $currentBonusWinChance = $this->gameDataInput['currentBonusWinChance'] ?? 50; // e.g., 1 in X for bonus
        $currentSpinWinChance = $this->gameDataInput['currentSpinWinChance'] ?? 3;    // e.g., 1 in Y for a win

        // If already in free spins, different logic might apply (e.g., higher win chance, no new bonus trigger)
        if ($this->GetGameData($this->slotId . 'CurrentFreeGame') > 0 &&
            $this->GetGameData($this->slotId . 'CurrentFreeGame') <= $this->GetGameData($this->slotId . 'FreeGames')) {
            // Higher chance of winning during free spins perhaps
            $currentSpinWinChance = $this->gameDataInput['currentFreeSpinWinChance'] ?? 2; // More frequent wins in FS
            $currentBonusWinChance = 10000; // No retrigger of bonus from within bonus for this game usually
        }

        $bonusWin = rand(1, $currentBonusWinChance);
        $spinWin = rand(1, $currentSpinWinChance);

        $return = ['type' => 'none', 'maxWinAmount' => 0.0];
        $winLimitCurrency = $this->GetBank($garantType); // Max win is current bank for that type

        if ($bonusWin == 1 && $this->slotBonus && $garantType == 'bet') { // Bonus can only trigger on a base game spin
            $this->isBonusStart = true; // Flag that a bonus is starting
            // Check if bank can cover an average bonus. Average bonus win for Creature is not easily defined.
            // Let's assume any bonus trigger is fine if bank is positive.
            if ($winLimitCurrency > 0) {
                 $return = ['type' => 'bonus', 'maxWinAmount' => $winLimitCurrency];
            } else { // Not enough bank for a bonus, try for a regular win
                 $this->isBonusStart = false;
                 if ($spinWin == 1 && $winLimitCurrency > 0) {
                     $return = ['type' => 'win', 'maxWinAmount' => $winLimitCurrency];
                 } else {
                     $return = ['type' => 'none', 'maxWinAmount' => 0.0];
                 }
            }
        } else if ($spinWin == 1 && $winLimitCurrency > 0) {
            $return = ['type' => 'win', 'maxWinAmount' => $winLimitCurrency];
        }

        // MaxWin from shop settings (already in currency units)
        if ($this->MaxWin > 0 && $return['maxWinAmount'] > $this->MaxWin) {
            $return['maxWinAmount'] = $this->MaxWin;
        }

        return $return;
    }

    /**
     * Generates reel strips for a spin.
     *
     * @param string $winType The intended outcome ('win', 'bonus', 'none')
     * @param string $slotEvent Current event ('bet', 'freespin', 'respin')
     * @return array Reel configuration (e.g., ['reel1'=>[s,s,s], ..., 'rp'=>[p,p,...]])
     */
    public function GetReelStrips($winType, $slotEvent)
    {
        $reelSetKey = 'main';
        if ($slotEvent == 'freespin' || $slotEvent == 'respin') { // Creature uses bonus reels for Free Spins & Respins
            $reelSetKey = 'bonus';
            // This parent method will try to load $this->ReelStrips['bonus']
            // The child constructor already populated $this->ReelStrips from GameReel
            // If Creature's GameReel provides distinct 'bonus' strips, they will be used.
            // The original Creature SlotSettings did this:
            // if( $slotEvent == 'freespin' ) {
            //     $reel = new GameReel(); // This should use $this->ReelStrips now
            //     $fArr = $this->ReelStrips['bonus']; // Assuming this structure
            //     foreach ([ 'reelStrip1', ..., 'reelStrip6'] as $reelStrip ) {
            //          $this->$reelStrip = array_shift($fArr[$reelStrip]); // This was wrong in original
            //     }
            // }
            // The base::setupReelStrips already handles populating $this->reelStripX from $this->ReelStrips['main' or 'bonus']
            // So, we just need to ensure the correct reel strip *properties* (e.g. $this->reelStrip1) are used.
            // The base GetReelStrips uses $this->ReelStrips['main'] or ['bonus'] from $gameDataInput to get the arrays.
            // We need to make sure the base method's logic for selecting from $this->ReelStrips is sufficient or override it.

            // The base GetReelStrips in SlotSettings.php (the one I wrote previously) does this:
            //  $reelSetData = $this->ReelStrips[$currentReelSetKey] ?? ($this->ReelStrips['main'] ?? null);
            //  It then uses $reelSetData['reelStripX'] to get the actual strips.
            // This seems fine, as long as $this->ReelStrips is populated correctly by child.
        }

        $numReels = count($this->slotReelsConfig);
        $prs = []; // Reel positions

        if ($winType == 'bonus' && $slotEvent == 'bet') { // Triggering free spins from a base game spin
            // Place scatter symbols (SYM_0) to trigger free spins
            // Original logic:
            // $reelsId = [1,2,3,4,5]; // Assuming 5 reels for scatter placement
            // $scattersCnt = rand(3, 5); // Determine how many scatters to land (e.g. for 10, 15, or 20 FS)
            // shuffle($reelsId);
            // for( $i = 0; $i < count($reelsId); $i++ ) {
            //     if( $i < $scattersCnt ) {
            //         $prs[$reelsId[$i]] = $this->GetRandomScatterPos($this->{'reelStrip' . $reelsId[$i]}, '0');
            //     } else {
            //         $prs[$reelsId[$i]] = mt_rand(0, count($this->{'reelStrip' . $reelsId[$i]}) - 3);
            //     }
            // }
            // Simplified: just get random positions for now. Server.php will check actual scatter count.
            // The base GetReelStrips will be called which does random positioning.
            // Server.php will then check if enough scatters landed by chance, or if we need to ensure scatter placement,
            // this method needs to be more intelligent or Server.php needs to retry/adjust.
            // For now, let base GetReelStrips do its random thing.
             return parent::GetReelStrips($winType, $slotEvent);


        } else { // For 'win' or 'none' in main game, or any outcome in freespin/respin
             return parent::GetReelStrips($winType, $slotEvent);
        }
    }

    /**
     * Gets a random position for a scatter symbol on a given reel strip.
     * This is game-specific if rules for scatter placement are complex.
     *
     * @param array $reelStripArray The array of symbols for a single reel.
     * @param string $scatterSymbol The symbol to look for.
     * @return int Random valid position for the scatter.
     */
    public function GetRandomScatterPos($reelStripArray, $scatterSymbol = '0')
    {
        // Original CreatureFromTheBlackLagoonNET SlotSettings GetRandomScatterPos was:
        // $rpResult = [];
        // for( $i = 0; $i < count($rp); $i++ ) {
        //     if( $rp[$i] == '0' ) { // Assuming '0' is the scatter
        //         if( isset($rp[$i + 1]) && isset($rp[$i - 1]) ) { array_push($rpResult, $i); }
        //         if( isset($rp[$i - 1]) && isset($rp[$i - 2]) ) { array_push($rpResult, $i - 1); }
        //         if( isset($rp[$i + 1]) && isset($rp[$i + 2]) ) { array_push($rpResult, $i + 1); }
        //     }
        // }
        // shuffle($rpResult);
        // if( !isset($rpResult[0]) ) { $rpResult[0] = rand(2, count($rp) - 3); }
        // return $rpResult[0];
        // This logic seems to find positions *near* a '0' or actual '0's.
        // Forcing a scatter, we need to find where '0' actually is.

        $scatterPositions = [];
        foreach ($reelStripArray as $idx => $symbol) {
            if ($symbol == $scatterSymbol) {
                $scatterPositions[] = $idx;
            }
        }

        if (!empty($scatterPositions)) {
            // Return a random position where a scatter symbol exists
            // Adjust for visible window (typically 3 symbols, so pos should allow symbol to be in view)
            // If reel strip is [..., S, S, S, ...], and S is at index 10, 11, 12.
            // If visible window is 3, positions 9, 10, 11 would show S.
            // The position returned is usually the index of the *first* visible symbol.
            $validPositions = [];
            $numVisible = 3; // Default, should come from slotReelsConfig for this reel if varied

            foreach($scatterPositions as $spos){
                // A scatter at $spos can be made visible if the reel stops at $spos, $spos-1, or $spos-2
                // (assuming $spos is 0-indexed and is the middle of 3 visible symbols, or top, or bottom)
                // Let's say returned position 'p' means symbols p, p+1, p+2 are visible.
                // So, if scatter is at $spos, then p can be $spos, $spos-1, $spos-2.
                for($i=0; $i < $numVisible; $i++){
                    $potentialStopPos = ($spos - $i + count($reelStripArray)) % count($reelStripArray);
                     // Ensure this stop position is valid (not too close to end of strip for full view)
                    if ($potentialStopPos <= count($reelStripArray) - $numVisible) {
                        $validPositions[] = $potentialStopPos;
                    }
                }
            }
            if(!empty($validPositions)){
                 return $validPositions[array_rand($validPositions)];
            }
        }
        // Fallback: if no scatter symbol found, or no valid positions, return a random position
        return mt_rand(0, count($reelStripArray) - ($this->slotReelsConfig[0][2] ?? 3));
    }

    /**
     * Calculates wins based on the final reel display.
     *
     * @param array $reels Reel display (e.g. ['reel1'=>[s,s,s], ...])
     * @param int $linesPlayed Number of lines played
     * @param float $betPerLine Bet per line in currency units
     * @param int $bonusMpl Bonus multiplier (e.g., for free spins)
     * @param array $linesId Definitions of paylines
     * @return array ['totalWinCoins' => float, 'lineWinsResponseString' => string, 'scattersCount' => int, 'scatterWinCoins' => float, 'scatterResponseString' => string]
     */
    public function calculateWins($reels, $linesPlayed, $betPerLine, $bonusMpl, $linesId)
    {
        $totalWinCoins = 0;
        $lineWinsResponse = []; // Array to hold individual win line strings
        $winLineCount = 0;

        $wildSymbol = '1'; // Assuming 'SYM_1' is Wild
        $scatterSymbol = '0'; // Assuming 'SYM_0' is Scatter

        for ($k = 0; $k < $linesPlayed; $k++) {
            $cWinsOnLine = 0;
            $tmpStringWinForLine = '';

            foreach ($this->SymbolGame as $symbolId) {
                $sKey = 'SYM_' . $symbolId;
                if (!isset($this->Paytable[$sKey]) || $symbolId == $scatterSymbol) continue; // Skip scatters for line wins

                $symbolPayouts = $this->Paytable[$sKey];
                $currentLineSymbols = [];
                for ($r = 0; $r < 5; $r++) { // Assuming 5 reels
                    $currentLineSymbols[$r] = $reels['reel' . ($r + 1)][$linesId[$k][$r] - 1];
                }

                $matchCount = 0;
                $wildCount = 0;
                for ($p = 0; $p < 5; $p++) {
                    if ($currentLineSymbols[$p] == $symbolId || $currentLineSymbols[$p] == $wildSymbol) {
                        $matchCount++;
                        if ($currentLineSymbols[$p] == $wildSymbol) $wildCount++;
                    } else {
                        break;
                    }
                }

                if ($matchCount >= 3) { // Minimum 3 for a win for most symbols in Creature
                    // If all are wilds, they pay as wilds (SYM_1), not as current csym, unless wild has no own payout
                    $effectivePaySymbol = ($wildCount == $matchCount && isset($this->Paytable['SYM_'.\$wildSymbol][$matchCount]) && $this->Paytable['SYM_'.\$wildSymbol][$matchCount] > 0) ? $wildSymbol : $symbolId;
                    $symbolToUseForPaytable = 'SYM_' . $effectivePaySymbol;

                    if (isset($this->Paytable[$symbolToUseForPaytable][$matchCount]) && $this->Paytable[$symbolToUseForPaytable][$matchCount] > 0) {
                        $lineWinCoins = $this->Paytable[$symbolToUseForPaytable][$matchCount] * $betPerLine * $bonusMpl;

                        if ($lineWinCoins > $cWinsOnLine) {
                            $cWinsOnLine = $lineWinCoins;
                            $winPositionsStr = '';
                            for($wp=0; $wp < $matchCount; $wp++) $winPositionsStr .= '&ws.i'.$winLineCount.'.pos.i'.$wp.'='.\$wp.'%2C'.(\$linesId[$k][\$wp]-1);

                            $tmpStringWinForLine = '&ws.i'.$winLineCount.'.reelset=basic'.$winPositionsStr.
                                              '&ws.i'.$winLineCount.'.types.i0.coins=' . $lineWinCoins .
                                              '&ws.i'.$winLineCount.'.types.i0.wintype=coins'.
                                              '&ws.i'.$winLineCount.'.betline=' . $k . // Original betline index
                                              '&ws.i'.$winLineCount.'.sym=SYM' . $effectivePaySymbol .
                                              '&ws.i'.$winLineCount.'.direction=left_to_right'.
                                              '&ws.i'.$winLineCount.'.types.i0.cents=' . ($lineWinCoins * $this->CurrentDenom * 100);
                        }
                    }
                }
            }

            if ($cWinsOnLine > 0) {
                $lineWinsResponse[] = $tmpStringWinForLine;
                $totalWinCoins += $cWinsOnLine;
                $winLineCount++;
            }
        }

        // Scatter calculation (for free spins trigger, not direct coin win for Creature's SYM_0)
        $scattersCount = 0;
        $scatterPositionsStr = '';
        $scatterWinCoins = 0; // Creature's SYM_0 does not have direct pay
        $scPosArray = [];

        for ($r = 1; $r <= 5; $r++) {
            for ($p = 0; $p < ($this->slotReelsConfig[$r-1][2] ?? 3) ; $p++) { // Num visible symbols for this reel
                if (isset($reels['reel' . $r][$p]) && $reels['reel' . $r][$p] == $scatterSymbol) {
                    $scattersCount++;
                    $scPosArray[] = '&ws.i0.pos.i' . ($scattersCount-1) . '=' . ($r - 1) . '%2C' . $p;
                }
            }
        }

        $scatterResponseString = '';
        if ($scattersCount >= 3 && isset($this->slotFreeCount[$scattersCount]) && $this->slotFreeCount[$scattersCount] > 0) {
             $fsAwarded = $this->slotFreeCount[$scattersCount];
             $scatterResponseString = '&ws.i0.types.i0.freespins=' . $fsAwarded . '&ws.i0.reelset=basic&ws.i0.betline=null&ws.i0.types.i0.wintype=freespins&ws.i0.direction=none' . implode('', $scPosArray);
        }
        // Note: Creature From The Black Lagoon might have other scatter-like symbols or features (e.g. target symbol for monster health)
        // This simple calculation is for the main free spin scatter 'SYM_0'.

        return [
            'totalWinCoins' => $totalWinCoins,
            'lineWinsResponseString' => implode('', $lineWinsResponse),
            'scattersCount' => $scattersCount,
            'scatterWinCoins' => $scatterWinCoins, // Typically 0 for SYM_0 in this game
            'scatterResponseString' => $scatterResponseString
        ];
    }
}
```
