import condominium from "@/db/model/condominium";


export type TCondominium = Pick<condominium, "id" | "name" | "description" | "isActive" | "avatar">