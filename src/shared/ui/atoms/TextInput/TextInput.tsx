import { TextInput as RNTextInput } from "react-native";
import { styles } from "./TextInput.styles";
import { TextInputProps } from "./TextInput.constants";
import useTheme from "@/hooks/useTheme";

export default function TextInput(props: TextInputProps) {
  // --- Hooks -----------------------------------------------------------------
  const { colors, styling } = useTheme();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const { style, placeholderTextColor, ...otherProps } = props;
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  // --- END: Data and handlers ------------------------------------------------

  return (
    <RNTextInput
      style={[
        styles.textInput,
        {
          color: colors.text,
          backgroundColor: colors.light,
          height: styling.input.medium,
          borderBottomColor: colors.dark,
          borderBottomWidth: 1,
          paddingHorizontal: styling.spacing.small,
        },
        style,
      ]}
      placeholderTextColor={placeholderTextColor ?? colors.medium}
      {...otherProps}
    />
  );
}
