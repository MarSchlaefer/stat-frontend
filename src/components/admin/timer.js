import React, { Component } from 'react';

export default class Timer extends Component {

  render() {
    return(
      <div className={this.props.location === "client" ? "timer-client" : "timer-admin"}>
        <div className="timer-nums">
          <p>{this.props.minutes}:{this.props.seconds}</p>
        </div>
        <div className="timer-period">
          <p>{this.props.period}</p>
        </div>
      </div>
    )
  }


} // end of class
