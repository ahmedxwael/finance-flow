export type CategoryType = "INCOME" | "EXPENSE";

export interface DefaultCategory {
  name: string;
  type: CategoryType;
}

export const DEFAULT_INCOME_CATEGORIES: DefaultCategory[] = [
  { name: "Salary", type: "INCOME" },
  { name: "Freelance", type: "INCOME" },
  { name: "Investment", type: "INCOME" },
  { name: "Business", type: "INCOME" },
  { name: "Rental Income", type: "INCOME" },
  { name: "Dividends", type: "INCOME" },
  { name: "Interest", type: "INCOME" },
  { name: "Gift", type: "INCOME" },
  { name: "Bonus", type: "INCOME" },
  { name: "Other Income", type: "INCOME" },
];

export const DEFAULT_EXPENSE_CATEGORIES: DefaultCategory[] = [
  { name: "Food & Dining", type: "EXPENSE" },
  { name: "Shopping", type: "EXPENSE" },
  { name: "Transportation", type: "EXPENSE" },
  { name: "Bills & Utilities", type: "EXPENSE" },
  { name: "Entertainment", type: "EXPENSE" },
  { name: "Healthcare", type: "EXPENSE" },
  { name: "Education", type: "EXPENSE" },
  { name: "Travel", type: "EXPENSE" },
  { name: "Personal Care", type: "EXPENSE" },
  { name: "Home & Garden", type: "EXPENSE" },
  { name: "Insurance", type: "EXPENSE" },
  { name: "Subscriptions", type: "EXPENSE" },
  { name: "Gifts & Donations", type: "EXPENSE" },
  { name: "Taxes", type: "EXPENSE" },
  { name: "Other Expense", type: "EXPENSE" },
];

export const DEFAULT_CATEGORIES: DefaultCategory[] = [
  ...DEFAULT_INCOME_CATEGORIES,
  ...DEFAULT_EXPENSE_CATEGORIES,
];

