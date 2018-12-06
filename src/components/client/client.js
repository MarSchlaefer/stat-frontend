import React, { Component } from 'react';
import GameContainer from './gameContainer'
import { ActionCable } from 'react-actioncable-provider';

export default class Client extends Component {

  constructor() {
    super()
    this.state = {
      gamesData: [],
      teamsData: [],
      playersData: [],
      playsData: []
    }
  }

  render() {
    return (
      <div className="client-main">
        <ActionCable
          channel={{ channel: 'GamesChannel' }}
          onReceived={this.handleReceivedGame}
          />
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
    this.getGames()
    this.getTeams()
    this.getPlays()
    this.getPlayers()
  }

  renderContent = () => {
    console.log(this.state.gamesData, "this is gamesData")
    if (this.props.gameDetails.length > 0) {
      return <React.Fragment>
        <GameContainer
          period={this.props.period}
          possession={this.props.possession}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          gamesData={this.state.gamesData}
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

  getGames = () => {
    fetch(`http://localhost:3000/games`)
    .then(response => response.json())
    .then(game => {
      console.log(game, "this is the patched game")
      this.setState({ gamesData: game })
    })
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
      let plays = json.slice()
      let reversedPlays = plays.reverse()
      this.setState({
        playsData: reversedPlays
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
    return this.state.playersData.map(element => {
      if (element.id === player.id) {
        return player
      } else {
        return element
      }
    })
  }

  handleReceivedGame = (response) => {
    const game = this.parseGameResponse(response)
    const games = this.searchGamesData(game)
    this.setState({
      gamesData: games
    }, () => console.log(this.state.gamesData, "state changed games"))
  }

  searchGamesData = (game) => {
    return this.state.gamesData.map(element => {
      if (element.id === game.id) {
        return game
      } else {
        return element
      }
    })
  }

  handleReceivedTeam = (response) => {
    const team = this.parseTeamResponse(response)
    const teams = this.searchTeamsData(team)
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
    return response.player
  }

  parseTeamResponse = (response) => {
    return response.team
  }

  parseGameResponse = (response) => {
    return response.game
  }


} //end of class
