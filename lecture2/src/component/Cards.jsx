import React, { Component } from 'react'


export default class Cards extends Component {
  render() {
    return (
        <>
        <div className='card'>
            <div className='image'>
                <img src={this.props.pic} />
                <div className='container'>  </div>
            </div>
            <div className='info'>
            <h4>{this.props.Name}</h4>
            <p>{this.props.Position}</p>
            </div>
        </div>
        </>
    )
  }
}
