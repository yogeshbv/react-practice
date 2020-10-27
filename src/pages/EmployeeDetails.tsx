import React from 'react';
import styled from 'styled-components';
import { Container, H3, PageBodyWrap } from '../styled/styles';

const EmployeeDetailsWrap = styled.div`
    padding: 1rem;
`;

const EmployeeDetails = () => {

    return (
        <PageBodyWrap>
            <Container innerSpacing="1.5">
                <H3 borderBottom>Employee Details</H3>
                <EmployeeDetailsWrap>

                </EmployeeDetailsWrap>
            </Container>
        </PageBodyWrap>
    );
}

export default EmployeeDetails;