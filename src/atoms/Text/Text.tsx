import useTheme from "@/hooks/useTheme";
import { ThemeProps } from "@/types";
import {
  Text as RNText,
  TextProps as RNTextProps,
  useColorScheme,
} from "react-native";
import { Theme } from "@/constants/theme";
import { useEffect, useState } from "react";

export type TextProps = RNTextProps &
  ThemeProps & { colorName?: keyof Theme["colors"] };

export default function Text(props: TextProps) {
  // --- Hooks -----------------------------------------------------------------
  const { colors } = useTheme();
  const colorScheme = useColorScheme();
  const [colorText, setColorText] = useState(colors.text);
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
  useEffect(() => {
    if (colorName != null) {
      setColorText(colors[colorName]);
    }
  }, [colorScheme, colorName]);
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  // --- END: Data and handlers ------------------------------------------------

  return (
    <RNText style={[{ color: colorText }, style]} {...otherProps}>
      {children}
    </RNText>
  );
}
