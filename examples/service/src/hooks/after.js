export default function () {
  function log () {
    if (process.env.NODE_ENV !== 'testing') {
      console.log(...arguments);
    }
  }

  log(`You are using the default after hook for the example service (in ${__dirname}).`);
  log(`This hook will not do anything except log to stdout.`);
  log(`For more information on how hooks work see: https://docs.feathersjs.com/hooks/readme.html`);
  log(``);

  return function (hook) {
    // do something here
    log(`default example after hook executed`);
  };
}
