import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { category } from "./category";
import { goal } from "./goal";
import { user } from "./user";

export const expenses = pgTable("expenses", {
  id: serial("id").primaryKey(),
  userId: integer().notNull(),
  amount: integer().notNull(),
  title: varchar({ length: 255 }).notNull().default(""),
  note: varchar({ length: 255 }).notNull().default(""),
  categoryId: integer(),
  goalId: integer(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});

export const expenseRelations = relations(expenses, ({ one }) => ({
  user: one(user, {
    fields: [expenses.userId],
    references: [user.id],
  }),
  category: one(category, {
    fields: [expenses.categoryId],
    references: [category.id],
  }),
  goal: one(goal, {
    fields: [expenses.goalId],
    references: [goal.id],
  }),
}));
