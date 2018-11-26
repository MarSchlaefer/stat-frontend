import React, { Component } from 'react';

export default class Possesion extends Component{

  render() {
    return(
      <div className="possession">
        {this.renderContent()}
      </div>
    )
  }

  renderContent = () => {
    if (this.props.gameDetails.length > 0 && this.props.team1) {
      return <React.Fragment>
        <h2>Home</h2>
        <h1>{this.props.gameDetails[0].teams[0].name}</h1>
      </React.Fragment>
    } else if (this.props.gameDetails.length > 0 && this.props.team2) {
      return <React.Fragment>
        <h2>Visitor</h2>
        <h1>{this.props.gameDetails[0].teams[1].name}</h1>
      </React.Fragment>
    } else {
      return <h2>No Team Name</h2>
    }
  }

} //end of class
