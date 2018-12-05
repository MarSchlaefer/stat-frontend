import React, { Component } from 'react';
import Play from './play.js'

export default class PlayByPlayContainer extends Component{

  render() {
    return(
      <div className={this.props.location === "client" ? "play-container-client" : "play-container-admin"}>
        <div className={this.props.location === "client" ? "play-title-client" : "play-title-admin"}>
          <h3>Plays</h3>
        </div>
        <div className="scrolling-table">
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
      </div>
    )
  }

  makePlay = () => {
    if (this.props.currentPlays.length > 0) {
      return this.props.currentPlays.map(play => {
        return <tr>
          <Play
            play={play}
            gameDetails={this.props.gameDetails}
            possession={this.props.possession}
            />
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
