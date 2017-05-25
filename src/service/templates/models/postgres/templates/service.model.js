const client = require('knex');
const service = require('feathers-knex');
const pgtools = require('pgtools');

export default function (options) {
  // Create a rethinkdb connection
  // @slajax: add servers to knex client
  const conn = {
    host : '127.0.0.1',
    user : 'slajax',
    password : ''
  };

  pgtools.createdb(conn, options.table)
    .then(() => {
      console.log('error', arguments);
    })
    .catch(() => {
      console.log('error', arguments)
    });

  return;

  conn.database = options.table;
  const model = require('knex')({
    client: 'pg',
    version: '9.6.3',
    connection: conn
  });

  var postgres = service({
    Model: model,
    name: options.table,
    paginate: options.paginate
  });

  // <!-- init block
  //return postgres
    ////.init()
    //.then(() => {
      //console.log(`Postgres ${options.db}.${options.table} has been created.`);
      //console.log(`You should remove the "init block" in ${__filename} now.`);
      //return postgres;
    //})
    //.catch(err => console.log('rethinkdb init failed:', err.msg));
  // init block -->

  return postgres; // uncomment, when removing init block
};
