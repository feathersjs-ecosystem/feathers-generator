/*
 * Run npm install to install dependencies
 */

import path from 'path';
import Debug from 'debug';
import { spawn } from 'child_process';

const debug = Debug('feathers-generator:install');

export default function (options) {
  return new Promise((resolve, reject) => {
    let packagePath = path.resolve(options.root, 'package.json');
    let packageJSON = require(packagePath);
    let engine = packageJSON.engines.yarn ? 'yarn' : 'npm';

    // yarn fall back is in src/app/middleware/package-json.js:68
    // yarn fall back is in src/repo/middleware/package-json.js:60

    console.log();
    console.log(`Installing dependencies using ${engine}...`);
    console.log();

    const installer = spawn(engine, ['install'], {stdio: 'inherit', cwd: options.root});

    installer.on('close', function (code) {
      debug(`'${engine} install' exited with code ${code}`);

      if (code === 0) {
        return resolve();
      }

      reject(new Error('There was a problem installing the dependencies'));
    });
  });
}
