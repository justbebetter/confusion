import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main />
      </div>
    );
  }
}


export default App;
