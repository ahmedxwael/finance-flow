import { db } from "@/drizzle/db";
import { expense } from "@/drizzle/schema";
import { income } from "@/drizzle/schema/income";
import { user } from "@/drizzle/schema/user";
import { asyncHandler } from "@/shared/utils";
import { eq, sum } from "drizzle-orm";
import type { UserTotalsResponse } from "../types";

export const getUserTotalsService = asyncHandler<UserTotalsResponse>(
  async (userId: number) => {
    if (!userId) {
      return {
        data: null,
        message: "User ID is required",
        error: new Error("User ID is required"),
      };
    }

    const totals = await db
      .select({
        totalIncomes: sum(income.amount),
        totalExpenses: sum(expense.amount),
        balance: user.balance,
      })
      .from(user)
      .where(eq(user.id, userId));

    return {
      data: totals[0],
      message: "User totals fetched successfully",
      error: null,
    };
  }
);
