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
      return <div className="key" onClick={() => this.props.handleNumberClick(this.props.playerObj.id)}>
        <p>{this.props.playerObj.number}</p>
      </div>
    } else {
      return <div className="key" onClick={() => this.props.handleResultClick(this.props.result)}>
        <p>{this.props.result}</p>
      </div>
    }
  }

} //end of class
