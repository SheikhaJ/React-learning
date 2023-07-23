import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
    <>

<div className='card col-md-3'>
    <div className='card-body'>
        <h3 className='title.card'>{this.props.title}</h3>
        <p className='card-text'>{this.props.desc}</p>
    </div>
</div>


    </>
    )
  }
}
