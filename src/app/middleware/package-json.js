import Debug from 'debug';
import merge from 'lodash.merge';

const debug = Debug('feathers-generator'); // eslint-disable-line

// - read in template/package.json
// - plug user answers into template/package.json
// - Merge this.pkg with package.json template
// - write out updated package.json to this.options.root

export default function (options) {
  return function packageJSON (files, metalsmith, done) {
    const metadata = metalsmith.metadata();
    const {name, description} = metadata.options;
    const {babel, linter, providers, cors} = metadata.answers;
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
      meta.dependencies.common,
      providers.indexOf('rest') !== -1 ? meta.dependencies.rest : {},
      providers.indexOf('socketio') !== -1 ? meta.dependencies.socketio : {},
      providers.indexOf('primus') !== -1 ? meta.dependencies.primus : {},
      cors ? meta.dependencies.cors : {}
    );

    // Development Dependencies
    template.devDependencies = Object.assign(
      {},
      meta.devDependencies.common,
      babel ? meta.devDependencies.babel : {},
      linter === 'jshint' ? meta.devDependencies.jshint : {},
      linter === 'eslint' ? meta.devDependencies.eslint : {}
    );

    // Scripts
    if (babel) {
      template.scripts.start = `babel-node index.js`;
      template.scripts.mocha = `NODE_ENV=testing mocha {test/,server/**/*.test.js,server/**/**/*.test.js} --compilers js:babel-core/register --recursive`;
    } else {
      template.scripts.start = `node index.js`;
      template.scripts.mocha = `NODE_ENV=testing mocha {test/,server/**/*.test.js,server/**/**/*.test.js} --recursive`;
    }

    switch (linter) {
      case 'jshint':
        template.scripts.lint = `jshint server/. test/. --config`;
        template.scripts.test = `npm run lint && npm run mocha`;
        break;
      case 'eslint':
        template.scripts.lint = `eslint server/. test/.`;
        template.scripts.test = `npm run lint && npm run mocha`;
        break;
    }

    const newJSON = merge(template, existing);

    files['package.json'].contents = JSON.stringify(newJSON, null, 2);

    done();
  };
}
