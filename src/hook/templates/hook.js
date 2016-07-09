module.exports = function(options = {}) {
  return function(hook) {
    hook.ran = true;
    return hook;
  };
};
