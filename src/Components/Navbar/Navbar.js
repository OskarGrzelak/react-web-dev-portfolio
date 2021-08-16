import React from 'react'
import Button from '../Button/Button'
import logo from '../../img/logo.png'
import cv from '../../img/CV.pdf'
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
      <Button to={cv} ghost>
        Pobierz CV
      </Button>
    </nav>
  )
}

export default Navbar
