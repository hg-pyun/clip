import React, {Component} from 'react';
import '../../scss/checkbox.scss';
interface CheckBoxProps {
    label: string;
    handleChangeCheckbox(e: any): void;
}

interface CheckBoxState {
    isChecked: boolean;
}

class CheckBox extends Component<CheckBoxProps, CheckBoxState> {

    render() {
        const {label, handleChangeCheckbox} = this.props;

        return (
            <div className={'checkbox'}>
                <input type="checkbox" id={label} name={label} onChange={handleChangeCheckbox}/>
                <label className={'no-select'} htmlFor={label}>{label}</label>
            </div>
        );
    }
}

export default CheckBox;