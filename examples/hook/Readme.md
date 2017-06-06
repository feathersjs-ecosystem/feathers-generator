demo
---
Screencast [here](http://io.kc.io/kjQj)

usage
---
```
❯ DEBUG=feathers-generator:* ../../../feathers-cli/bin/feathers generate repo                                                  [13:26:44]
A newer version of feathers-cli is available.

  latest:    v2.0.5
  installed: v2.0.0-beta

You can update by running 'feathers update' or 'npm install -g feathers-cli'.

? Generate repo in current directory? Yes
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/lib/repo/meta.json +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/default.json +1ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/default.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/staging.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/staging.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/production.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/production.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/package.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/package.json does not exist +1ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/src/feathers.json does not exist +0ms
? Name of your Feathers application hook
? Project description A Feathers project
  feathers-generator:ask Here is the metadata being used in the generator: +1s
  feathers-generator:ask { options: { template: 'repo', path: '.', mount: false, config: false, force: false, root: '/Users/slajax/repos/feathers/feathers-generator/examples/hook', name: 'hook' }, meta: { prompts: [ [Object], [Object] ], dependencies: { common: [Object] }, devDependencies: { common: [Object], eslint: [Object], babel: [Object] } }, default: {}, staging: {}, production: {}, pkg: {}, feathers: {} } +1ms
  feathers-generator:app Successfully generated repo "hook" at /Users/slajax/repos/feathers/feathers-generator/examples/hook +210ms

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
$ npm run compile

> hook@0.0.0 compile /Users/slajax/repos/feathers/feathers-generator/examples/hook
> npm run copy && babel -d lib/ src/


> hook@0.0.0 copy /Users/slajax/repos/feathers/feathers-generator/examples/hook
> shx rm -rf lib/ && shx cp -r src/ lib/

src/index/index.js -> lib/index/index.js
✨  Done in 8.68s.
  feathers-generator:install 'yarn install ' exited with code 0 +9s

Great success! Your new repo "hook" has been created.


❯ DEBUG=feathers-generator:* ../../../feathers-cli/bin/feathers generate hook                                                  [13:27:08]
A newer version of feathers-cli is available.

  latest:    v2.0.5
  installed: v2.0.0-beta

You can update by running 'feathers update' or 'npm install -g feathers-cli'.

? Generate hook in current directory? Yes
  feathers-generator:hook Template path: /Users/slajax/repos/feathers/feathers-generator/lib/hook/templates +0ms
  feathers-generator:hook Service path: /Users/slajax/repos/feathers/feathers-generator/examples/hook +1ms
  feathers-generator:hook Hook path: /Users/slajax/repos/feathers/feathers-generator/examples/hook/src +0ms
  feathers-generator:hook Feathers path: src/feathers.json +0ms
  feathers-generator:hook Mount path: src/feathers.json +0ms
  feathers-generator:hook Config path: config +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/lib/hook/meta.json +9ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/default.json +1ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/default.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/staging.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/staging.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/production.json +0ms
  1 demo
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/config/production.json does not exist +1ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/src/feathers.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/hook/src/feathers.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/hook/package.json +0ms
? When would you like this hook to execute? (Press <space> to select, <a> to toggle all, <i> to inverse selection)Before the service runs
? On what action(s) would you like this hook to execute? all, find, create, update
  feathers-generator:ask Here is the metadata being used in the generator: +4s
  feathers-generator:ask { options: { template: 'hook', path: '.', mount: false, config: false, force: false, root: '/Users/slajax/repos/feathers/feathers-generator/examples/hook', name: 'hook' }, meta: { prompts: [ [Object], [Object] ] }, default: {}, staging: {}, production: {}, feathers: {}, service: {}, pkg: { name: 'hook', version: '0.0.0', homepage: '', main: 'index.js', private: true, keywords: [ 'feathers' ], license: '', repository: {}, author: {}, contributors: [], bugs: {}, engines: { node: '>=4.4.0', yarn: '>=0.19.1' }, semistandard: { globals: [Object] }, scripts: { prepublish: 'npm run compile', publish: 'git push origin && git push origin --tags', 'release:patch': 'npm version patch && npm publish', 'release:minor': 'npm version minor && npm publish', 'release:major': 'npm version major && npm publish', compile: 'npm run copy && babel -d lib/ src/', copy: 'shx rm -rf lib/ && shx cp -r src/ lib/', watch: 'npm run copy && babel --watch -d lib/ src/', lint: './node_modules/.bin/eslint-if-supported ./node_modules/.bin/semistandard --fix', mocha: 'NODE_ENV=testing mocha $(find {src,test} -name \'*.test.js\') --compilers js:babel-core/register --recursive', test: 'npm run test:local', 'test:local': 'npm run lint && npm run coverage', 'test:docker': 'npm run docker:test', 'docker:build': 'captain build', 'docker:test': 'captain test', coverage: 'NODE_ENV=testing istanbul cover node_modules/mocha/bin/_mocha -- $(find {src,test} -name \'*.test.js\') --compilers js:babel-core/register --recursive', prod: 'NODE_ENV=production node index.js', start: 'babel-node index.js' }, dependencies: { winston: '^2.2.0' }, devDependencies: { mocha: '^2.4.5', request: '^2.72.0', istanbul: '^1.1.0-alpha.1', shx: '^0.2.1', 'eslint-if-supported': '^1.0.1', semistandard: '^9.2.1', 'babel-cli': '^6.24.1', 'babel-core': '^6.7.0', 'babel-preset-es2015': '^6.6.0', 'babel-plugin-add-module-exports': '^0.2.1' } } } +0ms
  feathers-generator:rename Renaming template hook.js to index.js +7ms
  feathers-generator:rename Renaming template hook.test.js to index.test.js +0ms
  feathers-generator:hook Successfully generated "hook" hook at /Users/slajax/repos/feathers/feathers-generator/examples/hook/src +52ms
Successfully generated "hook" hook at /Users/slajax/repos/feathers/feathers-generator/examples/hook/src
```
