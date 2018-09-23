/**
 * For Build
 * @type {webpack}
 */

const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfigCommon = require('./webpack.config.common');

const timestamp = +new Date();
const jsFilename = `bundle.min.${timestamp}.js`;
const cssFilename = `bundle.min.${timestamp}.css`;

const webpackConfigProd = {
    mode: 'production',
    output: {
        filename: jsFilename,
        path: path.resolve(__dirname, '../dist/js')
    },
    plugins: [
        new CleanWebpackPlugin(['../dist'], {
            root: __dirname,
            allowExternal: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            filename: '../index.html',
            inject: false,
            staticResources: {
                js: `/js/${jsFilename}`,
                css: `/css/${cssFilename}`
            }
        })
    ]
};

module.exports = merge(webpackConfigCommon, webpackConfigProd);