const assert = require('assert');
const createMiddleware = require('./{{options.name}}');

describe('{{options.name}} middleware tests', function () {
  it('middleware ran', function (done) {
    const mw = createMiddleware();
    mw({}, {}, function() {
      assert(true);
      done();
    });
  });
});
