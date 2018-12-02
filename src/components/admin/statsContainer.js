import React, { Component } from 'react';
import GameDetails from './gameDetails'
import Possession from './possession'
import IndividualStats from './individualStats'
import TeamStats from './teamStats'

export default class StatsContainer extends Component {

  render() {
    return(
      <div className="column stats">
        {this.renderContent()}
      </div>
    )
  }

  renderContent = () => {
    if (this.props.team1) {
      return <React.Fragment>
        <GameDetails
          changePeriod={this.props.changePeriod}
          gameDetails={this.props.gameDetails}
          team1={this.props.team1}
          />
        <Possession
          gameDetails={this.props.gameDetails}
          team1="team1"
          possession={this.props.possession}
          changePossession={this.props.changePossession}
          />
        <IndividualStats
          gameDetails={this.props.gameDetails}
          team1="team1"
          />
        <TeamStats
          location="admin"
          team1={this.props.team1}
          gameDetails={this.props.gameDetails}
          />
      </React.Fragment>
    }
    if (this.props.team2) {
      return <React.Fragment>
        <GameDetails
          resetTimer={this.props.resetTimer}
          changePeriod={this.props.changePeriod}
          gameDetails={this.props.gameDetails}
          team2="team2"
          />
        <Possession
          gameDetails={this.props.gameDetails}
          team2="team2"
          possession={this.props.possession}
          changePossession={this.props.changePossession}
          />
        <IndividualStats
          gameDetails={this.props.gameDetails}
          team2="team2"
          />
        <TeamStats
          location="admin"
          team2={this.props.gameDetails[0].teams[1]}
          gameDetails={this.props.gameDetails}
          />
      </React.Fragment>
    }
  }

}//end of class
