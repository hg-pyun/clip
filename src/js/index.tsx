import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './containers/App';
import '../scss/index.scss';

render(
    <Router basename='/rapidity'>
        <App/>
    </Router>,
    document.getElementById('root')
);