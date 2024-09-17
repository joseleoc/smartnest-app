
import { Database } from '@nozbe/watermelondb'

import schema from './schema'
import { createAdapter } from './adapter'
import Condominium from './model/condominium/condominium'
import { v4 as uuidv4 } from 'uuid';
import { setGenerator } from '@nozbe/watermelondb/utils/common/randomId';

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

setGenerator(() => uuidv4());

export default database;