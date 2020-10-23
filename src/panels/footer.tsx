import styled from 'styled-components';
import React from 'react';
import { Container} from '../styled/styles';

const FooterStyle = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #343a40;
`;

const Footer = () => {
    return ( 
        <FooterStyle>
            <Container innerSpacing="20" textColor="white">Copyright © 2020 test Inc.</Container>
        </FooterStyle>
    );
}
 
export default Footer;
