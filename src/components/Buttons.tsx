import React from 'react';
import { DefaultButton } from '../styled/styles';

interface BtnProps {
    btnText: string;
    full?: boolean;
    ghost?: boolean;
}

const Button = ({ btnText, full, ghost}: BtnProps) => {
    return (
        <DefaultButton {...full} {...ghost}>{btnText}</DefaultButton>
    );
}

export default Button;
