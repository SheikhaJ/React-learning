import React, { Component } from 'react'
// import Button from './Button'
import Cards from './Cards'
import img1 from '../person_5.jpg.webp'
import img2 from '../person_1.jpg.webp'

export default class Home extends Component {
  render() {
    return (
      <>
      {/* <h2>your name is: {this.props.name}</h2> */}
      {/* <h2>your age is: {this.props.age}</h2> */}
      {/* <Button btnName="click"/> */}
      {/* <Button btnName="get started" /> */}

      <Cards pic={img1} Name="Person1" Position="HR"/>
      <Cards pic={img2} Name="Person2" Position="HR"/>

      </>
    )
  }
}
