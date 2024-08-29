import { StateCreator } from "zustand";

export interface AppStateSlice {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  isActionBottomSheetOpen: boolean;
  setActionBottomSheetOpen: (isActionBottomSheetOpen: boolean) => void;
}

export const createAppStateSlice: StateCreator<AppStateSlice> = (set) => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set({ isLoading }),
  isActionBottomSheetOpen: false,
  setActionBottomSheetOpen: (isActionBottomSheetOpen: boolean) =>
    set({ isActionBottomSheetOpen }),
});
