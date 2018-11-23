import React, { Component } from 'react';
import GameDetails from '../components/gameDetails'
import Possesion from '../components/possesion'
import IndividualStats from '../components/individualStats'
import TeamStats from '../components/teamStats'

export default class StatsContainer extends Component {

  render() {
    return(
      <div className=''>
        <h1>Stat container!</h1>
        <GameDetails />
        <Possesion />
        <IndividualStats />
        <TeamStats />
      </div>
    )
  }
}
