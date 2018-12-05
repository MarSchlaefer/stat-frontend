import React, { Component } from 'react';
import FoulTotal from './foulTotal'
import PointTotal from './pointTotal'
import Timer from './timer'

export default class TimerContainer extends Component{

  render() {
    const minutes = this.props.minutes
    const seconds = this.props.seconds
    return(
      <div className="timer-stop">
        <div className="timer-container">
          {this.renderContent(minutes, seconds)}
          <br/>
        </div>
        <div className="key" onClick={this.props.startClicked}>
          <p>Spacebar - {this.props.currTimer}</p>
        </div>
      </div>
    )
  }


  renderContent = (minutes, seconds) => {
    if (this.props.gameDetails.length > 0) {
      return <React.Fragment>
        <FoulTotal team1={this.props.gameDetails[0].teams[0]}/>
        <PointTotal location="admin" team1={this.props.gameDetails[0].teams[0]}/>
        <Timer
          period={this.props.period}
          location="admin"
          minutes={minutes}
          seconds={seconds}
          />
        <PointTotal location="admin" team2={this.props.gameDetails[0].teams[1]}/>
        <FoulTotal team2={this.props.gameDetails[0].teams[1]}/>
      </React.Fragment>
    }
  }
}
