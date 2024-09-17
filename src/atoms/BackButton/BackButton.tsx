import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

import Button, { ButtonProps } from "../Button";
import useTheme from "@/hooks/useTheme";

export default function BackButton(props: ButtonProps) {
  // --- Hooks -----------------------------------------------------------------
  const { back } = useRouter();
  const {
    styling: { button },
    colors,
  } = useTheme();
  // --- END: Hooks ------------------------------------------------------------
  // --- Data and handlers -----------------------------------------------------
  const { style, pressStyle, ...otherProps } = props;

  const handleBack = () => back();
  // --- END: Data and handlers ------------------------------------------------

  return (
    <Button
      onPress={handleBack}
      style={[
        {
          backgroundColor: "red",
          padding: 0,
          width: button.small,
          height: button.small,
        },
        style,
      ]}
      pressStyle={pressStyle}
      shadow={false}
      {...otherProps}
    >
      <AntDesign
        name="arrowleft"
        size={button.small}
        color={colors.text}
        style={{
          width: button.small,
          height: button.small,
          color: colors.text,
        }}
      />
    </Button>
  );
}
