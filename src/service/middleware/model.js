import { spawn } from 'child_process';

const path = require('path');
const each = require('async').each;
const match = require('multimatch');
const debug = require('debug')('feathers-generator:model');

export default function (options) {
  return function mount (files, metalsmith, done) {
    const meta = metalsmith.metadata();
    let model = meta.answers.model.name;
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
        if (!match(file, `models/${model}/**/*.js`).length) {
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

    if (!deps || ~deps.length || typeof deps !== 'object') {
      return done();
    }

    let depNames = deps.join(' ');
    let root = path.resolve(options.root, '../../');
    debug(`Dependencies found, running: 'npm i --save ${depNames}' in ${root}`);
    const npm = spawn('npm', ['i', '--save', ...deps], {stdio: 'inherit', cwd: root});

    npm.on('close', function (code) {
      if (code !== 0) {
        debug(`'npm i --save ${depNames}' exited with code ${code}`);
        return done(new Error('There was a problem installing the dependencies'));
      } else {
        debug(`Dependencies have been installed and saved to package.json`);
        return done();
      }
    });
  };
}
