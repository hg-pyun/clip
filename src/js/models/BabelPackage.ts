import Package from './interfaces/Package';

class BabelPackage implements Package {
    public readonly packages: Array<string> = [
        'cli', 'core', 'preset-env',
        'plugin-proposal-async-generator-functions',
        'plugin-proposal-dotall-regex',
        'plugin-proposal-object-rest-spread',
        'plugin-proposal-optional-catch-binding',
        'plugin-proposal-unicode-property-regex',
        'plugin-proposal-class-properties',
        'plugin-proposal-decorators',
        'plugin-proposal-do-expressions',
        'plugin-proposal-export-default-from',
        'plugin-proposal-export-namespace-from',
        'plugin-proposal-function-bind',
        'plugin-proposal-function-sent',
        'plugin-proposal-logical-assignment-operators',
        'plugin-proposal-nullish-coalescing-operator',
        'plugin-proposal-numeric-separator',
        'plugin-proposal-optional-chaining',
        'plugin-proposal-pipeline-operator',
        'plugin-proposal-throw-expressions'
    ];

    getAllPackages(): Array<string> {
        return this.packages.map((pkg) => this.attachPrefix(pkg));
    }

    attachPrefix(pkg: string): string {
        return `@babel/${pkg}`;
    }
}

export default new BabelPackage();