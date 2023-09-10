/*eslint-disable*/
const { resolve } = require('path');
const shell = require('shelljs');

const { getPathByExtension } = require('../utils/getPathByExtension.js');
const { echoAlone } = require('../utils/echoAlone.js');

module.exports = function (paths, options) {
  if (options.noscript) {
    const eslintPath = getPathByExtension(paths, '.js,.jsx,.ts,.tsx');
    const globalDir = resolve(__dirname, '../');
    const eslintConfigFile = resolve(__dirname, '../.eslintrc.js');
    const eslintScript = 'npx --yes eslint --ext .js,.jsx,.ts,.tsx --resolve-plugins-relative-to ' + globalDir + ' --no-eslintrc -c ' + eslintConfigFile + ' ' + eslintPath;

    if (eslintPath) {
      echoAlone(eslintScript, true);
      if (shell.exec(eslintScript).code !== 0) {
        shell.echo('Error: eslint found the above problems');
        shell.exit(1);
      }
    }
  } else {
    if (paths && paths.length) {
      const eslintPath = getPathByExtension(paths, '.js,.jsx,.ts,.tsx');
      if (eslintPath) {
        const script = 'eslint ' + eslintPath + ' --ext .js,.jsx,.ts,.tsx';
        echoAlone(script, true);
        shell.exec(script, function (code, stdout, stderr) {
          if (code !== 0) {
            shell.exit(1);
          }
        });
      }
      return;
    }
    shell.exec('npm run eslint');
  }
};
