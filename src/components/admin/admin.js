import React, { Component } from 'react';
import StatsContainer from './statsContainer'
import PlaysContainer from './playsContainer'

export default class Admin extends Component {

  componentDidMount = () => {
    document.addEventListener("keydown", this.props.handleKeyDown)
  }

  render() {
    console.log(this.sortTeams()[0], "this is team 1")
    return (
      <React.Fragment>
        <StatsContainer
          gameDetails={this.props.gameDetails}
          team1={this.sortTeams()[0]}
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
          team2={this.sortTeams()[1]}
          possession={this.props.possession}
          changePeriod={this.props.changePeriod}
          changePossession={this.props.changePossession}
          changedPlayers={this.props.changedPlayers}
          showCharts={this.props.showCharts}
          signOut={this.props.signOut}
          />
      </React.Fragment>
    )
  }

  sortTeams = () => {
    console.log(this.props.gameDetails, "this is game in sort")
    const sortedTeams = this.props.gameDetails[0].teams.sort((a, b) => a.id - b.id)
    return sortedTeams
  }

} //end of class
