import React, { Component } from 'react';
import Play from './play.js'

export default class PlayByPlayContainer extends Component{

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

  makePlay = () => {
    if (this.props.plays.length > 0) {
      return this.props.plays.map(play => {
        return <tr>
          <Play play={play}/>
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
