import Package from './interfaces/Package';

class VuePackage implements Package {
    public readonly packages: Array<string> = ['vue', 'vuex'];

    getAllPackages(): Array<string> {
        return this.packages;
    }
}

export default new VuePackage();