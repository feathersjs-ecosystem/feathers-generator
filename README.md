# feathers-generator

A metalsmith based generator for scaffolding Feathers apps. Used by [feathers-cli](https://github.com/feathersjs/feathers-cli).

## Generators

The available generators are:

- apps
- hooks
- services
- filters
- models
- middlewares
- plugins

### File Structure

Each generator has:

- a main `<type>.generator.js` file which has all the logic for the given generator.
- a `templates/` directory that contains all the static and dynamic templates the generator uses.
- a `meta.json` file.

### API

Each main generator file must implement these methods:

- `loadAppConfigs` - This loads any existing Feathers application config files that reside in `feathers-app/config/` so that they can be referenced and re-written with new values if necessary.
- `loadPackageJSON` - This loads the existing Feathers application `package.json` file so it can be referenced and re-written with new values if necessary.
- `getQuestions` - This returns the questions from the `meta.json` file
- `generate` - This takes in the `answers` from the user and generates/copies the appropriate files based on their answers.

### meta.json

This file contains the meta data that each generator uses to tell the CLI which questions it needs the user to answer and when.

### `prompts`

The CLI uses [inquirer](https://github.com/sboudrias/Inquirer.js) to ask the user questions and gather information. The `prompts` in the meta.json tell the CLI what questions to ask an when. They are exactly the same as when defining prompts with Vanilla inquirer. The difference is you only need to define your conditional statements for functions and you have access to more than just the current `answers` in each function. You can reference:

- `answers` - The ongoing answers to the questionnaire in the current Inquirer session.
- `options` - The existing options prior to prompting
- `pkg` - Any `package.json` fields for the existing Feathers app
- `config.default` - Any `config/default.json` fields for the existing app
- `config.staging` - Any `config/staging.json` fields for the existing app
- `config.production` - Any `config/production.json` fields for the existing app

### Generating Stuff

Generating an app or component goes something like this:

```js
const inquirer = require('inquirer');
const Generator = require('feathers-generator');

const args = {
  template: 'app', // one of the templates
  name: 'my-app', // the name of your generated thing
  root: '/path/to/project/root', // the root directory of your project
  force: false, // whether it should override any existing values or files without confirmation
};

const generator = Generator(args);

generator.getQuestions()
  .then(questions => {
    // Get user to answer questions
    return inquirer.prompt(questions);
  })
  .then(answers => {
    // Send answers back to generator
    return generator.generate(answers);
  })
  .then(dependencies => {
    // npm install dependencies
    // { devDependencies: [], dependencies: [] }
  })
  .catch(error => {
    if (error) {
      console.log(error));
    }
  });
```

