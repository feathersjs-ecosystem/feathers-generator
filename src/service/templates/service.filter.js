module.exports = function() {
  if(process.env.NODE_ENV !== 'production') {
    console.warn(`You are using the default filter for the \`{{options.name}}\` service (in ${__dirname}).`);
    console.warn(`This means all clients will get every real-time event.`);
    console.warn(`For more information how to filter events see http://docs.feathersjs.com/real-time/filtering.html`);
    console.warn(``);
  }

  return function() {
    console.log(`{{options.name}} filter returned: true`);
    return true;
  };
};
