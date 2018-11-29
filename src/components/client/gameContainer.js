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
            />
        </div>
        <div className="details-container">
          <DetailsContainer
            gameDetails={this.props.gameDetails}
            currentPlays={this.props.currentPlays}
            />
        </div>
    </React.Fragment>
    )
  }
}
