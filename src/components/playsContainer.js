import React, { Component } from 'react';
import TimerContainer from '../components/timerContainer'
import KeyContainer from '../components/keyContainer'
import PlayByPlayContainer from '../components/playByPlayContainer'

export default class PlaysContainer extends Component {

  render() {
    return(
      <div>
        <h1>Plays container!</h1>
        <TimerContainer />
        <KeyContainer />
        <PlayByPlayContainer />
      </div>
    )
  }
}
