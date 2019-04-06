import React, { Component } from 'react'
import './App.css';
import Die from './Components/Die'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Roll the Dice</h1>
        <h2 style={{fontSize: 16}}>Select a die below and click to roll</h2>
        <Die sides={6}/>
        <Die sides={8}/>
        <Die sides={10}/>
        <Die sides={12}/>
        <Die sides={20}/>
      </div>
    );
  }
}

export default App;
