import Package from './interfaces/Package';

class ReactPackage implements Package {
    private defaultPackages: Array<string> = [
        'react',
        'react-dom',
        'redux',
        'redux-thunk',
        'redux-saga',
        'redux-observable',
        'react-router-dom'
    ];

    getAllPackages(): Array<string> {
        return this.defaultPackages;
    }
}

export default new ReactPackage();