'use strict';

export default function (/* options = {}*/) {
  return function (error, req, res, next) {
    if (error) {
      const message = `${error.code ? `(${error.code}) ` : ''} Route: ${req.url} - ${error.message}`;

      if (error.code === 404) {
        if (process.env.NODE_ENV !== 'testing') {
          req.app.info(message);
        }
      } else {
        if (process.env.NODE_ENV !== 'testing') {
          req.app.error(message);
          req.app.info(error.stack);
        }
      }
    }

    next(error);
  };
};
