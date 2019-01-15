import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/LogoNeology.png'

export default class Navbar extends Component {
  render() {
    const lang = "ENG"
    return (
      <div className="nav">
        <Link to='/'><img src={logo} alt="logo pic"/></Link>
        <div>
          <Link style={{backgroundColor:"#ffb600", marginLeft:"20px"}} to='/'><p style={{color:"#fff"}}>Home</p></Link>
          <Link to='/solutions'><p>Solutions</p></Link>
          <Link to='/about'><p>About Us</p></Link>
          <Link to='/products'><p>Products</p></Link>
          <Link to='/subsidiaries'><p>Subsidiaries</p></Link>
          <Link to='/where'><p>Where we are</p></Link>
          <Link to='/blog'><p>Blog</p></Link>
          <Link style={{backgroundColor:"#ffb600"}} to='/contact'><p style={{color:"#fff"}}>Contact</p></Link>
          <Link to='/lang'><p>Language <strong style={{color:"#4d4d4d"}}>{lang}</strong></p></Link>
        </div>
      </div>
    )
  }
}