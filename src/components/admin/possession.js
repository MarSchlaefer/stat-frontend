import React, { Component } from 'react';
import basketball from '../../images/basketball.svg'

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
      return <div className={"possession-1" + (this.props.possession === "H" ? " active" : " inactive")} onClick={this.props.changePossession}>
        <div className="possession-team">
          <p>Home</p>
          <p>{this.props.gameDetails[0].teams[0].name}</p>
        </div>
        {this.props.possession === "H" ? <img src={ basketball } alt=''/> : null}
      </div>
    } else if (this.props.gameDetails.length > 0 && this.props.team2) {
      return <div className={"possession-2" + (this.props.possession === "A" ? " active" : " inactive")} onClick={this.props.changePossession}>
        {this.props.possession === "A" ? <img src={ basketball } alt=''/> : null}
        <div className="possession-team">
          <p>Visitor</p>
          <p>{this.props.gameDetails[0].teams[1].name}</p>
        </div>
      </div>
    } else {
      return <p>No Team Name</p>
    }
  }

} //end of class
