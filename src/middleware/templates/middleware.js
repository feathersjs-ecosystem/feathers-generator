module.exports = function () {
  function log () {
    if (process.env.NODE_ENV !== 'testing') {
      console.log(...arguments);
    }
  }

  log(`You are using the default generated configuration for the \`{{options.name}}\` middleware (in ${__dirname}).`);
  log(`This means this middleware has no effect currently.`);
  log(`For more information how to use middleware see https://docs.feathersjs.com/middleware/readme.html`);
  log(``);

  return function (data, connection, hook) {
    log(`generated {{options.name}} middleware executed`);
    data.ran = true;
    return data;
  };
};
