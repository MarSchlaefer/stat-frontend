import React, { Component } from 'react';
import LogoContainer from './logoContainer'
import DetailsContainer from './detailsContainer'

export default class GameContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="logo-container">
          <LogoContainer
            gamesData={this.props.gamesData}
            minutes={this.props.minutes}
            seconds={this.props.seconds}
            period={this.props.period}
            possession={this.props.possession}
            playersData={this.props.playersData}
            teamsData={this.props.teamsData}
            />
        </div>
        <div className="details-container">
          <DetailsContainer
            gameDetails={this.props.gameDetails}
            gamesData={this.props.gamesData}
            playsData={this.props.playsData}
            playersData={this.props.playersData}
            teamsData={this.props.teamsData}
            showCharts={this.props.showCharts}
            signOut={this.props.signOut}
            />
        </div>
    </React.Fragment>
    )
  }
}
