import {
  DefaultTheme,
  DarkTheme as DefaultDarkTheme,
} from "@react-navigation/native";

export type Theme = typeof DarkTheme;
const styling = {
  input: {
    medium: 48,
  },
  button: {
    medium: 48,
    large: 56,
    small: 24,
  },
  text: {
    regular: 16,
    small: 14,
    extraSmall: 12,
    medium: 18,
    large: 24,
    extraLarge: 32,
  },

  spacing: {
    maxWidth: 800,
    extraSmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
  }
  , radius: {
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
    full: 100,
  },
}

export const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: "#ecf0f5",
    primaryContrast: "#000000",
    secondary: "#ffc708",
    secondaryContrast: "#000000",
    tertiary: "#64b8e7",
    tertiaryContrast: "#000000",
    background: "#062720",
    backgroundContrast: "#ffffff",
    text: "#ffffff",
    success: "#2dd55b",
    successContrast: "#000000",
    danger: "#c5000f",
    dangerContrast: "#ffffff",
    warning: "#ffc409",
    warningContrast: "#000000",
    muted: "#e0e0e0",
    mutedContrast: "#000000",
    white: "#ffffff",
    black: "#000000",
  },
  styling
};

export const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#237050",
    primaryContrast: "#ffffff",
    secondary: "#e7d39e",
    secondaryContrast: "#000000",
    tertiary: "#2e3033",
    tertiaryContrast: "#ffffff",
    background: "#fafafa",
    backgroundContrast: "#000000",
    text: "#000000",
    success: "#2dd55b",
    successContrast: "#000000",
    danger: "#c5000f",
    dangerContrast: "#ffffff",
    warning: "#ffc409",
    warningContrast: "#000000",
    muted: "#6f7c80",
    mutedContrast: "#000000",
    white: "#ffffff",
    black: "#000000",
  },
  styling
};
