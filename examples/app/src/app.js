'use strict';

const feathers = require('feathers');
const path = require('path');
const bootstrap = require('feathers-bootstrap');

const app = feathers()
  .configure(bootstrap(path.resolve(__dirname, 'feathers.json')));

export default app;
