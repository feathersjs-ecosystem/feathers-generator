module.exports = {
  'src/feathers.json': function(options) {
    const config = {
      config: {},
      plugins: [],
      services: {},
      use: {
        '/': [
          { require: './middleware/not-found', options: [] },
          { require: 'feathers-errors/handler', options: [] }
        ]
      }
    };

    if(options.socketio) {
      config.plugins.push({ require: 'feathers-socketio', options: [] });
    }

    if(options.primus) {
      config.plugins.push({
        require: 'feathers-primus',
        options: {
          transformer: 'websockets'
        }
      });
    }

    if(options.rest) {
      config.plugins.push({ require: 'feathers-rest', options: [] });
    }

    config.plugins.push({ require: 'feathers-hooks', options: [] });

    return config;
  },

  'package.json': function(options) {
    const pkg = {
      name: options.name,
      description: options.description,
      dependencies: {}
    };

    return pkg;
  }
};
