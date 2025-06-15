import type { PrismaUserProfile } from "./prisma"

// import { Game } from "../../prisma/client"
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasNextPage?: boolean
  hasPrevPage?: boolean
}
export interface PaginatedGamesResponse<Game> extends PaginatedResponse<Game> {
  items: Game[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasNextPage?: boolean
  hasPrevPage?: boolean
}

export type GenericApiResponse<T = any> = {
  success: boolean
  data: T | null
  error?: string | null
  errorCode?: string | number | null
}
export type UserProfile = PrismaUserProfile & {
  // You can still augment SharedUserType here if there are additional properties
  // or if you want to ensure certain optional properties from SharedUserType are non-optional here.
  // However, looking at your current 'ai/shared/src/types/prisma.ts',
  // UserPrismaProfile might just be an alias for SharedUserType if no further modifications are needed.
  // For example, if SharedUserType already has:
  //   profile?: PrismaProfile | null;
  //   settings?: PrismaSettings | null;
  //   vipInfo?: PrismaVipInfo | null;
  // Then the explicit & { profile: PrismaProfile | null; ... } below might be redundant,
  // unless you want to make them non-optional or add new fields.
  // Assuming PrismaProfile, PrismaSettings, PrismaVipInfo are already correctly typed in SharedUserType:
  // profile: PrismaProfile | null // This is likely already optional in SharedUserType
  // settings: PrismaSettings | null // This is likely already optional in SharedUserType
  // vipInfo: PrismaVipInfo | null // This is likely already optional in SharedUserType
}