import React, { Component } from 'react';
import GameContainer from './gameContainer'
import { ActionCable } from 'react-actioncable-provider';

export default class Client extends Component {

  constructor() {
    super()
    this.state = {
      teamsData: [],
      playersData: [],
      playsData: []
    }
  }

  render() {
    return (
      <div className="client-main">
        <ActionCable
          channel={{ channel: 'PlayersChannel' }}
          onReceived={this.handleReceivedPlayer}
          />
        <ActionCable
          channel={{ channel: 'PlaysChannel' }}
          onReceived={this.handleReceivedPlay}
          />
        <ActionCable
          channel={{ channel: 'TeamsChannel' }}
          onReceived={this.handleReceivedTeam}
          />
        {this.renderContent()}
      </div>
    )
  }

  componentDidMount = () => {
    this.getTeams()
    this.getPlays()
    this.getPlayers()
  }

  renderContent = () => {
    if (this.props.gameDetails.length > 0) {
      return <React.Fragment>
        <GameContainer
          period={this.props.period}
          possession={this.props.possession}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          gameDetails={this.props.gameDetails}
          playsData={this.state.playsData}
          playersData={this.state.playersData}
          teamsData={this.state.teamsData}
          showCharts={this.props.showCharts}
          signOut={this.props.signOut}
          />
      </React.Fragment>
    }
  }

  getTeams = () => {
    console.log("teams");
    fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(json => {
      const teams = json.sort((a, b) => a.id - b.id)
      this.setState({
        teamsData: teams
      })
    })
  }

  getPlays = () => {
    console.log("plays");
    fetch('http://localhost:3000/plays')
    .then(response => response.json())
    .then(json => {
      this.setState({
        playsData: json
      })
    })
  }

  getPlayers = () => {
    console.log("players");
    fetch('http://localhost:3000/players')
    .then(response => response.json())
    .then(json => {
      this.setState({
        playersData: json
      })
    })
  }

  handleReceivedPlay = (response) => {
    const play = this.parsePlayResponse(response)
    // debugger
    this.setState(currentState => ({
      playsData: [play, ...currentState.playsData]
    }))
  }

  handleReceivedPlayer = (response) => {
    const player = this.parsePlayerResponse(response)
    const players = this.searchPlayersData(player)
    // debugger
    this.setState({
      playersData: players
    }, () => console.log(this.state.playersData, "state changed players"))
  }

  searchPlayersData = (player) => {
    // debugger
    return this.state.playersData.map(element => {
      if (element.id === player.id) {
        return player
      } else {
        return element
      }
    })
  }

  handleReceivedTeam = (response) => {
    const team = this.parseTeamResponse(response)
    const teams = this.searchTeamsData(team)
    // debugger
    this.setState({
      teamsData: teams
    }, () => console.log(this.state.teamsData, "state changed teams"))
  }

  searchTeamsData = (team) => {
    return this.state.teamsData.map(element => {
      if (element.id === team.id) {
        return team
      } else {
        return element
      }
    })
  }

  parsePlayResponse = (response) => {
    return response.play
  }

  parsePlayerResponse = (response) => {
    // debugger
    return response.player
  }

  parseTeamResponse = (response) => {
    return response.team
  }


} //end of class
