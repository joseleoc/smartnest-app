import { createCondominium } from "@/db/model/condominium";

import Text from "@/atoms/Text";
import Button from "@/atoms/Button";
import SafeAreaView from "@/atoms/SafeAreaView";
import FloatActionButton from "@/atoms/FloatActionButton";
import ActionsBottomSheet from "@/templates/ActionsBottomSheet";
import useTheme from "@/hooks/useTheme";

export default function Home() {
  // --- Hooks -----------------------------------------------------------------
  const { colors } = useTheme();
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
        <Text style={{ color: colors.primaryContrast }}>Home</Text>
      </Button>
      <FloatActionButton />
      <ActionsBottomSheet />
    </SafeAreaView>
  );
}
