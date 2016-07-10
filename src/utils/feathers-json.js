import path from 'path';
import fs from 'fs-extra';
import Debug from 'debug'
import merge from 'lodash.merge';

const debug = Debug('feathers-generator');

// TODO (EK): Handle feathers.json
// - read in template/feathers.json
// - plug in this.options in to template/feathers.json
// - Merge this.feathers with rendered feathers.json template
// - write out updated feathers.json to this.options.root

export default function(options) {
  return function feathersJSON(files, metalsmith, done){
    const meta = metalsmith.metadata();
    const {name, description, babel, linter} = meta.options;
    const existing = meta.feathers;
    let template = files['feathers.json'];

    if (template && template.contents) {
      try {
        template = JSON.parse(template.contents.toString());
      }
      catch(error) {
        return done(error);
      }
    }
    else {
      template = {};
    }

    // TODO (EK): Add appropriate dependencies, service, and plugin configurations


    const newJSON = merge(template, existing);

    files['feathers.json'].contents = JSON.stringify(newJSON, null, 2);

    done();
  };
};