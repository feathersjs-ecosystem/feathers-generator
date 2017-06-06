'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  function log() {
    if (process.env.NODE_ENV !== 'testing') {
      var _console;

      (_console = console).log.apply(_console, arguments);
    }
  }
  return function (hook) {
    hook.ran = true;
    log('generated hook hook was successfully run');
    return hook;
  };
};

;
module.exports = exports['default'];