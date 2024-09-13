import { Stack } from "expo-router/stack";
import "@/i18n";
import useDefaultLanguage from "@/hooks/language";
import GeneralContextProvider from "@/providers/generalContextProvider";

export default function RootLayout() {
  // --- Hooks -----------------------------------------------------------------
  useDefaultLanguage();

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
    <GeneralContextProvider>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    </GeneralContextProvider>
  );
}
