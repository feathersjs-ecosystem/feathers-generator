module.exports = function () {
  function log () {
    if (process.env.NODE_ENV !== 'testing') {
      console.log(...arguments);
    }
  }

  log(`You are using the default filter for the \`{{options.name}}\` service (in ${__dirname}).`);
  log(`This means all clients will get every real-time event.`);
  log(`For more information how to filter events see http://docs.feathersjs.com/real-time/filtering.html`);
  log(``);

  return function (data, connection, hook) {
    log(`default {{options.name}} filter executed`);
    return data;
  };
};
