import { Amplify } from "aws-amplify";
import amplifyconfig from "../../src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);
import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme } from "@/constants/theme";

export default function GeneralContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
}
