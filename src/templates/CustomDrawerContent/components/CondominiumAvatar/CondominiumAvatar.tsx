import { Image } from "expo-image";
import { withObservables } from "@nozbe/watermelondb/react";

import useTheme from "@/hooks/useTheme";

import Text from "@/atoms/Text";
import View from "@/atoms/View";

import { styles } from "./CondominiumAvatar.styles";
import { TCondominium } from "@/types/condominium.types";
import { getActiveCondominium$ } from "@/db/model/condominium";
import { useEffect, useState } from "react";

type CondominiumAvatarProps = { condominiums: TCondominium[] };
function CondominiumAvatar({ condominiums }: CondominiumAvatarProps) {
  // --- Hooks -----------------------------------------------------------------
  const {
    styling: { spacing, radius, text },
    colors,
  } = useTheme();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const [condominium, setCondominium] = useState<TCondominium | null>(null);
  // --- END: Local state ------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    setCondominium(condominiums[0]);
  }, [condominiums]);
  // --- END: Side effects -----------------------------------------------------

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

        <Text style={styles.text}>{condominium?.condominiumId}</Text>

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
