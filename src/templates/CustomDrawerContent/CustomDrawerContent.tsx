import { useState } from "react";
import { useRouter } from "expo-router";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import DrawerItem from "./components/DrawerItem";
import CondominiumAvatar from "./components/CondominiumAvatar";

import { styles } from "./CustomDrawerContent.styles";
import Condominium from "@/db/model/condominium/condominium";
import { withObservables } from "@nozbe/watermelondb/react";
import { CondominiumCollection } from "@/db/model/condominium/condominium.functions";
import View from "@/atoms/View";
import SignOutButton from "@/atoms/SignOutButton";
import useTheme from "@/hooks/useTheme";

function CustomDrawerContent({
  condominiums,
}: {
  condominiums: Condominium[];
}) {
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
      <View style={[styles.container, { gap: spacing.medium }]}>
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

const enhance = withObservables(["condominiums"], () => ({
  condominiums: CondominiumCollection.query(),
}));

export default enhance(CustomDrawerContent);
