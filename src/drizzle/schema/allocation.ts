import { relations } from "drizzle-orm";
import { integer, pgTable, serial, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";

export const allocation = pgTable("allocations", {
  id: serial("id").primaryKey(),
  userId: integer().notNull(),
  amount: integer().notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});

export const allocationRelations = relations(allocation, ({ one }) => ({
  user: one(user, {
    fields: [allocation.userId],
    references: [user.id],
  }),
}));
