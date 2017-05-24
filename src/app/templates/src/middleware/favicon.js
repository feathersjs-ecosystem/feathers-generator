'use strict';

const path = require('path');
const favicon = require('serve-favicon');

export default function(options = {}) {
  return favicon(path.join(options.path, 'favicon.ico'));
};
