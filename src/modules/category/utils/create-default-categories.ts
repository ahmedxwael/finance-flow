import { db } from "@/drizzle/db";
import { category } from "@/drizzle/schema";
import { DEFAULT_CATEGORIES } from "../data";

/**
 * Creates default categories for a new user
 * @param userId - The user ID to create categories for
 * @returns Array of created category IDs
 */
export async function createDefaultCategories(userId: number) {
  const categoriesToInsert = DEFAULT_CATEGORIES.map((cat) => ({
    userId,
    name: cat.name,
    type: cat.type,
  }));

  const createdCategories = await db
    .insert(category)
    .values(categoriesToInsert)
    .returning({ id: category.id });

  return createdCategories;
}

