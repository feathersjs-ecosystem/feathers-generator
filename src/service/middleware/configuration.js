import fs from 'fs';
import path from 'path';
import Debug from 'debug';
import merge from 'lodash.merge';

const debug = Debug('feathers-generator:configuration');

// TODO (EK): Handle config files
// - plug in this.options in to template/config files
// - Merge this.config with rendered config template
// - write out updated config files to this.options.root/config

export default function(options) {

  return function configuration(files, metalsmith, done){

    const meta = metalsmith.metadata();
    const answers = meta.answers;

    // @slajax refactor this into src/util/configuration so we have getter/setters for async changing of all configs
    // load existing root config
    const feathersConfigPath = path.resolve(options.root, 'server/feathers.json');
    const existingFeathersConfig = require(feathersConfigPath);

    // add new service to root config for bootstrapping
    const serviceConfigPath = path.join('./server/services', options.name, options.name+'.json.js' );
    const feathersConfigChanges = { use: { ['/'+options.name]: serviceConfigPath } };
    const newFeathersConfig = merge(feathersConfigChanges, existingFeathersConfig);

    // write out new root config so service is bootstrapped (respect white space)
    fs.writeFile(feathersConfigPath, JSON.stringify(newFeathethersConfigrsConfig, null, 2), function(err) {
      for(var k in files) {
        files[k.replace('service', options.name)] = files[k];
        delete files[k]
      }
      done(err)

    });

  };
};
