import React, { Component } from 'react';

export default class Timer extends Component {

  render() {
    return(
      <div className={this.props.location === "client" ? "timer-client" : "timer-admin"}>
        {this.renderTimer()}
        <div className="timer-period">
          <p>{this.renderPeriod()}</p>
        </div>
      </div>
    )
  }

  renderPeriod = () => {
    if (this.props.gamesData && this.props.gamesData.length > 0) {
      return `Period ${this.props.gamesData[0].period}`
    } else {
      return `Period ${this.props.period}`
    }
  }

  renderTimer = () => {
    // debugger
    if (this.props.minutes && this.props.seconds) {
      return <div className="timer-timer">
        <p>{this.props.minutes}:{this.props.seconds}</p>
      </div>
    } else {
      return null
    }
  }

} // end of class
