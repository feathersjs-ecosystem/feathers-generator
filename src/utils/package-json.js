import path from 'path';
import fs from 'fs-extra';
import Debug from 'debug'
import merge from 'lodash.merge';

const debug = Debug('feathers-generator');

// - read in template/package.json
// - plug user answers into template/package.json
// - Merge this.pkg with package.json template
// - write out updated package.json to this.options.root

export default function(options) {
  
  return function packageJSON(files, metalsmith, done){
    const meta = metalsmith.metadata();
    const {name, description, babel, linter} = meta.options;
    const existing = meta.pkg;
    let template = files['package.json'];

    if (template && template.contents) {
      try {
        template = JSON.parse(template.contents.toString());
      }
      catch(error) {
        return done(error);
      }
    }
    else {
      template = { scripts: {} };
    }

    // Push scripts onto template based on users answers
    // TODO (EK): Support other testing frameworks like Ava?
    if (babel) {
      template.scripts.start = `babel-node index.js`;
      template.scripts.mocha = `mocha test/ --compilers js:babel-core/register --recursive`;
    }
    else {
      template.scripts.start = `node index.js`;
      template.scripts.mocha = `mocha test/ --recursive`;
    }

    switch(linter) {
      case 'jshint':
        template.scripts.lint = `jshint src/. test/. --config`;
        template.scripts.test = `npm run lint && npm run mocha`;
        break;
      case 'eslint':
        template.scripts.lint = `eslint src/. test/. --env mocha`;
        template.scripts.test = `npm run lint && npm run mocha`;
        break;
    }

    const newJSON = merge(template, existing, {name, description});

    files['package.json'].contents = JSON.stringify(newJSON, null, 2);

    done();
  };
};