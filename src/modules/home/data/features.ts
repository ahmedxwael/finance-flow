import { BarChart3, Goal, PiggyBank, Wallet } from "@/design-system/icons";
import type { Feature } from "../types";

export const features: Feature[] = [
  {
    icon: BarChart3,
    title: "Dashboard",
    description:
      "Get a comprehensive overview of your financial health with interactive charts and insights.",
  },
  {
    icon: Wallet,
    title: "Track Transactions",
    description:
      "Easily record and categorize your incomes and expenses to understand your cash flow.",
  },
  {
    icon: PiggyBank,
    title: "Smart Allocations",
    description:
      "Organize your finances by allocating funds to different categories and budgets.",
  },
  {
    icon: Goal,
    title: "Financial Goals",
    description:
      "Set and track your financial goals, whether it's saving for a vacation or paying off debt.",
  },
];
