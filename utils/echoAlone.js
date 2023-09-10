/*eslint-disable*/
const shell = require('shelljs');

function echoAlone(message, isPrefix) {
  const prefix = isPrefix ? '> ' : '';
  shell.echo('');
  shell.echo(prefix + message);
  shell.echo('');
}

module.exports = {
  echoAlone,
};
