import React, { Component } from 'react';
import FoulTotal from './foulTotal'
import PointTotal from './pointTotal'
import Timer from './timer'

export default class TimerContainer extends Component{

  constructor() {
    super()
    this.state = {
      intervalId: 0,
      minutes: 20,
      seconds: 0
    }
  }

  render() {
    const minutes = this.formatNum(this.state.minutes)
    const seconds = this.formatNum(this.state.seconds)
    return(
      <div className="timer-stop">
        <div className="timer-container">
          {this.renderContent(minutes, seconds)}
          <br/>
        </div>
        <div className="key" onClick={this.startClicked}>
          <p>Spacebar - Start/Stop</p>
        </div>
      </div>
    )
  }


  startClicked = () => {
    if (this.state.intervalId === 0) {
      return this.startTimer()
    } else {
      return this.pauseTimer()
    }
  }

  spacebar = (event) => {
    console.log('spacebar hit');
    if (event.keyCode === "32"){
      this.startClicked()
    }
  }

  startTimer = () => {
    const intervalId = setInterval(this.decrimentTimer, 1000)
    this.setState({ intervalId })
  }

  pauseTimer = () => {
    clearInterval(this.state.intervalId)
    this.setState({
      intervalId: 0
    })
  }

  decrimentTimer = () => {
    let minutes = this.state.minutes
    let seconds

    if (this.state.seconds === 0) {
      if (this.state.minutes === 0) {
        clearInterval(this.state.intervalId)
        minutes = 0
        seconds = 0
        this.resetTimer()
      } else {
        minutes = this.state.minutes - 1
        seconds = 59
      }
    } else {
      seconds = this.state.seconds - 1
    }
    this.setState({ minutes, seconds})
  }

  formatNum = timerNum => {
    return timerNum.toString().length === 1 ? "0" + timerNum.toString() : timerNum.toString()
  }


  resetTimer = () => {
    this.setState({
      intervalId: 0,
      minutes: 20,
      seconds: 0
    })
  }

  renderContent = (minutes, seconds) => {
    if (this.props.gameDetails.length > 0) {
      return <React.Fragment>
        <FoulTotal team1={this.props.gameDetails[0].teams[0]}/>
        <PointTotal team1={this.props.gameDetails[0].teams[0]}/>
        <Timer
          activateTimer={this.state.timerActive}
          minutes={minutes}
          seconds={seconds}
          />
        <PointTotal team2={this.props.gameDetails[0].teams[1]}/>
        <FoulTotal team2={this.props.gameDetails[0].teams[1]}/>
      </React.Fragment>
    }
  }
}
