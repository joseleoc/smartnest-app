import { Stack } from "expo-router/stack";
import "@/i18n";
import useDefaultLanguage from "@/hooks/language";
import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme } from "@/constants/theme";

export default function RootLayout() {
  // --- Hooks -----------------------------------------------------------------
  useDefaultLanguage();
  const colorScheme = useColorScheme();

  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  // --- END: Data and handlers ------------------------------------------------

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : LightTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
