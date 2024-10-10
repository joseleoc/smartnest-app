import SafeAreaView from "@/atoms/SafeAreaView";
import useTheme from "@/hooks/useTheme";
import View from "@/atoms/View";
import { styles } from "./CreateCondominium.styles";
import { useTranslation } from "react-i18next";
import { withObservables } from "@nozbe/watermelondb/react";
import {
  CondominiumCollection,
  createCondominium,
} from "@/db/model/condominium/condominium.functions";
import Condominium from "@/db/model/condominium/condominium";
import { useEffect, useState } from "react";
import Header from "./Components/header";
import CreateCondominiumForm from "./Components/form/form";
import Toast from "react-native-toast-message";
import { Inputs } from "./Components/form/form.types";

function CreateCondominium({ condominiums }: { condominiums: Condominium[] }) {
  // --- Hooks -----------------------------------------------------------------
  const {
    styling: { spacing, text },
  } = useTheme();
  const { t } = useTranslation();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const [loading, setLoading] = useState(false);

  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    console.log("condominiums: ", condominiums);
  }, [condominiums]);

  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const createCondominium = async (data: Inputs) => {
    try {
      if (data.name === "") throw new Error("Name is required");
      const newCondominium = await createCondominium({
        name: data.name,
        description: data.description || "",
        address: data.address || "",
        avatar: data.avatar || "",
      });
      console.log(
        "🚀 ~ file: form.tsx:54 ~ onSubmit ~ newCondominium:",
        newCondominium
      );
      Toast.show({
        type: "success",
        text1: t("CONDOMINIUM.CREATE_FORM.CREATE_SUCCESS"),
      });
      setLoading(false);
    } catch (error) {
      console.error("🚀 ~ file: form.tsx:61 ~ onSubmit ~ error:", error);
      setLoading(false);
      Toast.show({
        type: "error",
        text1: t("CONDOMINIUM.CREATE_FORM.CREATE_ERROR"),
      });
    }
  };
  // --- END: Data and handlers ------------------------------------------------

  return (
    <SafeAreaView>
      <View style={[styles.container, { padding: spacing.medium }]}>
        <Header />
        <CreateCondominiumForm
          createCondominium={createCondominium}
          loading={loading}
        />
      </View>
    </SafeAreaView>
  );
}

const enhance = withObservables(["condominiums"], ({ condominiums }) => ({
  condominiums: CondominiumCollection.query(),
}));

export default enhance(CreateCondominium);
