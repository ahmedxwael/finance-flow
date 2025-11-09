import { relations } from "drizzle-orm";
import {
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

export const category = pgTable(
  "categories",
  {
    id: serial("id").primaryKey(),
    userId: integer("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    name: varchar({ length: 255 }).notNull(),
    type: varchar({ length: 255, enum: ["INCOME", "EXPENSE"] }).notNull(),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().defaultNow(),
  },
  (table) => ({
    userIdIdx: index("categories_userId_idx").on(table.userId),
    typeIdx: index("categories_type_idx").on(table.type),
  })
);

export const categoryRelations = relations(category, ({ many, one }) => ({
  incomes: many(income),
  expenses: many(expense),
  user: one(user, {
    fields: [category.userId],
    references: [user.id],
  }),
}));
