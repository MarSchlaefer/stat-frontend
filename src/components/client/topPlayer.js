import React, {Component} from 'react';

export default class TopPlayer extends Component {
  render() {
    return (
      <div className="player-card">
        <div className="player-image">
          {this.props.player ? <img src={this.props.player.img} alt=""/> : <img src='https://cateringopmaat.nl/wp-content/uploads/2017/08/blank-profile-picture-973460_1280.png' alt=''/>}
        </div>
        <div className="player-details">
          <p>{this.props.player ? this.props.player.name : "No player"}</p>
          <p>{this.props.stat ? this.props.stat : "No stats"}</p>
        </div>
      </div>
    )
  }

} //end of class
