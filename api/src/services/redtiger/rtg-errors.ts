/**
 * Custom error class for RGS (Remote Game Server) proxy errors
 * This error is thrown when there's an issue communicating with a game provider's API
 */
export class RgsProxyError extends Error {
  public statusCode: number
  public providerDetails?: Record<string, unknown>

  constructor(message: string, statusCode = 500, providerDetails?: Record<string, unknown>) {
    super(message)
    this.name = 'RgsProxyError'
    this.statusCode = statusCode
    this.providerDetails = providerDetails

    // Maintain proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RgsProxyError)
    }
  }

  /**
   * Convert the error to a plain object for JSON serialization
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode,
      ...(this.providerDetails && { providerDetails: this.providerDetails }),
    }
  }
}

/**
 * Type guard to check if an error is an RgsProxyError
 */
export function isRgsProxyError(error: unknown): error is RgsProxyError {
  return (
    error instanceof Error &&
    'name' in error &&
    error.name === 'RgsProxyError' &&
    'statusCode' in error
  )
}

/**
 * Type for error responses from game provider APIs
 */
export interface ProviderErrorResponse {
  error: string
  errorCode?: string | number
  message?: string
  details?: Record<string, unknown>
  statusCode?: number
}

/**
 * Standard error codes for game provider operations
 */
export enum ProviderErrorCode {
  // General errors (1000-1999)
  UNKNOWN_ERROR = 1000,
  INVALID_REQUEST = 1001,
  VALIDATION_ERROR = 1002,
  CONFIGURATION_ERROR = 1003,

  // Authentication & Authorization errors (2000-2999)
  AUTHENTICATION_FAILED = 2000,
  INVALID_CREDENTIALS = 2001,
  TOKEN_EXPIRED = 2002,
  INSUFFICIENT_PERMISSIONS = 2003,

  // Game-specific errors (3000-3999)
  GAME_NOT_FOUND = 3000,
  GAME_UNAVAILABLE = 3001,
  INSUFFICIENT_FUNDS = 3002,
  BET_LIMIT_EXCEEDED = 3003,

  // Session errors (4000-4999)
  SESSION_EXPIRED = 4000,
  SESSION_NOT_FOUND = 4001,

  // External service errors (5000-5999)
  EXTERNAL_SERVICE_ERROR = 5000,
  EXTERNAL_SERVICE_TIMEOUT = 5001,

  // Maintenance errors (6000-6999)
  MAINTENANCE_MODE = 6000,
  UPDATE_IN_PROGRESS = 6001,
}

/**
 * Creates a standardized error response object
 */
export function createErrorResponse(
  error: Error | string,
  code: ProviderErrorCode = ProviderErrorCode.UNKNOWN_ERROR,
  details?: Record<string, unknown>
): ProviderErrorResponse {
  const message = typeof error === 'string' ? error : error.message
  return {
    error: ProviderErrorCode[code] || 'UNKNOWN_ERROR',
    errorCode: code,
    message,
    ...(details && { details }),
  }
}
