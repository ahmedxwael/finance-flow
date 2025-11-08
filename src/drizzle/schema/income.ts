import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { category } from "./category";
import { user } from "./user";

export const income = pgTable("incomes", {
  id: serial("id").primaryKey(),
  userId: integer().notNull(),
  amount: integer().notNull(),
  title: varchar({ length: 255 }).notNull(),
  note: varchar({ length: 255 }).notNull(),
  categoryId: integer(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});

export const incomeRelations = relations(income, ({ one }) => ({
  user: one(user, {
    fields: [income.userId],
    references: [user.id],
  }),
  category: one(category, {
    fields: [income.categoryId],
    references: [category.id],
  }),
}));
