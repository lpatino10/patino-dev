import React, { Component } from 'react';
import pic from './website-pic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pic} className="App-logo" alt="pic" />
        </header>
      </div>
    );
  }
}

export default App;
