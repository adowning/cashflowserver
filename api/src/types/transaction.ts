// Common transaction types and interfaces
export interface DepositProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  bonusSpins: number;
  bonusAmount?: number;
  amountToReceiveInCredits?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  type: TransactionType;
  status: TransactionStatus;
  referenceId?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  BET = 'BET',
  WIN = 'WIN',
  BONUS = 'BONUS',
  REFUND = 'REFUND',
  REVERSAL = 'REVERSAL',
  ADJUSTMENT = 'ADJUSTMENT'
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
  REVERSED = 'REVERSED'
}

// Transaction filters for querying
export interface TransactionFilters {
  userId?: string;
  type?: TransactionType;
  status?: TransactionStatus;
  startDate?: Date;
  endDate?: Date;
  minAmount?: number;
  maxAmount?: number;
  referenceId?: string;
}

// Transaction creation DTO
export interface CreateTransactionDto {
  userId: string;
  amount: number;
  currency: string;
  type: TransactionType;
  status?: TransactionStatus;
  referenceId?: string;
  metadata?: Record<string, any>;
}

// Transaction update DTO
export interface UpdateTransactionDto {
  status?: TransactionStatus;
  metadata?: Record<string, any>;
}
