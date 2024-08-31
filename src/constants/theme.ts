import {
  DefaultTheme,
  DarkTheme as DefaultDarkTheme,
} from "@react-navigation/native";

export type Theme = typeof DarkTheme;

const spacing = {
  maxWidth: 800,
  textRegular: 16,
  textSmall: 14,
  textExtraSmall: 12,
  textMedium: 18,
  textLarge: 24,
  textExtraLarge: 32,
  buttonMedium: 48,
  buttonLarge: 56,
  buttonSmall: 24,
  spacingExtraSmall: 4,
  spacingSmall: 8,
  spacingMedium: 16,
  spacingLarge: 24,
  spacingExtraLarge: 32,
};

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
  },
  spacing,
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
    muted: "#e0e0e0",
    mutedContrast: "#000000",
  },
  spacing,
};
