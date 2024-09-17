import { Text as RNText, TextProps as RNTextProps } from "react-native";

import useTheme from "@/hooks/useTheme";
import { Theme } from "@/constants/theme";

import { ThemeProps } from "@/types";

export type TextProps = RNTextProps &
  ThemeProps & { colorName?: keyof Theme["colors"] };

export default function Text(props: TextProps) {
  // --- Hooks -----------------------------------------------------------------
  const { colors } = useTheme();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const { style, lightColor, darkColor, children, colorName, ...otherProps } =
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
    <RNText style={[{ color: colors.text }, style]} {...otherProps}>
      {children}
    </RNText>
  );
}
