/*
 * Run npm install to install dependencies
 */

import Debug from 'debug'
import { spawn } from 'child_process';

const debug = Debug('feathers-generator:install');

export default function(options) {
  return new Promise((resolve, reject) => {
    console.log();
    console.log(`Installing dependencies...`);
    console.log();

    
    const npm = spawn('npm', ['install'], {stdio: 'inherit', cwd: options.root});

    npm.on('close', function (code) {
      debug(`'npm install' exited with code ${code}`);

      if (code === 0) {
        return resolve();
      }

      reject(new Error('There was a problem installing the dependencies'));
    });
  });
}
