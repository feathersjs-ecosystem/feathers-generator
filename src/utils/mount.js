import fs from 'fs';
import path from 'path';
import Debug from 'debug';
import merge from 'object.assign';

let debug = Debug('feathers-generator:mount');

// Add to use property on feathers.json if --mount defined

export function services (options) {
  return function mount (files, metalsmith, done) {
    // if not mounting, skip
    if (!options.mount) {
      return done(null);
    }

    // @slajax refactor this into src/util/configuration so we have getter/setters for async changing of all configs
    // load existing root config
    let feathersConfigPath = path.resolve(options.mount);
    let feathersConfigDirname = path.dirname(feathersConfigPath);

    debug(`Attempting to require feathers bootstrap at ${feathersConfigPath}`);
    let existingFeathersConfig = require(feathersConfigPath);

    // add new service to root config for bootstrapping
    let serviceConfigPath = path.resolve(options.path, options.name, options.name + '.json');
    let relativeServiceConfigPath = path.relative(feathersConfigDirname, serviceConfigPath);
    let feathersConfigChanges = { use: { ['/' + options.name]: { require: './' + relativeServiceConfigPath } } };
    let newFeathersConfig = merge(existingFeathersConfig, feathersConfigChanges);

    debug(`Attempting to mount ${options.name} service to feathers at ${feathersConfigPath}`);

    // write out new root config so service is bootstrapped (respect white space)
    fs.writeFile(feathersConfigPath, JSON.stringify(newFeathersConfig, null, 2), function (err) {
      if (err) {
        debug(err.stack);
        return done(err);
      }
      debug(`Successfully mounted "${options.name}" service to feathers at ${feathersConfigPath}`);
      debug(`Service config can be found at ${relativeServiceConfigPath}`);
      done();
    });
  };
}

export function hooks (options) {
  return function mount (files, metalsmith, done) {
    const metadata = metalsmith.metadata();

    let serviceConfigPath = path.resolve(options.mount);
    let serviceConfigDirname = path.dirname(serviceConfigPath);

    let relativeServiceConfigPath = path.relative(serviceConfigDirname, serviceConfigPath);
    let existingServiceConfig = require(serviceConfigPath);
    let serviceConfigChanges = {};

    debug(`Attempting to mount ${options.name} hook to service at ${serviceConfigPath}`);

    metadata.answers.binding.map((b) => {
      debug(`Compiling changes for ${b} bindings`);

      if (typeof serviceConfigChanges[b] === 'undefined') {
        serviceConfigChanges[b] = {};
      }

      metadata.answers.method.map((m) => {
        debug(`Compiling changes for ${b} bindings and ${m} method`);

        let hook = {
          require: './hooks/' + options.name + '.js',
          options: []
        };

        if (typeof serviceConfigChanges[b][m] === 'undefined') {
          serviceConfigChanges[b][m] = [];
        }
        serviceConfigChanges[b][m].push(hook);
      });
    });

    debug('Proposed service config changes', serviceConfigChanges);
    let newServiceConfig = merge(existingServiceConfig, serviceConfigChanges);
    debug('Final service config to be written', newServiceConfig);

    // write out new root config so service is bootstrapped (respect white space)
    fs.writeFile(serviceConfigPath, JSON.stringify(newServiceConfig, null, 2), function (err) {
      if (err) {
        debug(err.stack);
        return done(err);
      }
      debug(`Successfully mounted "${options.name}" hook to service at ${serviceConfigPath}`);
      debug(`Service config can be found at ${relativeServiceConfigPath}`);
      done();
    });

    done();
  };
}

export function filter (options) {
  return function mount (files, metalsmith, done) {
    const metadata = metalsmith.metadata();

    let serviceConfigPath = path.resolve(options.mount);
    let serviceConfigDirname = path.dirname(serviceConfigPath);

    let relativeServiceConfigPath = path.relative(serviceConfigDirname, serviceConfigPath);
    let existingServiceConfig = require(serviceConfigPath);
    let serviceConfigChanges = { filters: {} };

    debug(`Attempting to mount ${options.name} hook to service at ${serviceConfigPath}`);

    metadata.answers.method.map((m) => {
      debug(`Compiling changes for ${m} method`);

      let filters = {
        require: './filters/' + options.name + '.js',
        options: []
      };

      if (typeof serviceConfigChanges['filters'][m] === 'undefined') {
        serviceConfigChanges['filters'][m] = [];
      }
      serviceConfigChanges['filters'][m].push(filters);
    });

    debug('Proposed service config changes', serviceConfigChanges);
    let newServiceConfig = merge(existingServiceConfig, serviceConfigChanges);
    debug('Final service config to be written', newServiceConfig);

    // write out new root config so service is bootstrapped (respect white space)
    fs.writeFile(serviceConfigPath, JSON.stringify(newServiceConfig, null, 2), function (err) {
      if (err) {
        debug(err.stack);
        return done(err);
      }
      debug(`Successfully mounted "${options.name}" hook to service at ${serviceConfigPath}`);
      debug(`Service config can be found at ${relativeServiceConfigPath}`);
      done();
    });

    done();
  };
}

export function middleware (options) {
  return function mount (files, metalsmith, done) {
    const metadata = metalsmith.metadata();

    let serviceConfigPath = path.resolve(options.mount);
    let serviceConfigDirname = path.dirname(serviceConfigPath);

    let relativeServiceConfigPath = path.relative(serviceConfigDirname, serviceConfigPath);
    let existingServiceConfig = require(serviceConfigPath);
    let serviceConfigChanges = {};

    debug(`Attempting to mount ${options.name} middleware to service at ${serviceConfigPath}`);

    metadata.answers.binding.map((b) => {
      debug(`Compiling changes for ${b} bindings`);

      if (typeof serviceConfigChanges[b] === 'undefined') {
        serviceConfigChanges[b] = {};
      }

      metadata.answers.method.map((m) => {
        debug(`Compiling changes for ${b} bindings and ${m} method`);

        let hook = {
          require: path.resolve(options.root, 'server/middleware', options.name + '.js'),
          options: []
        };

        if (typeof serviceConfigChanges[b][m] === 'undefined') {
          serviceConfigChanges[b][m] = [];
        }
        serviceConfigChanges[b][m].push(hook);
      });
    });

    debug('Proposed service config changes', serviceConfigChanges);
    let newServiceConfig = merge(existingServiceConfig, serviceConfigChanges);
    debug('Final service config to be written', newServiceConfig);

    // write out new root config so service is bootstrapped (respect white space)
    fs.writeFile(serviceConfigPath, JSON.stringify(newServiceConfig, null, 2), function (err) {
      if (err) {
        debug(err.stack);
        return done(err);
      }
      debug(`Successfully mounted "${options.name}" middleware to service at ${serviceConfigPath}`);
      debug(`Service config can be found at ${relativeServiceConfigPath}`);
      done();
    });

    done();
  };
}

