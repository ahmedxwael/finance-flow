import { URLS } from "@/shared/urls";
import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
  {
    label: "Dashboard",
    href: URLS.home,
  },
  {
    label: "Transactions",
    children: [
      {
        label: "Incomes",
        href: URLS.transactions.incomes,
      },
      {
        label: "Expenses",
        href: URLS.transactions.expenses,
      },
    ],
  },
  {
    label: "Allocations",
    href: URLS.allocations,
  },
  {
    label: "Goals",
    href: URLS.goals,
  },
];
