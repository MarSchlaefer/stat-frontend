import React, { Component } from 'react';
import StatsContainer from './statsContainer'
import PlaysContainer from './playsContainer'

export default class Admin extends Component {
  render() {
    return (
      <div className="employee">
        <StatsContainer gameDetails={this.props.gameDetails} team1='team1'/>
        <PlaysContainer gameDetails={this.props.gameDetails}/>
        <StatsContainer gameDetails={this.props.gameDetails} team2='team2'/>
      </div>
    )
  }
}
