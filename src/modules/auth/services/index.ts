import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";
import { createUserService } from "@/modules/user/services/user.service";
import { asyncHandler } from "@/shared/utils";
import bcrypt from "bcryptjs";
import { and, eq } from "drizzle-orm";
import type { SignInData, SignUpData } from "../types";

export const signInService = asyncHandler(async (data: SignInData) => {
  if (!data.email || !data.password) {
    return {
      data: null,
      error: "Email and password are required",
    };
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const storedUser = await db.query.user.findFirst({
    where: and(eq(user.email, data.email), eq(user.password, hashedPassword)),
  });

  if (!storedUser) {
    return {
      data: null,
      error: "User not found",
    };
  }

  return {
    data: storedUser,
    error: null,
  };
});

export const signUpService = asyncHandler(async (data: SignUpData) => {
  if (!data.email || !data.password) {
    return {
      data: null,
      error: "Email and password are required",
    };
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const existingUser = await db.query.user.findFirst({
    where: eq(user.email, data.email),
  });

  if (existingUser) {
    return {
      data: null,
      error: "User already exists",
    };
  }

  const newUser = await createUserService({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    confirmPassword: data.confirmPassword,
  });

  return newUser;
});
