import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Item from './item.js'

class App extends Component {
  render() {
    return (
      <div className="App container-grid">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}

export default App;
