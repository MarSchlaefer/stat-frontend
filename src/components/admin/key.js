import React, { Component } from 'react'

export default class Key extends Component {

  render() {
    return(
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    )
  }

  renderContent = () => {
    if (this.props.handleActionClick) {
      return <div className="key" onClick={() => this.props.handleActionClick(this.props.keyObj.key)}>
        <p>{this.props.keyObj.key} - {this.props.keyObj.action}</p>
      </div>
    } else if (this.props.handleNumberClick) {
      return <div className="key" onClick={() => this.props.handleNumberClick(this.props.playerObj.id, this.props.playerObj.team_id)}>
        <p>{this.props.playerObj.number}</p>
      </div>
    } else if (this.props.handleResultClick){
      return <div className="key" onClick={() => this.props.handleResultClick(this.props.result)}>
        <p>{this.props.result}</p>
      </div>
    } else if (this.props.keyName === "New Period"){
      return <div className="key" onClick={this.props.changePeriod}>
        <p>{this.props.keyName}</p>
      </div>
    } else if (this.props.keyName === "Reset Timer"){
      return <div className="key" onClick={this.props.resetTimer}>
        <p>{this.props.keyName}</p>
      </div>
    }
  }

} //end of class
