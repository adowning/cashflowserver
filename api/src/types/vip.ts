// export type { VipInfo as PrismaVipInfo, UserReward as PrismaUserReward } from '../prisma/types'

export interface VipInfo {
  id: string // ID of the VipInfo record
  userId: string
  level: number
  currentLevelXp: number
  totalXp: number
  // nextLevelXpRequired: number // XP needed to reach the next level from 0 XP of current level
  // Daily/Weekly/Monthly claims or limits
  dailyBonusClaimedAt?: Date | null
  weeklyBonusClaimedAt?: Date | null
  monthlyBonusClaimedAt?: Date | null
  // Other VIP specific benefits or states
  cashbackPercentage: number
  // prioritySupport: boolean
  // specialBonusesAvailable: number // e.g., count of special bonuses
  createdAt: Date
  updatedAt: Date
}
export interface LevelBenefit {
  id: string // e.g., 'increased_withdrawal_limit', 'special_avatar_frame'
  name: string
  description: string
}

export interface LevelConfig {
  level: number // The numeric level
  name: string // e.g., "Bronze I", "Silver Elite"
  xpRequired: number // XP needed to complete THIS level (length of this level's XP bar)
  cumulativeXpToReach: number // Total XP from level 0 needed to ENTER this level
  cashbackPercentage: number
  prioritySupport: boolean
  initialSpecialBonuses?: number // Bonuses granted upon reaching this level
  dailyBonusMultiplier?: number
  weeklyBonusAmount?: number
  monthlyBonusPackage?: string // Identifier for a package of items
  benefits: LevelBenefit[] // Array of specific benefits unlocked
  // ... any other properties specific to a level
}

// export interface UserXpGainedPayload {
//   userId: string;
//   pointsGained: number;
//   source: string;
//   newTotalXp: number;
//   xpEventId: string;
// }

// Re-export or define Prisma types if not directly imported in service

export interface UserVipDetails {
  level: number
  currentLevelXp: number
  totalXp: number
  xpToNextLevel: number
  nextLevelXpRequired: number // XP bar length for current level
  cashbackPercentage: number
  prioritySupport: boolean
  specialBonusesAvailable: number
  lastDailyBonusClaim?: Date | null
  lastWeeklyBonusClaim?: Date | null
  lastMonthlyBonusClaim?: Date | null
}

export interface LevelBenefitInfo {
  // For client-side display of benefits
  id: string
  name: string
  description: string
}

export interface SharedLevelConfig {
  // Client-friendly version of LevelConfig
  level: number
  name: string
  xpRequiredToComplete: number // XP needed for this level's bar
  cumulativeXpToEnter: number
  cashbackPercentage: number
  prioritySupport: boolean
  benefits: LevelBenefitInfo[]
  // Potentially simplified reward descriptions for display
  levelUpRewardDescription?: string
  dailyRewardDescription?: string
  weeklyRewardDescription?: string
  monthlyRewardDescription?: string
}

export interface SignInRewardConfig {
  // Matches your leveling.config.ts structure
  day: number
  description: string
  amount?: number
  currencyId?: string
  xp?: number
}

export interface VipSignInStatusInfo {
  currentStreak: number
  todayClaimed: boolean
  rewards: SignInRewardConfig[] // Full list of possible daily rewards
  nextRewardForToday?: SignInRewardConfig // The reward applicable if claimed now
}

// For VipTask (client-side representation)
export interface VipTaskInfo {
  id: string
  taskType: string // Consider using the VipTaskType enum string values
  description: string
  xpReward?: number | null
  targetValue?: number | null
  currentProgress: number
  isCompleted: boolean
  isClaimed: boolean
  // Add item/bonus reward details if needed for display
}

export interface RebateHistoryEntry {
  id: string
  date: Date
  originalTransactionId: string
  rebateAmount: number
  currencyId: string
  status: string // RewardStatus enum string value
  paidOutAt?: Date | null
}

export interface LevelUpRewardInfo {
  level: number
  description: string
  amount?: number | null
  currencyId?: string | null
  status: string // RewardStatus
  claimedAt?: Date | null
  // Potentially item details if applicable
}

// You might also want a shared UserReward type if you expose the PrismaUserReward directly or a mapped version
// export interface UserReward {
//   id: string
//   rewardType: string // RewardType enum string value
//   description: string
//   status: string // RewardStatus enum string value
//   amount?: number | null
//   currencyId?: string | null
//   metaData?: any // Json
//   claimedAt?: Date | null
//   expiresAt?: Date | null
//   availableFrom: Date
//   vipLevelRequirement?: number | null
// }

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page?: number
  limit?: number
  totalPages?: number // Calculated: Math.ceil(total / limit)
  hasNextPage?: boolean // Calculated: page * limit < total
  hasPrevPage?: boolean // Calculated: page > 1
}
// A simplified version for the function's return, focusing on what's needed
// We can call this UserVipProfile or similar
// export interface UserVipDetails {
//   level: number;
//   currentLevelXp: number; // XP accumulated within the current level
//   totalXp: number; // Overall XP accumulated by the user
//   xpToNextLevel: number; // XP points remaining to reach the next level
//   nextLevelXpRequired: number; // Total XP needed for the current level (from its start to its end)
//   cashbackPercentage: number;
//   prioritySupport: boolean;
//   specialBonusesAvailable: number;
//   // Timestamps for last claimed periodic bonuses
//   lastDailyBonusClaim?: Date | null;
//   lastWeeklyBonusClaim?: Date | null;
//   lastMonthlyBonusClaim?: Date | null;
// }
// export interface GetVIPData {
//   id: number;
//   totalDepositAmount: number;
//   currentDepositAmount: number;
//   totalWagerAmount: number;
//   currentWagerAmount: number;
//   vipGrade: string;
//   vipRate: number;
// }

// export interface GetSpinData {
//   id: number;
//   image: any;
//   title: string;
//   content: string;
// }

// export interface GetRouletteHistory {
//   id: number;
//   rouletteTime: string;
//   user: string;
//   rouletteResult: string;
// }

// // export interface VipInfo {
// //   id: string;
// //   level: number;
// //   deposit_exp: number;
// //   bet_exp: number;
// //   rank_bet_exp: number;
// //   rank_deposit_exp: number;
// //   rank_name: string;
// //   icon: string;
// //   exp_switch_type: number;
// //   now_deposit_exp: string;
// //   level_deposit_exp: string;
// //   now_bet_exp: string;
// //   level_bet_exp: string;
// //   telegram: string;
// //   is_protection: boolean;
// //   protection_deposit_exp: string;
// //   protection_deposit_amount: string;
// //   protection_bet_exp: string;
// //   protection_bet_amount: string;
// //   protection_days: number;
// //   protection_switch: number;
// //   cycle_award_switch: boolean;
// //   level_award_switch: boolean;
// //   signin_award_switch: boolean;
// //   bet_award_switch: boolean;
// //   withdrawal_award_switch: boolean;
// //   unprotection_deposit_exp: string;
// //   unprotection_deposit_amount: string;
// //   unprotection_bet_exp: string;
// //   unprotection_bet_amount: string;
// //   unprotection_days: number;
// //   unprotection_switch: number;
// //   main_currency: string;
// //   can_receive_level_award: boolean;
// //   can_receive_rank_award: boolean;
// //   can_receive_day_award: boolean;
// //   can_receive_week_award: boolean;
// //   can_receive_month_award: boolean;
// //   can_receive_signin_award: boolean;
// //   can_receive_bet_award: boolean;
// //   can_receive_withdrawal_award: boolean;
// //   userid: string;
// //   free_spin_times: number;
// //   week_gift: number;
// //   month_gift: number;
// //   upgrade_gift: number;
// //   now_cash_back: number;
// //   yesterday_cash_back: number;
// //   history_cash_back: number;
// //   gamesession?: any[];
// //   operator?: any;
// //   user_profile_userIdTouser?: any;
// //   tournamententry?: any[];
// //   transactions?: any[];
// // }

// export interface VipLevel {
//   level: number;
//   rank_id: number;
//   protection_conditions: number;
//   deposit_exp: number;
//   bet_exp: number;
//   free_spins_times: number;
//   uprank_award: number;
//   week_award: number;
//   withdrawals_amonut: number;
//   withdrawal_times: number;
//   month_withdrawals_amount: number;
//   month_withdrawals_times: number;
//   month_award: number;
//   free_withdrawals: number;
//   free_withdrawals_times: number;
//   withdrawal_fee: number;
//   bet_award_rate: any;
//   signin_award: Array<any>;
//   tasks_max: number;
//   deposit_rate: number;
//   bet_rate: number;
//   availabe_daily_bonus_time: string;
//   collectable_week_bonus_day: string | number;
//   collectable_month_bonus_day: string | number;
// }

// export interface VipTaskItem {
//   index: string;
//   task_id: string;
//   task_type: string;
//   task_terms: {
//     terms_id: string;
//     deposit: string;
//     bet: string;
//     game_type: string;
//     game_tag: string;
//     times: string;
//     multiplier: string;
//     game_win: string;
//   };
//   state: string;
//   award: string;
// }

// export interface VipRebateHistoryItem {
//   notes_id: string | number;
//   created_at: string | number;
//   amount: string | number;
//   cash_back: string | number;
//   vip_level: string | number;
//   vip_rate: string | number;
//   game_type: string;
// }

// export interface VipRebateHistoryRequest {
//   page_num: number;
//   page_size: number;
//   start_time: number;
// }

// export interface VipLevelRewardHistoryItem {
//   notes_id: string | number;
//   created_at: string | number;
//   amount: string | number;
//   vip_level: string | number;
//   type: string;
// }

// export interface VipLevelRewardHistoryRequest {
//   page_num: number;
//   page_size: number;
//   start_time: number;
// }

// export interface VipTimesHistoryItem {
//   notes_id: string | number;
//   created_at: string | number;
//   amount: string | number;
//   vip_level: string | number;
//   type: string;
// }

// export interface VipTimesHistoryRequest {
//   index: number;
//   page_num: number;
//   page_size: number;
//   start_time: number;
// }

// export interface VipLevelUpListData {
//   level: number;
//   upgreadegift: number;
//   upgrade_award: number;
// }

// export interface VipLevelUpReceiveData {
//   win_award: number;
//   lose_award: Array<number>;
// }

// export type GetVipLevelUpReceiveResponse = {
//   code: number;
//   data: VipLevelUpReceiveData;
//   message: string;
// };

// export type GetVipSignInResponse = {
//   code: number;
//   data: VipSignInData;
//   message: string;
// };

// export type VipCycleawardListData = {
//   membership_day_gift: number;
//   day_gift: number;
//   week_gift: number;
//   month_gift: number;
// };

// export type SuccessMessageParams = {
//   message: string;
//   type: number;
// };

// /**
//  * Represents a VIP Benefit.
//  * Based on the Prisma 'VipBenefit' model.
//  */
// export interface VipBenefit {
//   id: string;
//   level: number; // The VIP level this benefit applies to
//   name: string; // e.g., "Weekly Cashback", "Dedicated Support"
//   description: string;
//   type: string; // e.g., 'CASHBACK', 'BONUS', 'FREE_SPINS', 'SUPPORT_LEVEL'
//   value: number; // e.g., for 10% cashback, value might be 10
//   value_type: string; // e.g., 'PERCENTAGE', 'FIXED_AMOUNT', 'SERVICE_TIER'
//   // is_claimable: boolean; // If the benefit needs to be actively claimed
//   // claim_frequency?: string | null; // e.g., 'DAILY', 'WEEKLY', 'MONTHLY', 'ONE_TIME'
//   created_at: Date;
//   updated_at: Date;
// }
// // Suggested location: packages/types/src/interface/vip.ts
// // (Assuming VipBenefitId is a string, typically a UUID or CUID)
// export interface ClientClaimVipRewardPayload {
//   benefit_id: string; // The unique identifier of the VIP benefit to be claimed.
// }
// // packages/types/src/interface/vip.ts

// // --- Base Response Type ---
// export interface BaseResponse<T = any> {
//   code: number; // 200 for success, other codes for errors
//   message?: string;
//   data?: T;
// }

// // --- Core VIP Data Structures ---

// /**
//  * Represents a benefit associated with a VIP level.
//  * This could be stored in VipLevel.additionalBenefits (JSON) or as a separate related model.
//  */
// export interface VipBenefitItem {
//   // Renamed from PrismaVipBenefit to avoid confusion if you have a direct Prisma model export with that name
//   name: string; // e.g., "Weekly Cashback", "Birthday Bonus"
//   description?: string;
//   type: string; // e.g., 'CASHBACK_PERCENTAGE', 'FIXED_BONUS', 'DEDICATED_SUPPORT', 'WITHDRAWAL_PRIORITY'
//   value: string | number | boolean; // Flexible value: "10%" or 10 (for 10 USD) or true
//   // value_type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | 'BOOLEAN' | 'STRING'; // To interpret the value field
//   is_claimable?: boolean;
//   claim_frequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ONE_TIME_LEVEL_UP' | 'ANNUALLY' | null;
// }

// /**
//  * Represents a single VIP Level configuration.
//  * This aligns with the Prisma `VipLevel` model.
//  */
// export interface VipLevel {
//   id: string;
//   level: number;
//   name: string;
//   rank_name?: string; // Display name for the rank/tier
//   icon?: string | null; // URL for the level icon/badge
//   deposit_exp_required: number; // Total deposit to reach this level
//   bet_exp_required: number; // Total wager to reach this level
//   level_up_bonus?: number; // One-time bonus for reaching this level
//   weekly_bonus?: number; // Potential weekly bonus amount
//   monthly_bonus?: number; // Potential monthly bonus amount
//   benefits: VipBenefitItem[]; // Array of benefits for this level
//   keep_rate?: number; // Maintenance requirement (e.g., percentage of exp_required)
//   protection_days?: number; // Days of relegation protection
//   // Switches from backend indicating feature availability for this level
//   cycle_award_switch?: boolean;
//   level_award_switch?: boolean;
//   signin_award_switch?: boolean;
//   bet_award_switch?: boolean;
//   withdrawal_award_switch?: boolean; // e.g. for faster withdrawals
// }

// /**
//  * Comprehensive VIP information for the currently authenticated user.
//  * This is what the Pinia store `vipInfo` state holds.
//  */
// export interface VipInfo {
//   id: string; // UserVipProgress ID
//   level: number;
//   deposit_exp: number; // User's lifetime deposit exp
//   bet_exp: number; // User's lifetime bet exp

//   rank_bet_exp: number; // Bet exp required for current rank/level
//   rank_deposit_exp: number; // Deposit exp required for current rank/level
//   rank_name: string;
//   icon: string;
//   exp_switch_type: number; // How XP is calculated (1: deposit, 2: bet, 3: both)

//   // Current cycle progress (e.g., weekly/monthly)
//   now_deposit_exp: string; // Current cycle deposit exp (formatted string)
//   level_deposit_exp: string; // Target deposit exp for current level (formatted string)
//   now_bet_exp: string; // Current cycle bet exp (formatted string)
//   level_bet_exp: string; // Target bet exp for current level (formatted string)

//   telegram: string;
//   is_protection: boolean;
//   protection_deposit_exp: string; // Formatted string
//   protection_deposit_amount: string; // Formatted string
//   protection_bet_exp: string; // Formatted string
//   protection_bet_amount: string; // Formatted string
//   protection_days: number;
//   protection_switch: number; // 0 or 1 for boolean display

//   // Feature switches active for the user's current level
//   cycle_award_switch: boolean;
//   level_award_switch: boolean;
//   signin_award_switch: boolean;
//   bet_award_switch: boolean;
//   withdrawal_award_switch: boolean;

//   // Progress to next level
//   pointsToNextLevel?: number; // XP points needed for next level
//   progressPercentage?: number; // 0-100%
//   currentLevelName: string;
//   nextLevel?: number;
//   nextLevelName?: string;
//   benefits: VipBenefitItem[];
// }

// // --- API Request & Response Types (matching Pinia store actions & server routes) ---

// // Get User's VIP Info
// export type GetVipInfoResponse = BaseResponse<VipInfo | null>;

// // Get All VIP Levels
// export type GetVipLevelResponse = BaseResponse<VipLevel[]>;

// // Claiming Rewards (Requests)
// export interface VipLevelAwardReceiveRequest {
//   // For one-time level up / rank up claims based on a general type
//   type: number; // e.g., 1 for level_up_gift, 2 for rank_up_gift (from Pinia store)
// }
// export interface VipCycleawardReceiveRequest {
//   // For weekly/monthly claims
//   type: number; // e.g., 1 for weekly, 2 for monthly
// }
// export interface VipBetawardReceiveRequest {
//   // For claiming bet/turnover based rebates
//   type: number; // e.g., 7 for "打码奖励" (Coding rewards / bet rebate)
// }
// export interface VipLevelUpReceiveRequest {
//   // For claiming specific historical level-up milestones
//   id: number; // Corresponds to VipLevelUpItem.id (likely the vip_level.level)
// }

// // Claiming Rewards (Responses - data part might vary)
// export interface VipLevelAwardData {
//   // Data for VIP_LEVEL_AWARD (general level/rank up)
//   level_up_num: number; // User's new level after potential level up
//   level: number; // Level for which reward is given
//   upgrade_gift: number; // Amount of level up gift
//   rank_up_num: number; // User's new rank if different
//   rank: number; // Rank for which reward is given
//   uprank_gift: number; // Amount of rank up gift
// }
// export type GetVipLevelAwardResponse = BaseResponse<VipLevelAwardData | null>; // For VIP_LEVEL_AWARD
// export type GetVipCycleAwardResponse = BaseResponse<{ vipInfo?: VipInfo } | null>; // Example, might just be BaseResponse or updated VipInfo
// export type VipLevelUpReceiveResponse = BaseResponse<{
//   claimed_amount?: number;
//   new_balance?: number;
// } | null>; // For specific level up milestone
// // For Bet Award Receive and Signin Award Receive, a simple BaseResponse might suffice if no specific data is returned beyond success/failure.
// // Or they could return updated VipInfo or balance.
// export type GetVipBetAwardReceiveResponse = BaseResponse<{
//   claimed_amount?: number;
//   new_balance?: number;
// } | null>;

// // Daily Sign-in
// export interface VipSignInAwardItem {
//   day: number;
//   reward_type: number; // e.g., 1 for points, 2 for bonus credits
//   reward_num: number;
// }
// export interface VipSignInData {
//   award: VipSignInAwardItem[];
//   signin_day: number; // Current consecutive sign-in day
//   is_signin: 0 | 1; // 0 if not signed in today, 1 if signed in
//   limited_bet: number; // Bet requirement for sign-in (if any)
//   limited_deposit: number; // Deposit requirement for sign-in (if any)
//   vip_level: number;
// }
// export type GetVipSignInAwardResponse = BaseResponse<VipSignInData | null>;
// // For POST /api/vip/signin (claimDailySignIn), BaseResponse is likely sufficient.

// // VIP Tasks
// export interface VipTaskItem {
//   id: number | string; // Task ID
//   type: number; // Corresponds to task_type in store (e.g., 1 for deposit, 2 for bet)
//   title: string;
//   content: string;
//   status: 0 | 1 | 2; // 0: not started, 1: in progress, 2: completed/claimable
//   schedule: number; // Current progress
//   schedule_max: number; // Target for completion
//   reward: string; // Formatted reward string
//   is_receive: 0 | 1; // 0 if claimed or not completed, 1 if claimable
// }
// export type GetVipTaskResponse = BaseResponse<VipTaskItem[]>;

// // VIP Level Up List (Pending Rewards)
// export interface VipLevelUpItem {
//   id: number; // Represents the VIP Level (VipLevel.level)
//   level: number;
//   name: string;
//   status: 0 | 1 | 2; // 0: not claimable (already claimed or not reached), 1: claimable, 2: claimed
//   reward_num: number; // Amount of the level up bonus
// }
// export interface VipLevelUpListData {
//   list: VipLevelUpItem[];
//   total_receive_num: number; // Total amount of pending claimable level up rewards
// }
// export type GetVipLevelUpListResponse = BaseResponse<VipLevelUpListData | null>;

// // VIP Bet Award List (Cashback/Rebate Info)
// export interface VipBetawardListData {
//   // Matches vipBetawardListData from your Pinia store
//   now_cash_back: string;
//   yesterday_cash_back: string;
//   history_cash_back: string;
// }
// export type GetVipBetAwardListResponse = BaseResponse<VipBetawardListData | null>;

// // History Endpoints
// export interface VipHistoryRequest {
//   page: number;
//   limit: number;
//   // Add other filters if needed, e.g., date ranges
// }
// export interface VipHistoryItem {
//   // Generic item for history lists
//   id: string; // Claim ID or transaction ID
//   name: string; // Description of the reward/rebate
//   time: string; // ISO Date string
//   amount: number;
//   remark?: string;
//   // Add other fields like status if applicable
// }

// export interface VipRebateHistoryData {
//   total: number;
//   list: VipHistoryItem[];
// }
// export type GetVipRebateHistoryResponse = BaseResponse<VipRebateHistoryData>;

// export interface VipLevelRewardHistoryData {
//   total: number;
//   list: VipHistoryItem[]; // Could be more specific if needed
// }
// export type GetVipLevelRewardHistoryResponse = BaseResponse<VipLevelRewardHistoryData>;

// export interface VipTimesHistoryData {
//   // e.g., for daily sign-in history
//   total: number;
//   list: VipHistoryItem[];
// }
// export type GetVipTimesHistoryResponse = BaseResponse<VipTimesHistoryData>;

// // --- Placeholder for Prisma-generated VipBenefit if you choose to use it directly ---
// // This is from your originally provided vip_interface.ts and would correspond to a direct Prisma model
// export interface PrismaVipBenefit {
//   id: string;
//   level: number;
//   name: string;
//   description: string;
//   type: string;
//   value: number; // Or string, depending on how you store it
//   value_type: string;
//   // is_claimable: boolean;
//   // claim_frequency?: string | null;
// }
