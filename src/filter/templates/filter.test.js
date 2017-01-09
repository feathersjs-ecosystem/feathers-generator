const assert = require('assert');
const createFilter = require('./{{options.name}}');

describe('{{options.name}} filter tests', function () {
  it('filter ran', function () {
    const filter = createFilter();

    assert.equal(filter({}).ran, true);
  });
});
