import { useState } from "react";
import { useRouter } from "expo-router";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import DrawerItem from "./components/DrawerItem";
import CondominiumAvatar from "./components/CondominiumAvatar";

import { styles } from "./CustomDrawerContent.styles";
import View from "@/atoms/View";
import SignOutButton from "@/atoms/SignOutButton";
import useTheme from "@/hooks/useTheme";

export default function CustomDrawerContent() {
  // --- Hooks -----------------------------------------------------------------
  const { push } = useRouter();
  const {
    styling: { spacing },
  } = useTheme();
  // --- END: Hooks ------------------------------------------------------------
  // --- Local state -----------------------------------------------------------
  const [items, setItems] = useState<any[]>([
    {
      label: "Home",
      onPress: () => {
        push("(drawer)/(tabs)");
      },
    },
    {
      label: "Settings",
      onPress: () => {
        push("(drawer)/(tabs)/settings");
      },
    },
  ]);
  // --- END: Local state

  return (
    <DrawerContentScrollView style={[styles.scrollView]}>
      <View
        style={[
          styles.container,
          { gap: spacing.medium, padding: spacing.medium },
        ]}
      >
        <CondominiumAvatar />
        <View>
          {items.map((item) => (
            <DrawerItem
              key={item.label}
              label={item.label}
              onPress={item.onPress}
            />
          ))}
        </View>
        <SignOutButton />
      </View>
    </DrawerContentScrollView>
  );
}
