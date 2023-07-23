import React, { Component } from 'react'
import logo from '../image/logo-dark.png'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <div className="nav">
        <a href='#' className='logo'>
            <img src={logo}/>
        </a>
        <div className='right-nav'>
          <ul>
            <li><a href="#">HOME     </a> </li>
            <li><a href="#">ABOUT    </a> </li>
            <li><a href="#">SERVICES </a> </li>
            <li><a href="#">PRICING  </a>  </li>
            <li><a href="#">NEWS     </a>  </li>
            <li ><a className='contact' href="#">CONTACT    </a>  </li>
          </ul>
        </div>
      </div>
      </>
    )
  }
}
