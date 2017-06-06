demo
---
Sreencast [here](http://io.kc.io/kjnz)

usage
---
```
❯ DEBUG=feathers-generator:* ../../../feathers-cli/bin/feathers generate repo                                                  [13:18:32]
A newer version of feathers-cli is available.

  latest:    v2.0.5
  installed: v2.0.0-beta

You can update by running 'feathers update' or 'npm install -g feathers-cli'.

? Generate repo in current directory? Yes
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/lib/repo/meta.json +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/repo/config/default.json +2ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/repo/config/default.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/repo/config/staging.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/repo/config/staging.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/repo/config/production.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/repo/config/production.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/repo/package.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/repo/package.json does not exist +0ms
  feathers-generator:json Attempting to read in /Users/slajax/repos/feathers/feathers-generator/examples/repo/src/feathers.json +0ms
  feathers-generator:json /Users/slajax/repos/feathers/feathers-generator/examples/repo/src/feathers.json does not exist +0ms
? Name of your Feathers application repo
? Project description A Feathers project
  feathers-generator:ask Here is the metadata being used in the generator: +2s
  feathers-generator:ask { options: { template: 'repo', path: '.', mount: false, config: false, force: false, root: '/Users/slajax/repos/feathers/feathers-generator/examples/repo', name: 'repo' }, meta: { prompts: [ [Object], [Object] ], dependencies: { common: [Object] }, devDependencies: { common: [Object], eslint: [Object], babel: [Object] } }, default: {}, staging: {}, production: {}, pkg: {}, feathers: {} } +0ms
  feathers-generator:app Successfully generated repo "repo" at /Users/slajax/repos/feathers/feathers-generator/examples/repo +227ms

  1 demo
yarn install

  1 demo
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

> repo@0.0.0 compile /Users/slajax/repos/feathers/feathers-generator/examples/repo
> npm run copy && babel -d lib/ src/


> repo@0.0.0 copy /Users/slajax/repos/feathers/feathers-generator/examples/repo
> shx rm -rf lib/ && shx cp -r src/ lib/

src/index/index.js -> lib/index/index.js
✨  Done in 8.54s.
  feathers-generator:install 'yarn install ' exited with code 0 +9s

Great success! Your new repo "repo" has been created.


```
