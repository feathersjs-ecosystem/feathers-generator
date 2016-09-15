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
    //const { model } = meta.answers;
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

    //if (model) {
      //template.model = model;
    //}
    //

    for(var k in files) {
      files[k.replace('service', options.name)] = files[k];
      delete files[k]
    }

    const newJSON = merge(template, existing);

    files[options.name+'.json.js'].contents = JSON.stringify(newJSON, null, 2);

    done();
  };
};
