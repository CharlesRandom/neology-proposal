import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
