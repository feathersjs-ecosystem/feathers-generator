const each = require('async').each;
const match = require('multimatch');
const debug = require('debug')('feathers-generator:rename');

export default function (options) {
  return function rename (files, metalsmith, done) {
    const meta = metalsmith.metadata();
    let model = meta.answers.model.template;

    each(
      Object.keys(files),
      function (file, next) {
        if (match(file, ['service.json', 'service.*.js']).length) {
          let newName = file.replace('service', options.name);
          debug(`Renaming template ${file} to ${newName}`);
          files[newName] = files[file];
          delete files[file];
        }

        if (match(file, `models/${model}/**/*.js`).length) {
          let newModelName = file.replace(`models/${model}/templates/service`, options.name);
          debug(`Renaming template ${file} to ${newModelName}`);
          files[newModelName] = files[file];
          delete files[file];
        }
        next();
      }
    );

    done();
  };
}
