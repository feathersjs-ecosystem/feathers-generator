const path = require('path');
const NeDB = require('nedb');

module.exports = function (options) {
  // Create a NeDB instance
  return new NeDB({
    filename: path.join(options.path, 'messages.db'),
    autoload: true
  });
};
