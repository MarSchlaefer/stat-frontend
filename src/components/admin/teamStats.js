import React, { Component } from 'react';
import TeamRow from './teamRow'

export default class TeamStats extends Component{

  render() {
    return(
      <div className="team-container">
        <div className="team-title">
          <p>team</p>
          <p>totals</p>
        </div>
        <table className="team-table">
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
        <div className="team-coaches">
          {this.makeCoaches()}
        </div>
      </div>
    )
  }

  makeRow = () => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      return <tr><TeamRow
        team1={this.props.gameDetails[0].teams[0]}/>
      </tr>
    } else if (this.props.gameDetails.length > 0 && this.props.team2) {
      return <tr><TeamRow
        team2={this.props.gameDetails[0].teams[1]}/>
      </tr>
    } else {
      return <tr>
        <td>
          No team selected
        </td>
      </tr>
    }
  }

  makeCoaches = () => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      return this.props.gameDetails[0].teams[0].coaches.map(coach => {
        return <p>{coach.name} - {coach.title}</p>
      })
    } else if (this.props.gameDetails.length > 0 && this.props.team2) {
      return this.props.gameDetails[0].teams[1].coaches.map(coach => {
        return <p>{coach.name} - {coach.title}</p>
      })
    } else {
      return <p>No coaches</p>
    }
  }

} //end of class
