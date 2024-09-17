import AntDesign from "@expo/vector-icons/AntDesign";

import useTheme from "@/hooks/useTheme";
import { useStore } from "@/stores/zustand";

import Button from "@/atoms/Button";

import { styles } from "./FloatActionButton.styles";

export default function FloatActionButton() {
  // --- Hooks -----------------------------------------------------------------
  const { styling, colors } = useTheme();
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
        {
          width: styling.button.medium,
          height: styling.button.medium,
          bottom: styling.spacing.large,
          right: styling.spacing.large,
        },
      ]}
      testID="floatActionButton"
      role="button"
    >
      <AntDesign
        name="plus"
        size={styling.text.medium}
        style={{
          color: colors.primaryContrast,
          width: styling.text.medium,
          height: styling.text.medium,
        }}
        color={colors.primaryContrast}
      />
    </Button>
  );
}
