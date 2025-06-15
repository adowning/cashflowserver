import { DepositProduct } from '@/types/transaction'
import type { PrismaPaymentMethod, PrismaProduct } from './prisma'

export interface GetCurrencyItem {
  icon: string
  name: string
  value: number
}

export interface GetPaymentItem {
  id: string
  icon: string
  name: string
  description: string
  min: string | number
  max: string | number
}

export interface GetPixInfo {
  id: string
  first_name: string
  last_name: string
}

export interface GetDepositResponse {
  code: number
  data: any
  message: string
}
export interface PrismaProductWithoutTransactions extends PrismaProduct {
  // operator: null;/
  transactions: []
}
export interface GetPrismaProductsResponse {
  code: number
  products: any[]
  message: string
}

export interface OperatorData {
  id: string
  acceptedPayments: string[]
  products: DepositProduct[]
}

export interface GetOperatorDataResponse {
  code: number
  operator: OperatorData
  message: string
}
export interface DepositItem {
  id_number: string
  userId: string
  operatorId: string
  channels_id: string
  amount: string | number
  currency: string | null
  productId: string | null
  paymentMethod: PrismaPaymentMethod
}

export interface DepositHistoryItem {
  id: number
  created_at: number
  type: string
  createdAt: Date
  product: Partial<PrismaProduct> | null
  amount: string
  status:
    | 'PENDING'
    | 'PROCESSING' // Added from schema.zmodel.txt
    | 'COMPLETED'
    | 'FAILED'
    | 'CANCELLED'
    | 'REFUNDED'
    | 'EXPIRED' // Added from schema.zmodel.txt
    | 'REJECTED' // Added from schema.zmodel.txt
    | 'REQUIRES_ACTION'
    | 'ON_HOLD' // Added from schema.zmodel.txt
  note: string
  currency: 'USD'
}

export interface DepositHistoryResponse {
  total_pages: number
  record: Array<DepositHistoryItem>
  error: string | null
  code: number
}

export interface SubmitDepositResponse {
  code: number
  data: any
  error: string | null
}

export type GetDepositHistoryResponse = {
  code: number
  data: DepositHistoryResponse
  message: string
}
/**
 * DTO for initializing a deposit.
 */
// export interface InitializeDepositDto {
//   channels_id: any;
//   amount: number; // Should be positive
//   method: string; // Payment method identifier (e.g., 'CASHAPP', 'CRYPTO_BTC', 'CREDIT_CARD')
//   currency_id: string; // ID of the currency for the deposit
// }

// Suggested location: packages/types/src/interface/deposit.ts
export interface InitializeDepositResponseDto {
  /**
   * The unique identifier for the initiated deposit transaction.
   */
  deposit_id: string

  /**
   * The payment method used (e.g., "CRYPTO", "CASHAPP", "CARD").
   * This helps the client understand the next steps or display relevant info.
   */
  payment_method: string

  /**
   * URL to redirect the user to for completing the payment (e.g., a payment gateway page).
   * Optional, as some methods might not require immediate redirection (e.g., crypto address display).
   */
  payment_url?: string

  /**
   * For crypto deposits, this would be the address to send funds to.
   * Optional, only relevant for certain payment methods.
   */
  crypto_address?: string

  /**
   * For crypto deposits that use memo/destination tags (e.g., XRP, XLM).
   * Optional.
   */
  crypto_memo?: string

  /**
   * Any additional message or instructions for the user.
   * e.g., "Please send an exact amount for faster processing."
   */
  message?: string

  /**
   * QR code data for payment, could be the crypto address or a payment link.
   * Optional.
   */
  qr_code_data?: string

  /**
   * Expected amount for the deposit, could be useful if there are fees or conversions.
   * Optional.
   */
  expected_amount?: string // Using string for precise currency representation

  /**
   * Currency ID for the expected amount.
   * Optional.
   */
  currency_id?: string
}
