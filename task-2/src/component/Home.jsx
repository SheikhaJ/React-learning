import React, { Component } from 'react';
import Card from './Card'

export default class Home extends Component {
    constructor(){
      super()
      this.state={
        card:[
            {title:"fghjh", desc:"fgfdxfgyh"},
            {title:"fghjhfdddfg", desc:"fgfdxfgyh"}

        ]
      }

    }
  render() {
    return (

      <div className='container'>
        <div className='row'>
            {this.state.card.map((card)=> <Card title={card.title} desc={card.desc} />)} 
           

        </div>
      </div>
    )
  }
}
