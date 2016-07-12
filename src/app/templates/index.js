'use strict';

const app = require('./server/app');

app.start().then(() =>
  console.log(`Application listening on port ${app.config.get('port')}`)
).catch(e => console.error(e));
