import React, { Component } from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const Head = styled.header`
        background: ${props => props.theme === "dark" ? "#212121" : props.theme === "light" ? "#f5f5f5" : "#FFFFFF"};
        color: ${props => props.theme === "dark" ? "#FFFFFF" : props.theme === "light" ? "#333333" : "#333333"};
    `;

class Header extends Component {

    render() {
        return (
            <Head theme="dark" className="app-header">
                <div className="container">
                    <div className="page-logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <h4>Learn react</h4>
                </div>
                
            </Head>
        );
    }
}

export default Header;