/** @type {import("prettier").Config} */
module.exports = {
  // i am just using the standard config, change if you need something else
  ...require('prettier-config-standard'),
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tabWidth: 2,
  arrowParens: 'always',
  useTabs: false,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
};
