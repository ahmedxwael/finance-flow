import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema/user";
import type { SignUpData } from "@/modules/auth/types";
import { eq } from "drizzle-orm";
import type { User } from "../types";

/**
 * Get user
 * @param email
 * @returns
 */
export async function getUserService(email: string) {
  if (!email) {
    return {
      data: null,
      message: "Email is required",
      error: "Email is required",
    };
  }

  const user = await db.query.users.findFirst({
    where: eq(user.email, email),
  });

  if (!user) {
    return {
      data: null,
      message: "User not found",
      error: "User not found",
    };
  }

  return {
    data: user,
    message: "User found successfully",
    error: null,
  };
}

/**
 * Create user
 * @param user
 * @param account
 * @returns
 */
export async function createUserService(data: SignUpData) {
  if (!data.email || !data.password || !data.name) {
    return {
      data: null,
      error: "Email, password and name are required",
    };
  }

  const newUser = await db.insert(user).values(data).returning();

  return {
    data: newUser[0],
    error: null,
  };
}

/**
 * Update user
 * @param id
 * @param data
 * @returns
 */
export async function updateUserService({
  id,
  data,
}: {
  id: string;
  data: Partial<User>;
}) {
  try {
    const updatedUser = await db
      .update(user)
      .set({
        ...data,
        emailVerified: data.emailVerified ? true : false,
      })
      .where(eq(user.id, parseInt(id)))
      .returning();

    return {
      data: updatedUser[0],
      message: "User updated successfully!",
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      message: "User not found!",
      error: `Something went wrong: ${error}`,
    };
  }
}
