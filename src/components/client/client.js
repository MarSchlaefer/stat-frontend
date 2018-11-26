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
        <GameContainer gameDetails={this.props.gameDetails}/>
      </React.Fragment>
    }
  }
} //end of class
