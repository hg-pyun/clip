const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/js/index.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                resolve: { extensions: ['.ts', '.tsx']},
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            }
        ]
    }
};
