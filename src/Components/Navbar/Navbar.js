import React from 'react'
import logo from '../../img/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      {/* <ul className="navbar__list">
        <li className="navbar__item">Projekty</li>
        <li className="navbar__item">O mnie</li>
      </ul> */}
      <button className="navbar__cta">Pobierz CV</button>
    </nav>
  )
}

export default Navbar;