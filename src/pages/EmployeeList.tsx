import React from 'react';
import styled from 'styled-components';
import { Container, H3, PageBodyWrap } from '../styled/styles';
import { emp } from  '../services/empData'

const EmpInfoWrap = styled.div`
    background: #b9d7ef;
    padding: 1rem;
`;

const EmpInfo = styled.div`
    background: #ffffff;
    margin-bottom: 1rem;
    border: 1px solid #dddddd;
    box-shadow: 0 2px 3px #cccccc;
    padding: 1rem;
    display: flex;
    align-items: center;
`;

const EmpId = styled.div `
    border-right: 2px solid #ffffff;
    margin-right: 1rem;
`;

const EmpName = styled.div `
    flex: 1;
`;

const EmpConfirmed = styled.div `
    img {
        width: 2rem;
    }
`;

const NotConfirmed = styled.div `
    background: #f0f0f0;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
`;

const EmployeeList = () => {
    return (
        <PageBodyWrap>
            <Container innerSpacing="1.5">
                <H3 borderBottom>Employee List</H3>
                <EmpInfoWrap>
                    {emp.map(function (emp: any) {
                        return (
                            <EmpInfo key={emp.id}>
                                <EmpId>{emp.id}.</EmpId>
                                <EmpName>{emp.name}</EmpName>
                                <EmpConfirmed>{emp.confirmed ? <img src="../../../check.png" alt="check" /> : <NotConfirmed />}</EmpConfirmed>
                            </EmpInfo>
                        );
                    })}
                </EmpInfoWrap>
            </Container>
        </PageBodyWrap>
    );
}

export default EmployeeList;
