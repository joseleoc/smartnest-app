import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./IconItem.styles";
import useTheme from "@/hooks/useTheme";

type IconItemProps = {
  icon: string;
  onPress: () => void;
  children: React.ReactNode;
};

export default function IconItem(props: IconItemProps) {
  // --- Hooks -----------------------------------------------------------------
  const { spacing } = useTheme();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const { icon, onPress, children } = props;
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
    <Pressable
      style={[
        styles.iconItem,
        { gap: spacing.spacingSmall, padding: spacing.spacingSmall },
      ]}
      onPress={onPress}
    >
      <FontAwesome size={spacing.textExtraLarge} name={icon} color={"black"} />

      {children}
    </Pressable>
  );
}
