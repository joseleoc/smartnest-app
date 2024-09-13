import { useState } from "react";
import { useRouter } from "expo-router";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import DrawerItem from "./components/DrawerItem";
import CommunityAvatar from "./components/CommunityAvatar";

import { TCommunity } from "@/types/community.types";
import { styles } from "./CustomDrawerContent.styles";

export default function CustomDrawerContent({
  communities,
}: {
  communities: TCommunity[];
}) {
  const { push } = useRouter();
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
  return (
    <DrawerContentScrollView style={[styles.scrollView]}>
      <CommunityAvatar />
      {items.map((item) => (
        <DrawerItem
          key={item.label}
          label={item.label}
          onPress={item.onPress}
        />
      ))}
    </DrawerContentScrollView>
  );
}
