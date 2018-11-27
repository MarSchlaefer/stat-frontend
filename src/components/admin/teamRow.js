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

  fgTotal = () => {
    let fgTotal = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => fgTotal += player.fgm)
      return fgTotal
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => fgTotal += player.fgm)
      return fgTotal
    } else {
      return <h1>No team selected</h1>
    }
  }

  fgPercentage = () => {
    let fgAttempts = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => fgAttempts += player.fga)
      return ((this.fgTotal() / fgAttempts) * 100)
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => fgAttempts += player.fga)
      return ((this.fgTotal() / fgAttempts) * 100)
    } else {
      return <h1>No team selected</h1>
    }
  }

  ygTotal = () => {
    let ygTotal = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => ygTotal += player.ygm)
      return ygTotal
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => ygTotal += player.ygm)
      return ygTotal
    } else {
      return <h1>No team selected</h1>
    }
  }

  ygPercentage = () => {
    let ygAttempts = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => ygAttempts += player.yga)
      return ((this.ygTotal() / ygAttempts) * 100)
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => ygAttempts += player.yga)
      return ((this.ygTotal() / ygAttempts) * 100)
    } else {
      return <h1>No team selected</h1>
    }
  }

  ftTotal = () => {
    let ftTotal = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => ftTotal += player.fta)
      return ftTotal
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => ftTotal += player.fta)
      return ftTotal
    } else {
      return <h1>No team selected</h1>
    }
  }

  ftPercentage = () => {
    let ftAttempts = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => ftAttempts += player.fta)
      return ((this.ftTotal() / ftAttempts) * 100)
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => ftAttempts += player.fta)
      return ((this.ftTotal() / ftAttempts) * 100)
    } else {
      return <h1>No team selected</h1>
    }
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

  rbTotal = () => {
    let rebTotal = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => rebTotal += player.reb)
      return rebTotal
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => rebTotal += player.reb)
      return rebTotal
    } else {
      return <h1>No team selected</h1>
    }
  }

  asTotal = () => {
    let asTotal = 0
    if (this.props.team1) {
      this.props.team1.players.forEach(player => asTotal += player.ast)
      return asTotal
    } else if (this.props.team2) {
      this.props.team2.players.forEach(player => asTotal += player.ast)
      return asTotal
    } else {
      return <h1>No team selected</h1>
    }
  }

} //end of class
