import React, { Component } from 'react';
import TimerContainer from './timerContainer'
import KeyContainer from './keyContainer'
import PlayByPlayContainer from './playByPlayContainer'

export default class PlaysContainer extends Component {

  constructor() {
    super()
    this.state = {
      plays: [],
      intervalId: 0,
      minutes: 20,
      seconds: 0
    }
  }

  componentDidMount = () => {
    this.getPlays()
  }

  render() {
    const minutes = this.formatNum(this.state.minutes)
    const seconds = this.formatNum(this.state.seconds)
    return(
      <div className="column plays">
        <TimerContainer
          gameDetails={this.props.gameDetails}
          minutes={minutes}
          seconds={seconds}
          startClicked={this.startClicked}/>
        <KeyContainer
          gameDetails={this.props.gameDetails}
          possession={this.props.possession}
          minutes={minutes}
          seconds={seconds}
          editGameDetails={this.props.editGameDetails}
          getNewPlays={this.getNewPlays}
          changePossession={this.props.changePossession}
          getPlays={this.getPlays}
          />
        <PlayByPlayContainer
          plays={this.state.plays}
          />
      </div>
    )
  }

  getPlays = () => {
    fetch('http://localhost:3000/plays')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        plays: json
      }, () => console.log(this.state.plays, "plays"))
    })
  }

  getNewPlays = (json) => {
    this.setState(currentState => ({
      plays: [json, ...currentState.plays]
    }), () => console.log(this.state.plays, "after fetch"))
  }

  formatNum = timerNum => {
    return timerNum.toString().length === 1 ? "0" + timerNum.toString() : timerNum.toString()
  }

  startClicked = () => {
    if (this.state.intervalId === 0) {
      return this.startTimer()
    } else {
      return this.pauseTimer()
    }
  }

  // spacebar = (event) => {
  //   console.log('spacebar hit');
  //   if (event.keyCode === "32"){
  //     this.startClicked()
  //   }
  // }

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

  resetTimer = () => {
    this.setState({
      intervalId: 0,
      minutes: 20,
      seconds: 0
    })
  }

} //end of class
