/*
 * Run npm test
 */

import path from 'path';
import Debug from 'debug';
import { spawn } from 'child_process';

const debug = Debug('feathers-generator:test');

export default function (options) {
  return new Promise((resolve, reject) => {
    let packagePath = path.resolve(options.root, 'package.json');
    let packageJSON = require(packagePath);
    let engine = packageJSON.engines.yarn ? 'yarn' : 'npm';

    // TODO @slajax - async check that yarn is installed

    console.log();
    console.log(`Running integration tests using ${engine}...`);
    console.log(options.root);

    const tester = spawn(engine, ['test'], {stdio: 'inherit', cwd: process.cwd() });

    tester.on('close', function (code) {
      debug(`'${engine} test' exited with code ${code}`);

      if (code === 0) {
        debug(`${engine} test ran successfully`);
        return resolve();
      }

      reject(new Error('There was a problem running the integration tests'));
    });
  });
}
