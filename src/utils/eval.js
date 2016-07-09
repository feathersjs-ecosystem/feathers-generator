const chalk = require('chalk');

/**
 * Evaluate an expression in meta.json in the context of
 * prompt answers data.
 */

module.exports = function evaluate(expression, data) {
  const fn = new Function('data', `with (data) { return ${expression}; }`);

  try {
    return fn(data);
  }
  catch (e) {
    console.error(chalk.red('Error when evaluating filter condition: ' + expression))
  }
}