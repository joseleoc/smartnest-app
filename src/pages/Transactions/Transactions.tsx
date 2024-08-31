import View from "@/atoms/View";
import { styles } from "./Transactions.styles";
import TransactionsTabs from "@/molecules/TransactionsTabs";
import { useState } from "react";
import SafeAreaView from "@/atoms/SafeAreaView";
import useTheme from "@/hooks/useTheme";

export enum TransactionViews {
  "expenses",
  "incomes",
}

export default function Transactions() {
  // --- Hooks -----------------------------------------------------------------
  const [view, setView] = useState<TransactionViews>(TransactionViews.expenses);
  const { spacing } = useTheme();
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
    <SafeAreaView>
      <View
        style={[
          styles.container,
          { paddingBottom: spacing.spacingLarge, paddingTop: 0 },
        ]}
      >
        <TransactionsTabs setView={setView} view={view} />
      </View>
    </SafeAreaView>
  );
}
