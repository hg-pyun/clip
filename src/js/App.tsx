import React, {Component} from 'react';
import CommandBox from './components/CommandBox';
import CheckBox from './components/CheckBox';
import Navigator from "./components/Navigator";

import BabelPackage from './models/BabelPackage';
import WebpackPackage from './models/WebpackPackage';
import ReactPackage from './models/ReactPackage';
import VuePackage from './models/VuePackage';

import '../scss/app.scss';

interface InstallerProps {
    packages: object;
}

interface InstallerState {
    checkedItems: any;
}

class App extends Component<InstallerProps, InstallerState> {

    packages = {
        babel: BabelPackage.getAllPackages(),
        webpack: WebpackPackage.getAllPackages(),
        react: ReactPackage.getAllPackages(),
        vue: VuePackage.getAllPackages()
    };

    state = {
        checkedItems: new Map()
    };

    handleChangeCheckbox = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    };

    renderCategory = (packages) => {
        return (<ul>
            {packages.map((category) => {
                return (<li key={category}> {category}</li>)
            })}
        </ul>)
    };

    renderCheckBoxList = (list) => {
        return (<ul>
            {list.map((module) => {
                return (<li key={module}><CheckBox label={module} handleChangeCheckbox={this.handleChangeCheckbox}/></li>);
            })}
        </ul>)
    };

    renderCommands = (checkedItems): string => {
        let commands = 'npm install --save-dev ';
        checkedItems.forEach((value, key) => {
            if(value) commands += `${key} `;
        });

        return commands.trimRight();
    };

    render() {
        return (
            <div className={'wrap'}>
                <Navigator />
                <div className={'content'}>
                    <div className={'sidebar'}>
                        {this.renderCategory(Object.keys(this.packages))}
                    </div>
                    <div className={'dashboard'}>
                        <div className={'package'}>
                            <h2 className={'name'}>Babel</h2>
                            {this.renderCheckBoxList(this.packages.babel)}
                        </div>
                        <div className={'package'}>
                            <h2 className={'name'}>Webpack</h2>
                            {this.renderCheckBoxList(this.packages.webpack)}
                        </div>
                        <div className={'package'}>
                            <h2 className={'name'}>React</h2>
                            {this.renderCheckBoxList(this.packages.react)}
                        </div>
                        <div className={'package'}>
                            <h2 className={'name'}>Vue</h2>
                            {this.renderCheckBoxList(this.packages.vue)}
                        </div>
                    </div>
                </div>
                <CommandBox value={this.renderCommands(this.state.checkedItems)}/>
            </div>
        )
    }

}

export default App;

