import React, { Component } from 'react'

export default class Key extends Component {

  constructor() {
    super()
    this.state = {
      time: "current time",
      action: "",
      number: null
    }
  }

  render() {
    return(
      <div className="key" onClick={() => this.handleActionClick(this.props.keyObj.key)}>
        <p>{this.props.keyObj.key} - {this.props.keyObj.action}</p>
      </div>
    )
  }

  handleActionClick = (key) => {
    console.log("clicked");

    if (key === "J" || key === "Y" || key === "L" || key === "E" || key === "R" || key === "A" || key === "F" || key === "K" || key === "T" || key === "O" || key === "S") {
      console.log("action");
      // this.setState({
      //   action: key
      // })
    } else if (Number.isInteger(key)) {
      console.log("number");
    }


    // if (key.key === "J") {
    //   console.log("jumper")
    // }
    // fetch('http://localhost:3000/plays', {
    //   method: "POST",
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     time: "current time",
    //
    //   })
    // })
  }

} //end of class
