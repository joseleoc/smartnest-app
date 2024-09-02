import Button from "@/atoms/Button";
import Text from "@/atoms/Text";
import SafeAreaView from "@/atoms/SafeAreaView";
import LanguagePicker from "@/molecules/LanguagePicker";
import { styles } from "./Settings.styles";
import useTheme from "@/hooks/useTheme";

export default function Settings() {
  // --- Hooks -----------------------------------------------------------------
  const { styling } = useTheme();
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
    <SafeAreaView style={[styles.container, { gap: styling.spacing.medium }]}>
      <LanguagePicker />
      <Button>
        <Text colorName="primaryContrast">Settings</Text>
      </Button>
    </SafeAreaView>
  );
}
