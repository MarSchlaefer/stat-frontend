import React, {Component} from 'react';

export default class TopPlayer extends Component {
  render() {
    return (
      <div className="player-card">
        <div className="player-image">
          <img src={this.props.player.img} alt=""/>
        </div>
        <div className="player-details">
          <p>{this.props.player.name}</p>
          <p>{this.props.stat}</p>
        </div>
      </div>
    )
  }

} //end of class
