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
import { user } from "./user";

export const allocation = pgTable(
  "allocations",
  {
    id: serial("id").primaryKey(),
    userId: integer("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    categoryId: integer("categoryId").references(() => category.id, {
      onDelete: "set null",
    }),
    name: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 500 }),
    amount: integer().notNull(),
    period: varchar({
      length: 50,
      enum: ["MONTHLY", "YEARLY", "WEEKLY", "DAILY"],
    })
      .notNull()
      .default("MONTHLY"),
    startDate: timestamp("startDate").notNull().defaultNow(),
    endDate: timestamp("endDate"),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().defaultNow(),
  },
  (table) => ({
    userIdIdx: index("allocations_userId_idx").on(table.userId),
    categoryIdIdx: index("allocations_categoryId_idx").on(table.categoryId),
    periodIdx: index("allocations_period_idx").on(table.period),
  })
);

export const allocationRelations = relations(allocation, ({ one }) => ({
  user: one(user, {
    fields: [allocation.userId],
    references: [user.id],
  }),
  category: one(category, {
    fields: [allocation.categoryId],
    references: [category.id],
  }),
}));
