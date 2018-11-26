import React, { Component } from 'react';

export default class FoulTotal extends Component {
  render() {
    return(
      <div className="fouls">
        <h4>Fouls</h4>
        <p>{this.pfTotal()}</p>
      </div>
    )
  }

  pfTotal = () => {
    let pfTotal = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => pfTotal += player.pf)
      return pfTotal
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => pfTotal += player.pf)
      return pfTotal
    } else {
      return <h1>No team selected</h1>
    }
  }
} //end of class
