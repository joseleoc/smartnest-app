import { Drawer } from "expo-router/drawer";

import CustomDrawerContent from "@/templates/CustomDrawerContent";


export default function Layout() {
  return <Drawer drawerContent={() => <CustomDrawerContent />} />;
}
