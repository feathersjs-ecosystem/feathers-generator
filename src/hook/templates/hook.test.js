const assert = require('assert');
const createHook = require('./{{name}}');

describe('{{name}} hook tests', function() {
  it('hook ran', function() {
    const hook = createHook();

    assert.equal(hook({}).ran, true);
  });
});
