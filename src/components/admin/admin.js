import React, { Component } from 'react';
import StatsContainer from './statsContainer'
import PlaysContainer from './playsContainer'

export default class Admin extends Component {

  render() {
    return (
      <React.Fragment>
        <StatsContainer
          gameDetails={this.props.gameDetails}
          team1='team1'
          possession={this.props.possession}
          changePeriod={this.props.changePeriod}
          changePossession={this.props.changePossession}
          changedPlayers={this.props.changedPlayers}
          />
        <PlaysContainer
          period={this.props.period}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          startClicked={this.props.startClicked}
          gameDetails={this.props.gameDetails}
          possession={this.props.possession}
          editGameDetails={this.props.editGameDetails}
          changePossession={this.props.changePossession}
          currentPlay={this.props.currentPlay}
          currentPlays={this.props.currentPlays}
          />
        <StatsContainer
          resetTimer={this.props.resetTimer}
          gameDetails={this.props.gameDetails}
          team2='team2'
          possession={this.props.possession}
          changePeriod={this.props.changePeriod}
          changePossession={this.props.changePossession}
          changedPlayers={this.props.changedPlayers}
          />
      </React.Fragment>
    )
  }

} //end of class
