import React, { Component } from 'react';
import Play from './play.js'

export default class PlayByPlayContainer extends Component{

  constructor(){
    super()
    this.state = {
      plays: []
    }
  }

  componentDidMount = () => {
    this.getPlays()
  }

  render() {
    return(
      <div className="play-container">
        <div className="play-title">
          <h3>Plays</h3>
        </div>
        <table className="play">
          <tbody>
            <tr>
              <th>Time</th>
              <th>Play</th>
            </tr>
            {this.makePlay()}
          </tbody>
        </table>
      </div>
    )
  }

  getPlays = () => {
    fetch('http://localhost:3000/plays')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        plays: json
      })
    })
  }

  makePlay = () => {
    if (this.state.plays.length > 0) {
      return this.state.plays.map(play => {
        return <tr>
          <Play />
        </tr>
      })
    } else {
      return <tr>
        <td></td>
        <td></td>
      </tr>
    }
  }


} //end of class
