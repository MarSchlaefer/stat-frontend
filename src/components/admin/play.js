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
    // console.log(this.findPlayer(this.props.play.player_id), "this is the play");
      // debugger
    const player = this.findPlayer(this.props.play.player_id)
    // debugger
    if (player) {
    //   debugger
    //   console.log(this.props.play.action);
    //   console.log(player.name);
    //   console.log(this.props.play.result);
    // debugger
      return `${this.props.play.action} - #${player.number} - ${player.name} is ${this.props.play.result}.`
    } else {
      return ''
    }
  }

  findPlayer = (id) => {
    const teams = this.props.gameDetails[0].teams[0].players.concat(this.props.gameDetails[0].teams[1].players)
    const player = teams.find(player => player.id === id);
    // debugger
    return player;
    // if (this.props.possession === "H") {
    //   return this.props.gameDetails[0].teams[0].players.find(player => {
    //     return player.id === id})
    // } else {
    //   return this.props.gameDetails[0].teams[1].players.find(player => {
    //     return player.id === id})
    // }
  }

} //end of class
