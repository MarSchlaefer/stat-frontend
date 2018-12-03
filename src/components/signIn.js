import React, { Component } from 'react';

export default class SignIn extends Component {

  constructor() {
    super()
    this.state = {
      usernameValue: ""
    }
  }


  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-container">
          <h1>Welcome to Stat-team</h1>
          <br/>
          <form onSubmit={() => this.props.handleSignIn(this.state.usernameValue)}>
            <label>
              Sign In
            </label>
            <br/>
            <input type="text" value={this.state.usernameValue} onChange={this.handleInput}/>
            <br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }

  handleInput = (event) => {
    this.setState({
      usernameValue: event.target.value
    })
  }


} // end of class
