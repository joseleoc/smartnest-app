import { Tabs } from "expo-router";
import useTheme from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  // --- Hooks -----------------------------------------------------------------
  const { colors } = useTheme();
  const { t } = useTranslation();
  // --- END: Hooks ------------------------------------------------------------

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t("HOME.TITLE"),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t("SETTINGS.TITLE"),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
