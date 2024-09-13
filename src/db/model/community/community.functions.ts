import database from "@/db";
import Community from "./community";
import { TableName } from "@/db/db.types";
import { TCommunity } from "@/types/community.types";

export async function createCommunity(community: TCommunity) {
    const newCommunity = await database.write(async () =>
        await database.collections.get<Community>(TableName.Communities).create((collectionCommunity) => {
            collectionCommunity.communityId = community.communityId;
            collectionCommunity.name = community.name;
            collectionCommunity.description = community.description;
            collectionCommunity.createdAt = new Date();
            collectionCommunity.avatar = community.avatar;
            collectionCommunity.isActive = true;
        })
    )
    return newCommunity;
}

export const CommunityCollection = database.collections.get<Community>(TableName.Communities)