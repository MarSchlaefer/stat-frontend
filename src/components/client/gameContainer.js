import React, { Component } from 'react';
import LogoContainer from './logoContainer'
import DetailsContainer from './detailsContainer'

export default class GameContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="logo-container">
          <LogoContainer
            gameDetails={this.props.gameDetails}
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
