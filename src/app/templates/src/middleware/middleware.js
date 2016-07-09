const serveStatic = require('feathers').static;
const compress = require('compression');
const bodyParser = require('body-parser');
const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

module.exports = function(options = {}) {
  return function() {
    const app = this;

    app.use(compress());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    if (options.public) {
      app.use('/', serveStatic(options.public));
    }

    // Error handling and logging middleware
    app.use(notFound());
    app.use(logger(app));
    app.use(handler());
  };
};
