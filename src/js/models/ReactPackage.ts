import Package from './interfaces/Package';

class ReactPackage implements Package {
    public readonly packages: Array<string> = ['react', 'react-dom', 'redux', 'react-router'];

    getAllPackages(): Array<string> {
        return this.packages;
    }
}

export default new ReactPackage();