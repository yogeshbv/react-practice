import React from 'react';
import {DefaultButton} from '../styled/styles';

interface BtnProps {
    btnText: string;
    // type: string;
}

const Button = ({ btnText}: BtnProps) => {
    // const types = type.split('"').join('')
    return (
        <DefaultButton>{btnText}</DefaultButton>
    );
}

export default Button;