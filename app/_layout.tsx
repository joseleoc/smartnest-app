import { Stack } from "expo-router/stack";
import "@/i18n";
import useDefaultLanguage from "@/hooks/language";
import GeneralContextProvider from "@/providers/generalContextProvider";
import { useEffect } from "react";
import { useRouter } from "expo-router";

// retrieves only the current value of 'user' from 'useAuthenticator'

export default function RootLayout() {
  // --- Hooks -----------------------------------------------------------------
  useDefaultLanguage();
  const { replace } = useRouter();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    replace("(drawer)");
  }, []);

  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  // --- END: Data and handlers ------------------------------------------------
  return (
    <GeneralContextProvider>
      <Stack initialRouteName="(drawer)">
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(transactions)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(condominiumConfig)/index"
          options={{ headerShown: false }}
        />
      </Stack>
    </GeneralContextProvider>
  );
}
