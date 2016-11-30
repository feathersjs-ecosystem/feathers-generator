module.exports = function(options = {}) {
  return function(hook) {
    hook.ran = true;
    console.log('generated {{options.name}} hook was successfully run');
    return hook;
  };
};
