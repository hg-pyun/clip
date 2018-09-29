import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../scss/naviagor.scss';

interface NavigatorProps {
}

interface NavigatorState {
}


class Navigator extends Component<NavigatorProps, NavigatorState> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={'nav-wrap'}>
                <div className={'nav-logo'}>
                    <Link to={'/'}>Rapidity</Link>
                </div>
                <div className={'nav-list'}>
                    <ul>
                        <li><Link to={'/installer'}>Installer</Link></li>
                        <li><Link to={'/configurator'}>Configurator</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Navigator;