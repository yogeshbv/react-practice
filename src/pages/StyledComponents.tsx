import React from 'react';
import Button from '../components/Buttons';
import { Container, H3, PageBodyWrap, PrimaryButton, SecondaryButton } from '../styled/styles';

const StyledComponents = () => {
    return (
        <PageBodyWrap>
            <Container>
                <H3 borderBottom>Styled components</H3>
                <div>
                    <Button btnText={"Default Button"} />
                    <PrimaryButton>Primary Button</PrimaryButton>
                    <SecondaryButton>Secondary Button</SecondaryButton>
                </div>
            </Container>
        </PageBodyWrap>
    );
}

export default StyledComponents;