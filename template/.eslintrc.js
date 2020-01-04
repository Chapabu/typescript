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
    rules: {
        // Disable whilst we wait for the fix for
        // https://github.com/benmosher/eslint-plugin-import/issues/1558 to be released.
        'import/extensions': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }]
    },
    settings: {
        react: {
            pragma: 'h'
        }
    }
};
