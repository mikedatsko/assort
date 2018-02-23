import React, { Component } from 'react';
import logo from './assets/images/logo-long.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-slogan">HR Services</div>
          <div className="App-contacts">
            <span className="icon-mail"></span> <a href="mailto:info@assort.top">info@assort.top</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
