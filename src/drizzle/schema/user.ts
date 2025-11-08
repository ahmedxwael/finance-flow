import { Currencies } from "@/modules/user/data";
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
import { account } from "./account";
import { allocation } from "./allocation";
import { category } from "./category";
import { expenses } from "./expense";
import { goal } from "./goal";
import { income } from "./income";

export const user = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }),
    role: varchar({ length: 50, enum: ["USER", "ADMIN"] })
      .notNull()
      .default("USER"),
    image: varchar({ length: 500 }),
    provider: varchar({ length: 50 }).default("local"),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
    balance: integer().notNull().default(0),
    currency: varchar({ length: 255 }).notNull().default(Currencies.POUND),
    newUser: boolean().notNull().default(true),
    emailVerified: boolean().notNull().default(false),
  },
  (table) => ({
    emailIdx: index("users_email_idx").on(table.email),
  })
);

export const userRelations = relations(user, ({ many }) => ({
  accounts: many(account),
  incomes: many(income),
  expenses: many(expenses),
  goals: many(goal),
  allocations: many(allocation),
  categories: many(category),
}));
