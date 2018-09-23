const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/js'),
        publicPath: '/js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                        plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
        contentBase: path.resolve(__dirname, '../src'),
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    },

    devtool: '#eval-source-map'
};
