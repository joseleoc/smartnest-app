import { Image } from "expo-image";
import { withObservables } from "@nozbe/watermelondb/react";

import useTheme from "@/hooks/useTheme";

import Text from "@/atoms/Text";
import View from "@/atoms/View";
import AntDesign from "@expo/vector-icons/AntDesign";

import { styles } from "./CondominiumAvatar.styles";
import { TCondominium } from "@/types/condominium.types";
import { getActiveCondominium$ } from "@/db/model/condominium";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/atoms/Button";
import { useRouter } from "expo-router";

type CondominiumAvatarProps = { condominiums: TCondominium[] };
function CondominiumAvatar({ condominiums }: CondominiumAvatarProps) {
  // --- Hooks -----------------------------------------------------------------
  const {
    styling: { spacing, radius, text },
    colors,
  } = useTheme();
  const { t } = useTranslation();
  const { push } = useRouter();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const [condominium, setCondominium] = useState<TCondominium | null>(null);
  // --- END: Local state ------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    if (condominiums[0] != null) setCondominium(condominiums[0]);
  }, [condominiums]);
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const goToCreateCondominium = () => {
    push("(condominiumConfig)");
  };
  // --- END: Data and handlers ------------------------------------------------

  if (condominium == null)
    return (
      <View
        style={[styles.createCondominiumContainer, { gap: spacing.medium }]}
      >
        <Text> {t("CONDOMINIUM.CREATE")}</Text>
        <Button
          onPress={goToCreateCondominium}
          style={[{ backgroundColor: colors.primary }]}
        >
          <AntDesign
            name="plus"
            size={text.medium}
            style={{
              color: colors.primaryContrast,
              width: text.medium,
              height: text.medium,
            }}
            color={colors.primaryContrast}
          />
        </Button>
      </View>
    );

  return (
    <View
      style={[
        styles.container,

        {
          gap: spacing.medium,
          padding: spacing.medium,
        },
      ]}
    >
      <Image
        style={[{ borderRadius: radius.full }, styles.avatar]}
        source={
          condominium?.avatar
            ? { uri: condominium?.avatar }
            : require("src/assets/icons/buildings.png")
        }
        contentFit={"contain"}
      />
      <View style={styles.infoContainer}>
        <Text
          numberOfLines={2}
          style={[
            {
              fontSize: text.medium,
            },
            styles.text,
          ]}
        >
          {condominium?.name}
        </Text>

        <Text style={styles.text}>{condominium?.name}</Text>

        <Text
          numberOfLines={3}
          style={[
            {
              fontSize: text.small,
              color: colors.muted,
            },
            styles.text,
          ]}
        >
          {condominium?.description}
        </Text>
      </View>
    </View>
  );
}

const enhance = withObservables(["condominiums"], ({ condominiums }) => ({
  condominiums: getActiveCondominium$(),
}));

export default enhance(CondominiumAvatar);
