import React, {Component} from 'react';
import '../../scss/navigator.scss';

interface NavigatorProps {
}

interface NavigatorState {
}

class Navigator extends Component<NavigatorProps, NavigatorState> {

    render() {
        return (
            <div className={'nav-container'}>
                <div className={'logo'}>
                    <span>Clip</span>
                </div>
            </div>
        )
    }
}

export default Navigator;