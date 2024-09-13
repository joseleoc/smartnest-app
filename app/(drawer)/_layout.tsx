import { Drawer } from "expo-router/drawer";
import { withObservables } from "@nozbe/watermelondb/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CustomDrawerContent from "@/templates/CustomDrawerContent";

import { TCommunity } from "@/types/community.types";
import { CommunityCollection } from "@/db/model/community";

function Layout({ communities }: { communities: TCommunity[] }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={() => <CustomDrawerContent communities={communities} />}
      />
    </GestureHandlerRootView>
  );
}

const enhance = withObservables([], () => ({
  communities: CommunityCollection.query(),
}));

export default enhance(Layout);
