import SafeAreaView from "@/atoms/SafeAreaView";
import Text from "@/atoms/Text";
import useTheme from "@/hooks/useTheme";
import View from "@/atoms/View";
import { styles } from "./CreateCondominium.styles";
import { useTranslation } from "react-i18next";
import BackButton from "@/atoms/BackButton/BackButton";
import { withObservables } from "@nozbe/watermelondb/react";
import { CondominiumCollection } from "@/db/model/condominium/condominium.functions";
import Condominium from "@/db/model/condominium/condominium";
import { useEffect } from "react";
import Header from "./Components/header";

function CreateCondominium({ condominiums }: { condominiums: Condominium[] }) {
  // --- Hooks -----------------------------------------------------------------
  const {
    styling: { spacing, text },
  } = useTheme();
  const { t } = useTranslation();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
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
  // --- END: Data and handlers ------------------------------------------------

  return (
    <SafeAreaView>
      <View style={[styles.container, { padding: spacing.large }]}>
        <Header />
      </View>
    </SafeAreaView>
  );
}

const enhance = withObservables(["condominiums"], ({ condominiums }) => ({
  condominiums: CondominiumCollection.query(),
}));

export default enhance(CreateCondominium);
