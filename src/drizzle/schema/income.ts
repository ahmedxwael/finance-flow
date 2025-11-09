import { relations } from "drizzle-orm";
import {
  index,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { category } from "./category";
import { goal } from "./goal";
import { user } from "./user";

export const income = pgTable(
  "incomes",
  {
    id: serial("id").primaryKey(),
    userId: integer("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    // accountId: integer("accountId").references(() => account.id, {
    //   onDelete: "set null",
    // }),
    amount: integer().notNull(),
    title: varchar({ length: 255 }).notNull(),
    note: varchar({ length: 255 }).notNull(),
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
    userIdIdx: index("incomes_userId_idx").on(table.userId),
    // accountIdIdx: index("incomes_accountId_idx").on(table.accountId),
    categoryIdIdx: index("incomes_categoryId_idx").on(table.categoryId),
    goalIdIdx: index("incomes_goalId_idx").on(table.goalId),
    transactionDateIdx: index("incomes_transactionDate_idx").on(
      table.transactionDate
    ),
  })
);

export const incomeRelations = relations(income, ({ one }) => ({
  user: one(user, {
    fields: [income.userId],
    references: [user.id],
  }),
  // account: one(account, {
  //   fields: [income.accountId],
  //   references: [account.id],
  // }),
  category: one(category, {
    fields: [income.categoryId],
    references: [category.id],
  }),
  goal: one(goal, {
    fields: [income.goalId],
    references: [goal.id],
  }),
}));
