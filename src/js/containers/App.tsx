import React, {Component} from 'react';
import TextField from '../components/TextField';
import CheckBox from '../components/CheckBox';

import BabelPackage from '../models/BabelPackage';
import WebpackPackage from '../models/WebpackPackage';
import ReactPackage from '../models/ReactPackage';
import VuePAckage from '../models/VuePackage';

import '../../scss/app.scss';

interface AppProps {
}

interface AppState {
    packages: object
}

class App extends Component<AppProps, AppState> {
    state = {
        packages: {
            babel:  BabelPackage.getAllPackages(),
            webpack: WebpackPackage.getAllPackages(),
            react: ReactPackage.getAllPackages(),
            vue: VuePAckage.getAllPackages(),
        }
    };

    render() {
        const renderCheckBoxList = (list) => {
            return list.map((module) => {
                return (<li key={module}>
                    <CheckBox label={module} />
                </li>)
            })
        };

        return (
            <div className={'wrap'}>
                <div className={'header'}>
                    <h1>Rapid Installer</h1>
                    <h3>Generate module install command, Easily</h3>
                </div>
                <div className={'dashboard'}>
                    <div className={'package'}>
                        <h2 className={'name'}>Babel</h2>
                        <ul>{renderCheckBoxList(this.state.packages.babel)}</ul>
                    </div>
                    <div  className={'package'}>
                        <h2 className={'name'}>Webpack</h2>
                        <ul>{renderCheckBoxList(this.state.packages.webpack)}</ul>
                    </div>
                    <div  className={'package'}>
                        <h2 className={'name'}>React</h2>
                        <ul>{renderCheckBoxList(this.state.packages.react)}</ul>
                    </div>
                    <div  className={'package'}>
                        <h2 className={'name'}>Vue</h2>
                        <ul>{renderCheckBoxList(this.state.packages.vue)}</ul>
                    </div>

                    <div>
                        <TextField/>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;

