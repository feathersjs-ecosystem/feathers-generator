const path = require('path');
const debug = require('debug')('feathers-generator:hook');

// Metalsmith + middleware
const Metalsmith = require('metalsmith');
// const mount = require('./middleware/mount');

const TEMPLATE_PATH = path.resolve(__dirname, 'templates');
const render = require('../utils/render');
const json = require('../utils/json');
const ask = require('../utils/ask');

import { hooks as rename } from '../utils/rename';
import { hooks as mount } from '../utils/mount';

export default function (prompt, done, options) {
  const metalsmith = Metalsmith(TEMPLATE_PATH);
  const SERVICE_PATH = path.resolve(options.path);
  const FEATHERS_PATH = 'src/feathers.json';
  const MOUNT_PATH = options.mount || 'src/feathers.json';
  const CONFIG_PATH = options.config || 'config';

  // if generating as standalone, use src dir
  let HOOK_PATH;
  if (!options.mount && options.path === '.') {
    HOOK_PATH = path.resolve(options.path, 'src');
  } else {
    HOOK_PATH = path.resolve(SERVICE_PATH, 'hooks');
  }

  debug('Template path: %s', TEMPLATE_PATH);
  debug('Service path: %s', SERVICE_PATH);
  debug('Hook path: %s', HOOK_PATH);
  debug('Feathers path: %s', FEATHERS_PATH);
  debug('Mount path: %s', MOUNT_PATH);
  debug('Config path: %s', CONFIG_PATH);

  metalsmith
    .metadata({ options })
    // Read in any existing config files and attach to metadata
    // TODO slajax or EK refactor option args into util fn so not duplicated
    .use(json({
      meta: path.resolve(__dirname, 'meta.json'),
      default: path.join(options.root, CONFIG_PATH, 'default.json'),
      staging: path.join(options.root, CONFIG_PATH, 'staging.json'),
      production: path.join(options.root, CONFIG_PATH, 'production.json'),
      feathers: path.join(options.root, FEATHERS_PATH),
      service: path.join(options.root, MOUNT_PATH),
      pkg: path.join(options.root, 'package.json')
    }))
    .clean(false)
    .source(TEMPLATE_PATH)
    .destination(HOOK_PATH)
    .use(ask({ callback: prompt }))
    .use(rename(options)) // rename files for convention
    .use(mount(options)) // mount service for bootstrap
    .use(render()) // pass files through handlebars templating
    .build(function (error) {
      if (error) {
        return done(error);
      }

      let message = `Successfully generated "${options.name}" ${options.template} at ${HOOK_PATH}`;
      debug(message);
      done(null, message);
    });
};
