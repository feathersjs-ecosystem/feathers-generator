export default function(options) {
  return function dotfiles(files, metalsmith, done){
    const meta = metalsmith.metadata();

    if (meta.options.linter !== 'jshint') {
      delete files['.jshintrc'];
    }

    if (meta.options.linter !== 'eslint') {
      delete files['.eslintrc'];
      delete files['.eslintignore'];
    }

    if (!meta.options.babel) {
      delete files['.babelrc'];
    }
      
    done();
  };
};