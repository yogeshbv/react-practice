import React from 'react';
import { Container, H3, PageBodyWrap } from '../styled/styles';


const AddEmployee = () => {
    return (
        <PageBodyWrap>
            <Container innerSpacing="1.5">
                <H3 borderBottom>Add new employee</H3>
            </Container>
        </PageBodyWrap>
    );
}

export default AddEmployee;
