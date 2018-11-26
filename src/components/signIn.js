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
      <div>
        <form onSubmit={() => this.props.handleSignIn(this.state.usernameValue)}>
          <label>
            Sign In
            <input type="text" value={this.state.usernameValue} onChange={this.handleInput}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

  handleInput = (event) => {
    this.setState({
      usernameValue: event.target.value
    })
  }


} // end of class
