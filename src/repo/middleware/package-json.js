import Debug from 'debug';
import merge from 'lodash.merge';
import { spawnSync as spawn } from 'child_process';

const debug = Debug('feathers-generator'); // eslint-disable-line

// - read in template/package.json
// - plug user answers into template/package.json
// - Merge this.pkg with package.json template
// - write out updated package.json to this.options.root

export default function (options) {
  return function packageJSON (files, metalsmith, done) {
    const metadata = metalsmith.metadata();
    const {name, description} = metadata.options;
    const {babel} = metadata.answers;
    const meta = metadata.meta;
    const existing = metadata.pkg;
    let template = files['package.json'];

    if (template && template.contents) {
      try {
        template = JSON.parse(template.contents.toString());
      } catch (error) {
        return done(error);
      }
    } else {
      template = { scripts: {} };
    }

    template.name = name;
    template.description = description;

    // Push scripts onto template based on users answers
    // TODO (EK): Support other testing frameworks like Ava?
    // TODO (EK): Check that we don't have a dependency > these ones already installed
    // TODO (EK): Write these updates to the final file, not just the template file

    // Dependencies
    template.dependencies = Object.assign(
      {},
      meta.dependencies.common
    );

    // Development Dependencies
    template.devDependencies = Object.assign(
      {},
      meta.devDependencies.common,
      meta.devDependencies.babel
    );

    // Scripts
    if (babel) {
      template.scripts.start = `babel-node index.js`;
      template.scripts.mocha = `NODE_ENV=testing mocha $(find {server,test} -name '*.test.js') --compilers js:babel-core/register --recursive`;
    } else {
      template.scripts.start = `node index.js`;
      template.scripts.mocha = `NODE_ENV=testing mocha $(find {server,test} -name '*.test.js') --recursive`;
    }

    // if not yarn, fall back to npm
    let yarn = spawn('yarn', ['--version']);
    if(yarn.error) {
      delete template['engines']['yarn'];
    }

    const newJSON = merge(template, existing);
    files['package.json'].contents = JSON.stringify(newJSON, null, 2);

    done();
  };
}
