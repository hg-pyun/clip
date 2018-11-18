import React, {Component} from 'react';
import '../../scss/textfield.scss';

interface TextFieldProps {
    value: string;
}

interface TextFieldState {
}

class TextField extends Component<TextFieldProps, TextFieldState> {

    handleClickCopyButton = (str) => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    render() {
        return (
            <div className={'component-textfield'}>
                <h1>Command</h1>
                <div className={'area'}>
                    <textarea value={this.props.value} readOnly/>
                    <button onClick={() => {
                        this.handleClickCopyButton(this.props.value)
                    }}>Copy
                    </button>
                </div>
            </div>
        )
    }
}

export default TextField;