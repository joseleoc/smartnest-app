import { StateCreator } from "zustand";

import { Expense } from "@/types/expenses";

export interface ExpensesSlice {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
  resetExpenses: () => void;
}

export const createExpensesSlice: StateCreator<ExpensesSlice> = (set) => ({
  expenses: [],
  addExpense: (expense: Expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),
  removeExpense: (id: string) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
  resetExpenses: () => set({ expenses: [] }),
});
