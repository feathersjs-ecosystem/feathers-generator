const path = require('path');
const NeDB = require('nedb');

export default function (options) {
  // Create a NeDB instance
  return new NeDB({
    filename: path.join(options.path, options.db + '.db'),
    autoload: true
  });
};
