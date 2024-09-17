import { Drawer } from "expo-router/drawer";

import CustomDrawerContent from "@/shared/ui/templates/CustomDrawerContent";


export default function Layout() {
  return <Drawer drawerContent={() => <CustomDrawerContent />} />;
}
