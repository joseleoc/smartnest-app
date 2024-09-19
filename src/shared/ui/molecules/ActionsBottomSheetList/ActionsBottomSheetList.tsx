import { useTranslation } from "react-i18next";
import AntDesign from "@expo/vector-icons/AntDesign";

import useTheme from "@/hooks/useTheme";

import View from "@/atoms/View";
import Text from "@/atoms/Text";
import { styles } from "./ActionsBottomSheetList.styles";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import { useStore } from "@/stores/zustand";

export default function ActionsBottomSheetList() {
  // --- Hooks -----------------------------------------------------------------
  const { t } = useTranslation();
  const { styling, colors } = useTheme();
  const { setActionBottomSheetOpen } = useStore();
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
    <View
      style={[{ gap: styling.spacing.medium }]}
      testID="actionsBottomSheetList"
    >
      <Link
        push
        href={{
          pathname: "/(transactions)/transactions",
          params: { view: "expenses" },
        }}
      >
        <Pressable style={[styles.litItem, { gap: styling.spacing.medium }]}>
          <View
            style={[
              styles.itemIcon,
              {
                backgroundColor: colors.danger,
                padding: styling.spacing.extraSmall,
              },
            ]}
          >
            <AntDesign
              name="arrowup"
              size={styling.text.large}
              color={colors.dangerContrast}
              style={[
                {
                  color: colors.dangerContrast,
                },
              ]}
            />
          </View>
          <Text colorName="backgroundContrast">{`${t("COMMON.ADD")} ${t("EXPENSES.TITLE")}`}</Text>
        </Pressable>
      </Link>
      <Link
        push
        href={{
          pathname: "/(transactions)/transactions",
          params: { view: "incomes" },
        }}
      >
        <Pressable style={[styles.litItem, { gap: styling.spacing.medium }]}>
          <View
            style={[
              styles.itemIcon,
              {
                backgroundColor: colors.success,
                padding: styling.spacing.extraSmall,
              },
            ]}
          >
            <AntDesign
              name="arrowdown"
              size={styling.text.large}
              color={colors.successContrast}
              style={[
                {
                  color: colors.successContrast,
                },
              ]}
            />
          </View>
          <Text colorName="backgroundContrast">{`${t("COMMON.ADD")} ${t("INCOMES.TITLE")}`}</Text>
        </Pressable>
      </Link>
    </View>
  );
}
