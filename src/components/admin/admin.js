import React, { Component } from 'react';
import StatsContainer from './statsContainer'
import PlaysContainer from './playsContainer'

export default class Admin extends Component {
  constructor() {
    super()
    this.state = {
      possession: "H"
    }
  }

  render() {
    return (
      <React.Fragment>
        <StatsContainer
          gameDetails={this.props.gameDetails}
          team1='team1' 
          possession={this.state.possession}
          changePossession={this.changePossession}
          />
        <PlaysContainer
          gameDetails={this.props.gameDetails}
          possession={this.state.possession}
          editGameDetails={this.props.editGameDetails}
          changePossession={this.changePossession}
          />
        <StatsContainer
          gameDetails={this.props.gameDetails}
          team2='team2'
          possession={this.state.possession}
          changePossession={this.changePossession}
          />
      </React.Fragment>
    )
  }

  changePossession = () => {
    console.log("in change click");
    if (this.state.possession === "H") {
      this.setState({
        possession: "A"
      })
    } else {
      this.setState({
        possession: "H"
      })
    }
  }

} //end of class
