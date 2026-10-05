export function calcBarWidth(value: number, dailyLimit: number): number {
  if (dailyLimit <= 0) return 0
  return Math.min((value / dailyLimit) * 100, 100)
}
