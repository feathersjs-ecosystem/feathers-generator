'use strict';

var assert = require('assert');
var app = require('../../app');

describe('example service tests', function () {
  before(function (done) {
    // Wait for application bootstrap before running any tests
    app.bootstrap.then(done).catch(done);
  });

  it('initialized the service', function () {
    assert.ok(app.service('example'));
  });
});