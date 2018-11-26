import React, { Component } from 'react';
import FoulTotal from './foulTotal'
import PointTotal from './pointTotal'
import Timer from './timer'

export default class TimerContainer extends Component{

  render() {
    return(
      <div className="timer-stop">
        <div className="timer-container">
          {this.renderContent()}
          <br/>
        </div>
        <p>Spacebar - Stop</p>
      </div>
    )
  }

  renderContent = () => {
    if (this.props.gameDetails.length > 0) {
      return <React.Fragment>
        <FoulTotal team1={this.props.gameDetails[0].teams[0]}/>
        <PointTotal team1={this.props.gameDetails[0].teams[0]}/>
        <Timer />
        <PointTotal team2={this.props.gameDetails[0].teams[1]}/>
        <FoulTotal team2={this.props.gameDetails[0].teams[1]}/>
      </React.Fragment>
    }
  }
}
