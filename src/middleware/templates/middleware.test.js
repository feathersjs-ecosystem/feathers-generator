const assert = require('assert');
const createMiddleware = require('./{{options.name}}');

describe('{{options.name}} middleware tests', function () {
  it('middleware ran', function () {
    const mw = createMiddleware();
    assert.equal(mw({}).ran, true);
  });
});
