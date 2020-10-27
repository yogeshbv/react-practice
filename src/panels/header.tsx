import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container, rotate, FlexVCenter } from '../styled/styles';
// import Theme from './../styled/Theme';

const HeaderImg = styled.img.attrs({
    src: "../../../logo512.png",
    alt: "Logo"
})`
    animation: ${rotate} 15s linear infinite;
    max-width: 10rem;
    height: 4.2rem;
`;

const LogoWrap = styled.div`
    ${FlexVCenter}
    @media only screen and (max-width: 1024px) {
        width: 100%;
        justify-content: center;
    }
`;

const MainMenu = styled.ul`
    display: flex;
    margin: 0 0 0 4rem;
    padding: 0;

    @media only screen and (max-width: 1024px) {
        width: 100%;
        margin: 0 0 1rem 0;
        flex-wrap: wrap;
        li {
            list-style: none;
            width: 50%;
            text-align: center;
            font-size: ${props => props.theme.fontSizes.fontSmall};
            padding: 0.5rem;
            box-sizing: border-box;
            margin: 0;
        }
    }
`;

const SelectTheme =styled.div`
    width: 150px;
    padding: 0.3rem;
    background: #ffffff;
    padding: 0.2rem 0 0.2rem 0.2rem;
    border-radius: 4px;
    margin-left: auto;

    @media only screen and (max-width: 1024px) {
        width: 100%;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        li {
            flex: 1;
            padding: 0 0.2rem;
            button {
                background: transparent;
                border-radius: 4px;
                border: 1px solid #cccccc;
                &:focus {
                    outline: none;
                }
            }
        }
    }
`;

const Head = styled.header`
    background: ${props => props.theme === "dark" ? "#212121" : props.theme === "light" ? "#f5f5f5" : "#ffffff"};
    color: ${props => props.theme === "dark" ? "#ffffff" : props.theme === "light" ? "#333333" : "#333333"};

    ${Container} {
        padding: 1rem;
        ${FlexVCenter}
        @media only screen and (max-width: 1024px) {
            flex-direction: column;
        }
    }

    ${MainMenu} {
        li {
            list-style: none;
            a {
                padding: 0 1.5rem;
                text-decoration: none;
                color: ${props => props.theme === "dark" ? "#ffffff" : props.theme === "light" ? "#333333" : "#333333"};
                &.active {
                    text-decoration: underline;
                }
            }
        }
    }

    h4 {
        margin-left: 1rem;
    }
`;


const HeaderSmallButton = styled.button`
    padding: 0.3rem 1rem;
    font-size: ${props => props.theme.fontSizes.fontSmall};
    width: 100%;
`;

interface HeaderStates {
    currentTheme?: string;
}

class Header extends Component<HeaderStates, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            currentTheme: "",
        };
      }

    render() {
        return (
            <Head theme={`${this.state.currentTheme ? this.state.currentTheme : "dark"}`} className="app-header">
                <Container innerSpacing="1">
                    <LogoWrap>
                        <div>
                            <HeaderImg/>
                        </div>
                        <h4>Learn react</h4>
                    </LogoWrap>
                    <MainMenu>
                        <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
                        <li><NavLink activeClassName='active' to='/employee-list'>All employees</NavLink></li>
                        <li><NavLink activeClassName='active' to='/add-employee'>Add new employee</NavLink></li>
                        <li><NavLink activeClassName='active' to='/styled-components'>Styled components</NavLink></li>
                    </MainMenu>
                    <SelectTheme>
                        <ul>
                            <li onClick={() => this.selectTheme(this, "dark")}><HeaderSmallButton>Dark</HeaderSmallButton></li>
                            <li onClick={() => this.selectTheme(this, "light")} className="m-0"><HeaderSmallButton>Light</HeaderSmallButton></li>
                        </ul>
                    </SelectTheme>
                </Container>
            </Head>
        );
    }

    selectTheme =  (elem: any, para: string) => {
        this.setState({currentTheme: para});
    }
}

export default Header;
