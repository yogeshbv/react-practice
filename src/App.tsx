import React from 'react';
import './App.css';
import Header from './panels/header';
import Footer from './panels/footer';
import  PageBody from './panels/pageBody';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <PageBody/>
      <Footer/>
    </div>
  );
}

export default App;
