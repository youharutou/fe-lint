/*eslint-disable*/
const { resolve } = require('path');
const shell = require('shelljs');

const { getPathByExtension } = require('../utils/getPathByExtension.js');
const { echoAlone } = require('../utils/echoAlone.js');

module.exports = function (paths, options) {
  if (options.noscript) {
    const stylelintPath = getPathByExtension(paths, '.scss,.less');
    const globalDir = resolve(__dirname, '../');
    const stylelintConfigFile = resolve(__dirname, '../.stylelintrc.js');
    const stylelintScript = 'npx --yes stylelint --config-basedir ' + globalDir + ' --config ' + stylelintConfigFile + ' ' + stylelintPath;

    if (stylelintPath) {
      echoAlone(stylelintScript, true);
      if (shell.exec(stylelintScript).code !== 0) {
        shell.echo('Error: stylelint found the above problems');
        shell.exit(1);
      }
    }
  } else {
    if (paths && paths.length) {
      const stylelintPath = getPathByExtension(paths, '.scss,.less');
      if (stylelintPath) {
        const script = 'stylelint ' + stylelintPath;
        echoAlone(script, true);
        shell.exec(script, function (code, stdout, stderr) {
          if (code !== 0) {
            shell.exit(1);
          }
        });
      }
      return;
    }
    shell.exec('npm run stylelint');
  }
};
