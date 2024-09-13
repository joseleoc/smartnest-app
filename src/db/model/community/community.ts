import { Model } from '@nozbe/watermelondb';
import { field, text, date } from '@nozbe/watermelondb/decorators';
import { TableName } from '../../db.types';

export default class Community extends Model {
    static table: string = TableName.Communities
    // static associations = {
    //     properties: { type: 'has_many', foreignKey: 'community_id' },
    // };

    @field('community_id') communityId!: string;
    @text('name') name!: string;
    @text('description') description?: string;
    @date('created_at') createdAt!: Date;
    @date("deleted_at") deletedAt?: Date;
    @field("is_deleted") isDeleted?: boolean;
    @field("avatar") avatar?: string;
    @field("is_active") isActive?: boolean;

}
