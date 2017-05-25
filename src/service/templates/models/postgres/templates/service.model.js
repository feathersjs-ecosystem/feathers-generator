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

  pgtools.createdb(conn, 'todos', function (err, res) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log(res);
  });

  //const model = require('knex')({
    //client: 'pg',
    //version: '9.6.3',
    //connection: conn
  //});

  //model.raw('CREATE DATABASE todos')
    //.then(function(){
      //console.log('todos created')
    //})
  //var postgres = service({
    //Model: model,
    //name: options.table,
    //paginate: options.paginate
  //});

  //// <!-- init block
  //return postgres
    ////.init()
    //.then(() => {
      //console.log(`Postgres ${options.db}.${options.table} has been created.`);
      //console.log(`You should remove the "init block" in ${__filename} now.`);
      //return postgres;
    //})
    //.catch(err => console.log('rethinkdb init failed:', err.msg));
  //// init block -->

  // return rethink; // uncomment, when removing init block
};
