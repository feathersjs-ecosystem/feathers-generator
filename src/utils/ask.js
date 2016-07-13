import evaluate from './eval';

export default function(options) {
  return function ask(files, metalsmith, done){
    const metadata = metalsmith.metadata();
    const data = Object.assign({}, metadata);

    try {
      const questions = metadata.meta.prompts.map(prompt => {
        const question = Object.assign({}, prompt);

        if (!prompt.name) {
          throw new Error(`Invalid prompt. You must provide a 'name'. ${prompt}`);
        }

        if (!prompt.message) {
          throw new Error(`Invalid prompt '${prompt.name}'. You must provide a 'message'.`);
        }

        // Wrap up the message so 
        // question.message = answers => {
        //   return evaluate(prompt.message, Object.assign({ answers }, data));
        // };
        
        // If an explicit default is provided in the meta data
        // use that, otherwise use any previously saved option
        // by default.
        if (prompt.default) {
          question.default = answers => {
            return evaluate(prompt.default, Object.assign({ answers }, data));
          };
        }
        else {
          question.default = data.options[prompt.name];
        }

        if (prompt.when) {
          question.when = answers => {
            return evaluate(prompt.when, Object.assign({ answers }, data));
          };
        }

        if (prompt.filter) {
          question.filter = input => {
            return evaluate(prompt.filter, Object.assign({ input }, data));
          }
        }

        if (prompt.validate) {
          question.validate = input => {
            return evaluate(prompt.validate, Object.assign({ input }, data));
          }
        }

        return question;
      });

      options.callback(null, questions, function(answers) {
        metalsmith.metadata(Object.assign(data, { answers }));
        done();
      });
    }
    catch(error) {
      options.callback(error);
      done(error);
    }
  };
};