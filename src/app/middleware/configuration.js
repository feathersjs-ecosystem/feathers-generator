import Debug from 'debug'
import merge from 'lodash.merge';

const debug = Debug('feathers-generator:configuration');

// TODO (EK): Handle config files
// - plug in this.options in to template/config files
// - Merge this.config with rendered config template
// - write out updated config files to this.options.root/config

export default function(options) {
  return function configuration(files, metalsmith, done){
    const meta = metalsmith.metadata();
    const { whitelist } = meta.answers;
    const existing = meta.default;
    let template = files['config/default.json'];

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

    if (whitelist) {
      template.whitelist = whitelist;
    }

    const newJSON = merge(template, existing);

    files['config/default.json'].contents = JSON.stringify(newJSON, null, 2);

    done();
  };
};
