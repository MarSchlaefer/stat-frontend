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
    if (this.props.team1) {
      return this.props.team1.tp
    } else {
      return this.props.team2.tp
    }
  }
} //end of class
