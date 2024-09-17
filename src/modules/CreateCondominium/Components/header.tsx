import useTheme from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

import View from "@/atoms/View";
import Text from "@/atoms/Text";
import BackButton from "@/atoms/BackButton/BackButton";

import { styles } from "../CreateCondominium.styles";
export default function Header() {
  // --- Hooks -----------------------------------------------------------------
  const { t } = useTranslation();
  const {
    styling: { text },
  } = useTheme();
  // --- END: Hooks ------------------------------------------------------------

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.title, { fontSize: text.medium }]}>
        {t("CONDOMINIUM.CREATE")}
      </Text>
      <BackButton style={styles.backButton} />
    </View>
  );
}
