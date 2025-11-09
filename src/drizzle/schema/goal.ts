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
import { expense } from "./expense";
import { income } from "./income";
import { user } from "./user";

export const goal = pgTable(
  "goals",
  {
    id: serial("id").primaryKey(),
    userId: integer("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    title: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }).notNull(),
    targetAmount: integer().notNull(),
    currentAmount: integer().notNull().default(0),
    percentage: integer().notNull().default(0).$type<number>(),
    isCompleted: boolean().notNull().default(false),
    startDate: timestamp("startDate").notNull().defaultNow(),
    dueDate: timestamp("dueDate").notNull(),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().defaultNow(),
  },
  (table) => ({
    userIdIdx: index("goals_userId_idx").on(table.userId),
    isCompletedIdx: index("goals_isCompleted_idx").on(table.isCompleted),
    dueDateIdx: index("goals_dueDate_idx").on(table.dueDate),
  })
);

export const goalRelations = relations(goal, ({ one, many }) => {
  return {
    user: one(user, {
      fields: [goal.userId],
      references: [user.id],
    }),
    incomes: many(income),
    expenses: many(expense),
  };
});
