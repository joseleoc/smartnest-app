import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: "communities",
            columns: [
                { name: "community_id", type: "string" },
                { name: "name", type: "string" },
                { name: "description", type: "string" },
                { name: "created_at", type: "number" },
                { name: "is_deleted", type: "boolean", isOptional: true },
                { name: "deleted_at", type: "number", isOptional: true },
            ]
        }),

        tableSchema({
            name: "properties",
            columns: [
                { name: "property_id", type: "string" },
                { name: "property_code", type: "string", },
                { name: "name", type: "string", isOptional: true },
                { name: "email", type: "string", isOptional: true },
                { name: "phone", type: "string", isOptional: true },
                { name: "community_id", type: "string" },
                { name: "created_at", type: "number" },
                { name: "deleted", type: "string", isOptional: true },
                { name: "deleted_at", type: "number", isOptional: true },
            ]
        }),
        tableSchema({
            name: "expenses_categories",
            columns: [
                { name: "category_id", type: "string" },
                { name: "name", type: "string" },
                { name: "description", type: "string" },
                { name: "community_id", type: "string" },
                { name: "created_at", type: "number" },
                { name: "deleted", type: "string", isOptional: true },
                { name: "deleted_at", type: "number", isOptional: true },
            ]
        }),
        tableSchema({
            name: "expenses",
            columns: [
                { name: "expense_id", type: "string" },
                { name: "category_id", type: "string" },
                { name: "voucher", type: "string" },
                { name: "community_id", type: "string" },
                { name: "amount", type: "number" },
                { name: "paid_at", type: "number" },
                { name: "deleted", type: "string", isOptional: true },
                { name: "deleted_at", type: "number", isOptional: true },
                { name: "description", type: "string", isOptional: true },
                { name: "created_at", type: "number" },
            ]
        }),
        tableSchema({
            name: "incomes",
            columns: [
                { name: "income_id", type: "string" },
                { name: "category_id", type: "string" },
                { name: "voucher", type: "string" },
                { name: "community_id", type: "string" },
                { name: "amount", type: "number" },
                { name: "paid_at", type: "number" },
                { name: "deleted", type: "string", isOptional: true },
                { name: "deleted_at", type: "number", isOptional: true },
                { name: "description", type: "string", isOptional: true },
                { name: "created_at", type: "number" },
            ]
        }),
        // We'll add tableSchemas here later
    ]
})



