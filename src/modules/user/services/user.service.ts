import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema/user";
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
export async function createUserService({ user }: { user: User }) {
  if (!user) {
    return {
      data: null,
      message: "User is required",
      error: "User is required",
    };
  }

  const newUser = await db
    .insert(user)
    .values({
      email: user.email!,
      name: user.name!,
      image: user.image || `https://ui-avatars.com/api/?name=${user.name}`,
    })
    .returning({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      balance: user.balance,
      currency: user.currency,
      newUser: user.newUser,
      incomesCount: user.incomesCount,
      expensesCount: user.expensesCount,
      emailVerified: user.emailVerified,
      image: user.image,
    });

  return {
    data: newUser[0],
    message: "User created successfully!",
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
