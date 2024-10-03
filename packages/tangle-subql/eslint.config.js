const baseConfig = require('../../eslint.config.js');
const js = require('@eslint/js');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  js.configs.recommended,
  ...baseConfig,
  {
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
      },
    },
  },
  { ignores: ['src/types/**'] },
];
