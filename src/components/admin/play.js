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
    // debugger
    return <React.Fragment>
      <td>{this.props.play.timer}</td>
      <td>{this.formatPlay()}</td>
    </React.Fragment>
  }

  formatPlay = () => {
    console.log("formatting play")
  }
} //end of class
