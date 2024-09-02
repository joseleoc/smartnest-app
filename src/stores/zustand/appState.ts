import { StateCreator } from "zustand";

import { Language } from "@/types";
import { TransactionViews } from "@/modules/Transactions/Transactions.constants";

export interface AppStateSlice {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;

  isActionBottomSheetOpen: boolean;
  setActionBottomSheetOpen: (isActionBottomSheetOpen: boolean) => void;

  selectedLanguage: Language;
  setSelectedLanguage: (selectedLanguage: Language) => void;

  transactionsView: TransactionViews;
  setTransactionsView: (transactionsView: TransactionViews) => void;
}

export const createAppStateSlice: StateCreator<AppStateSlice> = (set) => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set({ isLoading }),

  isActionBottomSheetOpen: false,
  setActionBottomSheetOpen: (isActionBottomSheetOpen: boolean) =>
    set({ isActionBottomSheetOpen }),

  selectedLanguage: "en",
  setSelectedLanguage: (selectedLanguage: Language) => set({ selectedLanguage }),

  transactionsView: TransactionViews.expenses,
  setTransactionsView: (transactionsView: TransactionViews) =>
    set({ transactionsView }),
});
