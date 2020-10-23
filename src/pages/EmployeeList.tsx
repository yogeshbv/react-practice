import React, { Component } from 'react';
import {Container, H3} from '../styled/styles';

class EmployeeList extends Component {
    render() {
        return (
            <Container innerSpacing="20" textColor="inherit">
                <H3 borderBottom>Employee List</H3>
            </Container>
        );
    }
}

export default EmployeeList;