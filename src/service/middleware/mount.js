import fs from 'fs';
import path from 'path';
import Debug from 'debug';
import merge from 'lodash.merge';

const debug = Debug('feathers-generator:mount');

// Add to use property on feathers.json if --mount defined

export default function(options) {

  return function mount(files, metalsmith, done){

    // if not mounting, skip
    if(!options.mount) {
      return done(null);
    }

    const meta = metalsmith.metadata();
    const answers = meta.answers;

    // @slajax refactor this into src/util/configuration so we have getter/setters for async changing of all configs
    // load existing root config
    const feathersConfigPath = path.resolve(options.mount);
    const existingFeathersConfig = require(feathersConfigPath);

    // add new service to root config for bootstrapping
    const serviceConfigPath = path.resolve(options.path, options.name, options.name+'.json.js' );
    const feathersConfigChanges = { use: { ['/'+options.name]: serviceConfigPath } };
    const newFeathersConfig = merge(feathersConfigChanges, existingFeathersConfig);

    // write out new root config so service is bootstrapped (respect white space)
    fs.writeFile(feathersConfigPath, JSON.stringify(newFeathersConfig, null, 2), function(err) {
      for(var k in files) {
        files[k.replace('service', options.name)] = files[k];
        delete files[k]
      }
      done(err);

    });

  };
};
