import { styles } from "./TransactionTabs.styles";
import Text from "@/atoms/Text";
import View from "@/atoms/View";

import useTheme from "@/hooks/useTheme";
import Button from "@/atoms/Button";
import { useTranslation } from "react-i18next";

import { useCallback, useEffect, useMemo } from "react";
import { TransactionTabsButtons } from "./TransactionsTabs.constants";
import { TransactionViews } from "@/modules/Transactions/Transactions.constants";
import { useStore } from "@/stores/zustand";
export default function TransactionsTabs() {
  // --- Hooks -----------------------------------------------------------------
  const { colors, spacing } = useTheme();
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
  useEffect(() => {
    console.log("view", view);
  }, [view]);
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
              paddingHorizontal: spacing.spacingMedium,
              paddingVertical: spacing.spacingSmall,
            },
            setActiveTabStyle(view === tabView),
          ]}
        >
          <Text
            style={[
              {
                color: colors.backgroundContrast,
                fontSize: spacing.textRegular,
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
