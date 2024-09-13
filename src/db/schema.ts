import { appSchema, tableSchema } from '@nozbe/watermelondb'
import { TableName } from './db.types'

export default appSchema({
    version: 1,
    tables: [
        tableSchema({

            name: TableName.Communities,
            columns: [
                { name: "name", type: "string" },
                { name: "is_active", type: "boolean" },
                { name: "created_at", type: "number" },
                { name: "community_id", type: "string" },
                { name: "description", type: "string", isOptional: true },
                { name: "is_deleted", type: "boolean", isOptional: true },
                { name: "deleted_at", type: "number", isOptional: true },
                { name: "avatar", type: "string", isOptional: true },

            ]
        }),

        tableSchema({
            name: TableName.Properties,
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
            name: TableName.ExpensesCategories,
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
            name: TableName.Expenses,
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
            name: TableName.Incomes,
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



