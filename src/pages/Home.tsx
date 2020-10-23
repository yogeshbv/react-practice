import React from 'react';
import Button from '../components/Buttons';
import { Container, H3, PageBodyWrap, PrimaryButton, SecondaryButton } from '../styled/styles';

const Home = () => {
    return (
        <PageBodyWrap>
            <Container>
                <H3 borderBottom>Button with external style</H3>
                <div>
                    <Button btnText={"Default Button"}></Button>
                    <PrimaryButton>Primary Button</PrimaryButton>
                    <SecondaryButton>Secondary Button</SecondaryButton>
                </div>
                {/* Its needed for future purpose
                <div>
                    <Link to='/employee-list'>All employees</Link>&nbsp;
                    <Link to='/add-employee'>Add new employee</Link>
                </div> */}
            </Container>
        </PageBodyWrap>
    );
}

export default Home;
