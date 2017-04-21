'use strict';

const app = require('./src/app');

app.start().then(() =>
  app.info(`Application listening on port ${app.config.get('port')}`)
).catch(e => console.error(e));
