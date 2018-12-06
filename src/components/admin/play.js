import React, { Component } from 'react';

export default class Play extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <td>{this.props.play.timer}</td>
        <td>{this.formatPlay()}</td>
      </React.Fragment>
    )
  }

  formatPlay = () => {
    const player = this.findPlayer(this.props.play.player_id)
    if (player) {
      if (this.props.play.action === "J") {
        return `Jump shot - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "L") {
        return `Layup - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "D") {
        return `Dunk - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "Y") {
        return `Three Pointer - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "R") {
        return `Rebound - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "T") {
        return `Turnover - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "S") {
        return `Steal - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "A") {
        return `Assist - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "E") {
        return `Free throw - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "F") {
        return `Foul - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "K") {
        return `Block - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else if (this.props.play.action === "O") {
        return `Timeout - #${player.number} - ${player.name} is ${this.props.play.result}.`
      } else {
        return `${this.props.play.action} - #${player.number} - ${player.name} is ${this.props.play.result}.`
      }
    } else {
      return ''
    }
  }

  findPlayer = (id) => {
    // debugger
    const teams = this.props.gameDetails[0].teams[0].players.concat(this.props.gameDetails[0].teams[1].players)
    const player = teams.find(player => player.id === id);
    return player;
  }

} //end of class
