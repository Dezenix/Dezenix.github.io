const DISABLED = 0
const WARNING = 1
const ERROR = 2

module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'react-app',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    env: {
        jest: true,
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        '@typescript-eslint/camelcase': DISABLED,
        '@typescript-eslint/interface-name-prefix': DISABLED,
        '@typescript-eslint/no-empty-interface': DISABLED,
        '@typescript-eslint/no-var-requires': DISABLED,
        'react/prop-types': DISABLED,
        'react/prop': DISABLED,
        'no-unused-expressions': DISABLED,
        '@typescript-eslint/explicit-function-return-type': DISABLED,
        '@typescript-eslint/explicit-module-boundary-types': DISABLED,
        '@typescript-eslint/explicit-member-accessibility': [
            ERROR,
            { accessibility: 'explicit', overrides: { constructors: 'no-public' } },
        ],
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'react-bootstrap',
                        message: 'You should import individual components like: react-bootstrap/Button',
                    },
                ],
            },
        ],
        quotes: [2, 'single', { avoidEscape: true }],
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
}
