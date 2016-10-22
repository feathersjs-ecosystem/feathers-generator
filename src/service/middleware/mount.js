import fs from 'fs';
import path from 'path';
import Debug from 'debug';
import merge from 'lodash.merge';

let debug = Debug('feathers-generator:mount');

// Add to use property on feathers.json if --mount defined

export default function (options) {
  return function mount (files, metalsmith, done) {
    // if not mounting, skip
    if (!options.mount) {
      return done(null);
    }

    // @slajax refactor this into src/util/configuration so we have getter/setters for async changing of all configs
    // load existing root config
    let feathersConfigPath = path.resolve(options.mount);
    let feathersConfigDirname = path.dirname(feathersConfigPath);
    let existingFeathersConfig = require(feathersConfigPath);

    // add new service to root config for bootstrapping
    let serviceConfigPath = path.resolve(options.path, options.name, options.name + '.json.js');
    let relativeServiceConfigPath = path.relative(feathersConfigDirname, serviceConfigPath);
    let feathersConfigChanges = { use: { ['/' + options.name]: { require: './' + relativeServiceConfigPath } } };
    let newFeathersConfig = merge(existingFeathersConfig, feathersConfigChanges);

    // write out new root config so service is bootstrapped (respect white space)
    fs.writeFile(feathersConfigPath, JSON.stringify(newFeathersConfig, null, 2), function (err) {
      if (err) { return done(err); }
      debug(`Successfully mounted "${options.name}" service to feathers at ${feathersConfigPath}`);
      debug(`Service config can be found at ${relativeServiceConfigPath}`);
      done();
    });
  };
}
