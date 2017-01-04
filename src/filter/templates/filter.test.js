const assert = require('assert');
const createFilter = require('./{{options.name}}');

describe('{{options.name}} filter tests', function() {
  it('hook ran', function() {
    const hook = createFilter();

    assert.equal(filter({}).ran, true);
  });
});
