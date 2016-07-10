import path from 'path';
import fs from 'fs-extra';

// TODO (EK): Handle config files
// - plug in this.options in to template/config files
// - Merge this.config with rendered config template
// - write out updated config files to this.options.root/config

export default function(options) {
  return function configuration(files, metalsmith, done){
    const meta = metalsmith.metadata();

    // console.log('META', meta);
    // const contents = fs.readdirSync(options.src);

    // If !options.eslint remove 

    // for (let filepath of Object.keys(files)) {

    //   path.relative('..', filepath);
    //   if (object.hasOwnProperty(let)) {
    //     expression
    //   }
    // }
      
    done();
  };
};