import React, { Component } from 'react';
import Button from '../components/button';
import {Container, H3, PrimaryButton, SecondaryButton} from '../styled/styles';

class Home extends Component {
    render() {
        return (
            <Container innerSpacing="0" textColor="inherit">
                <H3 borderBottom>Button with external style</H3>

                <div>
                    <Button btnText={"Default Button"}></Button>
                    <PrimaryButton>Primary Button</PrimaryButton>
                    <SecondaryButton>Secondary Button</SecondaryButton>
                </div>
                {/* 
                <div>
                    <Link to='/employee-list'>All employees</Link>&nbsp;
                    <Link to='/add-employee'>Add new employee</Link>
                </div> */}
                
            </Container>
        );
    }
}

export default Home;
