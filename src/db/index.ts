
import { Database } from '@nozbe/watermelondb'

import schema from './schema'
import migrations from './migrations'
import { createAdapter } from './adapter'
import Community from './model/community/community'


// Then, make a Watermelon database from it!
const database = new Database({
    adapter: createAdapter({ schema, migrations }),
    modelClasses: [
        Community
        // ⬅️ You'll add Models to Watermelon here
    ],
})

export default database;