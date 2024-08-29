import Button from "@/atoms/Button";
import Text from "@/atoms/Text";
import SafeAreaView from "@/atoms/SafeAreaView";
import Picker from "@/atoms/Picker/Picker";

export default function Settings() {
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
      <Picker />
      <Button>
        <Text color="primaryContrast">Settings</Text>
      </Button>
    </SafeAreaView>
  );
}
