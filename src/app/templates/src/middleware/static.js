'use strict';

const serveStatic = require('feathers').static;

export default function(options = {}) {
  return serveStatic(options.path);
};
