'use strict';

const feathers = require('feathers');
const path = require('path');
const bootstrap = require('feathers-bootstrap');

const app = feathers()
  .configure(bootstrap(path.join(__dirname, 'feathers.json')));

module.exports = app;
