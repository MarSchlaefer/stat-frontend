import React, { Component } from 'react';
import PlayByPlayContainer from '../admin/playByPlayContainer'
import TeamStats from '../admin/teamStats'
import TopPlayerContainer from './topPlayerContainer'

export default class DetailsContainer extends Component {

  constructor() {
    super()
    this.state = ({
      plays: []
    })
  }

  componentDidMount = () => {
    this.getPlays()
  }

  render() {
    return(
      <React.Fragment>
        <div className="plays-stats">
          <div className="plays-client">
            <PlayByPlayContainer plays={this.state.plays}/>
          </div>
          <div className="team-client">
            <TeamStats gameDetails={this.props.gameDetails} team1="team1"/>
            <TeamStats gameDetails={this.props.gameDetails} team2="team2"/>
          </div>
        </div>
        <div className="top-players">
          <TopPlayerContainer />
        </div>
      </React.Fragment>
    )
  }

  getPlays = () => {
    fetch('http://localhost:3000/plays')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        plays: json
      }, () => console.log(this.state.plays, "plays"))
    })
  }

} //end of class
