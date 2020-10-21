import React from 'react';
import {StyledButton} from '../styled/styles';

interface BtnProps {
    btnText: string;
    type: string;
}

const Button = ({type, btnText}: BtnProps) => {
    const types = type.split('"').join('')
    return (
        <StyledButton {...types}>{btnText}</StyledButton>
    );
}

export default Button;