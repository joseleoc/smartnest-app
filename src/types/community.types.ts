export type TCommunity = {
    communityId: string;
    name: string;
    description?: string;
    createdAt: Date;
    deletedAt?: Date;
    isDeleted?: boolean;
}