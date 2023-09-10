/*eslint-disable*/
const { resolve } = require('path');
const shell = require('shelljs');

const { getPathByExtension } = require('../utils/getPathByExtension.js');
const { echoAlone } = require('../utils/echoAlone.js');

module.exports = function (paths, options) {
  if (options.noscript) {
    const eslintPath = getPathByExtension(paths, '.js,.jsx,.ts,.tsx');
    const stylelintPath = getPathByExtension(paths, '.scss,.less');
    const globalDir = resolve(__dirname, '../');
    const prettierConfigFile = resolve(__dirname, '../.prettierrc.yml');
    const prettierIgnore = resolve(__dirname, '../.prettierignore');
    const eslintConfigFile = resolve(__dirname, '../.eslintrc.js');
    const stylelintConfigFile = resolve(__dirname, '../.stylelintrc.js');
    const prettierScript = 'npx --yes prettier --config ' + prettierConfigFile + ' --ignore-path ' + prettierIgnore + ' --write --ignore-unknown ' + paths.join(' ');
    const eslintScript = 'npx --yes eslint --ext .js,.jsx,.ts,.tsx --resolve-plugins-relative-to ' + globalDir + ' --no-eslintrc -c ' + eslintConfigFile + ' ' + eslintPath;
    const stylelintScript = 'npx --yes stylelint --config-basedir ' + globalDir + ' --config ' + stylelintConfigFile + ' ' + stylelintPath;

    if (paths.join(' ')) {
      echoAlone(prettierScript, true);
      if (shell.exec(prettierScript).code !== 0) {
        shell.echo('Error: prettier format failed');
        shell.exit(1);
      }
    }

    if (eslintPath) {
      echoAlone(eslintScript, true);
      if (shell.exec(eslintScript).code !== 0) {
        shell.echo('Error: eslint found the above problems');
        shell.exit(1);
      }
    }

    if (stylelintPath) {
      echoAlone(stylelintScript, true);
      if (shell.exec(stylelintScript).code !== 0) {
        shell.echo('Error: stylelint found the above problems');
        shell.exit(1);
      }
    }
  } else {
    if (paths && paths.length) {
      if (paths.length > 90) {
        return;
      }
      const eslintPath = getPathByExtension(paths, '.js,.jsx,.ts,.tsx');
      const stylelintPath = getPathByExtension(paths, '.scss,.less');
      const scripts = ['prettier --write --ignore-unknown ' + paths.join(' ')];
      if (eslintPath) {
        scripts.push('eslint ' + eslintPath + ' --ext .js,.jsx,.ts,.tsx');
      }
      if (stylelintPath) {
        scripts.push('stylelint ' + stylelintPath);
      }
      for (let i = 0, len = scripts.length; i < len; i++) {
        if (i === 0) {
          echoAlone(scripts[i], true);
          if (shell.exec(scripts[i]).code !== 0) {
            shell.echo('Error: prettier format failed');
            shell.exit(1);
          }
        } else {
          echoAlone(scripts[i], true);
          shell.exec(scripts[i], function (code, stdout, stderr) {
            if (code !== 0) {
              shell.exit(1);
            }
          });
        }
      }
      return;
    }
    shell.exec('npm run prettier && npm run eslint & npm run stylelint');
  }
};
