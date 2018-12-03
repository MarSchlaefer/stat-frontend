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
            <PlayByPlayContainer
              currentPlays={this.props.playsData}
              gameDetails={this.props.gameDetails}
              />
          </div>
          <div className="team-client">
            <TeamStats
              location="client"
              gameDetails={this.props.gameDetails}
              team1={this.props.teamsData[0]}
              />
            <TeamStats
              location="client"
              gameDetails={this.props.gameDetails}
              team2={this.props.teamsData[1]}
              />
          </div>
        </div>
        <div className="top-players">
          <TopPlayerContainer
            playersData={this.props.playersData}
            showCharts={this.props.showCharts}
            signOut={this.props.signOut}
            />
        </div>
      </React.Fragment>
    )
  }

} //end of class
