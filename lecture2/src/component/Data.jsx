import React, { Component } from 'react'

export default class Data extends Component {
    constructor(){
        super()
        this.state={
            users: ['Hajer', 'Buthina', 'Maisa', 'Amal', 'Fatema', 'Sheikha', 'khalil', 'Alaina', 'Shrooq', 'Arwa'],
            color: ['red', 'blue', 'green', 'yellow']
        }

    }
  render() {
    let {color} = this.state //we can use let{color, users} = this.state 
    return (
      <>
      <h3>Users: </h3>
      <ol>
        {this.state.users.map((u)=> <li>{u}</li>)}
      </ol>
      <br></br>
      <h3>color: </h3>
      <ul>
      {color.map((c)=> <li>{c}</li>)}
      </ul>
      <br></br><hr></hr><br></br>
      </>
    )
  }
}
