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
      return <p>0</p>
    }
  }

  pointTotal = () => {
    let homePointTotal = 0
    let awayPointTotal = 0
    if (this.props.team1) {
      this.props.team1.forEach(player => homePointTotal += player.tp)
      return homePointTotal
    } else {
      this.props.team2.forEach(player => awayPointTotal += player.tp)
      return awayPointTotal
    }
  }
} //end of class
