const path = require('path');
const NeDB = require('nedb');

module.exports = function (options) {
  return new NeDB({
    filename: path.join(options.path, options.db+'.db'),
    autoload: true
  });
};
