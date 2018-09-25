import React, {Component} from 'react';
import TextField from '../components/TextField';
import CheckBox from '../components/CheckBox';

import BabelPackage from '../models/BabelPackage';
import WebpackPackage from '../models/WebpackPackage';
import ReactPackage from '../models/ReactPackage';
import VuePAckage from '../models/VuePackage';

import '../../css/index.scss';

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
            <div>
                <div>
                    <h1>Rapid Installer</h1>
                    <p>Generate module install command, Easily</p>
                </div>
                <div>
                    <div>
                        <div>Babel</div>
                        <ul>{renderCheckBoxList(this.state.packages.babel)}</ul>
                    </div>
                    <div>
                        <div>Webpack</div>
                        <ul>{renderCheckBoxList(this.state.packages.webpack)}</ul>
                    </div>
                    <div>
                        <div>React</div>
                        <ul>{renderCheckBoxList(this.state.packages.react)}</ul>
                    </div>
                    <div>
                        <div>Vue</div>
                        <ul>{renderCheckBoxList(this.state.packages.vue)}</ul>
                    </div>
                </div>
                <div>
                    result area
                </div>
            </div>
        )
    }

}

export default App;

