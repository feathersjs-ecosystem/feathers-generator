export default function() {

  var env = process.env.NODE_ENV;
  var dir = env === 'production' ? 'lib' : 'src';

  console.log(`./${dir}/index/index.js has been loaded`);
}
