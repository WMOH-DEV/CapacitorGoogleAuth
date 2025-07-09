const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                gapi: 'readonly',
                window: 'readonly',
                document: 'readonly',
            },
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'error',
            'prefer-const': 'error',
            'no-async-promise-executor': 'warn',
        },
    },
    {
        ignores: ['dist/**/*', 'node_modules/**/*'],
    }
);
