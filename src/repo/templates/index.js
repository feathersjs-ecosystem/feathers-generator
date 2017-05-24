'use strict';

var env = process.env.NODE_ENV;
var dir = env === 'production' ? 'lib' : 'src';

module.exports = require(`./${dir}/index/index`)();
