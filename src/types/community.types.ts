import Community from "@/db/model/community/community";

export type TCommunity = Pick<Community, "communityId" | "name" | "description" | "isActive" | "avatar">