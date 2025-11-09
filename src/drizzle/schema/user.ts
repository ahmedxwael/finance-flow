import { Currencies } from "@/modules/user/data";
import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { allocation } from "./allocation";
import { category } from "./category";
import { expense } from "./expense";
import { goal } from "./goal";
import { income } from "./income";

export const user = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    role: varchar({ length: 50, enum: ["USER", "ADMIN"] }).default("USER"),
    image: varchar({ length: 500 }),
    provider: varchar({ length: 50 }).default("local"),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().defaultNow(),
    balance: integer().default(0),
    totalIncomes: integer().default(0),
    totalExpenses: integer().default(0),
    totalSavings: integer().default(0),
    currency: varchar({ length: 255 }).default(Currencies.POUND),
    newUser: boolean().default(true),
    emailVerified: boolean().default(false),
  },
  (table) => ({
    emailIdx: index("users_email_idx").on(table.email),
  })
);

export const userRelations = relations(user, ({ many }) => ({
  // accounts: many(account),
  incomes: many(income),
  expenses: many(expense),
  goals: many(goal),
  allocations: many(allocation),
  categories: many(category),
}));
