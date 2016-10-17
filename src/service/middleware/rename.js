import Debug from 'debug';

const debug = Debug('feathers-generator:rename');

// Add to use property on feathers.json if --mount defined

export default function(options) {

  return function mount(files, metalsmith, done){

    debug(`Re-naming service templates to "${options.name}"`);

    for(var k in files) {
      files[k.replace('service', options.name)] = files[k];
      delete files[k];
    }
    done();

  };
}
