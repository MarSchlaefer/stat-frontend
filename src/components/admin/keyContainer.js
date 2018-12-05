import React, { Component } from 'react';
import Key from './key'

export default class KeyContainer extends Component{

  constructor() {
    super()
    this.state = {
      actionKeys: [{key: "J", action: "Jump"}, {key: "Y", action: "3 Point"}, {key: "D", action: "Dunk"}, {key: "L", action: "Layup"}, {key: "E", action: "Free Throw"}, {key: "R", action: "Rebound"}, {key: "A", action: "Assist"}, {key: "F", action: "Foul"}, {key: "K", action: "Block"}, {key: "T", action: "Turnover"}, {key: "S", action: "Steal"}, {key: "O", action: "Timeout"}],
      currAction: null,
      currPlayerId: null,
      currTeamId: null,
      firstNum: null
    }
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyPress)
    // document.addEventListener("keydown", this.handleNumberKey)
  }

  render() {
    let results = ["G - Good", "X - Miss"]
    return(
      <div className="key-title">
        <div className="key-play">
          <h3>Scoring</h3>
          <p>{this.state.currAction ? this.state.currAction : "No Action"} - {this.state.currTeamId ? (this.state.currTeamId === 1 ? "Home" : "Away") : null} - {this.state.currPlayerId ? `#${this.findCurrPlayerNum()}` : "No Player"}</p>
        </div>
        <div className="key-container">
          {this.renderContent(results)}
        </div>
      </div>
    )
  }

  findCurrPlayerNum = () => {
    let team
    // debugger
    if (this.props.possession === "H") {
      team = 0
    } else {
      team = 1
    }
    const currPlayer = this.props.gameDetails[0].teams[team].players.find(player => player.id === this.state.currPlayerId)
    return currPlayer.number
  }

  renderContent = (results) => {
    if (!this.state.currAction) {
      return this.makeActionKey()
    } else if (this.state.currPlayerId && (this.state.currAction === "J" || this.state.currAction === "Y" || this.state.currAction === "E" || this.state.currAction === "L" || this.state.currAction === "D")) {
      return this.makeResultKey(results)
    } else {
      return this.makeNumberKey()
    }
  }

  makeActionKey = () => {
    return this.state.actionKeys.map(key => {
      return <Key keyObj={key} handleActionClick={this.handleActionClick}/>
    })
  }

  makeNumberKey = () => {
    let team
    // debugger
    if (this.props.possession === "H") {
      team = 0
    } else {
      team = 1
    }
    return this.props.gameDetails[0].teams[team].players.map(player => {
      return <Key key={player.id} playerObj={player} handleNumberClick={this.handleNumberClick}/>
    })
  }

  makeResultKey = (results) => {
    return results.map(result => {
      return <Key result={result} handleResultClick={this.handleResultClick}/>
    })
  }

  handleActionClick = (key) => {
    console.log("action clicked");
    this.setState({
      currAction: key
    })
  }

  handleNumberClick = (playerId, teamId) => {
    console.log("number clicked")
    if (this.state.currAction === "R" || this.state.currAction === "A" || this.state.currAction === "F" || this.state.currAction === "K" || this.state.currAction === "T" || this.state.currAction === "S") {
      this.setState({
        currPlayerId: playerId,
        currTeamId: teamId
      }, () => this.handleResultClick("non-shot play"))
    } else {
      this.setState({
        currPlayerId: playerId,
        currTeamId: teamId
      })
    }
  }

  handleResultClick = (key) => {
    console.log("result clicked");
    const playObj = {"action": this.state.currAction, "player_id": this.state.currPlayerId, "timer": `${this.props.minutes}:${this.props.seconds}`, "result": key}
    if (key === "Good") {
      console.log("clicked good");
      this.props.currentPlay(playObj)
      this.postPlay(key)
      this.teamGood(this.state.currTeamId)
      this.patchGood(this.state.currPlayerId)
    } else if (key === "Miss"){
      console.log("clicked miss");
      this.props.currentPlay(playObj)
      this.postPlay(key)
      this.teamAttempt(this.state.currTeamId)
      this.patchAttempt(this.state.currPlayerId)
    } else {
      console.log("non-shot play");
      this.props.currentPlay(playObj)
      this.postPlay("")
      this.teamAttempt(this.state.currTeamId)
      this.patchAttempt(this.state.currPlayerId)
    }
  }

  resetState = () => {
    this.setState({
      currAction: null,
      currPlayerId: null,
      currTeamId: null,
      firstNum: null
    })
  }

  handleKeyPress = (event) => {
    if (!this.state.currAction) {
      let actionKey
      switch (event.keyCode) {
        case 74:
        console.log("J")
        actionKey = "J"
        break;
        case 89:
        console.log("Y")
        actionKey = "Y"
        break;
        case 69:
        console.log("E")
        actionKey = "E"
        break;
        case 76:
        console.log("L")
        actionKey = "L"
        break;
        case 68:
        console.log("D")
        actionKey = "D"
        break;
        case 82:
        console.log("R")
        actionKey = "R"
        break;
        case 65:
        console.log("A")
        actionKey = "A"
        break;
        case 70:
        console.log("F")
        actionKey = "F"
        break;
        case 84:
        console.log("T")
        actionKey = "T"
        break;
        case 83:
        console.log("S")
        actionKey = "S"
        break;
      }

      this.setState({
        currAction: actionKey
      }, () => console.log(this.state.currAction))

    } else if (this.state.currAction && !this.state.currPlayerId && !this.state.firstNum){
      let numberKey = ""
        switch (event.keyCode) {
          case 48:
          console.log(0);
          numberKey += 0
          console.log(numberKey, "ugh");
          break;
          case 49:
          console.log(1);
          numberKey += 1
          break;
          case 50:
          console.log(2);
          numberKey += 2
          break;
          case 51:
          console.log(3);
          numberKey += 3
          break;
          case 52:
          console.log(4);
          numberKey += 4
          break;
          case 53:
          console.log(5);
          numberKey += 5
          break;
          case 54:
          console.log(6);
          numberKey += 6
          break;
          case 55:
          console.log(7);
          numberKey += 7
          break;
          case 56:
          console.log(8);
          numberKey += 8
          break;
          case 57:
          console.log(9);
          numberKey += 9
          break;
        }

        this.setState({
          firstNum: numberKey
        }, () => console.log(this.state.firstNum, "first num"))

    } else if (this.state.currAction && !this.state.currPlayerId && this.state.firstNum) {
      let numberKey = ""
        switch (event.keyCode) {
          case 48:
          console.log(0);
          numberKey += 0
          break;
          case 49:
          console.log(1);
          numberKey += 1
          break;
          case 50:
          console.log(2);
          numberKey += 2
          break;
          case 51:
          console.log(3);
          numberKey += 3
          break;
          case 52:
          console.log(4);
          numberKey += 4
          break;
          case 53:
          console.log(5);
          numberKey += 5
          break;
          case 54:
          console.log(6);
          numberKey += 6
          break;
          case 55:
          console.log(7);
          numberKey += 7
          break;
          case 56:
          console.log(8);
          numberKey += 8
          break;
          case 57:
          console.log(9);
          numberKey += 9
          break;
        }

        const numberKeys = this.state.firstNum + numberKey
        const currPlayer = this.findPlayerId(numberKeys)

        this.setState({
          currPlayerId: currPlayer.id,
          currTeamId: currPlayer.team_id
        }, () => console.log(this.state.currPlayerId))

    } else if (this.state.currPlayerId && (this.state.currAction === "J" || this.state.currAction === "Y" || this.state.currAction === "E" || this.state.currAction === "L" || this.state.currAction === "D")) {
      let resultKey
      switch (event.keyCode) {
        case 71:
        console.log("G");
        resultKey = "Good"
        break;
        case 88:
        console.log("X");
        resultKey = "Miss"
        break;
      }
      this.handleResultClick(resultKey)
    }
  }

  findPlayerId = (numberKeys) => {
    let team
    if (this.props.possession === "H") {
      team = 0
    } else {
      team = 1
    }
    return this.props.gameDetails[0].teams[team].players.find(player => numberKeys == player.number)
  }

  patchAttempt = (playerId) => {
    let attempt

    switch (this.state.currAction) {
      case "J":
        attempt = "fga"
        break;
      case "Y":
        attempt = "yga"
        break;
      case "E":
        attempt = "fta"
        break;
      case "L":
        attempt = "fga"
        break;
      case "D":
        attempt = "fga"
        break;
      case "R":
        attempt = "reb"
        break;
      case "A":
        attempt = "ast"
        break;
      case "F":
        attempt = "pf"
        break;
      case "K":
        attempt = "blk"
        break;
      case "T":
        attempt = "to"
        break;
      case "S":
        attempt = "stl"
        break;
      default:
        console.log("No attempt stat for this action.")
    }

    let player
    if (this.props.possession === "H") {
      player = this.props.gameDetails[0].teams[0].players.find( player => {
        return player.id === playerId
      })
    } else {
      player = this.props.gameDetails[0].teams[1].players.find( player => {
        return player.id === playerId
      })
    }

    const incrementedAttempt = player[attempt] + 1

    fetch(`http://localhost:3000/players/${playerId}`, {
      "method": "PATCH",
      "headers": {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      "body": JSON.stringify({
        [attempt]: incrementedAttempt
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.props.editGameDetails()

      if (this.state.currAction === "F" || this.state.currAction === "T") {
        this.resetState()
        this.props.changePossession()
      } else {
        this.resetState()
      }
    })
  }

  patchGood = (playerId) => {
    let attempt
    let good
    let points

    switch (this.state.currAction) {
      case "J":
        attempt = "fga"
        good = "fgm"
        points = 2
        break;
      case "Y":
        attempt = "yga"
        good = "ygm"
        points = 3
        break;
      case "E":
        attempt = "fta"
        good = "ftm"
        points = 1
        break;
      case "L":
        attempt = "fga"
        good = "fgm"
        points = 2
        break;
      case "D":
        attempt = "fga"
        good = "fgm,"
        points = 2
        break;
      default:
        console.log("No made stat for this attempt.")
    }

    let player
    if (this.props.possession === "H") {
      player = this.props.gameDetails[0].teams[0].players.find( player => {
        return player.id === playerId
      })
    } else {
      player = this.props.gameDetails[0].teams[1].players.find( player => {
        return player.id === playerId
      })
    }

    const incrementedAttempt = player[attempt] + 1
    const incrementedGood = player[good] + 1
    const incrementedPoints = player.tp + points

    fetch(`http://localhost:3000/players/${playerId}`, {
      "method": "PATCH",
      "headers": {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      "body": JSON.stringify({
        [attempt]: incrementedAttempt,
        [good]: incrementedGood,
        "tp": incrementedPoints
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.props.editGameDetails()
      this.resetState()
      this.props.changePossession()
    })
  }

  teamAttempt = (teamId) => {
    let action

    switch (this.state.currAction) {
      case "J":
        action = "fga"
        break;
      case "Y":
        action = "yga"
        break;
      case "E":
        action = "fta"
        break;
      case "L":
        action = "fga"
        break;
      case "D":
        action = "fga"
        break;
      case "R":
        action = "reb"
        break;
      case "A":
        action = "ast"
        break;
      case "F":
        action = "pf"
        break;
      case "K":
        action = "blk"
        break;
      case "T":
        action = "to"
        break;
      case "S":
        action = "stl"
        break;
      default:
        console.log("No attempt stat for this action.")
    }

    let team = this.props.gameDetails[0].teams.find(team => team.id === teamId)

    const incrementedStat = team[action] + 1

    fetch(`http://localhost:3000/teams/${teamId}`, {
      "method": "PATCH",
      "headers": {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      "body": JSON.stringify({
        [action]: incrementedStat
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json, "team attempt")
      this.props.editGameDetails()
    })
  }

  teamGood = (teamId) => {
    let attempt
    let good
    let points

    switch (this.state.currAction) {
      case "J":
        attempt = "fga"
        good = "fgm"
        points = 2
        break;
      case "Y":
        attempt = "yga"
        good = "ygm"
        points = 3
        break;
      case "E":
        attempt = "fta"
        good = "ftm"
        points = 1
        break;
      case "L":
        attempt = "fga"
        good = "fgm"
        points = 2
        break;
      case "D":
        attempt = "fga"
        good = "fgm,"
        points = 2
        break;
      default:
        console.log("No made stat for this attempt.")
    }

    let team = this.props.gameDetails[0].teams.find(team => team.id === teamId)

    const incrementedAttempt = team[attempt] + 1
    const incrementedGood = team[good] + 1
    const incrementedPoints = team.tp + points

    fetch(`http://localhost:3000/teams/${teamId}`, {
      "method": "PATCH",
      "headers": {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      "body": JSON.stringify({
        [attempt]: incrementedAttempt,
        [good]: incrementedGood,
        "tp": incrementedPoints
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json, "team good")
      this.props.editGameDetails()
    })
  }


  postPlay = (key) => {
    console.log("in the post play");

    fetch('http://localhost:3000/plays', {
      'method' : 'POST',
      'headers' : {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      "body" : JSON.stringify({
        "action": this.state.currAction,
        "player_id": this.state.currPlayerId,
        "timer": `${this.props.minutes}:${this.props.seconds}`,
        "result": key
      })
    })
    .then(response => console.log(response))
  }


} // end of class
