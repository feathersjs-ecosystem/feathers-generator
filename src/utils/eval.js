/**
 * Evaluate an expression in meta.json in the context of
 * prompt answers data.
 *
 * Are these calls dangerous? They might be if someone
 * maliciously had a package that executed a shell script.
 * TODO (EK): Look at escaping these.
 */

export default function evaluate(expression, data) {
  const {options, config, pkg, answers, input} = data;

  try {
    const fn = new Function('options', 'config', 'pkg', 'answers', 'input', `return ${expression};`);
    return Promise.resolve( fn(options, config, pkg, answers, input) );
  }
  catch(e) {
    e.message = `${e.message}: ${expression}`;
    return Promise.reject(e);
  }
}