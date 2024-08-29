import React from "react";
import { View as RNView, ViewProps as RNViewProps } from "react-native";

import useTheme from "@/hooks/useTheme";

import { ThemeProps } from "@/types";

export type ViewProps = RNViewProps & ThemeProps;

export default function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const {
    colors: { background },
  } = useTheme();

  return (
    <RNView
      style={[{ backgroundColor: background }, style]}
      {...otherProps}
    ></RNView>
  );
}
