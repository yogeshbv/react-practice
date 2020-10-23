import React, { Component } from 'react';
import {Container, H3} from '../styled/styles';


class AddEmployee extends Component {
    render() {
        return (
            <Container innerSpacing="20" textColor="inherit">
                <H3 borderBottom>Add new employee</H3>
            </Container>
        );
    }
}

export default AddEmployee;