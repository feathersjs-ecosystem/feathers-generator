const path = require('path');
const NeDB = require('nedb');

module.exports = function (options) {
  // Create a NeDB instance
  return new NeDB({
    filename: path.join(options.path, options.db+'.db'),
    autoload: true
  });
};
