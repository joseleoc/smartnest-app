import {
  DefaultTheme,
  DarkTheme as DefaultDarkTheme,
} from "@react-navigation/native";

export type Theme = typeof DarkTheme;

export const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: "#FAE6E9",
    secondary: "#F18789",
    tertiary: "#F1A662",
    background: "#0568FD",
  },
};

export const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#227050",
    secondary: "#E6D39E",
    tertiary: "#2F3033",
    background: "#FAFAFA",
  },
};
