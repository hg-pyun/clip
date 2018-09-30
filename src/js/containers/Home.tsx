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
                <div className={'introduce'}>
                    <img src={'http://via.placeholder.com/350x350'}/>
                    <h1>Rapidity</h1>
                    <h3>Build up your project, Rapidly</h3>
                </div>
                <hr />
                <div className={'description'}>
                    <div className="row">
                        <h1>Fast Install</h1>
                        <p>You can Install npm modules one click.</p>
                    </div>
                    <div className="row">
                        <h1>Easy Scaffolding</h1>
                        <p>Rapidity helps you quickly set up your project.
                            Just paste the package.json.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;