import React, { Component } from 'react';
import GameContainer from './gameContainer'

export default class Client extends Component {
  render() {
    return (
      <div className="client-main">
        {this.renderContent()}
      </div>
    )
  }

  renderContent = () => {
    if (this.props.gameDetails.length > 0) {
      return <React.Fragment>
        <GameContainer
          period={this.props.period}
          possession={this.props.possession}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          gameDetails={this.props.gameDetails}
          currentPlays={this.props.currentPlays}
          />
      </React.Fragment>
    }
  }


} //end of class
