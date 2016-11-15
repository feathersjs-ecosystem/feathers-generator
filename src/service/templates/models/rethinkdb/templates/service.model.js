const path = require('path');
const rethink = require('rethinkdbdash');

module.exports = function (options) {

  // Create a rethinkdb instance
  const r = rethink({
    db: options.db // @slajax todo: add servers to config
  });

  // <!--- This code can be removed!
  // All it does is set up your DB table.
  r.dbList().contains(options.db) // create db if not exists
    .do(dbExists => r.branch(dbExists, {created: 0}, r.dbCreate(options.db))).run()
    .then(() => {
      return r.db(options.db).tableList().contains(options.table) //create table if not exists
        .do(tableExists => r.branch( tableExists, {created: 0}, r.tableCreate(options.table))).run();
    })
    .then(() => {
      console.log(`RethinkDB ${options.db}.${options.table} now exists`);
      console.log(`You can remove this database initiation code now.`);
    })
    .catch(err => console.log(err.msg));
  // -->

  return r;
};
