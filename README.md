# @youharutou/fe-lint

This project provides general configuration of eslint/stylelint/prettier.

## How to use

### Set up

- Add `fe-lint install` to prepare script in `package.json`.
- Run `npm i @youharutou/fe-lint --save-dev` to install this tool.

### Commands

After installing this tool, you can use the following commands to lint your project:

> Note: If not installed globally, all the following commands need to be preceded by `npx`.

**Copy configuration files and set package scripts**

```shell
fe-lint install
```

Run this command in your project's root directory which has `package.json`. This command will add configuration files that linter needs into your current directory and add scripts to `package.json`.

**Start all linters**

```shell
fe-lint start [options] [path...]
```

Run this command in your project's root directory which has `package.json`. This command will run scripts defined in `package.json`, which will start prettier, eslint and stylelint.

By default, it lints the entire project. You can lint specific files you want by passing paths of files as parameter.

With parameter `--noscript`, this command will start lint with internal command and configuration files defined in this tool. So you can run this command to lint files anywhere you want without `package.json` and configuraiton files with `--noscript`.

**Start prettier**

```shell
fe-lint prettier [options] [paths...]
```

Run this command in your project's root directory which has `package.json`. This command will start prettier by runing script defined in `package.json`.

By default, it lints the entire project. You can lint specific files you want by passing paths of files as parameter.

With parameter `--noscript`, this command will start lint with internal command and configuration files defined in this tool. So you can run this command to lint files anywhere you want without `package.json` and configuraiton files with `--noscript`.

**Start eslint**

```shell
fe-lint eslint [options] [paths...]
```

Run this command in your project's root directory which has `package.json`. This command will start eslint by runing script defined in `package.json`.

By default, it lints the entire project. You can lint specific files you want by passing paths of files as parameter.

With parameter `--noscript`, this command will start lint with internal command and configuration files defined in this tool. So you can run this command to lint files anywhere you want without `package.json` and configuraiton files with `--noscript`.

**Start stylelint**

```shell
fe-lint stylelint [options] [paths...]
```

Run this command in your project's root directory which has `package.json`. This command will start stylelint by runing script defined in `package.json`.

By default, it lints the entire project. You can lint specific files you want by passing paths of files as parameter.

With parameter `--noscript`, this command will start lint with internal command and configuration files defined in this tool. So you can run this command to lint files anywhere you want without `package.json` and configuraiton files with `--noscript`.