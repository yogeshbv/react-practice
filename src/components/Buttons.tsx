import React from 'react';
import { DefaultButton } from '../styled/styles';

interface BtnProps {
    btnText: string;
}

const Button = ({ btnText }: BtnProps) => {
    return (
        <DefaultButton>{btnText}</DefaultButton>
    );
}

export default Button;
