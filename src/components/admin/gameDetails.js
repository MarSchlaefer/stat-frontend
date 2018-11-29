import React, { Component } from 'react';
import Key from './key'

export default class GameDetails extends Component{

  render() {
    const keys = ["New Period", "Reset Timer"]
    return(
      <div className="game-details">
        {this.renderContent(keys)}
      </div>
    )
  }

  renderContent = (keys) => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      // debugger
      return <React.Fragment>
      <h1>{this.props.gameDetails[0].teams[0].name} vs. {this.props.gameDetails[0].teams[1].name}</h1>
      <h3>{this.props.gameDetails[0].time}</h3>
      <h3>{this.props.gameDetails[0].date}</h3>
      </React.Fragment>
    }
    if (this.props.gameDetails.length > 0 && this.props.team2) {
      return <React.Fragment>
        <h1>game keys</h1>
        <div className="game-keys">
          {this.makeKeys(keys)}
        </div>
      </React.Fragment>
    }
  }

  makeKeys = (keys) => {
    return keys.map(key => {
      return <Key keyName={key} changePeriod={this.props.changePeriod} resetTimer={this.props.resetTimer}/>
    })
  }
} //end of class
