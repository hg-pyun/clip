export default interface Package {
    packages: Array<string>;
    getAllPackages(): Array<string>;
}