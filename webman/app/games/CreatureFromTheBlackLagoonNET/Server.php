<?php

namespace VanguardLTE\Games\CreatureFromTheBlackLagoonNET;

use VanguardLTE\Games\CreatureFromTheBlackLagoonNET\SlotSettings;

class Server
{
    /**
     * Handles game actions like init, spin, freespin, etc.
     *
     * @param string $action The requested action (e.g., 'init', 'spin').
     * @param array $gameDataInput Data to initialize SlotSettings (balance, settings, game state).
     * @param array $requestData Specific data for the current action (e.g., bet level for a spin).
     * @return array Associative array containing response for client and data to be saved by API.
     */
    public function handleAction($action, $gameDataInput, $requestData = [])
    {
        // userId will be part of $gameDataInput
        $userId = $gameDataInput['playerId'] ?? null;
        if ($userId === null) {
            return [
                'error' => 'Invalid session or user ID missing.',
                'clientResponse' => '{"responseEvent":"error","responseType":"","serverResponse":"invalid login"}'
            ];
        }

        // Instantiate SlotSettings with data provided by the API controller
        $slotSettings = new SlotSettings($gameDataInput);

        // Game active check would have been done by API before calling this.
        // if (!$slotSettings->is_active()) {
        //     return [
        //         'error' => 'Game is disabled.',
        //         'clientResponse' => '{"responseEvent":"error","responseType":"","serverResponse":"Game is disabled"}'
        //     ];
        // }

        $postData = array_merge($requestData, ['action' => $action]); // Combine action with other request data
        $balanceInCents = $slotSettings->Balance; // Balance is already in cents from constructor

        $result_tmp = ''; // Holds the client response string
        $linesGame = 20; // Default lines for this game, can be from $slotSettings->Line or game config

        // Normalize slotEvent based on action
        $postData['slotEvent'] = $action;
        if ($action == 'freespin') {
            $postData['slotEvent'] = 'freespin';
            // freespin action might actually be a 'spin' internally but in freespin mode
        } else if ($action == 'respin') {
            $postData['slotEvent'] = 'respin';
        } else if ($action == 'init' || $action == 'reloadbalance') {
            $postData['slotEvent'] = 'init';
             $postData['action'] = 'init'; // ensure action is init for this block
        } else if ($action == 'paytable') {
            $postData['slotEvent'] = 'paytable';
        } else if ($action == 'initfreespin') {
            $postData['slotEvent'] = 'initfreespin';
        } else {
            $postData['slotEvent'] = 'bet'; // Default to a regular bet/spin
        }

        // Denomination handling - CurrentDenom should be set by API via gameDataInput
        // If bet_denomination is passed in requestData, API should update gameDataInput['currentDenom'] before calling this
        if (isset($postData['bet_denomination']) && $postData['bet_denomination'] >= 0.01) {
            // This implies client can change denom per request.
            // The API should validate this change and update the user's persistent denom choice.
            // For the game engine, we just use what's passed or pre-configured.
            // $slotSettings->CurrentDenom = $postData['bet_denomination'];
            // $slotSettings->SetGameData($slotSettings->slotId . 'GameDenom', $postData['bet_denomination']);
            // This logic should ideally be handled by the API before calling handleAction or managed via gameDataInput.
        }


        // Balance check for bet event
        if ($postData['slotEvent'] == 'bet') {
            $lines = $requestData['lines'] ?? $linesGame; // Number of lines for the bet
            $betline = $requestData['bet_level'] ?? ($gameDataInput['defaultBetLevel'] ?? 1); // Bet per line (coins)

            if ($lines <= 0 || $betline <= 0) {
                 return ['error' => 'Invalid bet state', 'clientResponse' => '{"responseEvent":"error","responseType":"' . $postData['slotEvent'] . '","serverResponse":"invalid bet state"}'];
            }
            // Calculate total bet in smallest currency unit (cents)
            $totalBetCents = $lines * $betline * $slotSettings->CurrentDenom * 100; // Assuming CurrentDenom is in currency units

            if ($slotSettings->Balance < $totalBetCents) {
                 return ['error' => 'Invalid balance', 'clientResponse' => '{"responseEvent":"error","responseType":"' . $postData['slotEvent'] . '","serverResponse":"invalid balance"}'];
            }
        }

        // Check for invalid bonus state (e.g. trying to play more free games than awarded)
        // This was: if( $slotSettings->GetGameData($slotSettings->slotId . 'FreeGames') < $slotSettings->GetGameData($slotSettings->slotId . 'CurrentFreeGame') && $postData['slotEvent'] == 'freespin' )
        // Should be:
        if ($postData['slotEvent'] == 'freespin' &&
            $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETFreeGames') <= $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETCurrentFreeGame')) {
            return ['error' => 'Invalid bonus state', 'clientResponse' => '{"responseEvent":"error","responseType":"' . $postData['slotEvent'] . '","serverResponse":"invalid bonus state"}'];
        }

        $responseToApi = [
            'clientResponse' => '',
            'updatedBalance' => null,
            'updatedBank' => null,
            'gameDataToSave' => null,
            'gameDataStaticToSave' => null,
            'logData' => null,
            'jackpotContributions' => [] // To be filled if engine calculates this per spin
        ];

        try {
            switch ($postData['action']) {
                case 'init':
                    $lastEvent = $slotSettings->lastEvent; // Already part of $gameDataInput

                    $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETBonusWin', 0);
                    $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeGames', 0);
                    $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETCurrentFreeGame', 0);
                    $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETTotalWin', 0);
                    $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeBalance', 0);
                    $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETMonsterHealth', 0);
                    $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeLevel', 0);

                    $freeState = '';
                    $curReels = '';
                    $reels = null;

                    if (is_object($lastEvent) && isset($lastEvent->serverResponse)) {
                        $srv = $lastEvent->serverResponse;
                        $slotSettings->SetGameData($slotSettings->slotId . 'BonusWin', $srv->bonusWin ?? 0);
                        $slotSettings->SetGameData($slotSettings->slotId . 'FreeGames', $srv->totalFreeGames ?? 0);
                        $slotSettings->SetGameData($slotSettings->slotId . 'CurrentFreeGame', $srv->currentFreeGames ?? 0);
                        // TotalWin should reflect the win from the specific last event, not accumulated bonus win
                        $slotSettings->SetGameData($slotSettings->slotId . 'TotalWin', $srv->totalWin ?? ($srv->bonusWin ?? 0));
                        $slotSettings->SetGameData($slotSettings->slotId . 'FreeBalance', $srv->Balance ?? $balanceInCents);
                        $freeState = $srv->freeState ?? ''; // freeState string from last event if available

                        // Restore monster health and level if in free spins from last event
                        if (isset($srv->MonsterHealth)) {
                             $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETMonsterHealth', $srv->MonsterHealth);
                        }
                        if (isset($srv->FreeLevel)) {
                             $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeLevel', $srv->FreeLevel);
                        }

                        if(isset($srv->reelsSymbols) && is_object($srv->reelsSymbols)){
                            $reels = $srv->reelsSymbols; // This is an object/array of reels
                        }
                    }

                    if ($reels === null) { // If no last event or reelsSymbols missing, generate default
                        $reels = $slotSettings->GetReelStrips('none', 'bet'); // object with reel1, reel2.. & rp
                    }

                    // Construct curReels string from $reels object
                    // Ensure $reels is an object with expected properties (reel1, reel2... rp)
                    // The GetReelStrips method in base SlotSettings returns an array ['reel1'=>[s,s,s], 'rp'=>[p,p,p]]
                    // The original server code expected reels->reel1[0] etc. Adjusting to array access.
                    $curReels .= '&rs.i0.r.i0.syms=SYM' . ($reels['reel1'][0] ?? '1') . '%2CSYM' . ($reels['reel1'][1] ?? '1') . '%2CSYM' . ($reels['reel1'][2] ?? '1');
                    $curReels .= '&rs.i0.r.i1.syms=SYM' . ($reels['reel2'][0] ?? '1') . '%2CSYM' . ($reels['reel2'][1] ?? '1') . '%2CSYM' . ($reels['reel2'][2] ?? '1');
                    $curReels .= '&rs.i0.r.i2.syms=SYM' . ($reels['reel3'][0] ?? '1') . '%2CSYM' . ($reels['reel3'][1] ?? '1') . '%2CSYM' . ($reels['reel3'][2] ?? '1');
                    $curReels .= '&rs.i0.r.i3.syms=SYM' . ($reels['reel4'][0] ?? '1') . '%2CSYM' . ($reels['reel4'][1] ?? '1') . '%2CSYM' . ($reels['reel4'][2] ?? '1');
                    $curReels .= '&rs.i0.r.i4.syms=SYM' . ($reels['reel5'][0] ?? '1') . '%2CSYM' . ($reels['reel5'][1] ?? '1') . '%2CSYM' . ($reels['reel5'][2] ?? '1');

                    // Reel positions
                    for($r=0; $r<5; $r++) { // Assuming 5 reels
                        $pos = $reels['rp'][$r] ?? rand(0,10); // Get position from 'rp' array
                        $curReels .= ('&rs.i0.r.i'.$r.'.pos=' . $pos);
                        // The original also had rs.i1.r.iX.syms and rs.i1.r.iX.pos, seems like a secondary reelset display?
                        // If rs.i1 is needed, it should be constructed similarly. For now, focusing on rs.i0
                    }
                    // Add rs.i1 if it was part of the original logic consistently for init
                     $curReels .= '&rs.i1.r.i0.syms=SYM' . ($reels['reel1'][0] ?? '1') . '%2CSYM' . ($reels['reel1'][1] ?? '1') . '%2CSYM' . ($reels['reel1'][2] ?? '1');
                     $curReels .= '&rs.i1.r.i1.syms=SYM' . ($reels['reel2'][0] ?? '1') . '%2CSYM' . ($reels['reel2'][1] ?? '1') . '%2CSYM' . ($reels['reel2'][2] ?? '1');
                     // ... and so on for reel2 to reel5 for rs.i1 ...
                     for($r=0; $r<5; $r++) {
                        $pos = $reels['rp'][$r] ?? rand(0,10);
                        $curReels .= ('&rs.i1.r.i'.$r.'.pos=' . $pos);
                     }

                    $denominationsArray = [];
                    if(is_array($slotSettings->Denominations)){
                        foreach($slotSettings->Denominations as $dVal) {
                            $denominationsArray[] = $dVal * 100; // Client expects cents
                        }
                    }
                    $denominationsStr = implode('%2C', $denominationsArray);

                    $fsLeft = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETFreeGames') - $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETCurrentFreeGame');
                    if ($fsLeft < 0) $fsLeft = 0;

                    if ($fsLeft > 0 && $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETFreeGames') > 0) {
                        // If freeState was not in lastEvent, construct a basic one.
                        // The original init had a very long example freeState string if resuming.
                        // This needs to be carefully reconstructed or ensured it comes from lastEvent.
                        if (empty($freeState)) { // Construct a default resume free state string if not in lastEvent
                             $currentMonsterHealth = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETMonsterHealth');
                             $currentFreeLevel = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETFreeLevel');
                             $currentBetLevel = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETBet') ?? ($gameDataInput['defaultBetLevel'] ?? 1);
                             $currentDenomVal = ($slotSettings->GetGameData('CreatureFromTheBlackLagoonNETDenom') ?? $slotSettings->CurrentDenom) * 100;

                             $freeState = 'previous.rs.i0=freespinlevel' . $currentFreeLevel . // Example, might need more specific rs state
                                 '&rs.i0.id=freespinlevel'.$currentFreeLevel.'respin'. // This depends on actual state machine
                                 '&gamestate.history=basic%2Cfreespin' .
                                 '&freespins.denomination=' . $currentDenomVal .
                                 '&freespins.initial=' . $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETFreeGames') .
                                 '&freespins.total=' . $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETFreeGames') .
                                 '&freespins.left=' . $fsLeft .
                                 '&freespins.betlevel=' . $currentBetLevel .
                                 '&freespins.multiplier=' . ($slotSettings->slotFreeMpl ?? 1) .
                                 '&freespins.totalwin.coins=' . ($slotSettings->GetGameData('CreatureFromTheBlackLagoonNETBonusWin') / $slotSettings->CurrentDenom) . // Convert cents to coins
                                 '&freespins.totalwin.cents=' . $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETBonusWin') .
                                 '&gamestate.current=freespin' .
                                 '&nextaction=freespin' . // Or 'respin' if applicable
                                 '&collectablesWon=' . $currentMonsterHealth . // MonsterHealth
                                 '&wavecount=' . ($currentFreeLevel + 1) ; // wavecount seems to be FreeLevel + 1
                        }
                    }

                    // Base of the init string (from original, might need more parts)
                    $result_tmp = 'rs.i1.r.i0.syms=SYM1%2CSYM1%2CSYM1' . // This was a default, should use actual reels
                                  '&gameServerVersion=1.5.0&g4mode=false&game.win.coins=0&playercurrencyiso=' . $slotSettings->currency .
                                  '&historybutton=false&current.rs.i0=basic&next.rs=basic&gamestate.history=basic&playforfun=false' .
                                  '&jackpotcurrencyiso=' . $slotSettings->currency . '&clientaction=init' .
                                  '&game.win.cents=0&totalwin.coins=0&credit=' . $balanceInCents . '&totalwin.cents=0' .
                                  '&gamestate.current=basic&gameover=true&isJackpotWin=false&gamestate.stack=basic&nextaction=spin' .
                                  '&wavecount=1&gamesoundurl=https%3A%2F%2Fstatic.casinomodule.com%2F' . // from original
                                  '&betlevel.all=1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10' . // Example bet levels
                                  '&bet.betlines=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19'. // Example betlines
                                  '&denomination.all=' . $denominationsStr .
                                  '&denomination.standard=' . ($slotSettings->CurrentDenom * 100) . // Current denom in cents
                                  '&betlevel.standard=' . ($slotSettings->GetGameData('CreatureFromTheBlackLagoonNETBet') ?? ($gameDataInput['defaultBetLevel'] ?? 1)) .
                                  '&bet.denomination=' . ($slotSettings->CurrentDenom * 100) .
                                  $curReels . // Append dynamic reel symbols and positions
                                  $freeState;  // Append free state if active

                    $responseToApi['clientResponse'] = $result_tmp;
                    break;

                case 'paytable':
                    // Logic from old 'paytable' case
                    // This constructs a long string based on $slotSettings->Paytable
                    // Example: $result_tmp = 'pt.i0.comp.i19.symbol=SYM9&bl.i6.coins=1...';
                    $paytableStrings = [];
                     // This is just a placeholder, the actual construction is very long and detailed
                    foreach (['basic', 'freespin'] as $ptId => $ptName) {
                        $paytableStrings[] = "pt.i{$ptId}.id=" . $ptName;
                        if(is_array($slotSettings->Paytable)){
                            foreach($slotSettings->Paytable as $symKey => $pays){
                                // pt.i0.comp.iX.symbol=SYMX & pt.i0.comp.iX.multi=Y & pt.i0.comp.iX.n=Z
                                // This part is complex and needs to be accurately reproduced from original if paytable response is static like this
                            }
                        }
                    }
                     $result_tmp = implode('&', $paytableStrings) . '&playercurrencyiso=' . $slotSettings->currency . '&credit=' . $balanceInCents;
                     $responseToApi['clientResponse'] = $result_tmp;
                    break;

                case 'initfreespin':
                    // Logic for initializing a freespin mode, similar to init but might set specific free spin variables
                     $result_tmp = 'previous.rs.i0=basic&rs.i1.r.i0.syms=SYM6%2CSYM3%2CSYM5' . // Example string
                                   '&freespins.initial=' . ($requestData['freespins_total'] ?? 10) . // from trigger
                                   '&credit=' . $balanceInCents;
                                   // ... more parameters
                     $responseToApi['clientResponse'] = $result_tmp;
                    break;

                case 'spin':
                case 'freespin':
                case 'respin':
                    $lines = $requestData['lines'] ?? $linesGame; // Use default if not specified
                    $betLevel = $requestData['bet_level'] ?? ($gameDataInput['defaultBetLevel'] ?? 1);
                    $currentDenom = $slotSettings->CurrentDenom;

                    $allBetCoins = $betLevel * $lines; // Total bet in "coins" or bet units
                    $allBetValue = $allBetCoins * $currentDenom; // Total bet in currency units

                    $slotEvent = $postData['slotEvent']; // 'bet', 'freespin', or 'respin'

                    // Initialize variables for log data
                    $gameBankToLog = 0;
                    $jackpotContributionToLog = 0; // Example, if applicable
                    $profitToLog = 0;


                    if ($slotEvent == 'bet') {
                        if (($allBetValue * 100) > $slotSettings->Balance) { // Balance is in cents
                             return ['error' => 'Insufficient balance for bet',
                                     'clientResponse' => '{"responseEvent":"error","responseType":"' . $slotEvent . '","serverResponse":"invalid balance"}'];
                        }
                        $slotSettings->SetBalance(-$allBetValue); // Deduct bet (expects currency units)

                        // Calculate contributions for banking/stats (in currency units)
                        $bankContribution = $allBetValue / 100 * $slotSettings->GetPercent();
                        $slotSettings->SetBank($bankContribution); // Add to bank (expects currency units)
                        // TODO: The API will need to handle jackpot contributions based on allBetValue if applicable

                        // Store values for logging (in currency units)
                        $gameBankToLog = $bankContribution;
                        // Assuming profit is bet minus bank contribution and jackpot contribution
                        $profitToLog = $allBetValue - $bankContribution - $jackpotContributionToLog;


                        // Reset free games / bonus win for a new base spin
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETBonusWin', 0);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeGames', 0);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETCurrentFreeGame', 0);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETTotalWin', 0); // Total win for this specific spin
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETBet', $betLevel); // Store bet level (coins)
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETDenom', $currentDenom); // Store denom (currency)
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeBalance', $slotSettings->Balance); // Current balance in cents
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETMonsterHealth', 0);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeLevel', 0);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETRespinMode', 0);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNEToverlayWildsArr', []);
                    } else { // freespin or respin
                        $betLevel = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETBet');
                        $currentDenom = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETDenom');
                        $allBetCoins = $betLevel * $lines; // Recalculate for safety, though should be consistent
                        $allBetValue = $allBetCoins * $currentDenom;

                        if($slotEvent == 'freespin') {
                           $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETCurrentFreeGame', $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETCurrentFreeGame') + 1);
                        }
                    }

                    $bonusMpl = ($slotEvent == 'freespin') ? ($slotSettings->slotFreeMpl ?? 1) : 1;

                    $winTypeTmp = $slotSettings->GetSpinSettings($slotEvent, $allBetCoins, $lines); // Pass bet in coins
                    $winType = $winTypeTmp[0];
                    $spinWinLimitCoins = $winTypeTmp[1]; // Max win for this spin in COINS (if GetSpinSettings returns coins)
                                                       // If GetSpinSettings returns currency units, then this is already currency.
                                                       // Base GetSpinSettings returns bank value in currency, so this is currency.
                    $spinWinLimitValue = $spinWinLimitCoins; // Assuming it's already currency from GetBank

                    $totalWinCoins = 0;
                    $lineWinsResponse = []; // For constructing client response string
                    $reels = null;
                    $finalReels = null; // To store the reels configuration that produced the accepted win

                    // Spin Loop - simplified from original, actual iteration for specific win conditions might be needed by game designer
                    // For now, we do one iteration and expect winType from GetSpinSettings to guide if it should be a winning spin.
                    // The original loop was for trying to meet certain win conditions or RTP targets.
                    // In a stateless engine, this loop is less about RTP management (API's job) and more about "forcing" a win type if desired.

                    for( $i = 0; $i <= 100; $i++ ) { // Max 100 attempts to find a suitable outcome based on winType
                        $totalWinCoins = 0;
                        $lineWinsResponse = [];
                        $cWins = array_fill(0, $lines, 0);
                        $winLineCount = 0;
                        $mainSymAnim = ''; // For animation hint in response

                        $currentReels = $slotSettings->GetReelStrips($winType, $slotEvent);
                        // Creature-specific modifications to reels for features during freespin/respin
                        if ($slotEvent == 'freespin' && rand(1, 5) == 1 && $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETMonsterHealth') < 10) {
                            $currentReels['reel5'][rand(0, 2)] = '2'; // Assuming '2' is the target symbol
                        }
                        if ($slotEvent == 'respin') {
                            $overlayWildsArrLast = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNEToverlayWildsArr');
                            if(is_array($overlayWildsArrLast)){
                                foreach ($overlayWildsArrLast as $wsp) {
                                    if(isset($currentReels['reel' . $wsp[0]][$wsp[1]])) {
                                        $currentReels['reel' . $wsp[0]][$wsp[1]] = '1'; // Assuming '1' is WILD
                                    }
                                }
                            }
                        }

                        $linesId = []; // Populate with game's line definitions
                        $linesId[0]=[2,2,2,2,2]; $linesId[1]=[1,1,1,1,1]; $linesId[2]=[3,3,3,3,3];
                        $linesId[3]=[1,2,3,2,1]; $linesId[4]=[3,2,1,2,3]; $linesId[5]=[1,1,2,1,1];
                        $linesId[6]=[3,3,2,3,3]; $linesId[7]=[2,3,3,3,2]; $linesId[8]=[2,1,1,1,2];
                        $linesId[9]=[2,1,2,1,2]; $linesId[10]=[2,3,2,3,2]; $linesId[11]=[1,2,1,2,1];
                        $linesId[12]=[3,2,3,2,3]; $linesId[13]=[2,2,1,2,2]; $linesId[14]=[2,2,3,2,2];
                        $linesId[15]=[1,2,2,2,1]; $linesId[16]=[3,2,2,2,3]; $linesId[17]=[1,3,1,3,1];
                        $linesId[18]=[3,1,3,1,3]; $linesId[19]=[1,3,3,3,1];

                        $wildSymbols = ['1']; // Assuming '1' is WILD symbol
                        $scatterSymbol = '0'; // Assuming '0' is SCATTER (FreeGames symbol)

                        for ($k = 0; $k < $lines; $k++) {
                            $tmpStringWin = '';
                            foreach ($slotSettings->SymbolGame as $symbolId) {
                                $csym = (string)$symbolId;
                                if ($csym == $scatterSymbol || !isset($slotSettings->Paytable['SYM_' . $csym])) continue;

                                $s = [];
                                for($r=0; $r<5; $r++) $s[$r] = $currentReels['reel'.($r+1)][$linesId[$k][$r]-1];

                                $winMultiplier = 1;
                                // Check 3, 4, 5 symbol wins
                                for ($matchCount = 5; $matchCount >= 3; $matchCount--) {
                                    $currentMatch = true;
                                    for ($p = 0; $p < $matchCount; $p++) {
                                        if ($s[$p] != $csym && !in_array($s[$p], $wildSymbols)) {
                                            $currentMatch = false;
                                            break;
                                        }
                                    }
                                    if ($currentMatch) {
                                        $paytableValue = $slotSettings->Paytable['SYM_' . $csym][$matchCount] ?? 0;
                                        $tmpWinCoins = $paytableValue * $betLevel * $bonusMpl;

                                        if ($cWins[$k] < $tmpWinCoins) {
                                            $cWins[$k] = $tmpWinCoins;
                                            $winPositionsStr = '';
                                            for($wp=0; $wp < $matchCount; $wp++) $winPositionsStr .= '&ws.i'.$winLineCount.'.pos.i'.$wp.'='.\$wp.'%2C'.(\$linesId[$k][\$wp]-1);

                                            $tmpStringWin = '&ws.i'.$winLineCount.'.reelset=basic'.$winPositionsStr.
                                                          '&ws.i'.$winLineCount.'.types.i0.coins=' . $tmpWinCoins .
                                                          '&ws.i'.$winLineCount.'.types.i0.wintype=coins'.
                                                          '&ws.i'.$winLineCount.'.betline=' . $k .
                                                          '&ws.i'.$winLineCount.'.sym=SYM' . $csym .
                                                          '&ws.i'.$winLineCount.'.direction=left_to_right'.
                                                          '&ws.i'.$winLineCount.'.types.i0.cents=' . ($tmpWinCoins * $currentDenom * 100);
                                            $mainSymAnim = $csym;
                                        }
                                        break; // Found longest match for this symbol on this line
                                    }
                                }
                            }
                            if ($cWins[$k] > 0 && !empty($tmpStringWin)) {
                                $lineWinsResponse[] = $tmpStringWin;
                                $totalWinCoins += $cWins[$k];
                                $winLineCount++;
                            }
                        }

                        $scattersCount = 0; $scattersWinCoins = 0; $scattersStr = ''; $scPos = [];
                        $wildsRespinCount = 0; $overlayWildsResponse = []; $overlayWildsArr = []; $isMonsterShoot = false;

                        for ($r = 1; $r <= 5; $r++) {
                            for ($p = 0; $p <= 2; $p++) { // Assuming 3 visible symbols
                                if ($currentReels['reel' . $r][$p] == $scatterSymbol) {
                                    $scattersCount++;
                                    $scPos[] = '&ws.i0.pos.i' . ($scattersCount-1) . '=' . ($r - 1) . '%2C' . $p; // Corrected scatter pos string
                                }
                                if ($currentReels['reel' . $r][$p] == '1' && $slotEvent != 'respin') { // WILD
                                    $wildsRespinCount++;
                                    // Original response for overlay was complex. Simplified:
                                    $overlayWildsResponse[] = '&rs.i0.r.i' . ($r - 1) . '.overlay.i0.row=' . $p . '&rs.i0.r.i' . ($r - 1) . '.overlay.i0.with=SYM1';
                                    $overlayWildsArr[] = [$r, $p];
                                }
                                if ($currentReels['reel' . $r][$p] == '2') { // Monster target symbol
                                    $isMonsterShoot = true;
                                }
                            }
                        }
                        if ($scattersCount >= 3) {
                            $fsAwarded = $slotSettings->slotFreeCount[$scattersCount] ?? 0;
                            if($fsAwarded > 0){
                                 $scattersStr = '&ws.i0.types.i0.freespins=' . $fsAwarded . '&ws.i0.reelset=basic&ws.i0.betline=null&ws.i0.types.i0.wintype=freespins&ws.i0.direction=none' . implode('', $scPos);
                            }
                        }
                        $totalWinCoins += $scattersWinCoins; // If scatters have direct coin win

                        // Check if this spin outcome is acceptable based on winType and limits
                        $totalWinValue = $totalWinCoins * $currentDenom;
                        if ($slotSettings->MaxWin > 0 && $totalWinValue > $slotSettings->MaxWin) {
                            // Win exceeds MaxWin, try again or cap (capping is simpler for stateless)
                            // For now, we just try again, but real game might cap or have specific handling.
                            continue;
                        }

                        if ($winType == 'bonus') { // Expecting a bonus trigger (scatters)
                            if ($scattersCount >= 3) { $finalReels = $currentReels; break; }
                        } else if ($winType == 'win') { // Expecting a line win
                            if ($totalWinCoins > 0 && $totalWinValue <= $spinWinLimitValue) { $finalReels = $currentReels; break; }
                        } else { // 'none' winType, expecting no win or very small win
                            if ($totalWinCoins == 0) { $finalReels = $currentReels; break; }
                            // Potentially allow very small wins even on 'none' if spinWinLimit is permissive
                            else if ($totalWinValue <= $spinWinLimitValue && $spinWinLimitValue < ($betLevel * $currentDenom) ) { $finalReels = $currentReels; break;}
                        }
                    } // End of spin loop

                    if($finalReels === null) $finalReels = $currentReels; // Fallback to last generated reels

                    // Recalculate wins with finalReels to be certain (if loop was complex)
                    // For this simplified loop, totalWinCoins and lineWinsResponse are already from finalReels.

                    $totalWinValue = $totalWinCoins * $currentDenom;

                    if ($totalWinValue > 0) {
                        $slotSettings->SetBalance($totalWinValue);
                        $slotSettings->SetBank(-$totalWinValue);
                    }
                    $reportWinValue = $totalWinValue;

                    if ($slotEvent == 'freespin' || $slotEvent == 'respin') {
                        $currentBonusWin = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETBonusWin') + $reportWinValue;
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETBonusWin', $currentBonusWin);
                        // TotalWin for session is accumulated in BonusWin during FS
                    } else { // 'bet' event
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETTotalWin', $reportWinValue);
                    }

                    // Construct reels part of client response string from finalReels
                    $curReelsResponse = '';
                    for($r=1; $r<=5; $r++){
                        $curReelsResponse .= '&rs.i0.r.i'.($r-1).'.syms=SYM'.($finalReels['reel'.\$r][0]??'1').'%2CSYM'.($finalReels['reel'.\$r][1]??'1').'%2CSYM'.($finalReels['reel'.\$r][2]??'1');
                        $curReelsResponse .= '&rs.i0.r.i'.($r-1).'.pos='. ($finalReels['rp'][\$r-1] ?? rand(0,10));
                    }
                    // Add rs.i1 if needed for response (usually same as rs.i0)
                    $curReelsResponse .= str_replace('rs.i0', 'rs.i1', $curReelsResponse);


                    $freeStateResponse = ''; $nextAction = 'spin'; $gameState = 'basic'; $gameStack = 'basic';
                    $clientSpinAction = ($slotEvent == 'bet') ? 'spin' : $slotEvent;

                    if ($scattersCount >= 3 && $slotEvent == 'bet') { // FS Triggered
                        $fsAwarded = $slotSettings->slotFreeCount[$scattersCount] ?? 0;
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeGames', $fsAwarded);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETCurrentFreeGame', 0);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETMonsterHealth', 0);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeLevel', 0);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeBalance', $slotSettings->Balance); // Balance before FS
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETBonusWin', 0); // Reset bonus win for the FS session

                        $nextAction = 'freespin'; $gameState = 'freespin'; $gameStack = 'basic%2Cfreespin';
                        $freeStateResponse = '&freespins.initial=' . $fsAwarded . '&freespins.total=' . $fsAwarded .
                                             '&freespins.left=' . $fsAwarded . '&freespins.wavecount=1'.
                                             '&freespins.multiplier=' . ($slotSettings->slotFreeMpl ?? 1) .
                                             '&freespins.betlevel=' . $betLevel . '&freespins.denomination=' . ($currentDenom * 100) .
                                             '&collectablesWon=0'; // MonsterHealth
                        $curReelsResponse .= $freeStateResponse; // Add to main response string
                    }

                    if ($wildsRespinCount >= 1 && $slotEvent != 'respin' && $slotEvent != 'freespin') { // Respin triggered from base game
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETRespinMode', 1);
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNEToverlayWildsArr', $overlayWildsArr);
                        $nextAction = 'respin'; $gameState = 'respin';
                        // Add overlay wilds to curReelsResponse
                        $curReelsResponse .= implode('', $overlayWildsResponse);
                    }

                    if ($slotEvent == 'respin') { // After a respin
                        $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETRespinMode', 0); // Clear respin mode
                        $nextAction = 'spin'; $gameState = 'basic';
                        // If respin happened during FS, restore FS state
                        if ($slotSettings->GetGameData('CreatureFromTheBlackLagoonNETFreeGames') > 0) {
                            $nextAction = 'freespin'; $gameState = 'freespin'; $gameStack = 'basic%2Cfreespin';
                        }
                    }

                    if ($slotEvent == 'freespin') {
                        $fsTotal = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETFreeGames');
                        $fsCurrent = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETCurrentFreeGame');
                        $fsLeft = $fsTotal - $fsCurrent;
                        if ($fsLeft < 0) $fsLeft = 0;

                        $currentMonsterHealth = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETMonsterHealth');
                        $currentFreeLevel = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETFreeLevel');
                        if ($isMonsterShoot) { // Target symbol landed
                            $currentMonsterHealth++;
                            // Level up logic (example: every 3 health points)
                            if ($currentMonsterHealth % 3 == 0 && $currentMonsterHealth > 0 && $currentFreeLevel < 3) { // Max level 3
                                $currentFreeLevel++;
                                // Potentially award more free spins on level up, or change wilds
                                if($currentFreeLevel == 1) { /* Spreading Wild 1 logic */ }
                                else if($currentFreeLevel == 2) { /* Spreading Wild 2 logic */ }
                                else if($currentFreeLevel == 3) { /* 10 more free spins */ $fsTotal += 10; $fsLeft +=10; $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeGames', $fsTotal); }
                            }
                            $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETMonsterHealth', $currentMonsterHealth);
                            $slotSettings->SetGameData('CreatureFromTheBlackLagoonNETFreeLevel', $currentFreeLevel);
                        }

                        $nextAction = ($fsLeft > 0) ? 'freespin' : 'spin';
                        $gameState = ($fsLeft > 0) ? 'freespin' : 'basic';
                        $gameStack = ($fsLeft > 0) ? 'basic%2Cfreespin' : 'basic';

                        $fsWinCoins = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETBonusWin') / $currentDenom;
                        $fsWinCents = $slotSettings->GetGameData('CreatureFromTheBlackLagoonNETBonusWin');

                        $freeStateResponse = '&freespins.left=' . $fsLeft . '&freespins.total=' . $fsTotal .
                                             '&freespins.totalwin.coins=' . $fsWinCoins . '&freespins.totalwin.cents=' . $fsWinCents .
                                             '&freespins.win.coins=' . ($reportWinValue / $currentDenom) . '&freespins.win.cents=' . ($reportWinValue * 100). // Win from this specific FS
                                             '&collectablesWon=' . $currentMonsterHealth . '&wavecount=' . ($currentFreeLevel + 1) .
                                             '&rs.i0.id=freespinlevel'.\$currentFreeLevel; // Current reelset for FS level
                        $curReelsResponse .= $freeStateResponse;
                        $totalWinForDisplayValue = $fsWinCents; // Accumulated FS win for display
                    } else {
                        $totalWinForDisplayValue = $reportWinValue * 100; // Convert to cents for display
                    }

                    $finalBalanceInCents = $slotSettings->Balance; // Already in cents

                    // Base structure of the response string
                    $result_tmp = 'game.win.coins=' . $totalWinCoins . // Coins won in this spin
                                  '&game.win.cents=' . ($totalWinCoins * $currentDenom * 100) .
                                  '&game.win.amount=' . $totalWinValue . // Currency value of this spin's win
                                  $curReelsResponse . // Includes reels, positions, free state, overlays
                                  implode('', $lineWinsResponse) . // All winning line details
                                  $scattersStr . // Scatter win details (if any)
                                  '&totalwin.coins=' . ($totalWinForDisplayValue / $currentDenom / 100) . // Total coins for display (session or FS)
                                  '&totalwin.cents=' . $totalWinForDisplayValue . // Total cents for display
                                  '&credit=' . $finalBalanceInCents .
                                  '&clientaction=' . $clientSpinAction . // What action client thinks it did
                                  '&nextaction=' . $nextAction . // What the next action should be
                                  '&gamestate.current=' . $gameState .
                                  '&gamestate.stack=' . $gameStack .
                                  '&gameover=' . ((\$nextAction == 'spin' && \$gameState == 'basic') ? 'true' : 'false') .
                                  '&multiplier=' . \$bonusMpl . // current multiplier
                                  '&isJackpotWin=false'; // Placeholder for jackpot win status

                    $responseToApi['clientResponse'] = $result_tmp;
                    $responseToApi['logData'] = [
                        'bet' => $allBetValue,
                        'lines' => $lines,
                        'win' => $reportWinValue, // Win from this specific event in currency
                        'slotEvent' => $slotEvent,
                        'reels' => $finalReels // For logging actual reel positions
                    ];
                    break;

                default:
                     return ['error' => 'Unknown action', 'clientResponse' => '{"responseEvent":"error","responseType":"","serverResponse":"Unknown action: ' . $postData['action'] . '"}'];
            }

            $responseToApi['updatedBalance'] = $slotSettings->Balance; // Final balance in cents
            $responseToApi['updatedBank'] = $slotSettings->Bank;     // Final bank in cents
            $responseToApi['gameDataToSave'] = $slotSettings->GetAllGameData();
            $responseToApi['gameDataStaticToSave'] = $slotSettings->GetAllGameDataStatic();

            return $responseToApi;

        } catch (\Exception $e) {
            // Log $e->getMessage() and stack trace
            // Error reporting should be handled by the API controller based on this return
            return [
                'error' => 'Internal ServerError: ' . $e->getMessage(),
                'clientResponse' => '{"responseEvent":"error","responseType":"' . ($postData['slotEvent'] ?? 'unknown') . '","serverResponse":"InternalError"}'
            ];
        }
    }
}
```
