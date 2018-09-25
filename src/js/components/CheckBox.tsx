import React, {Component} from 'react';
import '../../scss/checkbox.scss';
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
            <div className={'checkbox'}>
                <input type="checkbox" id={label} onChange={this.handleChangeState}/>
                <label>{label}</label>
            </div>
        );
    }
}

export default CheckBox;