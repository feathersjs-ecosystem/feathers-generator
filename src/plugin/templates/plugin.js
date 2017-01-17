module.exports = function () {
  function log () {
    if (process.env.NODE_ENV !== 'testing') {
      console.log(...arguments);
    }
  }

  log(`You are using the default generated configuration for the \`{{options.name}}\` plugin (in ${__dirname}).`);
  log(`This means this plugin has no effect currently.`);
  log(`For more information how to use middleware see https://docs.feathersjs.com/guides/creating-a-plugin.html`);
  log(``);

  class Service {
    constructor (options = {}) {
      this.options = options;
    }
  }

  return function (options = {}) {
    log(`generated {{options.name}} plugin executed`);
    options.ran = true;
    return new Service(options);
  };
};
