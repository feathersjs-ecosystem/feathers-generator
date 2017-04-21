'use strict';

const path = require('path');
const favicon = require('serve-favicon');

module.exports = function(options = {}) {
  return favicon(path.join(options.path, 'favicon.ico'));
};
