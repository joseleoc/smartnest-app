import { styles } from "./TransactionTabs.styles";
import Text from "@/atoms/Text";
import View from "@/atoms/View";
import { TransactionsTabsProps } from "./TransactionTabs.types";
import useTheme from "@/hooks/useTheme";
import Button from "@/atoms/Button";
import { useTranslation } from "react-i18next";
import { TransactionViews } from "@/pages/Transactions/Transactions";

import { useMemo } from "react";
import { TransactionTabsButtons } from "./TransactionsTabs.constants";
import { Animated } from "react-native";
export default function TransactionsTabs(props: TransactionsTabsProps) {
  // --- Hooks -----------------------------------------------------------------
  const { colors, spacing } = useTheme();
  const { t } = useTranslation();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const { view, setView } = props;

  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const setActiveTabStyle = useMemo(
    () => (isActive: boolean, color: string) =>
      isActive ? { borderColor: color } : {},
    [view]
  );
  // --- END: Data and handlers ------------------------------------------------

  return (
    <View style={styles.container}>
      {TransactionTabsButtons.map(({ title, view: tabView }, index) => (
        <Animated.View key={index}>
          <Button
            onPress={() => setView(tabView)}
            style={[
              styles.tab,
              {
                paddingHorizontal: spacing.spacingMedium,
                paddingVertical: spacing.spacingSmall,
              },
              setActiveTabStyle(view === tabView, colors.backgroundContrast),
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
        </Animated.View>
      ))}
    </View>
  );
}
