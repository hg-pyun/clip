import Package from './interfaces/Package';

class VuePackage implements Package {
    private defaultPackages: Array<string> = [
        'vue', 'vuex', 'vue-router',
    ];

    getAllPackages(): Array<string> {
        return this.defaultPackages;
    }
}

export default new VuePackage();