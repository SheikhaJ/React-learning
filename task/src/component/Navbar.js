import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
	        <h2>Online Marketplace</h2>
	        <nav>
		        <ul>
		        	<li><a href="#home">Home</a></li>
		        	<li><a href="#products">Products</a></li>
		        	<li><a href="#cart">cart<i class="fa-solid fa-cart-shopping"></i></a></li>
		        </ul>
	        </nav>
        </header>
      </div>
    )
  }
}
