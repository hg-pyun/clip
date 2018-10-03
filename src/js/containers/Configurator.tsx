import React, {Component} from 'react';
import '../../scss/configurator.scss';

interface ConfigerProps {
}

interface ConfigerState {
}

class Configurator extends Component<ConfigerProps, ConfigerState> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'configurator-wrap'}>
                <div className={'package-json half'}>
                    <p>
                        Inserted JSON Format
                    </p>
                </div>
                <div className={'module-config half'}>
                    Result Modules
                </div>
            </div>
        );
    }
}

export default Configurator;