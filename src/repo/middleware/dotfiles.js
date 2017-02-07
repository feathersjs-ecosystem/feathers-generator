export default function (options) {
  return function dotfiles (files, metalsmith, done) {
    const meta = metalsmith.metadata();

    if (!meta.options.babel) {
      delete files['.babelrc'];
    }

    done();
  };
}
