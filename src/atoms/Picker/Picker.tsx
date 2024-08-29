import { Picker as RNPicker } from "@react-native-picker/picker";
import { useState } from "react";

type PickerProps = {
  selectedValue: string;
  setSelectedValue: (itemValue: string, itemIndex?: number) => void;
};

export default function Picker(props: PickerProps) {
  // --- Hooks -----------------------------------------------------------------
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const { selectedValue, setSelectedValue } = props;
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
    <RNPicker selectedValue={selectedValue} onValueChange={setSelectedValue}>
      <RNPicker.Item label="Java" value="java" />
      <RNPicker.Item label="JavaScript" value="js" />
    </RNPicker>
  );
}
