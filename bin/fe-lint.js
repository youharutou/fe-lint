#! /usr/bin/env node

/*eslint-disable*/
const { Command } = require('commander');
const { resolve } = require('path');

const program = Command();
const res = (command) => resolve(__dirname, `../commands/${command}`);

program.version(require('../package').version, '-v, --version');
program.usage('<command>');

program
  .command('install')
  .description('install all linters to target project')
  .option('--noscript', 'run the command directly without package.json')
  .alias('i')
  .action(require(res('install')));

program
  .command('start')
  .description('start all linters')
  .arguments('[path...]', 'path of files to lint')
  .option('--noscript', 'run the command directly without package.json')
  .alias('s')
  .action(require(res('start')));

program
  .command('prettier')
  .description('start prettier')
  .arguments('[path...]', 'path of files to format')
  .option('--noscript', 'run the command directly without package.json')
  .alias('p')
  .action(require(res('prettier')));

program
  .command('eslint')
  .description('start eslint')
  .arguments('[path...]', 'path of files to lint')
  .option('--noscript', 'run the command directly without package.json')
  .alias('e')
  .action(require(res('eslint')));

program
  .command('stylelint')
  .description('start stylelint')
  .arguments('[path...]', 'path of files to lint')
  .option('--noscript', 'run the command directly without package.json')
  .alias('sl')
  .action(require(res('stylelint')));

program.parse(process.argv);
