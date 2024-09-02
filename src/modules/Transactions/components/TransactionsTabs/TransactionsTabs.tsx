import { useStore } from "@/stores/zustand";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { styles } from "./TransactionTabs.styles";

import useTheme from "@/hooks/useTheme";
import Button from "@/atoms/Button";
import View from "@/atoms/View";
import Text from "@/atoms/Text";

import { TransactionTabsButtons } from "./TransactionsTabs.constants";
import { TransactionViews } from "@/modules/Transactions/Transactions.constants";

export default function TransactionsTabs() {
  // --- Hooks -----------------------------------------------------------------
  const { colors, styling } = useTheme();
  const { t } = useTranslation();
  const { transactionsView: view, setTransactionsView: setView } = useStore();
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
  const setActiveTabStyle = useMemo(
    () => (isActive: boolean) =>
      isActive ? { borderColor: colors.backgroundContrast } : {},
    [view]
  );

  const handleChangeTab = useCallback(
    (tabView: TransactionViews) => () => {
      setView(tabView);
    },
    [setView]
  );

  // --- END: Data and handlers ------------------------------------------------

  return (
    <View style={styles.container}>
      {TransactionTabsButtons.map(({ title, tabView }, index) => (
        <Button
          key={index}
          onPress={handleChangeTab(tabView)}
          style={[
            styles.tab,
            styles.buttonShadow,
            {
              paddingHorizontal: styling.spacing.medium,
              paddingVertical: styling.spacing.small,
            },
            setActiveTabStyle(view === tabView),
          ]}
        >
          <Text
            style={[
              {
                color: colors.backgroundContrast,
                fontSize: styling.text.regular,
              },
            ]}
          >
            {t(title)}
          </Text>
        </Button>
      ))}
    </View>
  );
}
