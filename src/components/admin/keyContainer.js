import React, { Component } from 'react';
import Key from './key'

export default class KeyContainer extends Component{

  constructor() {
    super()
    this.state = {
      actionKeys: [{key: "J", action: "Jump"}, {key: "Y", action: "3 Point"}, {key: "D", action: "Dunk"}, {key: "L", action: "Layup"}, {key: "E", action: "Free Throw"}, {key: "R", action: "Rebound"}, {key: "A", action: "Assist"}, {key: "F", action: "Foul"}, {key: "K", action: "Block"}, {key: "T", action: "Turnover"}, {key: "S", action: "Steal"}, {key: "O", action: "Timeout"}],
      numberKeys: []
    }
  }

  render() {
    return(
      <div className="key-title">
        <h3>Scoring</h3>
        <div className="key-container">
          {this.makeKey()}
        </div>
      </div>
    )
  }

  // ADD CONDITIONAL NABOUT ACTION STATUS AND MOVE STATE UP!!

  makeKey = () => {
    return this.state.actionKeys.map(key => {
      return <Key keyObj={key}/>
    })
  }

  getNumbers = () => {

  }
} // end of class
