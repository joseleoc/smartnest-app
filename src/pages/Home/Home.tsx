import Button from "@/atoms/Button";
import FloatActionButton from "@/atoms/FloatActionButton";
import SafeAreaView from "@/atoms/SafeAreaView";
import ActionsBottomSheet from "@/templates/ActionsBottomSheet";
import { Text } from "react-native";

export default function Home() {
  // --- Hooks -----------------------------------------------------------------
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
    <SafeAreaView>
      <Button>
        <Text>Home</Text>
      </Button>
      <FloatActionButton />
      <ActionsBottomSheet />
    </SafeAreaView>
  );
}
