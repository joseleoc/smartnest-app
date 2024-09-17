import database from "@/db";
import Condominium from "./condominium";
import { Q } from "@nozbe/watermelondb";

import { TableName } from "@/db/db.types";
import { TCondominium } from "@/types/condominium.types";


export async function createCondominium(condominium: Omit<TCondominium, "id">) {
    const newCondominium = await database.write(async () =>
        await database.collections.get<Condominium>(TableName.Condominiums).create((collectionCondominium) => {
            collectionCondominium.name = condominium.name;
            collectionCondominium.description = condominium.description;
            collectionCondominium.createdAt = new Date();
            collectionCondominium.avatar = condominium.avatar;
            collectionCondominium.setActive()
        })
    )
    return newCondominium;
}

export function getActiveCondominium$() {
    return CondominiumCollection.query(Q.where("is_active", true));
}

export const CondominiumCollection = database.collections.get<Condominium>(TableName.Condominiums)