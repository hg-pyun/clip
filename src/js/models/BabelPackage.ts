import Package from './interfaces/Package';

class BabelPackage implements Package {
    public readonly packages: Array<string> = ['cli', 'core'];

    getAllPackages(): Array<string> {
        return this.packages.map((pkg) => this.attachPrefix(pkg));
    }

    attachPrefix(pkg: string): string {
        return `@babel/${pkg}`;
    }
}

export default new BabelPackage();