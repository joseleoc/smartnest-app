import { Stack } from "expo-router";

export function TransactionsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, title: "Transactions" }}>
      <Stack.Screen
        name="transactions"
        options={{ headerShown: false, title: "Transactions" }}
      />
    </Stack>
  );
}
