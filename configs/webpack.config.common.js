const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/js/index.ts'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
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
