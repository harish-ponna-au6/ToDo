'use strict';
module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 120,
  proseWrap: 'always',
  semi: true,
  useTabs: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'never',
  jsxSingleQuote: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
