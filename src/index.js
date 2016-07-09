// Sub-Generators
import app from './app/app.generator';
// import filter from './filter/filter.generator';
// import hook from './hook/hook.generator';
// import middleware from './middleware/middleware.generator';
// import plugin from './plugin/plugin.generator';
// import service from './service/service.generator';

const generators = {
  app,
  // filter,
  // hook,
  // middleware,
  // plugin,
  // service
};


// TODO (EK): Check for args to see which type of generator we are going to call
// 1. look up generator
// 2. Read in existing config's
// 3. Read in generator meta.json
// 4. Prompt user accordingly
// 5. Send answers back to generator
// 6. Copy template files with answers to appropriate paths (paths to app possibly passed by the CLI)
// 6. re-write existing config, package.json and feathers.json files
// 7. install npm modules


export default function(options) {
  return generators[options.template](options);
}