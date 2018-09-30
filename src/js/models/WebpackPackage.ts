import Package from './interfaces/Package';

class WebpackPackage implements Package {
    private defaultPackages: Array<string> = [
        'webpack-cli', 'webpack'
    ];

    private loaders: Array<string> = [
        'raw-loader', 'val-loader', 'url-loader', 'file-loader',
        'json-loader', 'json5-loader', 'cson-loader',
        'script-loader', 'babel-loader', 'buble-loader', 'traceur-loader', 'ts-loader', 'coffee-loader', 'fengari-loader',
        'html-loader', 'pug-loader', 'jade-loader', 'markdown-loader', 'react-markdown-loader',
        'posthtml-loader', 'handlebars-loader', 'markup-inline-loader', 'twig-loader',
        'style-loader', 'css-loader', 'less-loader', 'sass-loader', 'poastcss-loader', 'stylus-loader',
        'mocha-loader', 'eslint-loader', 'jshint-loader', 'jscs-loader', 'coverjs-loader',
        'vue-loader', 'ploymer-loader', 'angular2-template-loader'
    ];



    getAllPackages(): Array<string> {
        return this.defaultPackages.concat(this.loaders);
    }
}

export default new WebpackPackage();