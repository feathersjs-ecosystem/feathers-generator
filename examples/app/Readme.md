demo
---
Screencast [here](http://io.kc.io/kjhv/o)

usage
---
```
❯ DEBUG=feathers-generator:* ../../../feathers-cli/bin/feathers generate app                                                   [13:10:51]
A newer version of feathers-cli is available.

  latest:    v2.0.5
  installed: v2.0.0-beta

You can update by running 'feathers update' or 'npm install -g feathers-cli'.

? Generate app in current directory? Yes
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/lib/app/meta.json +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/app/config/default.json +1ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/app/config/default.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/app/config/staging.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/app/config/staging.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/app/config/production.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/app/config/production.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/app/package.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/app/package.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/app/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/app/src/feathers.json does not exist +0ms
? Name of your application app
? Project description My project
? What type of API are you making? (Press <space> to select, <a> to toggle all, <i> to inverse selection)REST, Realtime via Socket.io
? CORS configuration Enabled for all domains
  feathers-generator:ask Here is the metadata being used in the generator: +4s
  feathers-generator:ask { options: { template: 'app', path: '.', mount: false, config: false, force: false, root: '/Users/slajax/repos/feathers/feathers-generator/examples/app', name: 'app' }, meta: { prompts: [ [Object], [Object], [Object], [Object], [Object] ], dependencies: { common: [Object], rest: [Object], socketio: [Object], primus: [Object], cors: [Object] }, devDependencies: { common: [Object], eslint: [Object], babel: [Object] } }, default: {}, staging: {}, production: {}, pkg: {}, feathers: {} } +0ms
  feathers-generator:app Successfully generated app "app" at /Users/slajax/repos/feathers/feathers-generator/examples/app +337ms

yarn install

yarn install v0.24.5
info No lockfile found.
[1/4] 🔍  Resolving packages...
warning mocha > to-iso-string@0.0.2: to-iso-string has been deprecated, use @segment/to-iso-string instead.
warning mocha > jade@0.26.3: Jade has been renamed to pug, please install the latest version of pug instead of jade
warning mocha > glob > minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "0.24.6" while you're on "0.24.5".
info To upgrade, run the following command:
$ npm upgrade --global yarn
$ npm run compile

> app@0.0.0 compile /Users/slajax/repos/feathers/feathers-generator/examples/app
> npm run copy && babel -d lib/ src/


> app@0.0.0 copy /Users/slajax/repos/feathers/feathers-generator/examples/app
> shx rm -rf lib/ && shx cp -r src/ lib/

src/app.js -> lib/app.js
src/middleware/body-parser.js -> lib/middleware/body-parser.js
src/middleware/cors.js -> lib/middleware/cors.js
src/middleware/favicon.js -> lib/middleware/favicon.js
src/middleware/logger.js -> lib/middleware/logger.js
src/middleware/static.js -> lib/middleware/static.js
✨  Done in 20.04s.
  feathers-generator:install 'yarn install ' exited with code 0 +20s

Running integration tests using yarn...
/Users/slajax/repos/feathers/feathers-generator/examples/app
yarn test v0.24.5
$ npm run test:local

> app@0.0.0 test:local /Users/slajax/repos/feathers/feathers-generator/examples/app
> npm run lint && npm run coverage


> app@0.0.0 lint /Users/slajax/repos/feathers/feathers-generator/examples/app
> eslint-if-supported ./node_modules/.bin/semistandard --fix

> ./node_modules/.bin/semistandard --fix

> app@0.0.0 coverage /Users/slajax/repos/feathers/feathers-generator/examples/app
> NODE_ENV=testing istanbul cover node_modules/mocha/bin/_mocha -- $(find {src,test} -name '*.test.js') --compilers js:babel-core/register --recursive


  1

  application tests
    ✓ starts and shows the index page
    404 errors
      ✓ shows a 404 HTML page
      ✓ shows a 404 JSON error without stack trace


  3 passing (439ms)


=============================== Coverage summary ===============================
Statements   : 84.85% ( 28/33 )
Branches     : 57.14% ( 16/28 )
Functions    : 100% ( 3/3 )
Lines        : 84.85% ( 28/33 )
================================================================================
✨  Done in 6.82s.
  feathers-generator:test 'yarn test' exited with code 0 +7s
  feathers-generator:test yarn test ran successfully +1ms

Great success! Your new app "app" has been created.

Change to the directory by running 'cd /Users/slajax/repos/feathers/feathers-generator/examples/app start the app with 'npm start'.

```
