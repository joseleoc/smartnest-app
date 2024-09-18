import database from "@/db";
import Condominium from "./condominium";
import { Q } from "@nozbe/watermelondb";

import { TableName } from "@/db/db.types";
import { TCondominium } from "@/types/condominium.types";


export async function createCondominium(data: Omit<TCondominium, "id">) {
    try {
        console.log("data from fn", { data });
        const newCondominium = await database.write(async () =>
            await database.collections.get<Condominium>(TableName.Condominiums).create((collectionCondominium) => {
                collectionCondominium.name = data.name;
                collectionCondominium.description = data.description;
                collectionCondominium.address = data.address;
                collectionCondominium.createdAt = new Date();
                collectionCondominium.avatar = data.avatar;
                collectionCondominium.setActive()
            })
        )
        return newCondominium;
    } catch (error) {
        console.error("🚀 ~ file: condominium.functions.ts:24 ~ createCondominium ~ error:", error);
        Promise.reject(error)
    }

}

export function getActiveCondominium$() {
    return CondominiumCollection.query(Q.where("is_active", true));
}

export const CondominiumCollection = database.collections.get<Condominium>(TableName.Condominiums)