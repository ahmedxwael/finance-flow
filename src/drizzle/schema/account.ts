// import { relations } from "drizzle-orm";
// import {
//   boolean,
//   index,
//   integer,
//   pgTable,
//   serial,
//   timestamp,
//   varchar,
// } from "drizzle-orm/pg-core";
// import { expense } from "./expense";
// import { income } from "./income";
// import { user } from "./user";

// export const account = pgTable(
//   "accounts",
//   {
//     id: serial("id").primaryKey(),
//     userId: integer("userId")
//       .notNull()
//       .references(() => user.id, { onDelete: "cascade" }),
//     name: varchar({ length: 255 }).notNull(),
//     type: varchar({
//       length: 50,
//       enum: [
//         "CARD",
//         "WALLET",
//         "BANK",
//         "SAVINGS",
//         "INVESTMENT",
//         "CREDIT_CARD",
//         "DEBIT_CARD",
//         "CHECKING",
//         "OTHER",
//       ],
//     })
//       .notNull()
//       .default("BANK"),
//     balance: integer().notNull().default(0),
//     currency: varchar({ length: 10 }).notNull().default("POUND"),
//     description: varchar({ length: 500 }),
//     color: varchar({ length: 7 }), // Hex color for UI
//     icon: varchar({ length: 50 }), // Icon name for UI
//     isActive: boolean().notNull().default(true),
//     isPrimary: boolean().notNull().default(false),
//     createdAt: timestamp().notNull().defaultNow(),
//     updatedAt: timestamp().notNull().defaultNow(),
//   },
//   (table) => ({
//     userIdIdx: index("accounts_userId_idx").on(table.userId),
//     typeIdx: index("accounts_type_idx").on(table.type),
//     isActiveIdx: index("accounts_isActive_idx").on(table.isActive),
//     isPrimaryIdx: index("accounts_isPrimary_idx").on(table.isPrimary),
//   })
// );

// export const accountRelations = relations(account, ({ one, many }) => ({
//   user: one(user, {
//     fields: [account.userId],
//     references: [user.id],
//   }),
//   incomes: many(income),
//   expenses: many(expense),
// }));
