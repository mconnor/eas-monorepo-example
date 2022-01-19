module.exports = function (api) {
    api.cache(true)
    console.log('babel-app')
    return {
        presets: [['babel-preset-expo']],
        plugins: [
            'react-native-reanimated/plugin',
            [
                'module:react-native-dotenv',
                {
                    moduleName: 'react-native-dotenv'
                }
            ]
        ]
    }
}
