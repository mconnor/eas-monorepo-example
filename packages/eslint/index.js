module.exports = {
    extends: ['universe/native', 'prettier'],

    // do some additional things with it
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
}
