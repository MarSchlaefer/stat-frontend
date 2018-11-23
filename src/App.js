import React, { Component } from 'react';
import './App.css';
import StatsContainer from './components/statsContainer'
import PlaysContainer from './components/playsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatsContainer className="column-sm"/>
        <PlaysContainer className="column-sm"/>
        <StatsContainer className="column-sm"/>
      </div>
    );
  }
}

export default App;
