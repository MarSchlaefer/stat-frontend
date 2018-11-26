import React, { Component } from 'react';
import IndividualPlayer from './individualPlayer'

export default class IndividualStats extends Component{

  render() {
    return(
      <div className="stats-container">
        <table className="player">
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>TP</th>
              <th>FG</th>
              <th>3FG</th>
              <th>FT</th>
              <th>PF</th>
              <th>RB</th>
              <th>AS</th>
            </tr>
            {this.makePlayer()}
          </tbody>
        </table>
      </div>
    )
  }

  makePlayer = () => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      return this.props.gameDetails[0].teams[0].players.map(player => {
        return <tr><IndividualPlayer
          gameDetails={this.props.gameDetails}
          team1="team1"
          key={player.id}
          player={player}
          />
        </tr>
      })
    } else if (this.props.gameDetails.length > 0 && this.props.team2) {
      return this.props.gameDetails[0].teams[1].players.map(player => {
        return <tr><IndividualPlayer
          gameDetails={this.props.gameDetails}
          team2="team2"
          key={player.id}
          player={player}
          />
      </tr>
      })
    } else {
      return <tr>
        <td>
          There are no players
        </td>
      </tr>
    }
  }
}// end of class
