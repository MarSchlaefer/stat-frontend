import React, { Component } from 'react';
import Logo from './logo'
import FoulTotal from '../admin/foulTotal'
import PointTotal from '../admin/pointTotal'
import Timer from '../admin/timer'

export default class LogoContainer extends Component {
  render() {
    return(
      <React.Fragment>
        <Logo team1={this.props.gameDetails[0].teams[0]}/>
        <PointTotal team1={this.props.gameDetails[0].teams[0]}/>
        <Timer />
        <PointTotal team2={this.props.gameDetails[0].teams[1]}/>
        <Logo team2={this.props.gameDetails[0].teams[1]}/>
      </React.Fragment>
    )
  }
}
