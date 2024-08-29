import useTheme from "@/hooks/useTheme";
import { ThemeProps } from "@/types";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { Theme } from "@/constants/theme";

export type TextProps = RNTextProps &
  ThemeProps & { color?: keyof Theme["colors"] };

export default function Text(props: TextProps) {
  // --- Hooks -----------------------------------------------------------------
  const {
    colors: { text },
  } = useTheme();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const { style, lightColor, darkColor, children, color, ...otherProps } =
    props;

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
    <RNText style={[{ color: color ?? text }, style]} {...otherProps}>
      {children}
    </RNText>
  );
}
