import React from 'react';
import './App.css';
// import Footer from './panels/footer';
// import PageBody from './panels/pageBody';
import Header from './panels/Header';
import Footer from './panels/Footer';
import  PageBody from './panels/PageBody';
import styled from 'styled-components';

const AppWrapper = styled.div `
    display: flex;
    flex-direction: column;
`;


function App() {
  return (
    <AppWrapper>
      <Header />
      <PageBody />
      <Footer />
    </AppWrapper>
    
  );
}

export default App;
