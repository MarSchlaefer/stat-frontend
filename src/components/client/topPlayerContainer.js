import React, { Component } from 'react';
import TopPlayer from './topPlayer'

export default class TopPlayerContainer extends Component {
  render() {
    return(
      <React.Fragment>
        <h1>Top Players</h1>
        <TopPlayer />
      </React.Fragment>
    )
  }


} //end of class
