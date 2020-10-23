import React from 'react';
import styled from 'styled-components';
import { Container} from '../styled/styles';

const FooterStyle = styled.footer`
    width: 100%;
    background: #343a40;
`;

const Footer = () => {
    return ( 
        <FooterStyle>
            <Container innerSpacing="1.5" textColor="white">Copyright © 2020 test Inc.</Container>
        </FooterStyle>
    );
}
 
export default Footer;
