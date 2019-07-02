module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint'],
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {},
};
