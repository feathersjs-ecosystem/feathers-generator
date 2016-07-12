import path from 'path';
import fs from 'fs-extra';
import Debug from 'debug'
import merge from 'lodash.merge';

const debug = Debug('feathers-generator:feathers-json');

// TODO (EK): Handle feathers.json
// - read in template/feathers.json
// - plug in this.options in to template/feathers.json
// - Merge this.feathers with rendered feathers.json template
// - write out updated feathers.json to this.options.root

export default function(options) {
  return function feathersJSON(files, metalsmith, done){
    const meta = metalsmith.metadata();
    const { providers, cors, whitelist } = meta.options;
    const existing = meta.feathers;
    let template = files['server/feathers.json'];

    if (template && template.contents) {
      try {
        template = JSON.parse(template.contents.toString());
      }
      catch(error) {
        return done(error);
      }
    }
    else {
      template = { plugins: [] };
    }

    // Add appropriate dependencies, service, and plugin configurations
    if (cors) {
      template.before['/'].push({ "require": "./middleware/cors", "options": whitelist ? [{ "whitelist": "config.whitelist" }] : [] });
    }

    template.before['/'].push({ "require": "./middleware/static", "options": [{ "path": "config.static" }] });
    template.before['/'].push({ "require": "./middleware/favicon", "options": [{ "path": "config.static" }] });
    
    if (providers.indexOf('socketio') !== -1) {
      template.plugins.push({ require: 'feathers-socketio', options: [] });
    }

    if (providers.indexOf('primus') !== -1) {
      template.plugins.push({
        require: 'feathers-primus',
        options: {
          transformer: 'websockets'
        }
      });
    }

    if (providers.indexOf('rest') !== -1) {
      template.plugins.push({ require: 'feathers-rest', options: [] });
      template.before['/'].push({ "require": "./middleware/body-parser", "options": [{ "extended": true }] });
    }
    else {
      delete files['server/middleware/body-parser'];
    }

    const newJSON = merge(template, existing);

    files['server/feathers.json'].contents = JSON.stringify(newJSON, null, 2);

    done();
  };
};