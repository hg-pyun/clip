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
            <div>
                <h1>Command</h1>
                <textarea value={this.props.value} readOnly/>
            </div>
        )
    }
}

export default TextField;