module.exports = {
    extends: [
    'universe/native',
    'plugin:prettier/recommended',
    ],
    plugins: ['react'],
    parserOptions: {
        // Only ESLint 6.2.0 and later support ES2020.
        ecmaVersion: 2020,
        jsx: true,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    // do some additional things with it
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }]
    },
    ignorePatterns: ['**/build/**', 'temp.js', '**/vendor/*.js'],
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
       
    },
    settings: {
        // 'import/resolver': {
        //     'babel-module': {}
        // },
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            // pragma: 'React', // Pragma to use, default to "React"
            // fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: 'detect' // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
        }
    },
}
