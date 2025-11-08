import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { expenses } from "./expense";
import { income } from "./income";
import { user } from "./user";

export const goal = pgTable("goals", {
  id: serial("id").primaryKey(),
  userId: integer().notNull(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  targetAmount: integer().notNull(),
  currentAmount: integer().notNull(),
  percentage: integer().notNull().default(0).$type<number>(),
  isCompleted: boolean().notNull().default(false),
  dueDate: timestamp().notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});

export const goalRelations = relations(goal, ({ one, many }) => {
  return {
    user: one(user, {
      fields: [goal.userId],
      references: [user.id],
    }),
    incomes: many(income),
    expenses: many(expenses),
  };
});
