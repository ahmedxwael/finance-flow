import { Currencies } from "@/modules/user/data";
import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { allocation } from "./allocation";
import { category } from "./category";
import { expenses } from "./expense";
import { goal } from "./goal";
import { income } from "./income";

export const user = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
  balance: integer().notNull().default(0),
  currency: varchar({ length: 255 }).notNull().default(Currencies.POUND),
  newUser: boolean().notNull().default(true),
  emailVerified: boolean().notNull().default(false),
});

export const userRelations = relations(user, ({ many }) => ({
  incomes: many(income),
  expenses: many(expenses),
  goals: many(goal),
  allocations: many(allocation),
  categories: many(category),
}));
