import React from 'react';
import './App.css';
import Header from './panels/Header';
import Footer from './panels/Footer';
import  PageBody from './panels/PageBody';
import styled from 'styled-components';
import Theme from './styled/Theme';

const AppWrapper = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
`;

function App() {
  return (
    <Theme>
      <AppWrapper>
        <Header />
        <PageBody />
        <Footer />
      </AppWrapper>
    </Theme>
    
  );
}

export default App;
