import React, { Component } from 'react';
import Logo from './logo'
import PointTotal from '../admin/pointTotal'
import Timer from '../admin/timer'

export default class LogoContainer extends Component {
  render() {
    return(
      <React.Fragment>
        <Logo
          team1={this.props.gameDetails[0].teams[0]}
          />
        <PointTotal
          location="client"
          team1={this.props.gameDetails[0].teams[0]}
          />
        <Timer
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          location="client"
          period={this.props.period}
          possession={this.props.possession}
          />
        <PointTotal
          location="client"
          team2={this.props.gameDetails[0].teams[1]}
          />
        <Logo
          team2={this.props.gameDetails[0].teams[1]}
          />
      </React.Fragment>
    )
  }
}
