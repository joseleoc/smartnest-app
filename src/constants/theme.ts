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
    primary: "#428cff",
    primaryContrast: "#ffffff",
    secondary: "#50c8ff",
    secondaryContrast: "#ffffff",
    tertiary: "#6a64ff",
    tertiaryContrast: "#000000",
    background: "#131313",
    backgroundContrast: "#ffffff",
    text: "#ffffff",
    success: "#2dd55b",
    successContrast: "#000000",
    danger: "#ff4961",
    dangerContrast: "#ffffff",
    warning: "#ffd534",
    warningContrast: "#000000",
    muted: "#e0e0e0",
    mutedContrast: "#000000",
    light: "#222428",
    lightContrast: "#ffffff",
    medium: "#989aa2",
    mediumContrast: "#000000",
    dark: "#f4f5f8",
    darkContrast: "#000000",
  },
  styling
};

export const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0054e9",
    primaryContrast: "#ffffff",
    secondary: "#0163aa",
    secondaryContrast: "#ffffff",
    tertiary: "#6030ff",
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
    light: "#f6f8fc",
    lightContrast: "#000000",
    medium: "#5f5f5f",
    mediumContrast: "#ffffff",
    dark: "#2f2f2f",
    darkContrast: "#ffffff",
  },
  styling
};
