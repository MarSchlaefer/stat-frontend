import React, { Component } from 'react';
import GameContainer from './gameContainer'

export default class Client extends Component {
  render() {
    return (
      <div className="client-main">
        <GameContainer gameDetails={this.props.gameDetails}/>
      </div>
    )
  }
}
