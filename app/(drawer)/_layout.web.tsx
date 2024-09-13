import { Drawer } from "expo-router/drawer";

import CustomDrawerContent from "@/templates/CustomDrawerContent";

function Layout() {
  return <Drawer drawerContent={() => <CustomDrawerContent />} />;
}
