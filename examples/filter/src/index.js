'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  function log() {
    if (process.env.NODE_ENV !== 'testing') {
      var _console;

      (_console = console).log.apply(_console, arguments);
    }
  }

  log('You are using the default generated configuration for the `filter` filter (in ' + __dirname + ').');
  log('This means all clients will get every real-time event.');
  log('For more information how to filter events see http://docs.feathersjs.com/real-time/filtering.html');
  log('');

  return function (data, connection, hook) {
    log('generated filter filter executed');
    data.ran = true;
    return data;
  };
};

;
module.exports = exports['default'];