const assert = require('assert');
const app = require('../../app');

describe('{{options.name}} service tests', function() {
  before(function(done) {
    // Wait for application bootstrap before running any tests
    app.bootstrap.then(done).catch(done);
  });

  it('initialized the service', function() {
    assert.ok(app.service('{{options.name}}'));
  });
});
