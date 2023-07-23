import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* i can write html code inside div and give it className */}
        <header>
        <a href="#" className="logo">Sheikha</a>
        <ul className="nav-menu">
            <li className="nav-item"><a href="#Home" >Home</a></li>
            <li className="nav-item"><a href="#projects">project</a></li>
            <li className="nav-item"><a href="#contact">contact</a></li>
        </ul>
        </header>
      </div>
    )
  }
}
