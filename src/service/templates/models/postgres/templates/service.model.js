const client = require('knex');
const service = require('feathers-knex');
const pgtools = require('pgtools');

export default function (options) {
  // Create a rethinkdb connection
  // @slajax: add servers to knex client

  const model = knex({
    client: 'pg',
    version: '9.6.3',
    connection: {
      host : '127.0.0.1',
      user : options.user,
      password : options.pass, // this needs to be a better way
      database: options.db
    }
  });

  var postgres = service({
    Model: model,
    name: options.table,
    paginate: options.paginate
  });

  // <!-- init block
  return postgres
    .init({}, (table) => {
      // define your schema here
      debug(`created ${table._tableName} table`);
      table.increments('id');
      table.string('text');
      table.boolean('complete');
    })
    .then(() => {
      console.log(`Postgres ${options.db}.${options.table} has been created.`);
      console.log(`You should remove the "init block" in ${__filename} now.`);
      return postgres;
    })
    .catch(err => console.log('Postgres init failed:', err));
  // init block -->

  return postgres; // uncomment, when removing init block

};
