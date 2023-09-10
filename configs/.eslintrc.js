module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 'detect',
    },
  },
  rules: {
    'no-useless-escape': 'off',
    'no-prototype-builtins': 'off',
    'no-unused-vars': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'react/no-find-dom-node': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': [
          'warn',
          {
            allowArgumentsExplicitlyTypedAsAny: true,
          },
        ],
      },
    },
  ],
};
