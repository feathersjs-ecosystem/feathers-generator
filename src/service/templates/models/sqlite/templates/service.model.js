const client = require('knex');
const service = require('feathers-knex');
const user = require("os").userInfo().username;

export default function (options) {

  const debug = require('debug')(`feathers:service:${options.table}:sqlite`)

  const model = client({
    client: 'sqlite3',
    connection: {
      filename: './' + (options.db || 'feathers') + '.sqlite'
    }
  });

  var sqlite = service({
    Model: model,
    name: options.table,
    paginate: options.paginate
  });

  // <!-- init block
  return sqlite
    .init({}, (table) => {
      // define your schema here
      debug(`created ${table._tableName} table`);
      table.increments('id');
      table.string('text');
      table.boolean('complete');
    })
    .then(() => {
      console.log(`SQLite ${options.db}.${options.table} has been created.`);
      console.log(`You should remove the "init block" in ${__filename} now.`);
      return sqlite;
    })
    .catch(err => console.log('SQLite init failed:', err));
  // init block -->

  return sqlite; // uncomment, when removing init block

};
