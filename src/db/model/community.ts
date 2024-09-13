import { Model } from '@nozbe/watermelondb'
import { field, text, date, writer } from '@nozbe/watermelondb/decorators'

export default class Community extends Model {
    static table = 'communities'
    // static associations = {
    //     properties: { type: 'has_many', foreignKey: 'community_id' },
    // };

    @field('community_id') communityId!: string;
    @text('name') name!: string;
    @text('description') description!: string;
    @date('created_at') createdAt!: Date;
    @date("deleted_at") deletedAt?: Date;
    @field("is_deleted") isDeleted?: boolean;

    @writer
    async createCommunity(data: Community) {
        const newCommunity = await this.collections.get<Community>("communities").create((community) => {
            community.communityId = data.communityId;
            community.name = data.name;
            community.description = data.description;
            community.createdAt = data.createdAt;
        });
        return newCommunity;
    }


}