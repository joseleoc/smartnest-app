import { Picker as RNPicker } from "@react-native-picker/picker";
import { styles } from "./Picker.styles";
import useTheme from "@/hooks/useTheme";
import { useEffect, useState } from "react";

type PickerProps<T> = {
  selectedValue: T;
  setSelectedValue: (itemValue: T, itemIndex?: number) => void;
  values: { label: string; value: T }[];
};

export default function Picker<T>(props: PickerProps<T>) {
  // --- Hooks -----------------------------------------------------------------
  const { styling } = useTheme();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const { selectedValue, setSelectedValue, values } = props;
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    console.log(values);
  }, [values]);
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  // --- END: Data and handlers ------------------------------------------------

  return (
    <RNPicker
      selectedValue={selectedValue}
      onValueChange={setSelectedValue}
      mode="dropdown"
      style={[styles.picker, { padding: styling.spacing.small }]}
    >
      {values.map(({ label, value }) => (
        <RNPicker.Item label={label} value={value} key={String(value)} />
      ))}
    </RNPicker>
  );
}
