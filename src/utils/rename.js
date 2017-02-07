const path = require('path');
const each = require('async').each;
const match = require('multimatch');
const debug = require('debug')('feathers-generator:rename');

export function services (options) {
  return function rename (files, metalsmith, done) {
    const meta = metalsmith.metadata();

    // if generating standalone and this is default service, use index
    let index = (path.parse(options.root).name === options.name && options.path === '.');

    each(
      Object.keys(files),
      function (file, next) {
        if (match(file, ['service.json', 'service.*.js']).length) {
          let newName;
          if(index) {
            newName = file.replace('service', 'index');
          } else {
            newName = file.replace('service', options.name);
          }

          debug(`Renaming template ${file} to ${newName}`);
          files[newName] = files[file];
          delete files[file];
        }

        // skip if no model selected
        if (meta.answers.model === false) {
          return next();
        }

        let model = meta.answers.model.template;
        if (match(file, `models/${model}/templates/*.*`).length) {
          let newModelName = file.replace(`models/${model}/templates/service`, index ? 'index' : options.name);
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

export function hooks (options) {
  return function rename (files, metalsmith, done) {
    // if generating standalone and this is default service, use index
    let index = (path.parse(options.root).name === options.name && options.path === '.');

    each(
      Object.keys(files),
      function (file, next) {
        if (match(file, ['*.js']).length) {
          let newName;
          if(index) {
            newName = file.replace('hook', 'index');
          } else {
            newName = file.replace('hook', options.name);
          }
          debug(`Renaming template ${file} to ${newName}`);
          files[newName] = files[file];
          delete files[file];
        }
      }
    );

    done();
  };
}

export function filter (options) {
  return function rename (files, metalsmith, done) {
    // if generating standalone and this is default service, use index
    let index = (path.parse(options.root).name === options.name && options.path === '.');

    each(
      Object.keys(files),
      function (file, next) {
        if (match(file, ['*.js']).length) {
          let newName;
          if(index) {
            newName = file.replace('filter', 'index');
          } else {
            newName = file.replace('filter', options.name);
          }
          debug(`Renaming template ${file} to ${newName}`);
          files[newName] = files[file];
          delete files[file];
        }
      }
    );

    done();
  };
}

export function middleware (options) {
  return function rename (files, metalsmith, done) {
    // if generating standalone and this is default service, use index
    let index = (path.parse(options.root).name === options.name && options.path === '.');

    each(
      Object.keys(files),
      function (file, next) {
        if (match(file, ['*.js']).length) {
          let newName;
          if(index) {
            newName = file.replace('middleware', 'index');
          } else {
            newName = file.replace('middleware', options.name);
          }
          debug(`Renaming template ${file} to ${newName}`);
          files[newName] = files[file];
          delete files[file];
        }
      }
    );

    done();
  };
}

export function plugin (options) {
  return function rename (files, metalsmith, done) {
    // if generating standalone and this is default service, use index
    let index = (path.parse(options.root).name === options.name && options.path === '.');

    each(
      Object.keys(files),
      function (file, next) {
        if (match(file, ['*.js']).length) {
          let newName;
          if(index) {
            newName = file.replace('plugin', 'index');
          } else {
            newName = file.replace('plugin', options.name);
          }
          debug(`Renaming template ${file} to ${newName}`);
          files[newName] = files[file];
          delete files[file];
        }
      }
    );

    done();
  };
}
