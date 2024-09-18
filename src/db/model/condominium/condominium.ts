import { Model } from '@nozbe/watermelondb';
import { field, text, date, lazy } from '@nozbe/watermelondb/decorators';
import { Q } from "@nozbe/watermelondb";

import { TableName } from '../../db.types';

export default class Condominium extends Model {
    static table: string = TableName.Condominiums
    // static associations = {
    //     properties: { type: 'has_many', foreignKey: 'condominium_id' },
    // };

    @text('name') name!: string;
    @text('description') description?: string;
    @text('address') address!: string;
    @date('created_at') createdAt!: Date;
    @date("deleted_at") deletedAt?: Date;
    @field("is_deleted") isDeleted?: boolean;
    @field("avatar") avatar?: string;
    @field("is_active") isActive?: boolean;

    @lazy setActive = async () => {
        const previousActive = (await this.collections.get<Condominium>(TableName.Condominiums).query(Q.where("is_active", true)))[0];
        if (previousActive) {
            previousActive.update(() => {
                previousActive.isActive = false;
            });
        }
        this.update(() => {
            this.isActive = true;
        });
    }
}
