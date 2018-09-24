import Package from './interfaces/Package';

class WebpackPackage implements Package {
    public readonly packages: Array<string> = ['webpack-cli', 'webpack'];

    getAllPackages(): Array<string> {
        return this.packages;
    }
}

export default new WebpackPackage();