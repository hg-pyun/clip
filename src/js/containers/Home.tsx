import React, {Component} from 'react';
import '../../scss/home.scss';

interface HomeProps {
}

interface HomeState {
}


class Home extends Component<HomeProps, HomeState> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'home-wrap'}>
                <div>
                    <h1>Rapidity</h1>
                    <h3>Build up your project, Rapidly</h3>
                </div>
            </div>
        );
    }
}

export default Home;