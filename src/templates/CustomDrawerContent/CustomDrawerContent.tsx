import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import View from "@/atoms/View";
import Text from "@/atoms/Text";
import { TCommunity } from "@/types/community.types";
import { styles } from "./CustomDrawerContent.styles";

export default function CustomDrawerContent({
  communities,
}: {
  communities: TCommunity[];
}) {
  console.log(communities);
  return (
    <DrawerContentScrollView style={[styles.scrollView]}>
      <View style={[styles.container, { gap: 10 }]}>
        <Text>{communities[0].name}</Text>
      </View>
    </DrawerContentScrollView>
  );
}
