const client = require('knex');
const service = require('feathers-knex');
const user = require("os").userInfo().username;

export default function (options) {

  const debug = require('debug')(`feathers:service:${options.table}:mysql`)

  const model = client({
    client: 'mysql',
    connection: {
      host : options.host || '127.0.0.1',
      user : options.user || user,
      password : options.pass || '', // this needs to be a better way
      database: options.db || 'feathers'
    }
  });

  var mysql = service({
    Model: model,
    name: options.table,
    paginate: options.paginate
  });

  // <!-- init block
  return mysql
    .init({}, (table) => {
      // define your schema here
      debug(`created ${table._tableName} table`);
      table.increments('id');
      table.string('text');
      table.boolean('complete');
    })
    .then(() => {
      console.log(`Mysql ${options.db}.${options.table} has been created.`);
      console.log(`You should remove the "init block" in ${__filename} now.`);
      return mysql;
    })
    .catch(err => console.log('Mysql init failed:', err));
  // init block -->

  return mysql; // uncomment, when removing init block

};
