import React, { Component } from 'react';
import TopPlayer from './topPlayer'
import ChartKey from './chartKey'
import SignOut from './signOut'

export default class TopPlayerContainer extends Component {
  render() {
    return(
      <React.Fragment>
        <p>Top Players</p>
        {this.renderTopPoints()}
        {this.renderTopRebounds()}
        {this.renderTopThree()}
        {this.renderTopBlocks()}
        <div className="page-keys">
          <ChartKey
            showCharts={this.props.showCharts}
            location="client"
            />
          <SignOut
            signOut={this.props.signOut}
            />
        </div>
      </React.Fragment>
    )
  }

  renderTopPoints = () => {
    const players = this.props.playersData
    const sortedPlayers = players.sort((a, b) => {
      return b.tp - a.tp
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Leading Scorer"/>
  }

  renderTopRebounds = () => {
    const players = this.props.playersData
    const sortedPlayers = players.sort((a, b) => {
      return b.reb - a.reb
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Most Rebounds"/>
  }

  renderTopThree = () => {
    const players = this.props.playersData
    const sortedPlayers = players.sort((a, b) => {
      return b.ygm - a.ygm
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Most 3-Pointers"/>
  }

  renderTopBlocks = () => {
    const players = this.props.playersData
    const sortedPlayers = players.sort((a, b) => {
      return b.blk - a.blk
    })
    return <TopPlayer player={sortedPlayers[0]} stat="Most Blocked Shots"/>
  }


} //end of class
