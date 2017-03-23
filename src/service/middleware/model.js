import { spawn } from 'child_process';

// const path = require('path');
const each = require('async').each;
const match = require('multimatch');
const install = require('../../utils/install');
const debug = require('debug')('feathers-generator:model');

export default function (options) {
  return function mount (files, metalsmith, done) {
    const meta = metalsmith.metadata();

    let model = meta.answers.model.template;
    let deps = meta.answers.model.deps;

    each(
      Object.keys(files),
      function (file, next) {
        // only filter models
        if (!match(file, 'models/**').length) {
          debug(`ignoring ${file}`);
          return next();
        }

        // filter out non-selected models
        if (!match(file, `models/${model}/templates/*.*`).length) {
          debug(`filtering out ${file}`);
          delete files[file];
        }

        // log which files are being copied
        if (files[file]) {
          debug('Found the model template', file);
        }

        return next();
      }
    );

    if (!deps || !deps.length || typeof deps !== 'object') {
      debug('No deps found, skipping install...');
      return done();
    }

    options.root.replace(options.path, '');
    install(options, deps).then(done);

  };
}
