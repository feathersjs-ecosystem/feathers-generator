export default function(options = {}) {
  function log () {
    if (process.env.NODE_ENV !== 'testing') {
      console.log(...arguments);
    }
  }
  return function(hook) {
    hook.ran = true;
    log('generated {{options.name}} hook was successfully run');
    return hook;
  };
};
