'use strict';

var env = process.env.NODE_ENV;
var dir = env === 'production' ? 'lib' : 'src';

var app = require('./' + dir + '/app');

app.start().then(function () {
  return app.info('Application listening on port ' + app.config.get('port'));
}).catch(function (e) {
  return console.error(e);
});
