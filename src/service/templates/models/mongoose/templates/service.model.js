const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

module.exports = function (options) {
  mongoose.connect(options.path);
  var Service = new Schema({}, { strict: false });
  var Model = mongoose.model(options.collection, Service);
  return Model;
};
