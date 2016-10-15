module.exports = function(config) {
  return {
    require: config.require,
    options: {
      Model: `./${config.name}.model` ,
      options: [config.model || {}]
    },
    filter: {
      all: { require: `./${config.name}.filter` }
    },
    before: [{ require: './hooks/before' }],
    after: [{ require: './hooks/after' }]
  };
};
