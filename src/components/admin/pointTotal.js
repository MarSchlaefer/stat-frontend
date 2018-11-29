import React, { Component } from 'react';

export default class PointTotal extends Component {
  render() {
    return(
      <div className={this.props.location === "client" ? "points-client" : "points-admin"}>
        {this.renderPoints()}
      </div>
    )
  }

  renderPoints = () => {
    if (this.props.team1) {
      return <React.Fragment>
        <h4>Home</h4>
        <p>{this.pointTotal()}</p>
      </React.Fragment>
    } else if (this.props.team2) {
      return <React.Fragment>
        <h4>Away</h4>
        <p>{this.pointTotal()}</p>
      </React.Fragment>
    } else {
      return <p>No team selected</p>
    }
  }

  pointTotal = () => {
    let pointTotal = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => pointTotal += player.tp)
      return pointTotal
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => pointTotal += player.tp)
      return pointTotal
    } else {
      return <h1>No team selected</h1>
    }
  }
} //end of class
