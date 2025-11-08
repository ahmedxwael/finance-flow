/**
 * Calculates the percentage of goal completion
 * @param currentAmount - Current amount saved/achieved
 * @param targetAmount - Target amount to reach
 * @returns Percentage rounded to nearest integer (0-100)
 */
export function calculateGoalPercentage(
  currentAmount: number,
  targetAmount: number
): number {
  if (targetAmount === 0) return 0;
  return Math.round((currentAmount / targetAmount) * 100);
}
