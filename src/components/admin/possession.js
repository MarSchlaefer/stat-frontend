import React, { Component } from 'react';

export default class Possession extends Component{

  render() {
    return(
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    )
  }

  renderContent = () => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      return <div className={"possession-1" + (this.props.possession === "H" ? " active" : " inactive")}>
        <p>Home</p>
        <p>{this.props.gameDetails[0].teams[0].name}</p>
      </div>
    } else if (this.props.gameDetails.length > 0 && this.props.team2) {
      return <div className={"possession-2" + (this.props.possession === "A" ? " active" : " inactive")}>
        <p>Visitor</p>
        <p>{this.props.gameDetails[0].teams[1].name}</p>
      </div>
    } else {
      return <p>No Team Name</p>
    }
  }

} //end of class
