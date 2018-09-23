import React, { Component } from 'react';

import './App.css';
import {Provider} from 'react-redux'

import store from './store'

import Header from './componetes/Header';
import Footer from './componetes/Footer';
import Home from './componetes/Home';
import Chatbot from './componetes/Chatbot';

class App extends Component {
  render() {
    return (
      
        <Provider store={store}>
          <div className="conteudo">
          <Header />        
          <Home/>
          <Chatbot/>           
          <Footer/>
          </div>
        </Provider>
        
      
    );
  }
}

export default App;
