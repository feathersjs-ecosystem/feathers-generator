demo
---
Screencast [here](http://io.kc.io/kjUD)

usage
---
```
❯ DEBUG=feathers-generator:* ../../../feathers-cli/bin/feathers generate repo                                                  [13:22:36]
A newer version of feathers-cli is available.

  latest:    v2.0.5
  installed: v2.0.0-beta

You can update by running 'feathers update' or 'npm install -g feathers-cli'.

? Generate repo in current directory? Yes
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/lib/repo/meta.json +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/config/default.json +1ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/service/config/default.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/config/staging.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/service/config/staging.json does not exist +1ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/config/production.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/service/config/production.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/package.json +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/service/src/feathers.json does not exist +0ms
? Name of your Feathers application service
? Project description A Feathers project
  feathers-generator:ask Here is the metadata being used in the generator: +1s
  feathers-generator:ask { options: { template: 'repo', path: '.', mount: false, config: false, force: false, root: '/Users/slajax/repos/feathers/feathers-generator/examples/service', name: 'service' }, meta: { prompts: [ [Object], [Object] ], dependencies: { common: [Object] }, devDependencies: { common: [Object], eslint: [Object], babel: [Object] } }, default: {}, staging: {}, production: {}, pkg: { name: 'service', version: '0.0.0', homepage: '', main: 'index.js', private: true, keywords: [ 'feathers' ], license: '', repository: {}, author: {}, contributors: [], bugs: {}, engines: { node: '>=4.4.0', yarn: '>=0.19.1' }, semistandard: { globals: [Object] }, scripts: { prepublish: 'npm run compile', publish: 'git push origin && git push origin --tags', 'release:patch': 'npm version patch && npm publish', 'release:minor': 'npm version minor && npm publish', 'release:major': 'npm version major && npm publish', compile: 'npm run copy && babel -d lib/ src/', copy: 'shx rm -rf lib/ && shx cp -r src/ lib/', watch: 'npm run copy && babel --watch -d lib/ src/', lint: './node_modules/.bin/eslint-if-supported ./node_modules/.bin/semistandard --fix', mocha: 'NODE_ENV=testing mocha $(find {src,test} -name \'*.test.js\') --compilers js:babel-core/register --recursive', test: 'npm run test:local', 'test:local': 'npm run lint && npm run coverage', 'test:docker': 'npm run docker:test', 'docker:build': 'captain build', 'docker:test': 'captain test', coverage: 'NODE_ENV=testing istanbul cover node_modules/mocha/bin/_mocha -- $(find {src,test} -name \'*.test.js\') --compilers js:babel-core/register --recursive', prod: 'NODE_ENV=production node index.js', start: 'babel-node index.js' }, dependencies: { 'feathers-memory': '^1.1.0', winston: '^2.2.0' }, devDependencies: { 'babel-cli': '^6.24.1', 'babel-core': '^6.7.0', 'babel-plugin-add-module-exports': '^0.2.1', 'babel-preset-es2015': '^6.6.0', 'eslint-if-supported': '^1.0.1', istanbul: '^1.1.0-alpha.1', mocha: '^2.4.5', request: '^2.72.0', semistandard: '^9.2.1', shx: '^0.2.1' } }, feathers: {} } +0ms
  feathers-generator:app Successfully generated repo "service" at /Users/slajax/repos/feathers/feathers-generator/examples/service +215ms

yarn install

yarn install v0.24.5
[1/4] 🔍  Resolving packages...
success Already up-to-date.
$ npm run compile

> service@0.0.0 compile /Users/slajax/repos/feathers/feathers-generator/examples/service
> npm run copy && babel -d lib/ src/


> service@0.0.0 copy /Users/slajax/repos/feathers/feathers-generator/examples/service
> shx rm -rf lib/ && shx cp -r src/ lib/

src/example.model.js -> lib/example.model.js
src/example.test.js -> lib/example.test.js
src/filters/default.js -> lib/filters/default.js
src/hooks/after.js -> lib/hooks/after.js
src/hooks/before.js -> lib/hooks/before.js
src/index/index.js -> lib/index/index.js
✨  Done in 2.16s.
  feathers-generator:install 'yarn install ' exited with code 0 +2s

Great success! Your new repo "service" has been created.


❯ DEBUG=feathers-generator:* ../../../feathers-cli/bin/feathers generate service example                                       [13:23:00]
A newer version of feathers-cli is available.

  latest:    v2.0.5
  installed: v2.0.0-beta

You can update by running 'feathers update' or 'npm install -g feathers-cli'.

? Generate service in current directory? Yes
  feathers-generator:service Service path: /Users/slajax/repos/feathers/feathers-generator/examples/service/src +0ms
  feathers-generator:service Template path: /Users/slajax/repos/feathers/feathers-generator/lib/service/templates +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/lib/service/meta.json +12ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/config/default.json +1ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/service/config/default.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/config/staging.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/service/config/staging.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/config/production.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/service/config/production.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/service/src/feathers.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/service/package.json +0ms
? What model would you like to use? Memory
  feathers-generator:ask Here is the metadata being used in the generator: +1s
  feathers-generator:ask { options: { template: 'service', path: '.', mount: false, config: false, force: false, name: 'example', root: '/Users/slajax/repos/feathers/feathers-generator/examples/service' }, meta: { prompts: [ [Object] ] }, default: {}, staging: {}, production: {}, feathers: {}, pkg: { name: 'service', version: '0.0.0', homepage: '', main: 'index.js', private: true, keywords: [ 'feathers' ], license: '', repository: {}, author: {}, contributors: [], bugs: {}, engines: { node: '>=4.4.0', yarn: '>=0.19.1' }, semistandard: { globals: [Object] }, scripts: { prepublish: 'npm run compile', publish: 'git push origin && git push origin --tags', 'release:patch': 'npm version patch && npm publish', 'release:minor': 'npm version minor && npm publish', 'release:major': 'npm version major && npm publish', compile: 'npm run copy && babel -d lib/ src/', copy: 'shx rm -rf lib/ && shx cp -r src/ lib/', watch: 'npm run copy && babel --watch -d lib/ src/', lint: './node_modules/.bin/eslint-if-supported ./node_modules/.bin/semistandard --fix', mocha: 'NODE_ENV=testing mocha $(find {src,test} -name \'*.test.js\') --compilers js:babel-core/register --recursive', test: 'npm run test:local', 'test:local': 'npm run lint && npm run coverage', 'test:docker': 'npm run docker:test', 'docker:build': 'captain build', 'docker:test': 'captain test', coverage: 'NODE_ENV=testing istanbul cover node_modules/mocha/bin/_mocha -- $(find {src,test} -name \'*.test.js\') --compilers js:babel-core/register --recursive', prod: 'NODE_ENV=production node index.js', start: 'babel-node index.js' }, dependencies: { winston: '^2.2.0', 'feathers-memory': '^1.1.0' }, devDependencies: { mocha: '^2.4.5', request: '^2.72.0', istanbul: '^1.1.0-alpha.1', shx: '^0.2.1', 'eslint-if-supported': '^1.0.1', semistandard: '^9.2.1', 'babel-cli': '^6.24.1', 'babel-core': '^6.7.0', 'babel-preset-es2015': '^6.6.0', 'babel-plugin-add-module-exports': '^0.2.1' } } } +0ms
  feathers-generator:model ignoring service.json +10ms
  feathers-generator:model ignoring service.model.js +0ms
  feathers-generator:model ignoring service.test.js +0ms
  feathers-generator:model ignoring filters/default.js +0ms
  feathers-generator:model ignoring hooks/after.js +0ms
  feathers-generator:model ignoring hooks/before.js +0ms
  feathers-generator:model filtering out models/memory/meta.json +1ms
  feathers-generator:model Found the model template +0ms models/memory/templates/service.json
  feathers-generator:model Found the model template +0ms models/memory/templates/service.model.js
  feathers-generator:model filtering out models/mongoose/meta.json +0ms
  feathers-generator:model filtering out models/mongoose/templates/service.json +0ms
  feathers-generator:model filtering out models/mongoose/templates/service.model.js +1ms
  feathers-generator:model filtering out models/rethinkdb/meta.json +0ms
  feathers-generator:model filtering out models/rethinkdb/templates/service.json +0ms
  feathers-generator:model filtering out models/rethinkdb/templates/service.model.js +0ms
  feathers-generator:model filtering out models/nedb/meta.json +0ms
  feathers-generator:model filtering out models/nedb/templates/service.json +0ms
  feathers-generator:model filtering out models/nedb/templates/service.model.js +1ms
  feathers-generator:model filtering out models/sqlite/meta.json +0ms
  feathers-generator:model filtering out models/sqlite/templates/service.json +4ms
  feathers-generator:model filtering out models/sqlite/templates/service.model.js +0ms

yarn add feathers-memory

yarn add v0.24.5
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
  1 demo
success Saved 1 new dependency.
└─ feathers-memory@1.1.0
$ npm run compile

> service@0.0.0 compile /Users/slajax/repos/feathers/feathers-generator/examples/service
> npm run copy && babel -d lib/ src/


> service@0.0.0 copy /Users/slajax/repos/feathers/feathers-generator/examples/service
> shx rm -rf lib/ && shx cp -r src/ lib/

src/example.model.js -> lib/example.model.js
src/example.test.js -> lib/example.test.js
src/filters/default.js -> lib/filters/default.js
src/hooks/after.js -> lib/hooks/after.js
src/hooks/before.js -> lib/hooks/before.js
src/index/index.js -> lib/index/index.js
✨  Done in 4.27s.
  feathers-generator:install 'yarn add feathers-memory' exited with code 0 +4s
  feathers-generator:rename Renaming template service.json to example.json +3ms
  feathers-generator:rename Renaming template service.model.js to example.model.js +1ms
  feathers-generator:rename Renaming template service.test.js to example.test.js +0ms
  feathers-generator:rename Renaming template models/memory/templates/service.json to example.json +1ms
  feathers-generator:rename Renaming template models/memory/templates/service.model.js to example.model.js +0ms
  feathers-generator:service Successfully generated "example" service at /Users/slajax/repos/feathers/feathers-generator/examples/service/src +67ms
Successfully generated "example" service at /Users/slajax/repos/feathers/feathers-generator/examples/service/src

```
