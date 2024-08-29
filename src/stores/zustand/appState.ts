import { StateCreator } from "zustand";

import { Language } from "@/types";

export interface AppStateSlice {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  isActionBottomSheetOpen: boolean;
  setActionBottomSheetOpen: (isActionBottomSheetOpen: boolean) => void;
  selectedLanguage: Language;
  setSelectedLanguage: (selectedLanguage: Language) => void;
}

export const createAppStateSlice: StateCreator<AppStateSlice> = (set) => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set({ isLoading }),
  isActionBottomSheetOpen: false,
  setActionBottomSheetOpen: (isActionBottomSheetOpen: boolean) =>
    set({ isActionBottomSheetOpen }),
  selectedLanguage: "en",
  setSelectedLanguage: (selectedLanguage: Language) => set({ selectedLanguage }),
});
