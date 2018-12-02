import React, { Component } from 'react';
import Key from './key'

export default class KeyContainer extends Component{

  constructor() {
    super()
    this.state = {
      actionKeys: [{key: "J", action: "Jump"}, {key: "Y", action: "3 Point"}, {key: "D", action: "Dunk"}, {key: "L", action: "Layup"}, {key: "E", action: "Free Throw"}, {key: "R", action: "Rebound"}, {key: "A", action: "Assist"}, {key: "F", action: "Foul"}, {key: "K", action: "Block"}, {key: "T", action: "Turnover"}, {key: "S", action: "Steal"}, {key: "O", action: "Timeout"}],
      currAction: null,
      currPlayerId: null,
      currTeamId: null
    }
  }

  render() {
    let results = ["Good", "Miss"]
    return(
      <div className="key-title">
        <h3>Scoring</h3>
        <div className="key-container">
          {this.renderContent(results)}
        </div>
      </div>
    )
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
      this.patchAttempt(this.state.currPlayerId)
      this.teamAttempt(this.state.currTeamId)
      this.teamGood(this.state.currTeamId)
      this.updatePercentage(this.state.currTeamId)
      this.patchGood(this.state.currPlayerId)
    } else if (key === "Miss"){
      console.log("clicked miss");
      this.props.currentPlay(playObj)
      this.postPlay(key)
      this.teamAttempt(this.state.currTeamId)
      this.updatePercentage(this.state.currTeamId)
      this.patchAttempt(this.state.currPlayerId)
    } else {
      console.log("non-shot play");
      this.props.currentPlay(playObj)
      this.postPlay("")
      this.teamAttempt(this.state.currTeamId)
      this.updatePercentage(this.state.currTeamId)
      this.patchAttempt(this.state.currPlayerId)
    }
  }

  resetState = () => {
    this.setState({
      currAction: null,
      currPlayerId: null,
      currTeamId: null
    })
  }

  patchAttempt = (playerId) => {
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

    const incrementedStat = player[action] + 1

    fetch(`http://localhost:3000/players/${playerId}`, {
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
      console.log(json)
      if (this.props.possession === "H") {
        // this.props.editGameDetails(0, playerId, json)
        this.props.editGameDetails()
      } else {
        // this.props.editGameDetails(1, playerId, json)
        this.props.editGameDetails()
      }

      if (this.state.currAction === "F" || this.state.currAction === "T") {
        this.resetState()
        this.props.changePossession()
      } else {
        this.resetState()
      }
    })
  }

  patchGood = (playerId) => {
    let action
    let points

    switch (this.state.currAction) {
      case "J":
        action = "fgm"
        points = 2
        break;
      case "Y":
        action = "ygm"
        points = 3
        break;
      case "E":
        action = "ftm"
        points = 1
        break;
      case "L":
        action = "fgm"
        points = 2
        break;
      case "D":
        action = "fga"
        points = 2
        break;
      default:
        console.log("No made stat for this action.")
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

    const incrementedStat = player[action] + 1
    const incrementedPoints = player.tp + points

    fetch(`http://localhost:3000/players/${playerId}`, {
      "method": "PATCH",
      "headers": {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      "body": JSON.stringify({
        [action]: incrementedStat,
        "tp": incrementedPoints
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      if (this.props.possession === "H") {
        // this.props.editGameDetails(0, playerId, json)
        this.props.editGameDetails()
      } else {
        // this.props.editGameDetails(1, playerId, json)
        this.props.editGameDetails()
      }
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

    let team
    if (this.props.possession === "H") {
      team = this.props.gameDetails[0].teams[0]
    } else {
      team = this.props.gameDetails[0].teams[1]
    }

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
      if (this.props.possession === "H") {
        // this.props.editGameDetails(0, teamId, json)
        this.props.editGameDetails()
      } else {
        // this.props.editGameDetails(1, teamId, json)
        this.props.editGameDetails()
      }

    })
  }

  teamGood = (teamId) => {
    let action
    let points

    switch (this.state.currAction) {
      case "J":
        action = "fgm"
        points = 2
        break;
      case "Y":
        action = "ygm"
        points = 3
        break;
      case "E":
        action = "ftm"
        points = 1
        break;
      case "L":
        action = "fgm"
        points = 2
        break;
      case "D":
        action = "fga"
        points = 2
        break;
      default:
        console.log("No made stat for this action.")
    }

    let team
    if (this.props.possession === "H") {
      team = this.props.gameDetails[0].teams[0]
    } else {
      team = this.props.gameDetails[0].teams[1]
    }

    const incrementedStat = team[action] + 1
    const incrementedPoints = team.tp + points

    fetch(`http://localhost:3000/teams/${teamId}`, {
      "method": "PATCH",
      "headers": {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      "body": JSON.stringify({
        [action]: incrementedStat,
        "tp": incrementedPoints
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json, "team good")
      if (this.props.possession === "H") {
        // this.props.editGameDetails(0, teamId, json)
        this.props.editGameDetails()
      } else {
        // this.props.editGameDetails(1, teamId, json)
        this.props.editGameDetails()
      }

    })
  }

  updatePercentage = (teamId) => {
    let percentage
    let attempt
    let made

    switch (this.state.currAction) {
      case "J":
        percentage = "fgp"
        attempt = "fga"
        made = "fgm"
        break;
      case "Y":
        percentage = "ygp"
        attempt = "yga"
        made = "ygm"
        break;
      case "E":
        percentage = "ftp"
        attempt = "fta"
        made = "ftm"
        break;
      case "L":
        percentage = "fgp"
        attempt = "fga"
        made = "fgm"
        break;
      case "D":
        percentage = "fgp"
        attempt = "fga"
        made = "fgm"
        break;
      default:
        console.log("No attempt stat for this percentage.")
    }

    let team
    if (this.props.possession === "H") {
      team = this.props.gameDetails[0].teams[0]
    } else {
      team = this.props.gameDetails[0].teams[1]
    }

    const newPercentage = ((team[made]/team[attempt]) * 100).toFixed(2)

    fetch(`http://localhost:3000/teams/${teamId}`, {
      "method": "PATCH",
      "headers": {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      "body": JSON.stringify({
        [percentage]: newPercentage
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json, "team attempt")
      if (this.props.possession === "H") {
        // this.props.editGameDetails(0, teamId, json)
        this.props.editGameDetails()
      } else {
        // this.props.editGameDetails(1, teamId, json)
        this.props.editGameDetails()
      }

    })
  }

  postPlay = (key) => {
    console.log("in the post play");

    fetch('http://localhost:3000/plays', {
      'method' : 'POST',
      // 'mode' : "cors",
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
    // .then(json => {
    //   console.log(json, "post play json")
      // this.props.getPlays()
      // this.props.getNewPlays(json)
      // this.props.editGameDetails()
    // })
  }


} // end of class
