import React, {Component} from 'react';

export default class TopPlayer extends Component {
  render() {
    return (
      <div className="player-card">
        <div className="player-image">
          <img src="https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch_8.png"/>
        </div>
        <div className="player-details">
          <p>Name</p>
          <p>Stat Details</p>
        </div>
      </div>
    )
  }
}
