module.exports = function() {

  if(process.env.NODE_ENV !== 'production') {
    console.warn(`You are using the default before hook for the {{options.name}} service (in ${__dirname}).`);
    console.warn(`This hook will not do anything except log to stdout.`);
    console.warn(`For more information on how hooks work see: https://docs.feathersjs.com/hooks/readme.html`);
    console.warn(``);
  }

  return function(hook) {
    // do something here
    console.log(`{{options.name}} before hook executed`);
  };
};
