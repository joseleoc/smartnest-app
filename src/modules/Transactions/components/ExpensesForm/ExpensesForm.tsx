import TextInput from "@/atoms/TextInput/TextInput";
import View from "@/atoms/View";
import { styles } from "./ExpensesForm.styles";

export default function ExpensesForm() {
  return (
    <View style={[styles.container, { padding: 10 }]}>
      <TextInput placeholder="Expenses" />
    </View>
  );
}
