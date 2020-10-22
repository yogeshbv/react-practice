import React, { Component } from 'react';
import Button from '../components/button';
import { Link } from 'react-router-dom';
import {PrimaryButton, SecondaryButton} from '../styled/styles';

class Home extends Component {
    render() {
        return (
            <div className="page-body container py-5">
                <h3 className="border-bottom pb-3">Button with external style</h3>

                <div className="mb-5 mt-4">
                    <Button btnText={"Default Button"}></Button>
                    <PrimaryButton>Primary Button</PrimaryButton>
                    <SecondaryButton>Secondary Button</SecondaryButton>
                </div>

                <div><Link className="mr-2" to='/employee-list'>All employees</Link><Link to='/add-employee'>Add new employee</Link></div>
                
            </div>
        );
    }
}

export default Home;