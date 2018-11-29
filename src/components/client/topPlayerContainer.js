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
    const players = this.props.gameDetails[0].teams[0].players.concat(this.props.gameDetails[0].teams[1].players)
    const sortedPlayers = players.sort((a, b) => {
      return b.tp - a.tp
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Leading Scorer"/>
  }

  renderTopRebounds = () => {
    const players = this.props.gameDetails[0].teams[0].players.concat(this.props.gameDetails[0].teams[1].players)
    const sortedPlayers = players.sort((a, b) => {
      return b.reb - a.reb
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Most Rebounds"/>
  }

  renderTopThree = () => {
    const players = this.props.gameDetails[0].teams[0].players.concat(this.props.gameDetails[0].teams[1].players)
    const sortedPlayers = players.sort((a, b) => {
      return b.ygm - a.ygm
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Most 3-Pointers"/>
  }

  renderTopBlocks = () => {
    const players = this.props.gameDetails[0].teams[0].players.concat(this.props.gameDetails[0].teams[1].players)
    const sortedPlayers = players.sort((a, b) => {
      return b.blk - a.blk
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Most Blocked Shots"/>
  }

} //end of class
