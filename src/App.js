import React, { Component } from 'react';

import './App.css';

import Header from './componetes/Header';
import Footer from './componetes/Footer';
import Home from './componetes/Home';
import Chatbot from './componetes/Chatbot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="conteudo">
          <Home/>
          <Chatbot/>
        </div>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
