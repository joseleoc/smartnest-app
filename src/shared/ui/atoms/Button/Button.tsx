import React from "react";
import { useTheme } from "@react-navigation/native";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

import { ThemeProps } from "@/types";
import { styles } from "./Button.styles";

export type ButtonProps = PressableProps &
  ThemeProps & {
    style?: StyleProp<ViewStyle>;
    pressStyle?: ViewStyle;
    shadow?: boolean;
  };

export default function Button(props: ButtonProps) {
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
  const { style, pressStyle, children, shadow, ...otherProps } = props;
  // --- END: Data and handlers ------------------------------------------------

  return (
    <Pressable
      {...otherProps}
      style={({ pressed }) => [
        { backgroundColor: colors.primary },
        (shadow == null || shadow === true) && styles.buttonShadow,
        styles.button,
        pressed && styles.buttonPressed,
        pressed ? (pressStyle ?? style) : style,
      ]}
    >
      {children}
    </Pressable>
  );
}
