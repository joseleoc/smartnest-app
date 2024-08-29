import { useTheme as useRNTheme } from "@react-navigation/native";
import { Theme } from "@/constants/theme";

export default function useTheme(): Theme {
  return useRNTheme() as any;
}
