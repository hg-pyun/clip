import React, {Component} from 'react';
import '../../scss/commandbox.scss';

interface CommandBoxProps {
    value: string;
}

interface CommandBoxState {
}

class CommandBox extends Component<CommandBoxProps, CommandBoxState> {

    copyText = (str) => {
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
            <div className={'wrap-command-box'}>
                <textarea value={this.props.value} readOnly onClick={() => {
                    this.copyText(this.props.value)
                }}/>
            </div>
        )
    }
}

export default CommandBox;