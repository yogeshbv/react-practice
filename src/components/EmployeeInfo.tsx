import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SkilledEmpInner = styled.div `
    padding-right: 1rem;
    box-sizing: border-box;

    @media only screen and (min-width: 767px) { 
        width: 33.33%;
    }

    @media only screen and (min-width: 1024px) { 
        width: 33.33%;
    }
`;

const EmpInfo = styled.div`
    background: #ffffff;
    border: 1px solid #dddddd;
    padding: 0.5rem;
    box-sizing: border-box;
    border-radius: 6px;
    margin-bottom: .5rem;
`;

const EmpConfirmed = styled.div `
    img {
        width: 2rem;
    }
`;

const EmpIdName = styled.div`
    padding: .5rem;
    background: ${props => props.theme.colors.primaryColor};
    color: #ffffff;
    font-size: ${props => props.theme.fontSizes.fontBase};
    text-transform: uppercase;
    margin-bottom: .5rem;
    font-weight: bold;
`;

const EmpImage = styled.div `
    margin-bottom: .5rem;
    position: relative;

    img {
       max-width: 100%;;
    }

    ${EmpConfirmed} {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: #ffffff;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;

        img {
            width: 1.5rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

const NotConfirmed = styled.div `
    background: #f0f0f0;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
`;

const DetailsLink = styled.div`
    a {
        background: transparent;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        text-align: center;
        display: block;
        text-decoration: none;
        border: 1px solid ${props => props.theme.colors.primaryColor};
        color: ${props => props.theme.colors.primaryColor};
        &:hover {
            background: ${props => props.theme.colors.primaryColor};
            color: #ffffff;
            transition: 0.3s ease-in-out;
        }
    }
`;

interface EmpProps {
    skill: any;
}

const EmployeeInfoComp = ({ skill }: EmpProps) => {
    return (
        (skill.map((emp: any) => {
           return (
                <SkilledEmpInner key={emp.id}>
                    <EmpInfo key={emp.id}>
                            <EmpIdName>{emp.userId}. {emp.name}</EmpIdName>
                            <EmpImage>
                                <img src={emp.image} alt={emp.name} />
                                <EmpConfirmed>{emp.confirmed ? <img src="../../../check.png" alt="check" /> : <NotConfirmed />}</EmpConfirmed>
                            </EmpImage>
                            <div>
                                <DetailsLink><Link to={`/employee-details/${emp.id}`}>All employees</Link></DetailsLink>
                            </div>
                        </EmpInfo>
                </SkilledEmpInner>
            )
        }))
    )
}

export default EmployeeInfoComp;