import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from './Home';
import Navigator from './Navigator';
import Installer from './Installer';
import Configer from './Configer';

interface AppProps {
}

interface AppState {
}

class App extends Component<AppProps, AppState> {

    render() {
        return (
            <>
                <Navigator/>
                <Route exact path='/' component={Home}/>
                <Route path='/installer' component={Installer}/>
                <Route path='/configer' component={Configer}/>
            </>
        )
    }

}

export default App;

