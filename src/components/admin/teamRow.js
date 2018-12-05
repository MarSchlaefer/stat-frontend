import React, { Component } from 'react';

export default class TeamRow extends Component {
  render() {
    return (
      <React.Fragment>
        <td>{this.pointTotal()}</td>
        <td>{this.fgTotal()}</td>
        <td>{this.fgPercentage()}</td>
        <td>{this.ygTotal()}</td>
        <td>{this.ygPercentage()}</td>
        <td>{this.ftTotal()}</td>
        <td>{this.ftPercentage()}</td>
        <td>{this.pfTotal()}</td>
        <td>{this.rbTotal()}</td>
        <td>{this.asTotal()}</td>
      </React.Fragment>
    )
  }

  pointTotal = () => {
    if (this.props.team1) {
      return this.props.team1.tp
    } else if (this.props.team2) {
      return this.props.team2.tp
    } else {
      return <h1>No team selected</h1>
    }
  }

  fgTotal = () => {
    if (this.props.team1) {
      return this.props.team1.fga
    } else if (this.props.team2) {
      return this.props.team2.fga
    } else {
      return <h1>No team selected</h1>
    }
  }

  fgPercentage = () => {
    if (this.props.team1) {
      return ((this.props.team1.fgm/this.props.team1.fga) * 100).toFixed(2)
    } else if (this.props.team2) {
      return ((this.props.team2.fgm/this.props.team2.fga) * 100).toFixed(2)
    } else {
      return <h1>No team selected</h1>
    }
  }

  ygTotal = () => {
    if (this.props.team1) {
      return this.props.team1.yga
    } else if (this.props.team2) {
      return this.props.team2.yga
    } else {
      return <h1>No team selected</h1>
    }
  }

  ygPercentage = () => {
    if (this.props.team1) {
      return ((this.props.team1.ygm/this.props.team1.yga) * 100).toFixed(2)
    } else if (this.props.team2) {
      return ((this.props.team2.ygm/this.props.team2.yga) * 100).toFixed(2)
    } else {
      return <h1>No team selected</h1>
    }
  }

  ftTotal = () => {
    if (this.props.team1) {
      return this.props.team1.fta
    } else if (this.props.team2) {
      return this.props.team2.fta
    } else {
      return <h1>No team selected</h1>
    }
  }

  ftPercentage = () => {
    if (this.props.team1) {
      return ((this.props.team1.ftm/this.props.team1.fta) * 100).toFixed(2)
    } else if (this.props.team2) {
      return ((this.props.team2.ftm/this.props.team2.fta) * 100).toFixed(2)
    } else {
      return <h1>No team selected</h1>
    }
  }

  pfTotal = () => {
    if (this.props.team1) {
      return this.props.team1.pf
    } else if (this.props.team2) {
      return this.props.team2.pf
    } else {
      return <h1>No team selected</h1>
    }
  }

  rbTotal = () => {
    if (this.props.team1) {
      return this.props.team1.reb
    } else if (this.props.team2) {
      return this.props.team2.reb
    } else {
      return <h1>No team selected</h1>
    }
  }

  asTotal = () => {
    if (this.props.team1) {
      return this.props.team1.ast
    } else if (this.props.team2) {
      return this.props.team2.ast
    } else {
      return <h1>No team selected</h1>
    }
  }

} //end of class
