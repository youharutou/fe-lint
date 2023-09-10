'use strict';

module.exports = api => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 Chrome versions'],
        },
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ];

  return {
    presets,
  };
};
