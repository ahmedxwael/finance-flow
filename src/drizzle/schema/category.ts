import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { expenses } from "./expense";
import { income } from "./income";
import { user } from "./user";

export const category = pgTable("categories", {
  id: serial("id").primaryKey(),
  userId: integer().notNull(),
  name: varchar({ length: 255 }).notNull(),
  type: varchar({ length: 255, enum: ["INCOME", "EXPENSE"] }).notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});

export const categoryRelations = relations(category, ({ many, one }) => ({
  incomes: many(income),
  expenses: many(expenses),
  user: one(user, {
    fields: [category.userId],
    references: [user.id],
  }),
}));
