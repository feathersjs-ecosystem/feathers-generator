import path from 'path';
import fs from 'fs-extra';

export default function(options) {
  return function dotfiles(files, metalsmith, done){
    const meta = metalsmith.metadata();

    switch(meta.options.linter) {
      case 'jshint':
        delete files['eslintrc.js'];
        delete files['.eslintignore'];  
        break;
      case 'eslint':
        delete files['.jshintrc'];
        break;
      case 'none':
        delete files['eslintrc.js'];
        delete files['.eslintignore'];
        delete files['.jshintrc'];
        break;
    }

    if (!meta.options.babel) {
      delete files['.babelrc'];
    }
      
    done();
  };
};