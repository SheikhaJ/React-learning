import React, { Component } from 'react'

export default class Navbar extends Component { //component it inhrite from react
    // constractor : To initialize the local state of the component by assigning an object to this.state
    constructor(){
        super() //It is necessary to call super() within the constructor. To set property or use 'this' inside the constructor it is mandatory to call super().
        //create object
        this.state = {
            item: "Home"
        }
    }
  render() {
    return (
      <div>Navbar item : {this.state.item}</div>
    )
  }
}
