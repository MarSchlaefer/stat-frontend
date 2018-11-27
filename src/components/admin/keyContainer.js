import React, { Component } from 'react';
import Key from './key'

export default class KeyContainer extends Component{

  constructor() {
    super()
    this.state = {
      actionKeys: [{key: "J", action: "Jump"}, {key: "Y", action: "3 Point"}, {key: "D", action: "Dunk"}, {key: "L", action: "Layup"}, {key: "E", action: "Free Throw"}, {key: "R", action: "Rebound"}, {key: "A", action: "Assist"}, {key: "F", action: "Foul"}, {key: "K", action: "Block"}, {key: "T", action: "Turnover"}, {key: "S", action: "Steal"}, {key: "O", action: "Timeout"}],
      currAction: null,
      currPlayerId: null
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
    } else if (this.state.currPlayerId) {
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

  handleNumberClick = (playerId) => {
    console.log("number clicked")
    this.setState({
      currPlayerId: playerId
    })
  }

  handleResultClick = (key) => {
    console.log("result clicked");
    if (key === "Good") {
      console.log("clicked good");
      this.patchGood(this.state.currPlayerId)
      this.patchAttempt(this.state.currPlayerId)
      this.postPlay(key)
    } else {
      console.log("clicked miss");
      this.patchAttempt(this.state.currPlayerId)
      this.postPlay(key)
    }
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

    fetch(`http://localhost:3000//players/${playerId}`, {
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
      this.props.editGameDetails(json, playerId)
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
        action = "tp"
        points = 0
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

    fetch(`http://localhost:3000//players/${playerId}`, {
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
    .then(json => console.log(json))
  }

  postPlay = (key) => {
    fetch('http://localhost:3000/plays', {
      'method' : 'POST',
      'mode' : "cors",
      'headers' : {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      "body" : JSON.stringify({
        action: this.state.currAction,
        player_id: this.state.currPlayerId,
        timer: `${this.props.minutes}:${this.props.seconds}`,
        result: key
      })
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

} // end of class
