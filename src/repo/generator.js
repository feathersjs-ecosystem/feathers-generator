const path = require('path');
const debug = require('debug')('feathers-generator:app');

// Metalsmith + middleware
const Metalsmith = require('metalsmith');
const moveUp = require('metalsmith-move-up');
const copy = require('metalsmith-copy');
const dotfiles = require('./middleware/dotfiles');
const packageJSON = require('./middleware/package-json');

const json = require('../utils/json');
const install = require('../utils/install');
const ask = require('../utils/ask');

const TEMPLATE_PATH = path.resolve(__dirname, 'templates');

module.exports = function (prompt, done, options) {
  const metalsmith = Metalsmith(TEMPLATE_PATH);

  metalsmith
    .metadata({ options })
    // Read in any existing config files and attach to metadata
    // TODO slajax or EK refactor option args into util fn so not duplicated
    .use(json({
      meta: path.resolve(__dirname, 'meta.json'),
      default: path.join(options.root, 'config', 'default.json'),
      staging: path.join(options.root, 'config', 'staging.json'),
      production: path.join(options.root, 'config', 'production.json'),
      pkg: path.join(options.root, 'package.json'),
      feathers: path.join(options.root, 'src', 'feathers.json')
    }))
    .use(moveUp({
      pattern: 'dotfiles/*',
      opt: { dot: true }
    }))
    .use(copy({
      move: true,
      pattern: 'gitignore.template',
      transform: file => '.gitignore'
    }))
    .use(ask({ callback: prompt }))
    .use(dotfiles())
    .use(packageJSON())
    .clean(false)
    .source(TEMPLATE_PATH) // start from template root instead of `./src` which is Metalsmith's default for `source`
    .destination(options.root)
    .build(function (error) {
      if (error) {
        return done(error);
      }

      debug(`Successfully generated ${options.template} "${options.name}" at ${options.root}`);

      const message = `
Great success! Your new repo "${options.name}" has been created.
`;

      install(options).then(() => done(null, message));
    });
};
