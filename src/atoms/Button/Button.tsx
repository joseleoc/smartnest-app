import React from "react";
import { useTheme } from "@react-navigation/native";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

import { ThemeProps } from "@/types";
import { styles } from "./Button.styles";

type ButtonProps = PressableProps &
  ThemeProps & { style?: StyleProp<ViewStyle>; pressStyle?: ViewStyle };

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
  const { style, pressStyle, children } = props;
  // --- END: Data and handlers ------------------------------------------------

  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => [
        { backgroundColor: colors.primary },
        styles.buttonShadow,
        styles.button,
        pressed ? (pressStyle ?? style) : style,
      ]}
    >
      {children}
    </Pressable>
  );
}
