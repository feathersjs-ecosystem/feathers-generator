const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function (options) {
  var Service = new Schema({}, { strict: false });
  var Model = mongoose.model(options.name, Service);
  return Model;
};
