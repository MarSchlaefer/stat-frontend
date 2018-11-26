import React, { Component } from 'react';

export default class GameDetails extends Component{

  render() {
    return(
      <div className="game-details">
        {this.renderContent()}
      </div>
    )
  }

  renderContent = () => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      return <React.Fragment>
      <h1>{this.props.gameDetails[0].teams[0].name} vs. {this.props.gameDetails[0].teams[1].name}</h1>
      <h3>{this.props.gameDetails[0].time}</h3>
      <h3>{this.props.gameDetails[0].date}</h3>
      </React.Fragment>
    }
    if (this.props.gameDetails.length > 0 && this.props.team2) {
      return <h1>game keys</h1>
    }
  }
} //end of class
