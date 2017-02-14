'use strict';

const app = require('./server/app');

app.start().then(() =>
  app.info(`Application listening on port ${app.config.get('port')}`)
).catch(e => app.error(e));
