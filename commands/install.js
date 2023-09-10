/*eslint-disable*/
const { resolve } = require('path');
const fse = require('fs-extra');
const chalk = require('chalk');
const ora = require('ora');

const { setPackage } = require('../utils/set-package.js');

module.exports = function (options) {
  const spinner = ora('@youharutou/fe-lint - Start installing linters...').start();
  const configPath = resolve(__dirname, '../configs/');

  fse
    .copy(configPath, `./`)
    .then(() => {
      if (options.noscript) {
        spinner.succeed(chalk.green('@youharutou/fe-lint - Install linters successfully!'));
      } else {
        const pkgObj = {
          prettier: 'prettier --write --ignore-unknown .',
          eslint: 'eslint . --ext .js,.jsx,.ts,.tsx',
          stylelint: 'stylelint **/*.{scss,less}',
        };
        setPackage(
          pkgObj,
          () => {
            spinner.succeed(chalk.green('@youharutou/fe-lint - Install linters successfully!'));
          },
          () => {
            spinner.fail(chalk.red('@youharutou/fe-lint - Failed to install linters!'));
          },
        );
      }
    })
    .catch((err) => {
      spinner.fail(chalk.red('@youharutou/fe-lint - Failed to install linters!'));
    });
};
