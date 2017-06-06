'use strict';

var assert = require('assert');
var createFilter = require('./filter');

describe('filter filter tests', function () {
  it('filter ran', function () {
    var filter = createFilter();

    assert.equal(filter({}).ran, true);
  });
});