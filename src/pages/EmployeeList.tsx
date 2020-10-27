import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, H3, PageBodyWrap } from '../styled/styles';
import { employees } from  '../services/empData';
import EmployeeInfoComp from '../components/EmployeeInfo';

const EmpInfoWrap = styled.div`
    background: ${props => props.theme.colors.altColor};
    padding: 1rem;
`;

const EmpSkills = styled.div`
    padding: 1rem;
    position: relative;
    cursor: pointer;
    font-size: ${props => props.theme.fontSizes.font200};
    font-weight: bold;

    &:after {
        content: ">";
        transform: rotate(90deg);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 2rem;
        margin: auto;
        color: #999999;
        line-height: 1;
        height: 1.4rem;
    }
    
`;

const SkilledEmpWrapper = styled.div `
    padding: 1rem;
    display: none;
    flex-wrap: wrap;
`;

const SkilledEmp = styled("div")<{active: boolean}>`
    border-bottom: 1px solid #ffffff;

    &:last-child {
        border: none;
    }

    ${props => props.active ? `
        ${EmpSkills} {

            &:after {
                transform: rotate(-90deg);
            }
        }

        ${SkilledEmpWrapper} {
            height: auto;
            min-height: 30
            transition: .8s ease-in-out;
        }
    ` : `
        ${SkilledEmpWrapper} {
            height: 0;
            transition: .8s ease-in-out;
        }
    `}

    ${SkilledEmpWrapper} {
        display: ${(props) => props.active === true ? `flex` : `none`};
    }
`;

interface EmployeeInfoProps {
    activeSkill?: string;
}

class EmployeeList extends Component<EmployeeInfoProps, any>  {

    constructor(props: any) {
        super(props);
        this.state = {
            activeSkill: "",
        }
    }

    render() {
        const javaSkilled = employees.filter(obj => {
            return obj.skills === "Java";
        });
        const reactSkilled = employees.filter(obj => {
            return obj.skills === "ReactJs";
        });
        const angularSkilled = employees.filter(obj => {
            return obj.skills === "Angular";
        });

        const skills = ["Java", "ReactJs", "Angular"];

        return (
            <PageBodyWrap>
                <Container innerSpacing="1.5">
                    <H3 borderBottom>Employee List</H3>
                    <EmpInfoWrap>
                        {skills.map((currentSkill, index) => {
                            return (
                                <SkilledEmp key={index} active={this.state.activeSkill === currentSkill ? true : false}>
                                    <EmpSkills onClick={ ()=> this.selectSkill(currentSkill)}>{currentSkill}</EmpSkills>
                                    <SkilledEmpWrapper>
                                        <EmployeeInfoComp skill={currentSkill === "Java" ? javaSkilled : currentSkill === "ReactJs" ? reactSkilled : currentSkill === "Angular" ? angularSkilled : null} />
                                    </SkilledEmpWrapper>
                                </SkilledEmp>
                            )
                        })}
                    </EmpInfoWrap>
                </Container>
            </PageBodyWrap>
        );
    }

    selectSkill = (currentSkill: string) => {
        if (this.state.activeSkill === currentSkill) {
            this.setState({activeSkill: "sameSkill"});
        } else {
            this.setState({activeSkill: currentSkill});
        }
    }
}

export default EmployeeList;
