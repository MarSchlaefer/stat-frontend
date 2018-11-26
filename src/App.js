import React, { Component } from 'react';
import './App.css';
import SignIn from './components/signIn'
import Client from './components/client/client'
import Admin from './components/admin/admin'

class App extends Component {

  constructor() {
    super()
    this.state = {
      game: [],
      signIn: "",
      keyPress: ""
    }
  }

  componentDidMount() {
    this.getGame()
  }

  render() {
    return (
      <div className="App">
        {this.renderContent()}
      </div>
    );
  }

  renderContent = () => {
    if (this.state.signIn === "admin") {
      return <div className="employee">
        <Admin gameDetails={this.state.game}/>
      </div>
    } else if (this.state.signIn === "client"){
      return <div className="client">
        <Client gameDetails={this.state.game}/>
      </div>
    } else {
      return <div className="sign-in">
        <SignIn handleSignIn={this.handleSignIn}/>
      </div>
    }
  }


  getGame = () => {
    fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        game: json
      })
    })
  }

  handleSignIn = (username) => {
    this.setState({
      signIn: username
    })
  }

  // handleKeyPress = (event) => {
  //   this.setState({
  //     keyPress: event.keyCode
  //   }, () => console.log(this.state.keyPress))
  // }

} // end of class

export default App;
