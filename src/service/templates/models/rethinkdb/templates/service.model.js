const client = require('rethinkdbdash');
const service = require('feathers-rethinkdb');

module.exports = function (options) {
  // Create a rethinkdb connection
  // @slajax: add servers to rethink client
  const model = client({ db: options.db });
  var rethink = service({
    Model: model,
    name: options.table,
    paginate: options.paginate
  });

  // <!-- init block
  return rethink
    .createTable(options.table)
    .then(() => {
      console.log(`RethinkDB ${options.db}.${options.table} has been created.`);
      console.log(`You should remove the "init block" in ${__filename} now.`);
      return rethink;
    })
    .catch(err => console.log('rethinkdb init failed:', err.msg));
  // init block -->

  // return rethink; // uncomment, when removing init block
};
