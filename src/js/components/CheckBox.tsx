import React, {Component} from 'react';

interface CheckBoxProps {
    label: string;
}

interface CheckBoxState {
    isChecked: boolean;
}

class CheckBox extends Component<CheckBoxProps, CheckBoxState> {
    state = {
        isChecked: false
    };

    handleChangeState = (): void => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    };

    render() {
        const {label} = this.props;

        return (
            <div>
                <label>{label}</label>
                <input type="checkbox" id={label} onChange={this.handleChangeState}/>
            </div>
        );
    }
}

export default CheckBox;