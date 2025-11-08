import { relations } from "drizzle-orm";
import {
  index,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { account } from "./account";
import { category } from "./category";
import { goal } from "./goal";
import { user } from "./user";

export const expenses = pgTable(
  "expenses",
  {
    id: serial("id").primaryKey(),
    userId: integer("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accountId: integer("accountId").references(() => account.id, {
      onDelete: "set null",
    }),
    amount: integer().notNull(),
    title: varchar({ length: 255 }).notNull().default(""),
    note: varchar({ length: 255 }).notNull().default(""),
    categoryId: integer("categoryId").references(() => category.id, {
      onDelete: "set null",
    }),
    goalId: integer("goalId").references(() => goal.id, {
      onDelete: "set null",
    }),
    transactionDate: timestamp("transactionDate").notNull().defaultNow(),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().defaultNow(),
  },
  (table) => ({
    userIdIdx: index("expenses_userId_idx").on(table.userId),
    accountIdIdx: index("expenses_accountId_idx").on(table.accountId),
    categoryIdIdx: index("expenses_categoryId_idx").on(table.categoryId),
    goalIdIdx: index("expenses_goalId_idx").on(table.goalId),
    transactionDateIdx: index("expenses_transactionDate_idx").on(
      table.transactionDate
    ),
  })
);

export const expenseRelations = relations(expenses, ({ one }) => ({
  user: one(user, {
    fields: [expenses.userId],
    references: [user.id],
  }),
  account: one(account, {
    fields: [expenses.accountId],
    references: [account.id],
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
