import React, { Component } from 'react';

export default class IndividualPlayer extends Component{

  render() {
    return(
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    )
  }

  renderContent = () => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      return <React.Fragment>
      <td>{this.props.player.number}</td>
      <td>{this.props.player.name}</td>
      <td>{this.props.player.tp}</td>
      <td>{this.props.player.fgm} - {this.props.player.fga - this.props.player.fgm}</td>
      <td>{this.props.player.ygm} - {this.props.player.yga - this.props.player.ygm}</td>
      <td>{this.props.player.ftm} - {this.props.player.fta - this.props.player.ftm}</td>
      <td>{this.props.player.pf}</td>
      <td>{this.props.player.reb}</td>
      <td>{this.props.player.ast}</td>
      </React.Fragment>
    }
    if (this.props.gameDetails.length > 0 && this.props.team2) {
      return <React.Fragment>
      <td>{this.props.player.number}</td>
      <td>{this.props.player.name}</td>
      <td>{this.props.player.tp}</td>
      <td>{this.props.player.fgm} - {this.props.player.fga - this.props.player.fgm}</td>
      <td>{this.props.player.ygm} - {this.props.player.yga - this.props.player.ygm}</td>
      <td>{this.props.player.ftm} - {this.props.player.fta - this.props.player.ftm}</td>
      <td>{this.props.player.pf}</td>
      <td>{this.props.player.reb}</td>
      <td>{this.props.player.ast}</td>
      </React.Fragment>
    }
  }
}// end of class
