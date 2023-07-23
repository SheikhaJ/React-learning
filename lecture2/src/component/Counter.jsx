import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state ={
           count: 0 
        }
    }
  render() {
    return (
      <>
      <h2>Counter is: {this.state.count}</h2>
      <button onClick={this.increment}>increment</button>
      <button onClick={this.decrement}>decrement</button>
      <button onClick={this.reset}>Reset</button>

      <br></br><hr></hr>


      </>
    )
  }

//   increment(){
    // alert("hey there!")
//   }

//the function should be arrow function so it can read this from class component
increment = ()=>{
    this.setState({'count': ++this.state.count})
}

decrement = ()=>{
    this.setState({'count': --this.state.count})
}


reset = ()=>{
    this.setState({'count': 0})
}

}
