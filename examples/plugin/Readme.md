demo
---
Screencast [here](http://io.kc.io/kjoU)

usage
---
```
❯ DEBUG=feathers-generator:* ../../../feathers-cli/bin/feathers generate repo                                                  [13:30:11]
A newer version of feathers-cli is available.

  latest:    v2.0.5
  installed: v2.0.0-beta

You can update by running 'feathers update' or 'npm install -g feathers-cli'.

? Generate repo in current directory? Yes
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/lib/repo/meta.json +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/default.json +1ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/default.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/staging.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/staging.json does not exist +1ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/production.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/production.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/package.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/package.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/src/feathers.json does not exist +0ms
? Name of your Feathers application plugin
? Project description A Feathers project
  feathers-generator:ask Here is the metadata being used in the generator: +1s
  feathers-generator:ask { options: { template: 'repo', path: '.', mount: false, config: false, force: false, root: '/Users/slajax/repos/feathers/feathers-generator/examples/plugin', name: 'plugin' }, meta: { prompts: [ [Object], [Object] ], dependencies: { common: [Object] }, devDependencies: { common: [Object], eslint: [Object], babel: [Object] } }, default: {}, staging: {}, production: {}, pkg: {}, feathers: {} } +0ms
  feathers-generator:app Successfully generated repo "plugin" at /Users/slajax/repos/feathers/feathers-generator/examples/plugin +209ms

yarn install

yarn install v0.24.5
info No lockfile found.
[1/4] 🔍  Resolving packages...
warning mocha > jade@0.26.3: Jade has been renamed to pug, please install the latest version of pug instead of jade
warning mocha > to-iso-string@0.0.2: to-iso-string has been deprecated, use @segment/to-iso-string instead.
warning mocha > glob > minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
$ npm run compile

> plugin@0.0.0 compile /Users/slajax/repos/feathers/feathers-generator/examples/plugin
> npm run copy && babel -d lib/ src/


> plugin@0.0.0 copy /Users/slajax/repos/feathers/feathers-generator/examples/plugin
> shx rm -rf lib/ && shx cp -r src/ lib/

src/index/index.js -> lib/index/index.js
✨  Done in 8.95s.
  feathers-generator:install 'yarn install ' exited with code 0 +9s

Great success! Your new repo "plugin" has been created.


❯ DEBUG=feathers-generator:* ../../../feathers-cli/bin/feathers generate plugin                                                [13:30:35]
A newer version of feathers-cli is available.

  latest:    v2.0.5
  installed: v2.0.0-beta

You can update by running 'feathers update' or 'npm install -g feathers-cli'.

? Generate plugin in current directory? Yes
  feathers-generator:plugin Template path: /Users/slajax/repos/feathers/feathers-generator/lib/plugin/templates +0ms
  feathers-generator:plugin Service path: /Users/slajax/repos/feathers/feathers-generator/examples/plugin +0ms
  feathers-generator:plugin Plugin path: /Users/slajax/repos/feathers/feathers-generator/examples/plugin/src +0ms
  feathers-generator:plugin Feathers path: src/feathers.json +1ms
  feathers-generator:plugin Mount path: src/feathers.json +0ms
  feathers-generator:plugin Config path: config +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/lib/plugin/meta.json +7ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/default.json +1ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/default.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/staging.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/staging.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/production.json +0m  1 demo
s
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/config/production.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/src/feathers.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/plugin/src/feathers.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/plugin/package.json +0ms
  feathers-generator:ask Here is the metadata being used in the generator: +2ms
  feathers-generator:ask { options: { template: 'plugin', path: '.', mount: false, config: false, force: false, root: '/Users/slajax/repos/feathers/feathers-generator/examples/plugin', name: 'plugin' }, meta: { prompts: [] }, default: {}, staging: {}, production: {}, feathers: {}, service: {}, pkg: { name: 'plugin', version: '0.0.0', homepage: '', main: 'index.js', private: true, keywords: [ 'feathers' ], license: '', repository: {}, author: {}, contributors: [], bugs: {}, engines: { node: '>=4.4.0', yarn: '>=0.19.1' }, semistandard: { globals: [Object] }, scripts: { prepublish: 'npm run compile', publish: 'git push origin && git push origin --tags', 'release:patch': 'npm version patch && npm publish', 'release:minor': 'npm version minor && npm publish', 'release:major': 'npm version major && npm publish', compile: 'npm run copy && babel -d lib/ src/', copy: 'shx rm -rf lib/ && shx cp -r src/ lib/', watch: 'npm run copy && babel --watch -d lib/ src/', lint: './node_modules/.bin/eslint-if-supported ./node_modules/.bin/semistandard --fix', mocha: 'NODE_ENV=testing mocha $(find {src,test} -name \'*.test.js\') --compilers js:babel-core/register --recursive', test: 'npm run test:local', 'test:local': 'npm run lint && npm run coverage', 'test:docker': 'npm run docker:test', 'docker:build': 'captain build', 'docker:test': 'captain test', coverage: 'NODE_ENV=testing istanbul cover node_modules/mocha/bin/_mocha -- $(find {src,test} -name \'*.test.js\') --compilers js:babel-core/register --recursive', prod: 'NODE_ENV=production node index.js', start: 'babel-node index.js' }, dependencies: { winston: '^2.2.0' }, devDependencies: { mocha: '^2.4.5', request: '^2.72.0', istanbul: '^1.1.0-alpha.1', shx: '^0.2.1', 'eslint-if-supported': '^1.0.1', semistandard: '^9.2.1', 'babel-cli': '^6.24.1', 'babel-core': '^6.7.0', 'babel-preset-es2015': '^6.6.0', 'babel-plugin-add-module-exports': '^0.2.1' } } } +0ms
  feathers-generator:rename Renaming template plugin.js to index.js +7ms
  feathers-generator:rename Renaming template plugin.test.js to index.test.js +1ms
  feathers-generator:plugin Successfully generated "plugin" plugin at /Users/slajax/repos/feathers/feathers-generator/examples/plugin/src +59ms
Successfully generated "plugin" plugin at /Users/slajax/repos/feathers/feathers-generator/examples/plugin/src

```
