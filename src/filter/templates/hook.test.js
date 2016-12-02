const assert = require('assert');
const createHook = require('./{{options.name}}');

describe('{{options.name}} hook tests', function() {
  it('hook ran', function() {
    const hook = createHook();

    assert.equal(hook({}).ran, true);
  });
});
