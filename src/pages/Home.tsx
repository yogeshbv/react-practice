import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, H3, PageBodyWrap } from '../styled/styles';

const PageRedirections = styled.div`
    display: flex;
    margin-top: 1rem;

    a {
        margin-right: 1rem;
    }
`;

const Home = () => {
    return (
        <PageBodyWrap>
            <Container>
                <H3 borderBottom>Welcome to employee master</H3>
                <p>Employee information system. It has employee information like id, name, image, if the employee is confirmed. Please check below for more information.</p>
                <PageRedirections>
                    <Link to='/employee-list'>All employees</Link>
                    <Link to='/add-employee'>Add new employee</Link>
                </PageRedirections>
            </Container>
        </PageBodyWrap>
    );
}

export default Home;
