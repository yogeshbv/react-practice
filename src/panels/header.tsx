import React, { Component } from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Head = styled.header`
        background: ${props => props.theme === "dark" ? "#212121" : props.theme === "light" ? "#f5f5f5" : "#FFFFFF"};
        color: ${props => props.theme === "dark" ? "#FFFFFF" : props.theme === "light" ? "#333333" : "#333333"};

        .main-menu ul {
            display: flex;
            margin: 0 0 0 4rem;
            padding: 0;
            li {
                list-style: none;
                margin-right: .2rem;
                a {
                    padding: 0 1.5rem;
                    color: ${props => props.theme === "dark" ? "#FFFFFF" : props.theme === "light" ? "#333333" : "#333333"};
                    &.active {
                        text-decoration: underline;
                    }
                }
            }
        }
        
    `;

    const HeaderSmallButton = styled.button`
        padding: .3rem 1rem;
        font-size: .8rem;
        width: 100%;
    `;

interface HeaderStates {
    currentTheme?: string;
}

class Header extends Component<HeaderStates, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            toggleTheme: true,
            currentTheme: "",
        };
      }

    render() {
        return (
            <Head theme={`${this.state.currentTheme ? this.state.currentTheme : "dark"}`} className="app-header">
                <div className="container">
                    <div className="page-logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <h4>Learn react</h4>
                    <div className="d-block main-menu">
                        <ul>
                            <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
                            <li><NavLink activeClassName='active' to='/employee-list'>All employees</NavLink></li>
                            <li><NavLink activeClassName='active' to='/add-employee'>Add new employee</NavLink></li>
                        </ul>
                    </div>
                    <div className="choose-theme ml-auto">
                        <ul>
                            <li onClick={() => this.selectTheme(this, "dark")}><HeaderSmallButton>Dark</HeaderSmallButton></li>
                            <li onClick={() => this.selectTheme(this, "light")} className="m-0"><HeaderSmallButton>Light</HeaderSmallButton></li>
                        </ul>
                    </div>
                </div>
                
            </Head>
        );
    }

    selectTheme =  (elem: any, para: string) => {
        // if(this.state.currentTheme === elem.value) {

        // }
        this.setState({currentTheme: para});
        console.log(elem.innerHtml);
        // elem.classList.add("currentTheme");
    }
}

export default Header;