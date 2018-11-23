import React, { Component } from 'react';
import IndividualPlayer from '../components/individualPlayer'

export default class IndividualStats extends Component{

  render() {
    return(
      <div>
        <h1>Individual Stats</h1>
        <IndividualPlayer />
      </div>
    )
  }
}
