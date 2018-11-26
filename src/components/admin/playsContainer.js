import React, { Component } from 'react';
import TimerContainer from './timerContainer'
import KeyContainer from './keyContainer'
import PlayByPlayContainer from './playByPlayContainer'

export default class PlaysContainer extends Component {

  render() {
    return(
      <div className="column plays">
        <TimerContainer gameDetails={this.props.gameDetails}/>
        <KeyContainer gameDetails={this.props.gameDetails}/>
        <PlayByPlayContainer />
      </div>
    )
  }
}
