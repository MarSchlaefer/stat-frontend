import React, { Component } from 'react';

export default class Play extends Component {

  render() {
    return (
      <div>
        {this.renderPlay()}
      </div>
    )
  }

  renderPlay = () => {
    return <React.Fragment>
      <td>Time</td>
      <td>Play</td>
    </React.Fragment>
  }
} //end of class
