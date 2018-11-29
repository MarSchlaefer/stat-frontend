import React, { Component } from 'react';

export default class Logo extends Component{
  render() {
    return(
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    )
  }

  renderContent = () => {
    if (this.props.team1) {
      return <img src={this.props.team1.logo} alt="" className="home-logo"/>
    } else if (this.props.team2){
      return <img src={this.props.team2.logo} alt="" className="away-logo"/>
    } else {
      return <img src="https://www.femsa.org/wp-content/plugins/bp-custom-users/includes/img/logo.png" alt=""/>
    }
  }
}
