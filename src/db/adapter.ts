import { type LokiAdapterOptions } from '@nozbe/watermelondb/adapters/lokijs'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { SQLiteAdapterOptions } from '@nozbe/watermelondb/adapters/sqlite/type'

export const createAdapter = (
    options: Pick<
        SQLiteAdapterOptions,
        // Accept only the options shared between SQLiteAdapterOptions and LokiAdapterOptions
        Extract<keyof SQLiteAdapterOptions, keyof LokiAdapterOptions>
    >,
) =>
    new SQLiteAdapter({
        jsi: true,
        onSetUpError: error => {
            console.error("🚀 ~ file: adapter.ts:15 ~ error:", error);
            // Database failed to load -- offer the user to reload the app or log out
        },
        ...options,
    })