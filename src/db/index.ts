
import { Database } from '@nozbe/watermelondb'

import schema from './schema'
import { createAdapter } from './adapter'
import Condominium from './model/condominium/condominium'

// Then, make a Watermelon database from it!
const database = new Database({
    adapter: createAdapter({
        schema,
        // migrations
    }),
    modelClasses: [
        Condominium
        // ⬅️ You'll add Models to Watermelon here
    ],
})


export default database;