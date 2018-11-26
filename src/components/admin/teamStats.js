import React, { Component } from 'react';
import TeamRow from './teamRow'

export default class TeamStats extends Component{

  render() {
    return(
      <div className="team-container">
        <h2>team</h2>
        <h2>totals</h2>
        <table>
          <tbody>
            <tr>
              <th>TP</th>
              <th>FG</th>
              <th>FG%</th>
              <th>3FG</th>
              <th>3FG%</th>
              <th>FT</th>
              <th>FT%</th>
              <th>PF</th>
              <th>RB</th>
              <th>AS</th>
            </tr>
            {this.makeRow()}
          </tbody>
        </table>
      </div>
    )
  }

  makeRow = () => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      return <TeamRow
        team1={this.props.gameDetails[0].teams[0]}/>
    } else if (this.props.gameDetails.length > 0 && this.props.team2) {
      return <TeamRow
        team2={this.props.gameDetails[0].teams[1]}/>
    } else {
      return <tr>
        <td>
          No team selected
        </td>
      </tr>
    }
  }

} //end of class
