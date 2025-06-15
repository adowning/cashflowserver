<?php

namespace VanguardLTE\Games\CreatureFromTheBlackLagoonNET;

class GameReel
{
    public $reelsStrip = [
        'reelStrip1' => [], 'reelStrip2' => [], 'reelStrip3' => [],
        'reelStrip4' => [], 'reelStrip5' => [], 'reelStrip6' => []
    ];
    public $reelsStripBonus = [
        'reelStripBonus1' => [], 'reelStripBonus2' => [], 'reelStripBonus3' => [],
        'reelStripBonus4' => [], 'reelStripBonus5' => [], 'reelStripBonus6' => []
    ];

    public function __construct($gameDirPath)
    {
        // $gameDirPath should be the path to the game's directory, e.g., __DIR__ . '/' from SlotSettings
        $reelsFilePath = $gameDirPath . 'reels.txt';

        if (!file_exists($reelsFilePath)) {
            // Log error or throw exception if reels.txt is critical and not found
            error_log("Reels file not found: " . $reelsFilePath);
            // Initialize with empty arrays to prevent errors if file is missing
            foreach (array_keys($this->reelsStrip) as $key) {
                $this->reelsStrip[$key] = [];
            }
            foreach (array_keys($this->reelsStripBonus) as $key) {
                $this->reelsStripBonus[$key] = [];
            }
            return;
        }

        $temp = file($reelsFilePath);
        foreach ($temp as $str) {
            $strParts = explode('=', $str, 2); // Limit to 2 parts
            if (count($strParts) == 2) {
                $reelKey = trim($strParts[0]);
                $reelData = explode(',', trim($strParts[1]));

                $currentReelSymbols = [];
                foreach ($reelData as $elem) {
                    $trimmedElem = trim($elem);
                    if ($trimmedElem !== '') {
                        $currentReelSymbols[] = $trimmedElem;
                    }
                }

                // Populate main reel strips
                if (array_key_exists($reelKey, $this->reelsStrip)) {
                    $this->reelsStrip[$reelKey] = $currentReelSymbols;
                }
                // Populate bonus reel strips (often same as main if not specified differently in reels.txt)
                // This assumes keys like 'reelStripBonus1' might exist in reels.txt or should map from main
                if (array_key_exists($reelKey, $this->reelsStripBonus)) { // e.g. if reels.txt has 'reelStripBonus1=...'
                     $this->reelsStripBonus[$reelKey] = $currentReelSymbols;
                } else {
                    // If reels.txt doesn't explicitly define bonus strips (e.g. reelStripBonus1),
                    // we might assume they are same as main, or handle it if specific bonus keys are expected.
                    // The original code structure implies reels.txt might contain both or that they are the same.
                    // Let's assume if 'reelStripBonusX' is a key in the class property, it expects data.
                    // This part needs to align with how reels.txt is structured.
                    // If reels.txt only has reelStrip1, reelStrip2 etc. then bonus strips need to be
                    // explicitly assigned or handled. The original GameReel implied it would fill both if key matches.
                    // This means if reels.txt has "reelStrip1=...", it would fill both $this->reelsStrip['reelStrip1']
                    // and $this->reelsStripBonus['reelStrip1'].
                    // Let's refine to match that original implication more closely if the key exists in both arrays:
                     if (strpos($reelKey, 'Bonus') === false) { // If it's a main reel key from reels.txt
                         $bonusKeyEquivalent = str_replace('reelStrip', 'reelStripBonus', $reelKey);
                         if (array_key_exists($bonusKeyEquivalent, $this->reelsStripBonus) && empty($this->reelsStripBonus[$bonusKeyEquivalent])) {
                             $this->reelsStripBonus[$bonusKeyEquivalent] = $currentReelSymbols;
                         }
                     }
                }
            }
        }
        // Ensure bonus reels are filled if they were not explicitly in reels.txt but expected (e.g. same as main)
        foreach($this->reelsStrip as $key => $value){
            $bonusKey = str_replace('reelStrip', 'reelStripBonus', $key);
            if(array_key_exists($bonusKey, $this->reelsStripBonus) && empty($this->reelsStripBonus[$bonusKey])){
                $this->reelsStripBonus[$bonusKey] = $value;
            }
        }
    }
}
```
