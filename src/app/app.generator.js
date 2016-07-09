const fs = require('fs-extra');
const path = require('path');
const Metalsmith = require('metalsmith');
const debug = require('debug')('feathers-generator:app');
const exists = require('../utils/exists');
const evaluate = require('../utils/eval');

const meta = require('./meta.json');
const TEMPLATE_PATH = path.resolve(__dirname, 'templates');

class AppGenerator {
  constructor(options = {}) {
    this.options = options;
    this.pkg = {};
    this.config = {
      default: {},
      staging: {},
      production: {}
    };

    this.loadAppConfigs();
    this.loadPackageJSON();
  }

  loadAppConfigs() {
    // TODO (EK): Maybe make generic and just read any JSON files in the config folder
    const paths = {
      default: path.join(this.options.root, 'config', 'default.json'),
      staging: path.join(this.options.root, 'config', 'staging.json'),
      production: path.join(this.options.root, 'config', 'production.json')
    };

    // Read in any existing feathers project configs and store them for later use
    for (let key of Object.keys(paths)) {
      const filepath = paths[key];

      debug(`Attempting to read in ${filepath}`)
      
      if (!exists(filepath)) {
        debug(`${filepath} does not exist`);
        continue;
      }
      
      try {
        this.config[key] = fs.readJsonSync(filepath);
      }
      catch(error) {
        debug(`Error reading ${filepath}`, error);
      }
    }

    // debug('configs', this.config);
  }

  loadPackageJSON() {
    const filepath = path.join(this.options.root, 'package.json');

    if (!exists(filepath)) {
      debug(`${filepath} does not exist`);
      return;
    }

    try {
      this.pkg = fs.readJsonSync(filepath);
    }
    catch(error) {
      debug(`Error reading ${filepath}`, error);
    }

    // debug('package.json', this.pkg);
  }

  getQuestions() {
    // debug('Evaluating questions', meta.prompts);

    const data = Object.assign({}, { options: this.options, config: this.config, pkg: this.pkg });
    
    try {
      const questions = meta.prompts.map(prompt => {
        const question = Object.assign({}, prompt);
        
        // If an explicit default is provided in the meta data
        // use that, otherwise use any previously saved option
        // by default.
        if (prompt.default) {
          question.default = evaluate(prompt.default, data);
        }
        else {
          question.default = data.options[prompt.name];
        }

        // Are these eval() calls dangerous? They might be if someone
        // maliciously had a package that executed a shell script.
        // TODO (EK): Look at escaping these.
        if (prompt.when) {
          question.when = function(answers) {
            const {options, config, pkg} = data;
            return eval(prompt.when);
          };
        }

        if (prompt.filter) {
          question.filter = function(answers) {
            const {options, config, pkg} = data;
            return eval(prompt.filter);
          };
        }

        if (prompt.validate) {
          question.validate = function(answers) {
            const {options, config, pkg} = data;
            return eval(prompt.validate);
          };
        }

        return question;
      });

      return Promise.resolve(questions);
    }
    catch(error) {
      return Promise.reject(error);
    }
  }

  /*
   * Takes in a config object provided by a CLI or UI.
   * Copies appropriate template files with values injected
   * that are passed in the config object.
   *
   * Returns a list of dependencies to be installed
   */
  generate(answers) {
    this.options = Object.assign({}, this.options, answers);

    // This is where Metalsmith does the generation
    debug('New options after questions', this.options);

    return Promise.resolve([]);
  }

}

module.exports = function(options) {

  return new AppGenerator(options);

  // TODO (EK): Check for args to see which type of generator we are going to call
  // 1. look up generator
  // 2. Read in existing config's
  // 3. Read in existing package.json
  // 3. Read in generator meta.json
  // 4. Prompt user accordingly
  // 5. Send answers back to generator
  // 6. Copy template files with answers to appropriate paths (paths to app possibly passed by the CLI)
  // 6. re-write existing config, package.json and feathers.json files
  // 7. install npm modules
  

  // const pluginTemplates = Metalsmith(path.join(__dirname, 'templates'));

  // return function drafts(files, metalsmith, done){
  //   for (var file in files) {
  //     if (files[file].draft) delete files[file];
  //   }
  //   done();
  // };
};
