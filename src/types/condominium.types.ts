import condominium from "@/db/model/condominium";


export type TCondominium = Pick<condominium, "condominiumId" | "name" | "description" | "isActive" | "avatar">