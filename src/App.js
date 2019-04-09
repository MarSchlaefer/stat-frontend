import React, { Component } from 'react';
import './App.css';
import SignIn from './components/signIn'
import Client from './components/client/client'
import Admin from './components/admin/admin'
import Chart from './components/chart'
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from './constants/index';

class App extends Component {

  constructor() {
    super()
    this.state = {
      game: [],
      signIn: "",
      showCharts: false,
      keyPress: "",
      currentPlays: [],
      possession: "H",
      period: 1,
      intervalId: 0,
      minutes: 20,
      seconds: 0,
      currTimer: "Paused"
    }
  }

  componentDidMount() {
    this.getGame()
    this.getCurrentPlays()
  }

  render() {
    const minutes = this.formatNum(this.state.minutes)
    const seconds = this.formatNum(this.state.seconds)
    return (
      <div className="App">
        {this.renderContent(minutes, seconds)}
      </div>
    );
  }

  renderContent = (minutes, seconds) => {
    if (this.state.signIn === "admin" && !this.state.showCharts) {
      return <div className="employee">
        <Admin
          resetTimer={this.resetTimer}
          startClicked={this.startClicked}
          period={this.state.period}
          possession={this.state.possession}
          minutes={minutes}
          seconds={seconds}
          gameDetails={this.state.game}
          editGameDetails={this.getGame}
          currentPlay={this.currentPlay}
          currentPlays={this.state.currentPlays}
          changePossession={this.changePossession}
          changePeriod={this.changePeriod}
          changedPlayers={this.state.changedPlayers}
          showCharts={this.showCharts}
          signOut={this.signOut}
          handleKeyDown={this.handleKeyDown}
          currTimer={this.state.currTimer}
          />
      </div>
    } else if (this.state.signIn === "client" && !this.state.showCharts){
      return <div className="client">
        <Client
          period={this.state.period}
          possession={this.state.possession}
          minutes={minutes}
          seconds={seconds}
          gameDetails={this.state.game}
          currentPlays={this.state.cablePlays}
          changedPlayers={this.state.changedPlayers}
          showCharts={this.showCharts}
          signOut={this.signOut}
          />
      </div>
    } else if (this.state.showCharts) {
      return <div className="charts-page">
        <Chart
          gameDetails={this.state.game}
          showCharts={this.showCharts}
          />
      </div>
    } else {
      return <div className="sign-in">
        <SignIn handleSignIn={this.handleSignIn}/>
      </div>
    }
  }


  getGame = () => {
    fetch(`https://stat-team-backend.herokuapp.com/games`)
    .then(response => response.json())
    .then(game => {
      console.log(game)
      this.setState({ game })
    })
  }

  getCurrentPlays = () => {
    fetch(`https://stat-team-backend.herokuapp.com/plays`)
    .then(response => response.json())
    .then(plays => {
      let playArr = plays.slice()
      let reversedPlays = playArr.reverse()
      this.setState({
        currentPlays: reversedPlays
      })
    })
  }

  currentPlay = (playObj) => {
    this.setState(currentState => ({
      currentPlays: [playObj, ...currentState.currentPlays]
    }), () => console.log(this.state.currentPlays, "state currentplays"))
  }

  handleSignIn = (username) => {
    this.setState({
      signIn: username
    })
  }

  formatNum = timerNum => {
    return timerNum.toString().length === 1 ? "0" + timerNum.toString() : timerNum.toString()
  }

  startClicked = () => {
    if (this.state.intervalId === 0) {
      return this.startTimer()
    } else {
      return this.pauseTimer()
    }
  }

  startTimer = () => {
    const intervalId = setInterval(this.decrimentTimer, 1000)
    this.setState({
      intervalId: intervalId,
      currTimer: "Started"
     })
  }

  pauseTimer = () => {
    clearInterval(this.state.intervalId)
    this.setState({
      intervalId: 0,
      currTimer: "Paused"
    })
  }

  decrimentTimer = () => {
    let minutes = this.state.minutes
    let seconds

    if (this.state.seconds === 0) {
      if (this.state.minutes === 0) {
        clearInterval(this.state.intervalId)
        minutes = 0
        seconds = 0
        this.resetTimer()
      } else {
        minutes = this.state.minutes - 1
        seconds = 59
      }
    } else {
      seconds = this.state.seconds - 1
    }
    this.setState({ minutes, seconds})
  }

  resetTimer = () => {
    if (this.state.intervalId === 0) {
      this.setState({
        intervalId: 0,
        minutes: 20,
        seconds: 0
      })
    }
  }

  changePossession = () => {
    console.log("in change click");
    if (this.state.possession === "H") {
      this.setState({
        possession: "A"
      })
    } else {
      this.setState({
        possession: "H"
      })
    }
  }

  changePeriod = () => {
    console.log("in change period");
    if (this.state.period === 1) {
      this.setState({
        period: 2
      }, () => this.patchPeriod())
    } else {
      this.setState({
        period: 1
      }, () => this.patchPeriod())
    }
  }

  patchPeriod = () => {
    console.log(this.state.period)
    fetch(`https://stat-team-backend.herokuapp.com/games/1`, {
      'method': "PATCH",
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({
        period: this.state.period
      })
    })
    .then(response => response.json())
    .then(game => {

      console.log(game, "this is the patched game")
      let newArray = []
      let newGame = newArray.push(game)
      this.setState({
        game: [game]
      })
    })
  }


  showCharts = () => {
    console.log("show charts");
    this.setState(currentState => ({
      showCharts: !currentState.showCharts
    }))
  }

  signOut = () => {
    this.setState({
      signIn: ""
    })
  }

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 32:
      console.log("spacebar")
      this.startClicked()
      break;
      case 72:
      console.log("H")
      this.setState({
        possession: "H"
      })
      break;
      case 86:
      console.log("V")
      this.setState({
        possession: "A"
      })
      break;
    }
  }

  // editGameDetails = (teamIndex, id, json) => {
  //   this.setState(currentState => {
  //     const x = {game: currentState.game.map(game => {
  //       return game.teams.map(team => {
  //         if (team.id === teamIndex + 1) {
  //           team.players.map(player => {
  //             if (player.id === id) {
  //               player = json
  //               return player
  //             } else {
  //               return player
  //             }
  //           })
  //         } else {
  //           return team
  //         }
  //       })
  //     })
  //   }
  //   return x;
  //   })
  // }

  // currentState.game.map(game => {
  //   return game.teams.map(team => {
  //     if (team.id === teamIndex + 1) {
  //       team.players.map(player => {
  //         if (player.id === id) {
  //           player = json
  //           return player
  //         } else {
  //           return player
  //         })
  //       }
  //     } else {
  //       return team
  //     }
  //   })
  // })

} // end of class

export default App;
