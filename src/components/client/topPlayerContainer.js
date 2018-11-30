import React, { Component } from 'react';
import TopPlayer from './topPlayer'

export default class TopPlayerContainer extends Component {
  render() {
    return(
      <React.Fragment>
        <p>Top Players</p>
        {this.renderTopPoints()}
        {this.renderTopRebounds()}
        {this.renderTopThree()}
        {this.renderTopBlocks()}
      </React.Fragment>
    )
  }

  renderTopPoints = () => {
    const players = this.props.changedPlayers.filter(player => player.tp > 0)
    const sortedPlayers = players.sort((a, b) => {
      return b.tp - a.tp
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Leading Scorer"/>
  }

  renderTopRebounds = () => {
    const players = this.props.changedPlayers.filter(player => player.reb > 0)
    const sortedPlayers = players.sort((a, b) => {
      return b.reb - a.reb
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Most Rebounds"/>
  }

  renderTopThree = () => {
    const players = this.props.changedPlayers.filter(player => player.ygm > 0)
    const sortedPlayers = players.sort((a, b) => {
      return b.ygm - a.ygm
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Most 3-Pointers"/>
  }

  renderTopBlocks = () => {
    const players = this.props.changedPlayers.filter(player => player.blk > 0)
    const sortedPlayers = players.sort((a, b) => {
      return b.blk - a.blk
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Most Blocked Shots"/>
  }

} //end of class
