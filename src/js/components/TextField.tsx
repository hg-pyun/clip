import React, { Component } from 'react';
import '../../scss/textfield.scss';

interface TextFieldProps {
    value: string;
}

interface TextFieldState {
}

class TextField extends Component<TextFieldProps, TextFieldState> {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={'component-textfield'}>
                <h1>Command</h1>
                <div className={'area'}>
                    <textarea value={this.props.value} readOnly/>
                    <button>Copy</button>
                </div>
            </div>
        )
    }
}

export default TextField;