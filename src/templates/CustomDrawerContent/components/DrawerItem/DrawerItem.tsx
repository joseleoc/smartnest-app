import { DrawerItem as RNDrawerItem } from "@react-navigation/drawer";

type TDrawerItemProps = React.ComponentProps<typeof RNDrawerItem>;

export default function DrawerItem(props: TDrawerItemProps) {
  return <RNDrawerItem {...props} />;
}
