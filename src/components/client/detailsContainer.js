import React, { Component } from 'react';
import PlayByPlayContainer from '../admin/playByPlayContainer'
import TeamStats from '../admin/teamStats'
import TopPlayerContainer from './topPlayerContainer'

export default class DetailsContainer extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="plays-stats">
          <div className="plays-client">
            <PlayByPlayContainer />
          </div>
          <div className="team-client">
            <TeamStats gameDetails={this.props.gameDetails} team1="team1"/>
            <TeamStats gameDetails={this.props.gameDetails} team2="team2"/>
          </div>
        </div>
        <div className="top-players">
          <TopPlayerContainer />
        </div>
      </React.Fragment>
    )
  }
}
