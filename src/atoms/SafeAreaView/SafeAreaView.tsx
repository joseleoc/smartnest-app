import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useTheme from "@/hooks/useTheme";
import View, { ViewProps } from "@/atoms/View";
import { styles } from "./SafeAreaView.styles";

export default function SafeAreaView(props: ViewProps) {
  const { children } = props;
  // --- Hooks -----------------------------------------------------------------
  const insets = useSafeAreaInsets();
  // --- END: Hooks ------------------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const { style, lightColor, darkColor, ...otherProps } = props;
  const { colors, spacing } = useTheme();
  // --- END: Data and handlers ------------------------------------------------

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: colors.background,
          maxWidth: spacing.maxWidth,
        },
        styles.safeAreaView,
        style,
      ]}
      {...otherProps}
    >
      {children}
    </View>
  );
}
