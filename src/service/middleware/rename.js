import Debug from 'debug';

const debug = Debug('feathers-generator:rename');

// Add to use property on feathers.json if --mount defined

export default function (options) {
  return function mount (files, metalsmith, done) {

    for (var k in files) {
      if(files[k] && k.indexOf('service') > -1) {
        var newName = k.replace('service', options.name);
        debug(`Re-naming template ${k} to ${newName}`);
        files[k.replace('service', options.name)] = files[k];
        delete files[k];
      }
    }
    done();
  };
}
