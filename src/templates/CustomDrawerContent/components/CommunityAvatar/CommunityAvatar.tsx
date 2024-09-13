import View from "@/atoms/View";
import useTheme from "@/hooks/useTheme";
import { styles } from "./CommunityAvatar.styles";
import { Image } from "expo-image";
import Text from "@/atoms/Text";
import { withObservables } from "@nozbe/watermelondb/react";
import database from "@/db";
import { TableName } from "@/db/db.types";
import { Q } from "@nozbe/watermelondb";
import { useEffect, useState } from "react";
import Community from "@/db/model/community/community";
import { TCommunity } from "@/types/community.types";

function CommunityAvatar(communities: { community: Community[] }) {
  // --- Hooks -----------------------------------------------------------------
  const {
    styling: { spacing, radius, text },
    colors,
  } = useTheme();
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const [community, setCommunity] = useState<TCommunity | null>(null);
  // --- END: Local state ------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    setCommunity(communities.community[0]);
  }, [communities]);
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
          community?.avatar
            ? { uri: community?.avatar }
            : require("src/assets/icons/buildings.png")
        }
      />
      <View>
        <Text
          style={[
            {
              fontSize: text.medium,
            },
          ]}
        >
          {community?.name}
        </Text>

        <Text>{String(community?.isActive)}</Text>

        <Text>{community?.communityId}</Text>

        <Text
          style={[
            {
              fontSize: text.small,
              color: colors.muted,
            },
          ]}
        >
          {community?.description}
        </Text>
      </View>
    </View>
  );
}

const enhance = withObservables(
  [],
  (communities: { community: Community[] }) => ({
    community: database
      .get<Community>(TableName.Communities)
      .query(Q.where("is_active", true)),
  })
);

export default enhance(CommunityAvatar);
