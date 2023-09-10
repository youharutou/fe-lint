/*eslint-disable*/
const { resolve } = require('path');
const shell = require('shelljs');

const { echoAlone } = require('../utils/echoAlone.js');

module.exports = function (paths, options) {
  if (options.noscript) {
    const prettierConfigFile = resolve(__dirname, '../.prettierrc.yml');
    const prettierIgnore = resolve(__dirname, '../.prettierignore');
    const prettierScript = 'npx --yes prettier --config ' + prettierConfigFile + ' --ignore-path ' + prettierIgnore + ' --write --ignore-unknown ' + paths.join(' ');

    if (paths.join(' ')) {
      echoAlone(prettierScript, true);
      if (shell.exec(prettierScript).code !== 0) {
        shell.echo('Error: prettier format failed');
        shell.exit(1);
      }
    }
  } else {
    if (paths && paths.length) {
      const script = 'prettier --write --ignore-unknown ' + paths.join(' ');
      echoAlone(script, true);
      shell.exec(script, function (code, stdout, stderr) {
        if (code !== 0) {
          shell.exit(1);
        }
      });
      return;
    }
    shell.exec('npm run prettier');
  }
};
