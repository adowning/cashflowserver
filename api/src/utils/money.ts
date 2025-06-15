export function toCents(amount: number): number {
  return Math.round(amount * 100)
}

export function fromCents(amountInCents: number): number {
  return amountInCents / 100
}