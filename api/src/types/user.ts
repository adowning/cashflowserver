// packages/types/src/interface/user.ts
// Assuming '../index' correctly re-exports these Prisma model types
// and your custom CurrencyType if it's not directly the Prisma model.
// import type { UserProfile } from '../index';
// import type { UserProfile } from '../prisma/types/user' // Adjust path if needed, e.g., to "../prisma/interfaces"
import type { PrismaUserProfile, PrismaTournamentReward } from './prisma'
import type { PrismaTransactionType } from './prisma'

// import type { PrismaUserReward } from './vip'
// export { UserReward } from '../prisma/types'
// Adjust path if needed, e.g., to "../prisma/interfaces"

// --- Type Aliases for Readability or Branding ---
export type Email = string
export type Username = string
// export type UserProfile = User & {
//   profile: Profile
//   avatar?: string // Add optional avatar property
// }
// --- Canonical UserProfile ---
/**
 * Represents the primary, comprehensive User object structure returned by the backend
 * upon authentication and used throughout the client (e.g., authStore.currentUser).
 * This is based on the Prisma 'User' model, potentially augmented with essential related data.
 */
// export type UserProfile = PrismaUser & {
//   // Optional: Augment with frequently needed relations if they are EAGERLY loaded
//   // or if you want a consistent shape that includes them.
//   // If these are loaded on-demand, they might not be part of the base UserProfile.
//   activeProfile?: Partial<PrismaProfile> | null; // User's profile details
//   // Balances might be fetched separately or be a simplified summary here.
//   // For detailed balances, use the Balance type below or GetUserBalance DTO.
//   // Example: primary_balance_currency_id?: string; primary_balance_amount?: number;
// };

// --- Specific DTOs for User-Related Operations ---

/**
 * DTO for client to send updates for their user profile.
 * Contains only the fields a user is allowed to modify directly.
 */
export interface UpdateUserInput {
  username?: Username
  avatar_url?: string // URL to the new avatar image
  first_name?: string
  last_name?: string
  date_of_birth?: string // Expects ISO Date string format (YYYY-MM-DD)
  // language?: string; // Example: 'en', 'es'
  // locale?: string;   // Example: 'en-US', 'es-ES'
  // Add other fields like notification preferences, etc.
}

/**
 * DTO for client to update their email address.
 * Requires current password for verification.
 */
export interface UpdateEmailDto {
  _email: Email
  password: string // Current password for verification (ensure server expects 'password')
}

/**
 * DTO for client to update their cashtag (or similar payment identifier).
 * Requires current password for verification.
 */
export interface UpdateCashtagDto {
  cashtag: string // The new cashtag value
  password: string // Current password for verification (ensure server expects 'password')
}

/**
 * DTO for client to change their password.
 */
export interface UpdatePasswordDto {
  current_password: string // User's current plain text password
  password: string // User's new plain text password
}

export interface ClientClaimVipRewardPayload {
  benefit_id: string // The unique identifier of the VIP benefit to be claimed.
}
/**
 * DTO for client to set their referrer.
 */
export interface SetReferrerDto {
  referrerCode: string
}

/**
 * DTO for client to tip another user.
 */
export interface TipUserDto {
  recipientUsername: Username
  amount: number // Positive value
  currency_id: string // ID of the currency (e.g., from PrismaCurrency.id)
}

// --- DTOs for Specific User Data Retrieval Responses ---

/**
 * Detailed user profile information, potentially from a dedicated profile endpoint.
 * This might differ from the primary UserProfile if it includes more specific or formatted data.
 * Review and align with your actual API response for fetching detailed user profiles.
 */
export interface DetailedUserProfile {
  uid: string // Usually matches UserProfile.id
  username: Username
  avatar_url?: string | null // Standard field name for avatar
  first_name?: string | null
  last_name?: string | null
  // id?: number | string; // If this is a different ID system, clarify. User.id should be the primary.
  // id_number?: string | null; // Example: National ID, if collected
  email: Email
  is_email_confirmed: boolean // Corrected typo, standard boolean
  phone?: string | null
  is_phone_confirmed: boolean // Corrected typo, standard boolean
  date_of_birth?: string | null // ISO Date string (YYYY-MM-DD)
  country?: string | null // Corrected from 'county'
  state?: string | null
  city?: string | null
  address?: string | null
  postal_code?: string | null
  language?: string | null // e.g., 'en'
  locale?: string | null // e.g., 'en-US'
  is_initial_profile_complete: boolean
  is_suspended: boolean // Standard boolean
  // sys_communications?: boolean; // Notification preferences might be part of UpdateUserInput
  // locked_personal_info_fields?: string[]; // Fields that user cannot change
  created_at: string // ISO Date string
  // Include fields from PrismaProfile if they are part of this detailed view
}
export interface GetSessionResponse {
  access_token: string
  code: number
  status: number
  user: PrismaUserProfile
}
/**
 * Response structure when fetching detailed user information.
 */
export interface GetDetailedUserProfileResponse {
  // Consider if 'code' and 'message' are standard for all your API responses.
  // If so, a generic wrapper type might be useful.
  // code: number;
  // message?: string;
  user_profile: DetailedUserProfile // The detailed profile data
}

/**
 * Represents a User's Balance for a specific currency.
 * Based on the Prisma 'Balance' model.
 */
// export interface BalanceType {
//   // You can augment PrismaBalance if needed, e.g., with the Currency object
//   Currency?: Currency
// }
// Or if you need a more specific structure for client display:
export interface UserBalanceDetails {
  currency_id: string // e.g., "USD", "BTC"
  currency_name: string
  currency_symbol: string
  total_amount: string // Using string for precision (e.g., from Decimal.js)
  available_balance: string // Using string for precision
  real_balance: string // Using string for precision
  bonus_balance: string // Using string for precision
}
export interface UserBalanceUpdatePayload {
  userId: string
  newBalance: number
  table: string
  // currencyId,
  changeAmount: number
  transactionType: PrismaTransactionType
  relatedTransactionId: string
}
// --- VIP Related User Types ---
/**
 * DTO representing the user's detailed VIP status and benefits.
 */
export interface UserVipStatus {
  level: number
  currentLevelName: string
  currentPoints: number // Current VIP XP or points
  pointsToNextLevel?: number // Points required to enter the next VIP level (total for that level)
  // Or could be 'pointsRemainingForNextLevel'
  nextLevel?: number // The number of the next VIP level (if one exists)
  nextLevelName?: string
  progressPercentage?: number // Percentage towards the next level (0-100)
  benefits: PrismaTournamentReward[] // List of VipBenefit objects for the current level
}

// --- Real-time Update Types (Keep if used for WebSockets) ---
export interface ProfileStatsUpdateData {
  balance: string // Use string for currency precision
  createdAt: string // ISO Date string
  currency_id: string // e.g., "USD"
  id: string // Profile ID?
  isActive: boolean
  lastPlayed: string // ISO Date string
  // phpId?: number; // If legacy, consider phasing out
  // shopId?: string; // If relevant
  updatedAt?: string | null // ISO Date string
  user_id: string
  xpEarned: number
}

export interface UserStatsUpdateData {
  // This seems general. Consider if it should be tied to a specific currency
  // or if it's an aggregate value.
  balance_cash_change?: string // Change in real balance (string for precision)
  balance_bonus_change?: string // Change in bonus balance (string for precision)
  total_xp_change?: number // Change in XP
  // Include currency_id if balance changes are per currency
}

export interface StatsUpdate {
  table: 'User' | 'Profile' | 'Balance' | string // Be more specific with table names if possible
  row_id: string // ID of the affected row
  operation: 'UPDATE' | 'INSERT' | 'DELETE'
  // Use a more specific type for 'data' based on the 'table' and 'operation'
  // This helps in type-safe handling of the data on the client.
  // Example:
  // data:
  //   | ({ table: "User" } & Partial<UserProfile>)
  //   | ({ table: "Profile" } & Partial<PrismaProfile>)
  //   | ({ table: "Balance" } & Partial<BalanceType>);
  data: Partial<UserStatsUpdateData | ProfileStatsUpdateData | PrismaUserProfile>
  event_id?: string // Unique event identifier
}
