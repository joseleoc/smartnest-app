import LokiJSAdapter, {
    type LokiAdapterOptions,
} from '@nozbe/watermelondb/adapters/lokijs'
import { type SQLiteAdapterOptions } from '@nozbe/watermelondb/adapters/sqlite/type'

export const createAdapter = (
    options: Pick<
        LokiAdapterOptions,
        // Accept only the options shared between LokiAdapterOptions and SQLiteAdapterOptions
        Extract<keyof LokiAdapterOptions, keyof SQLiteAdapterOptions>
    >,
) =>

    new LokiJSAdapter({
        useWebWorker: false,
        useIncrementalIndexedDB: true,
        onQuotaExceededError: (error) => {
            // Browser ran out of disk space -- offer the user to reload the app or log out
            console.error("🚀 ~ file: adapter.web.ts:19 ~ error:", error);

        },
        onSetUpError: (error) => {
            // Database failed to load -- offer the user to reload the app or log out
            console.error("🚀 ~ file: adapter.web.ts:24 ~ error:", error);
        },
        extraIncrementalIDBOptions: {
            onDidOverwrite: () => {
                console.info("🚀 ~ file: adapter.web.ts:28 ~ onDidOverwrite");
                // Called when this adapter is forced to overwrite contents of IndexedDB.
                // This happens if there's another open tab of the same app that's making changes.
                // Try to synchronize the app now, and if user is offline, alert them that if they close this
                // tab, some data may be lost
            },
            onversionchange: () => {
                console.info("🚀 ~ file: adapter.web.ts:35 ~ onversionchange");
                // database was deleted in another browser tab (user logged out), so we must make sure we delete
                // it in this tab as well - usually best to just refresh the page
                // if (checkIfUserIsLoggedIn()) {
                //     window.location.reload()
                // }
            }
        },
        ...options,
    })