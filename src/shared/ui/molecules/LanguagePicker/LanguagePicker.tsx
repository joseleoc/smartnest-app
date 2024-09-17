import Picker from "@/atoms/Picker/Picker";
import { useStore } from "@/stores/zustand";
import { LanguageOptions } from "./LanguagePicker.constants";

export default function LanguagePicker() {
  // --- Hooks -----------------------------------------------------------------
  const { selectedLanguage, setSelectedLanguage } = useStore();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
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
    <Picker
      setSelectedValue={setSelectedLanguage}
      selectedValue={selectedLanguage}
      values={LanguageOptions}
    />
  );
}
