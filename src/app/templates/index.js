'use strict';

var env = process.env.NODE_ENV;
var dir = env === ('production' || 'testing') ? 'lib' : 'src';

const app = require(`./${dir}/app`);

app.start().then(() =>
  app.info(`Application listening on port ${app.config.get('port')}`)
).catch(e => console.error(e));
