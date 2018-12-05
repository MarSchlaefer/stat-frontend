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
          <p>{this.renderStat()}</p>
        </div>
      </div>
    )
  }

  renderStat = () => {
    if (this.props.player) {
      if (this.props.stat === "Leading Scorer") {
        return this.props.player.tp
      } else if (this.props.stat === "Most Rebounds") {
        return this.props.player.reb
      } else if (this.props.stat === "Most 3-Pointers") {
        return this.props.player.ygm
      } else if (this.props.stat === "Most Blocked Shots") {
        return this.props.player.blk
      } else {
        return "No stats"
      }
    }
  }

} //end of class
