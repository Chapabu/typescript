module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
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
    'comma-dangle': [
      'error',
      {
        functions: 'never'
      }
    ],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/no-unknown-property': [1, { ignore: ['class'] }],
    'react/jsx-one-expression-per-line': [1, { allow: 'literal' }]
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0
      }
    }
  ],
  settings: {
    react: {
      pragma: 'h'
    }
  }
};
