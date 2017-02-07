/*
 * Run npm test
 */

import Debug from 'debug';
import { spawn } from 'child_process';

const debug = Debug('feathers-generator:test');

export default function (options) {
  return new Promise((resolve, reject) => {
    console.log();
    console.log(`Running integration tests...`);
    console.log(options.root);

    const npm = spawn('npm', ['test'], {stdio: 'inherit', cwd: process.cwd() });

    npm.on('close', function (code) {
      debug(`'npm test' exited with code ${code}`);

      if (code === 0) {
        debug('npm test ran successfully');
        return resolve();
      }

      reject(new Error('There was a problem running the integration tests'));
    });
  });
}
