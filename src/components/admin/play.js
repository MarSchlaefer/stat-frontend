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

  // renderPlay = () => {
  //   // debugger
  //   return <React.Fragment>
  //     <td>{this.props.play.timer}</td>
  //     <td>{this.formatPlay()}</td>
  //   </React.Fragment>
  // }

  formatPlay = () => {
    console.log("formatting play")
    // debugger
    const player = this.findPlayer(this.props.play.player_id)
    // debugger
    if (player) {
      return `${this.props.play.action} - #${player.number} - ${player.name} is ${this.props.play.result}.`
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
