module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  customSyntax: require('postcss-scss'),
  rules: {
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['fade', 'fadeout', 'alpha', 'get-theme-color', '-'],
      },
    ],
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'shorthand-property-no-redundant-values': null,
    'no-invalid-position-at-import-rule': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-pseudo-element-colon-notation': null,
    'keyframes-name-pattern': null,
    'length-zero-no-unit': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'custom-property-pattern': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'else',
          'return',
          'each',
          'extand',
          'for',
          'include',
          'mixin',
          'while',
          'use',
          'forward',
          'import',
          'error',
          'warn',
          'debug',
          'at-root',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: require('postcss-less'),
    },
    {
      files: ['**/*.scss'],
      customSyntax: require('postcss-scss'),
    },
  ],
};
