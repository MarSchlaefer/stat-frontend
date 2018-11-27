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
        <GameDetails gameDetails={this.props.gameDetails} team1="team1"/>
        <Possession gameDetails={this.props.gameDetails} team1="team1" possession={this.props.possession}/>
        <IndividualStats gameDetails={this.props.gameDetails} team1="team1"/>
        <TeamStats gameDetails={this.props.gameDetails} team1="team1"/>
      </React.Fragment>
    }
    if (this.props.team2) {
      return <React.Fragment>
        <GameDetails gameDetails={this.props.gameDetails} team2="team2"/>
        <Possession gameDetails={this.props.gameDetails} team2="team2" possession={this.props.possession}/>
        <IndividualStats gameDetails={this.props.gameDetails} team2="team2"/>
        <TeamStats gameDetails={this.props.gameDetails} team2="team2"/>
      </React.Fragment>
    }
  }

}//end of class
