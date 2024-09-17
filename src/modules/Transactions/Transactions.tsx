import View from "@/atoms/View";
import { styles } from "./Transactions.styles";
import SafeAreaView from "@/atoms/SafeAreaView";
import useTheme from "@/hooks/useTheme";
import { TransactionViews } from "./Transactions.constants";
import ExpensesForm from "./components/ExpensesForm";
import IncomesForm from "./components/IncomesForm";
import TransactionsTabs from "./components/TransactionsTabs";
import { useStore } from "@/stores/zustand";
import Button from "@/atoms/Button";
import { useRouter } from "expo-router";
import Text from "@/atoms/Text";

export default function Transactions() {
  // --- Hooks -----------------------------------------------------------------
  const { styling } = useTheme();
  const { transactionsView: view } = useStore();
  const { push } = useRouter();
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
      <Button onPress={() => push("(drawer)")}>
        <Text>Back</Text>
      </Button>
      <View
        style={[
          styles.container,
          {
            paddingBottom: styling.spacing.large,
            paddingTop: 0,
            gap: styling.spacing.large,
          },
        ]}
      >
        <TransactionsTabs />
        {view === TransactionViews.expenses && <ExpensesForm />}
        {view === TransactionViews.incomes && <IncomesForm />}
      </View>
    </SafeAreaView>
  );
}
