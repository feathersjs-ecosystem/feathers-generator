module.exports = function(config) {
  return {
    require: config.require,
    options: {
      paginate: config.paginate,
      Model: config.model
    },
    filter: {
      all: { require: `./${config.name}.filter` }
    },
    before: [{ require: './hooks/before' }],
    after: [{ require: './hooks/after' }]
  };
};
