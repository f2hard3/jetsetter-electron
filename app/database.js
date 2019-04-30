import path from 'path';
import { remote } from 'electron';
import knex from 'knex';
import 'sqlite3';

const { app } = remote;

const database = knex({
    client: 'sqlite3',
    connection: {
        filename: path.join(app.getPath('userData'), 'jetsetter-items.sqlite')
    },
    useNullAsDefault: true
});

database.schema.hasTable('items').then(exists => {
    if (!exists) {
        return database.schema.createTable('items', t => {
            t.increments('id').primary();
            t.string('value', 100);
            t.boolean('packed');
        });
    }
});

export default database;

// import { openDB } from 'idb';

// const database = openDB('jetsetter', 1, db => {
//     db.createObjectStore('items', {
//         keyPath: 'id',
//         autoIncrement: true
//     });
// });

// export default {
//     getAll: () =>
//         database.then(db =>
//             db
//                 .transaction('items')
//                 .objectStore('items')
//                 .getAll()
//         ),
//     add: item =>
//         database.then(db => {
//             const tx = db.transaction('items', 'readwrite');
//             tx.objectStore('items').add(item);
//             return tx.done;
//         }),
//     update: item =>
//         database.then(db => {
//             const tx = db.transaction('items', 'readwrite');
//             tx.objectStore('items').put(item);
//             return tx.done;
//         }),
//     markAllAsUnpacked: () =>
//         this.getAll().then(items =>
//             items
//                 .map(item => ({ ...item, packed: false }))
//                 .then(items =>
//                     database.then(db => {
//                         const tx = db.transaction('items', 'readwrite');
//                         for (const item of items) {
//                             tx.objectStore('items').put(item);
//                         }
//                         return tx.done;
//                     })
//                 )
//         ),
//     delete: item =>
//         database.then(db => {
//             const tx = db.transaction('items', 'readwrite');
//             tx.objectStore('items').delete(item);
//             return tx.done;
//         }),
//     deleteUnpackedItems: () =>
//         this.getAll().then(items =>
//             items
//                 .filter(item => !item.packed)
//                 .then(items =>
//                     database.then(db => {
//                         const tx = db.transaction('items', 'readwrite');
//                         for (const item of items) {
//                             tx.objectStore('items').delete(item.id);
//                         }
//                         return tx.done;
//                     })
//                 )
//         )
// };