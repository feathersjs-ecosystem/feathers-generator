'use strict';

const serveStatic = require('feathers').static;

module.exports = function(options = {}) {
  return serveStatic(options.path);
};
