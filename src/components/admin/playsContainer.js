import React, { Component } from 'react';
import TimerContainer from './timerContainer'
import KeyContainer from './keyContainer'
import PlayByPlayContainer from './playByPlayContainer'

export default class PlaysContainer extends Component {


  render() {
    return(
      <div className="column plays">
        <TimerContainer
          period={this.props.period}
          gameDetails={this.props.gameDetails}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          startClicked={this.props.startClicked}/>
        <KeyContainer
          gameDetails={this.props.gameDetails}
          possession={this.props.possession}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          editGameDetails={this.props.editGameDetails}
          changePossession={this.props.changePossession}
          currentPlay={this.props.currentPlay}
          />
        <PlayByPlayContainer
          currentPlays={this.props.currentPlays}
          gameDetails={this.props.gameDetails}
          possession={this.props.possession}
          />
      </div>
    )
  }

} //end of class
