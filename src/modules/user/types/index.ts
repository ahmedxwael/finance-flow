export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  balance: number;
  currency: Currency;
  newUser: boolean;
  incomesCount: number;
  expensesCount: number;
  records?: Record<string, unknown>[];
  categories?: Record<string, unknown>[];
  provider: string;
  emailVerified: Date;
  isVerified: boolean;
  image: string;
};

export type Role = "USER" | "ADMIN";

export type Currency = "USD" | "POUND";

export type UserSession = {
  user: User;
  expires: string;
} | null;
