import type { Currency } from "@/modules/transactions/types";
import type { AsNumber } from "@/shared/types";

export type UserTotalsResponse = {
  data: {
    totalIncomes: AsNumber | null;
    totalExpenses: AsNumber | null;
    balance: AsNumber;
  } | null;
  error: string | null;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  image: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
  balance: number;
  totalIncomes: number;
  totalExpenses: number;
  totalSavings: number;
  currency: Currency;
  newUser: boolean;
  emailVerified: boolean;
};

export type Role = "USER" | "ADMIN";
