import Button from "@/atoms/Button";
import { styles } from "./FloatActionButton.styles";
import useTheme from "@/hooks/useTheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useStore } from "@/stores/zustand";

export default function FloatActionButton() {
  // --- Hooks -----------------------------------------------------------------
  const { spacing, colors } = useTheme();
  const { setActionBottomSheetOpen, isActionBottomSheetOpen } = useStore();
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
  const handleButtonPress = () => {
    setActionBottomSheetOpen(true);
  };
  // --- END: Data and handlers ------------------------------------------------

  return (
    <Button
      onPress={handleButtonPress}
      style={[
        styles.floatActionButton,
        { width: spacing.buttonMedium, height: spacing.buttonMedium },
      ]}
    >
      <AntDesign
        name="plus"
        size={spacing.textMedium}
        style={{
          color: colors.primaryContrast,
          width: spacing.textMedium,
          height: spacing.textMedium,
        }}
        color={colors.primaryContrast}
      />
    </Button>
  );
}
