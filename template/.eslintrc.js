module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript'
  ],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    // Disable whilst we wait for the fix for
    // https://github.com/benmosher/eslint-plugin-import/issues/1558 to be released.
    'import/extensions': 0,
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/no-unknown-property': [1, { ignore: ['class'] }],
    'react/jsx-one-expression-per-line': [1, { allow: 'literal' }]
  },
  settings: {
    react: {
      pragma: 'h'
    }
  }
};
