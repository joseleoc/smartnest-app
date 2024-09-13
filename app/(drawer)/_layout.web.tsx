import { Drawer } from "expo-router/drawer";
import { withObservables } from "@nozbe/watermelondb/react";

import CustomDrawerContent from "@/templates/CustomDrawerContent";

import { TCommunity } from "@/types/community.types";
import { CommunityCollection } from "@/db/model/community";

function Layout({ communities }: { communities: TCommunity[] }) {
  return (
    <Drawer
      drawerContent={() => <CustomDrawerContent communities={communities} />}
    />
  );
}

const enhance = withObservables([], () => ({
  communities: CommunityCollection.query(),
}));

export default enhance(Layout);
