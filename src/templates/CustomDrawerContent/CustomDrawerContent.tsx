import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import View from "@/atoms/View";
import Text from "@/atoms/Text";
import { TCommunity } from "@/types/community.types";
import { styles } from "./CustomDrawerContent.styles";
import { useRouter } from "expo-router";

export default function CustomDrawerContent({
  communities,
}: {
  communities: TCommunity[];
}) {
  console.log(communities);
  const { push } = useRouter();

  return (
    <DrawerContentScrollView style={[styles.scrollView]}>
      <View style={[styles.container, { gap: 10 }]}>
        <Text>{communities[0].name}</Text>
      </View>

      <DrawerItem
        label="Home"
        onPress={() => {
          push("(drawer)/(tabs)");
        }}
      />

      <DrawerItem
        label="Settings"
        onPress={() => {
          push("(drawer)/(tabs)/settings");
        }}
      />
    </DrawerContentScrollView>
  );
}
