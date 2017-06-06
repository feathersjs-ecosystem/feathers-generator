'use strict';

var assert = require('assert');
var createHook = require('./hook');

describe('hook hook tests', function () {
  it('hook ran', function () {
    var hook = createHook();

    assert.equal(hook({}).ran, true);
  });
});