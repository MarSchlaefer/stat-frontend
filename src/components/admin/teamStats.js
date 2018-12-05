import React, { Component } from 'react';
import TeamRow from './teamRow'

export default class TeamStats extends Component{

  render() {
    return(
      <div className={this.props.location === "client" ? "team-container-client" : "team-container-admin"}>
        <div className={this.props.location === "client" ? "team-title-client" : "team-title-admin"}>
          <p>{this.makeTitle()}</p>
        </div>
        <table className={this.props.location === "client" ? "team-table-client" : "team-table-admin"}>
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
        <div className="team-coaches-container">
          <p>Coaches</p>
          <div className="team-coaches">
            {this.makeCoaches()}
          </div>
        </div>
      </div>
    )
  }

  makeTitle = () => {
    if (this.props.team1) {
      return `team totals - ${this.props.team1.name}`
    } else if (this.props.team2) {
      return `team totals - ${this.props.team2.name}`
    } else {
      return 'team totals'
    }
  }

  makeRow = () => {
    if (this.props.team1) {
      return <tr><TeamRow
        team1={this.props.team1}/>
    </tr>
    } else {
      return <tr><TeamRow
        team2={this.props.team2}/>
      </tr>
    }
  }

  makeCoaches = () => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      return this.props.gameDetails[0].teams[0].coaches.map(coach => {
        return <div>{coach.name} - {coach.title}</div>
      })
    } else if (this.props.gameDetails.length > 0 && this.props.team2) {
      return this.props.gameDetails[0].teams[1].coaches.map(coach => {
        return <div>{coach.name} - {coach.title}</div>
      })
    } else {
      return <p>No coaches</p>
    }
  }

} //end of class
