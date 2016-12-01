'use strict';

// @slajax TODO: re-write this logger so it scales
const winston = require('winston');

module.exports = function (options = {}) {
  return function (error, req, res, next) {
    if (error) {
      const message = `${error.code ? `(${error.code}) ` : ''} Route: ${req.url} - ${error.message}`;

      if (error.code === 404) {
        if (process.env.NODE_ENV !== 'testing') {
          winston.info(message);
        }
      } else {
        if (process.env.NODE_ENV !== 'testing') {
          winston.error(message);
          winston.info(error.stack);
        }
      }
    }

    next(error);
  };
};
