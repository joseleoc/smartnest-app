import { Drawer } from "expo-router/drawer";
import { withObservables } from "@nozbe/watermelondb/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CustomDrawerContent from "@/templates/CustomDrawerContent";

import { TCondominium } from "@/types/condominium.types";
import { CondominiumCollection } from "@/db/model/condominium/condominium.functions";

function Layout({ condominiums }: { condominiums: TCondominium[] }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={() => (
          <CustomDrawerContent condominiums={condominiums} />
        )}
      />
    </GestureHandlerRootView>
  );
}

const enhance = withObservables([], () => ({
  condominiums: CondominiumCollection.query(),
}));

export default enhance(Layout);
