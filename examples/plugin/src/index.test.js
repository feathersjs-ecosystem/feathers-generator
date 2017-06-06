'use strict';

var assert = require('assert');
var createMiddleware = require('./plugin');

describe('plugin middleware tests', function () {
  it('middleware ran', function () {
    var mw = createMiddleware();
    assert.equal(mw({}).ran, true);
  });
});