/*
 * Reads in JSON files and attaches them to
 * the metalsmith metadata at the specified key
 */

import path from 'path';
import fs from 'fs-extra';
import exists from './exists';
import Debug from 'debug'

const debug = Debug('feathers-generator');

export default function(paths) {
  return function json(files, metalsmith, done){
    const meta = metalsmith.metadata();

    for (let key of Object.keys(paths)) {
      const filepath = paths[key];

      debug(`Attempting to read in ${filepath}`)
      
      if (!exists(filepath)) {
        debug(`${filepath} does not exist`);
        continue;
      }
      
      try {
        meta[key] = fs.readJsonSync(filepath);
      }
      catch(error) {
        debug(`Error reading ${filepath}`, error);
      }
    }

    metalsmith.metadata(meta);
    done();
  };
};