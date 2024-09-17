import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useTheme from "@/hooks/useTheme";
import View, { ViewProps } from "@/atoms/View";
import { styles } from "./SafeAreaView.styles";

function SafeAreaView(props: ViewProps, ref: any) {
  const { children } = props;
  // --- Hooks -----------------------------------------------------------------
  const insets = useSafeAreaInsets();
  // --- END: Hooks ------------------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const { style, lightColor, darkColor, focusable, ...otherProps } = props;
  const { colors, styling } = useTheme();
  // --- END: Data and handlers ------------------------------------------------

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: colors.background,
          maxWidth: styling.spacing.maxWidth,
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

const SafeAreaViewFR = React.forwardRef(SafeAreaView);

export default SafeAreaViewFR;
