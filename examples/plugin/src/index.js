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

  log('You are using the default generated configuration for the `plugin` plugin (in ' + __dirname + ').');
  log('This means this plugin has no effect currently.');
  log('For more information how to use middleware see https://docs.feathersjs.com/guides/creating-a-plugin.html');
  log('');

  var Service = function Service() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Service);

    this.options = options;
  };

  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    log('generated plugin plugin executed');
    options.ran = true;
    return new Service(options);
  };
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
module.exports = exports['default'];