import { create } from "zustand";
import { createExpensesSlice, ExpensesSlice } from "./expenses";
import { AppStateSlice, createAppStateSlice } from "./appState";

const useBoundStore = create<AppStateSlice & ExpensesSlice>()((...a) => ({
  ...createAppStateSlice(...a),
  ...createExpensesSlice(...a),
}));

export { useBoundStore as useStore };
