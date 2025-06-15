// DazzleMeNET specific types and interfaces

export interface DazzleMeNETGameState {
  balance: number;
  currentBet: number;
  denomination: number;
  freeGames: number;
  currentFreeGame: number;
  totalWin: number;
  lastWin: number;
  reels: number[][];
  winLines: WinLine[];
  bonusWin: number;
  freeState: string;
}

export interface WinLine {
  line: number;
  symbol: number;
  count: number;
  win: number;
  wildMultiplier: number;
}

export interface DazzleMeNETSpinResult {
  reels: number[][];
  winLines: WinLine[];
  totalWin: number;
  freeGames: number;
  currentFreeGame: number;
  bonusWin: number;
  freeState: string;
  balance: number;
}

export interface DazzleMeNETConfig {
  reelStrips: Record<string, number[]>;
  paytable: Record<number, number[]>;
  winLines: number[][];
  wildSymbol: number;
  scatterSymbol: number;
  bonusSymbol: number;
  freeGameMultiplier: number;
  wildMultiplier: number;
}

// Extend the base PHP response type for DazzleMeNET
declare module './php' {
  interface PhpApiResponse {
    // Add DazzleMeNET specific response fields
    reels?: number[][];
    winLines?: WinLine[];
    freeGames?: number;
    currentFreeGame?: number;
    freeState?: string;
    // ... other DazzleMeNET specific fields
  }
}
