/**
 * Example: How to auto-update percentage when creating or updating goals
 * 
 * This file shows how to use the calculateGoalPercentage utility function
 * to automatically calculate and update the percentage field.
 */

import { calculateGoalPercentage } from "./calculate-percentage";

// Example: When creating a goal
export function createGoalExample(goalData: {
  userId: number;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  dueDate: Date;
}) {
  // Auto-calculate percentage
  const percentage = calculateGoalPercentage(
    goalData.currentAmount,
    goalData.targetAmount
  );

  // Include percentage in the data to be saved
  return {
    ...goalData,
    percentage,
    isCompleted: percentage >= 100,
  };
}

// Example: When updating a goal
export function updateGoalExample(
  currentAmount: number,
  targetAmount: number
) {
  // Auto-calculate percentage
  const percentage = calculateGoalPercentage(currentAmount, targetAmount);

  // Return the update data
  return {
    currentAmount,
    percentage,
    isCompleted: percentage >= 100,
    updatedAt: new Date(),
  };
}

/**
 * Usage in a service:
 * 
 * import { calculateGoalPercentage } from "@/modules/goals/utils";
 * import { db } from "@/drizzle/db";
 * import { goal } from "@/drizzle/schema";
 * import { eq } from "drizzle-orm";
 * 
 * // When creating:
 * const percentage = calculateGoalPercentage(currentAmount, targetAmount);
 * await db.insert(goal).values({
 *   ...goalData,
 *   percentage,
 *   isCompleted: percentage >= 100,
 * });
 * 
 * // When updating:
 * const percentage = calculateGoalPercentage(newCurrentAmount, targetAmount);
 * await db
 *   .update(goal)
 *   .set({
 *     currentAmount: newCurrentAmount,
 *     percentage,
 *     isCompleted: percentage >= 100,
 *     updatedAt: new Date(),
 *   })
 *   .where(eq(goal.id, goalId));
 */

